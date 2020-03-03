export interface Task {
	id: number
	message: string
	isDone: boolean
}

export interface ITasksService {
	fetchTasks(): Promise<Array<Task>>
}

class TasksService implements ITasksService {
	fetchTasks() {
		const tasks: Array<Task> = [
			{
				id: 1,
				message: "Do that work now...",
				isDone: false
			},
			{
				id: 2,
				message: "Interview at 12PM",
				isDone: false
			},
			{
				id: 3,
				message: "Dishes",
				isDone: true
			},
		]

		return Promise.resolve(tasks)
	}
}

export default TasksService