"use client";
import {
    Container,
    Heading,
    Text,
    SimpleGrid,
    Flex,
    Box,
    Button,
    Image,
    Stack,
    useColorMode,
    useColorModeValue,
    Link,
    Icon,
    HStack,
} from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const HomePage = () => {
    const { colorMode } = useColorMode();
    const bgColor = useColorModeValue("gray.50", "gray.800");
    const textColor = useColorModeValue("gray.700", "gray.200");

    return (
        <Container maxW="container.lg" p={10} bg={bgColor}>
            <Flex direction="column" align="center">
                <Heading as="h1" size="2xl" mb={5} color={textColor}>
                    Build Powerful Forms with Ease
                </Heading>
                <Text
                    fontSize="xl"
                    mb={10}
                    textAlign="center"
                    color={textColor}
                >
                    Create stunning, responsive, and user-friendly forms in
                    minutes with our intuitive drag-and-drop interface.
                </Text>
                <Button colorScheme="blue" size="lg">
                    Get Started Now
                </Button>
            </Flex>

            <SimpleGrid columns={[1, null, 2]} spacing={10} mt={10}>
                <Box>
                    <Image
                        src="https://placeholder.co/100" // Replace with your image path
                        alt="Form Builder Feature 1"
                        borderRadius="md"
                    />
                    <Heading as="h3" size="md" mt={5} color={textColor}>
                        Drag-and-Drop Interface
                    </Heading>
                    <Text color={textColor}>
                        Effortlessly create complex forms by simply dragging and
                        dropping pre-built components.
                    </Text>
                </Box>
                <Box>
                    <Image
                        src="https://placeholder.co/100" 
                        alt="Form Builder Feature 2"
                        borderRadius="md"
                    />
                    <Heading as="h3" size="md" mt={5} color={textColor}>
                        Extensive Customization
                    </Heading>
                    <Text color={textColor}>
                        Customize every aspect of your forms, from field types
                        and validation rules to styling and conditional logic.
                    </Text>
                </Box>
            </SimpleGrid>

            <Stack spacing={8} align="center" mt={10}>
                <Heading as="h2" size="xl" mb={5} color={textColor}>
                    Key Features
                </Heading>
                <SimpleGrid columns={[1, 2, 3]} spacing={6}>
                    <Box>
                        <Text color={textColor}>Drag-and-Drop Builder</Text>
                    </Box>
                    <Box>
                        <Text color={textColor}>Conditional Logic</Text>
                    </Box>
                    <Box>
                        <Text color={textColor}>Data Validation</Text>
                    </Box>
                    <Box>
                        <Text color={textColor}>File Uploads</Text>
                    </Box>
                    <Box>
                        <Text color={textColor}>Integrations</Text>
                    </Box>
                    <Box>
                        <Text color={textColor}>Responsive Design</Text>
                    </Box>
                </SimpleGrid>
            </Stack>

            <Flex justifyContent="center" mt={10}>
                <Button colorScheme="blue" size="lg">
                    Explore More Features
                </Button>
            </Flex>

            <Flex justifyContent="center" mt={10}>
                <HStack spacing={4}>
                    <Link href="https://github.com/Abhishek10351" isExternal>
                        <Icon as={FaGithub} color={textColor} />
                    </Link>
                    <Link href="https://x.com/Abhik266" isExternal>
                        <Icon as={FaTwitter} color={textColor} />
                    </Link>
                </HStack>
            </Flex>
        </Container>
    );
};

export default HomePage;
