import { readdirSync } from "fs"

const CONTROLLER_IDENTIFIER = "Controller"

export const controllers = readdirSync("./dist/controllers/")
	.filter(f => f.includes(CONTROLLER_IDENTIFIER))
	.map((f) => {
		const file = f.split(".")[0]

		return require(`../controllers/${file}`).default
	})