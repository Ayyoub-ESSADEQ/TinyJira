import { Data, RecievedData } from "types";

export function convertToAppropriateFormat(data: RecievedData) {
  const board: Data = {
    tasks: {},
    columns: {},
    columnOrder: [],
  };

  data.forEach((result) => {
    board.tasks[result.task_id] = {
      id: result.task_id,
      content: {
        title: result.task_title,
        description: result.task_description,
      },
      assignees: [],
      tag: result.task_tag,
    };

    if (!board.columns[result.column_id]) {
      board.columns[result.column_id] = {
        id: result.column_id,
        title: result.board_column_title,
        taskIds: [],
      };
    }

    board.columns[result.column_id].taskIds.push(result.task_id);

    board.columnOrder[result.column_order] = result.column_id;
  });

  board.metaData = {
    title: data?.[0]?.project_title ?? "Empty"
  }

  return board;
}
