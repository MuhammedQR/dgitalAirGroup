import { useTranslation } from "react-i18next";
import "./BtnI18n.css";
const BtnI18n = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="custom-select" style="width:200px;">
      <select onChange={changeLanguage}>
        <option value="en">English</option>
        <option value="ar">عربي</option>
      </select>
    </div>
  );
};

export default BtnI18n;
