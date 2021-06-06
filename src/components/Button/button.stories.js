import React from "react";
import Button from ".";
import { ReactComponent as plus } from "assets/icons/plus.svg";
import Icon from "components/Icon";
export default {
  title: "Button ",
  component: Button,
};

export const RectButton = () => <Button shape="rect">默认</Button>;

export const circleButton = () => (
  <Button>
    <Icon icon={plus} width={12} height={12} />
  </Button>
);
