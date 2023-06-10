import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hook/useAuthContext";

function HomePosts(props) {
  const {user} = useAuthContext()

    return (
        <>
            <div>

                <br></br>
                <span className="posttext">{props.ppost.content}</span>
                <span className="postemoji">{props.ppost.mood}</span>
                <div><strong>By {props.ppost.by}  </strong></div>
                <br></br>

            </div>
        </>
    )
    }


function HomeFeeds(props) {
    const [pposts, setPposts] = useState({
        pposts: [],
    })
const {user} = useAuthContext()
    useEffect(() => {
        const fetchmyposts =  () => { 
            axios.get(`${process.env.REACT_APP_SERVER_URL}ppost`,  { headers : {"Authorization": `Bearer ${user.token}`}})
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
        if (user) {
            fetchmyposts()
        }
    }, [user])

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





