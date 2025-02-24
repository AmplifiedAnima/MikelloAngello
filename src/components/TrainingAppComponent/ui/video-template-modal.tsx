import YouTube from "react-youtube";

export const VideoTemplate = ({ videoUrl }: { videoUrl: string }) => {
  // Extract video ID from URL
  const getYoutubeVideoId = (url: string) => {
    try {
      const urlObject = new URL(url);
      // Handle different YouTube URL formats
      if (urlObject.hostname.includes("youtube.com")) {
        return (
          urlObject.searchParams.get("v") || urlObject.pathname.split("/").pop()
        );
      } else if (urlObject.hostname === "youtu.be") {
        return urlObject.pathname.substring(1);
      }
      return "";
    } catch (error) {
      console.error("Invalid YouTube URL:", error);
      return "";
    }
  };

  const videoId = getYoutubeVideoId(videoUrl);

  // YouTube player options
  const opts = {
    width: "120%",
    height: "120%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      modestbranding: 0,
      rel: 0,
    },
  };

  return (
    <div className="rounded-lg">
      <div className="aspect-video w-full">
        <YouTube
          videoId={videoId}
          opts={opts}
          className="h-full w-full rounded-lg"
          title="Exercise Video"
        />
      </div>
    </div>
  );
};
