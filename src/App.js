import React,{useState} from "react"
import "./App.css";
import ReactMarkdown from "react-markdown"
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const defaultEditor = `
# Heading

## Heading 2

This is a paragraph

**Bold text**

- list item

[Visit my Assignment](koutsosg.github.io/markdown-previewer)

this is an inline \`<div></div>\`

This is a codeblock
\`\`\`python
print("Hello World")
\`\`\`

![Markdown](https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/205_Markdown_logo_logos-512.png)

> Block Quotes!
  `;
  const [container, setContainer] = useState(defaultEditor);
  return (
    <div className="container">
      <div className="row">
        <textarea
          id="editor"
          value={container}
          onChange={(e) => setContainer(e.target.value)}
          rows="10 "
          cols="50"
        ></textarea>
      </div>
      <div className="row" id="preview">
        <ReactMarkdown children={container} />
      </div>
    </div>
  );
}

export default App;
