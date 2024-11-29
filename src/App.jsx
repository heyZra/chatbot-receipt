import { useEffect, useRef, useState } from "react";
import image1 from "./assets/images/image-1.png";
import image2 from "./assets/images/image-2.png";
import image3 from "./assets/images/image-3.png";
import { requestGroqAI } from "./utils/Groq";
import Markdown from "react-markdown";
import { ReactTyped } from "react-typed";
import BubbleChat from "./Component/BubbleChat";
import Image from "./Component/Image";
import Button from "./Component/Button";
import CardAbout from "./Component/CardAbout";
import Footer from "./Component/Footer";
import moment from "moment";
import axios from "axios";
import template_text from "./utils/template_text";
import berbukaKeywords from "./utils/berbukaKeywords";
import sahurKeywords from "./utils/sahurKeywords";

function App() {
  const [answare, setAnsware] = useState("");
  const [textChat, setTextChat] = useState("");
  const textareaRef = useRef(null);
  const [askChat, setAskChat] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    (async () => {
      try {
        // Make a GET request to the ipify API to get the user's IP address
        const response = await axios.get("https://api.ipify.org?format=json");
        try {
          // Make a GET request to get the user's Location Country
          const getLocation = await axios.get(
            `https://api.iplocation.net/?ip=${response.data.ip}`
          );
          const countryAddress = getLocation.data.country_name;
          setCountry(countryAddress);
        } catch (error) {
          console.error("Failed to fetch IP Location:", error); // Log any errors
        }
      } catch (error) {
        console.error("Failed to fetch IP address:", error); // Log any errors
      }
    })(); // Immediately invoked function
  }, []);

  const handleButton = async (e) => {
    e.preventDefault();
    try {
      const time_hours = moment().format("HH");
      const time_minutes = moment().format("mm");
      const time_now = `${time_hours}:${time_minutes}`;
      let checkBerbukaOrSahur;

      const isBerbukaMentioned = berbukaKeywords.some((keyword) =>
        textChat.toLowerCase().includes(keyword)
      );
      const isSahurMentioned = sahurKeywords.some((keyword) =>
        textChat.toLowerCase().includes(keyword)
      );
      if (isBerbukaMentioned) {
        // avarage time adzan magrhib is range 17:30 AM to 19:00 AM, this is for breaking the fast
        checkBerbukaOrSahur = `Untuk Berbuka Puasa dari jam ${time_now}sebelum jam 16:45`;
      } else if (isSahurMentioned) {
        // avarage time imsyak is range 4 AM to 5 AM, this is for sahur
        checkBerbukaOrSahur = `Untuk Sahur dari jam ${time_now}sebelum jam 16:45`;
      } else {
        checkBerbukaOrSahur = ""; // no need to fill in
      }
      const prompt = `Lakukan perintah sesuai di bawah ini:
        1. "${textChat}?" Ini adalah pertanyaanya.
        2. ${checkBerbukaOrSahur}
        3. Berikan manajemen estimasi waktunya pengerjaan dari jam ${time_now} sampai selesai.
        4. Jika pertanyaanya tidak berunsur resep makanan/minumman maka cukup dengan memberikan response "Maaf, Kami Hanya Bisa Bantu Untuk Resep Makanan, Silahkan Coba Lagi 😄" tidak lebih.
        5. Tapi jika pertanyaanya berunsur resep makanan/minuman maka jawab dengan per point, pada langkah-langkah mengolah resepnya atur manajemen waktu, tambahkan juga emoji menarik di tiap bahannya dan berikan juga nutrisi dan gizi yang lengkap sehingga menjadi makanan/minuman yang sehat.
        6. Jawab perintah 1,2,3,4,5 di atas dengan bahasa yang dipakai pertanyaan pada nomor 1`;
      const askAI = await requestGroqAI(prompt);
      setAskChat(textChat);
      console.log(prompt);
      setAnsware(askAI);
      setTextChat("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "32px";
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeTextChat = (e) => {
    setTextChat(e.target.value);
    if (e.target.scrollHeight > 32) {
      e.target.style.height = "auto";
    }
    if (e.target.scrollHeight > 128) {
      e.target.style.height = "128px";
    } else {
      e.target.style.height = `${e.target.scrollHeight}px`;
    }
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
        <div className="flex flex-col items-center w-3/4 max-[760px]:flex max-[760px]:">
          <span className="">
            <Image
              src={image1}
              position="right-[10rem] top-[3rem] max-[760px]:right-[0rem] max-[760px]:top-[5rem]"
              delay="[--slidein-delay:1200ms]"
            />
            <Image
              src={image2}
              position="top-[15rem] left-[15rem] max-[760px]:top-[17rem] max-[760px]:left-[10%]"
              delay="[--slidein-delay:1000ms]"
            />
            <Image
              src={image3}
              height="h-52 max-[760px]:h-[10rem]"
              width="w-52 max-[760px]:w-[10rem]"
              position="right-[18rem] top-[20rem] max-[760px]:right-[1.5rem] max-[760px]:top-[24rem]"
              delay="[--slidein-delay:1400ms]"
            />
          </span>
          <h1 className="animate-slidein max-[760px]:text-6xl [--slidein-delay:300ms] opacity-0 font-sans text-8xl">
            AI is here for{" "}
            <ReactTyped
              strings={["You", "Receipt"]}
              typeSpeed={getRandomSpeed(50, 250)}
              backSpeed={(100, 300)}
              loop
            />
          </h1>
          <p className="animate-slidein [--slidein-delay:500ms] opacity-0 text-lg font-semibold text-center text-slate-500 mt-8 mb-6 w-1/2 max-[760px]:text-sm">
            Creating food recipes, time management, and customizing your needs
            easily with the help of AI
          </p>
          <div className="animate-slidein [--slidein-delay:700ms] opacity-0 w-full text-center">
            <Button
              width="w-1/4 max-[600px]:text-xs"
              onclick={() => handleScroll(page2)}
            >
              Chat Me Now!
            </Button>
            <Button
              width="w-fit px-5 max-[600px]:text-xs"
              onclick={() => handleScroll(page3)}
            >
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
                {country
                  ? (() => {
                      const matchedCountry = template_text.find(
                        (data) => data.country === country
                      );
                      if (matchedCountry) {
                        return (
                          <>
                            <BubbleChat reply={true}>
                              {matchedCountry.send}
                            </BubbleChat>
                            <BubbleChat>{matchedCountry.reply}</BubbleChat>
                          </>
                        );
                      } else {
                        return (
                          <>
                            <BubbleChat reply={true}>Hi!</BubbleChat>
                            <BubbleChat>
                              Hi, enter the keyword "food/drink"
                            </BubbleChat>
                          </>
                        );
                      }
                    })()
                  : null}

                {askChat ? (
                  <BubbleChat reply={true}>{askChat}</BubbleChat>
                ) : null}
                {answare ? (
                  <BubbleChat type="answare">
                    <Markdown>{answare}</Markdown>
                  </BubbleChat>
                ) : null}
              </div>
              <form
                className="text-center pt-4 flex justify-center"
                onSubmit={handleButton}
              >
                <textarea
                  ref={textareaRef}
                  className="w-3/5 h-8 overflow-auto rounded-xl px-5"
                  placeholder="Type here ..."
                  id="inputChat"
                  value={textChat}
                  onChange={handleChangeTextChat}
                  type="text"
                />
                <button
                  className="ml-2 px-5 py-1 font-bold h-fit mt-auto rounded-full bg-blue-400 hover:bg-blue-500"
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
        className="h-screen w-full border-2 border-black rounded-t-3xl flex flex-col justify-center items-center justify-between"
      >
        <div className="flex items-center pt-12 max-[995px]:flex-col">
          <span className="text-7xl font-extrabold min-[960px]:pl-10 max-[995px]:text-5xl max-[995px]:flex max-[995px]:gap-5 max-[995px]:pb-3">
            <h1>Meet</h1>
            <h1>Our</h1>
            <h1>Team</h1>
          </span>
          <div className="flex gap-10 min-[995px]:ml-10 max-[780px]:gap-5 max-[995px]:justify-center">
            <CardAbout
              name="Mohammad Ezra Nur I"
              role="Passionate about Tech"
              github="https://github.com"
              linkedin="https://linkedin.com"
              quote="The only way to learn a new programming language is by writing programs in it"
            />
            <CardAbout
              name="Raden Ibnu H. W"
              role="Passionate about Tech"
              github="https://github.com"
              linkedin="https://linkedin.com"
              quote="Programs must be written for people to read, and only incidentally for machines to execute"
            />
            <CardAbout
              name="Saftana Fitri"
              role="Passionate about Tech"
              github="https://github.com"
              linkedin="https://linkedin.com"
              quote="Any fool can write code that a computer can understand. Good programmers write code that humans can understand"
            />
          </div>
        </div>
        <span className="relative h-fit w-full text-center items-center flex justify-center">
          <input
            className="border border-black rounded-full w-1/3 py-3 pl-5 pr-[7rem] max-[800px]:w-1/2"
            placeholder="Send me your feedback!"
          />
          <button className="absolute min-[800px]:right-1/3 mr-3 w-24 bg-slate-700 hover:bg-slate-300 hover:text-black text-white rounded-full py-2 max-[800px]:right-1/4">
            Send
          </button>
        </span>
        <Footer />
      </div>
    </>
  );
}

export default App;
