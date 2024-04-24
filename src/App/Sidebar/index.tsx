import { Button } from "../../Components/Button";
import Title from "./Title";
import {
  Kanban,
  Settings,
  Releases,
  Stats,
  Component,
  Pages,
  Issues,
} from "./Icons";

export const Sidebar = () => {
  const NOT_IMPLEMENTED = `hover:after:content-['NOT_IMPLEMENTED'] hover:text-[11px] hover:font-bold hover:bg-[#dfe1e6] hover:cursor-not-allowed`;

  return (
    <div className="ml-16 border-r font-CircularStdBold text-sm border-r-solid leading-[1.2] border-r-[#dfe1e6] bg-[#f4f5f7] min-w-[230px] w-[230px] flex flex-col items-center h-full px-4">
      <Title />
      <Button active icon={<Kanban />}>
        Kanban Board
      </Button>
      <Button icon={<Settings />}>Project Settings</Button>
      <div className="h-10 w-full flex flex-col justify-center">
        <div className="bg-[#c1c7d0] h-[1px] w-full"></div>
      </div>
      <Button
        className={`after:content-['Releases'] ${NOT_IMPLEMENTED}`}
        icon={<Releases />}
      />
      <Button
        className={`after:content-['Issues_and_filters'] ${NOT_IMPLEMENTED}`}
        icon={<Issues />}
      />
      <Button
        className={`after:content-['Pages'] ${NOT_IMPLEMENTED}`}
        icon={<Pages />}
      ></Button>
      <Button
        className={`after:content-['Reports'] ${NOT_IMPLEMENTED}`}
        icon={<Stats />}
      />
      <Button
        className={`after:content-['Components'] ${NOT_IMPLEMENTED}`}
        icon={<Component />}
      />
    </div>
  );
};
