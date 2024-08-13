import React from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";

interface Props {
    title: string;
    items: any[];
    className?: string;
    categoryId:number;
    listClassName?: string;
  }

export const ProductsGroupList: React.FC<Props> = ({ className, title, items, categoryId, listClassName }) => {
  return <div className={className}>

    <Title text={title} size="lg" className="font-extrabold mb-5" />
    <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
    {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
            count={i % 2} 
                      />
        ))}
    </div>
  </div>;
};
