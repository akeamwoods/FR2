import React, { createRef } from "react";
import { MdMoreHoriz } from "react-icons/md";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { MenuItem } from "../../store/types";
import { MenuButton } from "../ToDoList/style";
import { Container, List, ListItem } from "./style";

export const Menu: React.FC<{ items: MenuItem[] }> = ({ items }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const ref = createRef<HTMLDivElement>();
  useOutsideClick(ref, () => {
    setIsMenuOpen(false);
  });

  return (
    <Container ref={ref}>
      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <MdMoreHoriz />
      </MenuButton>
      {isMenuOpen && (
        <List>
          {items.map((item, index) => (
            <ListItem
              key={index}
              onClick={() => {
                item.onClick();
                setIsMenuOpen(false);
              }}
            >
              {item.label}
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};
