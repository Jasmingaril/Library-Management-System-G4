import Hamburgermenu from "../wadwadaw/hamburgermenu";


import { Zen_Kaku_Gothic_New } from "next/font/google";
const zenKakuGothicNewFont = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-zenkakugothic"
});


export default function Header() {
  return (
    <header className="inset-x-0 fixed top-0 z-10 border-b border-black/5 shadow-xl">
      <div className={`${zenKakuGothicNewFont.variable}`}>
        <div className="bg-[rgb(30,32,46)] flex h-14 items-center justify-between gap-8 px-4 py-[24px]sm:px-6 ">
          <div className="flex justify-start items-center gap-2">
            <a href="" className="text-white font-bold focus:outline-none font-zenkakugothic">Novelry</a>
            {/*FIX THIS LOGO ANCHOR TAG WITH CAPS LOGO DIVS */}
          </div>
          <Hamburgermenu />
        </div>
      </div>
    </header>
  );
}