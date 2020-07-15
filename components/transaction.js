import SpendingList from './spending/spendingList'
import Sidebar from './sidebar'

import { useRouter } from 'next/router'

import useSWR from 'swr'
const fetcher = (url) => fetch(url,{method: 'GET',credentials: 'include' }).then(res => res.json());
export default function App(props) {
    const router = useRouter()
    const url = "http://localhost:8000/transactions"
    const { data, error } = useSWR(url, fetcher);
  if (error) return <div>failed to load{console.log("damn"+error)}</div>
  if (!data) return <div>Loading...</div>;
  if(data) { console.log(data)}
  if(data && !data.Message) { router.push('/signin', undefined, { shallow: true }) }

//   constructor(props) {
//     super(props);
//     this.submit = this.submit.bind(this);
//     this.state = {
//       signedIn: false,
//       data: this.props.data,
//       transactions: [],
//       debts: []
//     };
//   }
  

//   loadTrans(data) {
//     this.setState({
//       transactions: data.transaction
//     });

//     this.setState({
//       curr: (<SpendingList list={this.state.transactions} submit={this.submit} />)
//     });
//   }


//   componentDidMount() {
//     this.props.getReq({url: 'localhost:8000/transactions'}, this.loadTrans.bind(this));
//   }


//   submit(e) {
//     e.preventDefault();

//   }
return (
    <div id="wrapper" className="app">
        <h1>{JSON.stringify(data)}</h1>
        <div id='sidebar-wrapper'>
            <Sidebar />
        </div>
        <div id='page-content-wrapper'>
            <h1 className='appTitle'><strong>Money</strong>.io</h1>
            <SpendingList list={props.data} />
        </div>
    </div>
);

}