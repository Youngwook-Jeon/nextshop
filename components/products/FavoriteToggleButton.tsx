import { FaHeart } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export default function FavoriteToggleButton({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  productId,
}: {
  productId: string;
}) {
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
}
