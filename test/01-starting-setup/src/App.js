import React from "react";

import Customers from "./components/Customers";

function App() {

  const dataCustomers = [
    { id: "c01", firstName: "Mark", secName: "Jackson", phone: "3203978981" },
    { id: "c02", firstName: "Andrew", secName: "Foster", phone: "3336547182" },
    {
      id: "c03",
      firstName: "Isabel",
      secName: "Courtney",
      phone: "3446728928",
    },
    { id: "c04", firstName: "John", secName: "Mattioli", phone: "3455676818" },
    { id: "c05", firstName: "Andrea", secName: "Spencer", phone: "3338899736" },
    {
      id: "c06",
      firstName: "Nancy",
      secName: "Cunningham",
      phone: "3209876546",
    },
    { id: "c07", firstName: "Dory", secName: "Wiggins", phone: "3359087393" },
    { id: "c08", firstName: "James", secName: "D'Antoni", phone: "3925676112" },
    { id: "c09", firstName: "Michael", secName: "Orford", phone: "3284564567" },
    { id: "c10", firstName: "Paul", secName: "Drummond", phone: "3331922311" },
  ];

  return (

  <div>
    <Customers />
  </div>
  )
}

export default App;
