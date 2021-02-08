import React, { useState } from "react";
import { MdLibraryAdd } from "react-icons/md";
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
  const [content, setContent] = useState("");

  const handleClick = () => {
    setIsOpen(true);
    ref.current?.focus();
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (content.trim()) {
      createTask(content.trim());
      setIsOpen(false);
      setContent("");
    } else {
      ref.current?.focus();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setContent("");
  };
  return isOpen ? (
    <>
      <form onSubmit={handleSubmit}>
        <Container>
          <input
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
          <AddButton type="submit" disabled={!content.trim()}>
            Add
          </AddButton>
        </ButtonsContainer>
      </form>
    </>
  ) : (
    <AddTaskButton onClick={handleClick}>
      New Task
      <MdLibraryAdd size="22px" />
    </AddTaskButton>
  );
};
