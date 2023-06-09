import { useState } from "react";

export const Time = (props: { time: number }) => {
  return <div>{props.time}</div>;
};

export const Date = (props: { date: String }) => {
  return <>{props.date} </>;
};
