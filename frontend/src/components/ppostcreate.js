import React, { useState } from "react";
import { useAuthContext } from "../hook/useAuthContext";
import Logoutbutton from "./logoutbutton";

function Ppostcreate(props) {
  const { logout, profilePhoto, chattykats, uiUxDesigner, chattyKats, imgBg, iconHome, place, profile, title, aboutUsWelcomeTo } = props;
  const { user } = useAuthContext()

  let [ppost, setPpost] = useState({
    content: '',
    mood: '',
    by: ''
  })

  const onChangeContent = (e) => {
    setPpost({ ...ppost, content: e.target.value })
  }

  const onChangeMood = (e) => {
    setPpost({ ...ppost, mood: e.target.value })
  }
  const onChangeBy = (e) => {
    setPpost({ ...ppost, by: e.target.value })
  }
  const onSubmit = async (e) => {
    e.preventDefault();

    setPpost({
      ...ppost,
      content: ppost.content
    })

    setPpost({
      ...ppost,
      mood: ppost.mood
    })

    setPpost({
      ...ppost,
      by: ppost.by
    })

    const response = await fetch('/ppost/add', {
      method: 'POST',
      body: JSON.stringify(ppost),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
      ;
    if (response.ok) {
      console.log(ppost)

      window.location = "/Homepage"
    }

  }


  return (

    <>
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
              <img className="img-big" src={require(`../components/logo/logo.png`)} alt="img&amp; bg" />
            </div>
            <div className="menu1">
              <div className="home1">
              <button className="home" onClick={() => window.location = "/Homepage"} >
                    <img className="icon-home" src={iconHome} alt="icon-home" />
                    <div className="place nunito-semi-bold-white-16px" >
                      {place}
                    </div>
                  </button>                <div className="placenunito-semi-bold-yellow-orange-16px">
                  {place}
                </div>
              </div>
              <div className="profile1">
                <img className="icon-user" src="https://anima-uploads.s3.amazonaws.com/projects/647a8659bf8eb1cccd628690/releases/647a875c7163986472f1aca2/img/person.svg" alt="icon-user" />
                <div className="profile-10">
                  <button onClick={() => { window.location = "/ProfilePageOwnersView" }}>{profile}</button>
                </div>
              </div>
            </div>

            <div className="rectangle-292"></div>

            <h1 className="titleZ">
              <form onSubmit={onSubmit}>
                <div>
                  <label>Whats on your mind today?</label>
                  <br></br>
                  <input type="text"
                    required
                    value={ppost.content}
                    onChange={onChangeContent} />
                </div>
                <div>
                  <label>Your Mood:</label>
                  <select
                    required
                    value={ppost.mood}
                    onChange={onChangeMood}
                  >
                    <option></option>
                    <option>🥰</option>
                    <option>👿</option>
                    <option>😠 </option>
                    <option>😭</option>

                  </select>
                </div>
                <div>
                  <label>Post by</label>
                  <br></br>
                  {/* <input type="text"
                    required
                    value={ppost.by}
                    onChange={onChangeBy} /> */}
                    <select
                    required
                    value={ppost.by}
                    onChange={onChangeBy}
                  >
                                        <option></option>

                    {user && <option>{user.email}</option>}
                  </select>

                </div>
                <br></br>
                <input type="submit" value="Create new post" />
              </form>
            </h1>
            <img className="line-30" alt="Line 3" />
            <Logoutbutton />

            <p className="about-us-welcome-todmsans-normal-black-16px">

            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ppostcreate