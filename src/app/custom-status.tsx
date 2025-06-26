'use client';

import { useEffect, useState } from "react";


export default function StatusText({emote_path, status_text}: {emote_path?: string, status_text?: string[]}) {
    const [data, setData] = useState("");

    useEffect(() => {
        setData(status_text ? status_text[Math.floor(Math.random() * status_text.length)] : "")
    }, [status_text]);
    //const status: string = status_text ? status_text[Math.floor(Math.random() * status_text.length)] : "";
    return (
        <div className="left-flexbox header-content">
          {emote_path ? <img className="status-emote" src={emote_path}/> : <></>}
          {data ? <p>{data}</p> : <></>}
        </div>
    );
}