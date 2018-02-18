import React, { Component } from 'react';
import CreateClass from 'create-react-class';
import './css/SocialLoader.css';

var socialLinks = [
  {"site":"GitHub",
  "url":"https://github.com/Sathvik777"
 },
 {
  "site":"CodePen",
  "url":"https://codepen.io/sathvik"
 },
 {
  "site":"Glitch",
  "url":"https://glitch.com/@Sathvik777"
  },
 {
  "site":"Unity",
  "url":"https://linkedin.com/in/sathvik-katam/"
 }
];

var liveApps = [
  {"name":"App1",
  "url":"https://github.com/Sathvik777",
 },
 {
  "name":"App2",
  "url":"https://codepen.io/sathvik"
 },
 {
  "name":"App3",
  "url":"https://linkedin.com/in/sathvik-katam/"
  },
 {
  "name":"App4",
  "url":"https://linkedin.com/in/sathvik-katam/"
 },
 {
  "name":"App5",
  "url":"https://linkedin.com/in/sathvik-katam/"
 },
 {
  "name":"App6",
  "url":"https://linkedin.com/in/sathvik-katam/"
 }
];




var SocialListClass = CreateClass({
  render: function() {
    var i =0;
    var socialListNodes = socialLinks.map(function (current_element){
      i++;
      return (
      <a href={current_element.url} target="_blank" key={i}>
        <div className = "social-inner-box"  key={i}>
          <h4 className = "site"> {current_element.site} </h4>
          <img className="logo" alt="Hero" src={require('./assets/'+i+'.png')}/>
        </div>
      </a>
      );
    });
    return (
    <div className = "social-outer-box">
      <h4>Look! I Can Code</h4>
      <hr className="lines"/>
        {socialListNodes}
    </div>
    );
  }
});

var LiveApps = CreateClass({
  render: function() {

    var liveAppsNodes = liveApps.map(function (current_element){
      return (
        <div className = "live-inner-box">
          <div className= "app-title">
          <h4 className = "app-title">{current_element.name}</h4>
          </div>

        </div>
      );
    });
    return (
      <div className = "live-outer-box">
        <h4>Look! My code works</h4>
        <hr className="lines"/>
        {liveAppsNodes}
      </div>
    );
  }
});


class SocialLoader  extends Component {
  render() {
    return (
      <div>
         <SocialListClass/>
         <LiveApps/>
      </div>
    );
  }
}

export default SocialLoader;