import React, { createRef } from "react";
import ReactDOM from "react-dom";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import {
  EditContainer,
  PopoverBackground,
  ButonsContainer,
  CancelButton,
  UpdateButton,
  DeleteButton,
} from "./style";

export const EditToDo: React.FC<{
  content: string;
  updateToDo: (newContent: string) => void;
  deleteToDo: () => void;
  cancelEditMode: () => void;
}> = ({ content, updateToDo, deleteToDo, cancelEditMode }) => {
  const [tempValue, setTemp] = React.useState(content);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (tempValue.trim()) updateToDo(tempValue.trim());
  };
  const handleKeydown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      updateToDo(tempValue);
    }
  };

  const ref = createRef<HTMLFormElement>();
  useOutsideClick(ref, () => {
    cancelEditMode();
  });

  return (
    <>
      {ReactDOM.createPortal(<PopoverBackground />, document.body)}
      <EditContainer onSubmit={handleSubmit} ref={ref}>
        <textarea
          autoFocus
          onFocus={(e) => e.target.select()}
          value={tempValue}
          rows={5}
          onChange={(e) => setTemp(e.target.value)}
          onKeyDown={handleKeydown}
        ></textarea>
        <ButonsContainer>
          <CancelButton type="button" onClick={cancelEditMode}>
            Cancel
          </CancelButton>
          <DeleteButton type="button" onClick={deleteToDo}>
            Delete
          </DeleteButton>
          <UpdateButton type="submit" disabled={!tempValue.trim()}>
            Update
          </UpdateButton>
        </ButonsContainer>
      </EditContainer>
    </>
  );
};
