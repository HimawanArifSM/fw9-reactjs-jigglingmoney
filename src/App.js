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
        <Route path="history" element={<PrivateRoute><History /></PrivateRoute>} />
        <Route path="topup" element={<PrivateRoute><Topup /></PrivateRoute>} />
        <Route path="transfer" element={<PrivateRoute><Transfer /></PrivateRoute>} />
        <Route path="transferinput" element={<PrivateRoute><Transferinput /></PrivateRoute>} />
        <Route path="transferconf" element={<PrivateRoute><Transferconf /></PrivateRoute>} />
        <Route path="failed" element={<PrivateRoute><Failed /></PrivateRoute>} />
        <Route path="success" element={<PrivateRoute><Success /></PrivateRoute>} />
        <Route path="profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="personalinfo" element={<PrivateRoute><Personalinfo /></PrivateRoute>} />
        <Route path="changepassword" element={<PrivateRoute><Changepassword /></PrivateRoute>} />
        <Route path="changepin" element={<PrivateRoute><Changepin /></PrivateRoute>} />
        <Route path="newpin" element={<PrivateRoute><Newpin /></PrivateRoute>} />
        <Route path="addphone" element={<PrivateRoute><Addphone /></PrivateRoute>} />
        <Route path="managephone" element={<PrivateRoute><Managephone /></PrivateRoute>} />

        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
