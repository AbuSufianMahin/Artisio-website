import { ReactNode } from 'react'

type Props = {
  children: ReactNode;
};

const ResponsiveWidthContainer = ({children} : Props) => {
  return (
    <div className='w-11/12 md:w-10/12 mx-auto max-w-7xl'>
        {children}
    </div>
  )
}

export default ResponsiveWidthContainer