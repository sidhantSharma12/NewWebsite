import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'
import Header from './header';
import Page from './page';
import Background from './background';
import Top from './top';
import Projects from './projects';
import HireMe from './hireMe';

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