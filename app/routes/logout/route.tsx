import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { useAuthenticatedUser } from "~/contexts/UserContext";
import { authenticator } from "~/services/auth.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    return await authenticator.logout(request, { redirectTo: "/login" });
};
