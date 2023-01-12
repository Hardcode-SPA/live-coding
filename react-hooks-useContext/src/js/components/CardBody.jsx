import { THEMES, ThemeContext } from "../App";
import { useContext } from "react";


function CardBody({bodyText, /* theme */}) {
    let theme = useContext(ThemeContext);


    let styleObj = {
        color: theme === THEMES.dark ? 'white' : 'black'
    };

    return (
        <p style={styleObj}>
            {bodyText}
        </p>
    );
}


export default CardBody;