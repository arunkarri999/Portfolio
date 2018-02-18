import React from 'react';
//import ReactDOM from 'react-dom';
import './css/ExperinceLoader.css';
import CreateClass from 'create-react-class';

var experince_list =[
  {
    "title": "Could be at Your company",
    "period":"10-20-2220 - 10-20-2010",
    "tags":['Java','Python','JavaScript'],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit . Aenean gravida massa odio, nec auctor risus posuere in."
  },
{
  "title": "Backend Developer",
  "period":"10-20-2220 - 10-20-2010",
  "tags":['Java','Python','JavaScript'],
  "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem "+
  "ipsum dolor sit amet, consectetur adipiscing elit . Aenean gravida massa odio, nec auctor risus posuere in."
},
  {
  "title": "Web Developer",
  "period":"10-20-2220 - 10-20-2010",
  "tags":['Java','Python','JavaScript'],
  "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit . Aenean gravida massa odio, nec auctor risus posuere in."
},
  {
  "title": "Researcher",
  "period":"10-20-2220 - 10-20-2010",
  "tags":['Java','Python','JavaScript'],
  "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem "+
  "ipsum dolor sit amet, consectetur adipiscing elit . Aenean gravida massa odio, nec auctor risus posuere in."
},
{
  "title": "Masters - Telecommunications",
  "period":"10-20-2220 - 10-20-2010",
  "tags":['Java','Python','JavaScript'],
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem "+
  "ipsum dolor sit amet, consectetur adipiscing elit . Aenean gravida massa odio, nec auctor risus posuere in."
},
{
  "title": "Bahelors - Electronics and Communications",
  "period":"10-20-2220 - 10-20-2010",
  "tags":['Java','Python','JavaScript'],
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem "+
  "ipsum dolor sit amet, consectetur adipiscing elit . Aenean gravida massa odio, nec auctor risus posuere in."
}
];

var ExperinceListClass = CreateClass({
  render: function() {
    var i =0;
    var class_name;
    var experincetNodes = experince_list.map(function (current_element){
      i++;
      if(i%2 == 0){
        class_name = 'experince-inner-box even-box' ;
      } else {
        class_name = 'experince-inner-box odd-box';
      }
      return (
      <div className = {class_name} key={i}>
        <h4 className = "title-holder shadow"> {current_element.title} </h4>
        <p className = "period"> {current_element.period} </p>
        <p className = "description"> {current_element.description} </p>
      </div>
      );
    });
    return (
      <div className = "experince-outer-box">
      <h4>Experience</h4>
      <hr className="lines"/>
        {experincetNodes}
      </div>
    );
  }
});

class ExperinceLoader extends  React.Component {

render() {
  return (
      <ExperinceListClass />
  )
  }
}

export default ExperinceLoader;
