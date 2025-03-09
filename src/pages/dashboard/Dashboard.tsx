import Header from "@/shared/layout/Header";
import DashboardView from "./view/DashboardView";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/shared/middlewares/getArticulosExt";
import { MdOutlineError } from "react-icons/md";
import { useAuth } from "@/shared/context/AuthContext";


function Dashboard() {
    const { token } = useAuth();

    const { isLoading, error, data } = useQuery({
        queryKey: ['articulosext', token], 
        queryFn: () => getData(token!), 
        enabled: !!token
    });

    if (isLoading) return (
        <Flex
            align='center'
            justify='center'
            h='100vh'
            w='100%'
            bg='BlancoClinico'
        >
            <Flex
                bg='VerdeAzulado'
                color='BlancoClinico'
                p={20}
                gap={5}
                direction='column'
                align='center'
                shadow='lg'
                rounded='lg'
            >
                <Spinner
                    size='xl'
                    color="BlancoClinico"
                />
                <Text
                    color="BlancoClinico"
                    fontSize='xl'
                >
                    Cargando artículos...
                </Text>
            </Flex>
        </Flex>
    );

    if (error) return (
        <Flex
            align='center'
            justify='center'
            h='100vh'
            w='100%'
            bg='BlancoClinico'
        >
            <Flex
                bg='VerdeAzulado'
                color='BlancoClinico'
                p={20}
                gap={5}
                direction='column'
                align='center'
                shadow='lg'
                rounded='lg'
            >
                <Text
                    fontSize='4xl'
                >
                    <MdOutlineError
                        color="BlancoClinico"
                    />
                </Text>
                <Text
                    color="BlancoClinico"
                    fontSize='xl'
                >
                    Error al cargar artículos
                </Text>
            </Flex>
        </Flex>
    );

    return (
        <Flex
            flexDirection="column"
            w='100%'
            h='100vh'
        >
            <Header titulo="Articulos" />
            <DashboardView data={data} />
        </Flex>
    );
}

export default Dashboard;