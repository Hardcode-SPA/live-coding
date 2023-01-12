import { useContext } from "react";
import { THEMES, ThemeContext } from "../App";

function CardImage({image, link, /* theme */}) {
    let theme = useContext(ThemeContext);

    let boxShadowColor = theme === THEMES.dark ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,0.75)';

    let styleObj = {
        boxShadow: `0px 0px 36px 11px ${boxShadowColor}`,
        marginTop: '1em',
        marginBottom: '1em',
    };

    let imageElem = <img style={styleObj} src={image} alt="Card Image" />;

    let container = link ? (<a href={link} target='_blank'>{imageElem}</a>) : {imageElem};

    return <>{container}</>;
}


export default CardImage;