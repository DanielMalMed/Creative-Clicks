import React, {useState} from "react";
import axios from "axios";


function Tpostcreate() {
    let [tpost, setTpost] = useState ({
        content:'',
        mood:''
    })

    const onChangeContent = (e) => {
        setTpost({ ...tpost, content: e.target.value})
    }

    const onChangeMood = (e) => {
        setTpost({ ...tpost, mood: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();

        setTpost({...tpost,
        content: tpost.content})

        setTpost({...tpost,
            mood: tpost.mood})

            axios.post('http://localhost:5001/tpost/add', tpost)
            .then(res => console.log(res.data));

            console.log(tpost)

            window.location = "/"
    }
    return(
        <>
            <form onSubmit={onSubmit}>
                <div>
                <label>Whats on your mind today?</label>
                <br></br>
                <input type="text"
                        required
                        value={tpost.content}
                        onChange={onChangeContent}/>
                </div>
                <div>
                    <label>Your Mood:</label>
                    <select 
                        required
                        value={tpost.mood}
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
                <input type="submit" value="Create new post"/>
            </form>
        
        
        </>
    )
}

export default Tpostcreate