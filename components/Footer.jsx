import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 w-full bg-[#617d4f] border-t-2">
      <div className="container flex justify-center mx-auto">
        <div className="flex flex-col items-center">
          <span className="font-semibold text-white text-center">
            © 2023 RRS. All Rights Reserved.
          </span>
          <div className="flex gap-5 text-[12px] text-slate-300">
            <span>
              <a
                href="https://www.freepik.com/icon/quran_9958461"
                target="_blank"
              >
                Icon by Freepik
              </a>
            </span>
            <span className="text-center">
              API by{" "}
              <a href="https://equran.id/apidev" target="_blank">
                Equran.id
              </a>{" "}
              and{" "}
              <a href="https://fathimah.docs.apiary.io/" target="_blank">
                API Fatimah
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
