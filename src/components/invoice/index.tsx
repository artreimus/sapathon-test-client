import React, { useState } from 'react';
import InvoiceForm from './Form';
import validateInvoiceFile from '@/utils/validateInvoiceFile';
import OpenAIDataDisplay from '../display/OpenAIData';
import ExtractedDataDisplay, { ExtractedData } from '../display/ExtractedData';

const Invoice: React.FC = () => {
  const [openAIMessage, setOpenAIMessage] = useState('');
  const [extractedData, setExtractedData] = useState<ExtractedData>();

  const onSearch = async (
    e: React.FormEvent<HTMLFormElement>,
    invoiceNum: string,
    fileValidation: boolean
  ) => {
    e.preventDefault();

    if (!invoiceNum) return;

    let res;
    if (fileValidation) {
      res = await validateInvoiceFile(invoiceNum);
    }

    if (res?.openAIData) {
      setOpenAIMessage(res.openAIData.message.content);
    }

    console.log(res.extractedData);

    if (res?.extractedData) {
      setExtractedData(res.extractedData);
    }
  };

  console.log(extractedData);
  console.log(openAIMessage);

  return (
    <div className="flex flex-col justify-center items-center">
      <InvoiceForm onSearch={onSearch} />
      <ExtractedDataDisplay extractedData={extractedData} />
      <OpenAIDataDisplay openAIMessage={openAIMessage} />
    </div>
  );
};
export default Invoice;
