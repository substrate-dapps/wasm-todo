/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@supercolony/typechain-types';
import { buildSubmittableExtrinsic } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/voting_contract';
import type BN from 'bn.js';



export default class Methods {
	private __nativeContract : ContractPromise;

	constructor(
		nativeContract : ContractPromise,
	) {
		this.__nativeContract = nativeContract;
	}
	/**
	 * createProposal
	 *
	 * @param { string } proposalName,
	*/
	"createProposal" (
		proposalName: string,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "createProposal", [proposalName], __options);
	}

	/**
	 * changeProposalStatus
	 *
	 * @param { (number | string | BN) } id,
	*/
	"changeProposalStatus" (
		id: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "changeProposalStatus", [id], __options);
	}

	/**
	 * registerUser
	 *
	 * @param { ArgumentTypes.AccountId } userAccount,
	 * @param { string } userName,
	*/
	"registerUser" (
		userAccount: ArgumentTypes.AccountId,
		userName: string,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "registerUser", [userAccount, userName], __options);
	}

	/**
	 * voteProposal
	 *
	 * @param { ArgumentTypes.Vote } vote,
	 * @param { (number | string | BN) } id,
	*/
	"voteProposal" (
		vote: ArgumentTypes.Vote,
		id: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "voteProposal", [vote, id], __options);
	}

	/**
	 * getActiveProposal
	 *
	*/
	"getActiveProposal" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "getActiveProposal", [], __options);
	}

	/**
	 * getAllProposal
	 *
	*/
	"getAllProposal" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "getAllProposal", [], __options);
	}

	/**
	 * getAllUsers
	 *
	*/
	"getAllUsers" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "getAllUsers", [], __options);
	}

}