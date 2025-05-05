import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "../button";
import { Product } from "@/features/typings";
import { updateProduct } from "@/store/productSlice";
import { syncProductChanges } from "@/store/cartSlice";

interface Props {
  product: Product;
}

export const ProductForm = ({ product }: Props) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<Product>({ ...product });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateProduct(formData));
    dispatch(syncProductChanges(formData));
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded-md bg-white mb-4">
        <Input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="mb-2"
        />
        <Input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="mb-2"
        />
        <Select
            value={formData.status}
            onValueChange={(value) =>
                setFormData((prev) => {
                const updated = { ...prev, status: value as Product["status"] };
                dispatch(updateProduct(updated));
                return updated;
                })
            }
        >
          <SelectTrigger className="mb-2">
              <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent className="bg-white">
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="unavailable">Unavailable</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="mb-2"
        />
        <Input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
        />

        <div className="flex gap-2">
            <Button type="submit" className="mt-2 bg-white hover:bg-blue-200 text-black cursor-pointer border border-gray-300" size="sm">
                Save
            </Button>
        </div>
    </form>
  );
};
