const Separator = ({
  margin,
  background = "bg-gray-100",
}: {
  margin: number;
  background?: string;
}) => {
  return <div className={`w-full h-0.5 ${background} my-${margin}`}></div>;
};

export { Separator };
