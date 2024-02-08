/* eslint-disable @typescript-eslint/no-explicit-any */
import ShippingForm from './ShippingForm.js';

export default function ProductPage({ productId, referrer, theme }:any) {
  function handleSubmit(orderDetails:any) {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

function post(url:string, data:any) {
  // Imagine this sends a request...
  console.log('POST /' + url);
  console.log(data);
}
