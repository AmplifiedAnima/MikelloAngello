// Podkomponent dla sekcji z podcastami
export const PodcastSection = () => {
  const podcasts = [
    {
      embedId: "2MAi0BvDc6GTFvKFPXnkCL",
      title: "Lex Fridman Podcast",
    },
    {
      embedId: "76yWrwFQ7H7JaFNv4UK35a",
      title: "Perform with Dr. Andy Galpin",
    },
    {
      embedId: "5rgumWEx4FsqIY8e1wJNAk",
      title: "Making Sense with Sam Harris",
    },
  ];

  return (
    <div className="py-12">
      <h2 className="xl:text-6xl text-4xl font-bold mb-6 text-center">Podcasty ,których zdarza mi się słuchać</h2>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 xl:p-24 p-8">
        {podcasts.map((podcast) => (
          <div
            key={podcast.embedId}
            className="hover:scale-105 transition-transform"
          >
            <iframe
              src={`https://open.spotify.com/embed/show/${podcast.embedId}`}
              width="100%"
              height="352"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-lg shadow-md"
            />
            <p className="text-center text-gray-700 font-medium mt-2">
              {podcast.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
