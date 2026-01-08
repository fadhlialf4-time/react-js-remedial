import ProfileCard from "./components/ProfileCard";
import DiscountPrice from "./components/DiscountPrice";
import LoginStatus from "./components/LoginStatus";
import MessageInfo from "./components/MessageInfo";
import FruitList from "./components/FruitList";

// Nomor 1
function App() {
  return (
    <>
    <ProfileCard
      name="Fadhli Al Fajri"
      photo="https://via.placeholder.com/300x200"
      bio="Seorang Front-End Developer"
      skills={["HTML", "CSS", "JavaScript"]}
    />

    <DiscountPrice />
    <LoginStatus />
    <MessageInfo />

    <FruitList 
    fruits={['Apel', 'Pisang', 'Mangga']} 
    />

  </>
  );
}

export default App

