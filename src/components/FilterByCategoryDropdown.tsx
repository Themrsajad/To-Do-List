import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useZState } from "@/states";
import { Texts } from "@/texts";
import { textsList } from "@/textsList";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Filter } from "iconsax-react";
import { useEffect } from "react";

export function FilterByCategoryDropdown() {
  const { tasks, filteredBy, setFilteredBy, setFilteredTasks, isEnglish } =
    useZState();

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
          {filteredBy || Texts(textsList.filter_select, isEnglish)}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-c text-d font-semibold rtl:font-medium border-0">
        <DropdownMenuGroup className="hover:*:cursor-pointer *:p-1.5 *:m-1 *:outline-hidden *:hover:bg-a/30 *:rounded-lg">
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
            className="bg-d/10 hover:bg-d/15! flex justify-center"
          >
            <span>{Texts(textsList.filter_showAll, isEnglish)}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
