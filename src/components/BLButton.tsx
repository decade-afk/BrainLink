import React from "react";
import { BLButtonProps } from "../interface/BLbt";

/**
 * BLButton 组件是一个按钮组件，用于展示一个带有图标和文本的按钮。
 *
 * @param icon - 图标组件，作为按钮的一部分显示。
 * @param context - 按钮上的文本内容。
 * @param click - 按钮点击事件处理函数。
 * @returns 返回渲染后的按钮元素。
 */
const BLButton: React.FC<BLButtonProps> = ({ icon: Icon, context, click }) => {
  return (
    <div className="menu-item" onClick={click}>
      <Icon className="menu-icon"/>
      <div className="popover">{context}</div>
    </div>
  );
};

export default BLButton;
