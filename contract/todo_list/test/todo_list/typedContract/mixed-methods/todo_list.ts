/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@supercolony/typechain-types';
import type { QueryReturnType } from '@supercolony/typechain-types';
import { queryOkJSON, queryJSON, handleReturnType } from '@supercolony/typechain-types';
import { txSignAndSend } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/todo_list';
import type * as ReturnTypes from '../types-returns/todo_list';
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
	* createTodoItem
	*
	* @param { string } itemName,
	* @param { ArgumentTypes.Prioritise } priority,
	* @returns { void }
	*/
	"createTodoItem" (
		itemName: string,
		priority: ArgumentTypes.Prioritise,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "createTodoItem", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "todo_list");
		}, [itemName, priority], __options);
	}

	/**
	* updateTodoItem
	*
	* @param { (number | string | BN) } itemId,
	* @returns { void }
	*/
	"updateTodoItem" (
		itemId: (number | string | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "updateTodoItem", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "todo_list");
		}, [itemId], __options);
	}

	/**
	* getTodoList
	*
	* @returns { Array<ReturnTypes.TodoItem> }
	*/
	"getTodoList" (
		__options: GasLimit,
	): Promise< QueryReturnType< Array<ReturnTypes.TodoItem> > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "getTodoList", [], __options, (result) => { return handleReturnType(result, getTypeDescription(13, 'todo_list')); });
	}

	/**
	* removeTodoItem
	*
	* @param { (number | string | BN) } itemId,
	* @returns { void }
	*/
	"removeTodoItem" (
		itemId: (number | string | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "removeTodoItem", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "todo_list");
		}, [itemId], __options);
	}

	/**
	* getTodoLength
	*
	* @returns { number }
	*/
	"getTodoLength" (
		__options: GasLimit,
	): Promise< QueryReturnType< number > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "getTodoLength", [], __options);
	}

}