/* eslint-disable @typescript-eslint/no-unused-vars */
import { promises as fs } from 'fs';
import styles from './mutual_servers.module.css';
import { JSX } from 'react';
import Link from 'next/link';

export default async function MutualServers() {
    const server_data: ServerEntry[] = JSON.parse(await fs.readFile(process.cwd() + '/public/server_data.json', 'utf-8'))

    const data = server_data.map(entry => Category(entry))

    return (
        <div className={["body-content", "padding-bottom", styles.box_height].join(" ")}>
            {data}
        </div>
    )
}


//todo!("split off for the Mutual_Friends page");
function Category(data: ServerEntry) {
    const category_entries = data.entries.map(entry => ServerEntry(entry))
    
    if(data.category == "" || data.category == "none".toLowerCase()) {
        return (
            <div key="none-category">{category_entries}</div>
            
        )
    }
    else {
        return (
            <div key={data.category}>
                <details open={data.open}>
                    <summary className={styles.category_entry}>{data.category}</summary>
                    {category_entries}
                </details>
            </div>
        )
    }
}

function ServerEntry(data: ServerDetails) {
    return(
        <Link className={styles.server_entry} key={data.name} href={data.link} >
            <img className={styles.entry_img} src={data.img_path}/>
            <p>{data.name}</p>
        </Link>
    )
}

interface ServerEntry {
    category: string,
    open: boolean,
    entries: ServerDetails[],
    img_path?: string
}

interface ServerDetails {
    img_path: string,
    name: string,
    link: string
}