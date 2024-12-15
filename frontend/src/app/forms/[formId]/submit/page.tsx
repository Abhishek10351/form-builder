import { SubmitForm } from "@/components/forms/views";

export async function generateStaticParams() {
    return [];
}

interface FormPageProp {
    params: Promise<{ formId: string }>;
}

export default async function FormPage({ params }: FormPageProp) {
    const formId = (await params).formId;
    return (
        <>
            <SubmitForm formId={formId} />
        </>
    );
}
