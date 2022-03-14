import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { ToastContext } from '../../pages';


type ToastProps = {
  isOpen: boolean;
  color: string;
};

const openToast = keyframes`
  0% {
      opacity: 0;
      
  }
  5%{
    opacity: 1;
    transform:translate(0, 30px);
  }
  70%{
    opacity: 1;
    transform:translate(0, 30px);
  }
  100% {
    opacity: 0;
    transform:translate(0, 30px);
  }
`;

const ToastContainer = styled.div<ToastProps>`
    position:fixed;
    z-index: 100;
    left: 40px;
    top:0;
    min-width: 300px;
    opacity: 0;
    border-radius: 20px;
    background-color: ${props => props.color};
    padding: 20px 40px;
    animation: ${openToast} 3s linear;
`;


const Toast: React.FC = () => {
  const { toast } = useContext(ToastContext);
  return (
    <>
      {toast.isOpen && <ToastContainer isOpen={toast.isOpen} color={toast.color}>
        {toast.message}
      </ToastContainer>}
    </>
  )
};

export default Toast;