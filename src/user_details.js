import React from 'react';
  
function Userdetails() {
  
 const students = [
              {
                'id': 1, 
                'name': 'Praveen', 
                'gender': 'Male',
                'url': 'https://google.com'
              },
              {
                'id': 2, 
                'name': 'Nandhini', 
                'gender': 'Female',
                'url': 'https://facebook.com'
              },
              {
                'id': 3, 
                'name': 'Pavi', 
                'gender': 'Female',
                'url': 'https://instagram.com'
              },
          ];
  
  return (
    <div className="container">
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
                <a href={student.url}>
                  {student.name}
                </a>
              </td>
              <td>{student.gender}</td>
            </tr>
          ))}

      </table>
    </div>
  );
}
  
export default Userdetails;