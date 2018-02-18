import React from 'react';
import './css/IntroLoader.css';
import ReactDOM from 'react-dom';
import CreateClass from 'create-react-class';
var story = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
"Lorem ipsum dolor sit amet, consectetur adipiscing elit . Aenean gravida"+
" massa odio, nec auctor risus posuere in."+
"Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
"Lorem ipsum dolor sit amet, consectetur adipiscing elit . Aenean gravida"+
" massa odio, nec auctor risus posuere in."+
"Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
"Lorem ipsum dolor sit amet, consectetur adipiscing elit . Aenean gravida"+
" massa odio, nec auctor risus posuere in.";

var MyStoryClass = CreateClass({
  render: function(){
    return(
    <div className="story">
      <h4 className="mystory">How I got my Super-Powers?</h4>
      <p className="story">{story}</p>
    </div>
    );
  }
});


class CodingInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  _onMouseMove(e) {
    const position = ReactDOM.findDOMNode(this).getBoundingClientRect();
    console.log(position, e.nativeEvent.offsetX, e.screenX);

    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }

  render() {
    const { x, y } = this.state;
    return <div className="coding-stats" onMouseMove={this._onMouseMove.bind(this)}>
      <h4 className="mystory" >Mouse coordinates: { x } { y }</h4>
      <p className="story">{story}</p>
    </div>;
  }
}




class IntroLoader extends  React.Component {
render() {
  return (
  <div className="intro-outer-box">
  <MyStoryClass/>
  <CodingInfo/>
  </div>
   )
  }
}

export default IntroLoader;