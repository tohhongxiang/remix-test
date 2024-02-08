// app/services/auth.server.ts
import { Authenticator, AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { sessionStorage } from "~/services/session.server";
import { User } from "~/types/User";

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator<User>(sessionStorage);

const formStrategy = new FormStrategy(async ({ form }) => {
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    if (email !== "admin@example.com") {
        throw new AuthorizationError("Email is incorrect");
    }

    if (password !== "root") {
        throw new AuthorizationError("Password is incorrect");
    }

    return {
        name: "Admin",
        email,
        password,
        id: "1",
        profilePicture: "",
    };
});

authenticator.use(formStrategy, "form");
