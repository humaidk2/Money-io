import SpendingForm from "./spendingForm";
import SpendingListEntry from "./SpendingListEntry";
import { connect } from "react-redux";
import { useEffect } from "react";
import * as actions from "../../actions/transactions";

// note if you dont pass the action creators through
// connect, they will not have access to dispatch
// because we didn't subscribe to store and stuff...
// or you could call dispatch(action creator)
// both seem to work
const SpendingList = ({ list, fetchTransactions, deleteTransaction }) => {
  useEffect(() => {
    fetchTransactions();
  }, []);
  return (
    <div className="spending">
      <h2>Transactions</h2>
      <table className="table">
        <thead id="spending-head">
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.map((transaction) => (
            <SpendingListEntry
              key={transaction.id}
              onDeleteClick={() => deleteTransaction(transaction.id)}
              entry={transaction}
            />
          ))}
        </tbody>
      </table>
      <SpendingForm />
    </div>
  );
};

// by default connect passes dispatch
// we could add mapStateToProps or mapDispatchToProps
const mapStateToProps = (state) => ({
  list: state.transactions,
});

export default connect(mapStateToProps, actions)(SpendingList);
