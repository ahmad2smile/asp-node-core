import { Controller } from "../utils/controllerDecorator"
import { Route } from "../utils/routeDecorator"
import { ITasksService, Task } from "../services/tasksService"

@Controller()
class TasksController {
	constructor(public tasksService: ITasksService){}

	@Route("/tasks")
	getTasks(): Promise<Array<Task>> {
		return this.tasksService.fetchTasks()
	}
}

export default TasksController