import React, { Component } from 'react';
import Avatar from 'react-avatar';
import ScrollableAnchor from 'react-scrollable-anchor'
import 'font-awesome/css/font-awesome.css'
import Header from './header';
import Page from './page';
import Section from './section';
import Resume from './resume';
import Background from './background';
import Top from './top';
import Projects from './projects';
import HireMe from './hireMe';
import ContactForm from './contact-form';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Top/>
        <Header/>
        <Page>
          <Background/>
          <Projects/>
          <HireMe/>
        </Page>
      </div>
    )
  }
}