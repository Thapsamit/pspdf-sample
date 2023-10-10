import { useState } from "react";
import PdfViewerComponent from "./components/PdfViewerComponent";
import "./App.css";

function App() {
  const [document, setDocument] = useState(
    "https://www.mtsac.edu/webdesign/accessible-docs/word/example03.docx"
  );

  const handleOpen = () => setDocument("another-example.pdf");

  return (
    <div className="App">
      <button className="App-button" onClick={handleOpen}>
        Open another document
      </button>
      <div className="App-viewer">
        <PdfViewerComponent document={document} />
      </div>
    </div>
  );
}

export default App;
