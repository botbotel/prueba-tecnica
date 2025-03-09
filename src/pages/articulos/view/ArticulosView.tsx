import { Badge, Flex } from "@chakra-ui/react";
import { Table } from "@chakra-ui/react";
import { Articulos, ArticulosResponse } from "@/shared/interfaces/articulos";



function ArticulosView({ data }: { data: ArticulosResponse }) {


    return (
        <Flex
            p={5}
            m={5}
            bg='GrisNeutral'
            rounded='lg'
            shadow='md'
        >
            <Table.Root 
                size="sm"
                w='100%'
            >
                <Table.Header>
                    <Table.Row color='VerdeAzulado'>
                        <Table.ColumnHeader textAlign='center' color='VerdeAzulado'>Código</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign='center' color='VerdeAzulado'>Descripcion</Table.ColumnHeader>
                        <Table.ColumnHeader color='VerdeAzulado' textAlign="center">Descripcion corta</Table.ColumnHeader>
                        <Table.ColumnHeader color='VerdeAzulado' textAlign="center">Descripcion alternativa</Table.ColumnHeader>
                        <Table.ColumnHeader color='VerdeAzulado' textAlign="center">ID de articuloExt</Table.ColumnHeader>
                        <Table.ColumnHeader color='VerdeAzulado' textAlign="center">ID de Proveedor</Table.ColumnHeader>
                        <Table.ColumnHeader color='VerdeAzulado' textAlign="center">ID de Propietario</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="end" color='VerdeAzulado'>Estado</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>

                <Table.Body
                    p={5}
                    color='VerdeAzulado'
                >
                        {data.Items.map((articulo:Articulos) => (
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
                        ))}
                </Table.Body>
            </Table.Root>
        </Flex>
    );
}

export default ArticulosView;