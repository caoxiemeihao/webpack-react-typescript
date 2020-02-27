import React from 'react';
import Header from '../Header/Header';
import SideBar from "../SideBar/SideBar";
import bowerImg from '@/assets/images/bower.png';

import './Layout.less';

export default class Layout extends React.Component {
  render() {
    return <div className="app-layout">
      <div className="app-sidebar">
        <SideBar />
      </div>
      <div className="app-main">
        <div className="app-header">
          <Header />
        </div>
        <main>
          <div style={{ textAlign: 'center', padding: 40 }}>
            <img src={bowerImg} style={{ width: '40%' }} />
          </div>
        </main>
      </div>
    </div>
  }
}
