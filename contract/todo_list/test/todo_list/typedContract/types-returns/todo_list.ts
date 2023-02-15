import type BN from 'bn.js';
import type {ReturnNumber} from '@supercolony/typechain-types';

export type AccountId = string | number[]

export type TodoItem = {
	owner: AccountId,
	itemName: string,
	isCompleted: boolean,
	priority: Prioritise
}

export enum Prioritise {
	high = 'HIGH',
	low = 'LOW',
	medium = 'MEDIUM'
}

export type Key = string | number[]

export enum TodoError {
	itemNotExists = 'ItemNotExists',
	notAOwner = 'NotAOwner'
}

