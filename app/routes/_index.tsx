import { type V2_MetaFunction } from "@remix-run/node";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  UserButton,
  SignOutButton,
} from "@clerk/remix";
import { Link, useNavigate } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="text-3xl font-bold underline">
      <div className="border-red-500">
        <SignOutButton signOutCallback={() => navigate('/')} />
      </div>
      <SignedIn>
        <h1>Index route</h1>
        <p>Estas conectado!</p>
        <Link to={'/task/create'}>
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Crear tarea
          </button>
        </Link>
        <UserButton afterSignOutUrl='/' />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
