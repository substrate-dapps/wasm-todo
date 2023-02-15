/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@supercolony/typechain-types';
import { buildSubmittableExtrinsic } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/todo_list';
import type BN from 'bn.js';



export default class Methods {
	private __nativeContract : ContractPromise;

	constructor(
		nativeContract : ContractPromise,
	) {
		this.__nativeContract = nativeContract;
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
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "createTodoItem", [itemName, priority], __options);
	}

	/**
	 * updateTodoItem
	 *
	 * @param { (number | string | BN) } itemId,
	*/
	"updateTodoItem" (
		itemId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "updateTodoItem", [itemId], __options);
	}

	/**
	 * getTodoList
	 *
	*/
	"getTodoList" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "getTodoList", [], __options);
	}

	/**
	 * getAllList
	 *
	*/
	"getAllList" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "getAllList", [], __options);
	}

	/**
	 * removeTodoItem
	 *
	 * @param { (number | string | BN) } itemId,
	*/
	"removeTodoItem" (
		itemId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "removeTodoItem", [itemId], __options);
	}

	/**
	 * getTodoLength
	 *
	*/
	"getTodoLength" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "getTodoLength", [], __options);
	}

}