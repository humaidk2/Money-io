import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as actions from "../actions/auth";
import { connect } from "react-redux";

const Home = ({ isLoggedIn, signin }) => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    console.log("isloggedin" + isLoggedIn);
    isLoggedIn && router.push("/transactions", undefined, { shallow: true });
  });
  const handleSubmit = (evt) => {
    evt.preventDefault();
    signin(username, password);
  };
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Money.io - Sign In</title>
      </Head>
      <div className="top-content">
        <div className="inner-bg">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2 text">
                <h1>
                  <strong>Money</strong>.io
                </h1>
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
                  <form
                    role="form"
                    method="post"
                    className="login-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group">
                      <label className="sr-only">Username</label>
                      <input
                        type="text"
                        name="username"
                        placeholder="Username..."
                        className="form-username form-control"
                        id="form-username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="sr-only">Password</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Password..."
                        className="form-password form-control"
                        id="form-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="btn">
                      Sign in
                    </button>
                  </form>
                  <br />
                  <Link href="/signup">
                    <a>Sign up</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// by default connect passes dispatch
// we could add mapStateToProps or mapDispatchToProps
const mapStateToProps = (state) => {
  console.log(state);
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps, actions)(Home);
