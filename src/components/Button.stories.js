import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

export const ButtonStory = {
  name: "Button",
  args: {
    children: "Text",
  },
};
