import { useContext } from "react";
import Heading from "./Heading";
// Importiere ThemeContext, um hier darauf Zugriff zu haben
import { ThemeContext } from "../App";

function MainContent(props) {
    // Entnehme dem ThemeContext den Wert für den Theme
    let theme = useContext(ThemeContext);

    // Wähle Hintergrundfarbe abhängig vom Wert im ThemeContext
    let backgroundColor = (theme === 'dark') ? 'grey' : 'white';

    // Entscheide über CSS-Klasse des Paragraphen anhand des wobble-Wertes aus den props
    let classForParagraph = props.wobble ? 'wobble' : '';

    return (
        <div style={{backgroundColor: backgroundColor}} >
            {/* Reiche den Theme aus den props in die props der Kind-Komponente Heading weiter */}
            <Heading />
            <p className={classForParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptas minima veritatis fugit maiores vitae corporis odit doloremque non facere eveniet voluptatem qui, quo saepe assumenda possimus, voluptatibus, voluptates quis.</p>
        </div>
    );
}

export default MainContent;