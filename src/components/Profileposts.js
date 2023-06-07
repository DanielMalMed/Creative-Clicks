import { useEffect, useState } from "react";
import { useAuthContext } from "../hook/useAuthContext";
import axios from "axios";


function ProfilePosts(props) {

    return (
        <>
            <div>
                <span className="posttext">{props.tpost.content}</span>
                <span className="postemoji">{props.tpost.mood}</span>
            </div>
        </>
    )
    }

function Feedsposts(props) {
    const [tposts, setTposts] = useState({
        tposts: [],
    })
    const {user} = useAuthContext()
    useEffect(() => {
        const fetchmyposts =  () => { 
            axios.get('/tpost/', { headers : {"Authorization": `Bearer ${user.token}`}})
            .then(response => {
                setTposts({
                    ...tposts,
                    tposts: response.data
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

    const tpostsList = () => {
        return tposts.tposts.map(currenttpost => {
            return <ProfilePosts tpost={currenttpost}  key={currenttpost._id} />
        })
    }
    return(
        <>
            <div>
                {tpostsList()}
            </div>
        
        </>
    )
}

export default Feedsposts





