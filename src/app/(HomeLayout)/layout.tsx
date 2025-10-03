import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar/Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: LayoutProps) => {
  return (
    // <div className='flex flex-col justify-between min-h-screen'>
      <>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </>
    // </div>
  )
}

export default HomeLayout;