import { TextEditor } from "./TextEditor";
import { Modal } from "./Modal";
import { H1, H2 } from "./Heading";

export function CreateIssue() {
  return (
    <Modal>
      <H1>Create issue</H1>
      <div className="flex flex-col gap-3">
        <div>
          <H2>Title</H2>
          <input
            type="text"
            className="w-full text-[#172b4d] text-[15px] focus:outline-[#4c9aff] px-[7px] font-jira h-8 border border-solid border-[#dfe1e6] rounded-sm"
          />
        </div>
        <div className="w-full h-fit">
          <H2>Description</H2>
          <div className="w-full border-solid border rounded-md h-[300px]">
            <TextEditor></TextEditor>
          </div>
        </div>

        <div className="flex gap-3 flex-row-reverse">
        <div className="flex text-[#42526e] items-center justify-center hover:bg-[#ebecf0] rounded-[3px] font-jira font-CircularStdMedium px-3 h-8 hover:cursor-pointer">
            Cancel
          </div>
          <div className="bg-[#0052cc] text-white flex items-center justify-center rounded-[3px] font-jira font-CircularStdMedium px-3 h-8 hover:cursor-pointer">
            Create issue
          </div>
        </div>
      </div>
    </Modal>
  );
}
