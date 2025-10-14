const { useState, useRef, useEffect } = React;

export function ColorPicker({ note, onChangeColor}) {
    const [isOpen, setIsOpen] = useState(false);
    const pickerRef = useRef(null);

    const colors = [
        '#f7f7f7',
        '#ffadad',
        '#ffd6a5',
        '#fdffb6',
        '#caffbf',
        '#9bf6ff',
        '#a0c4ff',
        '#bdb2ff',
        '#ffc6ff'
    ];

    function handleSelect(color, ev) {
        ev.stopPropagation();
        onChangeColor(color,note)
        setIsOpen(false);
    }

    // Close picker if clicking outside
    useEffect(() => {
        function handleClickOutside(ev) {
            if (pickerRef.current && !pickerRef.current.contains(ev.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className="color-picker-wrapper" ref={pickerRef}>
            <i
                className="fa-solid fa-palette"
                onClick={(ev) => {
                    ev.stopPropagation();
                    setIsOpen((prev) => !prev);
                }}
            ></i>

            {isOpen && (
                <div className="color-picker">
                    {colors.map((color) => (
                        <div
                            key={color}
                            className="color-swatch"
                            style={{ backgroundColor: color }}
                            onClick={(ev) => handleSelect(color, ev)}
                        ></div>
                    ))}
                </div>
            )}
        </div>
    );
}