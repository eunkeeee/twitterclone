import AppRouter from "components/Router";
import { useEffect, useState } from "react";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
      } else {
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    // 우리가 늘 사용한 userobj => 통일성을 위한 state지만,
    // firebase에 user를 수정했다고 해도 React와 연결되어 있지 않음...
    // firebase에 정보를 가지고 react JS를 업데이트 해줘야 함!!!
    // 이건 그 업데이트를 해주기 위한 function으로 App(상류)부터 필요한 모든 곳에 들어감.
    setUserObj(authService.currentUser);
  };
  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      ) : (
        "Initializing..."
      )}
      <footer>&copy; Twitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
