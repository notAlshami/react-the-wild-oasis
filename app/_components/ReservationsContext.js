"use client";

const { createContext, useContext, useState } = require("react");

const ReservationContext = createContext();
const initState = { from: undefined, to: undefined };
function ReservationProvider({ children }) {
  const [range, setRange] = useState(initState);
  const resetRange = () => setRange(initState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("Context used outside of provider");
  return context;
}

export { ReservationProvider, useReservation };
