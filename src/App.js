import React, { Component } from 'react';
// import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import TechStack from './Components/TechStack';
import Achievements from './Components/Achievements';
import Leadership from './Components/Leadership';
import Blog from './Components/Blog';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      resumeData: {},
      isLoading: true,
      darkMode: false
    };

    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  toggleDarkMode() {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode
    }), () => {
      if (this.state.darkMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
      }
    });
  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({
          resumeData: data,
          isLoading: false
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        this.setState({ isLoading: false });
        alert('Error loading resume data. Please refresh the page.');
      }.bind(this)
    });
  }

  componentDidMount(){
    this.getResumeData();

    // Check for saved dark mode preference
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
      this.setState({ darkMode: true });
      document.body.classList.add('dark-mode');
    }

    // Initialize Google Analytics if needed
    // ReactGA.initialize('UA-XXXXXXXXX-X');
    // ReactGA.pageview(window.location.pathname);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="loading-screen">
          <div className="loading-spinner"></div>
          <p>Loading portfolio...</p>
        </div>
      );
    }

    return (
      <div className="App">
        <button
          className="dark-mode-toggle"
          onClick={this.toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {this.state.darkMode ? '☀️' : '🌙'}
        </button>

        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <TechStack data={this.state.resumeData.techStack}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Achievements data={this.state.resumeData.achievements}/>
        <Leadership data={this.state.resumeData.leadership}/>
        <Blog data={this.state.resumeData.blog}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
