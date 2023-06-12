import { TimeGrid, DateGrid } from "../organisms";

export const TimeTable = () => {
  return (
    <>
      <DateGrid />
      <TimeGrid start="8:00" end="22:00" />
    </>
  );
};
