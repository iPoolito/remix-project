import { Outlet } from "@remix-run/react";

import { getAuth } from "@clerk/remix/ssr.server";
import { type LoaderFunction, redirect } from "@remix-run/node";

export const loader: LoaderFunction = async (args) => {
    const { sessionId } = await getAuth(args);
    console.log(sessionId)
    if (!sessionId) {
        return redirect("/login");
    }
    return null;
}

export default function Layout() {

    return (
        <Outlet />
    )

}