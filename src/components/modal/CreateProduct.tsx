import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useCreateProductMutation } from "@/redux/features/product/productApi";
import { useState } from "react";
import { toast } from "../ui/use-toast";
import { FormValues } from "@/types/FormInterface";

const CreateProduct = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const handleClose = () => {
    setOpen(false);
  };

  const uploadImageToImgbb = async (
    imageFile: File
  ): Promise<string | null> => {
    const apiKey = "800d9ccab79ca9e964c7b1edac462750";
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("key", apiKey || "");

    try {
      const response = await fetch("https://api.imgbb.com/1/upload", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        return result.data.url;
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { name, price, brand, category, quantity, description, image } = data;

    let imageUrl = null;
    if (image && image[0]) {
      imageUrl = await uploadImageToImgbb(image[0]);
      if (!imageUrl) {
        toast({
          variant: "destructive",
          description: "Failed to upload image",
        });
        return;
      }
    }

    const formData = {
      name,
      price,
      brand,
      category,
      stockQuantity: quantity,
      description,
      image: imageUrl,
    };

    try {
      const res = await createProduct(formData).unwrap();

      if (res.success) {
        reset();
        handleClose();
        toast({
          variant: "default",
          description: "Product added successfully",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        description: "Failed to add product",
      });
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="bg-gray-400 text-black hover:text-white">
          <PlusIcon className="h-4 w-4 mr-2 hover:text-white" />
          Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl bg-gradient-to-r from-[#7a7a7a] to-[#505757] text-white">
        <DialogTitle className="bg-gray-700 text-white"></DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* image */}
          <div className="mb-4">
            <Label htmlFor="image">Image</Label>
            <Input
              {...register("image", { required: "Image is required" })}
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="bg-gray-200 text-black placeholder-white outline-none border-black"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
            {selectedImage && (
              <div className="mt-4">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="h-40 w-40 object-cover rounded-md"
                />
              </div>
            )}
          </div>
          {/* product name */}
          <div className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input
              {...register("name", { required: "Product name is required" })}
              id="name"
              type="text"
              placeholder="Enter product name"
              className="bg-gray-200 text-black placeholder-white outline-none border-black"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* price */}
          <div className="mb-4">
            <Label htmlFor="price">Price</Label>
            <Input
              {...register("price", {
                required: "Price is required",
                valueAsNumber: true,
              })}
              id="price"
              type="number"
              placeholder="Enter product price"
              className="bg-gray-300 text-black placeholder-gray-100 outline-none border-black"
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">
                {errors.price.message}
              </p>
            )}
          </div>

          {/* brand */}
          <div className="mb-4">
            <Label htmlFor="brand">Brand</Label>
            <Controller
              name="brand"
              control={control}
              rules={{ required: "Brand is required" }}
              render={({ field }) => (
                <Select {...field} onValueChange={field.onChange}>
                  <SelectTrigger className="bg-gray-200 text-black placeholder-gray-600 border-black">
                    <SelectValue placeholder="Select a Brand" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-500 border border-black">
                    <SelectGroup>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Adidas"
                      >
                        Adidas
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Nike"
                      >
                        Nike
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Puma"
                      >
                        Puma
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Asdics"
                      >
                        Asdics
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Under Armour"
                      >
                        Under Armour
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Reebok"
                      >
                        Reebok
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="New Balance"
                      >
                        New Balance
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Saucy"
                      >
                        Saucy
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.brand && (
              <p className="text-red-500 text-sm mt-1">
                {errors.brand.message}
              </p>
            )}
          </div>

          {/* category */}
          <div className="mb-4">
            <Label htmlFor="category">Category</Label>
            <Controller
              name="category"
              control={control}
              rules={{ required: "Category is required" }}
              render={({ field }) => (
                <Select {...field} onValueChange={field.onChange}>
                  <SelectTrigger className="bg-gray-200 text-black border border-black">
                    <SelectValue placeholder="Select a Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-500 border border-black">
                    <SelectGroup>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Running Shoes"
                      >
                        Running Shoes
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Athletic Apparel"
                      >
                        Athletic Apparel
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Fitness Equipment"
                      >
                        Fitness Equipment
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Outdoor Gear"
                      >
                        Outdoor Gear
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Team Sports"
                      >
                        Team Sports
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Hiking and Camping"
                      >
                        Hiking and Camping
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* quantity */}
          <div className="mb-4">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              {...register("quantity", {
                required: "Quantity is required",
                valueAsNumber: true,
              })}
              id="quantity"
              type="number"
              placeholder="Enter product quantity"
              className="bg-gray-200 text-black placeholder-gray-100 outline-none border-black"
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm mt-1">
                {errors.quantity.message}
              </p>
            )}
          </div>

          {/* description */}
          <div className="mb-4">
            <Label htmlFor="description">Description</Label>
            <Textarea
              {...register("description", {
                required: "Description is required",
              })}
              id="description"
              rows={8}
              placeholder="Enter product description"
              className="bg-gray-300 text-black placeholder-gray-200 outline-none border-black"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#565a5a] to-[#3a3b3b]"
          >
            {isLoading ? "Adding..." : "Add Product"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProduct;
