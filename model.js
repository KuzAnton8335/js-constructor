import { Block } from "./classes/blocks.js";
import image from "/assests/image.png";

const text = `Крутые уроки по Javascript тут:`;

export const model = [
//   new Block(type:"title"),
  {
    type: "title",
    value: "Конструктор сайтов на чистом Javascript",
    options: {
      tag: "h2",
      styles: {
        background: "linear-gradient(to right,#ff0099,#493240)",
        color: "#fff",
        padding: "1.5rem",
        "text-align": "center",
      },
    },
  },
  {
    type: "image",
    value: image,
    options: {
      styles: {
        padding: "2rem 0",
        display: "flex",
        "justify-content": "center",
      },
      imageStyles: {
        width: "500px",
        height: "auto",
      },
      alt: "картинка",
    },
  },
  {
    type: "columns",
    value: [
      "Приложение на чистом Javascript, без использования библиотек",
      "Узнаешь как работает принцип SOLID и ОПП  в Javascript за один курс",
      "Javascript - это просто,интересно. Научись создавать любые UI своими руками",
    ],
    options: {
      styles: {
        background: "linear-gradient(to bottom,#8e2de2,#4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    },
  },
  {
    type: "text",
    value: text,
    options: {
      styles: {
        background: "linear-gradient(to left,#f2994a,#f2c94c)",
        padding: "1rem",
        "font-weight": "bold",
      },
    },
  },
];
