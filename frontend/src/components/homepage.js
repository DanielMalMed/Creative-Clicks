import './homepage.css';
import HomeFeeds from "./homeposts";

const HomepageOwnersView = () => {
  return (
    <div className={styles.homepageOwnersView}>
      <div className={styles.smallProfile}>
        <img
          className={styles.profilePhotoIcon}
          alt=""
          src="/profile-photo.svg"
        />
        <div className={styles.text}>
          <b className={styles.chattykats}> ChattyKats</b>
        </div>
        <img className={styles.logoutIcon} alt="" src="/logout.svg" />
      </div>
      <div className={styles.chattykatHomepage} />
      <img
        className={styles.chattykatHomepage1}
        alt=""
        src="/chattykat-homepage@2x.png"
      />
      <div className={styles.profileName}>
        <div className={styles.title}>
          <div className={styles.uiuxDesigner}>UI/UX Designer</div>
        </div>
        <div className={styles.name}>
          <b className={styles.chattyKats}>Chatty kats</b>
        </div>
        <img className={styles.imgBgIcon} alt="" src="/img-bg.svg" />
      </div>
      <div className={styles.menu}>
        <div className={styles.bg} />
        <div className={styles.menuName}>
          <div className={styles.profile}>
            <div className={styles.profile1}>Profile</div>
            <img className={styles.personIcon} alt="" src="/person.svg" />
          </div>
          <div className={styles.home}>
            <div className={styles.home1}>Home</div>
            <img className={styles.homeIcon} alt="" src="/home.svg" />
          </div>
        </div>
      </div>
      <div className={styles.homepageOwnersViewChild} />
      <div className={styles.aboutUs}>About Us</div>
      <div className={styles.homepageOwnersViewItem} />
      <div className={styles.logoutParent}>
        <div className={styles.logout}>Logout</div>
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.aboutUsWelcomeContainer}>
        <p className={styles.blankLine}>About Us:</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p
          className={styles.blankLine}
        >{`Welcome to ChattyKats!  This website was designed to help build communities by keeping them connected.  This project is unique in that it is coded 100% by students, who collaborated on this site with the singular goal of creating something both usable and user friendly.  We hope you enjoy our project & don’t forget to leave a post if you would like to do so.  Thank you for visiting our website.`}</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>- The ChattyKats Team</p>
      </div>
    </div>
  );
};

export default HomepageOwnersView;
