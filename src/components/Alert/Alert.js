import {useState} from 'react';
import styled from 'styled-components'
import {Modal} from './components/Modal'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
`;

export const Alert = () => {
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
                <span>HELLO, WORLD!</span>
            </Modal>
        );
    }

    return (
        <>
            {renderModal()}
            <Container>
                <button onClick={showAlertButtonClick}>Show Alert</button>
            </Container>
        </>
    )
}