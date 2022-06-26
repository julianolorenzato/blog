import { Button, Flex, styled } from '@chakra-ui/react'

const But = styled(Button, {
    baseStyle: {
        bg: 'aux'
    }
})

export default function Post() {
	return (
		<Flex direction="column" align="center">
			<h1>HELLO CHAKRA</h1>
			<Button bg="brand.main" _hover={{ bg: 'brand.hover' }} _active={{
				bg: 'aux'
			}}>
				Elevar chakra
			</Button>
			<Button>Teste</Button>
			<But>Oin</But>
		</Flex>
	)
}
