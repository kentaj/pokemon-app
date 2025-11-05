interface ErrorBoxProps {
  message: string;
}

export default function ErrorBox({ message }: ErrorBoxProps) {
  return (
    <div className="p-4 bg-alert-50 text-red-700 rounded-md text-center shadow">
      {message}
    </div>
  );
}
