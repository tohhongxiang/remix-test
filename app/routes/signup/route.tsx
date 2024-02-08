import { Button, TextInput } from "@mantine/core";
import { ActionFunction, LoaderFunctionArgs } from "@remix-run/node";
import { Form, Link, MetaFunction } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    return await authenticator.isAuthenticated(request, {
        successRedirect: "/notes",
    });
};

export const action: ActionFunction = async ({ request }) => {
    const form = await request.formData();
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    // create user
    console.log({ email, password });

    return await authenticator.authenticate("form", request, {
        successRedirect: "/notes",
        failureRedirect: "/login",
        context: { formData: form },
    });
};

export const meta: MetaFunction = () => [{ title: "Sign Up" }];

export default function Signup() {
    return (
        <div>
            <Form
                method="post"
                className="p-10 max-w-2xl mx-auto flex flex-col gap-y-4"
            >
                <h1 className="font-bold text-2xl">Sign Up</h1>
                <p>
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
                <TextInput label="Email" type="email" id="email" name="email" />
                <TextInput
                    label="Password"
                    type="password"
                    id="password"
                    name="password"
                />
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    );
}
