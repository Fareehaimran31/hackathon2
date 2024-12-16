import React from "react";
import Image from "next/image";
function Share() {
  return (
    <section>
      <div className="h-auto mt-32 px-6 md:px-16  lg:px-32">
        <p className="text-[32px] font-bold text-center">
          Share your setup with
        </p>
        <p className="text-center text-20 text-customGray">#FuniroFurniture</p>
      </div>
      <div className="">
        <Image
          src="/SetupShare.png"
          alt="setup share"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
    </section>
  );
}

export default Share;
