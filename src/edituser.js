import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios'

const EditUser = () => {  
    const [allstudents] = useState([]);
    const [students,update_allstudents] = useState([]);
    let { student_id } = useParams();
    const [name, setName] = useState("");
    const [gender, setGender] = useState(1);
    const [classs, setClass] = useState("");
    const [seat, setSeat] = useState("");
    const [club, setClub] = useState("");
    const [persona, setPersona] = useState("");
 
    const Getfromjsonfile = () => {
        try{
          fetch( "/students.json" )
            .then(response => response.json())
            .then(json_response => {
              update_allstudents(json_response)
            })
        }
        catch(error){
          console.log("Error:", error)
        }
    }
    
    useEffect(() => {
        Getfromjsonfile();
    })
    
    const EditBtn = async () => {
      let newjson = {
          "Name" : name,
          "Gender" : gender,
          "Class" : classs,
      }
        
      //axios.post('http://localhost:44307/Api/Student/AddotrUpdatestudent/', newjson).then(res => console.log(res.data));  
    }

  
     
return(
<div className='container'>
    <div className='row'>
        <div className='col'>
        
      {
        students.map((item) => {
          return (parseInt(item.id) === parseInt(student_id) ? 
          
          <table className="table table-bordered">
           
            <tbody>
            
            <tr>
              <th>Name</th>
              <td>
              <input className="form-control" type="text" onChange={e => setName(e.target.value)} required  value={item.Name} /> 
              </td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>
              <select className="form-control" onChange={e => setGender(e.target.value)} value={item.Gender}>
                    <option value="0">
                        Male
                    </option>
                    <option value="1">
                        Female
                    </option>
                </select>              </td>
            </tr>
            <tr>
              <th>Class</th>
              <td>
               <input className="form-control" type="text" onChange={e => setClass(e.target.value)} required  value={item.Class} /> 
              </td>
            </tr>
            <tr>
              <th>Seat</th>
              <td>
              <input className="form-control" type="text" required onChange={e => setSeat(e.target.value)} value={item.Seat} /> 
              </td>
            </tr>
            <tr>
              <th>Club</th>
              <td>
              <input className="form-control" type="text" required onChange={e => setClub(e.target.value)} value={item.Club} /> 
              </td>
            </tr>   
            <tr>
              <th>Persona</th>
              <td>
              <input className="form-control" type="text" required onChange={e => setPersona(e.target.value)} value={item.Persona} /> 
              </td>
            </tr>  
          
          
            </tbody>
          </table>
          :"")
        })
      }
   
                <button className="btn btn-primary" value="Edit" onClick={EditBtn}>Edit</button>
        </div>
    </div>
</div>
);
}

export { EditUser };