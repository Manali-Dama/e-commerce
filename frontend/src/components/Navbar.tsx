"use client"

import Link from 'next/link';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';

import { useEffect } from 'react';

const Navbar = () => {

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }
    window.addEventListener("scroll",handleScroll)

    return () => {
        window.removeEventListener("scroll",handleScroll)
    }
},[]);

  return (
    <nav className="py-4 w-full">
    <div className="w-[89%] m-auto flex justify-between items-center max-w-[1400px]">
    <Link className="font-extrabold text-xl text-cyan-500" href={"/"}>MedBuddy</Link>
    <ul className="md:flex font-medium items-center gap-8 md:static absolute text-gray-600">
        <li>
            <Link  href="/" >Shop</Link>
        </li>
        <li>
            <Link href={"/"} >FAQ</Link>
        </li>
        <li>
            <Link href={"/"} >About us</Link>
        </li>
        <li>
            <Link href={"/"} >Contact us</Link>
        </li>
        <li>
            <Link href={"/"} >My Orders</Link>
        </li>
    </ul>
    <div className="flex gap-4 items-center text-dark ml-auto md:ml-0">
        <div className="cursor-pointer relative" >
            <AiOutlineShoppingCart size={20}/>
        </div>
    </div>
</div>
</nav>
)
};

export default Navbar

function setIsScrolling(arg0: boolean) {
  throw new Error('Function not implemented.');
}
