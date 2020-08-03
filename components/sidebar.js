import Link from "next/link";
import { useRouter } from "next/router";
import * as actions from "../actions/auth";
import { connect } from "react-redux";
import { AvatarGenerator } from "random-avatar-generator";
const Sidebar = ({ username, logout }) => {
  const router = useRouter();
  const generator = new AvatarGenerator();
  const onLogout = (evt) => {
    evt.preventDefault();
    logout();
  };
  return (
    <ul className="sidebar-nav">
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
        <button href="logout" onClick={onLogout}>
          Sign Out
        </button>
      </li>
    </ul>
  );
};
const mapStateToProps = (state) => ({
  username: state.isLoggedIn,
});

export default connect(mapStateToProps, actions)(Sidebar);
