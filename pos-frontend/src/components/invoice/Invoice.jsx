import { useRef } from "react";
import logo from '../../assets/images/logo-recipt.png';

const WEBSITE_URL = "https://devrfgul.vercel.app";
const DEVELOPER_NAME = "RF Gul";
const DEVELOPER_CONTACT = "+92 300 1234567";

const Invoice = ({ orderInfo, setShowInvoice }) => {
  const invoiceRef = useRef(null);
  const handlePrint = () => {
    const printContent = invoiceRef.current.innerHTML;
    const WinPrint = window.open("", "", "width=800,height=600");

    WinPrint.document.write(`
            <html>
              <head>
                <meta charset="utf-8" />
                <title>Order Receipt</title>
                <style>
                  * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                  }
                  body { 
                    font-family: 'Courier New', Courier, monospace; 
                    color: #000; 
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                    background: white;
                    padding: 10px;
                  }
                  .receipt-container {
                    max-width: 80mm;
                    margin: 0 auto;
                    font-family: 'Courier New', Courier, monospace;
                  }
                  /* Header styles */
                  .text-center { text-align: center; }
                  .border-b-2 { border-bottom-width: 2px; }
                  .border-dashed { border-style: dashed; }
                  .border-gray-800 { border-color: #1f2937; }
                  .pb-4 { padding-bottom: 1rem; }
                  .mb-4 { margin-bottom: 1rem; }
                  .mb-3 { margin-bottom: 0.75rem; }
                  .mb-2 { margin-bottom: 0.5rem; }
                  .mb-1 { margin-bottom: 0.25rem; }
                  .mt-4 { margin-top: 1rem; }
                  .pt-3 { padding-top: 0.75rem; }
                  .pt-4 { padding-top: 1rem; }
                  .pb-1 { padding-bottom: 0.25rem; }
                  .pb-2 { padding-bottom: 0.5rem; }
                  
                  /* Logo */
                  .w-20 { width: 5rem; }
                  .h-auto { height: auto; }
                  .mx-auto { margin-left: auto; margin-right: auto; }
                  
                  /* Typography */
                  .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
                  .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
                  .text-xs { font-size: 0.75rem; line-height: 1rem; }
                  .text-\\[10px\\] { font-size: 10px; }
                  .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
                  .font-bold { font-weight: 700; }
                  .font-semibold { font-weight: 600; }
                  .uppercase { text-transform: uppercase; }
                  .text-gray-600 { color: #4b5563; }
                  .text-gray-700 { color: #374151; }
                  
                  /* Borders */
                  .border-t-2 { border-top-width: 2px; }
                  .border-t { border-top-width: 1px; }
                  .border-b { border-bottom-width: 1px; }
                  .border-gray-800 { border-color: #1f2937; }
                  .border-gray-300 { border-color: #d1d5db; }
                  .border-gray-400 { border-color: #9ca3af; }
                  .border-solid { border-style: solid; }
                  
                  /* Flexbox */
                  .flex { display: flex; }
                  .justify-between { justify-content: space-between; }
                  
                  /* Display */
                  img { display: block; }
                  
                  @media print {
                    @page {
                      margin: 5mm;
                      size: 80mm auto;
                    }
                    body { 
                      padding: 0;
                      -webkit-print-color-adjust: exact;
                      print-color-adjust: exact;
                    }
                  }
                </style>
              </head>
              <body>
                <div class="receipt-container">
                  ${printContent}
                </div>
                <script>
                  function whenReady(cb) {
                    const imgs = Array.from(document.images);
                    if (!imgs.length) return cb();
                    let loaded = 0;
                    imgs.forEach(img => {
                      if (img.complete) {
                        loaded++;
                      } else {
                        img.addEventListener('load', () => { loaded++; if (loaded === imgs.length) cb(); });
                        img.addEventListener('error', () => { loaded++; if (loaded === imgs.length) cb(); });
                      }
                    });
                    if (loaded === imgs.length) cb();
                  }
                  whenReady(function(){
                    setTimeout(function(){ window.print(); window.close(); }, 300);
                  });
                </script>
              </body>
            </html>
          `);

    WinPrint.document.close();
    WinPrint.focus();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 max-h-[90vh] overflow-auto">
        
        <div ref={invoiceRef} className="p-6" style={{ fontFamily: 'Courier New, monospace' }}>
          
          {/* Header Section */}
          <div className="text-center border-b-2 border-dashed border-gray-800 pb-4 mb-4">
            <img
              src={logo}
              alt="Logo"
              className="w-20 h-auto mx-auto mb-3"
            />
            <h1 className="text-xl font-bold uppercase mb-2">Tasty Bites Cafe</h1>
            <p className="text-xs font-bold mb-1">ORDER RECEIPT</p>
            <p className="text-xs text-gray-600">Thank you for your order!</p>
          </div>

          {/* Order & Customer Info */}
          <div className="mb-4 text-sm">
            <div className="flex justify-between mb-1">
              <span className="font-bold">Order ID:</span>
              <span>{Math.floor(new Date(orderInfo.orderDate).getTime())}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span className="font-bold">Date:</span>
              <span>{new Date(orderInfo.orderDate).toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span className="font-bold">Customer:</span>
              <span>{orderInfo.customerDetails.name}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span className="font-bold">Phone:</span>
              <span>{orderInfo.customerDetails.phone}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span className="font-bold">Guests:</span>
              <span>{orderInfo.customerDetails.guests}</span>
            </div>
          </div>

          {/* Items Section */}
          <div className="border-t-2 border-gray-800 pt-3 mb-3">
            <h3 className="font-bold text-sm uppercase mb-2 border-b border-gray-800 pb-1">Items Ordered</h3>
            <div className="text-xs">
              {orderInfo.items.map((item, index) => (
                <div key={index} className="mb-3 pb-2 border-b border-dashed border-gray-300">
                  <div className="font-semibold mb-1">{item.name}</div>
                  <div className="flex justify-between text-gray-700">
                    <span>{item.quantity} x ₨{item.price.toFixed(2)}</span>
                    <span className="font-bold">₨{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Billing Section */}
          <div className="border-t-2 border-gray-800 pt-3 mb-3 text-sm">
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>₨{orderInfo.bills.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-3">
              <span>Tax:</span>
              <span>₨{orderInfo.bills.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t-2 border-b-2 border-gray-800 py-2">
              <span>GRAND TOTAL:</span>
              <span>₨{orderInfo.bills.totalWithTax.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Details */}
          <div className="border-t border-dashed border-gray-800 pt-3 mb-4 text-xs">
            <div className="flex justify-between mb-1">
              <span className="font-bold">Payment Method:</span>
              <span>{orderInfo.paymentMethod}</span>
            </div>
            {orderInfo.paymentMethod !== "Cash" && orderInfo.paymentData && (
              <>
                <div className="flex justify-between mb-1 text-[10px]">
                  <span>Order ID:</span>
                  <span>{orderInfo.paymentData.razorpay_order_id}</span>
                </div>
                <div className="flex justify-between text-[10px]">
                  <span>Payment ID:</span>
                  <span>{orderInfo.paymentData.razorpay_payment_id}</span>
                </div>
              </>
            )}
          </div>

          {/* Footer Section */}
          <div className="border-t-2 border-dashed border-gray-800 pt-4 text-center">
            <p className="text-xs mb-3">Thank you for dining with us!</p>
            <p className="text-xs mb-1">Visit us again soon</p>
            
            {/* Developer Info */}
            <div className="mt-4 pt-3 border-t border-gray-400 text-[10px] text-gray-600">
              <p className="font-bold text-xs mb-1">System Developed By</p>
              <p className="font-semibold">{DEVELOPER_NAME}</p>
              <p className="mt-1">
                <a href={WEBSITE_URL} className="underline">{WEBSITE_URL}</a>
              </p>
              <p className="mt-1">Contact: {DEVELOPER_CONTACT}</p>
            </div>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex justify-between p-4 border-t">
          <button
            onClick={handlePrint}
            className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-2 rounded-lg transition-colors font-medium"
          >
            Print Receipt
          </button>
          <button
            onClick={() => setShowInvoice(false)}
            className="bg-red-500 text-white hover:bg-red-600 px-6 py-2 rounded-lg transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
