const { useState, useRef, useEffect } = React;

import { colors } from "../../../assets/config/colors.js";

export function ColorPicker({ note, onChangeColor}) {
    const [isOpen, setIsOpen] = useState(false);
    const pickerRef = useRef(null);

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
                className="material-symbols-outlined"
                onClick={(ev) => {
                    ev.stopPropagation();
                    setIsOpen((prev) => !prev);
                }}
            > palette</i>

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