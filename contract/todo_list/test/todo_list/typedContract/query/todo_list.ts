/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@supercolony/typechain-types';
import type { QueryReturnType } from '@supercolony/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/todo_list';
import type * as ReturnTypes from '../types-returns/todo_list';
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
	* createTodoItem
	*
	* @param { string } itemName,
	* @param { ArgumentTypes.Prioritise } priority,
	* @returns { Result<null, ReturnTypes.TodoError> }
	*/
	"createTodoItem" (
		itemName: string,
		priority: ArgumentTypes.Prioritise,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.TodoError> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "createTodoItem", [itemName, priority], __options , (result) => { return handleReturnType(result, getTypeDescription(10, 'todo_list')); });
	}

	/**
	* updateTodoItem
	*
	* @param { (number | string | BN) } itemId,
	* @returns { Result<null, ReturnTypes.TodoError> }
	*/
	"updateTodoItem" (
		itemId: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.TodoError> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "updateTodoItem", [itemId], __options , (result) => { return handleReturnType(result, getTypeDescription(10, 'todo_list')); });
	}

	/**
	* getTodoList
	*
	* @returns { Array<ReturnTypes.TodoItem> }
	*/
	"getTodoList" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Array<ReturnTypes.TodoItem> > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "getTodoList", [], __options , (result) => { return handleReturnType(result, getTypeDescription(13, 'todo_list')); });
	}

	/**
	* getAllList
	*
	* @returns { Array<ReturnTypes.TodoItem> }
	*/
	"getAllList" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Array<ReturnTypes.TodoItem> > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "getAllList", [], __options , (result) => { return handleReturnType(result, getTypeDescription(13, 'todo_list')); });
	}

	/**
	* removeTodoItem
	*
	* @param { (number | string | BN) } itemId,
	* @returns { Result<null, ReturnTypes.TodoError> }
	*/
	"removeTodoItem" (
		itemId: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.TodoError> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "removeTodoItem", [itemId], __options , (result) => { return handleReturnType(result, getTypeDescription(10, 'todo_list')); });
	}

	/**
	* getTodoLength
	*
	* @returns { number }
	*/
	"getTodoLength" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< number > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "getTodoLength", [], __options );
	}

}