import { useContext } from "react";
import { THEMES, ThemeContext } from "../App";

function CardHeader({titleText, subTitleText, /* theme */}) {
    let theme = useContext(ThemeContext);

    let styleObj = {
        color: theme === THEMES.dark ? 'white' : 'black'
    };

    return (
        <div style={styleObj}>
            <h3>{titleText}</h3>
            <h5>{subTitleText}</h5>
        </div>
    );
}


export default CardHeader;