import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser, loadUser } from "./action/user";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import Loading from "react-loading-components";
import TimeLine from "./pages/AdminPanel/Timeline";
import Project from "./pages/AdminPanel/Project";
function App() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <Router>
      {loading ? (
        <div
          style={{
            height: "100vh",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Loading
            type='spinning_circles'
            width={100}
            height={100}
            fill='#7c73f8'
          />
        </div>
      ) : (
        <>
          <Header />
          <Routes>
            <Route
              path='/'
              element={<Home user={user} />}
            />
            <Route
              path='/about'
              element={<About about={user.about} />}
            />
            <Route
              path='/projects'
              element={<Projects projects={user.projects} />}
            />
            <Route
              path='/contact'
              element={<Contact />}
            />
            <Route
              path='/account'
              element={isAuthenticated ? <AdminPanel user={user} /> : <Login />}
            />
            <Route
              path='/admin/timeline'
              element={isAuthenticated ? <TimeLine /> : <Login />}
            />

            <Route
              path='/admin/project'
              element={isAuthenticated ? <Project /> : <Login />}
            />
          </Routes>
          <Footer about={user.about} />
        </>
      )}
    </Router>
  );
}

export default App;
