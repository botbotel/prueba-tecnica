import { userLogin } from "@/shared/middlewares/auth";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/shared/context/AuthContext";
import { toaster } from "@/components/ui/toaster";

function Login() {
    const navigate = useNavigate();
    const { login: authLogin } = useAuth()
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validationSchemaLogin = Yup.object({
        login: Yup.string().required('El usuario es obligatorio'),
        password: Yup.string().required('La contraseña es obligatoria'),
    });

    const onSubmit = async (values: { login: string; password: string; }) => {
        setIsSubmitting(true);
        try {
            const token = await userLogin(values.login, values.password); 
            authLogin(token)
            toaster.success({
                description:'Login correcto',
                duration:3000
            })
            navigate('/dashboard'); 
        } catch (error) {
            toaster.error({
                description: `El login ha fallado: ${error}`,
                duration: 3000,
                type: 'error',
        }) 
        }finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Flex
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
            height='100vh'
            boxShadow="xl"
            bg='BlancoClinico'
        >
            <Text
                fontSize="24px"
                fontWeight="700"
                mb='5'
                layerStyle='textGradient'
                color='VerdeAzulado'
            >
                Iniciar Sesión
            </Text>
            <Formik
                initialValues={{ login: '', password: '' }}
                validationSchema={validationSchemaLogin}
                validateOnSubmit={true}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={onSubmit}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <Box
                            display='flex'
                            flexDirection='column'
                            gap='3px'
                            minW="268px"
                            bg='VerdeAzulado'
                            p={10}
                            rounded='md'
                            shadow='lg'
                        >
                            <Input
                                placeholder='Usuario'
                                id='login'
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.login}
                                name="login"
                                bg='BlancoClinico'
                            />
                            <Text
                                opacity={props.errors.login ? 1 : 0}
                                color="RojoEmergencia"
                                fontSize="12px"
                                mt="3px"
                            >
                                {props.errors.login}
                            </Text>

                            <Input
                                placeholder='Contraseña'
                                id='password'
                                type="password"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.password}
                                name="password"
                                bg='BlancoClinico'
                            />

                            <Text
                                opacity={props.errors.password ? 1 : 0}
                                color="RojoEmergencia"
                                fontSize="12px"
                                mt="3px"
                            >
                                {props.errors.password}
                            </Text>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} mt={5} gap={3} flexDirection={'column'}>
                                <Button
                                    w="100%"
                                    id='login_button'
                                    p='5'
                                    type="submit"
                                    bg='BlancoClinico'
                                    color='VerdeAzulado'
                                    disabled={isSubmitting}
                                >
                                    Entrar
                                </Button>
                            </Box>
                        </Box>
                    </form>
                )}
            </Formik>
        </Flex>
    );
}

export default Login;