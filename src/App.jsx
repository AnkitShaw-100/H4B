import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Testimonial from "./pages/Testimonial";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import AboutUS from "./pages/AboutUs";
import Signup from "./pages/Signup";
import GetStarted from "./pages/VaccinationPage";
import ContactUs from "./pages/ContactUs";
import DoctorDashboard from "./pages/DoctorDashboard";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import ChildPage from "./pages/ChildPage";
import VaccineEducation from "./pages/VaccineEducation";
import ImmunizationTracking from "./pages/ImmunizationTrackingPage";
import AffordableImmunization from "./pages/Affordable";

const App = () => {

  const [user, loading] = useAuthState(auth);
  console.log(user)
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/child/:id" element={<ChildPage />} />
          <Route
            path="/"
            element={
              <>
                <Home />
                <Services />
                <Testimonial />
              </>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUS />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/vaccination" element={<GetStarted />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/vaccine-education" element={<VaccineEducation />} />
          <Route path="/Immunization-Tracking-Page" element={<ImmunizationTracking />} />
          <Route path="/affordable" element={<AffordableImmunization />} />

          <Route
            path="/login"
            element={loading ? (
              <div className="flex justify-center items-center min-h-screen">
                <p className="text-xl">Loading...</p>
              </div>
            ) : user ? <Navigate to="/doctor-dashboard" replace /> : <Login />}
          />
          <Route path="/doctor-dashboard"
            element={loading ? (
              <div className="flex justify-center items-center min-h-screen">
                <p className="text-xl">Loading...</p>
              </div>
            ) : user ? <DoctorDashboard /> : <Navigate to="/login" replace />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
