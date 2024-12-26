import React from "react";
import { useNavigate } from "react-router-dom";

export default function Protected() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        alert("로그아웃 되었습니다.");
        navigate("/");
    };

    return (
        <div className="page">
            <h1>로그인 성공 페이지</h1>
            <p>로그인 성공한 사람만 접근할 수 있는 페이지입니다.</p>
            <button 
                onClick={handleLogout}
                className="logoutButton"
            >
                로그아웃
            </button>
        </div>
    );
}