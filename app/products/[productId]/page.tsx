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
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nam quia expedita ex magnam. Reiciendis, asperiores a ducimus vitae, tempora dicta incidunt doloribus dolorum quisquam neque illum accusamus quasi corporis.
      </div>
    </div>
  );
}

