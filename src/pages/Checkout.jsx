function Checkout() {
    return (
      <div className="max-w-lg mx-auto bg-white p-6 shadow rounded-md">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <p className="text-gray-600 mb-4">Enter your payment and delivery details.</p>
        <form>
          <input
            type="text"
            placeholder="Delivery Address"
            className="w-full border rounded-md px-3 py-2 mb-3"
          />
          <input
            type="text"
            placeholder="Card Number"
            className="w-full border rounded-md px-3 py-2 mb-3"
          />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
            Confirm Order
          </button>
        </form>
      </div>
    );
  }
  export default Checkout;
    