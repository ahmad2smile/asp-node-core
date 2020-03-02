import { ServerResponse, IncomingMessage } from "http"

export const Route = (route: string) => {
	return (target: any, key: string, descriptor: PropertyDescriptor) => {
		const original = descriptor.value

		descriptor.value = (req: IncomingMessage, res: ServerResponse) => {
			if (req.url === route) {
				return original(req, res)
					.then((result: any) => {
						res.writeHead(200, { "Content-Type": "application/json" })
						res.end(result)
					})
			}
		}

		return descriptor
	}
}