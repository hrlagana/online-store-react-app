import { addProduct } from "@/store/productSlice";
import { Button } from "../button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useState } from "react";
import { Product, ProductStatus } from "@/features/typings";
import { useDispatch } from "react-redux";
import { createUniqueID } from "@/utils/utils";

import "./NewProductForm.scss"

export const NewProductForm = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState<Product>({
        id: '',
        title: '',
        price: 0,
        status: 'available',
        description: '',
        image: '',
    }); 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newProduct = {
            ...formData,
            id: createUniqueID(),
        };
        dispatch(addProduct(newProduct));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: name === "price" ? parseFloat(value) || 0 : value,
        }));
      };

    return (
        <div className="gap-4">
            <h1 className="new-item-form-header text-xl font-bold uppercase">Add a new fish</h1>
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
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, status: value as ProductStatus }))}
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
                    <Button type="submit" className="w-full mt-2 bg-white hover:bg-blue-200 text-black cursor-pointer border border-gray-300" size="sm">
                        Add product
                    </Button>
                </div>
            </form>
        </div>
    )
}