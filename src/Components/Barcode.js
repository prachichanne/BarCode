import { saveAs } from 'file-saver'
import React from 'react'

export default function App() {
  const saveFile = () => {
    saveAs(
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      "example.pdf"
    );
  };
  return (
    <div>
      <button onClick={saveFile}>download</button>
    </div>
  );
}