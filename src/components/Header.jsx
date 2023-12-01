import { useEffect } from "react";
import { themeChange } from "theme-change";
import Switch from "@mui/material/Switch";

export function Header() {
  useEffect(() => {
    themeChange(false); 
  }, []);

  const handleThemeChange = (event) => {
    const theme = event.target.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <span className="text-lg font-bold">
          Country Info App
        </span>
      </div>
      <div className="flex justify-end">
        <div className="flex items-center">
          <span className="mr-2">Dark Mode</span>
          <Switch
            onChange={handleThemeChange}
            inputProps={{ 'aria-label': 'dark mode switch' }}
          />
        </div>
      </div>
    </div>
  );
}
