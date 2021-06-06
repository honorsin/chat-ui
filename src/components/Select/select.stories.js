import React from "react";
import Select from ".";
import Option from "components/Option";

export default {
  title: "UI 组件/Input/Select",
  component: Select,
};

export const Default = () => (
  <Select>
    <Option>1</Option>
    <Option>2</Option>
  </Select>
);
