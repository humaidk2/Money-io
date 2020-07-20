import OwesListEntry from "./owesListEntry";
import DuesForm from "./duesForm";
import LoansForm from "./loansForm";
const OwesList = (props) => {
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
          {props.list.map((owes) => (
            <OwesListEntry key={owes.id} entry={owes} />
          ))}
        </tbody>
      </table>
      <DuesForm />
    </div>
  );
};

export default OwesList;
