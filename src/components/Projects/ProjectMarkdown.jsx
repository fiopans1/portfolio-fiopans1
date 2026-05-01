import ReactMarkdown from "react-markdown";

function ProjectMarkdown({ content }) {
  return (
    <ReactMarkdown
      className="project-markdown"
      components={{
        a: ({ ...props }) => (
          <a {...props} target="_blank" rel="noreferrer" />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

export default ProjectMarkdown;
