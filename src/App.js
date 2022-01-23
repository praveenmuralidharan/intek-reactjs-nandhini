import React from 'react';
  
function App() {
  
 const students = [
              {
                'id': 1, 
                'name': 'Praveen', 
                'Gender': 'Male'
              },
              {
                'id': 2, 
                'name': 'Nandhini', 
                'Gender': 'Female'
              },
              {
                'id': 3, 
                'name': 'Pavi', 
                'Gender': 'Female'
              },
          ];
  
  return (
    <div className="container">
        
   
        <table className="table table-bordered">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
  
            {students.map((student, index) => (
              <tr data-index={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.Gender}</td>
              </tr>
            ))}
  
        </table>
  
    </div>
  );
}
  
export default App;