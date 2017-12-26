import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'
import Section from './section';
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Project extends Component {
  render() {
    return ( 	
          <ScrollableAnchor id={'projects'}>	
            <Section styles='our-work'>
               <h3 className='title'>Projects</h3>
               <div className="projects">
                  <div className="project project-color">
                     <p>Example project 1</p>
                     <img src={`${process.env.PUBLIC_URL}/img/signature.png`}/>
                     <div> description 1 </div>
                  </div>

                  <div className="project project-color">

                    <p>Example project 2</p>
                  </div>

                  <div className="project project-color">

                    <p>Example project 7</p>
                  </div>

                  <div className="project project-color">

                    <p>Example project 4</p>
                  </div>

                  <div className="project project-color">

                    <p>Example project 5</p>
                  </div>

                  <div className="project project-color">

                    <p>Example project 6</p>
                  </div>
               </div>
            </Section>
          </ScrollableAnchor>
    );
	}
}