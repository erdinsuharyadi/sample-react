import React from 'react';
import { 
  Button, 
  FormGroup, 
  Input, 
  Label, 
  } from 'reactstrap';
import CustomNavBar from '../components/NavBar'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fullname : '',
      username : '',
      password : ''
    }
  }

  handleClick =() => {
    console.log(this.state)
    alert(this.state.username)   
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    return(
      <div>
        <CustomNavBar titleNavbar="Awesome Project" setColor="dark" />

        <div className="col-lg-3">
          <FormGroup>
            <Label>Your Name</Label>
            <Input type="text" placeholder="Your Name" name="fullname" onChange={e => this.handleChange(e)} />
            <Input type="text" placeholder="Username" name="username" onChange= {e => this.handleChange(e)} />

            <Input type="password" name="password" onChange= {e => this.handleChange(e)} />
          </FormGroup>
          <Button onClick={this.handleClick} outline color="primary">Klik Me!</Button>
        </div>
      </div>
    )
  }
}

export default Home