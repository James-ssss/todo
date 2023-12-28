import styled from 'styled-components'
import {useState} from "react";
import {useAddNewTask} from "../hooks/useTasks";


const ModalChildrenWrapper = styled.div`
    display :flex;
    flex-direction: column;
    gap: 10px;

`;

export const CreateTask  = () => {
    const { createTask } = useAddNewTask();
    const [text, setText] = useState('');

    const onInputChange = (event) => {
        setText(event.nativeEvent.target.value)
    }

    const saveTask = () => {
        createTask(text);
    }

    return (
        <ModalChildrenWrapper>
            <span>Добавить задание</span>
            <input value = {text} onChange={onInputChange}></input>   
            <button onClick={saveTask}>Сохранить</button> 
        </ModalChildrenWrapper>
    )


} 