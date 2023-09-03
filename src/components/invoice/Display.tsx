type InvoiceDisplayProps = {
  openAIMessage?: string;
};

const InvoiceDisplay: React.FC<InvoiceDisplayProps> = ({ openAIMessage }) => {
  return (
    <div className="mt-10 w-full p-10 m-auto bg-white rounded-md shadow-xllg:max-w-xl border-2 border-indigo-700 text-indigo-700">
      <p className="whitespace-pre-wrap">
        {' '}
        {openAIMessage ? openAIMessage : ''}
      </p>
    </div>
  );
};
export default InvoiceDisplay;
