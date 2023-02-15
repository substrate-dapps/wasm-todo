import type BN from 'bn.js';

export type AccountId = string | number[]

export type Proposal = {
	proposalName: string,
	voteAye: (number | string | BN),
	voteNye: (number | string | BN),
	totalVote: (number | string | BN),
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

