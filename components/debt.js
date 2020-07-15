import SpendingList from './spending/spendingList'
import Sidebar from './sidebar'
import OwesList from './owes/owesListEntry'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      signedIn: false,
      data: this.props.data,
      transactions: [],
      debts: []
    };
  }

  loadTrans(data) {
    this.setState({
      transactions: data.transaction
    });

    this.setState({
      curr: (<SpendingList list={this.state.transactions} submit={this.submit} />)
    });
  }


  componentDidMount() {
    this.props.getReq({url: 'localhost:8000/transactions'}, this.loadTrans.bind(this));
  }


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
          <OwesList list={this.state.debts} submitOwesLoans={this.submitOwesLoans}/>
        </div>
      </div>
    );
  }

}
export default App