import { useEffect, useRef } from "react";


export default function Form({propInputs}) {
    // Ref-Variable zum Speichern mehrerer Inputreferenzen
    let inputRefs = useRef({});

    // Ref-Variable zum Speichern der Referenz des Buttons
    let buttonRef = useRef();


    // Wird bei jeder State-Aenderung ausgefuehrt
    useEffect(() => {
        console.log('re-render!');
    });

    // Submit-Handler fuer das Formular
    function handleSubmit(evt) {
        evt.preventDefault();

        // Gebe Wert aus den Inputs in der Ref-Variable aus
        for (const input in inputRefs.current) {
            console.log(inputRefs.current[input].value);
        }
    }

    // Change-Handler fuer die Eingabefelder
    function handleInputChange(evt) {
        // Indikator fuer den disabled-Zustand des Buttons
        let disabled = false;

        // Durchlaufe alle Input-Referenzen in der Ref-Variable
        for (const key in inputRefs.current) {
            // Wenn aktuelles Input leer -> Setze disabled-Indikator auf true
            if (inputRefs.current[key].value.length < 1) disabled = true;
        }

        // Setze disabled-Zustand des Buttons auf den Wert des Indikators
        buttonRef.current.disabled = disabled;
    }

    // Erstelle Array von Inputs anhand der Inputnamenliste in den Props
    let inputs = propInputs.map(input => {
        // Gebe neues Input zurueck, das per ref-Attribut an das Objekt in der Ref-Variable gebunden ist
        return <input key={input} type="text" ref={el => inputRefs.current[input] = el} onChange={handleInputChange} />;
    });

    return (
        <form onSubmit={handleSubmit}>
            {inputs}
            {/* Verbinde den Button per ref-Attribut mit der Ref-Variable fuer den Button */}
            <button ref={buttonRef} disabled type="submit">Submit</button>
        </form>

    );
};