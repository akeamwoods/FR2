# ToDoList 2.0

Demo: http://akeamwoods.github.io/FR2


Notes:
- This is a revamp of my original To Do List which you can find here: https://github.com/akeamwoods/FR_ToDo_List
- I spent just under 4 hours redesigning this (using my original project as a starting point).
- Yes, I have designed this to look similar to Trello. Their UI for task management is probably the best that i've seen (obviously all of the code is written by myself from scratch).
- There is an example e2e test using puppeteer (src/pages/ToDoPage.test.js), run using yarn test.
- I've tried keeping most of the components modular and reusable, sort of like those you would find in a component library. This is why I'm passing things through rather than dispatching or accessing the store from within them. I wanted to keep as much separation from the component library and the redux store as possible. I realise that the ToDoList Component is coupled to the store, this would be easy to change by having a renderListItem prop and a couple of other slight changes but I was running out of time so left it.
- Some of the actions are still styled from the original version. I would now declare actions in a responsive, event driven way. e.g. 'newTodoButtonPressed' as opposed to 'todoCreated'.
- Drag and drop also works on mobile.
