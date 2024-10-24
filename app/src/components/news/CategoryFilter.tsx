"use cliente";

import { fetchCategories } from "@/api/fetchCategories";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category } from "@/types/category";
import { useEffect, useState } from "react";

interface CategoryFilterProps {
  onCategoryChange: (category: Category) => void;
}

const CategoryFilter = ({ onCategoryChange }: CategoryFilterProps) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories([{ id: 0, name: "Todas" }, ...data]);
    };
    if (categories.length === 0) getCategories();
  }, []);

  return (
    <div className="flex gap-2 items-center justify-center align-middle mx-4 dark:text-white">
      <h3 className="font-bold text-lg flex-shrink-0">
        Filtro por categoria:{" "}
      </h3>

      <Select
        onValueChange={(value) => {
          const category = categories.find((c) => c.name === value);
          return onCategoryChange(category || { id: 0, name: "Todas" });
        }}
      >
        <SelectTrigger className="w-[160px] border rounded-md capitalize">
          <SelectValue placeholder="Selecione" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem
              key={category.id}
              value={category.name}
              className="capitalize"
            >
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryFilter;
