import React, {useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const users = {
    user1: {id: "abcd1234", pw: "1234"},
    user2: {id: "iris031008", pw: "12345678"},
    user3: {id: "helloword", pw: "return0;"},
}
export default function Login({setIsAuthenticated}) {

    const [idValue, setId] = useState('');
    const [pwValue, setPw] = useState('');
    const navigate = useNavigate();

    const saveUserId = (e) => {
        setId(e.target.value);
        //console.log(e.target.value);
    }

    const saveUserPw = (e) => {
        setPw(e.target.value);
        //console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const userFound = Object.values(users).find(
            (user) => user.id === idValue && user.pw === pwValue
        );

        if (userFound) {
            alert("로그인 성공");
            setIsAuthenticated(true);
            localStorage.setItem("authToken", "your_token_here");
            navigate("/protected");
        }

        else {
            alert("아이디 또는 비밀번호가 잘못되었습니다.");
        }
    };

    return (
        <div className="page">
            <h1>로그인 페이지</h1>
            <div className="titleWrap">
                <br/>로그인
            </div>

            <form onSubmit={handleSubmit}>
                <input 
                    required placeholder="Id" 
                    type="text" 
                    name="Id"
                    value={idValue}
                    onChange={saveUserId}
                />
                <br />
                <input 
                    style={{marginTop: "10px"}} 
                    required placeholder="password" 
                    type="password" 
                    name="pw"
                    value={pwValue}
                    onChange={saveUserPw}
                />
                <br />
                <input 
                    style={{marginTop: "20px"}} 
                    type="submit" 
                    value="로그인" 
                    className="loginButton"
                />
            </form>
        </div>
    )
}