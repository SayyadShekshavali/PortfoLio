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
          <p className="text-left -mt-4 lg:mt-0  lg:w-180 lg:ml-17">
            I am currently pursuing a Bachelor of Computer Applications (BCA),
            where I am building a strong foundation in programming,
            problem-solving, and both frontend and backend technologies to shape
            a successful career in the tech industry. I have completed a
            comprehensive MERN stack course on Udemy, gaining hands-on
            experience with MongoDB, Express.js, React, and Node.js. Currently,
            I’m applying this knowledge by working on real-world projects to
            deepen my practical understanding.
          </p>

          <div className="lg:ml-19 text-left lg:w-180">
            In addition, I am actively learning Data Structures and Algorithms
            (DSA) using Java to strengthen my core problem-solving skills. I
            have solved over 160+ LeetCode problems as part of various LeetCode
            batches, which has further enhanced my analytical and coding
            abilities. I am passionate about turning innovative ideas into
            impactful applications through technology.
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Aboutme;
