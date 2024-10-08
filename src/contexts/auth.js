// AuthContext.js
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const parsedToken = JSON.parse(userToken);
      const users = JSON.parse(usersStorage);
      const hasUser = users.find((user) => user.email === parsedToken.email);

      if (hasUser) setUser(hasUser);
    }
  }, []);

  const signin = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.find((user) => user.email === email);

    if (hasUser) {
      if (hasUser.password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser(hasUser);
        return;
      } else {
        return "E-mail ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  const signup = (name, email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.find((user) => user.email === email);

    if (hasUser) {
      return "Já tem uma conta com esse E-mail";
    }

    const newUser = { name, email, password };

    const updatedUsers = usersStorage ? [...usersStorage, newUser] : [newUser];

    localStorage.setItem("users_bd", JSON.stringify(updatedUsers));

    // Opcional: Auto-login após o cadastro
    const token = Math.random().toString(36).substring(2);
    localStorage.setItem("user_token", JSON.stringify({ email, token }));
    setUser(newUser);

    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
