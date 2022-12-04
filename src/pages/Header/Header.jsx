import React from 'react'
import "./Header.css"
import { Button } from 'antd'
import { useNavigate } from "react-router-dom";

function Header(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div className='header' >
                <p style={{ fontFamily: "initial", fontSize: "23px" }}>
                    Logo
                </p>
                {props?.logout === false ? null : <Button
                    onClick={() => navigate("/Logout")}
                    className='buttonStyle'>
                    Logout
                </Button>}
            </div>
        </div>
    )
}

export default Header