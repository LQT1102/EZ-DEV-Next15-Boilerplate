import { AppLoading } from "@/components/base/AppLoading";
import { AppToastContainer } from "@/components/base/AppToastContainer";
import { Header } from "@/components/layouts/Header";

export default async function PublicLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  return (
    <div className="mx-auto w-full max-w-7xl lg:px-8 py-3">
      <Header />

      {children}

      <AppLoading />

      <AppToastContainer />
    </div>
  );
}
