import React from "react";

function ShipCard() {
    return (
    <div>
      <div className="flex-row bg-white rounded-xl w-[70vw] py-8 h-auto shadow-[0px_4px_16px_rgba(17,34,17,0.05)] transition:origin-center hover:ease-in-out hover:scale-105 transition:duration-1000 transition-transform">
        <div className="text-[#112211] flex items-center md:gap-5 gap-16 mx-auto py-auto md:px-8 px-10 text-center w-full xs:flex-col xs:py-2 xs:gap-y-3">
          <div className="ms:hidden">
            <img
              src="https://t4.ftcdn.net/jpg/02/28/13/53/360_F_228135369_EWQJsS9TEskImi51e5AxpEsYsonOIBMM.jpg"
              alt="ship-logo"
              className="w-28 mb-4"
            />{" "}
            <p className="text-[#112211] text-sm">945</p>
          </div>
          <div className="w-full">
            <div className="flex justify-between">
              <div className="text-start">
                <p className="font-semibold">M V BHARAT SEEMA</p>
                <p>Tue Aug 08 2023</p>
              </div>
              <div className="ms:block hidden text-end">
                <p className="font-semibold">₹ 410</p>
                <p>1 Seat</p>
              </div>
              <div className="ms:hidden flex flex-col items-end gap-4">
                <p>
                  Starting from{" "}
                  <span className="block text-right text-[#425D97] text-xl font-bold">
                    ₹ 410
                  </span>{" "}
                </p>
                <p>1day </p>
              </div>
            </div>
            <hr className="ms:block hidden my-3" />
            <div className="text-sm text-[#0c838a] ms:block hidden ml-8 ms:ml-0">
              Direct
            </div>
            <div className="flex justify-between items-center">
              <div className="ms:block hidden text-start">
                <div>
                  <span className="text-[3.72vw]">Car Nicobar</span>
                </div>
              </div>
              <div className="ms:hidden">
                <div>
                  <span className="font-bold">12:00pm</span>
                  <span className="ml-2">Car Nicobar</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 ms:hidden">
                <span>
                  {" "}
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAwCAYAAACIYEHdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATrSURBVHgB7Z1LVtxGFIZvgwdwDjR4lowidgAriFhB2iugPUtG4GFGtIcZhazA9AqCV+D2CtyZJSPkYUYWYgLn8Mh/RakpVUqPfhlh/d85stBVlcTBf1/dqntLLUIIIYQ0js3NzYOtra0v2O6t7RPsfSFflY6Q2kCk59gFBaejTqezH8dxJGTprAiZhu2Sc8H9/f2HbSBk6awKqc36+vq/2O1KsYC3Id5rMBJCmgqca4Dt1Il5PwhZOoxx50RDA3jZL7bt4uKCf9clwxh3TjAYi4V8dShc8iyhcMmzhMIlzxIOImqgA7C7u7tDJBhCHIYyP2MM6MYrKytvmbCYDQq3Ap3y0sSCFGfM5kGzba8g3rGQqaBwK6hI8y6CGOLdo+edDsa4JcDb9mW5ok1vA4/+u5CpoMctQSu/5CHFmwLPOMTuaN65W3wgBhDrsWVSr7vDOeH6ULglaArXPjbiimQB4NoRdj9kxxDymyRJToTUgqHCFGSitepyz/Xn7Pw0dgj11L42PhQ/CakNPW4JrsfNahCcAVsM+8tp7b4aB4j3JcOFetDjzoZd1hjPYjcCHVl2wVzxkZBaZMINsb3DpjFWIKQUeMY32EXyMKh6O6sdHve9c90DIT5CcfTZMT+cOw33xfEGbaQoVFgUJlzQv/3EI5vlPyMhGYF49PkC//geTzqv+F6enoF8w2i4gA+HZs3CzIZwoSfNcRoDeXp+9NgOVLi+ZSitGyBY9Qj6QfYuzXE98DLA/Q9xn0PHHMMzn7W0tsH3f5E++kJs7nKTHXmIyVqDm2xoKJFJD7fJsYTi0aculoywaUZIRfwPNh1ItKrow6R2f5bm08bFmJF49Ml5XNDtds+eUQIgwiBxR1rOCyFK7tGLWPf15eXlqTQAfRrAy76zTExQCBMQGTkxwPs2JtZ1inH0mLW7QuGmYLTuimHL124RNQpldhdfWaXOLAhhrYICgezCk32yTGPEkXtuu0XUKJTZPffT0XSYHWthTpIkr4XQ4xrcuDEoaDd3jUKFfcLGxkYozvo2ettHKFyZlCvmhLW2tha47RZVo1Bkt4FI+/axelsu73mEoYLBs9ph76kWMZoFmrn8PGsY8tDjGiCUv+zj29vbJ5tZwHTcwDF9pGjzULiPNGJKTL2tW94IIZ8KyUHhGupOiS0bj7eNmpIMaRKMcQ2eKTGbkQ6i6jyudTYAH4KeSSEHxjyGIP+oEqAvts3uj/5DCvgRCtdQIpoJEE8f4hmW9Nc65l7JJUaYs90vOtntdo8h+EFxd37PRAZDBZmI7s+qdvCkJ9rWtUNwR8Zb9youEaLtwDWql9ZkQ4Volex7JgJpOa33uCqa1dVVFe12zS5aSZZmr25ubnbRV2sJQqlP+sol3c/YXyn13G2g1R4XnqsH4Wha1RVtmhjQ5eImWWDT02Xlupm+oefSH/WRbvprCWIuuaEhSUV/+/7a/8w5r5671SuCW+1xfS+0871mya0ZKCE2g7gT26jhAezHUo/Uo7urHDy/Q6vrctse4+Y8rRFd3xWNCQ2iimudmWzb/16jlCTJQKoXQKZeGmJ85Vuao68jFdbiTmj195xZ31umwvjFJzrl6uoqRtsh2mj777F9Z059xiN/iEHbrxDcb9qu6F7X19dDXOOzPKzn8/UfoH9U1B/nrtzfF6a/hRBCCFkq/wHwglz27c4avgAAAABJRU5ErkJggg=="
                    className="w-full md:h-8 h-12"
                    alt="shipIcon"
                  />{" "}
                </span>
                <span className="text-sm text-[#0c838a]">Direct</span>
              </div>
              <div className="ms:flex hidden items-center text-[#FF8682]">
                <span className="border border-[#FF8682] border-dashed w-[11vw]"></span>
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 4H14.4458C14.7905 4 15.111 4.17762 15.2938 4.47L18.75 10H23.1577C23.4339 10 23.6577 10.2239 23.6577 10.5C23.6577 10.5837 23.6367 10.666 23.5967 10.7394L19.6364 18H19C18.4694 18 17.9548 17.9311 17.4648 17.8018L20.63 12H3.4L4.44833 17.824C3.9845 17.939 3.49937 18 3 18H2.45455L1.21434 11.1789C1.11555 10.6355 1.47595 10.1149 2.01933 10.0161C2.07835 10.0054 2.13822 10 2.19821 10H3V5C3 4.44772 3.44772 4 4 4H5V1H9V4ZM5 10H16.3915L13.8915 6H5V10ZM3 20C4.53671 20 5.93849 19.4223 7 18.4722C8.06151 19.4223 9.46329 20 11 20C12.5367 20 13.9385 19.4223 15 18.4722C16.0615 19.4223 17.4633 20 19 20H21V22H19C17.5429 22 16.1767 21.6104 15 20.9297C13.8233 21.6104 12.4571 22 11 22C9.54285 22 8.17669 21.6104 7 20.9297C5.82331 21.6104 4.45715 22 3 22H1V20H3Z"></path>
                  </svg>
                </span>
                <span className="border border-[#FF8682] border-dashed w-[11vw]"></span>
              </div>
              <div className="ms:block hidden">
                <span className="text-[3.72vw]">Port Blair</span>
              </div>
              <div className="ms:hidden">
                <span className="font-bold">06:00am</span>
                <span className="ml-2">Port Blair</span>
              </div>
            </div>
            <div className="ms:flex justify-between items-center mt-3 hidden">
              <div className="font-bold text-[#BDBDC2]">12:00pm</div>
              <div className="font-bold">1day</div>
              <div className="font-bold text-[#BDBDC2]">06:00am</div>
            </div>
            <a className="ms:hidden flex justify-end mt-3" >
              <button className="bg-blue-400 font-semibold rounded p-[8px_16px]">
                Book Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShipCard;
