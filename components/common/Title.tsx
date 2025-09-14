export default function Title({ title }: { title: string }) {
  return (
    <div className="w-full flex flex-col items-center gap-2 py-8">
      <span className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        {title}
      </span>
      <span className="block h-0.5 w-12 rounded bg-(--main)" />
    </div>
  );
}
