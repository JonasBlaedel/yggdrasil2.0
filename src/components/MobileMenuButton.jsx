import { useSpring, animated } from "react-spring";

function MobileMenuButton(props) {
  const menuAnimation1 = useSpring({
    transform: props.menuStatus ? "rotate(45deg)" : "rotate(0deg)",
  });

  const menuAnimation2 = useSpring({
    transform: props.menuStatus ? "rotate(-45deg)" : "rotate(0deg)",
  });

  return (
    <button
      aria-expanded={props.menuStatus}
      onClick={props.toggleMenu}
      className="z-20 h-fit w-fit md:hidden"
    >
      <div className="space-y-2">
        <animated.div
          style={menuAnimation1}
          className="h-[3px] w-8 bg-accent"
        ></animated.div>
        <animated.div
          style={menuAnimation2}
          className="h-[3px] w-8 bg-accent"
        ></animated.div>
      </div>
    </button>
  );
}

export default MobileMenuButton;
