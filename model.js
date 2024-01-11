import image from "./public/assests/image.png";

export const model = [
	{
		type: "title", value: "Конструктор сайтов на чистом Javascript", options: {
			tag: 'h2',
			styles: {
				background: "linear-gradient(to right,#ff0099,#493240)",
				color: "#fff",
				padding: "1.5rem",
				'text-align': "center",
			},
		}
	},
	{
		type: "text",
		value: "here we go with some text",
	},
	{ type: "columns", value: ["1111111", "2222222", "3333333", "44444444"] },
	{ type: "image", value: image },
];
