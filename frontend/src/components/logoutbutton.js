import { useLogout } from "../hook/useLogout";


export default function Logoutbutton() {
    const { logout } = useLogout()
    const handleClick = () => { 
      logout();
      window.location = "/ "
    }
    return (
      <div className="group-70">
        <div className="logout-1dmsans-normal-black-16px">
          <button onClick={handleClick}>Logout</button>
        </div>
      </div>
    );
  }