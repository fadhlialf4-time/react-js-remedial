import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { NotificationContext } from "./NotificationContext";

function Header() {
  const { language } = useContext(LanguageContext);
  const { notifications } = useContext(NotificationContext);

  return (
    <header>
      <p>Language: {language}</p>
      <p>Notifications: {notifications}</p>
    </header>
  );
}

export default Header;
