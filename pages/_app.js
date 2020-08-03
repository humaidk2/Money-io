import "../styles/roboto_font.css";
import "../styles/bootstrap_min.css";
import "../styles/global.css";
import "../styles/form-elements.css";
import "../styles/style.css";
import { wrapper } from "../configureStore";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default wrapper.withRedux(App);
