import {useMutation, useQuery, useQueryClient} from "react-query";
import {TaskActions} from "../dataActions/tasks";

export const useTasks = () => {
    const {data} = useQuery({
        queryKey: 'tasks',
        queryFn: TaskActions.getValue
    });
    return {
        tasks: data || [],
    }
}

export const useAddNewTask = () => {
    const {tasks} = useTasks()
    console.log("tasks", tasks)
    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: (text) => {

            if (tasks) {
                const task = {
                    text, 
                    complete: false,
                    id: Date.now()
                };
                const newTasksArray = tasks.concat([task]);
                return TaskActions.saveValue(newTasksArray);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('tasks')
        }
    });

    return {
        createTask: mutate
    }
}

export const useDeleteTask = () => {
    const {tasks} = useTasks();
    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: (id) => {
            if (tasks){
                console.log("ебать копать я мутирую")
                const newTasksArray = tasks.filter(task => task.id !== id);
                TaskActions.saveValue(newTasksArray);
            }
            
        },
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        }
    });

    return {
        deleteTask : mutate
    }

}

export const useEditTask = () => {
  const { tasks } = useTasks();
  console.log("таск в редактировании", tasks);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: ({id, newText}) => {
        console.log("id и текст в мутации", id, newText)
      if (tasks) {
        const updatedTasks = tasks.map(task =>
          task.id === id ? { ...task, text: newText } : task
        );
        return TaskActions.saveValue(updatedTasks);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries('tasks');
    },
  });

  return {
    editTask: mutate,
  };
}
