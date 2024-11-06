"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

type RouteParams = { params: Promise<{ authenticate: string }> };

export default function Page({ params }: RouteParams) {
    return (

        <form action="" className="form-container">
            <div>
                <label htmlFor="authToken">Auth Token</label>
            </div>
            <div>
                <input type="text" name="authToken" id="authToken" />
            </div>
            <div></div>
            <div>
                <button type="button" className="btn-action">Authenticate</button>
            </div>
        </form>

    );
}

