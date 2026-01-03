export const OrderGuide = () => {
  return (
    <section id="order-guide" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="border-b-4 border-black pb-8 mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-black uppercase">
            How to Order
          </h2>
          <p className="text-gray-400 font-bold tracking-[0.2em] mt-4 text-sm">
            DIRECT ORDERING VIA FACEBOOK // NO DATABASE NEEDED
          </p>
        </div>

        {/* Order Form Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Form Image */}
          <div className="border-4 border-black overflow-hidden bg-gray-50">
            <img
              src="/images/sazOrder.jpg"
              alt="Order Form Reference"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Instructions */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-black text-black mb-4 uppercase">
                Step-by-Step Guide
              </h3>
              <ol className="space-y-4 text-gray-700 font-medium">
                <li className="flex gap-4">
                  <span className="text-2xl font-black text-black min-w-fit">
                    01.
                  </span>
                  <span>
                    <strong>Message us on Facebook</strong> - Send a direct
                    message to our official page
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl font-black text-black min-w-fit">
                    02.
                  </span>
                  <span>
                    <strong>Fill out the Order Form</strong> - Include your
                    name, address, contact number, shirt color, size, and
                    quantity
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl font-black text-black min-w-fit">
                    03.
                  </span>
                  <span>
                    <strong>Confirm Details</strong> - We'll verify your order
                    and send shipping instructions
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl font-black text-black min-w-fit">
                    04.
                  </span>
                  <span>
                    <strong>Payment & Delivery</strong> - Complete payment and
                    wait for your SAZ shirt to arrive
                  </span>
                </li>
              </ol>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href="https://www.facebook.com/tasteexperiencewithmarie"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-8 py-4 font-black text-sm tracking-widest hover:bg-gray-800 transition-all"
              >
                MESSAGE US ON FACEBOOK
              </a>
            </div>
          </div>
        </div>

        {/* Product Details Info Box */}
        <div className="bg-black text-white p-12 border-4 border-gray-300">
          <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter">
            What to Include in Your Order
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Customer Info */}
            <div>
              <h4 className="font-black text-sm tracking-widest mb-4 uppercase text-gray-300">
                Customer Information
              </h4>
              <ul className="space-y-3 text-sm">
                <li>✓ Full Name</li>
                <li>✓ Delivery Address (Complete)</li>
                <li>✓ Contact Number</li>
                <li>✓ Email (Optional)</li>
              </ul>
            </div>

            {/* Product Info */}
            <div>
              <h4 className="font-black text-sm tracking-widest mb-4 uppercase text-gray-300">
                Product Specifications
              </h4>
              <ul className="space-y-3 text-sm">
                <li>✓ Color (Black, Pink, Beige, Gray)</li>
                <li>✓ Size (XS, S, M, L, XL, XXL)</li>
                <li>✓ Quantity</li>
                <li>✓ Special Requests (if any)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Available Colors & Sizes */}
        <div className="mt-16">
          <h3 className="text-2xl font-black text-black mb-8 uppercase">
            Available Options
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Colors */}
            <div className="border-l-4 border-black pl-6">
              <h4 className="font-black text-lg text-black mb-4">COLORS</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Black", code: "#000000" },
                  { name: "White", code: "#FFFFFF" },
                  { name: "Rose Pink", code: "#F4A0A4" },
                  { name: "Beige", code: "#D4B5A0" },
                  { name: "Gray", code: "#888888" },
                ].map((color) => (
                  <div key={color.name} className="text-center">
                    <div
                      className="w-12 h-12 rounded border-2 border-gray-300 mb-2"
                      style={{ backgroundColor: color.code }}
                    />
                    <span className="text-xs font-bold">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="border-l-4 border-black pl-6">
              <h4 className="font-black text-lg text-black mb-4">SIZES</h4>
              <div className="flex flex-wrap gap-2">
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <div
                    key={size}
                    className="border-2 border-black px-4 py-2 font-black text-center"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
