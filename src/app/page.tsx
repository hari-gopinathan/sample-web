"use client";

import { useState, useEffect } from "react";
import { Dino } from "./types";
import Link from "next/link";

export default function Home() {
  const [dinosaurs, setDinosaurs] = useState<Dino[]>([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/dinosaurs");
      const data = await res.json() as Dino[];
      setDinosaurs(data);
    })();
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-opacity-50 font-semibold my-3">Dinosaurs</h1>
      <p>Click on a dinosaur below to know more</p>
      <ul className="bx-ul">
        {
          dinosaurs.map((dinosaur: Dino) => {
            return (
              <li key={dinosaur.name}>
                <div className="p-3">
                  <i className={`bx bxs-right-arrow bx-xs`}></i>
                    <Link href={`/${dinosaur.name}`} className=" hover:bg-orange-50 border rounded-md p-2 bg-white shadow">
                    {dinosaur.name}
                  </Link>
                </div>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}


