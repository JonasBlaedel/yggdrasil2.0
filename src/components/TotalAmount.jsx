function TotalAmount(props) {
  const vipTotal = props.vipValue * props.priceVIP;
  const regularTotal = props.regularValue * props.priceRegular;
  let greenCampingTotal = props.priceGreenCamping;
  const twoPersonTentTotal =
    props.twoPersonTentValue * props.priceTwoPersonTent;
  const threePersonTentTotal =
    props.threePersonTentValue * props.priceThreePersonTent;
  const bookingFee = 99;

  if (props.greenCamping === true) {
    greenCampingTotal = props.priceGreenCamping;
  } else {
    greenCampingTotal = 0;
  }

  const total =
    vipTotal +
    regularTotal +
    greenCampingTotal +
    twoPersonTentTotal +
    threePersonTentTotal +
    bookingFee;
  const subtotal = total - greenCampingTotal - bookingFee;

  {
    props.setTotalSpendAmount(() => total);
  }

  return (
    <div className="bg-foreground-dark bottom-50 text-text-dark bg-opacity-80 space-y-2 p-2 rounded mt-4">
      <div className="grid grid-cols-3 gap-4">
        <p className="col-span-2 col-start-1">Booking fee</p>
        <div className="grid grid-cols-3 place-items-end gap-1">
          <p className="col-start-3">{bookingFee}</p>
          <span className="col-start-4">DKK</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <p className="col-span-2 col-start-1">Subtotal</p>
        <div className="grid grid-cols-3 place-items-end gap-1">
          <p className="col-start-3">{subtotal}</p>
          <span className="col-start-4">DKK</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <p className="col-span-2 col-start-1">Total</p>
        <div className="grid grid-cols-3 place-items-end gap-1">
          <p className="col-start-3">{total}</p>
          <span className="col-start-4">DKK</span>
        </div>
      </div>
    </div>
  );
}

export default TotalAmount;
