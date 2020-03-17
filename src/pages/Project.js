import React, { Component } from 'react'
import CustomNavBar from '../components/NavBar'
import CardProject from '../components/CardProject'
import axios from 'axios'
class Project extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data_project: []
    }
  }

  componentDidMount() {
    this.getDataProject()
  }

  async getDataProject() {
    await axios.get("http://3.82.228.249:4000/project/comp/3")
      .then(res => {
        let dataArr = res.data.result
        console.log(dataArr)
        this.setState({data_project: dataArr})
      })
      .catch(err => console.log(err))
  }

  render(){
    return(
      <div>
        <CustomNavBar titleName="List Project" />
        <div className="container">
            <h1 className="title">LIST PROJECT</h1>
            <hr />

            {this.state.data_project.map((val, idx) => (
              <CardProject
                key={idx}
                projectname={val.project_name}
                projectdesc={val.description}
                 />
            ))}
        </div>
      </div>
    )
  }
}

export default Project