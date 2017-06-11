export interface ITodo {
  id: string;
  title: string;
  done: boolean;
  editMode: boolean;
}

export interface ITodoVM {
  installed: boolean;
  data: ITodo[]
}
