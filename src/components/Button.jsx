function Button(props) {
  return (
    <button
      className={` ${
        props.activeBtn === props.index ? "bg-accent" : "bg-transparent"
      } ${
        props.activeBtn === props.index ? "text-text-dark" : "text-text-light"
      } h-[3rem] w-full rounded-sm border-2 border-accent px-4 py-2 duration-200 hover:bg-accent hover:text-text-dark  md:h-[3rem] md:w-[8rem]`}
      onClick={() => {
        props.setDay((theDay) => props.scheduleDay);
        props.setActive((btnDay) => props.btnTxt);
        props.setActiveBtn(props.index);
      }}
    >
      {props.btnTxt}
    </button>
  );
}

export default Button;
