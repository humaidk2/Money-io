var Sidebar = (props) => (
  <div id="sidebar-wrapper">
    <ul className="sidebar-nav">
      <li className="sidebar-brand">
        <a href="#">Reca$hly</a>
      </li>
      <li>
      <img src='../src/assets/profile.png'></img>
      </li>
      <li>
       Username
      </li>
      <li>
        <a href="#">Spending</a>
      </li>
      <li>
        <a href="#">Owes/Debts</a>
      </li>
    </ul>
  </div>
);

window.Sidebar = Sidebar;