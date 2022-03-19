import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import About from "./components/About";
import { PrivateRoute } from "./utils/PrivateRoute";
import AdminDashboard from "./components/Admin/AdminDashboard";
import LibrarianDashboard from "./components/Librarian/LibrarianDashboard";
import StudentDashboard from "./components/Student/StudentDashboard";
import AllLibrarians from "./components/Admin/AllLibrarians";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="auth" element={<Auth />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route
            path="admin-dashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="librarian-dashboard"
            element={
              <PrivateRoute>
                <LibrarianDashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="student-dashboard"
            element={
              <PrivateRoute>
                <StudentDashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
