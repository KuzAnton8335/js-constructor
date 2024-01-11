import { model } from "./model.js";
import "./styles/style.css";
import { templates } from "./templates.js";

const site = document.querySelector("#sait");
model.forEach((block) => {
	const toHtml = templates[block.type]
	if (toHtml) {
		site.insertAdjacentHTML("beforeend", toHtml(block));
	}
});
