/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react';
import ShippingForm from './ShippingForm.tsx';

export default function ProductPage({ productId, referrer, theme }:any) {
  const handleSubmit = useCallback((orderDetails:any) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);

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
