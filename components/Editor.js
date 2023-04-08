import React from 'react'
import styles from '../styles/Home.module.css'
import CodeEditor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/themes/prism-funky.css'

export default function Editor(props) {
  return (
    <CodeEditor
        value={props.code}
        onValueChange={code => props.setCode(code)}
        highlight={code => highlight(code, languages.java)}
        padding={20}
        autoFocus={true}
        className={styles.textarea}
    />
  )
}
