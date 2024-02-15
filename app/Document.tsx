import {
    Links,
    LiveReload,
    Meta,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export default function Document({
    children,
    title,
}: {
    children: React.ReactNode;
    title?: string;
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
                <ColorSchemeScript />
            </head>
            <body>
                <MantineProvider>
                    {children}
                    <LiveReload />
                    <ScrollRestoration />
                    <Scripts />
                </MantineProvider>
            </body>
        </html>
    );
}
