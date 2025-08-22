import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';


const HomeLayout = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            <div className='min-h-screen'>
                {children}
            </div>
            <Footer></Footer>
        </>
    );
};

export default HomeLayout;