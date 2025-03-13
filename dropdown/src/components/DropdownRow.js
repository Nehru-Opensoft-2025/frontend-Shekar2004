import React, {useState} from 'react';
import styles from './DropdownRow.module.css';
import { ReactComponent as Downarrow } from "../assets/downarrow.svg"
import { ReactComponent as Rightarrow } from "../assets/rightarrow.svg"
import { ReactComponent as Circle } from "../assets/circle.svg";

const DropdownRow = ({ name = "DropdownRow", backgroundColor = "blue",level = 0, children = null}) => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className={styles.container} >
            <div className={styles.dropdownRow} style={{backgroundColor: backgroundColor, paddingLeft: `${level * 3}vw`}}>
                <div className={styles.dropdownRowHeader} onClick={() => setIsOpen(!isOpen)}>
                <span className={styles.arrow}>
                    {children ? (isOpen ? <Downarrow className={styles.svg}/> : <Rightarrow className={styles.svg}/>) : <Circle className={styles.svg}/>}
                </span>
                <span className={styles.name}>{name}</span>
                </div>
            </div>
            {isOpen && <div className={styles.dropdownRowChildren}>{children}</div>}
        </div>
    );
};

export default DropdownRow