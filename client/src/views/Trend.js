import {React} from "react";
import { NavLink } from 'react-router-dom';
import DataTable from '../components/DataTable'
const Trend = () => {

    return(
        <>
            <div className="container">
                <div className="backToHome">
                    <NavLink to='/'>Back <br />To <br /> Home</NavLink>
                </div>
                <DataTable />
            </div>
        </>
    )
}

export default Trend
