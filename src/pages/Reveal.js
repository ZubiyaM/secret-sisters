import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function RevealPage() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const [sister, setSister] = useState(null);

  useEffect(() => {
    const pairs = JSON.parse(localStorage.getItem("secretSisterPairs"));
    if (pairs && pairs[name]) {
      setSister(pairs[name]);
    }
  }, [name]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <h2 className="text-3xl font-bold">Your Secret Sister Assignment </h2>
      <h3 className="text-2xl mt-4">{sister ? `${name}, your Secret Sister is: ${sister} ` : "Invalid or missing data."}</h3>
    </div>
  );
}

export default RevealPage;
