import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useZState } from "@/states";
import { Texts } from "@/texts";
import { textsList } from "@/textsList";
import { compareAsc, compareDesc } from "date-fns";
import { ArrangeVertical } from "iconsax-react";
import { useEffect } from "react";
import { Button } from "./ui/button";

export function SortByDropdown() {
  const { sortBy, setSortBy, tasks, setTasks, isAscending, isEnglish } =
    useZState();

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
        <Button variant={"secondary"}>
          <ArrangeVertical size={16} />
          <span>
            {sortBy == "Date Added"
              ? Texts(textsList.sort_dateAdded, isEnglish)
              : sortBy == "Priority"
              ? Texts(textsList.sort_priority, isEnglish)
              : sortBy == "Remaining Time"
              ? Texts(textsList.sort_remainingTime, isEnglish)
              : ""}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-cLight dark:bg-aDark text-dLight dark:text-bDark font-semibold rtl:font-medium border-0">
        <DropdownMenuRadioGroup
          value={sortBy}
          onValueChange={setSortBy}
          className="*:pl-8 *:p-2 *:m-1 "
        >
          <DropdownMenuRadioItem value="Date Added">
            {Texts(textsList.sort_dateAdded, isEnglish)}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Priority">
            {Texts(textsList.sort_priority, isEnglish)}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Remaining Time">
            {Texts(textsList.sort_remainingTime, isEnglish)}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
