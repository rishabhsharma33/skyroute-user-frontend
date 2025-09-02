import type { ReactNode } from "react";
import MinimalHeader from "../pages/auth/AuthHeader";
import MinimalFooter from "../pages/auth/AuthFooter";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <MinimalHeader />
      <main className="flex-1 flex items-center justify-center">{children}</main>
      <MinimalFooter />
    </div>
  );
};

export default AuthLayout;
