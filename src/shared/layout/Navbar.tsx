import { Flex, Icon, Text, VStack } from "@chakra-ui/react"
import { Button, Drawer, Portal } from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { PiPillFill } from "react-icons/pi";
import { FaHospitalUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
    return (
    <Drawer.Root placement='start'>
        <Drawer.Trigger asChild>
            <Button 
                size="xl"
                color='BlancoClinico'
                bg='transparent'
            >
                <GiHamburgerMenu />
            </Button>
        </Drawer.Trigger>
        <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
            <Drawer.Content>
                <Drawer.Body>
                    <VStack
                        justify='center'
                        align='center'
                        marginTop={30}
                        gap={5}
                    >
                        <Flex
                            align='center'
                            gap={10}
                        >
                            <Link
                                to='/dashboard'
                            >
                                <Button
                                    bg='transparent'
                                >
                                    <Text
                                        fontSize='lg'
                                        fontWeight='bold'
                                        color='VerdeAzulado'
                                    >
                                        Inicio
                                    </Text>
                                    <Icon
                                        color='VerdeAzulado'
                                    >
                                        <FaHome/>
                                    </Icon>

                                </Button>
                            </Link>
                        </Flex>
                        <Flex
                            align='center'
                            gap={3}
                        >
                            <Link
                                to='/articulos'
                            >
                                <Button
                                    bg='transparent'
                                >
                                    <Text
                                        fontSize='lg'
                                        fontWeight='bold'
                                        color='VerdeAzulado'
                                    >
                                        Artículos
                                    </Text>
                                    <Icon
                                        color='VerdeAzulado'
                                    >
                                        <PiPillFill/>
                                    </Icon>

                                </Button>
                            </Link>
                        </Flex>
                        <Flex
                            align='center'
                            gap={3}
                        >
                            <Link
                                to='/proveedores'
                            >
                                <Button
                                    bg='transparent'
                                >
                                    <Text
                                        fontSize='lg'
                                        fontWeight='bold'
                                        color='VerdeAzulado'
                                    >
                                        Proveedores
                                    </Text>
                                    <Icon
                                        color='VerdeAzulado'
                                    >
                                        <FaHospitalUser/>
                                    </Icon>

                                </Button>
                            </Link>
                        </Flex>
                    </VStack>
                </Drawer.Body>
            </Drawer.Content>
            </Drawer.Positioner>
        </Portal>
        </Drawer.Root>
    )
}

export default Navbar