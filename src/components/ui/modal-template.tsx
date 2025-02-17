import React, { ReactNode } from "react";

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
      <div
        className={`rounded-lg bg-zinc-900 p-6 ${className}`}
        style={{
          boxShadow: "inset 0 0 30px rgba(80, 0, 0, 0.3)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalTemplate;
