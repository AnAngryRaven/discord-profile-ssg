import { promises as fs } from 'fs';
import styles from './activity.module.css';
import { JSX } from 'react';

export default async function Activity() {
    const activity_data: ActivityCardProps = JSON.parse(await fs.readFile(process.cwd() + '/public/activity_data.json', 'utf-8'))
    
    
    return(
        <div className="body-content padding-bottom padding-top">
            <b>PLAYING A GAME</b>
            {ActivityCard(activity_data.game_data.activity, GameCard(activity_data.game_data))}
            <b>LISTENING TO SPOTIFY</b>
            {ActivityCard(activity_data.listening_data.activity, ListeningCard(activity_data.listening_data))}
        </div>
    )
}

interface ActivityCardProps {
    game_data: GameCardProps,
    listening_data: ListeningCardProps
}

interface GenericCardProps {
    img_path: string,
    activity_title: string
}

interface ListeningCardProps {
    activity: GenericCardProps,
    artist: string,
    album: string
}

interface GameCardProps {
    activity: GenericCardProps,
    duration: string
}

function ListeningCard(music: ListeningCardProps) {
    return(
        <>
            <p className='no-padding'>by {music.artist}</p>
            <p className='no-padding'>on {music.album}</p>
        </>
    )
}

function GameCard(game: GameCardProps) {
    return(
        <p className='no-padding'>for {game.duration}</p>
    )
}

function ActivityCard(activity: GenericCardProps, elm: JSX.Element) {



    return (
        <div className={[styles.card_layout, styles.card_indent].join(" ")}>
            <img className={styles.card_img} src={activity.img_path} />
            <div className={[styles.card_indent, styles.card_details].join(" ")}>
                <b>{activity.activity_title}</b>
                {elm}
            </div>
        </div>
    )
}