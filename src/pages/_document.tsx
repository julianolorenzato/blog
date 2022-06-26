import { ColorModeScript } from '@chakra-ui/react'
import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript
} from 'next/document'
import theme from '../theme'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initalProps = await Document.getInitialProps(ctx)
		return initalProps
	}

	render() {
		return (
			<Html lang="pt-br">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="anonymous"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body className="doly">
					{/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
