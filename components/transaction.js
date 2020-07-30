import SpendingList from "./spending/spendingList";
import Sidebar from "./sidebar";

export default function Transactions(props) {
  return (
    <div id="wrapper" className="app">
      <div id="sidebar-wrapper">
        <Sidebar />
      </div>
      <div id="page-content-wrapper">
        <h1 className="appTitle">
          <strong>Money</strong>.io
        </h1>
        <SpendingList />
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
