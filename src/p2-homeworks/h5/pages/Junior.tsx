import React from 'react'
import HW1 from '../../h1/HW1'
import HW2 from '../../h2/HW2'
import HW3 from '../../h3/HW3'
import HW4 from '../../h4/HW4'
import classes from './PreJunior.module.css'
import HW6 from "../../h6/HW6";
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";

function PreJunior() {
    return (
        <div className={classes.preJuniorBlock}>
            <HW6/>
            <HW7/>
            <HW8/>
        </div>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз