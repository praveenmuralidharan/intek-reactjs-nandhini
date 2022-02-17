import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CreateUser = () => {  
    var FormErrors = {"name": false, "gender": false, "classs":false, "seat":false, "club":false,"persona":false}
    const [allstudents, update_allstudents] = useState([]);
    const [name, setName] = useState("");
    const [gender, setGender] = useState(1);
    const [classs, setClass] = useState("");
    const [seat, setSeat] = useState("");
    const [club, setClub] = useState("");
    const [persona, setPersona] = useState("");
    const [formValidations, setFormValidations] = useState(FormErrors);
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
    },[persona])
    function handleChange(event, param) {
       
        if(param === "name")
        {
            FormErrors['name'] = false
            setName(event.target.value);
            if((event.target.value).length < 3)
            {
                FormErrors['name'] = true
            }
            setFormValidations(FormErrors);
        }
      
        if(param === "classs")
        {
            FormErrors['classs'] = false
            setClass(event.target.value);
            if((event.target.value).length < 3)
            {
                FormErrors['classs'] = true
               
            }
            setFormValidations(FormErrors);
        }
        if(param === "seat")
        {
            FormErrors['seat'] = false
            setSeat(event.target.value);
            if((event.target.value).length < 3)
            {
                FormErrors['seat'] = true
               
            }
            setFormValidations(FormErrors);
        }
        if(param === "club")
        {
            FormErrors['club'] = false
            setClub(event.target.value);
            if((event.target.value).length < 3)
            {
                FormErrors['club'] = true
               
            }
            setFormValidations(FormErrors);
        }
        if(param === "persona")
        {
            FormErrors['persona'] = false
            setPersona(event.target.value);
            if((event.target.value).length < 3)
            {
                FormErrors['persona'] = true
             
            }
            setFormValidations(FormErrors);
        }
      }
    const CreateBtn = async () => {
      
        let newjson = {
            "Name" : name,
            "Gender" : gender,
            "Class" : classs,
            "Seat" :seat,
            "Club" : club,
            "Persona" : persona
        }
        
        update_allstudents(allstudents.concat(newjson));
    }
return(
<div className='container'>
    <div className='row'>
        <div className='col'>
     
                <label>Name</label>&nbsp;&nbsp;
                <input className="form-control" type="text" required onChange={(event) => handleChange(event, "name")} value={name} />
                {(formValidations['name'] ? <span className="text-danger">Minimum 3 characters required</span> : "")}
                <br></br>
                <br></br>
                <label>Gender</label>&nbsp;&nbsp;
                <select className="form-control" onChange={(event) => handleChange(event, "gender")} value={gender}>
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
                <input className="form-control" type="text" required onChange={(event) => handleChange(event, "classs")} value={classs} />
                {(formValidations['classs'] ? <span className="text-danger">Minimum 3 characters required</span> : "")}
                <br></br>
                <br></br>
                <label>Seat</label>&nbsp;&nbsp;
                <input className="form-control" type="text" required onChange={(event) => handleChange(event, "seat")} value={seat}/>
                {(formValidations['seat'] ? <span className="text-danger">Minimum 3 characters required</span> : "")}
                <br></br>
                <br></br>
                <label>Club</label>&nbsp;&nbsp;
                <input className="form-control" type="text" required onChange={(event) => handleChange(event, "club")} value={club}/>
                {(formValidations['club'] ? <span className="text-danger">Minimum 3 characters required</span> : "")}
                <br></br>
                <br></br>
                <label>Persona</label>&nbsp;&nbsp;
                <input className="form-control" type="text" required onChange={(event) => handleChange(event, "persona")} value={persona}/>
                {(formValidations['persona'] ? <span className="text-danger">Minimum 3 characters required</span> : "")}
                <br></br>
                <br></br>
                <button className="btn btn-primary" value="Create" onClick={CreateBtn}>Create</button>
        </div>
    </div>
</div>
);
}

export { CreateUser };