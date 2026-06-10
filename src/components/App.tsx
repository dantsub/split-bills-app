import { DishesContextProvider } from "@/context/DishesContext";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeSwitch from "./ThemeSwitch";
import Header from "./Header";
import Receipt from "./Receipt";
import Settings from "./Settings";
import { SettingsContextProvider } from "@/context/SettingsContext";

export default function App() {
  return (
    <DishesContextProvider>
      <ThemeContextProvider>
        <SettingsContextProvider>
          <div className="bg-mesh"></div>
          <section>
            <ThemeSwitch />
            <section className="container mx-auto relative">
              <Header />
              <section className="flex flex-wrap justify-center gap-6 lg:justify-between px-4">
                <Receipt />
                <Settings />
              </section>
            </section>
          </section>
        </SettingsContextProvider>
      </ThemeContextProvider>
    </DishesContextProvider>
  );
}
