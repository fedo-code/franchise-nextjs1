import React from "react";

export default function FranchiseResearch() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] p-3.75 font-sans">
      <div className="max-w-300 mx-auto w-full px-4 sm:px-2">
        <h2
          className="
            font-bold tracking-tight mb-7 leading-none
            wrap-break-word
            text-[24px] sm:text-[18px] xs:text-[15px]
            [@media(max-width:180px)]:text-[13px]
            [@media(max-width:160px)]:text-[11px]
            [@media(max-width:180px)]:text-center
          "
          style={{
            letterSpacing: 0,
            fontSize: "clamp(11px, 6vw, 24px)",
          }}
        >
          FRANCHISE RESEARCH
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 mb-10 lg:items-start lg:justify-between">
          {/* Left Image Box */}
          <div className="shrink-0 flex items-start">
            <div
              className="
                bg-[#D9D9D9] rounded-md
                w-[320px] h-55 min-w-30 max-w-[320px]
                overflow-hidden box-border
                [@media(max-width:172px)]:w-full
                [@media(max-width:172px)]:max-w-full
                [@media(max-width:172px)]:min-w-0
                [@media(max-width:172px)]:h-25
                [@media(max-width:172px)]:min-h-20
                [@media(max-width:172px)]:mx-auto
              "
            />
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
            className={`
              flex flex-col w-full
              lg:max-w-85 lg:min-w-50 lg:h-55 lg:max-h-55 lg:overflow-y-auto
              lg:scrollbar-thin lg:scrollbar-thumb-[#bdbdbd] lg:scrollbar-track-[#eeeeee]
              min-w-0
            `}
          >
            {/* Sidebar Item 1 */}
            <div className="flex flex-row min-w-0 items-start gap-4 py-3 [@media(max-width:244px)]:flex-col">
              <div className="bg-[#D9D9D9] rounded-sm w-20 h-14 shrink-0 mx-auto [@media(max-width:244px)]:mb-2" />
              <div
                className="
                  text-[15px] sm:text-[14px] xs:text-[12px] xxs:text-[11px]
                  text-[#444] font-normal leading-snug flex-1 min-w-0 wrap-break-word whitespace-normal
                  ml-2
                "
                style={{
                  fontSize: "clamp(11px, 4vw, 15px)",
                  lineHeight: "1.1",
                }}
              >
                How to Buy a Franchise: <br /> What Is an FDD?
              </div>
            </div>
            <hr className="border-[#BDBDBD] my-0 w-full" />
            {/* Sidebar Item 2 */}
            <div className="flex flex-row min-w-0 items-start gap-4 py-3 [@media(max-width:244px)]:flex-col">
              <div className="bg-[#D9D9D9] rounded-sm w-20 h-14 shrink-0 mx-auto [@media(max-width:244px)]:mb-2" />
              <div
                className="
                  text-[15px] sm:text-[14px] xs:text-[12px] xxs:text-[11px]
                  text-[#444] font-normal leading-snug flex-1 min-w-0 wrap-break-word whitespace-normal
                  ml-2
                "
                style={{
                  fontSize: "clamp(11px, 4vw, 15px)",
                  lineHeight: "1.1",
                }}
              >
                How to Buy a Franchise: <br /> The Benefits of Joining a...
              </div>
            </div>
            <hr className="border-[#BDBDBD] my-0 w-full" />
            {/* Sidebar Item 3 */}
            <div className="flex flex-row min-w-0 items-start gap-4 py-3 [@media(max-width:244px)]:flex-col">
              <div className="bg-[#D9D9D9] rounded-sm w-20 h-14 shrink-0 mx-auto [@media(max-width:244px)]:mb-2" />
              <div
                className="
                  text-[15px] sm:text-[14px] xs:text-[12px] xxs:text-[11px]
                  text-[#444] font-normal leading-snug flex-1 min-w-0 wrap-break-word whitespace-normal
                  ml-2
                "
                style={{
                  fontSize: "clamp(11px, 4vw, 15px)",
                  lineHeight: "1.1",
                }}
              >
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
    </div>
  );
}
