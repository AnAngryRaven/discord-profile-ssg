import Link from 'next/link';
import styles from '../List/CustomList.module.css';

export default function Category(data: ServerEntry) {
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
                    {DetermineCategory(data)}
                    {category_entries}
                </details>
            </div>
        )
    }
}

function DetermineCategory(data: ServerEntry) {
    if(data.img_path){
        return (
            <summary className={styles.category_entry_img}>
                <img src={data.img_path}/>
                {data.category}
            </summary>
        )
    }else {
        return (
            <summary className={styles.category_entry}>{data.category}</summary>
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

export interface ServerEntry {
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