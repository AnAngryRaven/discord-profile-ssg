import { promises as fs } from 'fs';
import styles from '../List/CustomList.module.css';
import Category, { ServerEntry } from '../List/CustomList.tsx';


export default async function MutualFriends() {
    const server_data: ServerEntry[] = JSON.parse(await fs.readFile(process.cwd() + '/public/friend_data.json', 'utf-8'))

    const data = server_data.map(entry => Category(entry))

    return (
        <div className={["body-content", "padding-bottom", styles.box_height].join(" ")}>
            {data}
        </div>
    )
}