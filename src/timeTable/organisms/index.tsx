import { BlockColumn, DateColumn, TimeColumn } from "../molecules";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { dateAtom, timeAtom } from "../../recoil";

export const TimeGrid = (props: { start: string; end: string }) => {
  const { start, end } = props;
  const [timeList, setTimeList] = useRecoilState(timeAtom);

  useEffect(() => {
    calculateTime();
  }, []);

  const calculateTime = () => {
    let calculatedTimeLine: Array<string> = [];
    const regex = /[^0-9]/g;
    const startTime = Number(start.replace(regex, ""));
    const endTime = Number(end.replace(regex, ""));

    for (let i = startTime; i <= endTime; i += 30) {
      let hour: string = "";
      let minute: string = "";

      if (i % 100 === 60) {
        hour = String(Math.floor(i / 100) + 1);
        minute = "00";
        i = Number(hour) * 100 + Number(minute);
      } else {
        hour = String(Math.floor(i / 100));
        minute = i % 100 === 0 ? "00" : "30";
      }
      calculatedTimeLine.push(hour + ":" + minute);
    }
    setTimeList(calculatedTimeLine);
  };

  return (
    <>
      {timeList.map((time, index) => (
        <TimeColumn time={time} key={index} />
      ))}
    </>
  );
};

export const DateGrid = () => {
  const [DateList, setDateList] = useRecoilState(dateAtom);
  return (
    <>
      {DateList.map((date: string, index: number) => (
        <DateColumn date={date} key={index} />
      ))}
    </>
  );
};

export const BlockGrid = () => {
  const [timeList, setTimeList] = useRecoilState(timeAtom);
  return (
    <>
      {timeList.map((time: string, index: number) => (
        <BlockColumn time={time} key={index} />
      ))}
    </>
  );
};
