import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Tpostcreate from './components/tpostcreate';
import './App.css';

import HomeFeeds from './components/homeposts';
import ProfilePageOwnersView from './components/Profilepage';
import Landingpage from './components/landingpage';
import HomepageOwnersView from './components/homepage'
import Ppostcreate from './components/ppostcreate';


function App() {



  return (
    <>
      <Router>
        <Routes>

          <Route exact path="/tpostcreate" element={<Tpostcreate {...profilePageOwnersViewData}/>} />
          <Route exact path="/ProfilePageOwnersView" element={<ProfilePageOwnersView {...profilePageOwnersViewData} />} />
          <Route exact path='/' element={<Landingpage />} />
          <Route exact path='/ppostcreate' element={<Ppostcreate {...profilePageOwnersViewData}/>} />
          <Route exact path='/Homepage' element={<HomepageOwnersView {...homepageOwnersViewData}/>} />
        </Routes>

      </Router>



    </>)
}


const profilePageOwnersViewData = {
  iconHome: "https://anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647a875c7163986472f1aca2/img/home@2x.png",
  place: "Home",
  profile: "Profile",
  iconlyBoldTicket: "https://anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647a875c7163986472f1aca2/img/iconly-bold-ticket@21.329999923706055x.png",
  messages: "Messages",
  logout: "https://anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647b73e23710fef232e24b90/img/logout@2x.png",
  rectangle114: "https://anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647b73e23710fef232e24b90/img/rectangle-114@2x.png",
  ellipse58: "https://anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647b73e23710fef232e24b90/img/ellipse-58-1@2x.png",
  creativeClicks: "https://anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647b73e23710fef232e24b90/img/creative-clicks@2x.png",
  logOut: "https://anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647b73e23710fef232e24b90/img/log-out@2x.png",
  uiUxDesigner: "UI/UX Designer",
  title: "Creative Clicks",
  imgBg: "https://anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647b73e23710fef232e24b90/img/ellipse-22@2x.png",
  img: "https://anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647b73e23710fef232e24b90/img/ellipse-22@2x.png",
  about: "About",
  male: "Male",
  bornJune32023: "Born June 3, 2023",
  sanDiegoState: "San Diego State",
  creativeclicksCcCom: "CreativeClicks@cc.com",
  iconCall: "https://anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647a875c7163986472f1aca2/img/call@2x.png",
  phone: "1(234)567-8910",
  posts: "Posts",
};

const homepageOwnersViewData = {
  logout: "https://anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647b73e23710fef232e24b90/img/log-out@2x.png",
  profilePhoto: "profile-photo.png",
  chattykats: "chattykats.png",
  uiUxDesigner: "UI/UX Designer",
  chattyKats: "Chatty kats",
  imgBg: "img-bg.png",
  iconHome: "https://anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647a875c7163986472f1aca2/img/home@2x.png",
  place: "Home",
  profile: "Profile",
  title: "About Us",
  aboutUsWelcomeTo: (
    <>

      About Us:
      <br />
      <br />
      Welcome to ChattyKats! This website was designed to help build communities by keeping them connected. This project is unique in
      that it is coded 100% by students, who collaborated on this site with the singular goal of creating something both usable and user
      friendly. We hope you enjoy our project &amp; don’t forget to leave a post if you would like to do so. Thank you for visiting our
      website.
      <br />
      <br />- The ChattyKats Team
    </>
  ),
};

export default App;

