export default function CTAFinal() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pb-24">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Ready to dive in?
        </h2>
        <p className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">
          Start your free trial today.
        </p>
      </div>

      <div className="mt-10 flex items-center gap-x-6">
        <a
          href="/auth/signup"
          className="rounded-md bg-indigo-600 px-10 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get Started for free
        </a>
        <a href="#" className="text-sm/6 font-semibold text-gray-900">
          Try it out <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
