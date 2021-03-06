import React from "react";
import PropTypes from "prop-types";

import StyledMessageList, { ChatList } from "./style";
import Filter from "components/Filter";
import Select from "components/Select";
import Option from "components/Option";
import Button from "components/Button";
import Input from "components/Input";
import Icon from "components/Icon";
import { ReactComponent as Plus } from "assets/icons/plus.svg";
import face1 from "assets/images/face-male-1.jpg";
import MessageCard from "components/MessageCard";
const MessageList = ({ children, ...rest }) => {
  return (
    <StyledMessageList {...rest}>
      <Input.Search />
      <ChatFilter />
      <ChatList>
        {[1, 2, 3, 4, 5, 6].map((key, index) => (
          <MessageCard
            key={key}
            active={index === 3}
            replied={index % 3 === 0}
            avatarSrc={face1}
            name="李铭浩"
            avatarStatus="online"
            statusText="在线"
            time="3 小时之前"
            message="即使爬到最高的山上，一次也只能脚踏实地地"
            unreadCount={2}
          />
        ))}
      </ChatList>
    </StyledMessageList>
  );
};
MessageList.propTypes = {
  children: PropTypes.any,
};

const ChatFilter = () => (
  <Filter style={{ padding: "20px 0" }}>
    <Filter.Filters label="列表排序">
      <Select>
        <Option>最新消息优先</Option>
        <Option>在线好友优先</Option>
      </Select>
    </Filter.Filters>
    <Filter.Action label="创建会话">
      <Button>
        <Icon icon={Plus} width={12} height={12} />
      </Button>
    </Filter.Action>
  </Filter>
);

export default MessageList;
