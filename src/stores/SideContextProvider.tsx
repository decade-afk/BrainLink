import React, { createContext, useContext, useState, ReactNode } from "react";
import { SideContextType } from "../interface/BLsc";

// 创建上下文
const SideContext = createContext<SideContextType | undefined>(undefined);

// 提供者组件
/**
 * SideContextProvider 是一个 React 函数组件，用于提供侧边栏内容的上下文。
 *
 * @param children - 子组件，类型为 ReactNode
 * @returns 返回 JSX.Element 类型的 React 元素
 */
export const SideContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [content, setContent] = useState<ReactNode>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentTitle, setCurrentTitle] = useState<string>("");

  /**
   * 更新内容的方法
   *
   * @param newContent 新的内容，类型为 ReactNode
   * @param newTitle 新的标题，类型为字符串
   */
  const updateContent = (newContent: ReactNode, newTitle: string) => {
    if (currentTitle === newTitle) {
      setIsVisible(!isVisible);
    } else {
      setContent(newContent);
      setCurrentTitle(newTitle);
      setIsVisible(true);
    }
  };

  /**
   * 切换元素的可见性状态。
   *
   * 当元素当前可见时，将其隐藏；当元素当前不可见时，将其显示。
   */
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <SideContext.Provider
      value={{ content, isVisible, updateContent, toggleVisibility }}
    >
      {children}
    </SideContext.Provider>
  );
};

// 自定义钩子
export const useSideContext = () => {
  const context = useContext(SideContext);
  if (!context) {
    throw new Error("useSideContext must be used within a SideContextProvider");
  }
  return context;
};
