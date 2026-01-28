import UserInfo from "./ContextProvider/UserInfo";
import { UserProvider } from "./ContextProvider/UserContext";
import { ThemeProvider } from "./ThemeContext/ThemeContext";
import { ThemeButton, ThemeCard, ThemeText } from "./ThemeContext/ThemeButton";
import Header from "./MultipleContext/Header";
import { LanguageProvider } from "./MultipleContext/LanguageContext";
import { NotificationProvider } from "./MultipleContext/NotificationContext";
import Profile from "./ContextProvider/Profile";
import ProductList from "./ShoppingCart/ProductList";
import CartDisplay from "./ShoppingCart/CartDisplay";
import { CartProvider } from "./ShoppingCart/CartContext";

function App() {
  return (
    <>
    <UserProvider>
      <UserInfo />
      <Profile />
    </UserProvider>

    <ThemeProvider>
      <ThemeButton />
      <ThemeText />
      <ThemeCard />
    </ThemeProvider>

     <LanguageProvider>
      <NotificationProvider>
        <Header />
      </NotificationProvider>
    </LanguageProvider>

    <CartProvider>
      <h1>Shopping Cart</h1>
      <ProductList />
      <CartDisplay />
    </CartProvider>
    </>
  );
}

export default App;