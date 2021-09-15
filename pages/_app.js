import '../styles/globals.css'
import Image from 'next/image'

import style from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<div className={style.backdrop}>
				<Image
					src="../../public/img/container.svg"
					alt="Picture of the author"
					width={500}
					height={800}
				/>
			</div>
			<div className={style.container}>
				<Component {...pageProps} />
			</div>
		</>
	)
}

export default MyApp
