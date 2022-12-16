import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";

export const config = {
  endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
};

function App() {
  return (
    <div className="App">
      {/* TODO: CRIO_TASK_MODULE_LOGIN - To add configure routes and their mapping */}
          {/* <Register /> */}
          <Router>
          <Switch/>
         <Route path="/" component={Products} />
         <Route exact path="src/components/Login.js" component={Login} />
         <Route path="src/components/Register.js" component={Register} />
       
       </Router>
          {/* <Login /> */}
    </div>
  );
}

export default App;
