"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "@/zod/schemas/login.schema";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { Eye, EyeClosed } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { useTheme } from "next-themes";

export default function LoginForm() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      correo: "",
      contrasena: "",
    },
  });
  useEffect(() => {
    setMounted(true);
  }, []);

  const onSubmit = async (data: LoginSchema) => {
    const res = await signIn("credentials", {
      correo: data.correo,
      contrasena: data.contrasena,
      redirect: false,
    });

    if (res?.error) {
      toast.error("Usuario o contraseña incorrectos");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-sm flex flex-col  gap-4"
      >
        <div className="flex justify-center ">
          {mounted && (
            <Image
              src={theme === "dark" ? "/img/logodark.png" : "/img/logo.png"}
              alt="Logo"
              height={200}
              width={200}
              className="md:hidden flex"
            />
          )}
        </div>

        <Typography
          variant="h2"
          className="text-2xl font-bold mb-4 text-center"
        >
          Iniciar Sesión
        </Typography>
        <FormField
          control={form.control}
          name="correo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Usuario</FormLabel>
              <FormControl>
                <Input placeholder="Usuario" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contrasena"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Contraseña"
                    {...field}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    tabIndex={-1}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground"
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    {showPassword ? <Eye /> : <EyeClosed />}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant={"default"}
          className="mt-2 font-semibold transition"
          disabled={form.formState.isSubmitting}
        >
          Entrar
        </Button>
      </form>
    </Form>
  );
}
