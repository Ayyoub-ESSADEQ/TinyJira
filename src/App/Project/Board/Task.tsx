import { Draggable } from "react-beautiful-dnd";
import { Task as TaskType } from "types";

export default function Task({
  task,
  index,
}: Readonly<{
  task: TaskType;
  index: number;
}>) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`${
            snapshot.isDragging ? "bg-blue-300" : "bg-orange-400 rotate-0"
          } select-none mb-2`}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
}
