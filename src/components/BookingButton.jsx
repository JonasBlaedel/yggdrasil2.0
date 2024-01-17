function BookingButton({ children, onClick, type, disabled }) {
  return (
    <button
      className="delay-50 flex justify-center w-full items-center gap-4 rounded-full border-2 border-accent bg-accent px-4 py-4  text-text-dark transition ease-in-out hover:bg-transparent hover:text-text-light active:bg-accent disabled:pointer-events-none disabled:opacity-25"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default BookingButton;
