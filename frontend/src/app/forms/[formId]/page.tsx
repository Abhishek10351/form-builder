import { ViewFormSubmissions } from "@/components/forms/views";


export async function generateStaticParams() {
    return [];
}

interface FormPageProp {
    params: Promise<{ formId: string }>;
}
export default async function FormPage({ params }: FormPageProp) {
    const t = await params;

    return (
        <>
            <p>Hello {t.formId}</p>
            <div suppressHydrationWarning>
                <ViewFormSubmissions formId={t.formId} />
            </div>
        </>
    );
}
