// app/user/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-gray-100">
      <aside className="min-h-screen p-6 w-50">
        <ul>
          <li>
            <a href="/user/dashboard/overview">Overview</a>
          </li>
          <li>
            <a href="/user/dashboard/templates">Templates</a>
          </li>
        </ul>
      </aside>
      <main className="bg-white rounded-lg m-2 flex-1">{children}</main>
    </div>
  );
}
