import React from "react";
import { useSideContext } from "../stores/SideContextProvider";

/**
 * SideContext 组件是一个上下文组件，用于提供一个可传递的上下文值。
 *
 * @param children - 子组件，将接收上下文值作为 props。
 * @returns 返回渲染后的上下文组件。
 */
const SideContext: React.FC<{ idname: string }> = ({ idname }) => {
  const { content, isVisible } = useSideContext();

  if (!isVisible) {
    return null;
  }

  return <div id={idname}>{content}</div>;
};

export default SideContext;
