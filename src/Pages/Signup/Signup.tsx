import { useState } from "react";
import Button from "../../Components/Buttons/button/Button";
import CommonTextField from "../../Components/TextFields/CommonField/CommonTextField";
import '../Login/style.css';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [signup,setSignup] = useState({
        username:'',
        password:''
    });
    console.log("signup ==>> ",signup);
    const changeHandler = (e:any) => {
        setSignup((prev: any) =>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }
    return <div className="login-page">
    <h1 className="login-title">Sign Up</h1>
    <div>
        <CommonTextField 
        name="username"
         placeholder="Enter your email" 
         type="email"
          changeHandler={changeHandler}
          value={signup.username}
           />
        <CommonTextField 
        name="password" 
        placeholder="Enter your password" 
        type="password" 
         changeHandler={changeHandler}
         value={signup.password}
         />
        <Button title="Sign up" clickEvent={(e)=>{
            let users = window.localStorage.getItem("users");
            if(!!users){
                let arrayOfUsers = JSON.parse(users);
                let checkIfUserExists = arrayOfUsers?.filter(element=>{
                    return element?.username === signup.username;
                });
                if(checkIfUserExists?.length > 0){
                    alert("user already exists.")
                }else{
                    window.localStorage.setItem("users",JSON.stringify([...arrayOfUsers,signup]));
                    navigate('/login');
                }
            }else{
                window.localStorage.setItem("users",JSON.stringify([signup]));
                navigate('/login');
            }
        }} />
    </div>
</div>
}

export default Signup;