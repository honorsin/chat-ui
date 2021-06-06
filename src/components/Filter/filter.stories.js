import React from "react";
import Filter from ".";
import Select from "components/Select";
import Option from "components/Option";
import Icon from "components/Icon";
import Button from "components/Button";
import { ReactComponent as plus } from "assets/icons/plus.svg";
export default {
  title: "Filter ",
  component: Filter,
};

export const Default = () => (
  <Filter>
    <Filter.Filters label="在吗">
      <Select>
        <Option>1</Option>
        <Option>2</Option>
      </Select>
    </Filter.Filters>

    <Filter.Action label="在的">
      <Button>
        <Icon icon={plus} width={12} height={12} />
      </Button>
    </Filter.Action>
  </Filter>
);
