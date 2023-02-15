/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@supercolony/typechain-types';
import { txSignAndSend } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/todo_list';
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
	* createTodoItem
	*
	* @param { string } itemName,
	* @param { ArgumentTypes.Prioritise } priority,
	*/
	"createTodoItem" (
		itemName: string,
		priority: ArgumentTypes.Prioritise,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "createTodoItem", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "todo_list");
		}, [itemName, priority], __options);
	}

	/**
	* updateTodoItem
	*
	* @param { (number | string | BN) } itemId,
	*/
	"updateTodoItem" (
		itemId: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "updateTodoItem", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "todo_list");
		}, [itemId], __options);
	}

	/**
	* getTodoList
	*
	*/
	"getTodoList" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getTodoList", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "todo_list");
		}, [], __options);
	}

	/**
	* removeTodoItem
	*
	* @param { (number | string | BN) } itemId,
	*/
	"removeTodoItem" (
		itemId: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "removeTodoItem", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "todo_list");
		}, [itemId], __options);
	}

	/**
	* getTodoLength
	*
	*/
	"getTodoLength" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getTodoLength", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "todo_list");
		}, [], __options);
	}

}