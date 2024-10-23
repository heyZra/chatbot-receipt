import { SocialIcon } from "react-social-icons";

const CardAbout = (props) => {
  const { name, role, github, linkedin, quote } = props;
  return (
    <div className="border shadow-xl border-slate-300 rounded-xl min-h-56 w-1/4 p-3 hover:scale-105">
      <div className="flex gap-5 items-center">
        <div className="bg-black rounded-full text-white w-fit px-5 py-3">
          X
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold max-[760px]:text-xs"> {name}</h1>
          <p className="max-[760px]:text-xs">{role}</p>
          <div className="flex gap-2">
            <SocialIcon
              className="cursor-pointer"
              style={{ height: 25, width: 25 }}
              network="github"
              url={github}
            />
            <SocialIcon
              className="cursor-pointer"
              style={{ height: 25, width: 25 }}
              network="linkedin"
              url={linkedin}
            />
          </div>
        </div>
      </div>
      <blockquote className="py-2 whitespace-normal text-justify max-[980px]:text-sm max-[760px]:text-xs">
        <span className="font-bold text-xl max-[760px]:text-lg">"</span>
        {quote}
        <span className="font-bold text-xl max-[760px]:text-lg">"</span>.
      </blockquote>
    </div>
  );
};

export default CardAbout;
