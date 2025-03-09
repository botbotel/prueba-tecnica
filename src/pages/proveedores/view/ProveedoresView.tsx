import { Badge, Flex } from "@chakra-ui/react";
import { Table } from "@chakra-ui/react";
import { Proveedores, ProveedoresResponse } from "@/shared/interfaces/proveedores";



function ProveedoresView({ data }: { data: ProveedoresResponse }) {


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
                        <Table.ColumnHeader textAlign='center' color='VerdeAzulado'>Nombre</Table.ColumnHeader>
                        <Table.ColumnHeader color='VerdeAzulado' textAlign="center">CIF</Table.ColumnHeader>
                        <Table.ColumnHeader color='VerdeAzulado' textAlign="center">Activo</Table.ColumnHeader>

                    </Table.Row>
                </Table.Header>

                <Table.Body
                    p={5}
                    color='VerdeAzulado'
                >
                        {data.Items.map((proveedor:Proveedores) => (
                            <Table.Row key={proveedor.id}>
                            <Table.Cell textAlign='center'>{proveedor.codigo}</Table.Cell>
                            <Table.Cell textAlign='center'>{proveedor.nombre}</Table.Cell>
                            <Table.Cell textAlign='center'>{proveedor.cif}</Table.Cell>
                            <Table.Cell textAlign="center" color={proveedor.activo ? 'green.500' : 'Rojo'}>
                                <Badge fontSize='md' colorPalette={proveedor.activo ? 'green' : 'red'}>
                                    {proveedor.activo ? 'Activo' : 'Inactivo'}
                                </Badge>
                            </Table.Cell>
                        </Table.Row>
                        ))}
                </Table.Body>
            </Table.Root>
        </Flex>
    );
}

export default ProveedoresView;