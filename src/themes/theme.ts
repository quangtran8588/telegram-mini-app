import { type ThemeConfig, extendTheme, defineStyle } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark", // 'dark' | 'light'
  useSystemColorMode: true,
};

const xl = defineStyle({
  fontSize: "xl",
  px: "6",
  h: "12",
});

const components = defineStyle({
  Button: {
    sizes: { xl },
  },
});

const theme = extendTheme({ config, components });

export default theme;
