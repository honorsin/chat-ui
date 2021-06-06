import React from "react";
import MessageCard from ".";
import face1 from "assets/images/face-male-1.jpg";
export default {
  title: "MessageCard ",
  component: MessageCard,
};

export const Default = () => (
  <MessageCard
    avatarSrc={face1}
    avatarStatus="online"
    statusText="online"
    name="李荣浩oa"
    time="20/3/12"
    message="why so serious"
    unreadCount={2}
  />
);
export const Active = () => (
  <MessageCard
    avatarSrc={face1}
    avatarStatus="online"
    statusText="online"
    name="李荣浩oa"
    time="20/3/12"
    message="why so serious"
    unreadCount={2}
    active
  />
);

export const Replied = () => (
  <MessageCard
    avatarSrc={face1}
    avatarStatus="online"
    statusText="online"
    name="李荣浩oa"
    time="20/3/12"
    message="why so serious"
    unreadCount={2}
    replied
    active
  />
);

export const RepliedInactive = () => (
  <MessageCard
    avatarSrc={face1}
    avatarStatus="online"
    statusText="online"
    name="李荣浩oa"
    time="20/3/12"
    message="why so serious"
    unreadCount={2}
    replied
  />
);
