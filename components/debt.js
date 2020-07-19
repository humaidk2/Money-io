import SpendingList from './spending/spendingList'
import Sidebar from './sidebar'
import OwesList from './owes/owesList'
// TODO: Convert to functional component
class Debts extends React.Component {
  constructor(props) {
    super(props);
  }

  // loadTrans(data) {
  //   this.setState({
  //     transactions: data.transaction
  //   });

  //   this.setState({
  //     curr: (<SpendingList list={this.state.transactions} submit={this.submit} />)
  //   });
  // }


  // componentDidMount() {
  //   this.props.getReq({url: 'localhost:8000/transactions'}, this.loadTrans.bind(this));
  // }


  submit(e) {
    e.preventDefault();

  }
  render() {
    return (
      <div id="wrapper" className="app">
        <div id='sidebar-wrapper'>
          <Sidebar />
        </div>
        <div id='page-content-wrapper'>
          <h1 className='appTitle'><strong>Money</strong>.io</h1>
          <OwesList list={[]} />
        </div>
        <style global jsx>
        {`
        body {
            background: white;
        }
        #wrapper {
            background: white;
        }
        `}
        </style>
      </div>
    );
  }

}
export default Debts