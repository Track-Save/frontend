import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin.ts";
import { AlertMessage } from "../../../components/common/alert/AlertMessage.tsx";
import Label from "../../../components/common/labels/Label.tsx";

function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    isLoading,
    handleLogin,
  } = useLogin();

  const navigate = useNavigate();

  function navigateToPage(page: string) {
    navigate(page);
  }

  return (
    <div className="loginForm">
      <form onSubmit={handleLogin}>
        {error && (
          <AlertMessage
            type="error"
            message={error}
            onClose={() => setError("")}
          />
        )}
        <h1 className="textLogin">Login</h1>
        <Label
          variant="inputText"
          name="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Label>
        <Label
          variant="Password"
          name="Senha"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Label>
        <div className="forgotPassword">
          <button
            typeof="button"
            className="sideBtn"
            onClick={() => navigateToPage("/RecoverPassword")}
          >
            Esqueceu a senha?
          </button>
        </div>
        <button type="submit" className="btnDefaultAuth">
          {isLoading ? "Entrando..." : "Entrar"}
        </button>
        <br />
        <button
          typeof="button"
          className="sideBtn"
          onClick={() => navigateToPage("/CreateAccount")}
        >
          Ou crie sua conta
        </button>
      </form>
    </div>
  );
}

export default Login;
