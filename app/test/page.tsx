"use client"
import MarkdownRenderer from '@/components/MarkdownRenderer';

export default function SamplePage() {
  return (
    <div>
      <MarkdownRenderer filePath="/test/test.md" />
    </div>
  );
};
