import { useState, useEffect } from 'react'

export default () => {
    const [axis, setAxis] = useState('x')

    function reportWindowSize() {
        let deviceWidth = window.outerWidth;

        if (deviceWidth < 768) setAxis('y')
        else setAxis('x')
    }

    useEffect(() => {
        window.addEventListener('resize', reportWindowSize)
        return () => window.removeEventListener('resize', reportWindowSize)
    }, [])
    return axis
}