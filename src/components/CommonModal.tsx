import { ToggleOff } from "@material-ui/icons";
import React from "react"
import styled from 'styled-components';

export interface CommonModalProps {
    isOpen: boolean,
    toggle: () => void,
  }

const CommonModal: React.FC<CommonModalProps> = ({
    isOpen,
    toggle,
    children,
}) => {

    if (isOpen) {
        return (
            <div>
                <ModalBackground onClick={() => { toggle(); }}>
                </ModalBackground>

                <ModalContent>
                    {children}
                </ModalContent>
            </div>
        )
    } else {
        return null;
    }

}

const ModalBackground = styled.div`
  position: fixed;
  top:0; left:0; bottom:0;right:0;
  background: rgba(0,0,0,0.8);
  z-index: 1;
`

const ModalContent = styled.div`
  position: absolute;
  top: calc(50vh - 100px); left: calc(50vw - 200px);
  background-color: white;
  display: flex; justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 400px;
  height: 200px;
  z-index: 2;
`




export default CommonModal;
