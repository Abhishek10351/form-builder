import { Checkbox } from "@chakra-ui/react";

import { Box, Container, VStack, Text } from "@chakra-ui/react";

import { CheckBoxProps } from "@/types/input";

const CheckBox = ({ label, onChange }: CheckBoxProps) => {
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
                            <strong>{label}</strong>
                        </Text>
                        <Checkbox onChange={onChange}>OK</Checkbox>
                    </Box>
                </VStack>
            </Box>
        </Container>
    );
};

export default CheckBox;
