import { createServer } from "http"

import { controllers } from "./reflection/getControllers"
import { getConstructorArguments } from "./utils/classUtils"
import TasksService from "./services/tasksService"

const scopedServices = [TasksService]


createServer((request, response) => {
	controllers.forEach(c => {
		const controllerArguments = getConstructorArguments(c)
		let controller

		if (controllerArguments.length) {
			const servicesInstances = scopedServices.filter(s => controllerArguments.includes(s.name.toUpperCase())).map(s => new s())
			
			controller = new c(...servicesInstances)
		}else{
			controller = new c()
		}

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