import InputForm from "../Element/Input";
import Button from "../Element/Button";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    const usernameInput = event.target.username.value;
    const passwordInput = event.target.password.value;

    if (usernameInput === username && passwordInput === password) {
      window.location.href = "/products";
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        name="username"
        label="Username"
        type="text"
        placeholder="Enter your username"
      />
      <InputForm
        name="password"
        label="Password"
        type="password"
        placeholder="*****"
      />
      <Button classname="bg-slate-800" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
