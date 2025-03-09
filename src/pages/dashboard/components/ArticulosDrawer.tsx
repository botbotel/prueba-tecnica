    import { useState } from 'react';
    import { Badge, CloseButton, Drawer, Flex, Portal, Spinner, Text } from "@chakra-ui/react";
    import { useQuery } from "@tanstack/react-query";
    import { getArticulosAsociados } from "@/shared/middlewares/getAsociados";
    import { Table } from "@chakra-ui/react";
    import { Articulos } from "@/shared/interfaces/articulos";
    import { MdOutlineError } from "react-icons/md";
    import { ArticuloExt } from "@/shared/interfaces/articulosExt";
    import ProovedorDialog from "./ProovedorDialog";

    function ArticulosDrawer({ prop }: { prop: ArticuloExt }) {
    const { data, isLoading, error } = useQuery({
        queryKey: ['articulos'],
        queryFn: () => getArticulosAsociados(),
    });

    const [articulosFiltrados, setArticulosFiltrados] = useState<Articulos[]>([]);

    const articulosRelacionados = data?.Items.filter(
        (articulo: Articulos) => articulo.articuloExt_Id === prop.id
    ) || [];

    const handleFiltrosRecibidos = (proveedoresSelected: string[]) => {
        if (articulosRelacionados) {
        const filtrados = articulosRelacionados.filter((articulo: Articulos) =>
            proveedoresSelected.includes(articulo.proveedor_Id.toString())
        );
        setArticulosFiltrados(filtrados)
        }
    };

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


    const articulosMostrar = articulosFiltrados.length > 0 ? articulosFiltrados : articulosRelacionados

    return (
        <Drawer.Root size='full'>
        <Drawer.Trigger asChild>
            <Text
                cursor='pointer'
                _hover={{ textDecorationLine:'underline' }}
            >
                {prop.descripcion}
            </Text>
        </Drawer.Trigger>
        <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
            <Drawer.Content>
                <Drawer.Header>
                <Drawer.Title 
                    color='VerdeAzulado' 
                    fontSize='3xl' 
                    p={5}
                >
                    <Flex 
                    direction='column' 
                    w='100%' 
                    gap={5}
                    >
                    <Text>Artículos Asociados</Text>
                    <ProovedorDialog onApplyFilters={handleFiltrosRecibidos} />
                    </Flex>
                </Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                <Table.Root size="sm" color='VerdeAzulado'>
                    <Table.Header>
                    <Table.Row bg='VerdeAzulado'>
                        <Table.ColumnHeader textAlign='center' color='BlancoClinico'>Código</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign='center' color='BlancoClinico'>Descripcion</Table.ColumnHeader>
                        <Table.ColumnHeader color='BlancoClinico' textAlign="center">Descripcion corta</Table.ColumnHeader>
                        <Table.ColumnHeader color='BlancoClinico' textAlign="center">Descripcion alternativa</Table.ColumnHeader>
                        <Table.ColumnHeader color='BlancoClinico' textAlign="center">ID de articuloExt</Table.ColumnHeader>
                        <Table.ColumnHeader color='BlancoClinico' textAlign="center">ID de Proveedor</Table.ColumnHeader>
                        <Table.ColumnHeader color='BlancoClinico' textAlign="center">ID de Propietario</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="end" color='BlancoClinico'>Estado</Table.ColumnHeader>
                    </Table.Row>
                    </Table.Header>
                    <Table.Body>
                    {articulosMostrar
                        .map((articulo: Articulos) => (
                            <Table.Row key={articulo.id}>
                                <Table.Cell textAlign='center'>{articulo.codigo}</Table.Cell>
                                <Table.Cell textAlign='center'>{articulo.descripcion}</Table.Cell>
                                <Table.Cell textAlign='center'>{articulo.descripcionCorta}</Table.Cell>
                                <Table.Cell textAlign='center'>{articulo.descripcionAlternativa}</Table.Cell>
                                <Table.Cell textAlign='center'>{articulo.articuloExt_Id}</Table.Cell>
                                <Table.Cell textAlign='center'>{articulo.proveedor_Id}</Table.Cell>
                                <Table.Cell textAlign='center'>{articulo.propietario_Id}</Table.Cell>
                                <Table.Cell textAlign="center" color={articulo.act ? 'green.500' : 'Rojo'}>
                                    <Badge fontSize='md' colorPalette={articulo.act ? 'green' : 'red'}>
                                        {articulo.act ? 'Activo' : 'Inactivo'}
                                    </Badge>
                                </Table.Cell>
                            </Table.Row>
                        ))}    </Table.Body>
                </Table.Root>
                </Drawer.Body>
                <Drawer.CloseTrigger asChild>
                <CloseButton 
                    size="2xl" 
                    bg='transparent' 
                    border='none' 
                />
                </Drawer.CloseTrigger>
            </Drawer.Content>
            </Drawer.Positioner>
        </Portal>
        </Drawer.Root>
    );
    }

    export default ArticulosDrawer;