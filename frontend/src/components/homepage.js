import React from "react";
import './App.css';

export default function HomepageOwnersView(props) {
  const { logout, profilePhoto, chattykats, uiUxDesigner, chattyKats, imgBg, iconHome, place, profile, title, aboutUsWelcomeTo } = props;

  return (
    <div className="container-center-horizontal">
      <div className="homepage-owner-s-viewscreen">
        <div className="overlap-group2">
          <div className="small-profile">
            <img className="logout" src={logout} alt="Logout" />
            <div className="overlap-group">
              <img className="profile-photo" src={profilePhoto} alt="Profile photo" />
              <img className="chatty-kats" src={chattykats} alt="ChattyKats" />
            </div>
          </div>
          <div className="chattykat-homepage"></div>
          <img className="chattykat-homepage-1" src="chattykat-homepage.svg" alt="chattykat homepage " />
          <div className="overlap-group1">
            <div className="uiux-designernunito-normal-violet-eggplant-16px">
              {uiUxDesigner}
            </div>
            <div className="chatty-kats-1nunito-bold-violet-eggplant-30px">
              {chattyKats}
            </div>
            <img className="img-bg" src={imgBg} alt="img&amp; bg" />
          </div>
          <div className="menu">
            <div className="home">
              <img className="icon-home" src={iconHome} alt="icon-home" />
              <div className="placenunito-semi-bold-yellow-orange-16px">
                {place}
              </div>
            </div>
            <div className="profile">
              <img className="icon-user" src="person.svg" alt="icon-user" />
              <div className="profile-1">
                {profile}
              </div>
            </div>
          </div>
          <div className="rectangle-292"></div>
          <h1 className="title">
            {title}
          </h1>
          <img className="line-3" src="line-3.svg" alt="Line 3" />
          <Group7 />
          <p className="about-us-welcome-todmsans-normal-black-16px">
            {aboutUsWelcomeTo}
          </p>
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="group-7">
      <div className="logout-1dmsans-normal-black-16px">
        Logout
      </div>
      <img className="line" src="line.svg" alt="Line" />
    </div>
  );
}

// const homepageOwnersViewData = {
//   logout: "logout.png",
//   profilePhoto: "profile-photo.png",
//   chattykats: "chattykats.png",
//   uiUxDesigner: "UI/UX Designer",
//   chattyKats: "Chatty kats",
//   imgBg: "img-bg.png",
//   iconHome: "home.png",
//   place: "Home",
//   profile: "Profile",
//   title: "About Us",
//   aboutUsWelcomeTo: (
//     <>
//       About Us:
//       <br />
//       <br />
//       Welcome to ChattyKats! This website was designed to help build communities by keeping them connected. This project is unique in
//       that it is coded 100% by students, who collaborated on this site with the singular goal of creating something both usable and user
//       friendly. We hope you enjoy our project &amp; don’t forget to leave a post if you would like to do so. Thank you for visiting our
//       website.
//       <br />
//       <br />- The ChattyKats Team
//     </>
//   ),
// };
