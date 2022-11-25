import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../App';
import AdminDashboard from './AdminDashboard';
import BuyerDashboard from './BuyerDashboard';
import SellerDashboard from './SellerDashboard';

const Dashboard = () => {
    const [user,setUser]=useContext(UserContext);
    // console.log(user)
    
    return (
        <div>
            {/* {console.log(user.type)} */}
            {user.type=="seller"?<SellerDashboard/>:user.type=="buyer"?<BuyerDashboard/>:user.type=="Admin"?<AdminDashboard/>:<></>}
        </div>
    );
};

export default Dashboard;