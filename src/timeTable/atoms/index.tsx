import { useState } from "react";

export const Time = (props: { time: string }) => {
  return <div>{props.time}</div>;
};

export const Date = (props: { date: string }) => {
  return <>{props.date} </>;
};
