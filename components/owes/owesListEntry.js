export default function OwesListEntry(props) {
  const deleteOwes = () => {
    //TODO a post request to delete on props.entry.id
    fetch("http://localhost:8000/deleteDebts", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        id: props.entry.id,
      }),
      credentials: "include",
    });
  };
  return (
    <tr>
      <td>{props.entry.person}</td>
      <td>{props.entry.description}</td>
      <td>{props.entry.amount}</td>
      <td>{moment(props.entry.created_at).fromNow()}</td>
      <td>{props.entry.type}</td>
      <td>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-success dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Pay via
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="http://paypal.com">
              Paypal
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="http://venmo.com">
              Venmo
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="http://squareup.com">
              Square
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="http://bitcoin.com">
              Bitcoin
            </a>
          </div>
          <button type="button" onClick={deleteOwes} className="btn btn-danger">
            Delete
          </button>
        </div>
      </td>
      <style jsx>{`
        .btn-danger {
          background-color: #c82333;
          border-color: #bd2130;
        }
      `}</style>
    </tr>
  );
}
