import React from "react";
import amimg from "../assets/amimg.jpg";
import { motion } from "framer-motion";
function Aboutme() {
  return (
    <div id="about" className="my-10">
      <h1>
        About <span className="text-neutral-600">me</span>
      </h1>
      <div className="flex  flex-col mt-10 lg:flex-row border-b-2 border-neutral-900 pb-10 ">
        <div className=" flex  w-full lg:w-1/2 lg:-ml-50 mt-0">
          <motion.img
            whileInView={{ x: 1, opacity: 1 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="  h-60 w-90 ml-0 rounded-2xl lg:ml-65 lg:mt-15 "
            src={amimg}
            alt="heroimg"
          />
        </div>
        <motion.div
          whileInView={{ x: 1, opacity: 1 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full lg:w-1/2 mt-15"
        >
          <p className="text-left -mt-4 lg:mt-0 lg:w-180 lg:ml-17">
            I am currently pursuing my{" "}
            <span className="font-semibold text-emerald-400">
              final year of Bachelor of Computer Applications (BCA)
            </span>{" "}
            at{" "}
            <span className="font-semibold text-cyan-400">
              Omega Business School
            </span>
            , where I have built a strong foundation in{" "}
            <span className="font-semibold text-emerald-400">
              programming, problem-solving
            </span>
            , and modern{" "}
            <span className="font-semibold text-cyan-400">
              frontend and backend technologies
            </span>
            . I have completed a{" "}
            <span className="font-semibold text-emerald-400">
              comprehensive MERN Stack course on Udemy
            </span>
            , gaining hands-on experience with{" "}
            <span className="font-semibold text-cyan-400">
              MongoDB, Express.js, React, and Node.js
            </span>
            . Recently, I’ve applied this knowledge by working on projects such
            as an{" "}
            <span className="font-semibold text-emerald-300 underline underline-offset-4 decoration-2 decoration-emerald-500">
              AI Writing Assistant
            </span>
            ,{" "}
            <span className="font-semibold text-emerald-300 underline underline-offset-4 decoration-2 decoration-emerald-500">
              FarmFresh eCommerce platform
            </span>
            , and{" "}
            <span className="font-semibold text-emerald-300 underline underline-offset-4 decoration-2 decoration-emerald-500">
              ConnectHub chat application
            </span>{" "}
            to deepen my practical understanding.
          </p>

          <div className="lg:ml-19 text-left lg:w-180">
            In addition, I am strengthening my problem-solving abilities through{" "}
            <span className="font-semibold text-cyan-400">
              Data Structures and Algorithms (DSA)
            </span>{" "}
            using <span className="font-semibold text-cyan-400">Java</span> and
            have solved{" "}
            <span className="font-semibold text-emerald-400">
              300+ LeetCode problems
            </span>
            . These challenges have enhanced my{" "}
            <span className="font-semibold text-cyan-300">
              analytical and coding skills
            </span>
            . I am passionate about building{" "}
            <span className="font-semibold text-emerald-400">
              innovative and impactful applications
            </span>{" "}
            and continuously growing as a{" "}
            <span className="font-semibold text-cyan-300">
              software developer
            </span>
            .
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Aboutme;
