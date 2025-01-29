import { cn } from "../../lib/utils";
export const BlockQuoteInstagram = ({
  link,
  className,
  size = "default",
}: {
  link: string;
  className?: string;
  size?: "default" | "large" | "xl" | "sm";
}) => {
  const sizeStyles = {
    sm: {
      width: "84vw",
      height: "56vh",
      maxHeight: "100%",
      maxWidth: "120%",
    },
    default: {
      width: "328px",
      minWidth: "328px",
      maxWidth: "328px",
      height: "58.5vh",
    },
    large: {
      width: "400px",
      minWidth: "400px",
      maxWidth: "400px",
      height: "550px",
    },
    xl: {
      width: "480px",
      minWidth: "480px",
      maxWidth: "480px",
      height: "650px",
    },
  };

  const selectedSize = sizeStyles[size];

  return (
    <div
      className={cn(
        "instagram-embed-container",
        "relative overflow-hidden",
        className
      )}
      style={{
        ...selectedSize,
        margin: "0 auto",
      }}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={link}
        data-instgrm-version="14"
        style={{
          ...selectedSize,
          position: "absolute",
          top: 0,
          left: 0,
          border: 0,
        }}
      />
    </div>
  );
};
