var Sidebar = (props) => (
  <ul className="sidebar-nav">
    <li className="sidebar-brand">
      <a href="#">Money.io</a>
    </li>
    <li>
    <img src='../src/assets/profile.png'></img>
    </li>
    <li>
     Username
    </li>
    <li>
      <a onClick={props.click}href="#">Spending</a>
    </li>
    <li>
      <a onClick={props.click}href="#">Owes/Debts</a>
    </li>
  </ul>
);

window.Sidebar = Sidebar;