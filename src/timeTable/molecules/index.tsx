import { Time, Date } from "../atoms";

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
