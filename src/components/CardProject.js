import React, { Component } from "react";

class CardProject extends Component {

  render() {
    return (
      <div className="card bg-light mb-3 p-2 shadow-sm rounded">
        <div className="card-header">
          {this.props.datepost}
        </div>
        <div className="card-body">
          <div className="d-inline-block align-middle">
            <h6 className="card-title">{this.props.projectname}</h6>
            <p className="card-text ">{this.props.projectdesc}</p>
          </div>
        </div>
      </div>
    );
  }
}

CardProject.defaultProps = {
  companyname: "Company Name",
  datepost: "00/00/0000",
  projectname: "Project Name",
  projectdesc: "Project Desciption",
  idproject: "1"
};

export default CardProject;
