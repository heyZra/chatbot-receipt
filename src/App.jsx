import { useState } from "react";
import image1 from "./assets/images/image-1.png";
import image2 from "./assets/images/image-2.png";
import image3 from "./assets/images/image-3.png";
import { requestGroqAI } from "./utils/Groq";
import Markdown from "react-markdown";

const Button = (props) => {
  const { children, width = "w-32" } = props;
  return (
    <button
      className={`py-3 font-semibold ${width} mx-1 bg-black-500 transition ease-in duration-300 border rounded-full hover:bg-slate-400 hover:text-slate-800`}
    >
      {children}
    </button>
  );
};

const listText = [
  {
    text: "You",
  },
  { text: "Receipe" },
];

const Image = (props) => {
  const { src, position = "", height = "", width = "w-48", delay } = props;
  return (
    <img
      src={src}
      className={`${width} absolute ${position} ${height} opacity-0 animate-slideinbouncing ${delay}`}
      alt="image"
    />
  );
};

const BubbleChat = (props) => {
  const { children, reply } = props;
  return (
    <>
      <div
        className={`h-fit px-7 py-2 w-1/4 max-w-24 min-w-fit bg-green-200 rounded-t-3xl ${
          reply ? "ml-auto text-right" : ""
        }`}
      >
        {children}
      </div>
    </>
  );
};

function App() {
  const [answare, setAnsware] = useState("");
  const handleButton = async (e) => {
    e.preventDefault();
    const askAI = await requestGroqAI(inputChat.value);
    setAnsware(askAI);
  };
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
            AI is here for <span>You</span>
            <span className="typing-cursor w-1.5 h-20 inline-block bg-white animate-blink" />
          </h1>
          <p className="animate-slidein [--slidein-delay:500ms] opacity-0 text-lg font-semibold text-center text-slate-500 mt-8 mb-6 w-1/2">
            Creating food recipes, time management, and customizing your needs
            easily with the help of AI
          </p>
          <div className="animate-slidein [--slidein-delay:700ms] opacity-0 w-full text-center">
            <Button width="w-1/4">Chat Me Now!</Button>
            <Button>About Us</Button>
          </div>
        </div>
      </div>
      <div className="h-screen w-full bg-white px-11 py-5">
        <div className="h-full bg-slate-900 border rounded-3xl p-5  ">
          <div className="h-full bg-slate-700 border border-black rounded-3xl flex flex-col justify-between">
            <div className="h-12 px-3 items-center flex gap-2">
              <div className="h-6 w-8 rounded-full bg-green-400"></div>
              <div className="h-6 w-8 rounded-full bg-yellow-400"></div>
              <div className="h-6 w-8 rounded-full bg-red-400"></div>
            </div>
            <div className="h-full bg-slate-500 rounded-b-3xl px-6 pt-4 pb-2 flex flex-col justify-between overflow-auto">
              <div>
                <BubbleChat>Hai Dear!</BubbleChat>
                <BubbleChat reply={true}>Hai Dear!</BubbleChat>
                {answare ? (
                  <BubbleChat>
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

      <div className="h-screen w-full bg-slate-300 rounded-t-3xl"></div>
    </>
  );
}

export default App;
