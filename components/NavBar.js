
import { Link } from "@chakra-ui/react";
import { signInWithPopup } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react"
import { auth, db, provider } from "../firebase"
import { MdCreate } from "react-icons/md"

function NavBar() {
    
    const [user, setUser] = useState();

    function active() {
        document.querySelector('.lists').classList.toggle('active')
    }

    const addUsersToFirebase = async (user) => {
        await setDoc(doc(db, 'users', user.uid), {
            name: user.displayName,
            email: user.email,
            profileImg: user.photoURL,
        })
        console.log(user)
    }

    const logOut =  () => {
        setUser(null)
    }

    const signIn = async () => {
        const data = await signInWithPopup(auth, provider);
        const currentUser = data.user;
        addUsersToFirebase(currentUser);
        setUser(currentUser);
        
    }
    console.log(user)
  return (
    <div className='navbar'>
        <div className="logo_text">EVENTA</div>
        
        
        <div className="nav_lists">
        { user && (
                <li className="list event"><Link href="/newEvent"><MdCreate /></Link></li>
            )}
        <div onClick={active} className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <div className="lists">
            
            { user && (
                <li  className="list"><a href='/popular'>Favourite</a></li>
            )}
            { user && (
                 <li  className="list"><a href='/popular'>All Events</a></li>
            )}
            { !user && (
                <li className="list" onClick={signIn}>Sign In</li>
            )}
            { user && (
                <li className="list" onClick={logOut}>Sign Out</li>
            )}
        </div>
        { user && (
                <li className="list_profile">
                    <img src={user.photoURL} className="profile_avatar" alt={user.displayName} />
                </li>
            )}
        </div>
        
        
    </div>
  )
}

export default NavBar