import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
    return {
        id: params.id,
    };
}

export default function SpecificNotePage() {
    const { id } = useLoaderData<typeof loader>();

    return <div>This is the id page {id}</div>;
}
