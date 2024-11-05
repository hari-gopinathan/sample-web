import { NextRequest, NextResponse } from "next/server";
import data from "../data.json" with { type: "json" };

type RouteParams = { params: Promise<{ dinosaur: string }> };

export const GET = async (request: NextRequest, { params }: RouteParams) =>{
    const { dinosaur } = await params;
    if(!dinosaur) return NextResponse.json({ error: "Dinosaur name not provided" }, { status: 404 });
    const dinosaurData = data.find((d) => d.name.toLowerCase() === dinosaur.toLowerCase());

    if(!dinosaurData) return NextResponse.json({ error: "Dinosaur not found" }, { status: 404 });
    return NextResponse.json(dinosaurData);
}