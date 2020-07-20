import SpendingList from "./spending/spendingList";
import Sidebar from "./sidebar";

import { useRouter } from "next/router";

import useSWR from "swr";
const fetcher = (url) =>
  fetch(url, { method: "GET", credentials: "include" }).then((res) =>
    res.json()
  );
export default function Transactions(props) {
  const router = useRouter();
  const url = "http://localhost:8000/transactions";
  const { data, error } = useSWR(url, fetcher);
  if (error)
    return (
      <div>
        failed to load{router.push("/signin", undefined, { shallow: true })}
      </div>
    );
  if (!data) return <div>Loading...</div>;
  if (data) {
    console.log(data);
  }
  if (data && !data.Message) {
    router.push("/signin", undefined, { shallow: true });
  }
  return (
    <div id="wrapper" className="app">
      <div id="sidebar-wrapper">
        <Sidebar />
      </div>
      <div id="page-content-wrapper">
        <h1 className="appTitle">
          <strong>Money</strong>.io
        </h1>
        {data && data.Message && <SpendingList list={data.transactions} />}
      </div>
      <style global jsx>
        {`
          body {
            background: white;
          }
          #wrapper {
            background: white;
          }
        `}
      </style>
    </div>
  );
}
