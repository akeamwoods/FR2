import React from "react";
import { useDispatch } from "react-redux";
import { ToDoList } from "../components/ToDoList";
import { useTypedSelector } from "../store";
import { actions } from "../store/actions";
import { Container } from "./style";

export const ToDoPage: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const boards = useTypedSelector((state) => state.boards);
  return (
    <Container>
      {boards.map((board) => (
        <ToDoList
          key={board.id}
          board={board}
          clearGroup={() => dispatch(actions.boardCleared(board.id))}
          onDrop={(item) =>
            dispatch(
              actions.todoBoardChanged({
                newBoard: board.id,
                id: item.id,
              })
            )
          }
        />
      ))}
    </Container>
  );
};
