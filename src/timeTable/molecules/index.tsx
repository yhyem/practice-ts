import { Time, Date, GridBlock } from "../atoms";
import { styled } from "styled-components";

export const DateColumn = (props: { date: string }) => {
  return (
    <>
      <Date date={props.date} />
    </>
  );
};

export const TimeColumn = (props: { time: string }) => {
  return (
    <>
      <Time time={props.time} />
    </>
  );
};

export const BlockColumn = (props: { time: string }) => {
  return (
    <WrapGridBlock>
      <GridBlock time={props.time} />
    </WrapGridBlock>
  );
};

const WrapGridBlock = styled.div`
  display: grid;
  grid-template-columns: 50px;
  grid-template-rows: 50px;
`;
