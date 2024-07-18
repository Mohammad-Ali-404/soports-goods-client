import CreateProduct from "@/components/modal/CreateProduct";
import EditProduct from "@/components/modal/EditProduct";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/redux/features/product/productApi";
import { TProduct } from "@/types/ProductInterface";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

import { MdDeleteOutline } from "react-icons/md";

const ManageProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const { data: products, isLoading } = useGetAllProductsQuery({ searchTerm });

  const [deleteProduct] = useDeleteProductMutation(undefined);

  const handleDeleteProduct = async (id: string) => {
    const res = await deleteProduct(id).unwrap();

    if (res.success) {
      toast({
        variant: "default",
        description: res?.message,
      });
    }
  };

  return (
    <div className="bg-gray-300 py-8 min-h-[calc(100vh-240px)]">
      <Container>
        <div>
          <div className="flex items-center justify-between">
            <div className="relative w-full md:w-auto">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearch}
                className="pl-10 pr-4 py-2 rounded-md w-full md:w-64 bg-white text-black border-gray-700"
              />
            </div>
            <CreateProduct />
          </div>
          <div className="py-8">
            <Table className="bg-slate-300 text-black border-gray-700">
              <TableHeader className="bg-gray-200">
                <TableRow>
                  <TableHead className="w-[100px] text-black">NO</TableHead>
                  <TableHead className="text-black">Name</TableHead>
                  <TableHead className="text-black">Price</TableHead>
                  <TableHead className="text-right text-black">Brand</TableHead>
                  <TableHead className="text-right text-black">
                    Category
                  </TableHead>
                  <TableHead className="text-right text-black">Stock</TableHead>
                  <TableHead className="text-right text-black">
                    Ratings
                  </TableHead>
                  <TableHead className="text-right text-black">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="w-full">
                {products?.data?.length < 1 ? (
                  <p className="text-black px-5 py-2 w-[200px] font-bold flex items-center justify-center">
                    No products found
                  </p>
                ) : isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50"></div>
                  </div>
                ) : (
                  products?.data?.map(
                    (
                      {
                        _id,
                        name,
                        price,
                        brand,
                        category,
                        stockQuantity,
                        rating,
                        image,
                      }: TProduct,
                      index: number
                    ) => (
                      <TableRow
                        key={index + 1}
                        className="border-t bg-white border-gray-700 hover:bg-slate-50"
                      >
                        <TableCell className="font-medium text-black">
                          {index + 1}
                        </TableCell>
                        <TableCell className="text-black">
                          <div className="flex items-center gap-4">
                            <img
                              src={image}
                              alt="Product Image"
                              className="w-12 h-12 object-cover rounded-md bg-white"
                            />
                            <span>{name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-black">{price}</TableCell>
                        <TableCell className="text-right text-black">
                          {brand}
                        </TableCell>
                        <TableCell className="text-right text-black">
                          {category}
                        </TableCell>
                        <TableCell className="text-right text-black">
                          {stockQuantity}
                        </TableCell>
                        <TableCell className="text-right text-black">
                          {rating}
                        </TableCell>
                        <TableCell className="text-right text-black">
                          <EditProduct id={_id} />
                          <Button
                            onClick={() => handleDeleteProduct(_id)}
                            size="sm"
                            className="bg-red-500"
                          >
                            <MdDeleteOutline />
                          </Button>
                        </TableCell>
                      </TableRow>
                    )
                  )
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ManageProducts;
