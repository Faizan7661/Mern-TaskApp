import React from 'react';

function Navbar() {
  const handleLogout = () => {
    const confirmLogout = window.confirm('Do you want to log out?');

    if (confirmLogout) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
  };

  return (
    <>
      <nav  className="border-gray-200 bg-black-50 dark:bg-black-800 p-2 border border-white ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              TaskApp
            </span>
          </a>

          <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <button onClick={handleLogout}>Log Out</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
