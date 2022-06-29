import React, { createContext, useState } from "react";

export const billsContext = createContext();

const BillsContextProvider = ({ children }) => {


  const [bills, setBills] = useState([]);
  const [filter, setFilter] = useState("");


  return (
    <billsContext.Provider value={{ bills, setBills, filter, setFilter }}>
      {children}
    </billsContext.Provider>
  );
};

export default BillsContextProvider;

