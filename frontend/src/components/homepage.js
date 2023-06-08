import React from "react";
import './homepage.css'
import { useLogout } from "../hook/useLogout";

export default function HomepageOwnersView(props) {
  const { logout, profilePhoto, chattykats, uiUxDesigner, chattyKats, imgBg, iconHome, place, profile, title, aboutUsWelcomeTo } = props;

  return (
    <div className="container-center-horizontal">
      <div className="homepage-owner-s-viewscreen">
        <div className="overlap-group20">
          <div className="small-profile1">
            <img className="logout1" src={logout} alt="Logout" />
            <div className="overlap-groupA">
              <img className="profile-photoA" src={require(`../components/logo/logo.png`)} alt="Profile photo" />
              <img className="chatty-kats" src={require('../components/logo/ChattyKat.png')} alt="ChattyKats" />
            </div>
          </div>
          <div className="chattykat-homepage"></div>
          <img className="chattykat-homepage-1" src={require('../components/logo/ChattyKat.png')} alt="chattykat homepage " />
          <div className="overlap-groupZ">
            <div className="uiux-designernunito-normal-violet-eggplant-16px">
              {uiUxDesigner}
            </div>
            <div className="chatty-kats-1nunito-bold-violet-eggplant-30px">
              {chattyKats}
            </div>
            <img className="img-big" src={require(`../components/logo/logo.png`)}  alt="img&amp; bg" />
          </div>
          <div className="menu1">
            <div className="home1">
              <img className="icon-home" src={iconHome} />
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
  const { logout } = useLogout()
  const handleClick = () => { 
    logout();
    window.location = "/ "
  }
  return (
    <div className="group-7">
      <div className="logout-1dmsans-normal-black-16px">
        <button onClick={handleClick}>Logout</button>
      </div>
      <img className="line" src="line.svg" alt="Line" />
    </div>
  );
}


// import React from "react";
// import './homepage.css'
// import HomeFeeds from "./homeposts";
// // function App() {
// //   return <HomepageOwnersView {...homepageOwnersViewData} />;
// // }

// // export default App;

// const HomepageOwnersView = (props) => {
//   const { logout, profilePhoto, chattykats, uiUxDesigner, chattyKats, imgBg, iconHome, place, profile, title, aboutUsWelcomeTo } = props;

//   return (
//     <div className={styles.homepageOwnersView}>
//       <div className={styles.smallProfile}>
//         <img
//           className={styles.profilePhotoIcon}
//           alt=""
//           src="/profile-photo.svg"
//         />
//         <div className={styles.text}>
//           <b className={styles.chattykats}> ChattyKats</b>
//         </div>
//         <img className={styles.logoutIcon} alt="" src="/logout.svg" />
//       </div>
//       <div className={styles.chattykatHomepage} />
//       <img
//         className={styles.chattykatHomepage1}
//         alt=""
//         src="/chattykat-homepage@2x.png"
//       />
//       <div className={styles.profileName}>
//         <div className={styles.title}>
//           <div className={styles.uiuxDesigner}>UI/UX Designer</div>
//         </div>
//         <div className={styles.name}>
//           <b className={styles.chattyKats}>Chatty kats</b>
//         </div>
//         <img className={styles.imgBgIcon} alt="" src="/img-bg.svg" />
//       </div>
//       <div className={styles.menu}>
//         <div className={styles.bg} />
//         <div className={styles.menuName}>
//           <div className={styles.profile}>
//             <div className={styles.profile1}>Profile</div>
//             <img className={styles.personIcon} alt="" src="/person.svg" />
//           </div>
//           <div className={styles.home}>
//             <div className={styles.home1}>Home</div>
//             <img className={styles.homeIcon} alt="" src="/home.svg" />
//           </div>
//           <div className="menu">
//             <div className="home">
//               <img className="icon-home" src={iconHome} alt="icon-home" />
//               <div className="placenunito-semi-bold-yellow-orange-16px">
//                 {place}
//               </div>
//             </div>
//             <div className="profile">
//               <img className="icon-user" src="person.svg" alt="icon-user" />
//               <div className="profile-1">
//                 {profile}
//               </div>
//             </div>
//           </div>
//           <div className="rectangle-292"></div>
//           <h1 className="title">
//             {title}
//             <HomeFeeds />
//           </h1>
//           <img className="line-3" src="line-3.svg" alt="Line 3" />
//           <Group7 />
//           <p className="about-us-welcome-todmsans-normal-black-16px">
//             {aboutUsWelcomeTo}
//           </p>
//         </div>
//       </div>
//       <div className={styles.homepageOwnersViewChild} />
//       <div className={styles.aboutUs}>About Us</div>
//       <div className={styles.homepageOwnersViewItem} />
//       <div className={styles.logoutParent}>
//         <div className={styles.logout}>Logout</div>
//         <img className={styles.lineIcon} alt="" src="/line.svg" />
//       </div>
//       <div className={styles.aboutUsWelcomeContainer}>
//         <p className={styles.blankLine}>About Us:</p>
//         <p className={styles.blankLine}>&nbsp;</p>
//         <p
//           className={styles.blankLine}
//         >{`Welcome to ChattyKats!  This website was designed to help build communities by keeping them connected.  This project is unique in that it is coded 100% by students, who collaborated on this site with the singular goal of creating something both usable and user friendly.  We hope you enjoy our project & don’t forget to leave a post if you would like to do so.  Thank you for visiting our website.`}</p>
//         <p className={styles.blankLine}>&nbsp;</p>
//         <p className={styles.blankLine}>- The ChattyKats Team</p>
//       </div>
//     </div>
//   );
// };

// function Group7() {
//   return (
//     <div className="group-7">
//       <div className="logout-1dmsans-normal-black-16px">
//         Logout
//       </div>
//       <img className="line" src="line.svg" alt="Line" />
//     </div>
//   );
// } 
// export default HomepageOwnersView;
