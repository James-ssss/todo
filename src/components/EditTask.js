import styled from 'styled-components'
import {useState} from "react";
import {useEditTask} from "../hooks/useTasks";


const ModalChildrenWrapper = styled.div`
    display :flex;
    flex-direction: column;
    gap: 10px;

`;

export const EditTask  = (props) => {
    const { editTask } = useEditTask();
    const [text, setText] = useState(`${props.text}`);

    const onInputChange = (event) => {
        setText(event.nativeEvent.target.value)
    }

    const editTask1 = () => {
        console.log("props.id", props.id, "newText", text)
        editTask({id: props.id, newText: text});
    }

    return (
        <ModalChildrenWrapper>
            <span>Изменить задание</span>
            <input value = {text} onChange={onInputChange}></input>   
            <button onClick={editTask1}>Сохранить</button> 
        </ModalChildrenWrapper>
    )


} 