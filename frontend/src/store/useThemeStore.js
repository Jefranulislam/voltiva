import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("preferred-theme") || "retro",
    setTheme: (theme) => {
        localStorage.setItem("preferred-theme", theme);
        set({ theme });
        // Immediately update the data-theme attribute on <html>
            document.documentElement.setAttribute("data-theme", theme);
        
    }
}));