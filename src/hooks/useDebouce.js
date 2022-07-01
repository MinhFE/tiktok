import {useState, useEffect} from 'react'

function useDebouce(value, delay) {

    const [debounce, setDebounce] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounce(value)
        }, delay)
        return () => clearTimeout(handler)
    }, [delay, value])

    return debounce;
}

export default useDebouce;