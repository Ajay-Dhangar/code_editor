// src/App.js
import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import './App.css';
import './window.css';

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  const runCode = () => {
    const iframe = document.getElementById('output-frame').contentWindow.document;
    iframe.open();
    iframe.writeln(`
      <html>
        <head>
          <style>        
            .browserWindow {
              border: 3px solid #ccc;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              margin-bottom: 20px;
            }

            .browserWindowHeader {
              align-items: center;
              background: #f0f0f0;
              display: flex;
              padding: 0.5rem 1rem;
            }

            .buttons {
              white-space: nowrap;
            }

            .browserWindowAddressBar {
              flex: 1 0;
              margin: 0 1rem 0 0.5rem;
              border-radius: 12.5px;
              background-color: #ffffff;
              color: #333333;
              padding: 5px 15px;
              font: 400 13px Arial, sans-serif;
              user-select: none;
            }

            .dot {
              margin-right: 6px;
              margin-top: 4px;
              height: 12px;
              width: 12px;
              background-color: #bbb;
              border-radius: 50%;
              display: inline-block;
            }

            .browserWindowMenuIcon {
              margin-left: auto;
            }

            .bar {
              width: 17px;
              height: 3px;
              background-color: #aaa;
              margin: 3px 0;
              display: block;
            }

            .browserWindowBody {
              background-color: #ffffff;
              border-bottom-left-radius: inherit;
              border-bottom-right-radius: inherit;
              padding: 1rem;
            }

            .browserWindowBody *:last-child {
              margin-bottom: 0;
            }
         </style>
          <style>${css}</style>
        </head>
        <body>
        <div class="browserWindow" style="min-height: 400px;">
          <div class="browserWindowHeader">
            <div class="buttons">
              <span class="dot" style="background: #f25f58;"></span>
              <span class="dot" style="background: #fbbe3c;"></span>
              <span class="dot" style="background: #58cb42;"></span>
            </div>
          <div class="browserWindowAddressBar text--truncate">
          http://localhost:3000
        </div>
        <div class="browserWindowMenuIcon">
          <div>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </div>
      </div>
      <div class="browserWindowBody">
        ${html}
      </div>
      </body>
        <script>${js}</script>
      </html>
    `);
    iframe.close();
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Ajay's Live Code Editor in Your Browser</h1>
      </div>
      <div className="editor-container">
        <CodeEditor language="html" value={html} onChange={setHtml} />
        <CodeEditor language="css" value={css} onChange={setCss} />
        <CodeEditor language="javascript" value={js} onChange={setJs} />
      </div>
      <button className="run-button" onClick={runCode}>Run</button>
      <div className="output">
        <iframe id="output-frame" title="output" className="output-frame"></iframe>
      </div>
    </div>
  );
}

export default App;
