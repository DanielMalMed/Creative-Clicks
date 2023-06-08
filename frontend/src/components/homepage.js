import React from "react";
import './homepage.css'

export default function HomepageOwnersView(props) {
  const { logout, profilePhoto, chattykats, uiUxDesigner, chattyKats, imgBg, iconHome, place, profile, title, aboutUsWelcomeTo } = props;

  return (
    <div className="container-center-horizontal">
      <div className="homepage-owner-s-viewscreen">
        <div className="overlap-group20">
          <div className="small-profile1">
            <img className="logout1" src={logout} alt="Logout" />
            <div className="overlap-groupA">
              <img className="profile-photoA" src='frontend/src/components/logo/logo.png' alt="Profile photo" />
              <img className="chatty-kats" src='frontend/src/components/logo/ChattyKat.png' alt="ChattyKats" />
            </div>
          </div>
          <div className="chattykat-homepage"></div>
          <img className="chattykat-homepage-1" src="frontend/src/components/logo/ChattyKat.png" alt="chattykat homepage " />
          <div className="overlap-groupZ">
            <div className="uiux-designernunito-normal-violet-eggplant-16px">
              {uiUxDesigner}
            </div>
            <div className="chatty-kats-1nunito-bold-violet-eggplant-30px">
              {chattyKats}
            </div>
            <img className="img-big" src={imgBg} alt="img&amp; bg" />
          </div>
          <div className="menu1">
            <div className="home1">
              <img className="icon-home1" src={iconHome} alt="icon-home" />
              <div className="placenunito-semi-bold-yellow-orange-16px">
                {place}
              </div>
            </div>
            <div className="profile1">
              <img className="icon-user" src="https://anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647a875c7163986472f1aca2/img/person.svg" alt="icon-user" />
              <div className="profile-10">
                {profile}
              </div>
            </div>
          </div>
          <div className="rectangle-292"></div>
          <h1 className="titleZ">
            {title}
          </h1>
          <img className="line-30" src="line-3.svg" alt="Line 3" />
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
    <div className="group-70">
      <div className="logout-1dmsans-normal-black-16px">
        Logout
      </div>
      <img className="lineC" src="line.svg" alt="Line" />
    </div>
  );
}