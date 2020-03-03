import { ServerResponse, IncomingMessage } from "http"

type Method<R> = (req: IncomingMessage, res: ServerResponse) => R

export const Route = <C, R>(route: string) => {
	return (_target: C, _key: string, descriptor: TypedPropertyDescriptor<Method<R>>): PropertyDescriptor => {
		const original = descriptor.value

		descriptor.value = function(req: IncomingMessage, res: ServerResponse): R {
			if (req.url === route) {
				return original.call(this, req, res)
					.then((result: R) => {
						res.writeHead(200, { "Content-Type": "application/json" })
						res.end(JSON.stringify(result))
					})
			}
		}

		return descriptor
	}
}