import { Time, Date } from "../atoms";

export const DateColumn = (props: { date: String }) => {
  return (
    <>
      <Date date={props.date} />
    </>
  );
};

export const TimeColumn = (props: { time: number }) => {
  return (
    <>
      <Time time={props.time} />
    </>
  );
};
