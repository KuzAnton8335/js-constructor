import { col, css, row } from "./utils.js";

export function title(block) {
  const { tag = "h1", styles } = block.options;
  return row(col(`<${tag}>${block.value}</${tag}>`), css(styles));
}

export function text(block) {
  return row(col(`<p>${block.value}</p>`), css(block.options.styles));
}

export function columns(block) {
  const html = block.value.map(col).join("");
  return row(html, css(block.options.styles));
}
export function image(block) {
  const { imageStyles, alt = "", styles } = block.options;
  return row(
    `<img src="${block.value} " alt="${alt}" style="${css(imageStyles)}"/>`,
    css(styles),
  );
}
export const templates = {
  title: title,
  text: text,
  image: image,
  columns: columns,
};
