import { JSX } from 'react';
import StatusText from './custom-status.tsx';
import { promises as fs } from 'fs';
import Link from 'next/link';

interface ProfileInfoProps {
  display_name?: string,
  username: string,
  pronouns?: string,
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
  const profile_info: ProfileInfo = JSON.parse(await fs.readFile(process.cwd() + '/public/profile_info.json', 'utf-8'))
  
  return (
    <div>
      <BannerImage path={profile_info.banner_img_path}/>
      <ProfilePicture pfp_path={profile_info.pfp_img_path} />
      <ProfileInfo display_name={profile_info.display_name} username={profile_info.username} pronouns={profile_info.pronouns} emote_path={profile_info.emote_img_path} status_text={data}/>
      <HeaderButtons />
      <div className="separator"></div>
    </div>
  );
}

function BannerImage({path}: {path?: string}) {
  return ( <img id="banner-image" src={path ? path : "/Banner_Image.jpg"}/>);
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
      <b className="header-content big-bold">{props.display_name ? props.display_name : props.username }</b>
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

interface ProfileInfo {
  display_name?: string,
  username: string,
  pronouns?: string,
  pfp_img_path: string,
  banner_img_path?: string,
  emote_img_path?: string
}