import { Button } from "../../Components/Button";
import Title from "./Title";
import { Kanban } from "./Icons/Kanban";
import { Settings } from "./Icons/Settings";

export const Sidebar = () => {
  return (
    <div className="ml-16 border-r font-CircularStdBook text-sm border-r-solid leading-[1.2] border-r-[#dfe1e6] bg-[#f4f5f7] min-w-[230px] w-[230px] flex flex-col items-center h-full px-4">
      <Title />
      <Button active icon={<Kanban />}>
        Kanban Board
      </Button>
      <Button icon={<Settings />}>Project Settings</Button>
      <div className="h-10 w-full flex flex-col justify-center">
        <div className="bg-[#c1c7d0] h-[1px] w-full"></div>
      </div>
    </div>
  );
};
