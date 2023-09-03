import React from 'react';

type OpenAIDataDisplayProps = {
  openAIMessage?: string;
};

const OpenAIDataDisplay: React.FC<OpenAIDataDisplayProps> = ({
  openAIMessage,
}) => {
  return (
    <div className="mt-10 w-full p-10 m-auto bg-white rounded-md shadow-xllg:max-w-xl border-2 border-indigo-700 text-indigo-700 ">
      <h2 className="font-bold text-center text-4xl">OpenAI Result</h2>
      <hr className="my-4" />
      <p className="whitespace-pre-wrap ">
        {openAIMessage ? openAIMessage : ''}
      </p>
    </div>
  );
};
export default OpenAIDataDisplay;
