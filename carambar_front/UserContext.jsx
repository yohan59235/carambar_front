/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useMemo, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userId, setUserId] = useState(null);

  const [user, setUser] = useState({
    id: localStorage.getItem("id"),
    nomdecompte: localStorage.getItem("nomdecompte"),
  });

  useEffect(() => {
    localStorage.setItem("id", user.id);
    localStorage.setItem("nomdecompte", user.nomdecompte);
  }, [user]);

  const props = useMemo(
    () => ({
      user,
      setUser,
      userId,
      setUserId,
    }),
    [user]
  );

  return <UserContext.Provider value={props}>{children}</UserContext.Provider>;
}

export default UserContext;
