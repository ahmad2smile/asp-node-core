import { createServer } from "http"

import { controllers } from "./reflection/getControllers"


createServer((request, response) => {
	controllers.forEach(c => {
		const controller = new c()

		for (const method in c.prototype) {
			controller[method](request, response)
		}

	})

	// Not Good, relay on delay from first Promise in controller
	setImmediate(() => {
		response.writeHead(200, { "Content-Type": "application/json" })
		response.end(JSON.stringify({ message: "Not Found" }))
	})
}).listen(3005)