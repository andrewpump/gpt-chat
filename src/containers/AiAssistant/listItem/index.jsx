import React, { useState } from "react";
import Button from "../../../components/button";
import Text from "../../../components/text";
import ArrowForwardIcon from "../../../assets/icons/arrowForwardIcon";
import "./styles.scss";

const ListItem = ({ item, onClickList, color }) => {
  return (
    <Button
      onClick={onClickList}
       style={{backgroundColor: `${color}18`}}
      className="ai-assistant-list-item-main-container"
      child={
        <div className="container">
          <div className="text-container">
            <Text className="title-text-style" label={item.title} />
            <Text
              className="subtitle-text-style"
              label={item.subtitle}
            />
          </div>
          <ArrowForwardIcon color={color} />
        </div>
      }
    />
  );
};

export default ListItem;
