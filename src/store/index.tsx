import { Actions, actions } from "./actions";
import { Reducer, createStore, applyMiddleware } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import produce from "immer";
import { getType } from "typesafe-actions";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { Board } from "./types";

const persistConfig = {
  key: "root",
  storage,
};

const initialState = () => ({
  boards: [
    { id: "1", title: "Life changing", todos: [] },
    { id: "2", title: "Important", todos: [] },
    { id: "3", title: "Meh", todos: [] },
  ] as Board[],
  editId: undefined as undefined | string,
  sort: "Index",
  sorted: false,
});

export type State = Readonly<ReturnType<typeof initialState>>;

export const rootReducer: Reducer<State, Actions> = (
  state = initialState(),
  action: Actions
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case getType(actions.todoEditModeEntered):
        draft.editId = action.payload;
        break;

      case getType(actions.editModeCancelled):
        draft.editId = undefined;
        break;

      case getType(actions.todoCreated): {
        const board = draft.boards.find(
          (board) => board.id === action.payload.board
        );
        if (board) {
          board.todos = [...board.todos, action.payload.todo];
        }
        break;
      }

      case getType(actions.todoEdited): {
        const todo = draft.boards
          .flatMap((board) => board.todos)
          .find((todo) => todo.id === action.payload.id);
        if (todo) todo.content = action.payload.newContent;
        draft.editId = undefined;
        break;
      }

      case getType(actions.todoBoardChanged): {
        const oldBoard = draft.boards.find((board) =>
          board.todos.map((todo) => todo.id).includes(action.payload.id)
        )!;
        const todo = oldBoard.todos.find(
          (todo) => todo.id === action.payload.id
        );
        if (todo && oldBoard) {
          const newBoard = draft.boards.find(
            (board) => board.id === action.payload.newBoard
          );
          oldBoard.todos = [...oldBoard.todos.filter((t) => t.id !== todo.id)];
          if (newBoard) newBoard.todos = [...newBoard.todos, todo];
        }
        break;
      }

      case getType(actions.todoDeleted): {
        const board = draft.boards.find((board) =>
          board.todos.map((todo) => todo.id).includes(action.payload)
        )!;
        board.todos = board.todos.filter((todo) => todo.id !== action.payload);
        break;
      }

      case getType(actions.boardCleared):
        const board = draft.boards.find((board) => board.id === action.payload);
        if (board) board.todos = [];
        break;

      case getType(actions.boardFilteredAZ): {
        const board = draft.boards.find((board) => board.id === action.payload);
        if (board) {
          board.todos = [
            ...board.todos.sort((a, b) =>
              a.content.toLowerCase().localeCompare(b.content.toLowerCase())
            ),
          ];
        }
        break;
      }

      case getType(actions.boardFilteredZA): {
        const board = draft.boards.find((board) => board.id === action.payload);
        if (board) {
          board.todos = [
            ...board.todos.sort((a, b) =>
              a.content.toLowerCase().localeCompare(b.content.toLowerCase())
            ),
          ].reverse();
        }
        break;
      }

      case getType(actions.allTodosCleared):
        draft.boards.forEach((board) => (board.todos = []));
        break;
    }
  });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware())
);
//@ts-ignore
export const persistor = persistStore(store); // bad practice with the ignore above, but typescript error was taking up too much time.

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
