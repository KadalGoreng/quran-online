import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Button = (props) => {
  const { name, url } = props;
  const pathname = usePathname();
  const ayatNumber = pathname.split("/")[3];

  return (
    <Link href={`${url}`}>
      <button className="p-3 bg-slate-200 rounded-md mb-4 hover:bg-slate-300">
        {ayatNumber > url ? (
          <div className="flex items-center gap-2">
            <Image
              src="/leftArrow.svg"
              alt="LeftArrow"
              width={10}
              height={10}
            />
            <span>{name}</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span>{name}</span>
            <Image
              src="/rightArrow.svg"
              alt="rightArrow"
              width={10}
              height={10}
            />
          </div>
        )}
      </button>
    </Link>
  );
};

export default Button;
