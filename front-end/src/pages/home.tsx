import { useState } from "react";
// Components
import { SocialButton } from "../components/socialButton";

// Imagens
import logo from "../assets/logo.svg"
import pikachu_running from "../assets/pikachu-running.gif"
import { AiOutlineMail, AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";

export function Home() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="bg-bg w-screen h-screen">
            <div className="w-screen inline-flex justify-between p-5 md:px-40 md:pt-20">
                <figure className="w-[64px] hover:scale-110 transition duration-200">
                    <img src={logo} alt="logo" />
                </figure>
                <nav>
                    <button
                        onClick={() => { console.log("Clicou no menu"), setShowMenu(!showMenu) }}
                    >
                        <IoMenu className="w-8 h-8 text-cinza-500 hover:text-cinza-300 transition duration-200 md:hidden" />
                    </button>
                </nav>
                <nav className="justify-items-center content-start gap-6 hidden md:flex">
                    <SocialButton link="mailto:contatosamuelgrontoski@gmail.com" icon={AiOutlineMail} />
                    <SocialButton link="https://github.com/samuelGrontoski" icon={AiFillGithub} />
                    <SocialButton link="https://www.linkedin.com/in/samuel-grontoski/" icon={AiFillLinkedin} />
                    <SocialButton link="https://www.instagram.com/samuel_grontoski/" icon={AiOutlineInstagram} />
                </nav>
            </div>
            <div>
                <main className="p-5 text-cinza-300 w-full md:px-40">
                    <h1 className="text-lg font-bold text-center md:text-start md:text-2xl">Olá! Eu sou Samuel Grontoski</h1>
                    <p className="text-base text-center my-5 md:text-start">Desenvolvedor Web Full Stack</p>
                </main>
                <footer className="flex justify-between items-end p-5 absolute inset-x-0 bottom-0 w-screen md:px-40 md:mb-20">
                    <img className="w-20" src={pikachu_running} alt="pikachu_gif" />
                    <p className="text-cinza-300 text-sm">© 2024 Samuel Grontoski</p>
                </footer>
            </div>

            {showMenu && (
                <nav className="absolute right-0 top-0 p-5 flex flex-col gap-6 bg-bg md:hidden">
                    <button
                        onClick={() => { console.log("Clicou no menu"), setShowMenu(!showMenu) }}
                    >
                        <IoMenu className="w-8 h-8 text-cinza-500 hover:text-cinza-300 transition duration-200" />
                    </button>
                    <SocialButton link="mailto:contatosamuelgrontoski@gmail.com" icon={AiOutlineMail} />
                    <SocialButton link="https://github.com/samuelGrontoski" icon={AiFillGithub} />
                    <SocialButton link="https://www.linkedin.com/in/samuel-grontoski/" icon={AiFillLinkedin} />
                    <SocialButton link="https://www.instagram.com/samuel_grontoski/" icon={AiOutlineInstagram} />
                </nav>
            )}
        </div>
    )
}