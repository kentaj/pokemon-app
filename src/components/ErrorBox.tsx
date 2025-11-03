interface ErrorBoxProps {
  message: string;
}

export default function ErrorBox({ message }: ErrorBoxProps) {
  return (
    <div className="p-4 bg-[var(--color-alert-50)] text-red-700 rounded-md text-center border border-red-400">
      {message}
    </div>
  );
}
