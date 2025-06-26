import { JSX } from 'react';
import StatusText from './custom-status.tsx';
import { promises as fs } from 'fs';
import Link from 'next/link';

interface ProfileInfoProps {
  display_name: string,
  username: string,
  pronouns: string,
  emote_path?: string,
  status_text?: string[]
}

export function Body(func: JSX.Element) {
  return (
    <div className="centre-flexbox">
      <div className="user-info">
        <Header />
        {func}
      </div>
    </div>
  )
}

export default async function Header() {
  
  const data: string[] = JSON.parse(await fs.readFile(process.cwd() + '/src/app/status-list.json', 'utf8'))
  
  return (
    <div>
      <BannerImage path="/Banner_Image.jpg"/>
      <ProfilePicture />
      <ProfileInfo display_name="AnAngryRaven" username="anangryraven" pronouns="any/all" emote_path="/amongAss.gif" status_text={data}/>
      <HeaderButtons />
      <div className="separator"></div>
    </div>
  );
}

function BannerImage({path}: {path?: string}) {
  return ( <img id="banner-image" src={path ? path : "https://guhcat.com/guh-cat.gif"}/>);
}

function ProfilePicture({pfp_path}: {pfp_path?: string}){
  return (
    <div id="wrapper-style">
      <div id="pfp-border">
        <img id="pfp" src={pfp_path ? pfp_path : "/PFP.jpg"}/>
      </div>
    </div>
  );
}

function ProfileInfo(props: ProfileInfoProps){
  
  return (
    <div>
      <b className="header-content big-bold">{props.display_name ? props.display_name : 'Display Name'}</b>
      <br/>
      <div className="flexbox">
        <b className="header-content pronouns-spacing">{props.username ? props.username : 'username'}</b>
        {props.pronouns ? <li>{props.pronouns}</li> : <></>}
      </div>
      <br/>
      <StatusText emote_path={props.emote_path ? props.emote_path : ""} status_text={props.status_text}/>
      <br/>
    </div>
  );
}



function HeaderButtons() {
  return (
    <div className="buttons-flex">
      <Link className="link-elm" href="/" replace>User Info</Link>
      <Link className="link-elm" href="Activity">Activity</Link>
      <Link className="link-elm" href="Mutual_Servers" replace>Mutual Servers</Link>
      <Link className="link-elm" href="Mutual_Friends" replace>Mutual Friends</Link>
    </div>
  );
}