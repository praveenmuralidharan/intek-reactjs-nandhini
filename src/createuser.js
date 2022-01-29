import { Link, useParams } from 'react-router-dom';
const CreateUser = () => {  

return(
<div className='container'>
<div className='row'>
    <div className='col'>
        <form>
            <fieldset>Create New user</fieldset>
        <br></br>
        <br></br>
    <label>Name</label>&nbsp;&nbsp;
    <input type="text" required></input>
    <br></br>
    <br></br>
    <label>Gender</label>&nbsp;&nbsp;
    <select>
        <option>
            Male
        </option>
        <option>
            Female
        </option>
    </select>
    <br></br>
    <br></br>
    <label>Class</label>&nbsp;&nbsp;
    <input type="text" required></input>
    <br></br>
    <br></br>
    <label>Seat</label>&nbsp;&nbsp;
    <input type="text" required></input>
    <br></br>
    <br></br>
    <label>Club</label>&nbsp;&nbsp;
    <input type="text" required></input>
    <br></br>
    <br></br>
    <label>Persona</label>&nbsp;&nbsp;
    <input type="text" required></input>
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