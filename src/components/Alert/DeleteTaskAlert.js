import {useState} from 'react';
import styled from 'styled-components'
import {Modal} from './components/Modal'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
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

export const DeleteTaskAlert = (props) => {
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
            <Button onClick={showAlertButtonClick}>Delete</Button>
        </>
    )
}