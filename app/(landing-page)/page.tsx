import Image from "next/image";
import FindeslabLogo from "@/assets/Findeslab-picture.jpeg";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-[70%] relative min-h-[300px] md:min-h-screen">
        <Image
          src={FindeslabLogo}
          alt="Login cover image"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="w-full md:w-[30%] p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-4 text-center">
            <div>
              <h1 className="text-3xl font-bold">Bem vindo de volta!</h1>
              <p className="text-muted-foreground">
                Entre com suas credenciais para acessar sua conta
              </p>
            </div>

            <button className="px-4 py-2 border border-gray-300 rounded-md">
              Entrar com Microsoft
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
