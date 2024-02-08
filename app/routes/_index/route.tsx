import { LoaderFunctionArgs } from "@remix-run/node";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";
import { authenticator } from "~/services/auth.server";

export const meta: MetaFunction = () => [{ title: "Home page" }];

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const user = await authenticator.isAuthenticated(request, {
        successRedirect: "/notes",
    });
    return { user };
};

export default function IndexLayout() {
    return <div>This is the index layout</div>;
}
