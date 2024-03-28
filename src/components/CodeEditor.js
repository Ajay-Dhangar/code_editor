import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

const CodeEditor = ({ language, value, onChange }) => {
  const options = {
    mode: language,
    theme: 'material',
    lineNumbers: true
  };

  return (
    <div className="editor">
      <CodeMirror value={value} onBeforeChange={(editor, data, value) => onChange(value)} options={options} />
    </div>
  );
};

export default CodeEditor;
