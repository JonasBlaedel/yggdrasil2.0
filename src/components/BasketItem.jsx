function BasketItem({ ticketName, price, showTickets, selectedArea }) {
  return (
    <div className={!showTickets ? `hidden` : "mb-2 mt-4"}>
      <div className="grid grid-cols-3 gap-4 px-2 ">
        <div className="col-span-2 col-start-1">
          <h4 className="">{ticketName}</h4>
          <p className="text-sm">{selectedArea}</p>
        </div>
        <div className="grid grid-cols-3 place-items-end gap-1">
          <p className="col-start-3">{price}</p>
          <span className="col-start-4">DKK</span>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;
