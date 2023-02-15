import type {ReturnNumber} from "@supercolony/typechain-types";
import type * as ReturnTypes from '../types-returns/voting_contract';

export interface ProposalCreated {
	proposal: ReturnTypes.Proposal;
}

export interface GetProposal {
	proposal: ReturnTypes.Proposal;
}

export interface UserCreated {
	user: ReturnTypes.User;
}

export interface ProposalStatusChanged {
	proposal: ReturnTypes.Proposal;
}

export interface ProposalVoted {
	proposal: string;
}

