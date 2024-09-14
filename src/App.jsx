// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import About from './Components/About';
// import Services from './Components/Services';
// import Doctors from './Components/Doctors';
// import Blogs from './Components/Blogs';
// import Footer from './Components/Footer';
// import Scan from './Components/Scan';
// import Feedback from './Components/Feedback';
// import Login from './Components/Login';
// import Register from './Components/Register';
// import ForgotPassword from './Components/Forgot-password';
// function App() {
//   const [page, setPage] = useState('login');

//   return (
//     <Router>
//       <>
//         <Navbar />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/scan" element={<Scan />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/blogs" element={<Blogs />} />
//             <Route path="/doctors" element={<Doctors />} />
//             <Route path="/feedback" element={<Feedback />} />
//             <Route path="/login" element={<Login setPage={setPage} />} />
//             <Route path="/register" element={<Register setPage={setPage} />} />
//           </Routes>
//         </main>
//         <Footer />
//       </>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Doctors from './Components/Doctors';
import Blogs from './Components/Blogs';
import Footer from './Components/Footer';
import Scan from './Components/Scan';
import Feedback from './Components/Feedback';
import Login from './Components/Login';
import Register from './Components/Register';
import ForgotPassword from './Components/Forgot-password'; 
import Account from './Components/Account';
import Logout from './Components/Logout';
function App() {
  const [page, setPage] = useState('login');
  

  return (
    <Router>
      <>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scan" element={<Scan />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/login" element={<Login setPage={setPage} />} />
            <Route path="/register" element={<Register setPage={setPage} />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/account" element={ <Account/>} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;