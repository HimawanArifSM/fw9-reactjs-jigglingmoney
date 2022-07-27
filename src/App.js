import React from "react";
import{Routes, Route, BrowserRouter} from 'react-router-dom'

import Landingpage from "./pages/Landingpage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Createpin from "./pages/Createpin";
import Createsuccess from "./pages/Createsuccess";
import Resetpassword from "./pages/Resetpassword";
import Createpassword from "./pages/Createpassword";
import Home from "./pages/dashboard/Home";
import History from './pages/transfer/History';
import Topup from './pages/topup/Topup';
import Transfer from './pages/transfer/Transfer';
import Transferinput from './pages/transfer/Transferinput';
import Transferconf from './pages/transfer/Transferconf';
import Failed from "./pages/transfer/Failed";
import Success from "./pages/transfer/Success";
import Profile from "./pages/profile/Profile";
import Personalinfo from "./pages/profile/Personalinfo";
import Changepassword from "./pages/profile/Changepassword";
import Changepin from "./pages/profile/Changepin";
import Newpin from "./pages/profile/Newpin";
import Addphone from "./pages/profile/Addphone";
import Managephone from "./pages/profile/Managephone";
import PrivateRoute from "./assets/component/PrivateRoute";

function App() {
  React.useEffect(()=>{},[])
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landingpage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="createpin" element={<Createpin />} />
        <Route path="createsuccess" element={<Createsuccess />} />
        <Route path="resetpassword" element={<Resetpassword />} />
        <Route path="createpassword" element={<Createpassword />} />
        <Route path="home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="history" element={<History />} />
        <Route path="topup" element={<Topup />} />
        <Route path="transfer" element={<Transfer />} />
        <Route path="transferinput" element={<Transferinput />} />
        <Route path="transferconf" element={<Transferconf />} />
        <Route path="failed" element={<Failed />} />
        <Route path="success" element={<Success />} />
        <Route path="profile" element={<Profile />} />
        <Route path="personalinfo" element={<Personalinfo />} />
        <Route path="changepassword" element={<Changepassword />} />
        <Route path="changepin" element={<Changepin />} />
        <Route path="newpin" element={<Newpin />} />
        <Route path="addphone" element={<Addphone />} />
        <Route path="managephone" element={<Managephone />} />

        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
