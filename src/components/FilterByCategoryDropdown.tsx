import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useZState } from "@/states";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Filter } from "iconsax-react";

export function FilterByCategoryDropdown() {
  const { tasks, setTasks, filterByCategory, setFilterByCategory } =
    useZState();

  function handleFilterByCategory(id: string) {
    setTasks(tasks.filter((task) => task.tags.some((t) => t.id === id)));
  }

  const tagsList = [...new Set(tasks.flatMap((task) => task.tags))];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-x-2">
          <Filter size={16} />
          test
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-c text-d font-semibold border-0">
        <DropdownMenuGroup className="*:hover:cursor-pointer *:p-1.5 *:m-1">
          {tagsList.map((tag) => (
            <DropdownMenuItem onClick={() => handleFilterByCategory(tag.id)}>
              <span>{tag.tag}</span>
            </DropdownMenuItem>
          ))}
          {/* <DropdownMenuItem onClick={() => setPriority(1)}>
            <span>Low</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setPriority(2)}>
            <span>Medium</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setPriority(3)}>
            <span>High</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="bg-d/10 hover:!bg-d/15 flex justify-center"
            onClick={() => setPriority(0)}
          >
            <span>Cancel</span>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
