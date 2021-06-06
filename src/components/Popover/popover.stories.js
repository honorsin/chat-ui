import React from "react";
import Popover from ".";
import Button from "components/Button";

export default {
  title: "Popover ",
  component: Popover,
};

export const Default = () => (
  <Popover content="hello" style={{ marginTop: 200 }}>
    <Button shape="rect">click!</Button>
  </Popover>
);
