import { useState } from 'react';
import { Proveedores } from "@/shared/interfaces/proveedores";
import { getProveedores } from "@/shared/middlewares/getProveedores";
import { Button, CloseButton, Dialog, Flex, Portal, Text, useDisclosure } from "@chakra-ui/react";
import { Fieldset, For } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FaFilter } from "react-icons/fa";
import { Checkbox } from '@/components/ui/checkbox';

interface ProovedorDialogProps {
    onApplyFilters: (proveedoresSelected: string[]) => void
}

function ProovedorDialog({ onApplyFilters }: ProovedorDialogProps) {

        const { data, isLoading, error } = useQuery({
        queryKey: ['proveedores'],
        queryFn: () => getProveedores(),
    });

    const { onClose } = useDisclosure()

    const [proveedoresSelected, setProveedoresSelected] = useState<string[]>([])

    const handleCheckboxChange = (proveedorId: string) => {
        setProveedoresSelected((prev) =>
        prev.includes(proveedorId)
            ? prev.filter((id) => id !== proveedorId) 
            : [...prev, proveedorId] 
        );
    };

    const handleApplyFilters = () => {
        onApplyFilters(proveedoresSelected)
        onClose()
    };

    if (isLoading) return <Text>Cargando...</Text>
    if (error) return <Text>Error al cargar los proveedores</Text>

    return (
        <Dialog.Root 
            size='lg'
        >
        <Dialog.Trigger asChild>
            <Flex>
            <Button 
                bg='VerdeAzulado' 
                size="sm" 
                gap={3}
            >
                <Text>Filtrar</Text>
                <FaFilter />
            </Button>
            </Flex>
        </Dialog.Trigger>
        <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
            <Dialog.Content>
                <Dialog.Header>
                <Dialog.Title 
                    color='VerdeAzulado'
                >
                    Filtrar proveedores
                </Dialog.Title>
                </Dialog.Header>
                <Dialog.Body 
                    direction='column'
                >
                <Fieldset.Root>
                    <Fieldset.Legend 
                        fontSize="sm" 
                        mb="2" 
                        color='VerdeAzulado'
                    >
                    Selecciona uno o varios proveedores
                    </Fieldset.Legend>
                    <Fieldset.Content>
                    <For each={data.Items}>
                        {(proveedor: Proveedores) => (
                        <Flex 
                            key={proveedor.id} 
                            align="center" 
                            gap={2}
                        >
                            <Checkbox
                                checked={proveedoresSelected.includes(proveedor.id.toString())}
                                onChange={() => handleCheckboxChange(proveedor.id.toString())}
                                bg='transparent'
                                color='VerdeAzulado'
                            />
                            <Flex 
                                direction="column"
                            >
                            <Text 
                                fontWeight="bold" 
                                color='VerdeAzulado'
                            >
                                {proveedor.codigo}
                            </Text>
                            <Text 
                                color='VerdeAzulado'
                            >
                                {proveedor.cif} {proveedor.nombre}
                            </Text>
                            </Flex>
                        </Flex>
                        )}
                    </For>
                    </Fieldset.Content>
                </Fieldset.Root>
                </Dialog.Body>
                <Dialog.Footer>
                <Button 
                    bg='VerdeAzulado' 
                    onClick={handleApplyFilters}
                >
                    Aplicar filtros
                </Button>
                </Dialog.Footer>
                <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
                </Dialog.CloseTrigger>
            </Dialog.Content>
            </Dialog.Positioner>
        </Portal>
        </Dialog.Root>
    );
    }

export default ProovedorDialog;