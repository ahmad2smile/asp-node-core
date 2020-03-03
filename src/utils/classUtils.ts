export const getConstructorArguments = <T extends { new() }>(target: T): Array<string> =>{
	return target.prototype.constructor.toString().match(/\((?:.+(?=\s*\))|)/)[0]
		.slice(1).split(/\s*,\s*/g).map((s: string) => s.trim().toUpperCase()).filter(Boolean)
}