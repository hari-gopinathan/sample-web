"use client";
import { useState, useEffect } from "react";
import { Dino } from "../types";
import Link from "next/link";

type RouteParams = { params: Promise<{ dinosaur: string }> };

export default function Page({ params }: RouteParams) {
    const selectedDinosaur = params.then((params) => params.dinosaur);
    const [dinosaur, setDino] = useState<Dino>({ name: "", description: "", image: "" });

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/dinosaurs/${await selectedDinosaur}`);
            const data = await res.json() as Dino;
            setDino(data);
        })();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main>
                <h1 className="text-3xl font-bold text-opacity-75 mb-4">{dinosaur.name}</h1>
                <p className="italic text-opacity-80 top-3">{dinosaur.description}</p>
                <div className="mt-8"><Link href="/" className=" bg-teal-100 shadow-sm font-semibold p-3 rounded-sm text-opacity-60"> Back to Home </Link></div>
            </main>
        </div>
    );
}

