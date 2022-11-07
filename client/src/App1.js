import React from "react";
// import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import IndexRouters from "./router/index"

import { ExternalLink } from "react-external-link";

//scss
import "./assets/scss/hope-ui.scss";
import "./assets/scss/dark.scss";
import "./assets/scss/rtl.scss";
import "./assets/scss/custom.scss";
import "./assets/scss/customizer.scss";
import Home1 from "./components/Home/Home1";

import SetAvatar from "./components/SetAvatar";

import Chat from "./pages/Chat";
import Chatvndr from "./pages/Chatvndr";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Homev from "./SidebarforVendor/Home/Home";
import HomeUserProfile from "./SidebarforVendor/Home/HomeUserProfile";
import HomeUserProfilea from "./components/Home/HomeUserProfile";
import Hoevndrupdt from "./SidebarforVendor/Home/Hoevndrupdt";
import HomeR from "./components/Home/HomeR";
import HomeComplaince from "./components/Home/HomeComplaince";
import Homecomplaince1 from "./components/Home/Homecomplaince1";
import Homerfqmanager from "./components/Home/Homerfqmanager";
import Homerfqmanager1 from "./components/Home/Homerfqmanager1";
import Auth from "./components/Auth/Auth";
import Authv from "./components/Authv/Authv";
import UpdatePost from "./components/Posts/Post/UpdatePost";
import Singlepost from "./components/Posts/Post/Singlepost";
import Form from "./components/Form/Form";
import Complainceform from "./components/Form/Complainceform";
import RFQ_Manager from "./components/Form/RFQ_Manager";
import serRFQ from "./components/Form/userRFQ";
import Home from "./components/Home/Home";
import UserRFQhome from "./components/Home/userRFQhome";
import Erfqmanager from "./components/Home/Homerfqmanager1";
import HomeRFQUpdate from "./components/Home/HomeRFQUpdate";
import HomeRFQView from "./components/Home/HomeRFQView";
import HomeChat from "./components/Home/HomeChat";
import RFQuser from "./components/Home/RFQuser";
import Complaince from "./components/Complains/Complaince";
import RFQ from "./components/RFQ_Managers/RFQ_Manager/RFQ_Manager";
import Rfqupdatev from "./components/RFQ_Managers/RFQ_Manager/Rfqupdatev";
import Userprofile from "./components/Userprofile";
import Srchbyemail from "./components/RFQ_Managers/RFQ_Manager/Srchbyeml";
import Listrfquser from "./components/RFQ_Managers/RFQ_Manager/Listrfquser";

import Dash from "./components/Dashboard.js";
import Table from "./Table";
import Dashboard from "./Dashboard/Dashboard";
// import Login from './components/Login';

// import IndexRouters from "./router/index"

//scss
import "./assets/scss/hope-ui.scss";
import "./assets/scss/dark.scss";
import "./assets/scss/rtl.scss";
import "./assets/scss/custom.scss";
import "./assets/scss/customizer.scss";
import Sidebar from "./Sidebar";
import SecondRender from "./SecondRender";
import Post from "./components/Posts/Post/Post";
import HomeUpdatePro from "./components/Home/HomeUpdatePro";
import HomeforHome from "./components/Home/HomeforHome";
import HomeViewPro from "./components/Home/HomeViewPro";
import FormWizard from "./components/Form/FormWizard";
import RFQForm from "./components/Form/RFQForm";

function App1() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomeforHome />} />
          <Route path="/homeuserprofile/:id" exact element={<HomeUserProfile />} />
          <Route path="/Userprofile/:id" exact element={<HomeUserProfilea />} />
          <Route path="/producthf" exact element={<Home />} />
          <Route path="/productht" exact element={<Home1 />} />
          <Route path="/updatepost/:id" exact element={<HomeUpdatePro />} />
          <Route path="/singlepost/:id" exact element={<HomeViewPro />} />
          {/* <Route path="/productht" exact element={<Home1 />} /> */}
          <Route path="/home1" exact element={<Home1 />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/HomeRFQUpdate/:id" exact element={<HomeRFQUpdate />} />
          <Route path="/Rfqupdatev/:id" exact element={<Rfqupdatev />} />
          <Route path="/HomeRFQView/:id" exact element={<HomeRFQView />} />
          <Route path="/userrfqhome/:id" exact element={<UserRFQhome />} />
          <Route path="/Listrfquser/:id" exact element={<RFQuser />} />
          <Route path="/Srchbyemail" exact element={<Srchbyemail />} />
          <Route path="/homecomplaince" exact element={<Complaince />} />
          <Route path="/complainceform" exact element={<Complainceform />} />
          <Route path="/homerfqmanager" exact element={<HomeR />} />
          <Route path="/homerfqmanager1" exact element={<RFQ_Manager />} />
          <Route path="/auth" exact element={<Login />} />
          <Route path="/authv" exact element={<Login />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/setAvatar" element={<SetAvatar />} />
          <Route path="/chat" element={<HomeChat />} />
          <Route path="/c" element={<Chatvndr />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/rfqform" exact element={<Homerfqmanager />} />
          <Route path="/Homev" exact element={<Homev />} />
          <Route path="/Hoevndrupdt" exact element={<Hoevndrupdt />} />
          {/* <Route path="/dash" exact element={<Dash />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App1;
