import React from "react";
import styled from "styled-components";

export const Button = ({ children }) => {
  return <MessageButton>{children}</MessageButton>;
};

const MessageButton = styled.button`
  width: fit-content;
  height: fit-content;
  border: none;
  cursor: pointer;
  background-color: white;
  position: fixed;
  bottom: 10vh;
  right: 5vw;
  border-radius: 100%;
  padding: 10px;
`;
