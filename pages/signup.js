import Head from 'next/Head'
import Link from 'next/Link'
export default function Home() {
    return (
    <>
    <Head>
        <meta charset="utf-8" />
        <title>Money.io - Sign Up</title>
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
                        			<h3>Signup</h3>
                            		<p>Create an account with a username and password:</p>
                        		</div>
                            </div>
                            <div className="form-bottom">
			                    <form role="form" action="" method="post" className="login-form">
                                    <div className="form-group">
                                        <label className="sr-only" for="form-username">Username</label>
                                        <input type="text" name="username" placeholder="Username..." className="form-username form-control" id="form-username" />
                                    </div>
			                        <div className="form-group">
			                        	<label className="sr-only" for="form-password">Password</label>
			                        	<input type="password" name="password" placeholder="Password..." className="form-password form-control" id="form-password" />
			                        </div>
			                        <button type="submit" className="btn">Sign up</button>
			                    </form>
                                <br /><Link href="/signin"><a>Sign in</a></Link>
		                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}