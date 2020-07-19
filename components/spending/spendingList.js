import SpendingForm from './spendingForm'
import SpendingListEntry from './SpendingListEntry'

const SpendingList = (props) => (
  <div className="spending">
    <h2>Transactions</h2>
    <table className="table">
      <thead id="spending-head">
        <tr>
          <th>Category</th>
          <th>Title</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {console.log("hello " + JSON.stringify(props.list))}
        {console.log(props.list)}
      {props.list.map(owes => <SpendingListEntry key={owes.id} entry={owes} />)}
      </tbody>
    </table>
    <SpendingForm />
  </div>
);


export default SpendingList