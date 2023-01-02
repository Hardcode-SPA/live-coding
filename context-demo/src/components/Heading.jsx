import { useContext } from "react";

// Importiere ThemeContext, um hier darauf Zugriff zu haben
import { ThemeContext } from "../App";

function Heading(props) {
    // Entnehme dem ThemeContext den Wert für den Theme
    let theme = useContext(ThemeContext);

    // Wähle Schriftfarbe abhängig vom Wert im ThemeContext
    let fontColor = (theme === 'dark') ? 'white' : 'black';

    return (
        <h1 style={{color: fontColor}}>Hallo MainContent im Context</h1>
    );
}

export default Heading;