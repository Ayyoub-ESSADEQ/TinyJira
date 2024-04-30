import { Data } from "types";

const initialData: Data = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "Hello world 1",
      assignees: [
        {
          name: "Ayyoub",
          avatar: "",
        },
      ],
    },
    "task-2": {
      id: "task-2",
      content: "Hello world 2",
      assignees: [
        {
          name: "Ayyoub",
          avatar: "",
        },
      ],
    },
    "task-3": {
      id: "task-3",
      content: "Hello world 3",
      assignees: [
        {
          name: "Ayyoub",
          avatar: "",
        },
        {
          name: "Ayyoub",
          avatar: "",
        },
      ],
    },
    "task-4": {
      id: "task-4",
      content: "Hello world 4",
      assignees: [
        {
          name: "Ayyoub",
          avatar:""
        },
      ],
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "TO-DO",
      taskIds: ["task-1", "task-2", "task-3"],
    },
    "column-2": {
      id: "column-2",
      title: "PROGRESS",
      taskIds: ["task-4"],
    },
    "column-3": {
      id: "column-3",
      title: "DONE",
      taskIds: [],
    },
    "column-4": {
      id: "column-4",
      title: "DONE",
      taskIds: [],
    },
    "column-5": {
      id: "column-5",
      title: "DONE",
      taskIds: [],
    },
    "column-6": {
      id: "column-6",
      title: "DONE 6",
      taskIds: [],
    },
  },
  columnOrder: [
    "column-1",
    "column-2",
    "column-3",
    "column-4",
    "column-5",
    "column-6",
  ],
};

export default initialData;
