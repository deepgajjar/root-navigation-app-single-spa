import React,{useState} from "react";
import './style.css';
import Button from "../../Components/Buttons/button/Button";
import CommonTextField from "../../Components/TextFields/CommonField/CommonTextField";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [signin,setSignin] = useState({
        username:'',
        password:''
    });
    console.log("signin ==>> ",signin);
    const changeHandler = (e:any) => {
        console.log("event ==>> ",e);
        setSignin((prev: any) =>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }
    return <div className="login-page">
        <h1 className="login-title">Login</h1>
        <div>
            <CommonTextField 
            name="username" 
            placeholder="Enter your email" 
            type="email" 
            changeHandler={changeHandler}
            value={signin?.username}
            />
            <CommonTextField 
            name="password"
             placeholder="Enter your password" 
             type="password" 
             changeHandler={changeHandler} 
             value={signin?.password}
             />
            <Button title="Submit" clickEvent={(e)=>{
            let users = window.localStorage.getItem("users");
            if(!!users){
                let arrayOfUsers = JSON.parse(users);
                let checkIfUserExists = arrayOfUsers?.find(element=>{
                    return element?.username === signin.username;
                });
                if(!!checkIfUserExists){
                    if(checkIfUserExists?.username === signin.username && checkIfUserExists?.password === signin.password ){
                        window.localStorage.setItem("isLogged","true");
                    navigate("/");
                    }else{
                        alert("Please check your user name and password.");
                    }
                }else{
                    alert("user not found please check your user name.")
                }
            }else{
                alert("user not found please check your user name.")
            }
        }} />
        
            <div className="signup-txt" onClick={()=>{
                navigate('/signup');
            }}>
                <p>Don't have an account <span>Sign up here</span></p>
            </div>
        </div>
    </div>
}

export default Login;