import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const User ={
    email: 'hongik2024@gmail.com',
    pw: 'gdsc2024'
}

function Login(){
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const navigate = useNavigate();

    const handleEmail = (event) =>{
        setEmail(event.target.value);
    }

    const handlePw = (event) =>{
        setPw(event.target.value);
    }

    const confirmLogin = (event) =>{
        event.preventDefault();
        if(email === User.email && pw === User.pw){
            alert('로그인 성공')
            navigate('/succeed');
        }
        else {
            alert('로그인 실패')
            navigate('/');
        }
    }

    return(
    <div>
        <form onSubmit={confirmLogin}>
            <fieldset>
                <legend>로그인</legend>
                <label for="email">Email: </label>
                <input 
                type = "email" 
                name = "Email"
                placeholder='hongik2024@gmail.com'
                value = {email}
                onChange={handleEmail}/><br></br>

                <label for ="pwd">Password: </label>
                <input 
                type = "password"
                name = "Pw"
                placeholder="gdsc2024"
                value = {pw}
                onChange={handlePw}/><br></br>

                <button type="submit">로그인</button>
          </fieldset>
        </form>
    </div>
    );
}

export default Login;