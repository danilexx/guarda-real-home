import { css } from "styled-components";

export const theme = {
  background: "white",
  primary: "#012F59",
  secondary: "#CA0024",
  white: "#FFF",
  darkGray: "#282828",
  lightGray1: "#CCCCCC",
  darkDarkGray: "#272727",
  error: "#DE3B3B",
  texture: css`
    background-image: url("/icons/texture.svg");
    background-color: #e6dfb3;
    background-size: 33px;
  `
};

export type ITheme = typeof theme;
