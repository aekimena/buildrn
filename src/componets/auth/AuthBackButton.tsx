import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export function AuthBackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="absolute left-0 top-0 p-6 lg:p-12">
      <button
        className="flex items-center gap-2 text-gray-600 font-normal"
        onClick={handleGoBack}
      >
        <ChevronLeftIcon aria-hidden="true" className="size-5" />
        <p>Back</p>
      </button>
    </div>
  );
}
