import Head from 'next/head'
import Link from 'next/link'
import { useState } from "react"
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (evt) => {
        evt.preventDefault();
        fetch('http://localhost:8000/signin',
        {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({"username": username,"password": password }),
            credentials: 'include'
        }).then((data)=> {
            // data = data.json();
            if(data.status === 200) {
                console.log(data);
                router.push('/transactions', undefined, { shallow: true });
            }
        } )
    }
    return (
    <>
        <Head>
            <meta charset="utf-8" />
            <title>Money.io - Sign In</title>
            <script src="../assets/js/jquery-1.11.1.min.js"></script>
            <script src="../assets/bootstrap/js/bootstrap.min.js"></script>
            <script src="../assets/js/jquery.backstretch.min.js"></script>
        </Head>
        <div className="top-content">
            <div className="inner-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 text">
                            <h1><strong>Money</strong>.io</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3 form-box">
                        	<div className="form-top">
                        		<div className="form-top-left">
                        			<h3>Login</h3>
                            		<p>Enter your username and password to log in:</p>
                        		</div>
                            </div>
                            <div className="form-bottom">
			                    <form role="form" method="post" className="login-form" onSubmit={handleSubmit}>
			                    	<div className="form-group">
			                    		<label className="sr-only" for="username">Username</label>
			                        	<input type="text" name="username" placeholder="Username..." className="form-username form-control" id="form-username" value={username} onChange={e => setUsername(e.target.value)}  />
			                        </div>
			                        <div className="form-group">
			                        	<label className="sr-only" for="password">Password</label>
			                        	<input type="password" name="password" placeholder="Password..." className="form-password form-control" id="form-password" value={password} onChange={e => setPassword(e.target.value)}  />
			                        </div>
			                        <button type="submit" className="btn">Sign in</button>
			                    </form>
                                <br /><Link href='/signup'><a>Sign up</a></Link>
		                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
)
}
