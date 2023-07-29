import { createContext, useState } from "react";
import { useRouter } from "next/router";

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const router = useRouter();

  const [token, setToken] = useState("");

  const isLogged = () => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
    }
  };

  return (
    <LoginContext.Provider value={{ isLogged, setToken, token }}>
      {children}
    </LoginContext.Provider>
  );
}
