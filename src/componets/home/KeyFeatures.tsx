export default function KeyFeatures() {
  const features = [
    {
      title: "AI-Powered Component Generator",
      description:
        "SVG images scale without quality degradation, making them not just 6K but future-ready.",
      image: "/icons/scalability.svg",
    },
    {
      title: "Industry-Specific Template Library",
      description:
        "From optimized PNG images to using tens of SVGs together, never worry about page speeds.",
      image: "/icons/filesize.svg",
    },
    {
      title: "Your own colors",
      description:
        "Always use artwork matching your brand with live color-edit and on-the-fly image generation.",
      image: "/icons/colors.svg",
    },
    {
      title: "Timeless design",
      description:
        "Minimalistic illustrations with subtle shadows & multi-level objects for human web designs.",
      image: "/icons/design.svg",
    },
    {
      title: "Do whatever you want",
      description:
        "Use it on commercial or personal projects worry-free. Just don't copy unDraw. Open license, babe!",
      image: "/icons/freedom.svg",
    },
    {
      title: "Perfect for everything",
      description:
        "Fast, beautiful websites, eye-catching social and blog posts or real-world banners? You choose!",
      image: "/icons/everything.svg",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
          Everything you need to build your app
        </p>
        <p className="mt-6 text-lg/8 text-gray-600">
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
          Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
          In mi viverra elit nunc.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition"
          >
            {/* <img src={feature.image} alt={feature.title} className="w-12 h-12 mb-4" /> */}
            <h3 className="mb-2 text-base/7 font-semibold text-gray-900">
              {feature.title}
            </h3>
            {/* <h3 className="text-lg font-semibold mb-2">{feature.title}</h3> */}
            {/* <p className="text-gray-600 text-sm">{feature.description}</p> */}
            <dd className="mt-2 text-base/7 text-gray-600">
              {feature.description}
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
}
