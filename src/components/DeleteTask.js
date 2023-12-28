import styled from 'styled-components'
import {useState} from "react";
import {useDeleteTask} from "../hooks/useTasks";


const ModalChildrenWrapper = styled.div`
    display :flex;
    flex-direction: column;
    gap: 10px;

`;

export const DeleteTask  = (props) => {
    const { deleteTask } = useDeleteTask();
    const [text, setText] = useState('');

    const onInputChange = (event) => {
        setText(event.nativeEvent.target.value)
    }

    const removeTask = () => {
        console.log("id", props.id)
        deleteTask(props.id)
    }

    return (
        <ModalChildrenWrapper>
            <span>Вы действительно хотите удалить ?</span>  
            <button onClick={removeTask}>Удалить</button> 
        </ModalChildrenWrapper>
    )


} 