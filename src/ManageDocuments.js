import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

class DocumentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        uploads: [
        {
        id: 1,
        label: 'sales report',
        filename: 'sales.xls'
        },
        {
        id: 2,
        label: 'quaterly summary',
        filename: 'summary.xls'
        },
        {
        id: 3,
        label: 'projection',
        filename: 'projection.pdf'
        },
        ]
        }
    };


  

  render() {
    console.log(this.state.users);
    return (
      <>
 <div className="header">

</div>
<div className="inner-container">
  <h3 className="lh-1 mb-4">MyUploads</h3>
  <table className="table table-bordered">
    <thead className="table-light">
      <tr>
        <th scope="col">Label</th>
        <th scope="col">FileName</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {
   // if (Object.keys(users).length > 0)
    //{
    this.state.uploads.map((item, index) => (
              <tr key={index}>
                <td>{item.label}</td>
                <td>{item.filename}</td>

        <td>
          <div className="d-flex justify-content-start">
          <p><Link class="Edit" href="#">Edit</Link></p>
              <p class="mx-2">|</p>
              <p><Link class="Delet" href="#">Delete</Link></p>
 
          </div>
        </td>       
        
      </tr>

    )) }
  <input type="file"/><button className="btn btn-primary">+add Upload</button>
   
    </tbody>
  </table>
  </div>
 </>

 
);
}
}

export default DocumentList;
