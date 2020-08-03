import Head from "next/head";
// import { connect } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/Link";
import useSWR from "swr";
import { verifyEmail } from "../api/auth";

const fetcher = (url) =>
  fetch(url, { method: "GET", credentials: "include" }).then((res) => {
    if (res.status !== 200)
      throw { message: "failed to verify", status: res.status };
    else return res.json();
  });
const Home = ({ isLoggedIn }) => {
  const router = useRouter();

  useEffect(() => {
    isLoggedIn && router.push("/transactions", undefined, { shallow: true });
  });
  const url = "http://localhost:8000/verifyemail?unique=" + router.query.unique;
  const { data, error } = useSWR(url, fetcher);
  if (error) return <div>failed to verify {error.status}</div>;
  if (!data) return <div>loading...</div>;
  // should do a verification action
  return (
    <div className="container">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Money.io</title>
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js"></script>
      </Head>
      <h1>Email has been verified</h1>
      <div>Please click this link and signin</div>
      <Link href="/signin">
        <a>Signin</a>
      </Link>
    </div>
  );
};
// // by default connect passes dispatch
// // we could add mapStateToProps or mapDispatchToProps
// const mapStateToProps = (state) => {
//   return {
//     isLoggedIn: state.isLoggedIn,
//   };
// };

// export default connect(mapStateToProps)(Home);
export default Home;
