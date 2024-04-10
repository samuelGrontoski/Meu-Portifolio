export function SocialButton ({ link, icon: Icon}) {
    return (
      <a href={link} className="grid place-content-center">
        <Icon className="w-7 h-7 text-2xl text-cinza-500 hover:scale-125 hover:text-cinza-300 transition duration-200" />
      </a>
    );
  }