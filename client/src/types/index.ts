/* eslint-disable @typescript-eslint/no-explicit-any */
export const Tags = {
  HIGH: "bg-red-300",
  LOW: "bg-green-300",
  MEDIUM: "bg-blue-300",
};

export type Assignee = {
  name: string;
  avatar: string;
};
export type Task = {
  id: string;
  content: { title: string; description: string };
  assignees: [];
  tag: string;
};
export type Column = { id: string; title: string; taskIds: string[] };

export interface Data {
  [x: string]: any;
  tasks: Record<string, Task>;
  columns: Record<string, Column>;
  columnOrder: string[];
}

type DTO = {
  column_order: number;
  task_title: string;
  board_id: string;
  user_lastname: string;
  user_id: string;
  column_id: string;
  task_id: string;
  user_name: string;
  task_description: string;
  board_column_title: string;
  task_tag: string;
  project_title: string;
  project_description: string;
};

export type RecievedData = DTO[];
