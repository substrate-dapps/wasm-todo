/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@supercolony/typechain-types';
import type { QueryReturnType } from '@supercolony/typechain-types';
import { queryOkJSON, queryJSON, handleReturnType } from '@supercolony/typechain-types';
import { txSignAndSend } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/voting_contract';
import type * as ReturnTypes from '../types-returns/voting_contract';
import type BN from 'bn.js';
import {ReturnNumber} from '@supercolony/typechain-types';
import {getTypeDescription} from './../shared/utils';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";


export default class Methods {
	private __nativeContract : ContractPromise;
	private __keyringPair : KeyringPair;
	private __callerAddress : string;
	private __apiPromise: ApiPromise;

	constructor(
		apiPromise : ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
		this.__callerAddress = keyringPair.address;
	}

	/**
	* createProposal
	*
	* @param { string } proposalName,
	* @returns { void }
	*/
	"createProposal" (
		proposalName: string,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "createProposal", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "voting_contract");
		}, [proposalName], __options);
	}

	/**
	* changeProposalStatus
	*
	* @param { (number | string | BN) } id,
	* @returns { void }
	*/
	"changeProposalStatus" (
		id: (number | string | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "changeProposalStatus", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "voting_contract");
		}, [id], __options);
	}

	/**
	* registerUser
	*
	* @param { ArgumentTypes.AccountId } userAccount,
	* @param { string } userName,
	* @returns { void }
	*/
	"registerUser" (
		userAccount: ArgumentTypes.AccountId,
		userName: string,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "registerUser", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "voting_contract");
		}, [userAccount, userName], __options);
	}

	/**
	* voteProposal
	*
	* @param { ArgumentTypes.Vote } vote,
	* @param { (number | string | BN) } id,
	* @returns { void }
	*/
	"voteProposal" (
		vote: ArgumentTypes.Vote,
		id: (number | string | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "voteProposal", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "voting_contract");
		}, [vote, id], __options);
	}

	/**
	* getActiveProposal
	*
	* @returns { void }
	*/
	"getActiveProposal" (
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getActiveProposal", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "voting_contract");
		}, [], __options);
	}

	/**
	* getAllProposal
	*
	* @returns { void }
	*/
	"getAllProposal" (
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getAllProposal", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "voting_contract");
		}, [], __options);
	}

	/**
	* getAllUsers
	*
	* @returns { void }
	*/
	"getAllUsers" (
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getAllUsers", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "voting_contract");
		}, [], __options);
	}

}