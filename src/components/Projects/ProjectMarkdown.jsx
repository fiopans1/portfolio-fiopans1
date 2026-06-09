import ReactMarkdown from "react-markdown";

function ProjectMarkdown({ content }) {
  return (
    <div className="project-markdown">
      <ReactMarkdown
        components={{
          a: (props) => <a {...props} target="_blank" rel="noreferrer" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default ProjectMarkdown;
