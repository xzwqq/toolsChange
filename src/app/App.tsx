import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import Auth from "../pages/Auth/Auth.tsx";
import {history} from './provider/history.ts'
import "./style/App.css";

function App() {
  return (
    <>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      </HistoryRouter>
    </>
  );
}

export default App;
