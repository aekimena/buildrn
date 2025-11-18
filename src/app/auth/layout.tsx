import Footer from "@/componets/common/Footer";

// app/auth/layout.tsx
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white px-4 min-h-screen flex flex-col">
      <div className="flex items-center justify-center flex-1 pt-20">
        {children}
      </div>
      <Footer />
    </div>
  );
}
