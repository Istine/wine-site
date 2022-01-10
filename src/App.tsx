import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import GlobalContext from "./context/CheckoutContext";
import PaymentCntext from "./context/PaymentContext";
import MenuContext from "./context/MenuContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = React.lazy(() => import("./components/Home"));
const Aboutus = React.lazy(() => import("./components/pages/Aboutus"));
const Ourstory = React.lazy(() => import("./components/pages/Ourstory"));
const Contactus = React.lazy(() => import("./components/pages/Contactus"));

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <MenuContext>
          <PaymentCntext>
            <GlobalContext>
              <Suspense fallback={<p>loading...</p>}>
                <ToastContainer />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about-us" element={<Aboutus />} />
                  <Route path="/our-story" element={<Ourstory />} />
                  <Route path="/contact-us" element={<Contactus />} />
                </Routes>
              </Suspense>
            </GlobalContext>
          </PaymentCntext>
        </MenuContext>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
