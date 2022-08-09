import { useRef, useState } from 'react'
import IconSelect from '../../icons/IconSelect'
import classes from './SelectCustom.module.scss'
import cn from 'classnames'
import anime from 'animejs'

function SelectCustom({ activeValue, options = [], placeholder, onChange, className }) {
    const [activeObj, setActiveObj] = useState(activeValue)
    const [isOpen, setIsOpen] = useState(false)

    const dropdownRef = useRef(null)

    const onOpenDropdown = () => {
        if (isOpen) {
            dropdownRef.current.style.pointerEvents = 'none'

            anime({
                targets: dropdownRef.current,
                duration: 800,
                opacity: [1, 0]
            })
        } else {
            dropdownRef.current.style.pointerEvents = 'visible'

            anime({
                targets: dropdownRef.current,
                duration: 800,
                opacity: [0, 1]
            })
        }

        setIsOpen((prev) => !prev)
    }

    const onChangeActiveObj = (obj) => {
        setActiveObj(obj)
        onChange && onChange(obj)
        onOpenDropdown()
    }

    if (!options.length) {
        return null
    }

    return (
        <div className={cn(classes.Wrapper, className)}>
            {(activeValue || placeholder) && (
                <button className={classes.Btn} onClick={onOpenDropdown}>
                    <span className={classes.BtnText}>{activeValue?.label || activeObj?.label || placeholder}</span>
                    <IconSelect />
                </button>
            )}

            <div className={classes.Dropdown} ref={dropdownRef}>
                <ul className={classes.DropdownList}>
                    {options.map((item) => (
                        <li className={classes.DropdownItem} key={item.value}>
                            <button className={classes.DropdownBrn} onClick={() => onChangeActiveObj(item)}>
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SelectCustom
