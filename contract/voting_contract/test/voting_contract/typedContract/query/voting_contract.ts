/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@supercolony/typechain-types';
import type { QueryReturnType } from '@supercolony/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/voting_contract';
import type * as ReturnTypes from '../types-returns/voting_contract';
import type BN from 'bn.js';
import {ReturnNumber} from '@supercolony/typechain-types';
import {getTypeDescription} from './../shared/utils';


export default class Methods {
	private __nativeContract : ContractPromise;
	private __callerAddress : string;

	constructor(
		nativeContract : ContractPromise,
		callerAddress : string,
	) {
		this.__nativeContract = nativeContract;
		this.__callerAddress = callerAddress;
	}

	/**
	* createProposal
	*
	* @param { string } proposalName,
	* @returns { Result<null, ReturnTypes.VotingProposalError> }
	*/
	"createProposal" (
		proposalName: string,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.VotingProposalError> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "createProposal", [proposalName], __options , (result) => { return handleReturnType(result, getTypeDescription(14, 'voting_contract')); });
	}

	/**
	* changeProposalStatus
	*
	* @param { (number | string | BN) } id,
	* @returns { Result<null, ReturnTypes.VotingProposalError> }
	*/
	"changeProposalStatus" (
		id: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.VotingProposalError> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "changeProposalStatus", [id], __options , (result) => { return handleReturnType(result, getTypeDescription(14, 'voting_contract')); });
	}

	/**
	* registerUser
	*
	* @param { ArgumentTypes.AccountId } userAccount,
	* @param { string } userName,
	* @returns { Result<null, ReturnTypes.VotingProposalError> }
	*/
	"registerUser" (
		userAccount: ArgumentTypes.AccountId,
		userName: string,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.VotingProposalError> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "registerUser", [userAccount, userName], __options , (result) => { return handleReturnType(result, getTypeDescription(14, 'voting_contract')); });
	}

	/**
	* voteProposal
	*
	* @param { ArgumentTypes.Vote } vote,
	* @param { (number | string | BN) } id,
	* @returns { Result<null, ReturnTypes.VotingProposalError> }
	*/
	"voteProposal" (
		vote: ArgumentTypes.Vote,
		id: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.VotingProposalError> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "voteProposal", [vote, id], __options , (result) => { return handleReturnType(result, getTypeDescription(14, 'voting_contract')); });
	}

	/**
	* getActiveProposal
	*
	* @returns { Array<ReturnTypes.Proposal> }
	*/
	"getActiveProposal" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Array<ReturnTypes.Proposal> > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "getActiveProposal", [], __options , (result) => { return handleReturnType(result, getTypeDescription(11, 'voting_contract')); });
	}

	/**
	* getAllProposal
	*
	* @returns { Array<ReturnTypes.Proposal> }
	*/
	"getAllProposal" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Array<ReturnTypes.Proposal> > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "getAllProposal", [], __options , (result) => { return handleReturnType(result, getTypeDescription(11, 'voting_contract')); });
	}

	/**
	* getAllUsers
	*
	* @returns { Array<ReturnTypes.User> }
	*/
	"getAllUsers" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Array<ReturnTypes.User> > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "getAllUsers", [], __options , (result) => { return handleReturnType(result, getTypeDescription(18, 'voting_contract')); });
	}

}