#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

#[ink::contract]
mod voting_contract {

    use ink_env::debug_print;
    use ink_prelude::{string::String, vec::Vec};
    use ink_storage::traits::{PackedLayout, SpreadAllocate, SpreadLayout};
    use ink_storage::Mapping;

    pub type ProposalId = i32;
    pub type UserId = i32;

    #[derive(
        Debug,
        scale::Decode,
        Default,
        scale::Encode,
        Eq,
        PartialEq,
        Clone,
        PackedLayout,
        SpreadLayout,
    )]
    #[cfg_attr(
        feature = "std",
        derive(scale_info::TypeInfo, ink_storage::traits::StorageLayout)
    )]
    pub struct Proposal {
        proposal_name: String,
        vote_aye: i32,
        vote_nye: i32,
        total_vote: i32,
        proposal_status: bool,
    }

    #[derive(
        Debug, scale::Decode, scale::Encode, Eq, PartialEq, Clone, PackedLayout, SpreadLayout,
    )]
    #[cfg_attr(
        feature = "std",
        derive(scale_info::TypeInfo, ink_storage::traits::StorageLayout)
    )]
    pub struct User {
        user_name: String,
        user_account: AccountId,
        voted_proposal: Vec<Proposal>,
    }

    impl Default for User {
        fn default() -> Self {
            Self {
                user_name: String::new(),
                user_account: AccountId::default(),
                voted_proposal: Vec::new(),
            }
        }
    }

    #[derive(
        Debug, scale::Decode, scale::Encode, Eq, PartialEq, Clone, PackedLayout, SpreadLayout,
    )]
    #[cfg_attr(
        feature = "std",
        derive(scale_info::TypeInfo, ink_storage::traits::StorageLayout)
    )]
    pub enum Vote {
        Aye,
        Nye,
    }

    #[ink(storage)]
    #[derive(SpreadAllocate)]
    pub struct VotingContract {
        owner: AccountId,
        proposal: Mapping<ProposalId, Proposal>,
        user: Mapping<UserId, User>,
        proposal_id: ProposalId,
        user_id: UserId,
        voted: Mapping<(AccountId, ProposalId), bool>,
    }

    #[derive(
        Debug, scale::Decode, scale::Encode, Eq, PartialEq, Clone, PackedLayout, SpreadLayout,
    )]
    #[cfg_attr(
        feature = "std",
        derive(scale_info::TypeInfo, ink_storage::traits::StorageLayout)
    )]
    pub enum VotingProposalError {
        NotOwner,
        ProposalNotFound,
        AccountNotRegistered,
        ProposalStatusError,
        AlreadyVoted,
    }

    // Proposal Created Event
    #[ink(event)]
    pub struct ProposalCreated {
        #[ink(topic)]
        pub proposal: Proposal,
    }

    #[ink(event)]
    pub struct GetProposal {
        #[ink(topic)]
        pub proposal: Proposal,
    }

    #[ink(event)]
    pub struct UserCreated {
        #[ink(topic)]
        pub user: User,
    }

    #[ink(event)]
    pub struct ProposalStatusChanged {
        #[ink(topic)]
        pub proposal: Proposal,
    }

    #[ink(event)]
    pub struct ProposalVoted {
        #[ink(topic)]
        pub proposal: String,
    }

    impl VotingContract {
        #[ink(constructor)]
        pub fn new(initial_value: bool) -> Self {
            ink_lang::utils::initialize_contract(|_contract: &mut Self| {});
            let caller = Self::env().caller();
            Self {
                owner: caller,
                proposal: Mapping::default(),
                user: Mapping::default(),
                proposal_id: Default::default(),
                user_id: Default::default(),
                voted: Mapping::default(),
            }
        }

        #[ink(message)]
        pub fn create_proposal(
            &mut self,
            proposal_name: String,
        ) -> Result<(), VotingProposalError> {
            if !self.check_owner(self.env().caller()) {
                return Err(VotingProposalError::NotOwner);
            }

            let proposal = Proposal {
                proposal_name,
                vote_aye: 0,
                vote_nye: 0,
                total_vote: 0,
                proposal_status: false,
            };

            let proposal_id = self.get_next_id();

            self.proposal.insert(proposal_id, &proposal);
            self.env().emit_event(ProposalCreated { proposal });
            Ok(())
        }

        #[ink(message)]
        pub fn change_proposal_status(
            &mut self,
            id: ProposalId,
        ) -> Result<(), VotingProposalError> {
            if !self.check_owner(self.env().caller()) {
                return Err(VotingProposalError::NotOwner);
            }

            let proposal = self.proposal.get(id);
            match proposal {
                None => return Err(VotingProposalError::AccountNotRegistered),
                Some(v) => {
                    let p = Proposal {
                        proposal_name: v.proposal_name,
                        vote_aye: 0,
                        vote_nye: 0,
                        total_vote: 0,
                        proposal_status: !v.proposal_status,
                    };
                    self.proposal.insert(id, &p);
                }
            }

            Ok(())
        }

        #[ink(message)]
        pub fn register_user(
            &mut self,
            user_account: AccountId,
            user_name: String,
        ) -> Result<(), VotingProposalError> {
            if !self.check_owner(self.env().caller()) {
                return Err(VotingProposalError::NotOwner);
            }

            let user = User {
                user_name,
                user_account,
                voted_proposal: Default::default(),
            };

            let uid = self.get_next_userid();

            self.user.insert(uid, &user);
            self.env().emit_event(UserCreated { user });

            Ok(())
        }

        #[ink(message)]
        pub fn vote_proposal(
            &mut self,
            vote: Vote,
            id: ProposalId,
        ) -> Result<(), VotingProposalError> {
            let proposal = self.proposal.get(id).unwrap_or_default();

            if !proposal.proposal_status {
                return Err(VotingProposalError::ProposalStatusError);
            }

            let caller = self.env().caller();

            if !self.check_register_user(caller) {
                return Err(VotingProposalError::AccountNotRegistered);
            }

            let is_voted = self.voted.get((caller, id)).unwrap_or_default();
            if is_voted {
                return Err(VotingProposalError::AlreadyVoted);
            }
            debug_print!("is voted: {}", is_voted);

            match vote {
                Vote::Aye => {
                    let p = Proposal {
                        proposal_name: proposal.proposal_name,
                        vote_aye: proposal.vote_aye + 1,
                        vote_nye: proposal.vote_nye,
                        total_vote: proposal.total_vote + 1,
                        proposal_status: proposal.proposal_status,
                    };
                    self.proposal.insert(id, &p);
                    self.voted.insert((caller, id), &true);
                }
                Vote::Nye => {
                    let p = Proposal {
                        proposal_name: proposal.proposal_name,
                        vote_aye: proposal.vote_aye,
                        vote_nye: proposal.vote_nye + 1,
                        total_vote: proposal.total_vote + 1,
                        proposal_status: proposal.proposal_status,
                    };
                    self.proposal.insert(id, &p);
                    self.voted.insert((caller, id), &true);
                    // proposal.vote_nye += 1;
                }
            }

            Ok(())
        }

        #[ink(message)]
        pub fn get_active_proposal(&mut self) -> Vec<Proposal> {
            let mut active_result: Vec<Proposal> = Vec::new();
            for i in 0..self.proposal_id {
                match self.proposal.get(i) {
                    Some(value) => {
                        if value.proposal_status == true {
                            active_result.push(value);
                        }
                    }
                    None => (),
                }
            }
            active_result
        }

        #[ink(message)]
        pub fn get_all_proposal(&mut self) -> Vec<Proposal> {
            let mut result: Vec<Proposal> = Vec::new();
            for i in 0..self.proposal_id {
                match self.proposal.get(i) {
                    Some(value) => result.push(value),
                    None => (),
                }
            }
            result
        }

        #[ink(message)]
        pub fn get_all_users(&mut self) -> Vec<User> {
            let mut result: Vec<User> = Vec::new();
            for i in 0..self.user_id {
                match self.user.get(i) {
                    Some(value) => result.push(value),
                    None => (),
                }
            }
            result
        }

        // Generate next proposal id by incrementing with 1
        pub fn get_next_id(&mut self) -> ProposalId {
            let id = self.proposal_id;
            self.proposal_id += 1;
            id
        }

        pub fn get_next_userid(&mut self) -> UserId {
            let id = self.user_id;
            self.user_id += 1;
            id
        }

        // Check owner
        pub fn check_owner(&self, user: AccountId) -> bool {
            if self.owner == user {
                true
            } else {
                false
            }
        }

        pub fn check_register_user(&mut self, caller: AccountId) -> bool {
            let user = self.get_all_users();
            let mut _ruser = false;

            for u in user.iter() {
                if u.user_account == caller {
                    _ruser = true;
                    break;
                }
            }

            _ruser
        }
    }
}
