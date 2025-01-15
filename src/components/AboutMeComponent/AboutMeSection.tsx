import { useEffect } from "react";
import { BlockQuoteInstagram } from "./InstagramVideoComponent";
export const AboutMeSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="space-y-12 text-3xl p-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 ">
        <div className="space-y-24">
          <ul className="space-y-72 w-full">
            <li>Organizuję przygotowanie motoryczne dla sportowców</li>

            <li>Implementuję mobilizacje tkanek miękkich oraz jogę</li>

            <li>Przeszedłem dwie rekonstrukcje ACL (ACLR)</li>

            <li>Bardzo lubię ruch </li>

            <div className="lg:grid-cols-3 grid gap-0">
              <BlockQuoteInstagram link="https://www.instagram.com/tv/CZcHNkqBZxM/?utm_source=ig_embed&amp;utm_campaign=loading" />
              <div />
              <div />

              <BlockQuoteInstagram link="https://www.instagram.com/p/CRLgbrIjlpy/?utm_source=ig_embed&amp;utm_campaign=loading" />
              <div />
              <div />

              <BlockQuoteInstagram link="https://www.instagram.com/tv/CZcHNkqBZxM/?utm_source=ig_embed&amp;utm_campaign=loading" />
            </div>
          </ul>
        </div>

        <div className="space-y-12 lg:mx-24 md:mx-2 mx-0">
          <BlockQuoteInstagram link="https://www.instagram.com/p/CPDmj3Xnasp/" />
          <div className="my-12" />
          <BlockQuoteInstagram link="https://www.instagram.com/p/CShreo4n2Ds/" />
        </div>
      </div>
    </div>
  );
};
