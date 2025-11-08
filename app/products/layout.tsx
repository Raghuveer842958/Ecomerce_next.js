import Navbar from '@/components/Navbar';
import React from 'react'

const layout = ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) => {
  return (
    <section>
        {/* <div>Products page header</div> */}
        {/* <Navbar/> */}
        {children}
    </section>
  )
}

export default layout