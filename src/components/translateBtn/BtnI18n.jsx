import { useTranslation } from "react-i18next";
import "./BtnI18n.css"
const BtnI18n = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div>
      <select onChange={changeLanguage}>
        <option className="option" value="en">English</option>
        <option className="option" value="ar">عربي</option>
      </select> 
    </div>
  );
};

export default BtnI18n;
