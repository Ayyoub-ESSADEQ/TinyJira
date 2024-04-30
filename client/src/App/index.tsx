import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Project from "./Project";
import { Sidebar } from "./Sidebar";
import { CreateIssue } from "Components/CreateIssue";

export default function App() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const modalIssueCreate = queryParams.get("modal-issue-create");
  const Holder = () =>
    (modalIssueCreate === "true") ? <CreateIssue /> : <></>;

  return (
    <div className="flex flex-row h-full w-full">
      <Holder />
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Project></Project>
    </div>
  );
}