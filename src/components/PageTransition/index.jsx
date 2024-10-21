'use client'

import {motion} from 'framer-motion';
import style from './paget.module.scss';
import { slide, opacity, perspective } from './pagetanim';


export default function PageTransition({children}){

    const anim = (variants) => {
        return{
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants
        }
    }

    return(
        <div className={style.inner}>
            <motion.div {...anim(slide)} className={style.slide}/>
            <motion.div {...anim(perspective)} className={style.page}>
                <motion.div {...anim(opacity)}>
                    
                </motion.div>
            </motion.div>
                {children}
        </div>
        
    )
}

    
