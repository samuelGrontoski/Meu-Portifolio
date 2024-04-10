// Components
import { SocialButton } from "../components/socialButton";

// Imagens
import logo from "../assets/logo.png"
import top from "../assets/top.svg"
import botton from "../assets/botton.svg"
import { AiOutlineMail, AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

export function Home() {
    return (
        <div className="bg-bg w-screen h-screen">
            <header>
                <nav className="fixed top-12 right-52 flex justify-items-center content-start gap-6">
                    <SocialButton link="mailto:contatosamuelgrontoski@gmail.com" icon={AiOutlineMail} />
                    <SocialButton link="https://github.com/samuelGrontoski" icon={AiFillGithub} />
                    <SocialButton link="https://www.linkedin.com/in/samuel-grontoski/" icon={AiFillLinkedin} />
                    <SocialButton link="https://www.instagram.com/samuel_grontoski/" icon={AiOutlineInstagram} />
                </nav>
            </header>
            <body>
                <main>
                    {/* <div className="fixed inset-y-0 left-40 top-12 bottom-12 w-5 bg-cinza-500 rounded skew-y-12 animate-pulse" /> */}
                    <div className="animate-pulse">
                        <img src={top} alt="barra superior" className="w-52 fixed left-40 top-0 rounded-lg"/>
                        <img src={botton} alt="barra inferior" className="w-52 fixed right-40 bottom-0 rounded-lg"/>
                    </div>
                    <button className="fixed left-52 top-12 w-[64px] hover:scale-110 transition duration-200">
                        <img src={logo} alt="logo"/>
                    </button>
                </main>
            </body>
        </div>
    )
}