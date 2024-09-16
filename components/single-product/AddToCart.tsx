import { Button } from "@/components/ui/button";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function AddToCart({ productId }: { productId: string }) {
  return (
    <Button className="capitalize mt-8" size="lg">
      Add to cart
    </Button>
  );
}
