import React from 'react';

import { useTheme } from "../../hooks/useTheme"; 

export const ThemeSwitcher = () => {

  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="fixed right-1 bottom-1">
        <button
          onClick={ () => setTheme(theme === "light" ? "dark" : "light") }
        >
          <div className="p-4 dark:bg-[#DCE9FC] rounded-full flex items-center bg-rose-100 text-6xl text-white">
            <ion-icon name="logo-tableau"></ion-icon>
          </div>
        </button>
      </div>
    </>
  )
}
