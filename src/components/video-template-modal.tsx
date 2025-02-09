export const VideoTemplate = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <div className="mt-4 rounded-lg border border-red-800/30 bg-zinc-900/50">
      <div className="aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${new URL(videoUrl).pathname.split("/").pop()}`}
          className="h-full w-full rounded-lg"
          title="Exercise Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};
