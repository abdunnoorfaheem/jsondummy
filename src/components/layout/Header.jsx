import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import {Link} from "react-router-dom";
import Image from '../Image';
import Logo from "/src/assets/logo.png";
import Button from '../Button';

const Header = () => {
  return (
    <>
      <div className="py-[15px] bg-amber-100">
        <Container>
        <Flex className={"justify-between"}>
            <div className="">
                <Image imgSrc={Logo} className={"w-[50px] h-[30px]"}/>
            </div>
            <div className="hidden md:block">
                <ul className="flex gap-x-4">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/service"}>Service</Link></li>
                    <li><Link to={"/pages"}>Pages</Link></li>
                </ul>
            </div>
            <div className="">
              <Link to={"/pages"}><Button className={"bg-blue-300 rounded-4xl text-white font-bold"}>Product list</Button></Link>
            </div>
        </Flex>
      </Container>
      </div>
    </>
  )
}

export default Header
