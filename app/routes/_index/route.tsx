import { Button } from "@mantine/core";
import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, MetaFunction } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export const meta: MetaFunction = () => [{ title: "Home page" }];

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const user = await authenticator.isAuthenticated(request, {
        successRedirect: "/languages",
    });
    return { user };
};

export default function IndexLayout() {
    return (
        <div className="flex flex-col justify-center items-center h-full p-16 gap-16">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-8xl font-bold mb-8">Re-Lang</h1>
                <p className="text-lg italic">Your Way to Learning Languages</p>
            </div>
            <div className="flex gap-x-8">
                <Link to="/signup" className="flex-1">
                    <Button size="lg" className="w-64">
                        Sign Up
                    </Button>
                </Link>
                <Link to="/login" className="flex-1">
                    <Button variant="outline" size="lg" className="w-64">
                        Login
                    </Button>
                </Link>
            </div>
        </div>
    );
}
