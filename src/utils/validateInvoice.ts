export default async function validateInvoice(invoiceNum: string) {
  try {
    // setGeneratingImg(true);
    console.log(invoiceNum);
    const response = await fetch(
      'http://localhost:5000/api/v1/validate-invoice/123',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ invoiceNum }),
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
