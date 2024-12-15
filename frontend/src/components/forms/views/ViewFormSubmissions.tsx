"use client";
import api from "@/config/api";
import { useState, useEffect } from "react";
import {
    Container,
    Box,
    Button,
    Text,
    Heading,
    useToast,
} from "@chakra-ui/react";

interface ViewFormSubmissionsProps {
    formId: string;
}

interface FormSubmission {
    email: string;
    data: string; // Add other fields as necessary
}

const ViewFormSubmissions = ({ formId }: ViewFormSubmissionsProps) => {
    const [formSubmissions, setFormSubmissions] = useState<FormSubmission[]>(
        []
    );
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const toast = useToast();

    useEffect(() => {
        const fetchFormSubmissions = async () => {
            try {
                const response = await api.get(
                    "/forms/" + formId + "/submissions"
                );
                setFormSubmissions(response.data);
                if (formSubmissions.length > 0) {
                    setLoading(false);
                }
            } catch {
                setError("Error fetching form Submissions");
            } finally {
                setLoading(false);
            }
        };

        fetchFormSubmissions();
    }, [formId]);

    const downloadCSV = async () => {
        try {
            const response = await api.get(`/forms/${formId}/submissions/csv`);
            console.log(response.data);
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.style.display = "none";
            a.href = "data:text/csv," + encodeURI(response.data);
            a.download = `form_submissions_${formId}.csv`;
            a.click();
            toast({
                title: "Download successful.",
                description:
                    "The form submissions have been downloaded as a CSV file.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        } catch {
            toast({
                title: "Download failed.",
                description: "There was an error downloading the CSV file.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    if (loading) {
        return <Text>Loading form Submissions...</Text>;
    }

    if (error) {
        return <Text color="red.500">{error}</Text>;
    }

    return (
        <Container centerContent>
            <Box
                maxW="lg"
                w="100%"
                mt={8}
                p={4}
                borderWidth={1}
                borderRadius={8}
                boxShadow="lg"
            >
                <Heading as="h2" size="lg" mb={6} textAlign="center">
                    Form Submissions
                </Heading>
                <Button mt={4} onClick={downloadCSV} colorScheme="teal">
                    Download CSV
                </Button>
            </Box>
        </Container>
    );
};

export default ViewFormSubmissions;
