export const metadata = {
  title: "About | Programmers Discussion Hub",
  description: "Learn more about Programmers Discussion Hub",
};
const about = () => {
  return (
    <>
      <div className=" dark:text-white flex">
        <div className=" relative w-full">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45"
            style={{ backgroundImage: "url('/about-img.jpg')" }}
          ></div>
          <div
            className="absolute inset-0 bg-slate-400 dark:bg-slate-950
bg-opacity-50 dark:bg-opacity-80"
          ></div>
          {/* content */}
          <div className=" dark:text-white max-w-4xl mx-10 lg:mx-auto p-6 text-gray-800 relative flex flex-col h-full md:mt-5 py-12 px-4 ">
            <h1 className=" text-2xl lg:text-4xl font-bold mb-6 text-center">
              About Us
            </h1>

            <p className=" text-base md:text-lg mb-8 text-center">
              Welcome to{" "}
              <span className="font-semibold text-[#274370] dark:text-[#a4c7f7]">
                Programmers Discussion Hub
              </span>
              , your one-stop hub for programming enthusiasts! Whether you are a
              beginner exploring JavaScript or a seasoned developer tackling
              Rust, our platform is designed to support your learning and
              collaboration journey.
            </p>

            <h2 className=" text-xl lg:text-2xl font-semibold mb-4">
              What We Offer
            </h2>
            <ul className="list-disc pl-6 mb-8 space-y-2  md:text-base">
              <li>
                <strong>Real-Time Discussions:</strong> Join active groups for
                every major programming language — JavaScript, Python, Java,
                TypeScript, and more.
              </li>
              <li>
                <strong>Mock Quizzes:</strong> Practice with language-specific
                quizzes tailored for both beginners and advanced learners.
                Questions refresh every time for a unique experience.
              </li>
              <li>
                <strong>Learn Together:</strong> Ask questions, share knowledge,
                and grow with a community that loves coding as much as you do.
              </li>
              <li>
                <strong>Private Groups:</strong> Create private discussions with
                invite-only access for focused learning or team collaboration.
              </li>
            </ul>

            <h2 className=" text-xl lg:text-2xl font-semibold mb-4">
              Why We Built This
            </h2>
            <p className=" md:text-base mb-8">
              We believe in{" "}
              <span className="font-semibold">collaborative learning</span>.
              Coding should not be a lonely road. By bringing together students,
              professionals, and hobbyists, we aim to create a supportive and
              engaging space to help you level up — one conversation at a time.
            </p>

            <h2 className="text-xl lg:text-2xl font-semibold mb-4">Join Us</h2>
            <p className="text-base">
              Ready to learn, share, and code together? <br />
              Create an account, pick your favorite language, and start
              exploring!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
