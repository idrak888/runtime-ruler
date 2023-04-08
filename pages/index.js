import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import animated from '../styles/Animated.module.css'
import Editor from '../components/Editor';
import { getBigONotation, getForStatements } from '../functions/bigOCalc';

export default function Home() {
  const [bigO, setBigO] = React.useState(null);
  const [code, setCode] = React.useState(
    `int a=0;\nfor (int i=0;i<N;i++) {\n  for (int z=0;z<N;z++) {\n     a++;\n  }\n}\nSystem.out.println(a);`
  )

  function parseInput(code) {
    // get the for statement
    let newlineSplit = code.split("\n")
    let forStatements = getForStatements(newlineSplit);
    let result = getBigONotation(forStatements);
    return result;
  }

  const getBigO = () => { 
    const res = parseInput(code);
    setBigO(res);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Simple Big O time complexity evaluation tool | RuntimeRuler</title>
        <meta name="description" content="Its dark mode too!" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to 
          <a href="#">
            <div className={animated.waviy}>
              <span style={{"--i":1}}>R</span>
              <span style={{"--i":2}}>u</span>
              <span style={{"--i":3}}>n</span>
              <span style={{"--i":4}}>t</span>
              <span style={{"--i":5}}>i</span>
              <span style={{"--i":6}}>m</span>
              <span style={{"--i":7}}>e</span>
              <span style={{"--i":8}}>R</span>
              <span style={{"--i":9}}>u</span>
              <span style={{"--i":10}}>l</span>
              <span style={{"--i":11}}>e</span>
              <span style={{"--i":12}}>r</span>
            </div>
          </a>
        </h1>

        <p className={styles.description}>
          Evaluate the big O runtime complexity of your <u>for</u> loops
          <br/>
          <br className={styles.mobileBreak}/>
          Get started by editing or pasting a <code className={styles.code}>code block</code> below in any language
        </p>

        <div className={styles.inputContainer}>
          <Editor setCode={code => setCode(code)} code={code}/>
          <button onClick={getBigO} className={styles.button}>Get Big O</button>
        </div>

        {
          bigO ? 
          <div className={styles.results}>
            <h2>Results</h2>
            <p>{bigO}</p>
          </div>
          : <></>
        }
      
        <div style={{width: "100%", height: 1, backgroundColor: "#606060", marginTop: 50, marginBottom: 50}}></div>

        <h2>Resources</h2>
        <div className={styles.grid}>
          <a href="https://www.youtube.com/watch?v=__vX2sjlpXU" className={styles.card}>
            <h2>Big O in 5 minutes (Goated video) &rarr;</h2>
            <p>My favorite Youtube video on big O notation</p>
          </a>

          <a href="https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/" className={styles.card}>
            <h2>Big O cheatsheet by freecodecamp &rarr;</h2>
            <p>Detailed blog post about time complexity</p>
          </a>

          <a
            href="https://cooervo.github.io/Algorithms-DataStructures-BigONotation/"
            className={styles.card}
          >
            <h2>Complexity of Algorithms &rarr;</h2>
            <p>
              Efficiency of some common algorithms
            </p>
          </a>

          <a
            href="https://flexiple.com/algorithms/big-o-notation-cheat-sheet/"
            className={styles.card}
          >
            <h2>Another Big O cheatsheet &rarr;</h2>
            <p>Another detailed blog post about time complexity</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/idrak888"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Idrak 
        </a>
      </footer>
    </div>
  )
}
