import { style, globalStyle } from "@vanilla-extract/css";
import { reset } from "./layers.css";

globalStyle(
  "*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *))",
  {
    "@layer": {
      [reset]: {
        all: "unset",
        display: "revert",
      },
    },
  }
);

globalStyle(
  "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code,del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var,b, u, i, center,dl, dt, dd, ol, ul, li,fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td,article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,time, mark, audio, video",
  {
    "@layer": {
      [reset]: {
        margin: 0,
        padding: 0,
        border: 0,
        font: "inherit",
        verticalAlign: "baseline",
      },
    },
  }
);
