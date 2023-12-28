import React from 'react';
import TodoItem from './todoListItem';
import styled from 'styled-components';
import { TaskActions } from '../dataActions/tasks';
import { useDeleteTask, useTasks } from '../hooks/useTasks';

const Container = styled.div`
  margin-top: 30px;
`;




const TodoList = () => {
  const {tasks} = useTasks();
  const {deleteTask} = useDeleteTask();
  console.log("tasks", tasks)

  const handleToggle = (id, completed) => {

  };

  const handleEdit = (id, newText) => {
    // Handle todo text editing
  };  

  const handleDelete = (id) => {
    console.log("id", id);
    deleteTask(id);
  };

  return (
    <Container>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          id = {task.id}
          text={task.text}
          completed={task.completed}
          onToggle={(completed) => handleToggle(task.id, completed)}
          onEdit={(newText) => handleEdit(task.id, newText)}
        />
      ))}
    </Container>
  );
};

export default TodoList;
