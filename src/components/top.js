import React, { Component } from 'react';
import Avatar from 'react-avatar';
import ScrollableAnchor from 'react-scrollable-anchor'
import 'font-awesome/css/font-awesome.css'
import Section from './section';         

export default class Top extends Component {
  render() {
    return (

          <ScrollableAnchor id={'top'}>
            <Section styles='hero'>
              <div className='background-image' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/background.jpg)`}}></div>
              <div><Avatar src={`${process.env.PUBLIC_URL}/img/sid.png`} size={200} round={true} /></div>
              <h1>Sidhant Sharma</h1>
              <h3>Computer Engineering Student at University of Waterloo</h3>
              <h3 style={{ maxWidth: 480 }}>Aspiring Software Developer</h3>
              <div style={{ marginBottom: '30px' }}>
                <a href='https://github.com/sidhantSharma12' className='btn-icon' target='_blank'><i className='fa fa-github-square'></i></a>
                <a href='https://www.linkedin.com/in/sidhant-sharma-4a2a3a147' className='btn-icon' target='_blank'><i className='fa fa-linkedin-square'></i></a>
              </div>
              <a href='#hire-me' className='btn'>Hire Me!</a>
            </Section>
          </ScrollableAnchor>
          )
  }
}