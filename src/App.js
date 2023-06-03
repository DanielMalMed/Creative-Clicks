import { BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom';

import Homepage from './components/homepage';
import LandingPage from './components/landingpage';
import Tpostcreate from './components/tpostcreate';
import './App.css';

import React from 'react';

function App() {
  return <ProfilePageOwnersView {...profilePageOwnersViewData}  />;
}

function ProfilePageOwnersView(props) {
  const {
    iconHome,
    place,
    profile,
    iconlyBoldTicket,
    messages,
    logout,
    rectangle114,
    ellipse58,
    creativeClicks,
    logOut,
    uiUxDesigner,
    title,
    imgBg,
    img,
    about,
    male,
    bornJune32023,
    sanDiegoState,
    creativeclicksCcCom,
    iconCall,
    phone,
    posts,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="profile-page-owner-s-view screen" >
        <div className="menu" >
          <div className="overlap-group3" >
            <div className="bg" ></div>
            <div className="menu-name" >
              <div className="home" >
                <img className="icon-home"  src={iconHome} alt="icon-home" />
                <div className="place nunito-semi-bold-white-16px" >
                  {place}
                </div>
              </div>
              <div className="overlap-group" >
                <div className="profile" >
                  {profile}
                </div>
                <div className="rectangle-289" ></div>
                <img
                  className="person"
                  
                  src="https://anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647a875c7163986472f1aca2/img/person.svg"
                  alt="person"
                />
              </div>
              <div className="message" >
                <img className="iconly-bold-ticket"  src={iconlyBoldTicket} alt="Iconly/Bold/Ticket" />
                <div className="messages nunito-semi-bold-white-16px" >
                  {messages}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col" >
          <div className="small-profile" >
            <img className="logout"  src={logout} alt="Logout" />
            <div className="overlap-group1" >
              <div className="overlap-group-1" >
                <img className="rectangle-114"  src={rectangle114} alt="Rectangle 114" />
                <img className="ellipse-58"  src={ellipse58} alt="Ellipse 58" />
              </div>
              <div className="text" >
                <img className="creative-clicks"  src={creativeClicks} alt="Creative Clicks" />
                <img className="log-out"  src={logOut} alt="Log out" />
              </div>
            </div>
          </div>
          <div className="overlap-group6" >
            <img
              className="creative-clicks-logo"
              
              src="https://anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647b73e23710fef232e24b90/img/creative-clicks-logo.svg"
              alt="creative clicks logo"
            />
            <div className="overlap-group2" >
              <div className="uiux-designer" >
                {uiUxDesigner}
              </div>
              <h1 className="title" >
                {title}
              </h1>
              <div className="img-bg" style={{ backgroundImage: `url(${imgBg})` }} >
                <div className="img" style={{ backgroundImage: `url(${img})` }} ></div>
              </div>
            </div>
          </div>
          <div className="overlap-group-container" >
            <div className="overlap-group7" >
              <div className="about" >
                {about}
              </div>
              <div className="about-me" >
                <img
                  className="icon-user"
                  
                  src="https://anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647a875c7163986472f1aca2/img/person-1.svg"
                  alt="icon-user"
                />
                <div className="male nunito-normal-clairvoyant-16px" >
                  {male}
                </div>
              </div>
              <div className="overlap-group5" >
                <div className="line" >
                  <img
                    className="line-2"
                    
                    src="https://anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647a875c7163986472f1aca2/img/line-2.svg"
                    alt="Line 2"
                  />
                  <img
                    className="line-3"
                    
                    src="https://anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647a875c7163986472f1aca2/img/line-2.svg"
                    alt="Line 3"
                  />
                </div>
                <div className="birth" >
                  <img
                    className="cake"
                    
                    src="https://anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647b73e23710fef232e24b90/img/cake.svg"
                    alt="cake"
                  />
                  <div className="born-june-3-2023 nunito-normal-clairvoyant-16px" >
                    {bornJune32023}
                  </div>
                </div>
              </div>
              <div className="location" >
                <div className="location-1" ></div>
                <div className="san-diego-state nunito-normal-clairvoyant-16px" >
                  {sanDiegoState}
                </div>
              </div>
              <div className="creative-clickscccom nunito-normal-clairvoyant-16px" >
                {creativeclicksCcCom}
              </div>
              <div className="line-1" ></div>
              <div className="phone-number" >
                <img className="icon-call"  src={iconCall} alt="icon-call" />
                <div className="phone nunito-normal-clairvoyant-16px" >
                  {phone}
                </div>
              </div>
            </div>
            <div className="overlap-group4" >
              <div className="posts" >
                {posts}
              </div>
              <img
                className="line-3-1"
                
                src="https://anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647a875c7163986472f1aca2/img/line-3.svg"
                alt="Line 3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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



export default App;




{/* function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <ul>
        <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/tpostcreate">Create post</Link>
          </li>
        </ul>
      </nav>
    </div>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/login" element={<LandingPage />} />
    <Route path="/tpostcreate" element={<Tpostcreate />} />
    </Routes>
    
    </Router>
  );
}*/}