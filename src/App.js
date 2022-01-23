import React from 'react';
import { Link, useParams } from 'react-router-dom'  

const Homepage = () => {  
 const students = [
              {
                'id': 1, 
                'name': 'Praveen', 
                'gender': 'Male',
                'email':'praveen@gmail.com',
                'age':'58',
                'position':'Developer',
              },
              {
                'id': 2, 
                'name': 'Nandhini', 
                'gender': 'Female',
                'email':'nandhini@gmail.com',
                'age':'65',
                'position':'Intern',
              },
              {
                'id': 3, 
                'name': 'Pavi', 
                'gender': 'Female',
                'email':'pavi@gmail.com',
                'age':'55',
                'position':'CEO',
              },
          ];
  
  return (
    <div className="container">
      <h3>Homepage</h3>
      <table className="table table-bordered">
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
                  {student.name}
                </Link>
              </td>
              <td>{student.gender}</td>
            </tr>
          ))}

      </table>
    </div>
  );
}
  
const Userdetails = () => { 
  let { student_id } = useParams();
  const students = [
      {
        'id': 1, 
        'name': 'Praveen', 
        'gender': 'Male',
        'email':'praveen@gmail.com',
        'age':'58',
        'position':'Developer',
      },
      {
        'id': 2, 
        'name': 'Nandhini', 
        'gender': 'Female',
        'email':'nandhini@gmail.com',
        'age':'65',
        'position':'Intern',
      },
      {
        'id': 3, 
        'name': 'Pavi', 
        'gender': 'Female',
        'email':'pavi@gmail.com',
        'age':'55',
        'position':'CEO',
      },
  ];

  return (
    <div className="container">
      <h3>Userdetails {student_id}</h3>
      <table className="table table-bordered">
          <tr>
            <th>Name</th>
            <td>
              {}
            </td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>
              {}
            </td>
          </tr>
          <tr>
            <th>Email</th>
            <td>
              {}
            </td>
          </tr>
          <tr>
            <th>Age</th>
            <td>
              {}
            </td>
          </tr>
          <tr>
            <th>Position</th>
            <td>
              {}
            </td>
          </tr>
      </table>
    </div>
  )

}

export { Homepage, Userdetails };