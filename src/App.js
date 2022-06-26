import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import "./styles.css";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <>
      <Header />
      {isAuthenticated || <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
