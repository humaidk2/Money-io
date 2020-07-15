import Head from 'next/head'
import App from '../components/app'
import Request from '../components/requests'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Money.io</title>
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js"></script>
      </Head>
      <App postReq={Request.postReq} getReq={Request.getReq} data={[]} />
    </div>
  )
}
