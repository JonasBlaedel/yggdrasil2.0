import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const res = await fetch("https://funky-melodious-jingle.glitch.me/bands");
  const pages = await res.json();

  const paths = pages.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}

async function BandPage({ params }) {
  const { slug } = params;
  const res = await fetch(
    `https://funky-melodious-jingle.glitch.me/bands/${slug}`,
  );

  const band = await res.json();

  // Hvis billedstien ikke findes, returner 404
  if (res.status != 200) return notFound();

  // Tjek om billedstiens url starter med "https"
  const checkLogoPath = band.logo.startsWith("http");

  // Hvis ikke, tilføj "https://funky-melodious-jingle.glitch.me/logos/" før billedestien
  const imagePath = checkLogoPath
    ? band.logo
    : `https://funky-melodious-jingle.glitch.me/logos/${band.logo}`;

  return (
    <div className="">
      <div className="relative  sm:mx-[-6rem]">
        <div className=" absolute h-full w-full bg-gradient-to-b from-transparent to-background-light"></div>
        <img
          className="h-96 w-full bg-contain object-cover"
          src={imagePath}
          alt={`Image of ${band.name}`}
        />
        <h1 className="absolute left-1/2 top-3/4 text-center font-heading text-3xl uppercase [transform:translate(-50%,-50%);] lg:text-5xl">
          {band.name}
        </h1>
      </div>
      <div className="mb-10 grid grid-cols-1 gap-4 font-body text-xl sm:mx-10 sm:gap-0 lg:grid-cols-3">
        <aside className=" grid grid-cols-1 gap-4 sm:flex sm:flex-col">
          <div className="font-body text-xs ">
            <p>Band Members</p>
            <p className="flex flex-col gap-1 font-body text-base sm:gap-2">
              {band.members.map((member, i) => (
                <span key={i}>{member}</span>
              ))}
            </p>
          </div>
          <div>
            <p className="font-body text-xs">Genre</p>
            <p className="font-body text-base">{band.genre}</p>
          </div>
          <div>
            <p className="font-body text-xs">Picture credits</p>
            <p className="font-body text-base">
              {band.logoCredits ? band.logoCredits : "No credits available"}
            </p>
          </div>
        </aside>
        <div className="col-span-2">
          <p className="text-base">{band.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default BandPage;
