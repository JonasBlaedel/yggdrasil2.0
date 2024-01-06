import Link from "next/link";

function Footer() {
  return (
    <div className=" -z-10 my-10 grid grid-cols-2 items-end ">
      <div className="flex flex-col justify-between lg:max-w-sm gap-4">
        <div className="space-y-2">
          <h2 className="font-subheading">A Never-Ending Symphony</h2>
          <p className="font-body text-xs">
            Immerse yourself in the perpetual celebration of sound. Yggdrasil
            transcends time, offering a continuous 24/7, 365-day musical
            journey.
          </p>
        </div>
        <p className=" font-body text-xs">&#169; 2023 Yggdrasil</p>
      </div>

      <ul className="flex flex-col h-full justify-between text-end font-subheading text-sm">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/schedule">Schedule</Link>
        </li>
        <li>
          <Link href="/bands">Acts</Link>
        </li>
        <li>
          <Link href="book">Tickets</Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
