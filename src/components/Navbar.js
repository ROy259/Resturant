// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <div className='containeer bg-slate-300 mx-auto flex items-center justify-around'>
//       <div className='logo flex gap-4  p-2'>
//         <i className="text-3xl fa-solid fa-utensils"></i>
//         <p className='text-3xl font-medium'>Resturant</p>
//       </div>

//       <div className='menu'>
//         <ul className='flex gap-5 text-xl p-2'>
//           <li>
//             <Link to="/" className='cursor-pointer hover:font-bold'>Home</Link>
//           </li>
//           <li>
//             <Link to="/menu" className='cursor-pointer hover:font-bold'>Menu</Link>
//           </li>
//           <li>
//             <Link to="/about" className='cursor-pointer hover:font-bold'>About</Link>
//           </li>
//           <li>
//             <Link to="/contact" className='cursor-pointer hover:font-bold'>Contact</Link>
//           </li>
//         </ul>
//       </div>

//       <div className='customer-care'>
//         <p className='text-2xl font-medium cursor-pointer hover:font-bold'> Customer Care</p>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='containeer bg-slate-300 mx-auto flex items-center justify-around md:flex-wrap lg:flex-nowrap'>
      <div className='logo flex gap-4 p-2 md:w-1/2 lg:w-1/4'>
        <i className="text-3xl fa-solid fa-utensils"></i>
        <p className='text-3xl font-medium'>Resturant</p>
      </div>

      <div className='menu hidden md:block lg:flex'>
        <ul className='flex gap-5 text-xl  font-medium p-2'>
          <li>
            <Link to="/" className='cursor-pointer hover:font-bold'>Home</Link>
          </li>
          <li>
            <Link to="/menu" className='cursor-pointer hover:font-bold'>Menu</Link>
          </li>
          <li>
            <Link to="/about" className='cursor-pointer hover:font-bold'>About</Link>
          </li>
          <li>
            <Link to="/contact" className='cursor-pointer hover:font-bold'>Contact</Link>
          </li>
        </ul>
      </div>

      
      <div className='md:hidden'>
        <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'>
          Menu
        </button>
      </div>
    </div>
  );
};

export default Navbar;