import { Link } from 'react-router-dom'

export default function ChangePass() {

    return (
        <div>
            <h1>Change Password</h1>
            <input type="password" id="password" placeholder="Password" />
            <button
                onClick={async () => {
                    const input = document.getElementById("password");
                    window.localStorage.setItem("password", input.value);
                    window.localStorage.setItem("loggedIn", false);
                    window.location.reload();
                }}
            >
                Change
            </button>
            <Link to="/"><button>goto home page</button></Link>
        </div>
    )
}