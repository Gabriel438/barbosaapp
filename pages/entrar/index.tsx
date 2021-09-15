import Image from 'next/image'

import { motion } from 'framer-motion'

import Button from '../../components/Button'
import style from '../entrar/style.module.css'

const Promocoes = () => {
	return (
		<div className={style.container}>
			<motion.div
				exit={{ opacity: 0 }}
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<Image
					src="https://api.orbt.com.br/barbosa/logo.png"
					alt="Picture of the author"
					width={500}
					height={200}
				/>
			</motion.div>
			<motion.div
				exit={{ opacity: 0 }}
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<Button></Button>
			</motion.div>
		</div>
	)
}

export default Promocoes
