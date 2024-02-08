import { Button } from "@mantine/core";
import { ActionFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
    Form,
    MetaFunction,
    NavLink,
    Outlet,
    useLoaderData,
} from "@remix-run/react";
import { useEffect } from "react";
import { useAuthenticatedUser } from "~/contexts/UserContext";
import { authenticator } from "~/services/auth.server";

export const meta: MetaFunction = () => [
    {
        title: "Note",
    },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const user = await authenticator.isAuthenticated(request, {
        failureRedirect: "/login",
    });

    return { user };
};

export const action: ActionFunction = async ({ request }) => {
    const form = await request.formData();
    console.log(form.get("action"));
    const action = form.get("action");

    if (action === "logout") {
        return authenticator.logout(request, { redirectTo: "/logout" });
    }

    return null;
};

const links = [{ href: "/notes", label: "Notes" }];

export default function Notes() {
    const { user } = useLoaderData<typeof loader>();
    const { setUser } = useAuthenticatedUser();

    useEffect(() => {
        setUser(user);
    }, [user]);

    return (
        <div className="flex h-full">
            <div>
                <p>Logged in as: {user.name}</p>
                <ul className="flex flex-col w-[300px] border-r border-gray-600/10">
                    {links.map((link) => (
                        <NavLink
                            to={link.href}
                            className={({ isActive }) =>
                                `${isActive ? "font-bold" : ""}`
                            }
                            key={link.href}
                        >
                            <li className="p-4 hover:bg-gray-400/10">
                                {link.label}
                            </li>
                        </NavLink>
                    ))}
                    <li>
                        <Form method="post">
                            <Button type="submit" name="action" value="logout">
                                Log out
                            </Button>
                        </Form>
                    </li>
                </ul>
            </div>
            <div className="grow">
                <Outlet />
            </div>
        </div>
    );
}
