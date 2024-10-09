import { useRef, useState } from "react";
import image1 from "./assets/images/image-1.png";
import image2 from "./assets/images/image-2.png";
import image3 from "./assets/images/image-3.png";
import { requestGroqAI } from "./utils/Groq";
import Markdown from "react-markdown";
import { ReactTyped } from "react-typed";
import BubbleChat from "./Component/BubbleChat";
import Image from "./Component/Image";
import Button from "./Component/Button";
import { SocialIcon } from "react-social-icons";
import CardAbout from "./Component/CardAbout";

function App() {
  const [answare, setAnsware] = useState("");
  const handleButton = async (e) => {
    e.preventDefault();
    const prompt =
      '? Tambahkan per point, tambahkan juga emoji menarik di tiap bahannya tapi jika pertanyaanya tidak berunsur resep makanan/minumman maka jangan dijawab, cukup dengan memberikan response "Maaf, Kami Hanya Bisa Bantu Untuk Resep Makanan, Silahkan Coba Lagi 😄" tidak lebih';
    const askAI = await requestGroqAI(inputChat.value + prompt);
    setAnsware(askAI);
  };
  const handleScroll = (params) => {
    if (params.current) {
      params.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const getRandomSpeed = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const page2 = useRef(null);
  const page3 = useRef(null);
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-r from-black from-40% to-slate-900 text-white justify-center items-center flex flex-col rounded-b-3xl">
        <div className="flex flex-col items-center w-3/4">
          <Image
            src={image1}
            position="right-[10rem] top-[3rem]"
            delay="[--slidein-delay:1200ms]"
          />
          <Image
            src={image2}
            position="top-[15rem] left-[15rem]"
            delay="[--slidein-delay:1000ms]"
          />
          <Image
            src={image3}
            height="h-52"
            width="w-52"
            position="right-[18rem] top-[20rem]"
            delay="[--slidein-delay:1400ms]"
          />
          <h1 className="animate-slidein [--slidein-delay:300ms] opacity-0 font-sans text-8xl">
            AI is here for{" "}
            <ReactTyped
              strings={["You", "Receipt"]}
              typeSpeed={getRandomSpeed(50, 250)}
              backSpeed={(100, 300)}
              loop
            />
          </h1>
          <p className="animate-slidein [--slidein-delay:500ms] opacity-0 text-lg font-semibold text-center text-slate-500 mt-8 mb-6 w-1/2">
            Creating food recipes, time management, and customizing your needs
            easily with the help of AI
          </p>
          <div className="animate-slidein [--slidein-delay:700ms] opacity-0 w-full text-center">
            <Button width="w-1/4" onclick={() => handleScroll(page2)}>
              Chat Me Now!
            </Button>
            <Button width="w-fit px-5" onclick={() => handleScroll(page3)}>
              Meet Our Team
            </Button>
          </div>
        </div>
      </div>
      <div ref={page2} className="h-screen w-full bg-white px-11 py-5">
        <div className="h-full bg-slate-900 border rounded-3xl p-5  ">
          <div className="h-full bg-slate-700 border border-black rounded-3xl flex flex-col justify-between">
            <div className="h-12 px-3 items-center flex gap-2">
              <div className="h-6 w-8 rounded-full bg-green-400"></div>
              <div className="h-6 w-8 rounded-full bg-yellow-400"></div>
              <div className="h-6 w-8 rounded-full bg-red-400"></div>
            </div>
            <div className="h-full bg-slate-500 rounded-b-3xl px-6 pt-4 pb-2 flex flex-col justify-between overflow-auto">
              <div>
                <BubbleChat>
                  Hai, masukkan kata kunci "makanan/minuman"
                </BubbleChat>
                <BubbleChat reply={true}>Hai!</BubbleChat>
                {answare ? (
                  <BubbleChat type="answare">
                    <Markdown>{answare}</Markdown>
                  </BubbleChat>
                ) : null}
              </div>
              <form className="text-center pt-4 " onSubmit={handleButton}>
                <input
                  className="w-4/5 overflow-auto rounded-xl px-5 py-1"
                  placeholder="Type here ..."
                  id="inputChat"
                  type="text"
                />
                <button
                  className="ml-2  px-5 py-1 font-bold rounded-full bg-blue-400 hover:bg-blue-500"
                  type="submit"
                >
                  Enter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={page3}
        className="h-screen w-full border-2 border-black rounded-t-3xl flex flex-col items-center"
      >
        <span className="pt-5">
          <h1
            className="text-4xl font-bold border-black border rounded-full px-4 py-1"
            style={{ transform: "rotate(-3deg)", display: "inline-block" }}
          >
            Meet Our Team
          </h1>
        </span>
        <div className="flex w-full h-full gap-5 justify-center pt-5  ">
          <CardAbout
            name="Anggota 1"
            role="Passionate about Tech"
            github="https://github.com"
            linkedin="https://linkedin.com"
            quote="Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore"
          />
          <CardAbout
            name="Anggota 2"
            role="Passionate about Tech"
            github="https://github.com"
            linkedin="https://linkedin.com"
            quote="Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore"
          />
          <CardAbout
            name="Anggota 3"
            role="Passionate about Tech"
            github="https://github.com"
            linkedin="https://linkedin.com"
            quote="Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore"
          />
        </div>
      </div>
    </>
  );
}

export default App;
