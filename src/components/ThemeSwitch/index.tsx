import { useTheme } from "@/context/ThemeContext";

const themeModes = {
  dark: {
    icon: "🌙",
    label: "Dark",
  },
  light: {
    icon: "☀️",
    label: "Light",
  },
};

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="toggle-theme glass">
      <button onClick={toggleTheme} className="toggle-theme__btn">
        <span>{themeModes[theme].icon}</span>
        <span>{themeModes[theme].label}</span>
      </button>
    </div>
  );
}
