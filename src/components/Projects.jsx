import Tilt from "react-parallax-tilt";

import { DiGithubBadge } from "react-icons/di";
import { motion } from "framer-motion";
import awa from "../assets/AWA.png";
import quiz from "../assets/quiz.jpg";
import wa from "../assets/weatherapp.png";
import mp from "../assets/minip.jpg";

function Projects() {
  const iconsVariant = (delay) => ({
    hidden: {
      x: -100,
      y: -60,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1,
        delay: delay,
      },
    },
  });
  const iconsVariantright = (delay) => ({
    hidden: {
      x: 100,
      y: -60,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1,
        delay: delay,
      },
    },
  });

  return (
    <div id="projects" className="my-20">
      <h1 className="font-bold text-white text-3xl">Projects</h1>
      <div className="flex flex-wrap gap-5 items-center justify-center my-10">
        <motion.div
          variants={iconsVariant(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <Tilt
            className=" h-80 w-65 border-0 border-white rounded-2xl p-1 bg-neutral-800 shadow-md shadow-white"
            glareEnable={true}
            glareMaxOpacity={0}
            scale={1}
          >
            <motion.div className=" ml-0  m-0 bg-transparent    rounded-xl shadow-xl  text-left text-black mb-0 ">
              <div>
                <img src={wa} className="rounded-md " />
                <a href="https://github.com/SayyadShekshavali/Mini-projects/tree/main/weather-app">
                  <DiGithubBadge
                    size={30}
                    className="z-10 text-black absolute top-3 right-3 bg-white rounded-2xl "
                  />
                </a>
              </div>
              <div className=" rounded-xl  ">
                <p className="text-white font-bold m-1">Wather app:☁️</p>
                <p className="text-[11px] text-white !mb-3">
                  The Mini Weather shows real-time weather info for any city
                  using the OpenWeatherMap API. It displays temperature,
                  humidity, wind speed, and conditions with intuitive icons.
                  <br></br>
                  <span className="text-red-200 ">Tech:</span>
                  <span className="font-bold m-2">React and weather api</span>
                </p>
              </div>
            </motion.div>
          </Tilt>
        </motion.div>
        <motion.div
          variants={iconsVariant(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <Tilt
            className=" h-80 w-65 border-0 border-white rounded-2xl p-1 bg-neutral-800 shadow-md shadow-white"
            glareEnable={true}
            glareMaxOpacity={0}
            scale={1}
          >
            <motion.div className=" ml-0  m-0 bg-transparent    rounded-xl shadow-xl  text-left text-black mb-0 ">
              <div>
                <img src={awa} className="rounded-md h-35" />
                <a href="https://github.com/SayyadShekshavali/Ai-assistant">
                  <DiGithubBadge
                    size={30}
                    className="z-10 text-black absolute top-3 right-3 bg-white rounded-2xl "
                  />
                </a>
              </div>
              <div className=" rounded-xl  ">
                <p className="text-white font-bold m-1">
                  AI Writing Assistant:🧠
                </p>
                <p className="text-[11px] text-white ">
                  AI-Powered Writing Assistant: a tool for Spellcheck, Grammar,
                  and Rephrasing using Gemini API! 💡 With features like
                  automatic typo correction, grammar fixes, and rephrasing
                  suggestions🎯
                  <br></br>
                  <span className="text-red-200">Tech:</span>
                  <span className="font-bold m-2">
                    React ,Nodejs,Express.js and Gemini-API
                  </span>
                </p>
              </div>
            </motion.div>
          </Tilt>
        </motion.div>{" "}
        <motion.div
          variants={iconsVariantright(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <Tilt
            className=" h-80 w-65 border-0 border-white rounded-2xl p-1 bg-neutral-800 shadow-md shadow-white"
            glareEnable={true}
            glareMaxOpacity={0}
            scale={1}
          >
            <motion.div className=" ml-0  m-0 bg-transparent    rounded-xl shadow-xl  text-left text-black mb-0 ">
              <div>
                <img src={quiz} className="rounded-md" />
                <a href="https://github.com/SayyadShekshavali/Mini-projects/tree/main/Quiz-app">
                  <DiGithubBadge
                    size={30}
                    className="z-10 text-black absolute top-3 right-3 bg-white rounded-2xl "
                  />
                </a>
              </div>
              <div className=" rounded-xl  ">
                <p className="text-white font-bold m-1">Quiz app: 📚</p>
                <p className="text-[11px] text-white ">
                  The quiz highlights correct and incorrect answers with colors,
                  calculates the final score, and disables buttons to avoid
                  multiple attempts, all while enhancing user experience through
                  dynamic styling.
                  <br></br>
                  <span className="text-red-200">Tech:</span>
                  <span className="font-bold m-2">Html,Css and javascript</span>
                </p>
              </div>
            </motion.div>
          </Tilt>
        </motion.div>{" "}
        <motion.div
          variants={iconsVariantright(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <Tilt
            className=" h-80 w-65 border-0 border-white rounded-2xl p-1 bg-neutral-800 shadow-md shadow-white"
            glareEnable={true}
            glareMaxOpacity={0}
            scale={1}
          >
            <motion.div className=" ml-0  m-0 bg-transparent    rounded-xl shadow-xl  text-left text-black mb-0 ">
              <div>
                <img src={mp} className="rounded-md h-40 w-full" />
                <a href="https://github.com/SayyadShekshavali/Mini-projects">
                  <DiGithubBadge
                    size={30}
                    className="z-10 text-black absolute top-3 right-3 bg-white rounded-2xl "
                  />
                </a>
              </div>
              <div className=" rounded-xl  ">
                <p className="text-white font-bold m-1">
                  Mini Projects Collection: 🚀
                </p>
                <p className="text-[11px] text-white ">
                  🧮 Calculator, ⏰ Clock, 💱 Currency Converter, 💰 Expense
                  Tracker, ✅ Form Validation, 🎮 Jump Game, 🖼️ Image Slider, 📝
                  Note App, 🧠 Quote Generator, 🍲 Recipe Search, ✊🖐✌ Rock
                  Paper Scissors, ❌⭕ Tic Tac Toe, 🔔 Toast Notification.
                  <br></br>
                  <span className="text-red-200">Tech:</span>
                  <span className="font-bold m-2">Html,Css and javascript</span>
                </p>
              </div>
            </motion.div>
          </Tilt>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
