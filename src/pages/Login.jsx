import React,{useState} from 'react'
import './Login.css'
import {auth} from '../components/Firebase'
import {Link, useHistory} from 'react-router-dom'

function Login() {
    const history = useHistory();
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const loginUser = event =>{
        event.preventDefault()
        auth.signInWithEmailAndPassword(userEmail,userPassword)
        .then((auth) => {
            history.push('/')
        })
        .catch(e => alert(e.message))
    }

const signUpUser = event => {
    event.preventDefault()
    auth.createUserWithEmailAndPassword(userEmail, userPassword)
    .then(auth=> {
        history.push('/');
    })
    .catch(e => alert(e.message))
}

    return (
        <div className="login">
            <div className="login__container">
                <Link>
                <img className="login__logo" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9//1024px-Amazon_logo.svg.png"/>
                </Link>
                <h5>sign in</h5>
                <form>
                    <h5>Email</h5>
                    <input value={userEmail} onChange={event => setUserEmail(event.target.value)} type="email" />
                    <h5>password</h5>
                    <input value={userPassword} onChange={event => setUserPassword(event.target.value)} type="password" />
                    <button onClick={loginUser} className="login__signInButton" type="submit">sign in</button>
                    <p>by signing  in, you agree to TLW's terms and conditions</p>
                    <button onClick={signUpUser} className="login__signUpButton">Create an account</button>
                </form>
            </div>
            
        </div>
    )
}

export default Login
