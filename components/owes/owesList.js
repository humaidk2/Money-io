import OwesListEntry from "./owesListEntry";
import DuesForm from "./duesForm";
import { connect } from "react-redux";
import { useEffect } from "react";
import * as actions from "../../actions/debts";

const OwesList = ({ list, fetchDebts, deleteDebt }) => {
  useEffect(() => {
    fetchDebts();
  }, []);
  return (
    <div className="owes">
      <h2>Dues</h2>
      <table className="table">
        <thead id="owes-head">
          <tr>
            <th>Who</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Option</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.map((owes) => (
            <OwesListEntry
              key={owes.id}
              onDeleteClick={() => deleteDebt(transaction.id)}
              entry={owes}
            />
          ))}
        </tbody>
      </table>
      <DuesForm />
    </div>
  );
};

// by default connect passes dispatch
// we could add mapStateToProps or mapDispatchToProps
const mapStateToProps = (state) => {
  return {
    list: state.debts,
  };
};

export default connect(mapStateToProps, actions)(OwesList);
