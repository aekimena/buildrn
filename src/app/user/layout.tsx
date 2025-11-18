// app/user/layout.tsx
export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <nav style={{ background: '#eee', padding: '1rem' }}>
        <a href="/user">Home</a> | 
        <a href="/user/profile">Profile</a> | 
        <a href="/user/dashboard">Dashboard</a>
      </nav> */}
      <div>{children}</div>
    </div>
  );
}
