import { Container } from "react-bootstrap";
//import ChangePass component
import ChangePass  from "./components/ChangePass";
import Table from "./components/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";

function App() {
  if (window.localStorage.getItem("loggedIn") !== "true") {
    return (
      <div>
        <Container>
          <Login />
        </Container>
      </div>
    );
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Container>
                <Table />
              </Container>
            }
          />
          <Route path="changepass" element={<ChangePass />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
