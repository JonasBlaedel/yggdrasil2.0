function FormGroup({ children, headline, classStyle }) {
  return (
    <fieldset className={`${classStyle} mb-10`}>
      <legend className="mb-10 w-full font-heading text-3xl text-text-light">{headline}</legend>
      {children}
    </fieldset>
  );
}

export default FormGroup;
