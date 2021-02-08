import React from "react";
import { Board } from "../../store/types";
import { useDrop } from "react-dnd";
import {
  Container,
  EmptyText,
  Header,
  ListContainer,
  ToDoPlaceholder,
} from "./style";
import { NewTask } from "../NewTask";
import { actions } from "../../store/actions";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { ListItem } from "./ListItem";
import { Menu } from "../Menu";

export const ToDoList: React.FC<{
  board: Board;
  onDrop: (item: any) => void;
  clearGroup: () => void;
}> = ({ board: { id, title, todos }, onDrop }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = React.useState(false);
  const [{ isOver }, drop] = useDrop({
    drop: onDrop,
    accept: "*",
    collect: (monitor: { isOver: () => any; canDrop: () => any }) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const items = [
    {
      label: "Clear board",
      onClick: () => dispatch(actions.boardCleared(id)),
    },
    {
      label: "Filter A-Z",
      onClick: () => dispatch(actions.boardFilteredAZ(id)),
    },
    {
      label: "Filter Z-A",
      onClick: () => dispatch(actions.boardFilteredZA(id)),
    },
  ];
  return (
    <Container ref={drop}>
      <Header>
        <h3>{title}</h3>
        <Menu items={items} />
      </Header>
      <ListContainer>
        {todos.map((todo) => (
          <ListItem key={todo.id} todo={todo} />
        ))}
        {isOver && <ToDoPlaceholder />}
        {todos.length < 1 && !isOpen && !isOver && (
          <EmptyText>No tasks to show</EmptyText>
        )}
        <NewTask
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          createTask={(content) =>
            dispatch(
              actions.todoCreated({ todo: { id: uuid(), content }, board: id })
            )
          }
        />
      </ListContainer>
    </Container>
  );
};
