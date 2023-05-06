import { Styles } from '@/types/Styles'
import React from 'react'
import { motion } from "framer-motion"

type Props = {
    number: number | string
    onClick: () => void
}

export const NumButton = (props: Props) => {
    const { number, onClick } = props

    return (
        <motion.button
            whileTap={{
                scale: 0.9,
                borderRadius: "50%",
                rotate: 360,
            }}
            whileHover={{
                scale: 1.1,
                // rotate: 360,
                borderRadius: "10%",
                boxShadow: "0 0 10px #fff"
            }}
            style={styles.button}
            onClick={onClick}
        >
            {number}
        </motion.button>
    )
}

const styles: Styles = {
    button: {
        width: 55,
        height: 55,
        fontSize: 30,
        color: "#000",
        margin: "0 auto",
        marginBottom: 8,
        marginTop: 8,
        borderRadius: "50%",
        userSelect: "none"
    }

}