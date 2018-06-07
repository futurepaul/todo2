import * as actions from "./actions";
import { set, toggle, unset, when } from "cerebral/operators";
import { props, state } from "cerebral/tags";

export const increment = actions.increment;

export const decrement = actions.decrement;

export const toggleCompleted = toggle(state`todos.${props`id`}.completed`);
