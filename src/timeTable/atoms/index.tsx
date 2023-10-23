import { useState } from "react";
import { styled } from "styled-components";

export const Time = (props: { time: string }) => {
  return <>{props.time}</>;
};

export const Date = (props: { date: string }) => {
  return <>{props.date}</>;
};

export const GridBlock = (props: { time: string }) => {
  return <ItemBlock>{props.time}</ItemBlock>;
};

const ItemBlock = styled.div`
  border: 2px solid #000000;
  &:hover {
    background-color: yellow;
  }
`;
