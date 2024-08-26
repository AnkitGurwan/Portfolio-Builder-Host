import React, { useState } from 'react';
import AuthContext from './AuthContext';

const AuthState = (props) => {
    // Initialize state to hold student information
    const [studInfo, setStudInfo] = useState({ name: "", email: "", roll: "" });
    const url = "http://localhost:5001";

    // Function to redirect the user to the Microsoft login page
    const userLogin = async () => {
        window.location.href = `${url}/auth/microsoft`;
    }

    // Function to get token and user information from the server
    const getToken = async (code) => {
        const response = await fetch(`${url}/auth/microsoft/getToken`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'Code': code
            }
        });

        const json = await response.json();

        // Store user information in localStorage
        localStorage.setItem('studName', json.studInformation.givenName);
        localStorage.setItem('studId', json.studInformation.mail);
        localStorage.setItem('studRoll', json.studInformation.surname);
        localStorage.setItem('studJob', json.studInformation.jobTitle);

        // Update state with user information
        setStudInfo({
            ...studInfo,
            name: json.studInformation.givenName,
            roll: json.studInformation.surname,
            email: json.studInformation.mail
        });
    }

    // Function to log the user out and redirect to logout endpoint
    const logOut = async () => {
        const tenantID = process.env.REACT_APP_MICROSOFT_GRAPH_TENANT_ID;
        const logoutEndpoint = `https://login.microsoftonline.com/${tenantID}/oauth2/v2.0/logout?post_logout_redirect_uri=${process.env.REACT_APP_FRONTEND_URL}`;
        window.location.href = logoutEndpoint;
    }

    // Provide the AuthContext to child components
    return (
        <AuthContext.Provider value={{ userLogin, getToken, logOut, studInfo, setStudInfo }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthState;