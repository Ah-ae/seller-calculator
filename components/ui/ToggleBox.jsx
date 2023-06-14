import { LOCAL_STORAGE_KEY, THEME } from "@/util/commonConstants";
import Toggle from "./Toggle";

function ToggleBox() {
  const toggleDarkMode = () => {
    if (localStorage.getItem(LOCAL_STORAGE_KEY.THEME) === THEME.DARK) {
      localStorage.removeItem(LOCAL_STORAGE_KEY.THEME);
      document.documentElement.classList.remove(THEME.DARK);
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY.THEME, THEME.DARK);
      document.documentElement.classList.add(THEME.DARK);
    }
  };

  return (
    <div className="mt-4 flex justify-end items-center">
      <span className="mr-2 text-gray-500 dark:text-dark-blue-100">
        다크 모드
      </span>
      <Toggle handleToggle={toggleDarkMode} />
    </div>
  );
}

export default ToggleBox;
