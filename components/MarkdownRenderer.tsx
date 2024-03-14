import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

interface MarkdownRendererProps {
  filePath: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ filePath }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(filePath)
      .then(response => response.text())
      .then(text => setMarkdown(text))
      .catch(error => console.error('Error fetching markdown:', error));
  }, [filePath]);

  return (
    <div className="markdown-container">
      <ReactMarkdown remarkPlugins={[gfm]}>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;