import React, { Component } from 'react';
import AlertContainer from 'react-alert';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.alertOptions = {
      offset: 14,
      position: 'top right',
      theme: 'light',
      time: 5000,
      transition: 'fade'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const { name, email, message } = this.state;
    if(name.trim() === '' || email.trim() === '' || message.trim() === '') {
      this.msg.error('Whoops! Name, Email and Message are required.');
      event.preventDefault();
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} action="https://formspree.io/sidhant0312@gmail.com" method="POST">
        <input type='text' name='name' placeholder='Name' value={this.state.name} onChange={this.handleChange} />
        <input type='text' name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange} />
        <textarea name='message' placeholder='How can I help you?' value={this.state.message} onChange={this.handleChange} />
        <button type='submit' className='btn send-btn'>Send</button>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
      </form>
    )
  }
}
