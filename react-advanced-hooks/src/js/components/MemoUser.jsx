import { useEffect, useMemo, useState } from 'react';

function MemoUser(props) {
    let [items, setItems] = useState([]);
    let [counter, setCounter] = useState(0);
    let [inputValue, setInputValue] = useState('');
    // let preparedItems = useRef([]);

/*     useEffect(() => {
      console.log('prepare items!');

      let prepared = [];
      items.forEach(item => {
        if (item % 2 === 0) prepared.push('Even value halved: ' + item / 2);
        else if (item === 0) prepared.push('Zero value')
        else prepared.push('Odd value doubled: ' + item * 2);
      });

      preparedItems.current = prepared;
    }, [items]);
 */
    let preparedItems = useMemo(() => {
        console.log('useMemo!');

        let prepared = [];
        items.forEach(item => {
        if (item % 2 === 0) prepared.push('Even value halved: ' + item / 2);
        else if (item === 0) prepared.push('Zero value')
        else prepared.push('Odd value doubled: ' + item * 2);
        });

        return prepared;
    }, [items]);

    

    useEffect(() => {
        setItems([
        1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20
        ]);
    }, []);


    function setNewItems(evt) {
        let newItems = inputValue.split(',').map(newItem => {
            return parseInt(newItem);
        });

        setItems(newItems);
    }


/*     let itemElems = items.map((item, idx) => {
        console.log('map');
        let blaItem = null;

        if (item % 2 === 0) blaItem = 'Even value halved: ' + (item / 2);
        else if (item === 0) blaItem = 'Zero value';
        else blaItem = 'Odd value doubled: ' + (item * 2);

        return <li key={idx}>{blaItem}</li>
    }); */


    let itemElems = preparedItems.map((item, idx) => {
        return <li key={idx}>{item}</li>
    });


    return (
        <>
            <h2 className='text-center'>useMemo()</h2>
            <div>
                <p>Counter: {counter}</p>
                <button className='rounded-full border-2 p-2 bg-white' onClick={evt => setCounter(counter+1)}>Increment Counter</button>
                <ul>
                    {itemElems}
                </ul>

                <input className='border p-2' type="text" value={inputValue} onChange={evt => setInputValue(evt.target.value)} />
                <button onClick={setNewItems} className='rounded-full border-2 p-2 bg-white'>Set new items</button>
            </div>
        </>
    );
}


export default MemoUser;