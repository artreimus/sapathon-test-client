import React from 'react';
import { v1 as uuidv1 } from 'uuid';

export interface ExtractedData {
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  supplier: { name: string; address: string };
  customer: { name: string; address: string };
  lineItems: Array<{
    description: string;
    quantity: number;
    totalAmount: number;
    unitPrice: number;
  }>;
  totalNet: number;
  taxRate: number;
  totalTax: number;
  totalAmount: number;
}

interface ExtractedDataDisplayProps {
  extractedData?: ExtractedData;
}

const ExtractedDataDisplay: React.FC<ExtractedDataDisplayProps> = ({
  extractedData,
}) => {
  return (
    <div className="mt-10 w-full py-10 px-14 m-auto bg-white rounded-md shadow-xllg:max-w-xl border-2 border-indigo-700 text-indigo-700">
      <h2 className="font-bold text-center text-4xl">Extracted Data Result</h2>
      <hr className="my-4" />

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-white">
          <thead className="text-xs text-gray-700 uppercase bg-indigo-700 text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Fields
              </th>
              <th scope="col" className="px-6 py-3">
                Data
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b bg-indigo-800 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                Invoice Number
              </th>
              <td className="px-6 py-4">
                {extractedData?.invoiceNumber || ''}
              </td>
            </tr>
            <tr className=" border-b bg-indigo-800 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                Invoice Date
              </th>
              <td className="px-6 py-4">{extractedData?.invoiceDate || ''}</td>
            </tr>
            <tr className=" border-b bg-indigo-800 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                Due Date
              </th>
              <td className="px-6 py-4">{extractedData?.dueDate || ''}</td>
            </tr>

            <tr className=" border-b bg-indigo-800 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                Supplier Name
              </th>
              <td className="px-6 py-4">
                {extractedData?.supplier?.name || ''}
              </td>
            </tr>
            <tr className=" border-b bg-indigo-800 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                Supplier Address
              </th>
              <td className="px-6 py-4">
                {extractedData?.supplier?.address || ''}
              </td>
            </tr>
            <tr className=" border-b bg-indigo-800 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                Customer Name
              </th>
              <td className="px-6 py-4">
                {extractedData?.customer?.name || ''}
              </td>
            </tr>
            <tr className=" border-b bg-indigo-800 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                Customer Address
              </th>
              <td className="px-6 py-4">
                {extractedData?.customer?.address || ''}
              </td>
            </tr>
            {extractedData?.lineItems.map((lineItem, index) => (
              <>
                <tr className="border-b bg-indigo-600" key={uuidv1()}>
                  <td
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                    colSpan={3}
                  >
                    {`Line Item ${index + 1}`}
                  </td>
                </tr>
                <tr className=" border-b bg-indigo-500 " key={uuidv1()}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    Description
                  </th>
                  <td className="px-6 py-4">{lineItem?.description || ''}</td>
                </tr>
                <tr className=" border-b bg-indigo-500 " key={uuidv1()}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    Quantity
                  </th>
                  <td className="px-6 py-4">{lineItem?.quantity || ''}</td>
                </tr>
                <tr className=" border-b bg-indigo-500 " key={uuidv1()}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    Unit Price
                  </th>
                  <td className="px-6 py-4">{lineItem?.unitPrice || ''}</td>
                </tr>
                <tr className=" border-b bg-indigo-500 " key={uuidv1()}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    Amount
                  </th>
                  <td className="px-6 py-4">{lineItem?.totalAmount || ''}</td>
                </tr>
              </>
            ))}

            <tr className=" border-b bg-indigo-800 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                Sub Total
              </th>
              <td className="px-6 py-4">{extractedData?.totalNet || ''}</td>
            </tr>
            <tr className=" border-b bg-indigo-800 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                Tax Rate
              </th>
              <td className="px-6 py-4">{extractedData?.taxRate || ''}</td>
            </tr>
            <tr className=" border-b bg-indigo-800 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                Sales Tax
              </th>
              <td className="px-6 py-4">{extractedData?.totalTax || ''}</td>
            </tr>
            <tr className=" border-b bg-indigo-800 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                Total
              </th>
              <td className="px-6 py-4">{extractedData?.totalAmount || ''}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ExtractedDataDisplay;
//   totalNet: number;
//   taxRate: number;
//   totalTax: number;
//   totalAmount: number;
