import { promises as fs } from 'fs';

/*
#######################
# USER INFO FUNCTIONS #
#######################
*/

export default async function UserInfo() {

  const social_buttons: SocialButton[] = JSON.parse(await fs.readFile(process.cwd() + '/public/social_buttons.json', 'utf-8'))
  
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
        {Socialbuttons(social_buttons)}
      </div>
    </div>
  );
}

interface SocialButton {
  img_path: string,
  social_name: string,
  social_url: string,
  extra_info?: string
}

/*
###########################
# SOCIAL BUTTON FUNCTIONS #
###########################
*/

function Socialbuttons(buttons: SocialButton[]) {
  const left_socials: SocialButton[] = [];
  const right_socials: SocialButton[] = [];
  
  buttons.forEach((but, ind) => {
    if(ind % 2 == 0)
      left_socials.push(but);
    else
      right_socials.push(but);
  })

  return (
    <>
      <SocialColumn soc_props={left_socials} />
      <SocialColumn soc_props={right_socials} />
    </>
  )
}

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