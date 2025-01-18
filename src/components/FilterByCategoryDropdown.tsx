import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useZState } from "@/states";
import { Texts, textsList } from "@/texts";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Filter } from "iconsax-react";
import { useEffect } from "react";

export function FilterByCategoryDropdown() {
  const { tasks, filteredBy, setFilteredBy, setFilteredTasks } = useZState();

  useEffect(() => {
    handleFilterByCategory(filteredBy);
  }, [tasks]);

  const tagsList = [
    ...new Map(
      tasks.flatMap((task) => task.tags).map((tag) => [tag.tag, tag])
    ).values(),
  ];

  const handleFilterByCategory = (tag: string | null) => {
    setFilteredTasks(
      tasks.filter((task) => task.tags.some((t) => t.tag === tag))
    );
    setFilteredBy(tag);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-x-2">
          <Filter size={16} />
          {filteredBy || Texts(textsList.filter_select)}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-c text-d font-semibold border-0">
        <DropdownMenuGroup className="*:hover:cursor-pointer *:p-1.5 *:m-1 *:outline-none hover:*:bg-a/30 *:rounded-lg">
          {tagsList.map((tag, i) => (
            <DropdownMenuItem
              key={i}
              onClick={() => handleFilterByCategory(tag.tag)}
            >
              <span>{tag.tag}</span>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem
            onClick={() => handleFilterByCategory(null)}
            className="bg-d/10 hover:!bg-d/15 flex justify-center"
          >
            <span>{Texts(textsList.filter_showAll)}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
