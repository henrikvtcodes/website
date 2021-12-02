import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Icon from "supercons";
import { useColorMode, extendTheme, ThemeConfig, Button  } from "@chakra-ui/react"


// Chakra UI
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}
const theme = extendTheme({ config })


const ThemeButton = () => {
  // Theme Control
  const { theme, setTheme } = useTheme();

  const { colorMode, toggleColorMode } = useColorMode();

  // Don't show component if not mounted
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // Nested Functions to group together theme switching
  function setDark() {
    setTheme("dark");
  }

  function setLight() {
    setTheme("light");
  }

  // Theme Button
  switch (theme) {
    default: // Default theme is dark, return light button
      return (
        <button onClick={setLight} aria-label="Change to Light Mode">
          <Icon glyph="idea" />
        </button>
      );
    case "light":
      return (
        <button onClick={setDark} aria-label="Change to Dark Mode">
          
          <Icon glyph="moon" />
        </button>
      );
    case "dark":
      return (
        <button onClick={setLight} aria-label="Change to Light Mode">
          <Icon glyph="idea" />
        </button>
      );
  }
}

export default ThemeButton;
export { theme };