import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 101%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Popup = styled.div`
  width: 80%;
  height: auto;
  min-height: 100px;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-y: scroll;
`;

export const ClosePopup = styled.button`
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 10px;
  background-color: transparent;
  font-size: 20px;
  font-weight: 600;
  border: 1px solid black;
  border-radius: 50%;
  padding: 8px 14px;
  transition: 0.3s ease opacity;

  &:hover {
    opacity: 0.7;
  }
`;
