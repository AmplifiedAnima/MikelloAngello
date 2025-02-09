import React from "react";

export const ScrollBarComponent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} overflow-auto
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar]:h-2
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-zinc-800
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gradient-to-b
        [&::-webkit-scrollbar-thumb]:from-red-800
        [&::-webkit-scrollbar-thumb]:to-red-900
        [&::-webkit-scrollbar-thumb]:border
        [&::-webkit-scrollbar-thumb]:border-red-700
        hover:[&::-webkit-scrollbar-thumb]:bg-gradient-to-b
        hover:[&::-webkit-scrollbar-thumb]:from-red-700
        hover:[&::-webkit-scrollbar-thumb]:to-red-800
        [&::-webkit-scrollbar-corner]:transparent`}
    >
      {children}
    </div>
  );
};