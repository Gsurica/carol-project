import React from 'react';

import { useTheme } from "../../hooks/useTheme"; 

export const ThemeSwitcher = () => {

  const { theme, setTheme } = useTheme();

  if (theme === "dark") {
    return (
      <>
        <div className="fixed right-1 bottom-1">
          <button
            onClick={ () => setTheme(theme === "light" ? "dark" : "light") }
          >
            <div className="p-4 dark:bg-[#DCE9FC] rounded-full flex items-center bg-rose-100 text-3xl text-black z-40">
              <ion-icon name="football-outline"></ion-icon>
            </div>
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="fixed right-1 bottom-1">
        <button
          onClick={ () => setTheme(theme === "light" ? "dark" : "light") }
        >
          <div className="p-4 dark:bg-[#DCE9FC] rounded-full flex items-center bg-rose-100 text-3xl text-black z-40">
            <ion-icon name="flower-outline"></ion-icon>
          </div>
        </button>
      </div>
    </>
  )
}
