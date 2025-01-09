export const InterestsSection = () => {
  const interests = [
    "Sports Rehabilitation",
    "Programming",
    "Personal Growth",
    "Meditation & Breathwork",
    "Evidence-based Holistic Lifestyle",
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start gap-12 py-12">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-6">Zainteresowania</h2>
        <ul className="space-y-4">
          {interests.map((topic) => (
            <li
              key={topic}
              className="text-gray-700 flex items-center gap-3 text-lg"
            >
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
              {topic}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 bg-gray-50 p-6 rounded-lg">
        <p className="text-lg text-gray-600">
          Moje zainteresowania to połączenie pasji do zdrowia, technologii i
          ciągłego rozwoju osobistego.
        </p>
      </div>
    </div>
  );
};
