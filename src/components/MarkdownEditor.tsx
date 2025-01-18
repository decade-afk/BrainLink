import ReactMarkDown from "react-markdown";
import React from "react";

const MarkdownEditor: React.FC<{ md: string }> = ({ md }) => {
  const [markdown, setMarkdown] = React.useState(md);
  const [_, setHtml] = React.useState("");
  React.useEffect(() => {
    setHtml(markdown);
  }, [markdown]);
  return (
    <div className="markdown-editor">
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Write your Markdown here..."
        className="markdown-input"
      />
      <div className="markdown-preview">
        <ReactMarkDown>{markdown}</ReactMarkDown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
