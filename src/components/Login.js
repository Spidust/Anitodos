
export default function Login() {
  const password = window.localStorage.getItem("password");
  if (!password) {
    const password = prompt("Enter password");
    window.localStorage.setItem("password", password);
window.location.reload();
  }

  return (
    <div>
      <h1>Login</h1>
      <input type="password" id="password" placeholder="Password" />
      <button
        onClick={() => {
          const input = document.getElementById("password");
          if(input.value === password) {
            window.localStorage.setItem("loggedIn", true);
            window.location = '/'
            window.location.reload();
          } else {
            alert("Wrong password");
          }
        }}
      >
        Login
      </button>
    </div>
  );
}
