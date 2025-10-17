import { useRef } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import logo from '../../assets/images/logo-recipt.png';
const WEBSITE_URL = "https://devrfgul.vercel.app"; // set your site URL

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
                  body { 
                    font-family: Arial, sans-serif; 
                    color: #111; 
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                  }
                  .receipt-wrapper {
                    max-width: 400px;
                    width: 100%;
                    padding: 20px;
                    box-sizing: border-box;
                  }
                  @media print {
                    body { 
                      -webkit-print-color-adjust: exact;
                      print-color-adjust: exact;
                    }
                    .receipt-wrapper {
                      max-width: 400px;
                      padding: 10px;
                    }
                  }
                </style>
              </head>
              <body>
                <div class="receipt-wrapper">
                  ${printContent}
                  <p style="text-align:center; margin-top: 20px;">
                    <a href="${WEBSITE_URL}">${WEBSITE_URL}</a>
                  </p>
                </div>
                <script>
                  // Wait for images/resources to load before printing
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
      {/* Modal - comfortable viewing size */}
      <div className="bg-white rounded-lg shadow-lg w-96 max-h-[90vh] overflow-auto">
        {/* Receipt Content for Printing */}

        <div ref={invoiceRef} className="p-6">
          {/* add logo visible in modal and printed HTML */}
          <div className="flex justify-center mb-4">
            <img
              src={logo}
              alt="Logo"
              className="w-24 h-auto object-contain"
            />
          </div>

          {/* Receipt Header */}
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
              className="w-12 h-12 border-8 border-green-500 rounded-full flex items-center justify-center shadow-lg bg-green-500"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <FaCheck className="text-white text-xl" />
              </motion.span>
            </motion.div>
          </div>

          <h2 className="text-xl font-bold text-center mb-2">Order Receipt</h2>
          <p className="text-gray-600 text-center text-sm mb-4">Thank you for your order!</p>

          {/* website url */}
          <p className="text-center mb-4">
            <a
              href={WEBSITE_URL}
              target="_blank"
              rel="noreferrer"
              className="underline text-sm text-gray-600"
            >
              {WEBSITE_URL}
            </a>
          </p>

          {/* Order Details */}
          <div className="mt-4 border-t pt-4 text-sm text-gray-700">
            <p className="mb-2">
              <strong>Order ID:</strong>{' '}
              {Math.floor(new Date(orderInfo.orderDate).getTime())}
            </p>
            <p className="mb-2">
              <strong>Name:</strong> {orderInfo.customerDetails.name}
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> {orderInfo.customerDetails.phone}
            </p>
            <p className="mb-2">
              <strong>Guests:</strong> {orderInfo.customerDetails.guests}
            </p>
          </div>

          {/* Items Summary */}
          <div className="mt-4 border-t pt-4">
            <h3 className="text-sm font-semibold mb-3">Items Ordered</h3>
            <ul className="text-sm text-gray-700 items">
              {orderInfo.items.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center py-2"
                >
                  <span className="flex-1 pr-4">
                    {item.name} x{item.quantity}
                  </span>
                  <span className="text-right">₨{(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bills Summary */}
          <div className="mt-4 border-t pt-4 text-sm">
            <p className="mb-2">
              <strong>Subtotal:</strong> ₨{orderInfo.bills.total.toFixed(2)}
            </p>
            <p>
              <strong>Tax:</strong> ₨{orderInfo.bills.tax.toFixed(2)}
            </p>
                        <p className="mb-2">
              <strong>Subtotal:</strong> ₨{orderInfo.bills.total.toFixed(2)}
            </p>
            <p className="mb-2">
              <strong>Tax:</strong> ₨{orderInfo.bills.tax.toFixed(2)}
            </p>
            <p className="text-base font-semibold grand-total">
              <strong>Grand Total:</strong> ₨{orderInfo.bills.totalWithTax.toFixed(2)}
            </p>
          </div>

          {/* Payment Details */}
          <div className="mb-4 mt-4 border-t pt-4 text-sm">
            {orderInfo.paymentMethod === "Cash" ? (
              <p>
                <strong>Payment Method:</strong> {orderInfo.paymentMethod}
              </p>
            ) : (
              <>
                <p className="mb-2">
                  <strong>Payment Method:</strong> {orderInfo.paymentMethod}
                </p>
                <p className="mb-2">
                  <strong>Razorpay Order ID:</strong>{' '}
                  {orderInfo.paymentData?.razorpay_order_id}
                </p>
                <p className="mb-2">
                  <strong>Razorpay Payment ID:</strong>{' '}
                  {orderInfo.paymentData?.razorpay_payment_id}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between p-4 border-t">
          <button
            onClick={handlePrint}
            className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-2 rounded-lg transition-colors"
          >
            Print
          </button>
          <button
            onClick={() => setShowInvoice(false)}
            className="bg-red-500 text-white hover:bg-red-600 px-6 py-2 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
