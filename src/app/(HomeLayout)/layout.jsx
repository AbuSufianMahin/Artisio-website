import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';


const HomeLayout = ({ children }) => {
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <div>
                <Navbar></Navbar>
                {children}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;