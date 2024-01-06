import MidBands from "@/components/MidBands";
import SmallBands from "@/components/SmallBands";
import TopBands from "@/components/TopBands";

async function page() {
  const bands = await fetch(
    "https://funky-melodious-jingle.glitch.me/bands/",
  ).then((res) => res.json());

  return (
    <div className="">
      <div className=" mx-auto my-4 flex flex-col items-center [max-width:1000px]">
        <h1 className=" z-40 mb-8 text-center font-heading text-4xl sm:text-5xl">
          Acts
        </h1>
        <TopBands bands={bands} />
        <MidBands bands={bands} />
        <SmallBands bands={bands} />
      </div>
    </div>
  );
}

export default page;
