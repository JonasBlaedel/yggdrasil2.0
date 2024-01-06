function FormGroup({ children, headline, classStyle }) {
  return (
    <fieldset className={`${classStyle} space-y-2`}>
      <legend className="my-5 w-full font-heading text-2xl text-text-light">{headline}</legend>
      {children}
    </fieldset>
  );
}

export default FormGroup;
