import React from 'react';
import style from './SideBar.module.less';
import logo from '@/assets/images/logo.png';

export default class SideBar extends React.Component {
  render() {
    return <div className={style.sideBar}>
      <div className={style.logo}>
        <img src={logo} alt="logo"/>
      </div>
      <div className={style.menu}>
        SideBar Component.
      </div>
    </div>
  }
}
