import { Button, TextInput } from "@mantine/core";
import { ActionFunction, LoaderFunctionArgs, json } from "@remix-run/node";
import {
    Form,
    Link,
    MetaFunction,
    useActionData,
    useLoaderData,
} from "@remix-run/react";
import { useEffect } from "react";
import { useAuthenticatedUser } from "~/contexts/UserContext";
import { authenticator } from "~/services/auth.server";
import { commitSession, getSession } from "~/services/session.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    await authenticator.isAuthenticated(request, {
        successRedirect: "/notes",
    });

    const session = await getSession(request.headers.get("cookie"));
    const error = session.get(authenticator.sessionErrorKey);

    return json(
        { error },
        {
            headers: { "Set-Cookie": await commitSession(session) },
        }
    );
};

export const action: ActionFunction = async ({ request }) => {
    return await authenticator.authenticate("form", request, {
        successRedirect: "/notes",
        failureRedirect: "/login",
    });
};

export const meta: MetaFunction = () => [{ title: "Log In" }];

export default function Login() {
    const { error } = useLoaderData<typeof loader>();
    const { setUser } = useAuthenticatedUser();
    useEffect(() => {
        setUser(null);
    }, []);

    return (
        <div>
            <Form
                method="post"
                className="p-10 max-w-2xl mx-auto flex flex-col gap-y-4"
            >
                <h1 className="font-bold text-2xl">Log In</h1>
                <p>
                    Don't have an account?{" "}
                    <Link to="/signup">Sign up here</Link>
                </p>
                <TextInput label="Email" type="email" id="email" name="email" />
                <TextInput
                    label="Password"
                    type="password"
                    id="password"
                    name="password"
                />
                {error && <p>{error.message}</p>}
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    );
}
