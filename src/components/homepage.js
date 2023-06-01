import React, { useState, useEffect} from "react";
import axios from "axios";
function Feedsposts(props) {

    return (
        <>
            <div>
                <span>{props.tpost.content}</span>
                <span>{props.tpost.mood}</span>
            </div>
        </>
    )
    }


function Homepage(props) {
    const [tposts, setTposts] = useState({
        tposts: [],
    })

    useEffect(() => {
        axios.get('http://localhost:5001/tpost/')
            .then(response => {
                setTposts({
                    ...tposts,
                    tposts: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const tpostsList = () => {
        return tposts.tposts.map(currenttpost => {
            return <Feedsposts tpost={currenttpost}  key={currenttpost._id} />
        })
    }
    return(
        <>
            <h1> this is the homepage hello how are you</h1>

            <div>
                {tpostsList()}
            </div>
        
        </>
    )
}

export default Homepage