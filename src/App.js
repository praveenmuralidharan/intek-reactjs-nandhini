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
                'position':'Develonpmper',
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
        {
          students.map((item) => {
            return (item.id === parseInt(student_id) ? 
            <table className="table table-bordered">
              <tr>
                <th>Name</th>
                <td>
                  {item.name}
                </td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>
                  {item.gender}
                </td>
              </tr>
              <tr>
                <th>Email</th>
                <td>
                  {item.email}
                </td>
              </tr>
              <tr>
                <th>Age</th>
                <td>
                  {item.age}
                </td>
              </tr>
              <tr>
                <th>Position</th>
                <td>
                  {item.position}
                </td>
              </tr>   
            </table>
            :"")
          })
        }
    </div>
  )

}

export { Homepage, Userdetails };