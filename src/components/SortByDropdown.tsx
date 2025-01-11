import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useZState } from "@/states";
import { compareAsc, compareDesc } from "date-fns";
import { ArrangeVertical } from "iconsax-react";
import { useEffect } from "react";

export function SortByDropdown() {
  const { sortBy, setSortBy, tasks, setTasks, isAscending } = useZState();

  useEffect(() => {
    handleSortBy(isAscending);
  }, [sortBy, isAscending]);

  function handleSortBy(order: boolean) {
    let sortedTasks = [...tasks];
    switch (sortBy) {
      case "Date Added":
        sortedTasks = sortedTasks.sort((a, b) =>
          order
            ? compareAsc(new Date(a.dateAdded), new Date(b.dateAdded))
            : compareDesc(new Date(a.dateAdded), new Date(b.dateAdded))
        );
        break;
      case "Priority":
        sortedTasks = sortedTasks.sort((a, b) =>
          order ? a.priority - b.priority : b.priority - a.priority
        );
        break;
      case "Remaining Time":
        sortedTasks = sortedTasks.sort((a, b) => {
          if (!a.deadlineDate && !b.deadlineDate) return 0;
          if (!a.deadlineDate) return 1;
          if (!b.deadlineDate) return -1;
          return order
            ? compareAsc(new Date(a.deadlineDate), new Date(b.deadlineDate))
            : compareDesc(new Date(a.deadlineDate), new Date(b.deadlineDate));
        });
        break;
      default:
        break;
    }
    setTasks(sortedTasks);
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-x-2">
          <ArrangeVertical size={16} />
          {sortBy}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-c text-d font-semibold border-0">
        <DropdownMenuRadioGroup
          value={sortBy}
          onValueChange={setSortBy}
          className="*:pl-8 *:p-2 *:m-1"
        >
          <DropdownMenuRadioItem value="Date Added">
            Date Added
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Priority">
            Priority
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Remaining Time">
            Remaining Time
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
