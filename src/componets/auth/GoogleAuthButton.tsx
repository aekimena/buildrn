export default function GoogleAuthButton({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <button
      onClick={onPress}
      className="w-full mt-4 flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-50"
    >
      <img src="/googleLogo.svg" alt="Google" className="w-5 h-5 mr-2" />
      <p className="text-gray-700 font-medium text-base">{title}</p>
    </button>
  );
}
