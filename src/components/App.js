import AppRouter from "./Router";
import { useState } from "react";
import firebase from "../firebase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; Twitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
