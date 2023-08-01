import React from "react";
import Link from "next/link";
const page = () => {
  const myarray = ["mandeep", "komal", "deep"];
  return (
    <>
      {myarray.map((element) => {
        return <Link href={`/studentlist/${element}`}>{element}</Link>;
      })}
    </>
  );
};

export default page;
