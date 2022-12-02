import React from 'react';
import logo from '../asset/bl.jpg';
import './PageCss.css'

class Page extends React.Component{
    url = "https://www.bridgelabz.com/"
    constructor(){
      super();
      this.state = {
        userName: '',
        nameError: ''
      }
    }
  
    onClick = () =>{
      window.open(this.url,"_blank");
    }
  
    onNameChange = (event)=>{
      const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
      this.setState({userName: event.target.value})
      if(nameRegex.test(event.target.value)){
        this.setState({nameError: ""})
      }else{
        this.setState({nameError: "Name is Incorrect"})
      }
    }
    render(){
      return(
        <div>
          <h1>Hello {this.state.userName} from Bridgelabz</h1>
          <img src={logo} onClick={this.onClick}
          alt="The Bridgelabz logo: a Bridge to Employement through Lab Works"/>
        <h3>
          <input onChange={this.onNameChange}/>
          <span className='error-output'>{this.state.nameError}</span>
        </h3>
        <p> At BridgeLabz, we're a techie community of </p>
        <li>technologists</li>
        <li>thinkers</li>
        <li>buiders</li>
        <p> Working together to keep the Tech Employability of Engineers alive and accessible, 
        so Tech Compines worldwide can get contributors and creators for Technology Solutions.
        We believe this act of humn collaboration across an employability platform is essential 
        to indivisual growth and collections future.</p>
        <p>To know about us, visit <a href="http://www.bridgelabz.com/">BridgeLabz</a> to learn
        even more about our mission i.e. <strong>Employability to all</strong></p>
      </div>
      )
     }
  }

  export default Page;