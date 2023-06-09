import { DateColumn, TimeColumn } from "../molecules";
import { useRecoilState } from "recoil";
import { dateAtom } from "../../recoil";

export const TimeGrid = () => {
  const [DataList, setDateList] = useRecoilState(dateAtom);
  return (
    <>
      {DataList.map((date: string, index: number) => (
        <DateColumn date={date} key={index} />
      ))}
    </>
  );
};
