import React, {useEffect} from 'react';


export function ErrorMessage({errorMessageActive, errorMessage, setErrorMessageActive}) {

    useEffect(() => {
        const timer = setTimeout(() => {
            setErrorMessageActive(false);
        }, 2000);
        return () => clearTimeout(timer);
      }, [errorMessageActive]);


    return (
        <div className={errorMessageActive ? 'error-message active' : 'error-message'}>
            <p>{errorMessage}</p>
        </div>
    )
}