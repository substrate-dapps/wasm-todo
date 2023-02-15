import type {ReturnNumber} from "@supercolony/typechain-types";
import type * as ReturnTypes from '../types-returns/todo_list';

export interface ItemCreated {
	item: ReturnTypes.TodoItem;
}

export interface ItemUpdated {
	item: ReturnTypes.TodoItem;
}

export interface ItemRemoved {
	itemId: number;
}

