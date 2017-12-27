import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'
import Section from './section';
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Project extends Component {
  render() {
    return ( 	
          <ScrollableAnchor id={'projects'}>	
            <Section styles='our-work project-container'>
               <h3 className='title project-title'>Projects</h3>
               <div className="underliner"/>
               <div className="projects">
                  <a href="https://github.com/sidhantSharma12/Networking-Project" className="project project-color">
                     <p className="project-name">Socket Programming</p>
                     <p className="frameworks"> C </p>
                     <img className="project-pic" src={`${process.env.PUBLIC_URL}/img/proxy.png`}/>
                     <div className="project-info"> Created reverse proxy in C which can handle multiple client and server requests simultaneously</div>
                  </a>
                  <a href="https://github.com/sidhantSharma12/Rent-Me" className="project project-color">
                    <p className="project-name">Rent Me</p>
                    <p className="frameworks"> React, Node.js, MondoDB</p>
                    <img className="project-pic" src={`${process.env.PUBLIC_URL}/img/rentme.png`}/>
                    <div className="project-info"> An application which allows users to rent household items </div>
                  </a>
                  <a href="https://github.com/sidhantSharma12/LetsMeet" className="project project-color">
                    <p className="project-name">Lets Meet</p>
                    <p className="frameworks"> React Native, Flask, MySQL</p>
                    <img className="project-pic" src={`${process.env.PUBLIC_URL}/img/letsmeet.png`}/>
                    <div className="project-info"> An application which allows users to mark famous places</div>
                  </a>
                  <a href="https://github.com/sidhantSharma12/Food-Website" className="project project-color">
                    <p className="project-name">Hack The Six 2017</p>
                    <p className="frameworks"> React, Node.js, Mongoose</p>
                    <img className="project-pic" src={`${process.env.PUBLIC_URL}/img/food.png`}/>
                    <div className="project-info"> An application which allows people to buy and sell homemade food </div>
                  </a>
                  <a href="https://github.com/sidhantSharma12/Arduino-Vacuum-Cleaner" className="project project-color">
                    <p className="project-name">Arduino Vacuum Cleaner</p>
                    <p className="frameworks">Arduino</p>
                    <img className="project-pic" src={`${process.env.PUBLIC_URL}/img/vacuumcleaner.png`}/>
                    <div className="project-info">Created Arduino interface to read in from ultrasonic sensors to turn on Servo and PMDC motors. Developed algorithm to swiftly avoid obstacles</div>
                  </a>
                  <a href="https://github.com/sidhantSharma12/Node-IFTTT-AlarmClock" className="project project-color">
                    <p className="project-name">IFTTT AlarmClock</p>
                    <p className="frameworks">Javascript</p>
                    <img className="project-pic" src={`${process.env.PUBLIC_URL}/img/alarmclock.png`}/>
                    <div className="project-info">This application allows one to set a number of timers at once. When one of the timers finishes, the app calls the IFTTT API which will notify you</div>
                  </a>
                  <a href="https://github.com/sidhantSharma12/Memory-Management" className="project project-color">
                    <p className="project-name">Memory Management</p>
                    <p className="frameworks">C</p>
                    <img className="project-pic" src={`${process.env.PUBLIC_URL}/img/memorymanagement.png`}/>
                    <div className="project-info">Implemented two memory management algorithms: Best fit and Worst fit. Done by maintaining a linked list for memory which has been allocated and not allocated</div>
                  </a>
                  <a className="project project-color">
                    <p className="project-name">Producer Consumer Problem</p>
                    <p className="frameworks">C</p>
                    <img className="project-pic" src={`${process.env.PUBLIC_URL}/img/producerconsumer.png`}/>
                    <div className="project-info">This is a concurrency and communication project which solves the producer consumer synchronization problem using threads and processes</div>
                  </a>
               </div>
            </Section>
          </ScrollableAnchor>
    );
	}
}