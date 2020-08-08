import SpendingList from "./spending/spendingList";
import Sidebar from "./sidebar";
import OwesList from "./owes/owesList";
import { useRouter } from "next/router";

import useSWR from "swr";
export default function Debts(props) {
  const fetcher = (url) =>
    fetch(url, { method: "GET", credentials: "include" }).then((res) =>
      res.json()
    );
  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_MONEY_SERVER_URL + "/debts";
  const { data, error } = useSWR(url, fetcher);
  if (error)
    return (
      <div>failed to load{router.push("/", undefined, { shallow: true })}</div>
    );
  if (!data) return <div>Loading...</div>;
  if (data && !data.Message) {
    router.push("/", undefined, { shallow: true });
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
        {data && data.Message && <OwesList list={data.debts} />}
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
