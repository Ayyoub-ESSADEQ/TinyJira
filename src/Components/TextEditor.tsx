import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const quillConfig = {
  theme: "snow",
  modules: {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      ["clean"],
    ],
  },
};

export function TextEditor() {
  const [value, setValue] = useState("");
  return (
    <ReactQuill
      className="font-CircularStdBook text-[15px] h-[calc(100%-40px)]  text-[#172b4d]"
      value={value}
      onChange={setValue}
      {...quillConfig}
    />
  );
}
