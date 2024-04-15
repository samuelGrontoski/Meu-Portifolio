// Components
import { SocialButton } from "../components/socialButton";

// Imagens
import logo from "../assets/logo.svg"
import top from "../assets/top.svg"
import botton from "../assets/botton.svg"
import { AiOutlineMail, AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

export function Home() {
    return (
        <div className="bg-bg w-screen h-screen">
            <header>
                <nav className="fixed top-12 right-24 flex justify-items-center content-start gap-6">
                    <SocialButton link="mailto:contatosamuelgrontoski@gmail.com" icon={AiOutlineMail} />
                    <SocialButton link="https://github.com/samuelGrontoski" icon={AiFillGithub} />
                    <SocialButton link="https://www.linkedin.com/in/samuel-grontoski/" icon={AiFillLinkedin} />
                    <SocialButton link="https://www.instagram.com/samuel_grontoski/" icon={AiOutlineInstagram} />
                </nav>
            </header>
            <body>
                <main>
                    <div className="animate-pulse">
                        <img src={top} alt="barra superior" className="w-60 fixed left-12 top-0 rounded-lg"/>
                        <img src={botton} alt="barra inferior" className="w-60 fixed right-12 bottom-0 rounded-lg"/>
                    </div>
                    <button className="fixed left-20 top-8 w-[64px] hover:scale-110 transition duration-200">
                        <div className="flex justify-start"> 
                            <img src={logo} alt="logo"/>
                        </div>
                    </button>
                </main>
                <footer className="text-cinza-300 fixed bottom-8 right-20 text-sm">
                    ©2024 Samuel Grontoski
                </footer>
            </body>
        </div>
    )
}