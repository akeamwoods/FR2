import React, { useState } from "react";
import { ToDo as ToDoType } from "../../store/types";
import { useDrag } from "react-dnd";
import { Container, EditButton } from "./style";
import { MdEdit } from "react-icons/md";

export const ToDo: React.FC<{
  todo: ToDoType;
  editToDo: () => void;
}> = ({ todo: { content, id }, editToDo }) => {
  const [isOver, setIsOver] = useState(false);
  const [, drag] = useDrag({
    item: { id, type: "*" },
    collect: (monitor: { isDragging: () => any }) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    editToDo();
  };
  return (
    <Container
      ref={drag}
      onMouseEnter={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
    >
      <p>{content}</p>
      {isOver && (
        <EditButton onClick={handleClick}>
          <MdEdit />
        </EditButton>
      )}
    </Container>
  );
};
