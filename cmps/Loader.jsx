const { useState, useEffect } = React

export function Loader() {

    const [showTxt, setShowTxt] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTxt(true)
        }, 5000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="loader-container">
            {showTxt
                ? <p className="loader-text">No results found. Please try a different search</p>
                : <div className="loader"></div>}
        </div>
    )
}
