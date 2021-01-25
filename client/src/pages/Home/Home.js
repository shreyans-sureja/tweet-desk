import React from 'react'
import Login from "../UserManagement/Login";
import Register from "../UserManagement/Register";
import './home.css'

const Home = () => {
    return (
        <div className="d-flex justify-content-between p-4 my-4">
            <div className="w-100 m-5 card d-flex justify-content-center">
            <Login />
            </div>
            <div className="w-100 card m-5 py-4">
            <Register />
            </div>
        </div>
    )
}

export default Home;
