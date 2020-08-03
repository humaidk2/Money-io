import Head from "next/Head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as actions from "../actions/auth";
import { connect } from "react-redux";
import { signup } from "../api/auth";

const Home = ({ isLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [res, setRes] = useState({ data: null, error: null, isLoading: false });

  useEffect(() => {
    isLoggedIn && router.push("/transactions", undefined, { shallow: true });
  });
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // do signup request
    // if completed successfully
    // display small span that says please verify email by following link in your email
    setRes((prevState) => ({ ...prevState, isLoading: true }));
    signup(username, email, password)
      .then((res) => {
        if (res.status != 200)
          throw { message: "failed to signup", status: res.status };
        else return res.json();
      })
      .then((data) => {
        setRes({ data: data, isLoading: false, error: null });
      })
      .catch((error) => {
        setRes({ data: null, isLoading: false, error });
      });
  };
  if (res.isLoading) return <div>Loading...</div>;
  if (res.error) return <div>failed to load {error.status}</div>;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
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
                <h1>
                  <strong>Money</strong>.io
                </h1>
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
                  <form
                    role="form"
                    action=""
                    method="post"
                    className="login-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group">
                      <label className="sr-only" for="form-username">
                        Username
                      </label>
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
                      <label className="sr-only" for="form-email">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Email..."
                        className="form-username form-control"
                        id="form-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="sr-only" for="form-password">
                        Password
                      </label>
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
                      Sign up
                    </button>
                    {res.data && (
                      <span style={{ color: "red" }}>
                        Please check your email for verification
                      </span>
                    )}
                  </form>
                  <br />
                  <Link href="/signin">
                    <a>Sign in</a>
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
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps, actions)(Home);
