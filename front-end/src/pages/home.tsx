// Components
import { SocialButton } from "../components/socialButton";

// Imagens
import logo from "../assets/logo.svg"
import pikachu_running from "../assets/pikachu-running.gif"
import { AiOutlineMail, AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

export function Home() {
    return (
        <div className="bg-bg w-screen h-screen">
            <head className="w-screen inline-flex justify-between p-5">
                <figure className="w-[64px] hover:scale-110 transition duration-200">
                    <img src={logo} alt="logo" />
                </figure>
                <nav className="justify-items-center content-start gap-6 hidden md:flex">
                    <SocialButton link="mailto:contatosamuelgrontoski@gmail.com" icon={AiOutlineMail} />
                    <SocialButton link="https://github.com/samuelGrontoski" icon={AiFillGithub} />
                    <SocialButton link="https://www.linkedin.com/in/samuel-grontoski/" icon={AiFillLinkedin} />
                    <SocialButton link="https://www.instagram.com/samuel_grontoski/" icon={AiOutlineInstagram} />
                </nav>
            </head>
            <body>
                <main>
                    {/* <div className="animate-pulse">
                        <img src={top} alt="barra superior" className="w-60 fixed left-12 top-0 rounded-lg"/>
                        <img src={botton} alt="barra inferior" className="w-60 fixed right-12 bottom-0 rounded-lg"/>
                    </div> */}
                    <button className="fixed left-20 top-8 w-[64px] hover:scale-110 transition duration-200">

                    </button>
                </main>
                <footer className="flex justify-between items-end p-5 absolute inset-x-0 bottom-0 w-screen">
                    <img className="w-20" src={pikachu_running} alt="jolton_pokemon gif" />
                    <p className="text-cinza-300 text-sm">©2024 Samuel Grontoski</p>
                </footer>
            </body>
        </div>
    )
}