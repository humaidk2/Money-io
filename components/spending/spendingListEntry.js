import moment from "moment";
const SpendingListEntry = (props) => {
  const { id, category, title, amount, created_at } = props.entry;
  const { onDeleteClick } = props;
  return (
    <tr>
      <td>
        <img
          alt={"category icon " + category}
          height="40"
          src={"/" + category + ".png"}
        ></img>
      </td>
      <td>{title}</td>
      <td>{"$ " + amount}</td>
      <td>{moment(created_at).fromNow()}</td>
      <td>
        <button
          type="button"
          onClick={onDeleteClick}
          className="btn btn-danger"
        >
          Delete
        </button>
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

const pickCategories = (category) => {
  if (category === "Restaurant") {
    return "https://www.iconsdb.com/icons/preview/black/restaurant-xxl.png";
  } else if (category === "Shopping") {
    return "https://d30y9cdsu7xlg0.cloudfront.net/png/17663-200.png";
  } else if (category === "Transportation") {
    return "http://image.flaticon.com/icons/png/128/67/67994.png";
  } else if (category === "Groceries") {
    return "http://image.flaticon.com/icons/png/512/2/2772.png";
  } else if (category === "Utilities") {
    return "http://www.iconsdb.com/icons/preview/black/house-xxl.png";
  } else if (category === "Nightlife") {
    return "http://www.clker.com/cliparts/I/n/S/M/8/z/cocktail-md.png";
  } else if (category === "Other") {
    return "https://d30y9cdsu7xlg0.cloudfront.net/png/203819-200.png";
  }
};

export default SpendingListEntry;
