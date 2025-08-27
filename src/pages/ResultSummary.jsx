import memory from "../assets/resultSummary/icon-memory.svg";
import reaction from "../assets/resultSummary/icon-reaction.svg";
import verbal from "../assets/resultSummary/icon-verbal.svg";
import visual from "../assets/resultSummary/icon-visual.svg";
import SummaryChip from "../components/SummaryChip";
import { Link } from "react-router-dom";

function ResultSummary() {
  return (
    <div className="min-h-[100vh] w-full grid place-items-center bg-[#ecf2ff] relative">
      <Link
        to="/"
        className="p-2 flex gap-1 items-center absolute top-8 left-0 sm:left-10 hover:cursor-pointer"
      >
        <span class="material-symbols-rounded">arrow_back</span> <p>Back</p>
      </Link>
      <div className="py-10 px-4">
        <div className="flex flex-col md:flex-row bg-white rounded-3xl">
          <div
            className="text-center relative z-10 min-w-[290px] max-w-[300px] bg-white rounded-3xl p-8 text-white"
            style={{
              background: "linear-gradient(to bottom, #6247e5, #3b2fd1)",
            }}
          >
            <h1 className="text-[#f0f6ff] text-lg text-center">Your Result</h1>
            <div
              className="w-fit mx-auto mt-6 p-18 relative grid place-items-center rounded-full bg-[#3f00ff00]"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))",
              }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-5xl font-bold">76</h1>
                <p className="text-[#f0f6ff90] text-xs">of 100</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-6">Great</h2>
            <p className="text-sm text-[#f0f6ff] mt-3">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>

          <div className="rounded-3xl min-w-[290px] max-w-[300px] bg-white p-8">
            <h1 className="font-semibold text-lg text-[#2e3547]">Summary</h1>
            <div className="mt-5 flex flex-col gap-3">
              <SummaryChip img={reaction} category={"Reaction"} score={"80"} />
              <SummaryChip img={memory} category={"Memory"} score={"92"} />
              <SummaryChip img={verbal} category={"Verbal"} score={"61"} />
              <SummaryChip img={visual} category={"Visual"} score={"73"} />
            </div>
            <button className="mt-8 p-3 text-sm bg-[#2e3547] text-white w-full rounded-full hover:[background:linear-gradient(to_bottom,_#6247e5,_#3b2fd1)] hover:cursor-pointer">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultSummary;
