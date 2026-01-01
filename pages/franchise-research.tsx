import React from "react";

export default function FranchiseResearch() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] p-3.75 font-sans">
      <div className="max-w-300 mx-auto custom-responsive-width">
        <h2
          className="text-[24px] font-bold tracking-tight mb-7 leading-none"
          style={{ letterSpacing: 0 }}
        >
          FRANCHISE RESEARCH
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 mb-10 lg:items-start lg:justify-between">
          {/* Left Image Box */}
          <div className="shrink-0 flex items-start">
            <div className="bg-[#D9D9D9] rounded-md w-[320px] h-55 min-w-30 max-w-[320px]" />
          </div>
          {/* Middle Content */}
          <div className="flex-1 flex flex-col justify-start min-w-0 wrap-break-word">
            <div className="text-[20px] font-normal mb-2 leading-[1.2]">
              Torem ipsum dolor sit
              <br />
              amet
            </div>
            <div className="text-[16px] text-[#444] mb-4 leading-normal">
              v Class aptent taciti sociosqu
              <br />
              ad litora torquent per
              <br />
              conubia nostra, per inceptos
              <br />
              himenaeos.
            </div>
            <div className="text-[16px] text-[#444] leading-normal">
              Read more on 1851 &gt;
            </div>
          </div>
          {/* Sidebar */}
          <div
            className="flex flex-col w-full custom-scrollbar lg:max-w-85 lg:min-w-50 lg:self-start"
            style={{
              height: "auto",
              maxHeight: "none",
              scrollbarWidth: "thin",
              scrollbarColor: "#BDBDBD #EEEEEE",
            }}
          >
            {/* Sidebar Item 1 */}
            <div className="flex items-start gap-4 py-3">
              <div className="bg-[#D9D9D9] rounded-sm w-20 h-14 shrink-0" />
              <div className="sidebar-text text-[15px] sm:text-[16px] text-[#444] font-normal leading-snug flex items-center"
                style={{ wordBreak: "break-word", whiteSpace: "normal" }}>
                How to Buy a Franchise: <br /> What Is an FDD?
              </div>
            </div>
            <hr className="border-[#BDBDBD] my-0 w-full" />
            {/* Sidebar Item 2 */}
            <div className="flex items-start gap-4 py-3">
              <div className="bg-[#D9D9D9] rounded-sm w-20 h-14 shrink-0" />
              <div className="sidebar-text text-[15px] sm:text-[16px] text-[#444] font-normal leading-snug flex items-center"
                style={{ wordBreak: "break-word", whiteSpace: "normal" }}>
                How to Buy a Franchise: <br /> The Benefits of Joining a...
              </div>
            </div>
            <hr className="border-[#BDBDBD] my-0 w-full" />
            {/* Sidebar Item 3 */}
            <div className="flex items-start gap-4 py-3">
              <div className="bg-[#D9D9D9] rounded-sm w-20 h-14 shrink-0" />
              <div className="sidebar-text text-[15px] sm:text-[16px] text-[#444] font-normal leading-snug flex items-center"
                style={{ wordBreak: "break-word", whiteSpace: "normal" }}>
                How to Buy a Franchise: <br />
                Exploring Item 19 of the <br />
                FDD
              </div>
            </div>
          </div>
        </div>
        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="flex flex-col">
              <div className="bg-[#D9D9D9] rounded-md w-full aspect-[1.5/1] mb-2" />
              <div className="text-[14px] mb-1 leading-snug">
                Torem ipsum dolor sit amet, consectetur adipiscing elit, nostra,
                per inceptos himenaeos.
              </div>
              <div className="text-[13px] text-[#888] leading-tight">
                Read more on 1851 &gt;
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        /* Always show scrollbar on large screens, hide on small screens */
        @media (min-width: 1024px) {
          .custom-scrollbar {
            height: 220px !important;
            max-height: 220px !important;
            overflow-y: auto !important;
            max-width: 340px !important;
            min-width: 200px !important;
          }
        }
        @media (max-width: 1023px) {
          .custom-scrollbar {
            height: auto !important;
            max-height: none !important;
            min-width: 0 !important;
            width: 100% !important;
            overflow-y: visible !important;
          }
        }
        /* Responsive font for sidebar text */
        .sidebar-text {
          font-size: 15px;
          line-height: 1.3;
          word-break: break-word;
          white-space: normal;
        }
        @media (max-width: 207px) {
          .sidebar-text {
            font-size: 12.5px;
            line-height: 1.05;
          }
        }
        @media (max-width: 170px) {
          .sidebar-text {
            font-size: 11.5px;
            line-height: 1.01;
          }
        }
        @media (max-width: 175px) {
          h2 {
            font-size: 18px !important;
          }
        }
        @media (max-width: 150px) {
          h2 {
            font-size: 15px !important;
          }
        }
        @media (max-width: 150px) {
          .sidebar-text {
            font-size: 10.5px;
            line-height: 1;
          }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          background: #eeeeee;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #bdbdbd;
          border-radius: 8px;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #bdbdbd #eeeeee;
        }
        /* Remove scrollbars for all browsers on <=1023px */
        @media (max-width: 1023px) {
          .custom-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
          .custom-scrollbar::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
        }
      `}</style>
    </div>
  );
}
