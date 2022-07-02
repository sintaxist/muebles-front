import React from "react";
import styles from '../../styles/tabs.module.scss'

export default function Panel(props) {
  return <div className={styles.panel}>{props.children}</div>;
}
