import React from "react";
import { getDetailsAnime } from "../../hooks/api";
import { useParams } from "react-router-dom";
import AnimeSlider from "../../lib/AnimeSlider";
import LoadingDetails from "../../helpers/LoadingDetails";
import { Helmet } from "react-helmet";
const Details = () => {
  const { animeId, animeName, epsId } = useParams();

  const [details, setDetails] = React.useState([]);
  const [loading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    getDetailsAnime(animeId, animeName, epsId).then((ress) => {
      setDetails(ress);
      setIsLoading(false);
      localStorage.setItem("details", JSON.stringify(ress[0]));
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Kyouka Live - Details {animeName}</title>
        <meta
          name="description"
          content="Dive into the mesmerizing world of 'Kyouka,' where adventure meets mystery. Explore the captivating story, meet intriguing characters, and unravel the secrets of 'Kyouka.' Discover episode guides, character insights, and more on this dedicated 'Kyouka' anime detail page."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content={`Kazuna Live - Details ${animeName}`}
        />
        <meta
          property="og:description"
          content="Dive into the mesmerizing world of 'Kazuna,' where adventure meets mystery. Explore the captivating story, meet intriguing characters, and unravel the secrets of 'Kyouka.' Discover episode guides, character insights, and more on this dedicated 'Kyouka' anime detail page."
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/LuckyIndraEfendi/KyoukaLive/main/public/logo.svg"
        />
        <meta property="og:url" content={import.meta.env.VITE_PUBLIC_DOMAIN} />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kazuna Live" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kazuna Live - Streaming Anime Sub Indo"
        />
        <meta
          name="twitter:description"
          content="Watch your favorite anime with subtitles in Indonesian."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/LuckyIndraEfendi/KyoukaLive/main/public/logo.svg"
        />
        <link rel="canonical" content={import.meta.env.VITE_PUBLIC_DOMAIN} />
      </Helmet>
      <div className="">
        {loading ? (
          <LoadingDetails />
        ) : (
          details.map((item, i) => (
            <div className="w-[90%] m-auto relative mt-5" key={i}>
              <div className="md:grid md:grid-cols-6 gap-5 ">
                <div className="md:col-span-1 hidden md:flex md:flex-col ">
                  <img src={item.image} alt="" className="w-full rounded-md" />
                  <button className="bg-[#f0683e] text-white text-sm py-1 mt-3 rounded-sm font-medium">
                    Add to List
                  </button>
                </div>
                <div className="md:col-span-5 md:py-3 md:px-2 hidden md:block">
                  <h1 className="text-white text-2xl font-rowdies md:text-4xl mb-6">
                    {item.title}
                  </h1>
                  <ul className="md:flex md:flex-wrap  md:gap-2 my-3  hidden">
                    {item.genres.map((ress, i) => (
                      <li
                        className="bg-[#35ddff] text-slate-900 font-medium text-sm px-3 py-1 rounded-full"
                        key={i}
                      >
                        {ress}
                      </li>
                    ))}
                  </ul>
                  <ul className="md:flex md:flex-wrap hidden md:gap-2  my-3">
                    <li className="bg-[#35ddff] text-slate-900 font-medium text-sm px-3 py-1 rounded-full">
                      {item.totalEps} Episodes
                    </li>
                    <li className="bg-[#35ddff] text-slate-900 font-medium text-sm px-3 py-1 rounded-full">
                      {item.status}
                    </li>
                    <li className="bg-[#35ddff] text-slate-900 font-medium text-sm px-3 py-1 rounded-full">
                      {item.season}
                    </li>
                    <li className="bg-[#35ddff] text-slate-900 font-medium text-sm px-3 py-1 rounded-full">
                      {item.duration}
                    </li>
                    <li className="bg-[#35ddff] text-slate-900 font-medium text-sm px-3 py-1 rounded-full">
                      {item.adaptation}
                    </li>
                    <li className="bg-[#35ddff] text-slate-900 font-medium text-sm px-3 py-1 rounded-full">
                      {item.studio}
                    </li>
                    <li className="bg-[#35ddff] text-slate-900 font-medium text-sm px-3 py-1 rounded-full">
                      {item.peminat}
                    </li>
                    <li className="bg-[#35ddff] text-slate-900 font-medium text-sm px-3 py-1 rounded-full">
                      {item.skors}
                    </li>
                  </ul>
                  <div className="h-36 overflow-y-scroll py-3 ">
                    <p className="text-white font-outfits mt-5 text-sm md:text-base">
                      {item.synopsis}
                    </p>
                  </div>
                </div>

                <div className="md:hidden">
                  <h1 className="text-white text-2xl py-2 font-rowdies">
                    {item.title}
                  </h1>
                  <ul className="flex flex-wrap gap-1 py-3">
                    {item.genres.map((ress, i) => (
                      <li
                        className="text-white text-xs px-3 py-1 rounded-full bg-slate-800"
                        key={i}
                      >
                        {ress}
                      </li>
                    ))}
                  </ul>
                  <div className="h-36 overflow-y-scroll py-3 ">
                    <p className="text-white font-outfits  text-sm">
                      {item.synopsis}
                    </p>
                  </div>
                </div>
              </div>

              <div className="episodeList mt-12">
                <h1 className="mb-10 text-lg font-karla text-white md:px-1 md:text-2xl">
                  Episodes
                </h1>
                <div className="eps md:px-1 flex flex-col h-[400px] overflow-y-scroll">
                  {item.episode.map((ress, i) => (
                    // visited:text-[#f0683e]
                    <a
                      href={`/watch${ress.episodeId}`}
                      className="epsList text-white border-b-2  ring-slate-400 px-2 py-4 w-full text-sm md:text-lg "
                      key={i}
                    >
                      Episode - {ress.epsTitle}
                    </a>
                  ))}
                </div>
              </div>
              <div className="recomendation mt-10">
                <h1 className="mb-5 text-lg font-karla text-white md:text-2xl">
                  Recomendation
                </h1>
                <div className="card">
                  <AnimeSlider names="recent?order_by=most_viewed" />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Details;
