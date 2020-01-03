import React from "react";

function App() {
  return (
    <div className="md:p-8 h-screen flex justify-center">
      <div className="flex justify-center w-full setMaxWidth">
        <div className="hidden md:block md:w-4/5 md:border md:border-black">
          <div className="md:w-5/6 w-full flex flex-col justify-center items-center relative top-50 left-50 transformCenter">
            <p className="md:text-normal">Front-end Developer</p>
            <h1 className="md:text-3xl">Nelson Frank</h1>
            <span className="md:text-normal">
              Follow{" "}
              <a
                href="https://twitter.com/nelsonfrank78"
                target="_blank"
                rel="noopener noreferrer"
              >
                @nelsonfrank
              </a>
            </span>
          </div>
        </div>
        <div className="bg-black flex flex-col justify-end pb-8 ">
          <div className="w-5/6 mx-auto pt-16 ">
            <div className="pt-12">
              <input
                type="number"
                className="text-4xl w-full bg-black outline-none textBoxRemoveCaret changeTextDirection"
              />
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-between items-center w-5/6 mt-2">
                  <button className="text-white text-3xl focus:outline-none rounded-lg p-2">
                    %
                  </button>
                  <button className="text-white text-3xl focus:outline-none rounded-lg p-2">
                    C
                  </button>
                  <button className="text-white text-3xl focus:outline-none rounded-lg p-2">
                    -
                  </button>
                  <button className="text-white text-3xl focus:outline-none rounded-lg p-2">
                    +
                  </button>
                </div>
                <div className="flex justify-between items-center w-5/6 mt-2">
                  <button className="text-white text-3xl focus:outline-none rounded-lg p-2">
                    9
                  </button>
                  <button className="text-white text-3xl focus:outline-none rounded-lg p-2">
                    8
                  </button>
                  <button className="text-white text-3xl focus:outline-none rounded-lg p-2">
                    7
                  </button>
                  <button className="text-white text-3xl focus:outline-none rounded-lg p-2">
                    /
                  </button>
                </div>
                <div className="flex justify-between items-center w-5/6 mt-2">
                  <button className="text-white text-3xl focus:outline-none rounded-lg p-2">
                    4
                  </button>
                  <button className="text-white text-3xl focus:outline-none rounded-lg p-2">
                    5
                  </button>
                  <button className="text-white text-3xl focus:outline-none rounded-lg p-2">
                    6
                  </button>
                  <button className="text-white text-3xl focus:outline-none rounded-lg p-2">
                    -
                  </button>
                </div>
                <div className="flex justify-between items-center w-5/6 mt-2">
                  <button className="text-white text-3xl focus:outline-none rounded-lg p-2">
                    1
                  </button>
                  <button className="text-white text-3xl focus:outline-none rounded-lg p-2">
                    2
                  </button>
                  <button className="text-white text-3xl focus:outline-none rounded-lg p-2">
                    3
                  </button>
                  <button className="text-white text-3xl focus:outline-none rounded-lg p-2">
                    !
                  </button>
                </div>
                <div className="flex justify-between items-center w-5/6 mt-2">
                  <button className="text-white text-3xl focus:outline-none rounded-lg p-2">
                    0
                  </button>
                  <button className="text-white text-3xl focus:outline-none rounded-lg p-2">
                    ^
                  </button>
                  <button className="text-white text-3xl focus:outline-none rounded-lg p-2">
                    .
                  </button>
                  <button className="text-white text-3xl focus:outline-none rounded-lg p-2">
                    =
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
