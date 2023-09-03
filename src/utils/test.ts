interface LineItem {
  description: string;
  quantity: number;
  unitPrice: number;
  totalAmount: number;
}

interface Invoice {
  lineItems: [LineItem];
  totalNet: { value: number };
  totalAmount: { value: number };
  totalTax: { value: number };
  date: { value: string }; // invoice date
  dueDate: { value: string };
  invoiceNumber: { value: string };
  supplierName: { value: string };
  supplierAddress: { value: string };
  customerName: { value: string };
  customerAddress: { value: string };
  locale: { currency: string; value: string };
}
