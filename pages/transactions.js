import Head from "next/head";
import Transactions from "../components/transaction";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = ({ isLoggedIn }) => {
  const router = useRouter();
  useEffect(() => {
    !isLoggedIn && router.push("/", undefined, { shallow: true });
  });
  return (
    <div className="container">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Money.io</title>
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/js/bootstrap.min.js"></script>
      </Head>
      <Transactions data={[]} />
    </div>
  );
};
// by default connect passes dispatch
// we could add mapStateToProps or mapDispatchToProps
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Home);
