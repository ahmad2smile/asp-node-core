import { readdirSync } from "fs"

export const controllers = readdirSync("./dist/controllers/").map((f) => {
	const file = f.split(".")[0]

	return require(`../controllers/${file}`).default
})