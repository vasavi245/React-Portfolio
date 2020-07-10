import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import data from "./components/myData";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import axios from "axios";
import './App.css';

// trying on to contact from submit still had to handle this in express(future development)
class App extends React.Component {
   constructor(props){
     super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    }
    
  }
  //handling submit with axios
    handleSubmit(event) {
      event.preventDefault();
      console.log(this.state);
      axios({
        method: "POST",
        url: "http://localhost:3002/send",
        data: this.state
      }).then((response)=>{
        if(response.data.status === "success"){
          alert("Message Sent.");
          this.resetForm()
        }else if(response.data.status === "fail"){
          alert("Message failed");
        }
      })
      }

      resetForm(){
        this.setState({name:'', email:'', message:'' })
      }
    
      // onChange function handling
      handleNameChange(event) {
        this.setState({name: event.target.value})
      }
      handleEmailChange(event) {
        this.setState({email: event.target.value})
      }
     handleMessageChange(event) {
        this.setState({message: event.target.value})
      }

    
  render() {
  return (
   <Router>
      <Header /> 
      <About />
      <Portfolio data={data} />
      <Contact
      onSubmit={this.handleSubmit}
      onNameChange={this.handleNameChange}
      onEmailChange={this.handleEmailChange}
      onMessageChange={this.handleMessageChange}
       />
       <Footer />
    </Router>
  );
}
}

export default App;
