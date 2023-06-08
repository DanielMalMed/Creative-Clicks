import { useEffect, useState } from "react";
import { useAuthContext } from "../hook/useAuthContext";
import axios from "axios";


function HomePosts(props) {
  

    return (
        <>
            <div>
                <span className="posttext">{props.ppost.content}</span>
                <span className="postemoji">{props.ppost.mood}</span>
                <div><strong>By  </strong></div>
                
            </div>
        </>
    )
    }

function HomeFeeds(props) {
    const [pposts, setPposts] = useState({
        pposts: [],
    })

    useEffect(() => {
        const fetchmyposts =  () => { 
            axios.get(`${process.env.REACT_APP_SERVER_URL}ppost`, )
            .then(response => {
                setPposts({
                    ...pposts,
                    pposts: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
        }
        fetchmyposts()
    }, )

    const ppostsList = () => {
        return pposts.pposts.map(currentppost => {
            return <HomePosts ppost={currentppost}  key={currentppost._id} />
        })
    }
    return(
        <>
            <div>
                {ppostsList()}
            </div>
        
        </>
    )
}

export default HomeFeeds





