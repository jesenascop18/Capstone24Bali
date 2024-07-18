import React from 'react'
import Navbar from './Navbar';

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <div className="fixed top-0 w-full p-3 bg-white z-[100] drop-shadow-lg">
        <Navbar />
      </div>
      <div
        className="flex bg-gradient-to-b from-[#37B9C2] to-[#98C3C4] mt-3 z-10"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-full
        ">
          <main className='h-full'>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Layout
