import styled from "styled-components";

const StyledButton = styled.button`
  background: linear-gradient(93deg, #cf0 -3.88%, #40ffaf 103.41%);
  color: #fff;
  width: 100%;
  max-width: 500px;
  padding: 14px 16px;
  border-radius: 12px;
  outline: none;
  // truncate text
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background: linear-gradient(93deg, #beed04 -3.88%, #2ff19f 103.41%);
  }

  &:focus-visible {
    background: linear-gradient(93deg, #beed04 -3.88%, #2ff19f 103.41%);
    outline: none;
  }

  &:active {
    background: linear-gradient(93deg, #b1de00 -3.88%, #1de08e 103.41%);
    outline: none;
  }
`;

export const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
