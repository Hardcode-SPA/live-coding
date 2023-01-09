import { useReducer, useState } from "react";

const ACTION_TYPES = {
    addProduct: 'add_product',
    changeChange: 'change_name'
}


function fridgeReducer(state, action) {
    switch (action.type) {
        case ACTION_TYPES.addProduct: {
            console.log('Neues Produkt');
            console.log(action.nextValue);

            let targetProductIdx = state.products.findIndex(product => {
                return (product.name === action.nextValue.name) 
                    && (product.expiryDate.toLocaleDateString() === action.nextValue.expiryDate.toLocaleDateString())
            });

            let productsCopy = [...state.products];

            if (targetProductIdx !== -1) {

                let targetProduct = productsCopy[targetProductIdx];

                productsCopy[targetProductIdx] = {
                    ...targetProduct,
                    stock: targetProduct.stock + action.nextValue.stock
                };


                return {
                    ...state,
                    products: productsCopy
                };
            }

            productsCopy.push(action.nextValue);

            return {
                ...state,
                products: productsCopy
            };
        }

        case ACTION_TYPES.changeChange: {
            console.log('Name aendern');
            return {...state};
        }

        default:
            throw Error('Unknown action: ' + action.type);
    }
}

function ReducerUser(props) {
    let [fridge, dispatchFridge] = useReducer(fridgeReducer, {
        name: 'Freezer 3000',
        capacity: 3000,
        usedCapacity: 1250,
        products: [
            {
                name: 'Milk',
                volume: 250,
                stock: 1,
                expiryDate: new Date(2023, 0, 1)
            },
            {
                name: 'Butter',
                volume: 800,
                stock: 4,
                expiryDate: new Date(2023, 1, 24)
            },
            {
                name: 'Butter',
                volume: 200,
                stock: 1,
                expiryDate: new Date(2023, 2, 1)
            },
        ]
    });


    function handleAddMilk(evt) {
        let newProduct = {
            name: 'Milk',
            volume: 250,
            stock: 5,
            expiryDate: new Date(2023, 0, 2) // gleiches Datum, muesste also Stock erhoehen
        };

        dispatchFridge({
            type: ACTION_TYPES.addProduct,
            nextValue: newProduct
        });
    }

    function handleAddButter(evt) {

    }

    let productList = fridge.products.map((product, idx) => {
        return <li key={idx}>{product.name} | {product.volume} | {product.stock} | {product.expiryDate.toLocaleDateString('de-DE')}</li>
    });

    return (
        <>
            <h2 className='text-center'>useReducer()</h2>
            <div>
                <p>Name: {fridge.name}</p>
                <p>Capacity: {fridge.capacity}</p>
                <p>Used capacity: {fridge.usedCapacity}</p>
                <p>Products:</p>
                <ul>
                    {productList}
                </ul>


                <button 
                    className="border-2 rounded bg-blue-200 py-1 px-2"
                    onClick={handleAddMilk}
                >Add Milk</button>

                <button 
                    className="border-2 rounded bg-green-200 py-1 px-2"
                    onClick={handleAddButter}
                >Add Butter</button>
            </div>
        </>
    );
}

export default ReducerUser;