interface ErrorBoxProps {
  message: string;
}

export default function ErrorBox({ message }: ErrorBoxProps) {
  return (
    <div 
      className="p-4 bg-alert-50 text-red-900 rounded-md text-center shadow" 
      role="alert"
      aria-live="assertive"
    >
      {message}
    </div>
  );
}