import { useState } from 'react';

type InvoiceFormProps = {
  onUpload: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

const InvoiceForm: React.FC<InvoiceFormProps> = ({ onUpload }) => {
  const [invoiceNum, setInvoiceNum] = useState<string>();

  return (
    <div className="flex flex-col justify-center">
      <div className="w-full p-10 m-auto bg-white rounded-md shadow-xllg:max-w-xl border-2 border-indigo-700 text-indigo-700">
        <h1 className="text-3xl font-semibold text-center  uppercase">
          Sapathon Invoice Validator
        </h1>
        <form className="mt-6 " onSubmit={onUpload}>
          <div className="mb-2">
            <label
              htmlFor="invoiceNumber"
              className="text-black block text-sm font-semibold text-gray-800"
            >
              Invoice Number
            </label>
            <input
              onChange={(e) => setInvoiceNum(e.target.value)}
              value={invoiceNum}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default InvoiceForm;
