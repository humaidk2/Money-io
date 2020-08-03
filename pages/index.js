import Head from "next/head";
import App from "../components/app";
import Request from "../components/requests";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    // Always do navigations after the first render
    router.push("/transactions", undefined, { shallow: true });
  }, []);
  return (
    <div className="container">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Money.io</title>
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/js/bootstrap.min.js"></script>
      </Head>
      <App postReq={Request.postReq} getReq={Request.getReq} data={[]} />
    </div>
  );
}
