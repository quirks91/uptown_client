import {
  assignVars,
  createGlobalTheme,
  createGlobalThemeContract,
  globalLayer,
  globalStyle,
} from "@vanilla-extract/css";

//////////////////////////////////////////////

globalLayer("reset");

export const global = createGlobalThemeContract({
  background: {
    color: "bg-color",
  },
  foreground: {
    color: "fg-color",
  },
  border: {
    color: "gray-100"
  }
});
createGlobalTheme(":root", global, {
  background: {
    color: "rgb(255, 255, 255)",
  },
  foreground: {
    color: "rgb(0, 0, 0)",
  },
  border: {
    color: "#rgb(200, 200, 200)"
  }
});
const darkGlobalTheme = {
  background: {
    color: "rgb(0, 0, 0)",
  },
  foreground: {
    color: "rgb(255, 255, 255)",
  },
  border: {
    color: "#rgb(200, 200, 200)"
  }
};
globalStyle(":root", {
  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: assignVars(global, darkGlobalTheme),
    },
  },
});

globalStyle("body", {
  color: global.foreground.color,
});

globalStyle("html", {
  "@media": {
    "(prefers-color-scheme: dark)": {
      colorScheme: "dark",
    },
  },
});

////////////////////////////////////////

globalStyle("*", {
  boxSizing: "border-box",
  padding: 0,
  margin: 0,
});
globalStyle("html, body", {
  maxWidth: "100dvw",
  overflowX: "hidden",
});
globalStyle("html", {
  fontSize: "10px",
});
globalStyle("body", {
  fontSize: "1.6rem",
});
globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

//