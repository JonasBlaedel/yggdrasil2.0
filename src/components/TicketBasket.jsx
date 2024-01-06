import { useSpring, animated } from "react-spring";
import { easings } from "react-spring";
import { useViewport } from "react-viewport-hooks";

function TicketBasket({ children, basketStatus }) {
  const { vw } = useViewport();

  const fade = useSpring({
    opacity: basketStatus ? 1 : 0,
    display: vw > 1024 ? "none" : basketStatus ? "block" : "none",
    config: {
      easing: easings.easeInElastic,
    },
  });


  const slide = useSpring({
    display: basketStatus ? "block" : "none",
    config: {
      easing: easings.easeInElastic,
    },
  });

  return (
    <animated.div
      style={slide}
      className="fixed bottom-[9rem] top-10 w-screen overflow-x-hidden overflow-y-scroll rounded bg-opacity-90 p-4 lg:sticky lg:top-10 lg:h-fit lg:w-fit lg:bg-foreground-light lg:shadow-md"
    >
      <animated.aside
        style={slide}
        className="absolute top-10 z-[1] flex w-[85vw] flex-col justify-between overflow-y-scroll md:w-fit lg:static lg:top-20 lg:block"
      >
        <div className="sticky top-4 h-fit w-fit overflow-y-scroll">
          <h4 className="font-heading text-2xl text-text-light">Basket</h4>
          {children}
        </div>
      </animated.aside>
      <animated.div
        style={fade}
        className=" fixed left-0 top-0 h-full w-full bg-background-light bg-opacity-90 backdrop-blur-md backdrop-filter md:hidden "
      ></animated.div>
    </animated.div>
  );
}

export default TicketBasket;
