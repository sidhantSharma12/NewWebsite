import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'
import Section from './section';
import ContactForm from './contact-form';
import ScrollableAnchor from 'react-scrollable-anchor'

export default class HireMe extends Component {
  render() {
    return (
              <ScrollableAnchor id={'hire-me'}>		
	            <Section styles='contact'>
	          		<h3 className='title'>Contact me for opportunities!</h3>
	          		<ContactForm />
	              <p></p>
	          	</Section>
          	  </ScrollableAnchor>
    );
}
}