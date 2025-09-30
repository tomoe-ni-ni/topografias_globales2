import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex flex-1 bg-contain bg-no-repeat bg-[url(/img/fondo.png)] dark:bg-[url(/img/fondodark.png)] bg-center p-8" />
      <div className="flex flex-1 items-center justify-center bg-white dark:bg-background p-8">
        <LoginForm />
      </div>
    </div>
  );
}
