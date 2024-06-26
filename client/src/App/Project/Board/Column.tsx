import {
  Draggable,
  DraggableProvided,
  Droppable,
  DroppableProvided,
} from "react-beautiful-dnd";
import { Column as ColumnType, Task as TaskType } from "../../../types";
import Task from "./Task";
import { memo } from "react";
import { DragIndicator } from "./DragIndicator";

export interface ColumnProps {
  tasks: TaskType[];
  column: ColumnType;
  index: number;
}
interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  provided: DraggableProvided;
}
const Container = (props: ContainerProps) => {
  return (
    <div
      {...props.provided.draggableProps}
      ref={props.provided.innerRef}
      className={`${props.className} w-[285px] min-w-[285px] p-2 min-h-[400px]`}
    >
      {props.children}
    </div>
  );
};

const Title = ({
  title,
  provided,
}: {
  title: string;
  provided: DraggableProvided;
}) => {
  return (
    <div
      {...provided.dragHandleProps}
      className="select-none text-[#5e6c84] bg-[#f4f5f7] flex flex-row font-semibold items-center p-3 gap-2 rounded-t-[3px] uppercase text-xs"
    >
      <DragIndicator />
      <span>{title}</span>
    </div>
  );
};

interface TaskListProps extends React.HTMLProps<HTMLDivElement> {
  provided: DroppableProvided;
}

const TaskList = (props: TaskListProps) => {
  const { provided } = props;
  return (
    <div
      {...provided.droppableProps}
      ref={provided.innerRef}
      className={`p-2 ${props.className} min-h-[300px] select-none bg-[#f4f5f7]`}
    >
      {props.children}
    </div>
  );
};

const InnerTaskList = memo(({ tasks }: { tasks: TaskType[] }) => {
  return tasks.map((task, index) => (
    <Task key={task.id} task={task} index={index} />
  ));
});

export default function Column(props: Readonly<ColumnProps>) {
  const { tasks, column, index } = props;
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <Container provided={provided}>
          <Title provided={provided} title={column.title}></Title>
          <Droppable type="task" droppableId={column.id}>
            {(provided, snapshot) => (
              <TaskList
                className={`rounded-b-[3px] ${
                  snapshot.isDraggingOver ? "bg-[#e4e8f4b8]" : ""
                }`}
                provided={provided}
              >
                <InnerTaskList tasks={tasks} />
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
}
