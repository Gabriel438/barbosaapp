import Image from 'next/image'

import { motion } from 'framer-motion'

import Button from '../../components/Button'

const Promocoes = () => {
	return (
		<motion.div
			exit={{ opacity: 0 }}
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
		>
			<Image
				src="/../public/img/logo.svg"
				alt="Picture of the author"
				width={500}
				height={500}
			/>
			<Button></Button>
		</motion.div>
	)
}

export default Promocoes
