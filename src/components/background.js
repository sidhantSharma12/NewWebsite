import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'
import Section from './section';
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Background extends Component {
	render() {
    return (
          <ScrollableAnchor id={'background'}>
            <Section styles='our-work overriding'>
              <h3 className='title'>Who am I?</h3>
              <p className="background-description">I am a software developer currently pursuing my undergrad in Computer Engineering at the University of Waterloo. </p>
              <p className="background-description">My goal is to use technology to create applications that make people's lives easier, simpler, and more fun.  In my spare time, I enjoy coding, taking photos, and playing cricket. </p>
              <p className="background-description">For employment opportunities, please see the contact form at the bottom of the site. Alternatively, you can email me directly at sidhant0312@gmail.com. Keep scrolling for a list of projects.</p>     
           </Section>
         </ScrollableAnchor>
        );
  }
}