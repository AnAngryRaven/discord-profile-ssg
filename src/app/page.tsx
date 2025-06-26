/*
#######################
# USER INFO FUNCTIONS #
#######################
*/

export default function UserInfo() {
  const bsky_details: SocialButtonProps = {img_path: "/Bluesky_Logo.png", social_name: "sussus.guhcat.com", social_url: "https://bsky.app/profile/sussus.guhcat.com", extra_info: "Joined: 12 Dec 2023"}
  const spotify_details = {img_path: "/Spotify_Logo.png", social_name: "cyandaquilava", social_url: "https://open.spotify.com/user/cyandaquilava", extra_info: ""}
  const tumblr_details = {img_path: "/Tumblr_Logo.png", social_name: "sussusamogus47", social_url: "https://tumblr.com/sussusamogus47"}
  const nintendo_details = {img_path: "/NSO_Logo.png", social_name: "Sussus", social_url: "https://lounge.nintendo.com/friendcode/0479-3905-8001/DXSLV4c6WQ"}


  const left_column_socials: SocialButtonProps[] = [
    bsky_details, nintendo_details
  ];
  const right_column_socials: SocialButtonProps[] = [
    spotify_details, tumblr_details
  ];
  return (
    <div className="body-content padding-bottom">
      <div className="padding-bottom padding-top">
        <b>ABOUT ME</b><br/>
        <CustomLink link="https://lgbtqia.wiki/wiki/Agender" text="agender" /><span> - any pronouns do</span>
        <br/><br/>
        <p className="no-padding">socially anxious / inept</p>
        <br/>
        <p className="no-padding">lorde / good kid enjoyer</p>
        <br/>
        <p className="no-padding"><i>very</i> normal about splatoon i promise</p>
        <br/>
        <p className="no-padding">feel free to dm me with anything at any time, idrc :D</p>
        <br/>
        <p className="no-padding">not really <i>new</i> to the whole social interaction thing, just not good at it</p>
      </div>
      <div className="separator padding-bottom"></div>
      <b>SOCIALS</b>
      <div className="social-button-list centre-flexbox">
        <SocialColumn soc_props={left_column_socials} />
        <SocialColumn soc_props={right_column_socials} />
      </div>
    </div>
  );
}

/*
###########################
# SOCIAL BUTTON FUNCTIONS #
###########################
*/

function SocialColumn({soc_props}: {soc_props: SocialButtonProps[]}) {
  return(
    <div className="social-button-column">
      {soc_props.map((options: SocialButtonProps, index: number) => (
        <SocialButton key={index} props={options} />
      ))}
    </div>
  );
}

interface SocialButtonProps{
  img_path: string,
  social_name: string,
  social_url: string
  extra_info?: string
}

function SocialButton({props}: {props: SocialButtonProps}) {
  return(
    <div className="social-button">
      <a href={props.social_url} className="social-name" target="_blank">
        <CustomImage img_path={props.img_path} class_names="social-icon" />

        <div>
          <b>{props.social_name}</b>
          <CustomText text={props.extra_info ? props.extra_info : ""} class_names="social-extra-info" />
        </div>
        
        <CustomImage img_path="/link-arrow.png" class_names="clickable-social"/>
      </a>
    </div>
  );
}

function CustomLink({link, text, class_names}: {link: string, text: string, class_names?: string}) {
  return(<a href={link ? link : ""} className={class_names ? class_names + " a-underline" : " a-underline"}>{text ? text : ""}</a>)
}

function CustomImage({img_path, class_names}: {img_path: string, class_names?: string}){
  return(<>{img_path ? <img className={class_names ? class_names : ""} src={img_path}/> : <></>}</>);
}

function CustomText({text, class_names}: {text: string, class_names?: string}) {
  return(<>{text ? <p className={class_names ? class_names : ""}>{text}</p> : <></>}</>);
}