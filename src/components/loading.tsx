import { useNavigate } from "react-router-dom";

function Loading() {
  const navigate = useNavigate();
  return (
    <>
      <div className="loading h-screen flex items-center justify-center bg-[#E7C8E7]">
        <div className="h-40 max-w-full md:h-auto md:max-w-full">
          <img
            alt="LifeTrack"
            src="../public/icons/logo.svg"
            className="h-40 max-w-full md:h-auto md:max-w-full mb-7 "
          />
          <button
            className="flex flex-col items-center justify-center w-full bg-[#0D0B33] hover:bg-[#52489F] rounded-lg h-8 md:h-16"
            onClick={() => navigate("/home")}
          >
            <span className="text-[#E7C8E7] font-display text-sm md:text-2xl">
              Track Your Life!
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Loading;
