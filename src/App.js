import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Homepage = () => {  

  const [allstudents, update_allstudents] = useState([]);
  const [students, update_students] = useState([]);
  const [rowLimit, update_rowLimit] = useState(0);

  const Getfromjsonfile = () => {
    try{
      fetch( "/students.json" )
        .then(response => response.json())
        .then(json_response => {
          update_allstudents(json_response)
          update_students(json_response.slice(rowLimit, rowLimit + 10))
        })
    }
    catch(error){
      console.log("Error:", error)
    }
  }

  const prev = () => {
    update_rowLimit(rowLimit - 10)
  };

  const next = () => {
    update_rowLimit(rowLimit + 10)
  };

  useEffect(() => {
    Getfromjsonfile();
  },[rowLimit])



  return (
    <div className="container">
      <Link to={'/createuser'}>
        Create
      </Link> 
      <h3>Homepage</h3>
      <table className="table table-bordered">
        <tbody>
          <tr>
              <th>Sl No</th>
              <th>Name</th>
              <th>Gender</th>
          </tr>
        
          {students.map((student, index) => (
            <tr data-index={index}>
              <td>{student.id}</td>
              <td>
                <Link to={'/userdetails/' + student.id}>
                  {student.Name}
                </Link>
              </td>
              <td>
                {
                  (parseInt(student.Gender) === 0 ? "Male" : "Female")
                  
                 }
                </td>
            </tr>
          ))}
          </tbody>
      </table>
      <div className="row">
        <div className="col-md-12">
        { (rowLimit !== 0 ? <button className="btn btn-primary" onClick={prev}> Previous </button> : "") }
           
        { (rowLimit + 10 < allstudents.length ? <button className="btn btn-primary" onClick={next}> Next </button> : "") }
        </div>
      </div>
    </div>
  );
}
  
const Userdetails = () => { 
  let { student_id } = useParams();

  const [students, update_students] = useState([]);

  const Getfromjsonfile = () => {
    try{
      fetch( "/students.json" )
        .then(response => response.json())
        .then(json_response => {
          update_students(json_response)
        })
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    Getfromjsonfile();
  },[])

  return (
    <div className="card">
    <div className="container">
      {
        students.map((item) => {
          return (parseInt(item.id) === parseInt(student_id) ? 
          
          <table className="table table-bordered">
           
            <tbody>
            
            <tr>
              <th>Name</th>
              <td>
                {item.Name}
              </td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>
              {
                  (parseInt(item.Gender) === 0 ? "Male" : "Female")
                  
                 }
              </td>
            </tr>
            <tr>
              <th>Class</th>
              <td>
                {item.Class}
              </td>
            </tr>
            <tr>
              <th>Seat</th>
              <td>
                {item.Seat}
              </td>
            </tr>
            <tr>
              <th>Club</th>
              <td>
                {item.Club}
              </td>
            </tr>   
            <tr>
              <th>Persona</th>
              <td>
                {item.Persona}
              </td>
            </tr>  
            <tr>
              <th>Crush</th>
              <td>
                {item.Crush}
              </td>
            </tr>  
            <tr>
              <th>BreastSize</th>
              <td>
                {item.BreastSize}
              </td>
            </tr>  
            <tr>
              <th>Strength</th>
              <td>
                {item.Strength}
              </td>
              </tr> 
              <tr>
              <th>Hairstyle</th>
              <td>
                {item.Hairstyle}
              </td>
            </tr>  
            <tr>
              <th>Color</th>
              <td>
                {item.Color}
              </td>
            </tr>  
            <tr>
              <th>Eyes</th>
              <td>
                {item.Eyes}
              </td>
            </tr>  
            <tr>
              <th>EyeType</th>
              <td>
                {item.EyeType}
              </td>
            </tr>  
            <tr>
              <th>Stockings</th>
              <td>
                {item.Stockings}
              </td>
            </tr>  
            <tr>
              <th>Accessory</th>
              <td>
                {item.Accessory}
              </td>
            </tr>  
            <tr>
              <th>ScheduleTime</th>
              <td>
                {item.ScheduleTime}
              </td>
            </tr>  
            <tr>
              <th>ScheduleDestination</th>
              <td>
                {item.ScheduleDestination}
              </td>
            </tr>   <tr>
              <th>ScheduleAction</th>
              <td>
                {item.ScheduleAction}
              </td>
            </tr>  
              <tr>
              <th>Info</th>
              <td>
                {item.Info}
              </td>
            </tr>  
          
            </tbody>
          </table>
          :"")
        })
      }
    </div>
    </div>
  )

}

export { Homepage, Userdetails };

