import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Dashboard = () => {
    const [user,setUser]=useContext(UserContext);
    console.log(user)
    return (
        <div>
            <h1>dasboard</h1>
            {user.type==="seller"?<div>seller</div>:user.type==="buyer"?<div>buyer</div>:<div>admin</div>}
        </div>
    );
};

export default Dashboard;