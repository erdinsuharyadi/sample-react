import React from 'react'
import { connect } from 'react-redux'

class Main extends React.Component {

  componentDidMount() {
    console.log('didMount', this.props.authUser.data.token)
    
    if(this.props.authUser.data.token){
      this.props.history.push('/home')
    } else {
      this.props.history.push('/login')
    }
  }

  render() {
    return null
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.auth
  }
}

export default connect(mapStateToProps) (Main)