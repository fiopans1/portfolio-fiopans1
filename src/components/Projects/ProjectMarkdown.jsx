import React from "react";

const renderInline = (text, keyPrefix) => {
  const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g).filter(Boolean);

  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`;

    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={key}>{part.slice(2, -2)}</strong>;
    }

    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      return (
        <a key={key} href={linkMatch[2]} target="_blank" rel="noreferrer">
          {linkMatch[1]}
        </a>
      );
    }

    return <React.Fragment key={key}>{part}</React.Fragment>;
  });
};

const flushList = (listType, items, keyPrefix) => {
  if (!items.length) {
    return null;
  }

  const ListTag = listType;
  return (
    <ListTag key={keyPrefix}>
      {items.map((item, index) => (
        <li key={`${keyPrefix}-${index}`}>{renderInline(item, `${keyPrefix}-${index}`)}</li>
      ))}
    </ListTag>
  );
};

function ProjectMarkdown({ content }) {
  const lines = content.split("\n");
  const elements = [];
  let listItems = [];
  let listType = null;

  const closeList = (keyPrefix) => {
    const list = flushList(listType, listItems, keyPrefix);
    if (list) {
      elements.push(list);
      listItems = [];
      listType = null;
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (!trimmed) {
      closeList(`list-${index}`);
      return;
    }

    if (trimmed.startsWith("# ")) {
      closeList(`list-${index}`);
      elements.push(<h1 key={index}>{trimmed.slice(2)}</h1>);
      return;
    }

    if (trimmed.startsWith("## ")) {
      closeList(`list-${index}`);
      elements.push(<h2 key={index}>{trimmed.slice(3)}</h2>);
      return;
    }

    if (trimmed.startsWith("### ")) {
      closeList(`list-${index}`);
      elements.push(<h3 key={index}>{trimmed.slice(4)}</h3>);
      return;
    }

    if (trimmed.startsWith("- ")) {
      if (listType && listType !== "ul") {
        closeList(`list-${index}`);
      }
      listType = "ul";
      listItems.push(trimmed.slice(2));
      return;
    }

    if (/^\d+\.\s/.test(trimmed)) {
      if (listType && listType !== "ol") {
        closeList(`list-${index}`);
      }
      listType = "ol";
      listItems.push(trimmed.replace(/^\d+\.\s/, ""));
      return;
    }

    closeList(`list-${index}`);
    elements.push(
      <p key={index}>{renderInline(trimmed, `paragraph-${index}`)}</p>
    );
  });

  closeList("list-final");

  return <div className="project-markdown">{elements}</div>;
}

export default ProjectMarkdown;
