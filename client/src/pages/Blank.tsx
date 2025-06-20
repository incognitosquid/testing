import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const Blank = (): JSX.Element => {
  // Navigation items data
  const navItems = ["Work.", "About.", "Contact."];

  // Portfolio cards data
  const portfolioCards = [
    { id: 1, bgColor: "bg-[#b0aacf]", imgSrc: "", isImage: false },
    { id: 2, bgColor: "", imgSrc: "/figmaAssets/frame-8.svg", isImage: true },
    { id: 3, bgColor: "", imgSrc: "/figmaAssets/frame-9.svg", isImage: true },
    { id: 4, bgColor: "bg-[#daf1bc]", imgSrc: "", isImage: false },
  ];

  return (
    <div className="bg-[#0e0e0e] flex flex-row justify-center w-full">
      <div className="bg-[#0e0e0e] overflow-hidden w-full max-w-[1728px] relative">
        {/* Header Section */}
        <header className="flex justify-between items-center px-16 py-6">
          {/* Logo */}
          <img
            className="w-[89px] h-28"
            alt="Logo"
            src="/figmaAssets/logo.svg"
          />

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="[font-family:'Host_Grotesk',Helvetica] font-black text-[#f2ede9] text-4xl"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            variant="outline"
            className="w-[270px] h-[89px] rounded-[60px] border-[1.5px] border-solid border-[#f2ede9] bg-transparent"
          >
            <span className="[font-family:'Manrope',Helvetica] font-normal text-[#f2ede9] text-[32px]">
              Button
            </span>
          </Button>
        </header>

        <Separator className="w-full h-px bg-[#f2ede9]" />

        {/* Hero Section */}
        <section className="flex justify-between items-center px-16 py-24 mt-16">
          <div className="max-w-[559px]">
            <h1 className="[font-family:'Host_Grotesk',Helvetica] font-black text-[#f2ede9] text-5xl mb-6">
              Hello!
            </h1>
            <p className="[font-family:'Host_Grotesk',Helvetica] font-normal text-[#f2ede9] text-[32px]">
              I&apos;m Kierra, a San Francisco based product designer with 2
              years of experience. I currently work at eBay, where I have both
              shipped elegant and reliable product features/interfaces, as well
              as strategized on big picture discovery-based projects.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              className="w-[372px] h-[558px] object-cover"
              alt="Profile photo"
              src="/figmaAssets/union.png"
            />
          </div>
        </section>

        <Separator className="w-full h-0.5 my-16" />

        {/* Portfolio Grid Section */}
        <section className="px-16 grid grid-cols-2 gap-20">
          {portfolioCards.map((card) => (
            <Card
              key={card.id}
              className={`w-[664px] h-[663px] rounded-2xl ${card.bgColor}`}
            >
              {card.isImage && (
                <img
                  className="w-full h-full"
                  alt="Portfolio item"
                  src={card.imgSrc}
                />
              )}
            </Card>
          ))}
        </section>

        <Separator className="w-full h-0.5 my-16" />

        {/* Display Section */}
        <section className="px-16 pb-24">
          <h2 className="[font-family:'Host_Grotesk',Helvetica] font-black text-[#f2ede9] text-5xl">
            Display
          </h2>
          <h3 className="[font-family:'Host_Grotesk',Helvetica] font-bold text-[#f2ede9] text-4xl mt-6">
            Portfolio Piece
          </h3>
          <p className="[font-family:'Manrope',Helvetica] font-normal text-[#f2ede9] text-xl mt-4 max-w-[559px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </div>
    </div>
  );
};
