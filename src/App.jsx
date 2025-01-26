
// import './App.css'
// import { Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Table from './pages/Table';
// import Depttable from './pages/Depttable';
// import Admintabs from './pages/Admintabs';
// import Dashboad from './pages/Dashboad';
// // import DetailsPage from "./pages/DetailsPage";
// import UserDetailPage from './pages/UserDetailPage';
// import BeneficiaryDetailPage from './pages/BeneficiaryDetailPage';

// function App() {

//   return (
//     <Routes>
//     <Route path="/login" element={<Login />} />
//     <Route path="/signup" element={<Signup />} />
//     <Route path="/Table" element={<Table />} />
//     <Route path="/Depttable" element={<Depttable />} />
//     <Route path="/Admintabs" element={<Admintabs />} />
//     <Route path="/Dashboad" element={<Dashboad />} />
//     {/* <Route path="/details/:id" element={<DetailsPage />} /> */}
//     <Route path="/user/:id" element={<UserDetailPage />} />
//     <Route path="/beneficiary/:id" element={<BeneficiaryDetailPage />} />

//   </Routes>
//   )
// }

// export default App


import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Table from './pages/Table';
import Depttable from './pages/Depttable';
import Admintabs from './pages/Admintabs';
import Dashboad from './pages/Dashboad';
import UserDetailPage from './pages/UserDetailPage';
import BeneficiaryDetailPage from './pages/BeneficiaryDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Table" element={<Table />} />
      <Route path="/Depttable" element={<Depttable />} />
      <Route path="/Admintabs" element={<Admintabs />} />
      <Route path="/Dashboad" element={<Dashboad />} />
      <Route path="/user/:id" element={<UserDetailPage />} />
      <Route path="/beneficiary/:id" element={<BeneficiaryDetailPage />} />
    </Routes>
  );
}

export default App;



// import './App.css';
// import { Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Table from './pages/Table';
// import Depttable from './pages/Depttable';
// import Admintabs from './pages/Admintabs';
// import Dashboad from './pages/Dashboad';
// import UserDetailPage from './pages/UserDetailPage';
// import BeneficiaryDetailPage from './pages/BeneficiaryDetailPage';

// function App() {
//   return (
//     <Routes>
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/Table" element={<Table />} />
//       <Route path="/Depttable" element={<Depttable />} />
//       <Route path="/Admintabs" element={<Admintabs />} />
//       <Route path="/Dashboad" element={<Dashboad />} />
//       <Route path="/user/:id" element={<UserDetailPage />} />
//       <Route path="/beneficiary/:id" element={<BeneficiaryDetailPage />} />
//     </Routes>
//   );
// }

// export default App;
