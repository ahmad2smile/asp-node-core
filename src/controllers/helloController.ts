import { Controller } from "../utils/controllerDecorator"
import { Route } from "../utils/routeDecorator"

@Controller()
class HelloController {
	@Route("/message")
	GetHome() {
		const message = JSON.stringify({ message: "From Controller" })

		return Promise.resolve(message)
	}
}

export default HelloController