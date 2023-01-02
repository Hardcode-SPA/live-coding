import { useEffect, useState } from 'react';

function ChildComponent(props) {
    let [count, setCount] = useState(0); 
    let [special, setSpecial] = useState(false);


    useEffect(() => {
        // Wie ComponentDidMount
        console.log('Leeres Array als Abhängigkeit');
    
        // Wie ComponentWillUnmount
        return () => console.log('Cleanup!');
    }, []);
    
    useEffect(() => {
        console.log('Nichts als Abhängigkeit');
    });

    useEffect(() => {
        console.log('Spezielle Abhängigkeit');
    }, [special]);
    
    
    function buttonHandler(evt) {
        if ((count+1) % 10 === 0) {
            setSpecial(true);
        } else {
            setSpecial(false);
        }

        setCount(count+1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={buttonHandler}>Increase Count</button>
        </div>
    );
}

export default ChildComponent;