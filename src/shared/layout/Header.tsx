import { Button, Flex, Text } from "@chakra-ui/react"
import { useAuth } from "../context/AuthContext"
import { FaPowerOff } from "react-icons/fa6";

function Header({ titulo }: {titulo:string}) {

    const { logout } = useAuth()

    return (
        <Flex 
            justify='space-between'
            bg='VerdeAzulado'
            color='BlancoClinico'
            align='center'
            p={5}
        >
            <Text
                fontSize='3xl'
                fontWeight='bold'
            >
                {titulo}
            </Text>
            <Flex
                align='center'
                gap={2}
            >
            <Button
                bg='BlancoClinico'
                color='VerdeAzulado'
                onClick={logout}
                cursor='pointer'
            >
                <Text>Cerrar sesión</Text>
                <FaPowerOff/>
            </Button>
            </Flex>
        </Flex>
    )
}

export default Header