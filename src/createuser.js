import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CreateUser = () => {  

    const [allstudents, update_allstudents] = useState([]);
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
    

    const CreateBtn = () => {
        let newjson = {
            "Name" : name,
            "Gender" : gender,
            "Class" : classs,
            "Seat" :seat,
            "Club" : club,
            "Persona" : persona
        }
         
        Getfromjsonfile();
        update_allstudents[allstudents.push[newjson]];
    }
return(
<div className='container'>
    <div className='row'>
        <div className='col'>
     
                <label>Name</label>&nbsp;&nbsp;
                <input className="form-control" type="text" required onChange={e => setName(e.target.value)} value={name} />
                <br></br>
                <br></br>
                <label>Gender</label>&nbsp;&nbsp;
                <select className="form-control" onChange={e => setGender(e.target.value)} value={gender}>
                    <option value="0">
                        Male
                    </option>
                    <option value="1">
                        Female
                    </option>
                </select>
                <br></br>
                <br></br>
                <label>Class</label>&nbsp;&nbsp;
                <input className="form-control" type="text" required onChange={e => setClass(e.target.value)} value={classs} />
                <br></br>
                <br></br>
                <label>Seat</label>&nbsp;&nbsp;
                <input className="form-control" type="text" required onChange={e => setSeat(e.target.value)} value={seat}/>
                <br></br>
                <br></br>
                <label>Club</label>&nbsp;&nbsp;
                <input className="form-control" type="text" required onChange={e => setClub(e.target.value)} value={club}/>
                <br></br>
                <br></br>
                <label>Persona</label>&nbsp;&nbsp;
                <input className="form-control" type="text" required onChange={e => setPersona(e.target.value)} value={persona}/>
                <br></br>
                <br></br>
                <button className="btn btn-primary" value="Create" onClick={CreateBtn}>Create</button>
          
            {allstudents.length}
        </div>
    </div>
</div>
);
}

export { CreateUser };