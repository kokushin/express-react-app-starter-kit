import React, { Component } from 'react'
import styles from './hello.css'

class Hello extends Component {
  render() {
    return (
      <h1 className={styles.hello}>Hello, World!</h1>
    );
  }
}

export default Hello