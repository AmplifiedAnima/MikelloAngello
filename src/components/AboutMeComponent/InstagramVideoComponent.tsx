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
  // Here you can modify the sizes for each variant
  const sizeStyles = {
    sm: {
      width: "250px",    // smaller for mobile
      height: "350px",
    },
    default: {
      width: "320px",    // default size
      height: "420px",
    },
    large: {
      width: "400px",    // larger variant
      height: "500px",
    },
    xl: {
      width: "480px",    // extra large variant
      height: "580px",
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