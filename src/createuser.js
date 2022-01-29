import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const CreateUser = () => {  
    
    const [name, setName] = useState("");
    const [gender, setGender] = useState(1);
    const [classs, setClass] = useState("");
    const [seat, setSeat] = useState("");
    const [club, setClub] = useState("");
    const [persona, setPersona] = useState("");

return(
<div className='container'>
    <div className='row'>
        <div className='col'>
        <form>
                <fieldset>Create New user</fieldset>
                <br></br>
                <br></br>
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
                <button className="btn btn-primary" value="Create">Create</button>
            </form>
        </div>
    </div>
</div>
);
}

export { CreateUser };