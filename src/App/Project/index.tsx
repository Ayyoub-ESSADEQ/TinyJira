import Board from "./Board";
import Breadcrumb from "./Breadcrumb";
import Header from "./Header";

export default function Project() {
  return (
    <div className="flex flex-col flex-grow overflow-auto px-8 pt-6">
      <Breadcrumb projectName="Hello world" />
      <Header />
      <Board />
    </div>
  );
}
