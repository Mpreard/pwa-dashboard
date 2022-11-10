import './App.css';
import {useEffect, useState} from "react";
import {auth} from './firebase';
import {onAuthStateChanged} from 'firebase/auth';
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";
import Home from "./pages/Home";

function App() {
    const [user, setUser] = useState(null)
    const [authState, setAuthState] = useState(null)

    useEffect(() => {
        return onAuthStateChanged(auth,
                async authenticateUser => {
                    if (authenticateUser) {
                        setUser(authenticateUser.email)
                        setAuthState('home')
                    } else {
                        setUser(null)
                        setAuthState('login')
                    }
                })
        }, [user]
    )

    if(authState === 'login') return <Login setUser={setUser} setAuthState={setAuthState}/>
    if(authState === 'register') return <Register setUser={setUser} setAuthState={setAuthState}/>

    return <Home />
/*
    if(authState === null) return <div>loading....</div>
    if(user) return <Home user={user} setUser={setUser} setAuthState={setAuthState}/> */
}

export default App;
