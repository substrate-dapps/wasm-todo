import type BN from 'bn.js';
import type {ReturnNumber} from '@supercolony/typechain-types';

export type AccountId = string | number[]

export type Proposal = {
	proposalName: string,
	voteAye: number,
	voteNye: number,
	totalVote: number,
	proposalStatus: boolean
}

export type Key = string | number[]

export type User = {
	userName: string,
	userAccount: AccountId,
	votedProposal: Array<Proposal>
}

export enum VotingProposalError {
	notOwner = 'NotOwner',
	proposalNotFound = 'ProposalNotFound',
	accountNotRegistered = 'AccountNotRegistered',
	proposalStatusError = 'ProposalStatusError',
	alreadyVoted = 'AlreadyVoted'
}

export enum Vote {
	aye = 'Aye',
	nye = 'Nye'
}

