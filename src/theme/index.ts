import { extendTheme, ComponentStyleConfig, Colors, styled, Button } from '@chakra-ui/react'

const button: ComponentStyleConfig = {
    baseStyle: {
        backgroundColor: '#15f'
    },
    defaultProps: {
        colorScheme: 'linkedin'
    }
}

const customTheme = {
	colors: {
		brand: {
            main: '#d8ff00',
            hover: '#c2e600'
        },
        linkedin: {
            600: '#15f'
        },
		aux: '#212121',
	},
    fonts: {
        body: "'Lato', sans-serif"
    }
	// config: {
	// 	cssVarPrefix: 'ck',
    //     initialColorMode: 'light'
	// }
}


export default extendTheme(customTheme)
