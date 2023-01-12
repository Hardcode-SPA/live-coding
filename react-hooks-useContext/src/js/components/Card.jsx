import { ThemeContext, THEMES } from "../App";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import CardBody from "./CardBody";
import { useContext } from "react";

export default function Card({/* theme, */ width, height, image, titleText, subtitleText, bodyText}) {
    /* 
        Context konsumieren mittels useContext Hook.
        Gibt als Rueckgabewert den im Context gespeicherten Wert
    */
    let theme = useContext(ThemeContext);


    let styleObj = {
        width: width,
        height: height,
        backgroundColor: theme === THEMES.dark ? 'rgb(37, 37, 37)' : 'white'
    };

    // let themeClass = theme;

    return (
        <div className={`card`} style={styleObj}>
            <CardHeader
                titleText={titleText}
                subTitleText={subtitleText}
                // theme={theme}
            />
            <CardImage 
                image={image}
                link='https://google.de'
                // theme={theme}
            />
            <hr />

            <CardBody
                bodyText={bodyText}
                // theme={theme}
            />
        </div>
    );
} 