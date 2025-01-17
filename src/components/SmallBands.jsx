import Link from "next/link";

function SmallBands(props) {
  return (
    <div className=" z-40 grid grid-cols-2 gap-x-2 gap-y-8 sm:my-8  sm:grid-cols-3 sm:gap-x-8   md:text-2xl">
      {props.bands.slice(31, 124).map((band) => (
        <Link key={band.slug} bands={band.bands} href={`/bands/${band.slug}`}>
          <h4 className="text-center font-body text-base text-accent hover:underline">
            {band.name}
          </h4>
        </Link>
      ))}
    </div>
  );
}

export default SmallBands;
