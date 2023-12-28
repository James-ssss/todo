import {useState} from 'react';
import styled from 'styled-components'
import {Modal} from './components/Modal'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
`;


const CreateTaskButton = styled.div`
    border-radius: 8px;
    background: var(--Blue-Dark, #1E6F9F);
    display: flex;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    color: #FFFFFF;
`;

export const CreateTaskAlert = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);


    const showAlertButtonClick = () => {
        setIsModalVisible(true)
    }

    const closeAlert = () => {
        setIsModalVisible(false);
    }

    
    const renderModal = () => {
        if (!isModalVisible) {
            return null;
        }

        return (
            <Modal close={closeAlert}>
                {props.children}
            </Modal>
        );
    }

    return (
        <>
            {renderModal()}
            <Container>
                <CreateTaskButton onClick={showAlertButtonClick}>Добавить задание</CreateTaskButton>
            </Container>
        </>
    )
}