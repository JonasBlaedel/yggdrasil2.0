import InputField from "@/components/InputField";

function AttendeeInput({ tickets }) {
  return (
    <>
      {tickets
        .filter((ticket) => ticket.ticketType === "Festival Ticket")
        .map((ticket) => (
          <div key={ticket.id} className="rounded-sm border border-accent p-2 space-y-2">
            <div className="mb-2 flex justify-between gap-10">
              <p>#{ticket.id + 1}</p>
              <p>{ticket.ticketName}</p>
            </div>
            <InputField
              type="text"
              id={"attendee-name" + ticket.id}
              name="name"
              labelText="Full name"
              required="required"
            />
            <InputField
              type="email"
              id={"attendee-email" + ticket.id}
              name="email"
              labelText="Email"
              required="required"
            />
            <InputField
              type="tel"
              id={"attendee-phone" + ticket.id}
              name="phone"
              labelText="Phone"
              required="required"
              inputMode="numeric"
            />
          </div>
        ))}
    </>
  );
}

export default AttendeeInput;
