import moment from "moment";
const OwesListEntry = (props) => {
  const { id, person, type, amount, description, date } = props.entry;
  const { onDeleteClick } = props;
  return (
    <tr>
      <td>{person}</td>
      <td>{description}</td>
      <td>{amount}</td>
      <td>{moment(date).fromNow()}</td>
      <td>{type}</td>
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
          <button
            type="button"
            onClick={onDeleteClick}
            className="btn btn-danger"
          >
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
};

export default OwesListEntry;
