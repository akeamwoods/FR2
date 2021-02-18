# ToDoList 2.0

Demo: http://akeamwoods.github.io/FR2

Notes:
- This is a revamp of my original To Do List which you can find here: https://github.com/akeamwoods/FR_ToDo_List
- I spent just under 4 hours redesinging on this (using my original project as a starting point).
- Yes, I have designed this to look similar to Trello. Their UI for task management is probably the best that i've seen (obviously all of the code is written by myself from scratch).
- There is an example e2e test using pupeeter.
- I've tried keeping most of the components modular and reusable, sort of like those you would find in a component library. This is why i'm passing things through rather that dispatching or accessing the store from within them. I wanted to keep as much separation from the component library and the redux store as possible.
