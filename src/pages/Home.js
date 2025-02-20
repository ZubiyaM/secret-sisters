import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [names, setNames] = useState("");
  const [links, setLinks] = useState([]);
//   const navigate = useNavigate();

  const generateSecretSister = () => {
    let namesArray = names.split("\n").map(name => name.trim()).filter(name => name);
    if (namesArray.length < 2) return alert("Need at least two participants!");

    let shuffled = [...namesArray];
    for (let i = shuffled.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    let pairs = {};
    for (let i = 0; i < namesArray.length; i++) {
      pairs[namesArray[i]] = shuffled[(i + 1) % namesArray.length];
    }

    localStorage.setItem("secretSisterPairs", JSON.stringify(pairs));

    let generatedLinks = namesArray.map(name => ({
      name,
      url: `/reveal?name=${encodeURIComponent(name)}`
    }));

    setLinks(generatedLinks);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <h2 className="text-3xl font-bold">Secret Sister Generator </h2>
      <textarea
        className="border p-3 w-80 h-40 rounded-lg mt-4"
        placeholder="Enter names, one per line"
        value={names}
        onChange={(e) => setNames(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-5 py-2 rounded-lg mt-4" onClick={generateSecretSister}>
        Generate Secret Sister
      </button>
      <div className="mt-5">
        {links.map(({ name, url }) => (
          <p key={name}>
            {name}: <a href={url} className="text-blue-600 underline">{url}</a>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Home;
