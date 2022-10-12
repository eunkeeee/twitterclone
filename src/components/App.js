import AppRouter from "components/Router";
import { useState } from "react";
import { authService } from "fbase";

function App() {
  const auth = authService;
  console.log(authService.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; Twitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
