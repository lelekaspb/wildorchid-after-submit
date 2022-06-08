import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./components/Services";
import Eyes from "./components/Eyes";
import Wax from "./components/Wax";
import Nails from "./components/Nails";
import Spraytan from "./components/Spraytan";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Giftcard from "./components/Giftcard";
import Payment from "./components/Payment";
import Creditcard from "./components/Creditcard";
import Mobilepay from "./components/Mobilepay";
import GiftcardConfirmation from "./components/GiftcardConfirmation";
import NoMatch from "./components/NoMatch";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh={false}>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />}>
              <Route index element={<Eyes />} />
              <Route path="eyes" element={<Eyes />} />
              <Route path="wax" element={<Wax />} />
              <Route path="nails" element={<Nails />} />
              <Route path="spraytan" element={<Spraytan />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/giftcard" element={<Giftcard />} />
            <Route path="/payment" element={<Payment />}>
              <Route index element={<Creditcard />} />
              <Route path="creditcard" element={<Creditcard />} />
              <Route path="mobilepay" element={<Mobilepay />} />
            </Route>
            <Route path="/confirmation" element={<GiftcardConfirmation />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
