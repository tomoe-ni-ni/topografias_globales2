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
      {/* Imagen a la izquierda */}
      <div className="hidden md:flex flex-1 bg-contain bg-no-repeat bg-[url(/img/fondo.png)] bg-center p-8" />
      {/* Formulario a la derecha */}
      <div className="flex flex-1 items-center justify-center bg-white dark:bg-background p-8">
        <LoginForm />
      </div>
    </div>
  );
}
