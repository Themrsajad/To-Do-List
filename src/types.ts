export interface Colors {
  a: string;
  b: string;
  c: string;
  d: string;
  white: string;
  red: string;
}

export interface TaskType {
  id: string;
  todo: string;
  flag: string;
  date: Date | undefined;
  isEditing: boolean;
}
