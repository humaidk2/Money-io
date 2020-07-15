import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
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
			                    <form role="form" method="post" className="login-form" onSubmit="signIn">
			                    	<div className="form-group">
			                    		<label className="sr-only" for="username">Username</label>
			                        	<input type="text" name="username" placeholder="Username..." className="form-username form-control" id="form-username" />
			                        </div>
			                        <div className="form-group">
			                        	<label className="sr-only" for="password">Password</label>
			                        	<input type="password" name="password" placeholder="Password..." className="form-password form-control" id="form-password" />
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