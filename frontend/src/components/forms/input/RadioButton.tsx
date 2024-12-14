import { Radio, RadioGroup } from "@chakra-ui/react";
import { Container, Box, VStack, Text } from "@chakra-ui/react";

import { RadioButtonProps } from "@/types/input";

const RadioButton = ({ label, options, onChange }: RadioButtonProps) => {
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
                        <RadioGroup>
                            {
                                options.map((option, index) => (
                                    <Radio key={index} value={option.value}>{option.label}</Radio>
                                ))
                            }
                        </RadioGroup>
                    </Box>
                </VStack>
            </Box>
        </Container>
    );
};

export default RadioButton;