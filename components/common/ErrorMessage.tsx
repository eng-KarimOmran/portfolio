import { MdErrorOutline } from "react-icons/md";

export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="text-sm flex justify-start items-center gap-4 text-red-500 h-6">
      {message && <MdErrorOutline />}
      <span>{message}</span>
    </div>
  );
}
