"use client";

import Image from "next/image";
import NavigationLink from "../../shared/navigation-link";

function FunRaceHero() {
  return (
    <section className="relative flex items-end text-white bg-black h-full min-h-70vh">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Fun Race"
        src={"/images/crousal/img5.jpg"}
        height={694}
        width={1800}
      />

      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 container text-left">
        <div className="flex flex-col gap-6 Xxl:pb-20 pb-10">
          <div className="flex items-start gap-2 md:gap-6">
            <div className="w-11 h-11 flex-shrink-0">
              <Image
                src={"/images/Icon/primary-leaf.svg"}
                alt="icon"
                width={44}
                height={44}
                className="animate-spin"
              />
            </div>
            <p className="text-white/70 max-w-md">
              Perfect for{" "}
              <span className="text-primary">families and kids</span>
              to experience the joy of running together.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-4">
            <h1 className="large-heading">Fun Race</h1>
            <div>
              <NavigationLink
                navigationTitle=""
                navigationLink="/fun-race"
                transform={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FunRaceHero;
