import { style } from "@vanilla-extract/css";

export const main = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "2rem"
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "6.4rem",
  padding: "0 2rem",
  borderBottom: "solid 0.1rem red"
});
