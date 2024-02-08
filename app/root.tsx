import type { LinksFunction } from "@remix-run/node";
import tailwindStylesheet from "~/styles/tailwind.css";
import Document from "./Document";
import Layout from "./components/Layout";
import { Outlet, isRouteErrorResponse, useRouteError } from "@remix-run/react";
import Alert from "./components/Alert";
import { IconAlertTriangleFilled } from "@tabler/icons-react";
import mantineStyleSheet from "@mantine/core/styles.css";
import UserProvider from "./contexts/UserContext";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: tailwindStylesheet },
    { rel: "stylesheet", href: mantineStyleSheet },
];

export default function App() {
    return (
        <Document title="Language Learner">
            <UserProvider>
                <Layout>
                    <Outlet />
                </Layout>
            </UserProvider>
        </Document>
    );
}

export function ErrorBoundary() {
    const error = useRouteError();
    console.error(error);

    return (
        <Document title="Oh no">
            <Layout>
                <div className="px-16 py-8">
                    {isRouteErrorResponse(error) && (
                        <Alert
                            title={error.statusText}
                            type="danger"
                            titleIcon={<IconAlertTriangleFilled />}
                        >
                            <p>{error.data}</p>
                        </Alert>
                    )}
                    {error instanceof Error && (
                        <Alert
                            title={"Error"}
                            type="danger"
                            titleIcon={<IconAlertTriangleFilled />}
                        >
                            <p>{error.message}</p>
                        </Alert>
                    )}
                </div>
            </Layout>
        </Document>
    );
}
