import React, { useState } from 'react'
import styles from './Counter.module.css'

const Counter = () => {
  const [count, setCount] = useState(0)

  function increase() {
    setCount(count + 1)
  }
  function decrease() {
    setCount(count - 1)
  }

  function reset() {
    setCount(0)
  }

  return (
    <div className={styles.box}>
      <h1 className={styles.counter}>{count}</h1>
      <button className={styles.button} onClick={increase}>
        Increase
      </button>
      <button className={styles.button} onClick={decrease}>
        Decrease
      </button>
      <button className={styles.button} onClick={reset}>
        Reset
      </button>
    </div>
  )
}

export default Counter
