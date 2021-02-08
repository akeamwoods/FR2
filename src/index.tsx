import React from "react";
import { DndProvider } from "react-dnd";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ToDoPage } from "./pages/ToDoPage";
import { store } from "./store";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./style.css";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <ToDoPage />
      </DndProvider>
    </Provider>
  </React.StrictMode>,
  rootElement
);
