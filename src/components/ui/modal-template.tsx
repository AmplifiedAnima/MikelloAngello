import React, { ReactNode } from "react";
import { ScrollBarComponent } from "./scrollbar-component";

interface ModalTemplateProps {
  isOpen: boolean;
  className?: string;
  children: ReactNode;
}

export const ModalTemplate: React.FC<ModalTemplateProps> = ({
  isOpen,
  className = "",
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <ScrollBarComponent className={` bg-zinc-900 p-6 ${className}`}>
        {children}
      </ScrollBarComponent>
    </div>
  );
};

export default ModalTemplate;
