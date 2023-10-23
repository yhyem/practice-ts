import { styled } from "styled-components";
import { TimeGrid, DateGrid, BlockGrid } from "../organisms";

export const TimeTable = () => {
  return (
    <>
      <DateGrid />
      <WrapTimeGrid>
        <TimeGrid start="8:00" end="22:00" />
        <BlockGrid />
      </WrapTimeGrid>
    </>
  );
};

const WrapTimeGrid = styled.div`
  display: block;
`;
