import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='w-[1500px] min-h-screen mx-auto overflow-hidden'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;