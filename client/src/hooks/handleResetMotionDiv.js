import { useState, useEffect } from 'react'
export default (dependency) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(prv => prv += 1)
    }, [dependency])

    return count
}