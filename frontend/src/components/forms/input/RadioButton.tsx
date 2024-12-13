import { Radio, RadioGroup } from "@chakra-ui/react";
import { Container, Box, VStack, Text } from "@chakra-ui/react";

const RadioButton = () => {
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
                            <strong>Radio Button:</strong>
                        </Text>
                        <RadioGroup>
                            <Radio value="1">Radio 1</Radio>
                            <Radio value="2">Radio 2</Radio>
                            <Radio value="3">Radio 3</Radio>
                        </RadioGroup>
                    </Box>
                </VStack>
            </Box>
        </Container>
    );
};

export default RadioButton;