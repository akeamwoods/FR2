import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ToDoPage } from "./pages/ToDoPage";
import { store } from "./store";
import { DndProvider } from "react-dnd-multi-backend";
import HTML5toTouch from "react-dnd-multi-backend/dist/esm/HTML5toTouch";
import "./style.css";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <Provider store={store}>
      <DndProvider options={HTML5toTouch}>
        <ToDoPage />
      </DndProvider>
    </Provider>
  </React.StrictMode>,
  rootElement
);
