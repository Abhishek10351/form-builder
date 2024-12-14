"use client";
import { Input, Box, Container, VStack, Text } from "@chakra-ui/react";

import { DateInputProps } from "@/types/input";


const DateInput = ({ label, placeholder, value, onChange }: DateInputProps) => {
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
                            type="date"
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

export default DateInput;
