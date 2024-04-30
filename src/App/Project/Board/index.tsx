/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useState } from "react";
import Column from "./Column";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { Column as ColumnType, Data, Task as TaskType } from "types";
import axios from "axios";
import { BACKEND_URL } from "Constants";
import { useLoaderData } from "react-router";
import { convertToAppropriateFormat } from "utils";

interface InnerListColumnProps {
  index: number;
  column: ColumnType;
  taskMap: Record<string, TaskType>;
}

class TaskAndColumnOrderManager {
  private setState: (...args: any) => void;
  private data;
  private source;
  private destination;
  private draggableId;
  private start;
  private finish;
  private type;

  constructor(result: DropResult, setData: (...args: any) => void, data: Data) {
    const { type, source, destination, draggableId } = result;
    const { columns } = data;

    this.setState = setData;
    this.destination = destination!;
    this.draggableId = draggableId;
    this.source = source;
    this.finish = columns[destination!.droppableId];
    this.start = columns[source.droppableId];
    this.data = data;
    this.type = type;
  }

  public dragColumns = () => {
    const newColumnsOrder = [...this.data.columnOrder];

    newColumnsOrder.splice(this.source.index, 1);
    newColumnsOrder.splice(this.destination.index, 0, this.draggableId);

    const newState = {
      ...this.data,
      columnOrder: newColumnsOrder,
    };

    this.setState(newState);
  };

  public dragTasksInSameColumn = () => {
    const newTaskIds = [...this.start.taskIds];
    newTaskIds.splice(this.source.index, 1);
    newTaskIds.splice(this.destination.index, 0, this.draggableId);

    const newColumn = { ...this.start, taskIds: newTaskIds };
    const newState = {
      ...this.data,
      columns: {
        ...this.data.columns,
        [newColumn.id]: newColumn,
      },
    };

    this.setState(newState);
  };

  public dragTasksBetweenColumns = () => {
    const startTasksIds = [...this.start.taskIds];
    const finishTaskIds = [...this.finish.taskIds];

    startTasksIds.splice(this.source.index, 1);
    finishTaskIds.splice(this.destination.index, 0, this.draggableId);

    const newState = {
      ...this.data,
      columns: {
        ...this.data.columns,
        [this.start.id]: {
          ...this.start,
          taskIds: startTasksIds,
        },
        [this.finish.id]: {
          ...this.finish,
          taskIds: finishTaskIds,
        },
      },
    };

    this.setState(newState);
  };

  public dragEndHandler = () => {
    if (
      !this.destination ||
      (this.destination.droppableId === this.source.droppableId &&
        this.destination.index === this.source.index)
    )
      return () => {};

    if (this.type == "column") {
      return this.dragColumns;
    }

    if (this.start == this.finish) {
      return this.dragTasksInSameColumn;
    }

    return this.dragTasksBetweenColumns;
  };
}

const InnerListColumn = memo((props: InnerListColumnProps) => {
  const { index, column, taskMap } = props;
  const tasks = column.taskIds.map((taskId) => taskMap[taskId]);
  return <Column index={index} column={column} tasks={tasks} />;
});

export async function loadBoardData({ params }: any) {
  try {
    const { data } = await axios.get(
      `${BACKEND_URL}/boards/${params.id}`
    );
    console.log(convertToAppropriateFormat(data))
    return { boardData: convertToAppropriateFormat(data) };
  } catch {
    return { boardData: [] };
  }
}

export default function Board() {
  const { boardData } = useLoaderData() as any;

  const [data, setData] = useState(boardData);
  const onDragEnd = (result: DropResult) => {
    const taskAndColumnOrderManager = new TaskAndColumnOrderManager(
      result,
      setData,
      data
    );

    taskAndColumnOrderManager.dragEndHandler()();
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="all-droppable"
        direction="horizontal"
        type="column"
      >
        {(provided) => (
          <div
            className="flex flex-row bg-white overflow-auto flex-grow"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {data.columnOrder.map((columnId: string, index: number) => {
              const column = data.columns[columnId];

              return (
                <InnerListColumn
                  index={index}
                  key={columnId}
                  column={column}
                  taskMap={data.tasks}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
