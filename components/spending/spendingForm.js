import { useState } from 'react';

const  SpendingForm = (props) => {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState(0.0)
  const formSubmit = () => {

  }
  return (
    <form className='form-inline' onSubmit={formSubmit}>
      <h3>Add Transaction</h3>
      <div className='form-group'>
        <select defaultValue="Restaurant" className="custom-select">
          <option value="Restaurant">Restaurant</option>
          <option value="Groceries">Groceries</option>
          <option value="Transportation">Transportation</option>
          <option value="Shopping">Shopping</option>
          <option value="Utilities">Utilities</option>
          <option value="Nightlife">Nightlife</option>
          <option value="Cash">Cash</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group">
      <input type="date" id="birthday" name="birthday" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Spending"/>
      </div>
      <div className="input-group">
        <div className="input-group-addon">$</div>
        <input type="text" className="form-control" id="exampleInputAmount" placeholder="Amount" />
      </div>
      <button type="submit" className="btn btn-success">Submit</button>
    </form>
  );
}

export default SpendingForm