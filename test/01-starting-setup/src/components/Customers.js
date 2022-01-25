import React from "react";

import CustomerItem from "./CustomerItem";

const Customers = () => {

    const addCustomerHandler = (event) => {
        console.log('New Customer Added')
    }


    return <div className="customers">
        <h1>Customers List</h1>
        <CustomerItem />
        <button onClick={addCustomerHandler}>Add Customer</button>
    </div>
}

export default Customers;