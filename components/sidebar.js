import Link from "next/link";
import * as actions from "../actions/auth";
import { connect } from "react-redux";
import { AvatarGenerator } from "random-avatar-generator";
import { GoogleLogout } from "react-google-login";
const Sidebar = ({ username, logout, isGoogleLoggedIn }) => {
  const generator = new AvatarGenerator();
  const onLogout = (evt) => {
    evt.preventDefault();
    console.log("logout success");
    logout();
  };
  const onGoogleLogout = (evt) => {};
  return (
    <ul className="sidebar-nav" data-toggle="collapse">
      <li className="sidebar-brand">
        <a href="#">Money.io</a>
      </li>
      <li>
        <img
          className="profilepic"
          src={generator.generateRandomAvatar(username)}
        ></img>
      </li>
      <li>
        <p className="username">{username}</p>
      </li>
      <li>
        <Link href="/transactions">
          <a>Transactions</a>
        </Link>
      </li>
      <li>
        <Link href="/debts">
          <a>Owes/Debts</a>
        </Link>
      </li>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <li>
        {isGoogleLoggedIn ? (
          <GoogleLogout
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={logout}
          ></GoogleLogout>
        ) : (
          <button href="logout" onClick={onLogout}>
            Sign Out
          </button>
        )}
      </li>
    </ul>
  );
};
const mapStateToProps = (state) => ({
  username: state.isLoggedIn,
  isGoogleLoggedIn: state.isGoogleLoggedIn,
});

export default connect(mapStateToProps, actions)(Sidebar);
