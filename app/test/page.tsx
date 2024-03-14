"use client"
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export default function SamplePage() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/test/test.md')
      .then(response => response.text())
      .then(text => setMarkdown(text))
      .catch(error => console.error('Error fetching markdown:', error));
  }, []);

  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};
