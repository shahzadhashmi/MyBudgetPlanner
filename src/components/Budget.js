import React, {useContext} from 'react';
import {AppContext} from "./context/AppContext";

const Budget = () => {

    const {budget} = useContext(AppContext);
    return (
        <div className="alert alert-secondary">
            <span className="font-weight-bold">Budget: Rs.{budget}</span>
        </div>
    )
}

export default Budget
