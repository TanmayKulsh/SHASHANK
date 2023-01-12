// import { useNavigation } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const navigate = useNavigate();

    const [mail,setMail] = useState("");
    const [pwd,setPwd] = useState("");
    const [repwd,setRepwd] = useState("");



    return <div>
        <h1>Register Window</h1>

        <form>
        <li>
            Employee email ID: <input type="text" id="eid" 
            value = {mail}
            onChange={e => setMail(e.target.value)}
            ></input>
        </li>
        <li>
            Employee PassWord: <input type="text" id="pass"
            value = {pwd}
            onChange={e => setPwd(e.target.value)}
            ></input>
        </li>
        <li>
            Re-Enter PassWord: <input type="text" id="repass"
            value = {repwd}
            onChange={e => setRepwd(e.target.value)}
            ></input>
        </li>

        <button type="button" classname="btn btn-success">Submit</button>
        
        </form>
        <button title="Back" onClick={() => {
            navigate("/home");
        }}>

        </button>
    </div>
}
export default Register;