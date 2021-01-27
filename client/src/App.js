import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Conversations from "./pages/Conversations";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import jwt_decode from "jwt-decode";
import store from "./store";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";
import { Provider } from "react-redux";
import Login from "./pages/UserManagement/Login";
import Register from "./pages/UserManagement/Register";
import SecuredRoute from "./securityUtils/SecureRoute";
import TwitterSignIn from "./components/TwitterSignIn/TwitterSignIn";

// const jwtToken = localStorage.jwtToken;

// if (jwtToken) {
//   setJWTToken(jwtToken);

// const decoded_jwtToken = jwt_decode(jwtToken);
// store.dispatch({
//   type: SET_CURRENT_USER,
//   payload: decoded_jwtToken,
// });

// const currentTime = Date.now() / 1000;
// if (decoded_jwtToken.exp < currentTime) {
//   store.dispatch(logout());
//   window.location.href = "/";
// }
// }
// else{
//   window.location.href = "/"
// }

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/*<Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />}
          <Route exact path="/twitter/signin" component={TwitterSignIn} />
  */}{" "}
          <Route exact path="/" component={TwitterSignIn} />
          <Route exact path="/conversations" component={Conversations} />
          {/*  <Switch>
            <SecuredRoute
              exact
              path="/conversations"
              component={Conversations}
            />
         </Switch> */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
