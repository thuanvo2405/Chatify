import type { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-160 min-h-screen items-center justify-center">
      <div className="mx-auto grid h-4/5 w-4/5 grid-cols-2 rounded-xl shadow-[4px_4px_10px_0px_rgba(0,0,0,0.25)]">
        <div className="bg-tertiary-container flex flex-col items-center justify-evenly">
          <img
            src="logo.png"
            alt="Image 2 chat burble smile is logo app"
            className="bg-tertiary-foreground w-3/7"
          />
          <h1 className="text-tertiary text-center">
            Welcome to your <br /> cozy space
          </h1>
          <p className="text-tertiary font-semibold">
            Grab a warm drink and catch up with friends on Cozy Chat.
          </p>
        </div>
        <div>
          <div>
            <p className="flex items-center">
              <img
                src="logo.png"
                alt="Image 2 chat burble smile is logo app"
                className="w-24"
              />
              <h3 className="text-primary">Cozy Chat</h3>
            </p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
