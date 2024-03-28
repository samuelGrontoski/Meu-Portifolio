// Components
import { SocialButton } from "../components/socialButton";

import { AiOutlineMail, AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

export function Home() {
    return (
        <div className="bg-bg w-screen h-screen">
            <header>
                <nav className="fixed top-12 right-40 flex justify-items-center content-start gap-6">
                    <SocialButton link="mailto:contatosamuelgrontoski@gmail.com" icon={AiOutlineMail} />
                    <SocialButton link="https://github.com/samuelGrontoski" icon={AiFillGithub} />
                    <SocialButton link="https://www.linkedin.com/in/samuel-grontoski/" icon={AiFillLinkedin} />
                    <SocialButton link="https://www.instagram.com/samuel_grontoski/" icon={AiOutlineInstagram} />
                </nav>
            </header>
            <body>
                <main>
                    <div className="fixed inset-y-0 left-40 w-5 bg-cinza-500" />

                </main>
            </body>
        </div>
    )
}