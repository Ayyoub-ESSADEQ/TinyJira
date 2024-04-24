import Navbar from "./Navbar";
import Project from "./Project";
import { Sidebar } from "./Sidebar";

export default function App() {
  return (
    <div className="flex flex-row h-full w-full">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Project></Project>
    </div>
  );
}
