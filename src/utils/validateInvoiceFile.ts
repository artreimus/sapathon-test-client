export default async function validateInvoiceFile(invoiceNum: string) {
  try {
    const response = await fetch(
      //   `http://localhost:5000/api/v2/validate-invoice/invoice-image/${invoiceNum}`,
      `https://sapathon-test-server.onrender.com/api/v2/validate-invoice/invoice-image/${invoiceNum}`,
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
}
