import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                VerdeAzulado: { value: '#5C9EAD' },
                AzulProfesional: { value: '#326295' },
                BlancoClinico: { value: '#FFFFFF' },
                GrisNeutral: { value: '#D3D3D3' },
                AzulClaro: { value: '#A7C5EB' },
                VerdeMenta: { value: '#B2D3C2' },
                RojoEmergencia: { value: '#D9534F' },
                MoradoSerio: { value: '#6E5773' },
                BeigeCalido: { value: '#F4E7D3' }
            }
        }
    }
})

const system = createSystem(defaultConfig, config)

export default system