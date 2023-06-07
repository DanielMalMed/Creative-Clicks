import React from "react";
import ProfilePosts from "./Profileposts";
import '../App.css';
import { useAuthContext } from "../hook/useAuthContext"


export default function ProfilePageOwnersView(props) {
    const {
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
    const {user} = useAuthContext()
    return (
      <div className="container-center-horizontal">
        <div className="profile-page-owner-s-view screen" >
          <div className="menu" >
            <div className="overlap-group3" >
              <div className="bg" ></div>
              <div className="menu-name" >
              <button className="home" >
                <img className="icon-home" src ="frontend/src/components/homepage.js"alt="icon-home"  />
                <div className="place nunito-semi-bold-white-16px" >
                  {place}
                  </div>
                    </button>
                </div>
                <div className="overlap-group" >
                  <div className="profile" >
                    {profile}
                  </div>
                  <div className="rectangle-289" ></div>
                  <img
                    className="person"
                    
                    src="https:anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647a875c7163986472f1aca2/img/person.svg"
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
                
                src="https:anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647b73e23710fef232e24b90/img/creative-clicks-logo.svg"
                alt="creative clicks logo"
              />
              <div className="overlap-group2" >
                <div className="uiux-designer" >
                  {uiUxDesigner}
                </div>
                <h1 className="title" >
                 {user && <span>{user.email} doritos</span>}
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
                    
                    src="https:anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647a875c7163986472f1aca2/img/person-1.svg"
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
                      
                      src="https:anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647a875c7163986472f1aca2/img/line-2.svg"
                      alt="Line 2"
                    />
                    <img
                      className="line-3"
                      
                      src="https:anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647a875c7163986472f1aca2/img/line-2.svg"
                      alt="Line 3"
                    />
                  </div>
                  <div className="birth" >
                    <img
                      className="cake"
                      
                      src="https:anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647b73e23710fef232e24b90/img/cake.svg"
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
                  <ProfilePosts /> 
                  {user && <button type="submit" onClick={() => window.location = "/tpostcreate"}>Create Post </button>}
                </div>
                <img
                  className="line-3-1"
                  
                  src="https:anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647a875c7163986472f1aca2/img/line-3.svg"
                  alt="Line 3"
                />
              </div>
            </div>
          </div>
        </div>
    );
  }


  /* export default function ProfilePageOwnersView(props) {
   const {
     iconHome,
     place,
     profile,
     creativeClicks,
     profilePhoto,
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
    const {user} = useAuthContext()

   return (
     <div className="container-center-horizontal">
       <div className="profile-page-owner-s-viewscreen">
         <div className="menu">
           <div className="overlap-group1">
             <div className="bg"></div>
             <div className="menu-name">
               <div className="home">
                 <img className="home-1" src={iconHome} alt="Home" />
                 <div className="placenunito-semi-bold-white-16px">
                   {place}
                 </div>
               </div>
               <div className="overlap-group-2">
                 <div className="profilenunito-semi-bold-yellow-orange-16px">
                   {profile}
                 </div>
                 <div className="rectangle-289"></div>
                 <img className="person" src="person.svg" alt="person" />
               </div>
             </div>
           </div>
         </div>
         <div className="flex-col">
           <div className="overlap-group5">
             <div className="small-profile">
               <img className="creative-clicks" src={creativeClicks} alt="Creative Clicks" />
               <div className="profile-photo" style={{ backgroundImage: `url(${profilePhoto})` }}></div>
             </div>
             <Group7 />
           </div>
           <div className="overlap-group6">
             <img className="creative-clicks-logo" src="creative-clicks-logo.svg" alt="creative clicks logo" />
             <div className="overlap-group-3">
               <div className="uiux-designernunito-normal-violet-eggplant-16px">
                 {uiUxDesigner}
               </div>
               <h1 className="titlenunito-bold-violet-eggplant-30px">
                 {title}
               </h1>
               <div className="img-bg" style={{ backgroundImage: `url(${imgBg})` }}>
                 <div className="img" style={{ backgroundImage: `url(${img})` }}></div>
               </div>
             </div>
           </div>
           <div className="overlap-group-container">
             <div className="overlap-group8">
               <div className="about">
                 {about}
               </div>
               <div className="about-me">
                 <img className="person-1" src="person-1.svg" alt="person" />
                 <div className="malenunito-normal-clairvoyant-16px">
                   {male}
                 </div>
               </div>
               <div className="overlap-group4">
                 <div className="line-1">
                   <img className="line-2" src="line-2.svg" alt="Line 2" />
                   <img className="line-3-1" src="line-2.svg" alt="Line 3" />
                 </div>
                 <div className="birth">
                   <img className="cake" src="cake-1.svg" alt="cake" />
                   <div className="born-june-3-2023nunito-normal-clairvoyant-16px">
                     {bornJune32023}
                   </div>
                 </div>
               </div>
               <div className="location">
                 <div className="location-1"></div>
                 <div className="san-diego-statenunito-normal-clairvoyant-16px">
                   {sanDiegoState}
                 </div>
               </div>
               <div className="creative-clickscccomnunito-normal-clairvoyant-16px">
                 {creativeclicksCcCom}
               </div>
               <div className="line-4"></div>
               <div className="phone-number">
                 <img className="call" src={iconCall} alt="Call" />
                 <div className="phonenunito-normal-clairvoyant-16px">
                   {phone}
                   </div>
                </div>
              </div>
              <div className="overlap-group4" >
                <div className="posts" >
                  {posts}
                  <ProfilePosts /> 
                  {user && <button type="submit" onClick={() => window.location = "/tpostcreate"}>Create Post </button>}
                </div>
                <img
                  className="line-3-1"
                  
                  src="https:anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647a875c7163986472f1aca2/img/line-3.svg"
                  alt="Line 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

 function Group7() {
   return (
     <div className="group-7">
       <div className="logoutdmsans-normal-black-16px">
         Logout
       </div>
       <img className="line-5" src="line-5.svg" alt="Line" />
     </div>
   );
 }

 const profilePageOwnersViewData = {
   iconHome: "home.png",
   place: "Home",
   profile: "Profile",
   creativeClicks: "creative-clicks.png",
   profilePhoto: "ellipse-58-1.png",
   uiUxDesigner: "UI/UX Designer",
   title: "Creative Clicks",
   imgBg: "ellipse-22.png",
   img: "ellipse-22.png",
   about: "About",
   male: "Male",
   bornJune32023: "Born June 3, 2023",
   sanDiegoState: "San Diego State",
   creativeclicksCcCom: "CreativeClicks@cc.com",
   iconCall: "call.png",
   phone: "1(234)567-8910",
   posts1: "Posts",
   posts2: "Posts",
 }; */