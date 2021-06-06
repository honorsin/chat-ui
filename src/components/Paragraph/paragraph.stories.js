import React from "react";
import Paragraph from ".";

export default {
  title: "排版 /Paragraph ",
  component: Paragraph,
};

export const Default = () => (
  <React.Fragment>
    <Paragraph>默认</Paragraph>
    <Paragraph>默认</Paragraph>
  </React.Fragment>
);

export const Ellipsis = () => (
  <React.Fragment>
    <Paragraph>
      默认换行换行默认换行换行默认换行换行默认换行换行默认换行换行 默认换行换行
      默认换行换行 默认换行换行 默认换行换行 默认换行换行 默认换行换行
      默认换行换行 默认换行换行
    </Paragraph>
  </React.Fragment>
);
