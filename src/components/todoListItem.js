import React, { useState } from 'react';
import styled from 'styled-components';
import { useDeleteTask } from '../hooks/useTasks';
import { DeleteTaskAlert } from './Alert/DeleteTaskAlert';
import { DeleteTask } from "./DeleteTask";
import { EditTaskAlert } from './Alert/EditTaskAlert';
import { EditTask } from './EditTask';

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
  width: 33%;

  margin-left: 33%;
`;

const Title = styled.span`
font-size: 24px;
color: #3498db;
`;
const Checkbox = styled.input`
margin-right: 8px;
justify-content: start;
`;

const TodoText = styled.div`
  flex: 1;
  word-wrap: break-word;
  font-size: 24px;
  color: #3498db;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 4px 8px;
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #217dbb;
  }
`;

const TodoItem = ({ id, text, completed, onToggle, onEdit}) => {

  const { deleteTask } = useDeleteTask();
  const handleToggle = () => {
    onToggle && onToggle(!completed);
    console.log("key", id)
  };

  const handleEdit = () => {  
    onEdit && onEdit()
  };


  return (
    <TodoItemWrapper>
      <Checkbox type="checkbox" checked={completed} onChange={handleToggle} />
      <TodoText>{text}</TodoText>
      <EditTaskAlert>
        <EditTask text={text} id={id}/>
      </EditTaskAlert>
      <DeleteTaskAlert>
        <DeleteTask id={id}/>
      </DeleteTaskAlert>
      
    </TodoItemWrapper>
  );
};

export default TodoItem;
