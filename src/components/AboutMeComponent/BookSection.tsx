import React from "react";

import bookOfFiveRings from "../../assets/Book_of_five_rings_audiobook.jpg";
import HeartSutra from "../../assets/Heart_sutra_audiobook.jpg";
import PathwayToSurrender from "../../assets/pathway_of_surrender_audiobook.jpg";

export const BookSection = () => (
  <div className="flex flex-col lg:flex-row items-start gap-12 py-12">
    <div className="flex-1">
      <h2 className="xl:text-6xl text-4xl font-bold mb-24 text-center">
        Audiobooki , które warto posłuchać : ) {" "}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-32 p-12">
        {[
          { src: bookOfFiveRings, title: "Book of Five Rings" },
          { src: HeartSutra, title: "Heart Sutra" },
          { src: PathwayToSurrender, title: "Pathway to Surrender" },
        ].map((book) => (
          <div key={book.title} className="space-y-2">
            <img
              src={book.src}
              alt={book.title}
              className="w-full rounded-lg shadow-md hover:scale-105 transition-transform"
            />
            <p className="text-center text-gray-700 font-medium">
              {book.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
