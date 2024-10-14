import { SocialIcon } from "react-social-icons";

const list = ["facebook", "x", "linkedin", "discord", "email"];
const Footer = () => {
  return (
    <div className="border-t-4 border-black w-5/6 rounded-t-full flex flex-col items-center pt-3 text-white bg-black">
      <h1 className="font-bold max-[760px]:text-xl min-[760px]:text-2xl">
        AI Cook
      </h1>
      <p className="w-[35rem] pb-2 pt-1 text-center max-[760px]:px-[5rem] max-[760px]:text-xs min-[760px]:text-sm">
        AI Cook, I cook. Your smart cooking assistant. Choose a recipe, follow
        the steps, and enjoy delicious meals with ease. I also provide nutrition
        info, dietary guidance, and help manage your cooking time efficiently.
      </p>
      <div className="flex gap-3">
        {list.map((item) => (
          <span key={item} className="h-fit rounded-full border cursor-pointer">
            <SocialIcon
              network={item}
              style={{ height: 26, width: 26 }}
              bgColor="black"
              href={`https://www.${item}.com`}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Footer;
