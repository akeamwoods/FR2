import { ActionType, createAction } from "typesafe-actions";
import { ToDo } from "./types";

const todoCreated = createAction("todo created")<{
  todo: ToDo;
  board: string;
}>();
const todoEdited = createAction("todo edited")<{
  id: string;
  newContent: string;
}>();
const todoDeleted = createAction("todo deleted")<string>();
const todoBoardChanged = createAction("todo board changed")<{
  id: string;
  newBoard: string;
}>();
const boardCleared = createAction("board cleared")<string>();
const boardFilteredAZ = createAction("board filtered a-z")<string>();
const boardFilteredZA = createAction("board filtered z-a")<string>();
const allTodosCleared = createAction("all todos cleared")<void>();
const todoEditModeEntered = createAction("todo edit mode entered")<string>();
const editModeCancelled = createAction("edit mode cancelled")();

export const actions = {
  todoCreated,
  todoEdited,
  todoDeleted,
  todoBoardChanged,
  boardCleared,
  allTodosCleared,
  todoEditModeEntered,
  editModeCancelled,
  boardFilteredAZ,
  boardFilteredZA,
};

export type Actions = ActionType<typeof actions>;
