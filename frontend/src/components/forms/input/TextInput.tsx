"use client";
import { Input, Box, Container, VStack, Text } from "@chakra-ui/react";

import { TextInputProps } from "@/types/input";

const TextInput = ({ label, placeholder, value, onChange }: TextInputProps) => {
    return (
        <Container>
            <Box p={4}>
                <VStack>
                    <Box
                        key={1}
                        p={4}
                        borderWidth={1}
                        borderRadius="md"
                        w="100%"
                    >
                        <Text>
                            <strong>{label}:</strong>
                        </Text>
                        <Input
                            type="text"
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                        />
                    </Box>
                </VStack>
            </Box>
        </Container>
    );
};

export default TextInput;
