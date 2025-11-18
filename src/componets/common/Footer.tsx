export default function Footer() {
  const footerLinks = [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "About", href: "#" },
    { name: "Help", href: "#" },
    { name: "Contact", href: "#" },
  ];
  return (
    <footer className="py-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 py-3">
            {footerLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-normal text-gray-700"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div>
            <p className="text-xs text-gray-500 font-extralight">
              &copy; {new Date().getFullYear()} BuildRN. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
