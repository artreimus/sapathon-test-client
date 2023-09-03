export default async function validateInvoiceFile(invoiceNum: string) {
  try {
    // setGeneratingImg(true);
    const response = await fetch(
      `http://localhost:5000/api/v2/validate-invoice/invoice-image/${invoiceNum}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return await response.json();
  } catch (error) {
    alert(error);
  }
  //   finally {
  //     setGeneratingImg(false);
  //   }
}
