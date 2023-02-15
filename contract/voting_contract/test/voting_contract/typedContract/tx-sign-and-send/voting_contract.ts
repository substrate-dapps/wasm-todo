/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@supercolony/typechain-types';
import { txSignAndSend } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/voting_contract';
import type BN from 'bn.js';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";


export default class Methods {
	private __nativeContract : ContractPromise;
	private __keyringPair : KeyringPair;
	private __apiPromise: ApiPromise;

	constructor(
		apiPromise: ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
	}

	/**
	* createProposal
	*
	* @param { string } proposalName,
	*/
	"createProposal" (
		proposalName: string,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "createProposal", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "voting_contract");
		}, [proposalName], __options);
	}

	/**
	* changeProposalStatus
	*
	* @param { (number | string | BN) } id,
	*/
	"changeProposalStatus" (
		id: (number | string | BN),
		__options ? : GasLimit,
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
	*/
	"registerUser" (
		userAccount: ArgumentTypes.AccountId,
		userName: string,
		__options ? : GasLimit,
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
	*/
	"voteProposal" (
		vote: ArgumentTypes.Vote,
		id: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "voteProposal", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "voting_contract");
		}, [vote, id], __options);
	}

	/**
	* getActiveProposal
	*
	*/
	"getActiveProposal" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getActiveProposal", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "voting_contract");
		}, [], __options);
	}

	/**
	* getAllProposal
	*
	*/
	"getAllProposal" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getAllProposal", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "voting_contract");
		}, [], __options);
	}

	/**
	* getAllUsers
	*
	*/
	"getAllUsers" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getAllUsers", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "voting_contract");
		}, [], __options);
	}

}