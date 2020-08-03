import { useState } from "react";
import { connect } from "react-redux";
import { addDebt } from "../../actions/debts";

const DuesForm = ({ dispatch }) => {
  const [type, setType] = useState("due");
  const [person, setPerson] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const formSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addDebt(type, person, amount, description));
  };
  return (
    <form className="form-inline" onSubmit={formSubmit}>
      <h3>Add Dues</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={person}
          onChange={(e) => {
            setPerson(e.target.value);
          }}
        />
      </div>
      <div id="descBox" className="form-group">
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Description"
        />
      </div>
      <div className="input-group">
        <div className="input-group-addon">$</div>
        <input
          type="text"
          className="form-control"
          id="exampleInputAmount"
          placeholder="Amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          id="owe-type"
          className="custom-select"
        >
          <option value="Due">Due↗</option>
          <option value="Loaned">Loaned↘</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

// we can pass maptStateToProps
// that converts our redux state to props and passes them down
// we can pass mapDispatchToProps
// that passes down dispatch function
// Basically connect converts our component to stateful

// by default connect passes dispatch
export default connect()(DuesForm);
