import Link from "next/link";
import Image from "next/image";
function TopBands(props) {
  return (
    <div className="  flex flex-col gap-4">
      {props.bands.slice(0, 10).map((band) => (
        <Link key={band.slug} bands={band.bands} href={`/bands/${band.slug}`}>
          <div className="group">
            <div className="pointer-events-none">
              <div className=" fixed left-0 top-0 z-20 h-full w-full bg-gradient-to-b from-transparent to-background-light opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"></div>
              <img
                className=" fixed left-0 top-0 z-10 h-full w-full bg-contain object-cover opacity-0 grayscale transition-opacity duration-700 ease-in-out group-hover:opacity-50"
                src={`https://funky-melodious-jingle.glitch.me/logos/${band.logo}`}
                alt="Band img"
              />
            </div>

            <h2 className=" relative z-30 m-auto flex w-fit font-heading text-2xl uppercase text-text-light transition-all duration-300 before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-0 before:rounded-full before:bg-accent before:opacity-0 before:transition-all before:duration-500  before:content-[''] hover:before:w-full hover:before:opacity-100 md:text-4xl ">
              {band.name}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default TopBands;
