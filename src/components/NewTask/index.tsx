import React, { createRef, useState } from "react";
import { MdLibraryAdd } from "react-icons/md";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import {
  AddButton,
  AddTaskButton,
  Container,
  CancelButton,
  ButtonsContainer,
} from "./style";

export const NewTask: React.FC<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  createTask: (content: string) => void;
}> = ({ isOpen, setIsOpen, createTask }) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const formRef = createRef<HTMLFormElement>();
  const [content, setContent] = useState("");

  const handleClose = () => {
    setIsOpen(false);
    setContent("");
  };

  useOutsideClick(formRef, () => {
    if (content) createTask(content.trim());
    handleClose();
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setIsOpen(true);
    ref.current?.focus();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (content.trim()) {
      createTask(content.trim());
      handleClose();
    } else {
      ref.current?.focus();
    }
  };

  return isOpen ? (
    <>
      <form onSubmit={handleSubmit} ref={formRef}>
        <Container>
          <input
            id="newTaskInput"
            autoFocus
            ref={ref}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
        </Container>
        <ButtonsContainer>
          <CancelButton type="button" onClick={handleClose}>
            Cancel
          </CancelButton>
          <AddButton id="addButton" type="submit" disabled={!content.trim()}>
            Add
          </AddButton>
        </ButtonsContainer>
      </form>
    </>
  ) : (
    <AddTaskButton onClick={handleClick} id="newTaskButton">
      New Task
      <MdLibraryAdd size="22px" />
    </AddTaskButton>
  );
};
