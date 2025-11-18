// app/auth/page.tsx
import { redirect } from "next/navigation";

export default function DashboardRootPage() {
  redirect("/user/dashboard/overview");
}
