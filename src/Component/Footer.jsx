import { SocialIcon } from "react-social-icons";

const list = ["facebook", "x", "linkedin", "discord", "email"];
const Footer = () => {
  return (
    <div className="border-t-4 border-black w-full rounded-t-full flex flex-col items-center pt-3 text-white bg-black h-1/4">
      <h1 className="font-bold text-2xl">AI Cook</h1>
      <p className="w-[35rem] pb-2 pt-1 text-center text-sm">
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
