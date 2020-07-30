import Head from "next/head";
import Transactions from "../components/transaction";
import Request from "../components/requests";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = ({ isLoggedIn }) => {
  const router = useRouter();
  useEffect(() => {
    !isLoggedIn && router.push("/signin", undefined, { shallow: true });
  });
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
      <Transactions
        postReq={Request.postReq}
        getReq={Request.getReq}
        data={[]}
      />
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
