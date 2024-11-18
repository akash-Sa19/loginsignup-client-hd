const FormErrorMessage = ({ message }: { message: string }) => {
  if (!message) return null;

  return (
    <div className="w-full p-2 border border-red-500 rounded-md ">
      <p className="text-red-500 font-semibold text-sm"> {message}</p>
    </div>
  );
};

export default FormErrorMessage;
