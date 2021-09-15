import Image from 'next/image'
import { motion } from 'framer-motion'
import style from '../Button/style.module.css'

const Button = () => {
	return (
		<motion.div
			exit={{ opacity: 0 }}
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
		>
			<button className={style.botaoEntrar}>ENTRAR</button>
		</motion.div>
	)
}

export default Button
