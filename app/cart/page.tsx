import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { fetchOrCreateCart, updateCart } from "@/utils/actions";
import SectionTitle from "@/components/global/SectionTitle";
import CartItemsList from "@/components/cart/CartItemsList";
import CartTotals from "@/components/cart/CartTotals";

export default async function Cart() {
  const { userId } = auth();
  if (!userId) redirect("/");

  const prevCart = await fetchOrCreateCart({ userId });
  const { cartItems, currentCart } = await updateCart(prevCart);

  if (cartItems.length === 0) return <SectionTitle text="Empty cart" />;

  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList cartItems={cartItems} />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals cart={currentCart} />
        </div>
      </div>
    </>
  );
}
