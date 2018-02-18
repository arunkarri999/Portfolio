import React, { Component } from 'react';
import MainLoader from './MainLoader';
import IntroLoader from './IntroLoader';
import ExperinceLoader from './ExperinceLoader';
import SocialLoader from './SocialLoader';
import ContactLoader from './ContactLoader';
import './css/Layout.css';
class Layout  extends Component {
  render() {
    return (
      <div className="layout">
        <div id="main-display">
         <MainLoader/>
        </div>
        <div id="holders">
         <IntroLoader/>
        </div>
        <div id="holders backgound-white">
         <ExperinceLoader/>
        </div>
        <div id="holders">
         <SocialLoader/>
        </div>
        <div id= "contact">
         <ContactLoader/>
        </div>
      </div>
    );
  }
}

export default Layout;