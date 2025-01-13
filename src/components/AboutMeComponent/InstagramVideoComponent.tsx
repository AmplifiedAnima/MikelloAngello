// import photoWithCat from "../../assets/2730123_feather_harry_outline_potter_quill_icon.png";

import { cn } from "../../lib/utils";

export const InstagramVideoComponent = () => {
  return (
    <div className="lg:w-1/3 py-8 space-y-8">
      <div className=" ">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/CPDmj3Xnasp/"
          data-instgrm-version="14"
          style={{ maxWidth: "100%", minWidth: "100%" }}
        />

        <div className="mt-12" />
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/CShreo4n2Ds/"
          data-instgrm-version="14"
          style={{ maxWidth: "100%", minWidth: "100%" }}
        />
      </div>
    </div>
  );
};

export const BlockQuoteInstagram = ({
  link,
  className,
}: {
  link: string;
  className?: string;
}) => {
  return (
    <blockquote
      className={cn("instagram-media", className)}
      data-instgrm-permalink={link}
      data-instgrm-version="14"
      style={{ maxWidth: "100%", minWidth: "100%" }}
    />
  );
};
