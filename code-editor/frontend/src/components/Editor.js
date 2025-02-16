//src.Editor.js
import { useState } from 'react';

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material-darker.css';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import 'codemirror/addon/fold/xml-fold'

import { Controlled as ControlledEditor } from 'react-codemirror2'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';


function Editor(props) {
  const {language, displayName, value, onChange} = props

  const [open, setOpen] = useState(true)

  function handleChange(editor, data, value) {
    console.log(value)
    onChange(value)
  }
  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
       <div className="editor-title">
        {displayName}
        <button onClick={() => setOpen(prev => !prev)}><FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} /></button>
      </div>
       <ControlledEditor
          onBeforeChange={handleChange}
          value={value} 
          options={{
            mode: language,
            theme: 'material-darker',
            lineNumbers: true,
            lineWrapping: true,
            lint: true,
            autoCloseBrackets: true,
            autoCloseTags: true,
          }}
       />
     </div>
  )
}

export default Editor

















// src/Editor.js
// import React, { useEffect, useRef } from 'react';
// import { EditorState } from '@codemirror/state';
// import { EditorView, keymap } from '@codemirror/view';
// import { oneDark } from '@codemirror/theme-one-dark';
// import { javascript } from '@codemirror/lang-javascript';
// import { html } from '@codemirror/lang-html';
// import { css } from '@codemirror/lang-css';
// import { defaultKeymap } from '@codemirror/commands';

// function Editor({ language, displayName, value, onChange }) {
//   const editorRef = useRef(null);
//   const onChangeRef = useRef(onChange);

//   useEffect(() => {
//     onChangeRef.current = onChange;
//   }, [onChange]);

//   useEffect(() => {
//     if (editorRef.current) {
//       const startState = EditorState.create({
//         doc: value,
//         extensions: [
//           language === 'javascript' ? javascript() : language === 'css' ? css() : html(),
//           oneDark,
//           keymap.of(defaultKeymap),
//           EditorView.lineWrapping,
//           EditorView.updateListener.of(update => {
//             if (update.changes) {
//               onChangeRef.current(update.state.doc.toString());
//             }
//           }),
//         ],
//       });

//       const view = new EditorView({
//         state: startState,
//         parent: editorRef.current,
//       });

//       return () => view.destroy();
//     }
//   }, [language, value]);

//   return (
//     <div className="editor-container">
//       <div className="editor-title">{displayName}</div>
//       <div ref={editorRef} className="code-mirror-wrapper"></div>
//     </div>
//   );
// }

// export default Editor;
