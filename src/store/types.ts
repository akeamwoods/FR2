export type ToDo = {
  id: string;
  content: string;
};

export type Board = {
  id: string;
  title: string;
  todos: ToDo[];
}
export type MenuItem = {
  label:string;
  onClick:() => void;
}