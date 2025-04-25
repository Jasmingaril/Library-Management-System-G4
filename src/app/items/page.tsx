import Image from "next/image";
import { Geologica } from "next/font/google";
import Header from "../components/Header";
const geologica = Geologica({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-geologica",
});




export default function Manga(){
    return(
    <>
      <Header />
      {/*ITEMS HERE */}
      <div className="flex bg-white rounded-2xls">
        <div className="flex justify-start p-20">
          <ul className="grid grid-cols-2 gap-4 pb-[10px] m-10 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
            <div className="border border-black bg-white px-4 shadow-xl rounded">
              <a href="" className="px-[10px] pt-[10px]">
                <div className="bg-blue-900 ">
                  <figure className="">
                    <div className="">
                      <Image
                        src="/bluebox.jpg"
                        alt="bluebox image"
                        width={600}
                        height={500}
                      />
                    </div>
                  </figure>
                </div>
                <div className={`${geologica.variable} pt-[10px] bg-white`}>
                  <div className="bg-white py-[7px]"></div>
                  <p className="font-bold leading-tight font-geologica">
                    Blue Box Vol. 2
                  </p>
                  <div className="bg-white py-[7px]"></div>
                  <div className="text-sm text-gray-500 font-geologica">
                    Kouji Miura
                  </div>
                </div>
              </a>
            </div>






            <div className="border border-black bg-white px-4 shadow-xl rounded">
              <a href="" className="px-[10px] pt-[10px]">
                <div className="bg-blue-900 ">
                  <figure className="">
                    <div className="">
                      <Image
                        src="/bluebox.jpg"
                        alt="bluebox image"
                        width={600}
                        height={500}
                      />
                    </div>
                  </figure>
                </div>
                <div className={`${geologica.variable} pt-[10px] bg-white`}>
                  <div className="bg-white py-[7px]"></div>
                  <p className="font-bold leading-tight font-geologica">
                    Blue Box Vol. 2
                  </p>
                  <div className="bg-white py-[7px]"></div>
                  <div className="text-sm text-gray-500 font-geologica">
                    Kouji Miura
                  </div>
                </div>
              </a>
            </div>












            <div className="border border-black bg-white px-4 shadow-xl rounded">
              <a href="" className="px-[10px] pt-[10px]">
                <div className="bg-blue-900 ">
                  <figure className="">
                    <div className="">
                      <Image
                        src="/bluebox.jpg"
                        alt="bluebox image"
                        width={600}
                        height={500}
                      />
                    </div>
                  </figure>
                </div>
                <div className={`${geologica.variable} pt-[10px] bg-white`}>
                  <div className="bg-white py-[7px]"></div>
                  <p className="font-bold leading-tight font-geologica">
                    Blue Box Vol. 2
                  </p>
                  <div className="bg-white py-[7px]"></div>
                  <div className="text-sm text-gray-500 font-geologica">
                    Kouji Miura
                  </div>
                </div>
              </a>
            </div>











            <div className="border border-black bg-white px-4 shadow-xl rounded">
              <a href="" className="px-[10px] pt-[10px]">
                <div className="bg-blue-900 ">
                  <figure className="">
                    <div className="">
                      <Image
                        src="/bluebox.jpg"
                        alt="bluebox image"
                        width={600}
                        height={500}
                      />
                    </div>
                  </figure>
                </div>
                <div className={`${geologica.variable} pt-[10px] bg-white`}>
                  <div className="bg-white py-[7px]"></div>
                  <p className="font-bold leading-tight font-geologica">
                    Blue Box Vol. 2
                  </p>
                  <div className="bg-white py-[7px]"></div>
                  <div className="text-sm text-gray-500 font-geologica">
                    Kouji Miura
                  </div>
                </div>
              </a>
            </div>












            <div className="border border-black bg-white px-4 shadow-xl rounded">

              
              <a href="" className="px-[10px] pt-[10px]">
                <div className="bg-blue-900 ">
                  <figure className="">
                    <div className="">
                      <Image
                        src="/bluebox.jpg"
                        alt="bluebox image"
                        width={600}
                        height={500}
                      />
                    </div>
                  </figure>
                </div>
                <div className={`${geologica.variable} pt-[10px] bg-white`}>
                  <div className="bg-white py-[7px]"></div>
                  <p className="font-bold leading-tight font-geologica">
                    Blue Box Vol. 2
                  </p>
                  <div className="bg-white py-[7px]"></div>
                  <div className="text-sm text-gray-500 font-geologica">
                    Kouji Miura
                  </div>
                </div>
              </a>
            </div>














            <div className="border border-black bg-white px-4 shadow-xl rounded">
              <a href="" className="px-[10px] pt-[10px]">
                <div className="bg-blue-900 ">
                  <figure className="">
                    <div className="">
                      <Image
                        src="/bluebox.jpg"
                        alt="bluebox image"
                        width={600}
                        height={500}
                      />
                    </div>
                  </figure>
                </div>
                <div className={`${geologica.variable} pt-[10px] bg-white`}>
                  <div className="bg-white py-[7px]"></div>
                  <p className="font-bold leading-tight font-geologica">
                    Blue Box Vol. 2
                  </p>
                  <div className="bg-white py-[7px]"></div>
                  <div className="text-sm text-gray-500 font-geologica">
                    Kouji Miura
                  </div>
                </div>
              </a>
            </div>
          </ul>
        </div>
      </div> 
    </>
    );
}