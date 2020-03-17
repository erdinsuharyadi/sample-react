import React, { Component } from 'react'
import { Container, Input, Button } from 'reactstrap'
import CustomNavBar from '../components/NavBar'
import axios from 'axios'

import { connect } from 'react-redux'
import { requestLogin } from '../redux/actions/auth'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    console.log(process.env.REACT_APP_BASE_URL)
  }
  
  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmitLogin = (event) => {
    event.preventDefault()
    const data = {
      username: this.state.username,
      password: this.state.password
    }

    if (this.state.username === "" && this.state.password === "") {
      alert("Field tidak boleh kosong !")
    } else {
      axios.post('http://3.82.228.249:4000/auth/login/', data)
        .then(res => {
          if(res.status === 200) {
            try {
              this.props.setDataLogin(res.data.result)
              this.props.history.push('/home')
            } catch(error) {
              console.log(error)
            }
          }
        })
        .catch(err => console.log(err))

      
    }
  }

  render() {
    return(
      <div>
        <CustomNavBar />
        <Container>
          <Input 
            type="text" 
            className="mb-2"
            name="username" 
            placeholder="username"
            onChange={(event)=>{this.handleUsername(event)}}
            />
          <Input 
            type="password" 
            className="mb-2"
            name="password" 
            placeholder="password"
            onChange={(event) => {this.handlePassword(event)}} />
          <Button 
            onClick={(event) => this.handleSubmitLogin(event)} type="submit"
          >Login</Button>
        </Container>
        
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setDataLogin: payload => dispatch({
    type: 'USER_LOGIN_FULFILED',
    payload
  })
})

export default connect(null, mapDispatchToProps) (Login)