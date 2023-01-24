import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// origRecipe ist eine optionale Property
function RecipeForm({callback, origRecipe}) {
    let [inputValues, setInputValues] = useState({
        title: '',
        category: '',
        country: '',
        cooktime: 0,
        procedure: '',
        description: '',
        picture: '',
        ingredients: []
    });

    let [validated, setValidated] = useState(false);

    let buttonText = useMemo(() => {
        if (origRecipe) {
            return 'Submit recipe update';
        } else {
            return 'Submit new recipe';
        }
    }, [origRecipe]);

    useEffect(() => {
        if (origRecipe) {
            setInputValues(origRecipe);
            setValidated(true);
        };
    }, [origRecipe]);

    // TODO Behandle das Submit Event des Formulars entsprechend (ggf. Validierung)

    function handleOnChange(evt) {
        // extrahiere den Feldnamen aus dem Dataset des Inputs
        let field = evt.target.dataset.field;

        // extrahiere den uebergebenen Wert des Inputs
        let value = evt.target.value;

        if (field === 'ingredients') {
            value = value.split(',');
        }

        if (field === 'cooktime') {
            value = parseInt(value);
        }

        // Erstelle Kopie der Statevariable
        let valuesCopy = {...inputValues};

        // Ersetze dynamisch den Wert des Feldes in der Kopie mit der Eingabe des Inputs
        valuesCopy[field] = value;

        // Ersetze Statevariable
        setInputValues(valuesCopy);

        // in ganz kurz:
        // setInputValues({
        //     ...inputValues,
        //     [field]: value
        // });


        let validated = true;

        for (const key in valuesCopy) {
            if (valuesCopy[key].length === 0) {
                validated = false;
            }
        }

        setValidated(validated);
    }


    function handleSubmit(evt) {
        evt.preventDefault();
        // vielleicht Daten vorher aufbereiten oder validieren

        // callback aus dem Props aufrufen und die Daten uebergeben
        callback(inputValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="inputTitle" 
                className='block text-lg font-bold mb-2'
            >Title</label>
            <input 
                value={inputValues.title}
                onChange={handleOnChange}
                data-field={'title'}
                type="text" 
                id='inputTitle'
                className='shadow border rounded py-2 px-3 leading-tight focus:shadow-outline'
            />

            <label htmlFor="inputCategory" 
                className='block text-lg font-bold mb-2'
            >Category</label>
            <input 
                value={inputValues.category}
                onChange={handleOnChange}
                data-field={'category'}
                type="text" 
                id='inputCategory'
                className='shadow border rounded py-2 px-3 leading-tight focus:shadow-outline'
            />

            <label htmlFor="inputCountry" 
                className='block text-lg font-bold mb-2'
            >Country</label>
            <input 
                value={inputValues.country}
                onChange={handleOnChange}
                data-field={'country'}
                type="text" 
                id='inputCountry'
                className='shadow border rounded py-2 px-3 leading-tight focus:shadow-outline'
            />

            <label htmlFor="inputDescription" 
                className='block text-lg font-bold mb-2'
            >Description</label>
            <textarea 
                value={inputValues.description}
                onChange={handleOnChange}
                data-field={'description'}
                type="text" 
                id='inputDescription'
                rows="4" 
                className="block p-2.5 w-256 text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label htmlFor="inputPicture" 
                className='block text-lg font-bold mb-2'
            >Picture</label>
            <input 
                value={inputValues.picture}
                onChange={handleOnChange}
                data-field={'picture'}
                type="text" 
                id='inputPicture'
                placeholder='https://diesdas.de/superbild.jpg'
                className='shadow border rounded py-2 px-3 leading-tight focus:shadow-outline'
            />

            <label htmlFor="inputProcedure" 
                className='block text-lg font-bold mb-2'
            >Procedure</label>
            <textarea 
                value={inputValues.procedure}
                onChange={handleOnChange}
                data-field={'procedure'}
                type="text" 
                id='inputProcedure'
                rows="4" 
                className="block p-2.5 w-256 text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label htmlFor="inputCooktime" 
                className='block text-lg font-bold mb-2'
            >Cooktime</label>
            <input 
                value={inputValues.cooktime}
                onChange={handleOnChange}
                data-field={'cooktime'}
                type="number" 
                id='inputCooktime'
                className='shadow border rounded py-2 px-3 leading-tight focus:shadow-outline'
            /> Minutes

            <label htmlFor="inputIngredients" 
                className='block text-lg font-bold mb-2'
            >Ingredients</label>
            <textarea 
                value={inputValues.ingredients.join(',')}
                onChange={handleOnChange}
                data-field={'ingredients'}
                type="text" 
                placeholder='suger,apples,milk'
                id='inputIngredients'
                rows="4" 
                className="block p-2.5 w-256 text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <button
                disabled={!validated}
                className='my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${}'
            >{buttonText}</button>
        </form>
    )
}

export default RecipeForm;