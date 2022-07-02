import React, { Component } from "react";

import styles from '../../styles/tabs.module.scss'
import { WrapContennt } from "../UseElements";

class Tabs extends Component {
  state = {
    selected: this.props.selected || 2
  };

  handleChange(index) {
    this.setState({ selected: index });
  }

  render() {
    
    return (
      <WrapContennt className={styles.TabsContainer}>

        <ul className={styles.links}>
          {this.props?.children?.map((elem, index) => {
            let style = index === this.state.selected ? styles.selected : "";
            return (
              <li 
                key={index}
                className={style}
                onClick={() => this.handleChange(index)}
                >
                  {elem.props.title}
              </li>
            );
          })}
        </ul>
          {this.props.children == null ? null: (
            <div className={styles.tab}>{this.props.children[this.state.selected]}</div>
          )}

        </WrapContennt>
    );
  }
}

export default Tabs;

// @FileManager2022
