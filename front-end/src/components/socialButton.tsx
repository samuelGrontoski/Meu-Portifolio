export function SocialButton (props: any) {
    return (
      <a href={props.link} className="grid place-content-center">
        <props.icon className="w-7 h-7 text-cinza-500 hover:scale-125 hover:text-cinza-300 transition duration-200" />
      </a>
    );
  }