/*
#######################
# USER INFO FUNCTIONS #
#######################
*/

export default function UserInfo() {
  const twitch_details: SocialButtonProps = {img_path: "/Twitch_Logo.png", social_name: "AnAngryRaven", social_url: "https://twitch.tv/AnAngryRaven", extra_info: "Joined: 30 Aug 2016"}
  const spotify_details = {img_path: "/Spotify_Logo.png", social_name: "cyandaquilava", social_url: "https://open.spotify.com/user/cyandaquilava", extra_info: ""}
  const tumblr_details = {img_path: "/Tumblr_Logo.png", social_name: "AnAngryRaven", social_url: "https://tumblr.com/anangryraven"}
  const github_details = {img_path: "/Github_Logo.png", social_name: "AnAngryRaven", social_url: "https://github.com/AnAngryRaven"}


  const left_column_socials: SocialButtonProps[] = [
    twitch_details, spotify_details
  ];
  const right_column_socials: SocialButtonProps[] = [
    github_details, tumblr_details
  ];
  return (
    <div className="body-content padding-bottom">
      <div className="padding-bottom padding-top">
        <b>ABOUT ME</b><br/>
        <a href="https://lgbtqia.wiki/wiki/Agender" className="a-underline">agender</a><span> - any pronouns do</span>
        <br/><br/>
        <p className="no-padding">social anxiety haver</p>
        <br/>
        <p className="no-padding">lorde / good kid enjoyer</p>
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

//function CustomLink({link, text, class_names}: {link: string, text: string, class_names?: string}) {
//  return(<a href={link ? link : ""} className={class_names ? class_names + " a-underline" : " a-underline"}>{text ? text : ""}</a>)
//}

function CustomImage({img_path, class_names}: {img_path: string, class_names?: string}){
  return(<>{img_path ? <img className={class_names ? class_names : ""} src={img_path}/> : <></>}</>);
}

function CustomText({text, class_names}: {text: string, class_names?: string}) {
  return(<>{text ? <p className={class_names ? class_names : ""}>{text}</p> : <></>}</>);
}