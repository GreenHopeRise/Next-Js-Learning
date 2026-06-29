type Props = {
  params: Promise<{
    productId: string;
  }>;
};

export default async function ProductPage({
  params,
}: Props) {
  const { productId } = await params;

   return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
}

