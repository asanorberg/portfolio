import { useEffect } from "react";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { state } = useTheme();

  //Adding/removing dark class
  useEffect(() => {
    console.log("Theme changed to:", state.theme);
    switch (state.theme) {
      case "dark":
        console.log("Adding dark mode class...");
        document.documentElement.classList.add("dark");
        break;

      case "light":
        console.log("Removing dark mode class...");
        document.documentElement.classList.remove("dark");
        break;
    }
  }, [state.theme]);

  return <Component {...pageProps} />;
}

export default ({ Component, pageProps }) => (
  <ThemeProvider>
    <MyApp Component={Component} pageProps={pageProps} />
  </ThemeProvider>
);
