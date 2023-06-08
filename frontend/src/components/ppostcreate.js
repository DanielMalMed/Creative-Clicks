import React, {useState} from "react";
import { useAuthContext } from "../hook/useAuthContext";

function Ppostcreate () {
    let [ppost, setPpost] = useState({
        content: '',
        mood: ''
      })
    
      const onChangeContent = (e) => {
        setPpost({ ...ppost, content: e.target.value })
      }
    
      const onChangeMood = (e) => {
        setPpost({ ...ppost, mood: e.target.value })
      }
    
      const onSubmit = async(e) => {
        e.preventDefault();
    
        setPpost({
          ...ppost,
          content: ppost.content
        })
    
        setPpost({
          ...ppost,
          mood: ppost.mood
        })
    
        const response = await fetch ('/ppost/add', {
          method: 'POST',
          body: JSON.stringify(ppost),
          headers: {
            'Content-Type': 'application/json',
          }
        })
         ;
        if (response.ok){
              console.log(ppost)
    
        window.location = "/Homepage"
        }
    
      }


    return (

        <>
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
                    <br></br>
                    <input type="submit" value="Create new post" />
                  </form>
        
        </>
    )
}

export default Ppostcreate