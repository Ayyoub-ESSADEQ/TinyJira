import { Draggable } from "react-beautiful-dnd";
import { Tags, Task as TaskType } from "types";

export default function Task({
  task,
  index,
}: Readonly<{
  task: TaskType;
  index: number;
}>) {
  const tag =
    Tags?.[task.tag.toUpperCase() as keyof typeof Tags] ?? "bg-blue-300";

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`bg-white select-none mb-2 rounded-[3px] shadow-md py-[10px] px-2 font-CircularStdBook text-[14px] border-box`}
        >
          {task.content.title}
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <div
                className={`w-fit px-2 rounded-sm h-fit text-[10px] flex items-center justify-center ${tag}`}
              >
                {task.tag}
              </div>
            </div>
            <div className="flex flex-row items-center">
              {task.assignees.map((_, id) => (
                <div
                  key={id}
                  className="size-6 rounded-full mr-[-5px] box-border bg-orange-300 bg-cover border-2 border-solid border-white"
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
