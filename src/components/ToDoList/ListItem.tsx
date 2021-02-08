import React from "react";
import { useTypedSelector } from "../../store";
import { ToDo as ToDoType } from "../../store/types";
import { useDispatch } from "react-redux";
import { actions } from "../../store/actions";
import { EditToDo } from "../EditToDo";
import { ToDo } from "../ToDo";

export const ListItem: React.FC<{
  todo: ToDoType;
}> = ({ todo }) => {
  const dispatch = useDispatch();
  const isInEditMode = useTypedSelector((state) => state.editId === todo.id);

  return (
    <div style={{ position: "relative" }}>
      <ToDo
        todo={todo}
        editToDo={() => dispatch(actions.todoEditModeEntered(todo.id))}
      />
      {isInEditMode && (
        <EditToDo
          content={todo.content}
          updateToDo={(newContent) =>
            dispatch(actions.todoEdited({ id: todo.id, newContent }))
          }
          deleteToDo={() => dispatch(actions.todoDeleted(todo.id))}
          cancelEditMode={() => dispatch(actions.editModeCancelled())}
        />
      )}
    </div>
  );
};
