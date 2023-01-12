

function Reactangle({backgroundColor, width, height}) {

    let styleObj = {
        backgroundColor: backgroundColor,
        width: width,
        height: height
    };

    return (
        /* Inline-style im JSX ueberschreibt alle anderen Styles fuer dieses Element */
        <div className="foo" style={{
            backgroundColor: backgroundColor,
            width: width,
            height: height,
            border: '2px solid black',
            borderRadius: '5px'
        }}>

        {/* <div style={styleObj}> */}

        </div>
    );
}

export default Reactangle;