import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

export function Home() {
    return (
        <div className="bg-cinza-200 w-screen h-screen">
            <header>

            </header>
            <body>
                <main className="">
                    <div className="grid justify-items-center content-start bg-cinza-300 max-w-[50vh] w-full h-[70vh] fixed top-24 right-24 overflow-hidden rounded-md shadow-lg gap-y-2 p-5">
                        <a href="https://github.com/samuelGrontoski" className="w-64 h-12 bg-cinza-100 shadow-md flex items-center px-8 gap-2 rounded-md">
                            <AiFillGithub className="w-8 text-2xl"/>
                            <p className="text-sm">/samuelGrontoski</p>
                        </a>
                        <a href="https://www.linkedin.com/in/samuel-grontoski/" className="w-64 h-12 bg-cinza-100 shadow-md flex items-center px-8 gap-2 rounded-md">
                            <AiFillLinkedin className="w-8 text-2xl"/>
                            <p className="text-sm">/samuel-grontoski</p>
                        </a>
                        <a href="https://www.instagram.com/samuel_grontoski/" className="w-64 h-12 bg-cinza-100 shadow-md flex items-center px-8 gap-2 rounded-md">
                            <AiFillInstagram className="w-8 text-2xl"/>
                            <p className="text-sm">/samuel_grontoski</p>
                        </a>
                    </div>

                </main>
            </body>
        </div>
    )
}