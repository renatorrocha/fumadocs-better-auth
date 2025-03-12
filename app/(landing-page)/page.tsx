"use client";

import Image from "next/image";
import SideImage from "@/assets/side-image.png";
import { signIn } from "@/lib/auth-client";
import { PiGithubLogoFill, PiMicrosoftOutlookLogoFill } from "react-icons/pi";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-background">
      {/* Image Section */}
      <div className="w-full md:w-[60%] relative min-h-[400px] md:min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
        <Image
          src={SideImage}
          alt="Login cover image"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute bottom-8 left-8 z-20 text-white max-w-lg">
          <h2 className="text-3xl font-bold mb-3">
            Documentação super protegida
          </h2>
          <p className="text-sm text-gray-200">
            Se autentifique com o better-auth e proteja sua documentação (feita
            com fumadocs).
          </p>
        </div>
      </div>

      {/* Login Section */}
      <div className="w-full md:w-[40%] p-8 lg:p-12 flex items-center justify-center bg-card">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Bem vindo de volta!
            </h1>
            <p className="text-muted-foreground">
              Entre com suas credenciais para acessar sua conta
            </p>
          </div>

          <div className="pt-4 space-y-2">
            <button
              onClick={() => {
                signIn.social({
                  provider: "microsoft",
                  callbackURL: "/auth",
                });
              }}
              className="w-full cursor-pointer flex items-center justify-center gap-3 px-6 py-3 text-sm font-medium text-white bg-[#2F2F2F] hover:bg-[#404040] rounded-lg transition-colors duration-200 shadow-sm"
            >
              <PiMicrosoftOutlookLogoFill className="h-5 w-5" />
              Entrar com Microsoft
            </button>

            <button
              onClick={() => {
                signIn.social({
                  provider: "github",
                  callbackURL: "/auth",
                });
              }}
              className="w-full cursor-pointer flex items-center justify-center gap-3 px-6 py-3 text-sm font-medium text-white bg-[#2F2F2F] hover:bg-[#404040] rounded-lg transition-colors duration-200 shadow-sm"
            >
              <PiGithubLogoFill className="h-5 w-5" />
              Entrar com Github
            </button>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              Ao continuar, você concorda com nossos Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
