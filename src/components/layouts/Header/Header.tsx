import React from 'react';
import style from './Header.module.less';

console.log(style);

export default class Header extends React.Component {
  render() {
    return <div className={style.header}>
      Header Component.
    </div>;
  }
}
