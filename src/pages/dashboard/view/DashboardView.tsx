import { ArticulosExtResponse } from "@/shared/interfaces/articulosExt";
import { Badge, Flex } from "@chakra-ui/react";
import { Table } from "@chakra-ui/react";
import ArticulosDrawer from "../components/ArticulosDrawer";



function DashboardView({ data }: { data: ArticulosExtResponse }) {


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
                <Table.Header
                    alignItems='center'
                    bg='VerdeAzulado'
                    color='BlancoClinico'
                >
                    <Table.Row>
                        <Table.ColumnHeader color='VerdeAzulado'>Código</Table.ColumnHeader>
                        <Table.ColumnHeader color='VerdeAzulado'>Descripcion</Table.ColumnHeader>
                        <Table.ColumnHeader color='VerdeAzulado'>Descripcion corta</Table.ColumnHeader>
                        <Table.ColumnHeader color='VerdeAzulado'>Descripcion alternativa</Table.ColumnHeader>
                        <Table.ColumnHeader color='VerdeAzulado'>Estado</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>

                <Table.Body
                    p={5}
                    color='VerdeAzulado'
                    cursor='pointer'
                >
                        {data.Items.map((articulo) => (
                            <Table.Row 
                            key={articulo.id}
                            >
                                            <Table.Cell>{articulo.codigo}</Table.Cell>
                                            <Table.Cell><ArticulosDrawer prop={articulo}/></Table.Cell>
                                            <Table.Cell>{articulo.descripcionCorta}</Table.Cell>
                                            <Table.Cell>{articulo.descripcionAlternativa}</Table.Cell>
                                            <Table.Cell>
                                                <Badge
                                                    fontSize='md'
                                                    textAlign='center'
                                                    colorPalette={articulo.activo ? "green" : "red"}
                                                >
                                                    {articulo.activo ? "Activo" : "Inactivo"}
                                                </Badge>
                                            </Table.Cell>
                                </Table.Row>
                        ))}
                </Table.Body>
            </Table.Root>
        </Flex>
    );
}

export default DashboardView;