import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [
    {
        title: "Login",
    },
];

export default function LoginPage() {
    return <h1>Login</h1>;
}
