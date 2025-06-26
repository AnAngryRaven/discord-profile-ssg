import { promises as fs } from 'fs';
import styles from './mutual_servers.module.css';
import { JSX } from 'react';

export default async function MutualServers() {
    const server_data = JSON.parse(await fs.readFile(process.cwd() + '/public/server_data.json', 'utf-8'))

    return (
        <></>
    )
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
//interface ServerData {}