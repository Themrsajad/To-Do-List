import { Add, Category } from "iconsax-react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useZState } from "@/states";
import { Texts } from "@/texts";
import { textsList } from "@/textsList";
import { DropdownMenuCheckboxes } from "./ui/dropdown-menu-multiple";
import colors from "../../colors";

export default function MobileAddCategory() {
  const {
    tagInputValue,
    setTagInputValue,
    isEnglish,
    tagsList,
    setCheckedTags,
    checkedTags,
    isDark,
  } = useZState();

  return (
    <Drawer>
      <DrawerTrigger>
        <div className="flex flex-col items-center gap-1">
          <Button
            size={"lg"}
            variant={"secondary"}
            className={`font-[Quicksand] px-4 sm:mr-2 rtl:ml-2 text-base size-12 sm:h-full sm:w-auto `}
          >
            <Category size={24} />
          </Button>
          <span className="text-xs font-medium">Category</span>
        </div>
      </DrawerTrigger>
      <DrawerContent className="px-6 bg-cLight">
        <DrawerHeader>
          <DrawerTitle>Enter a Category</DrawerTitle>
          <DrawerDescription>or choose from List</DrawerDescription>
        </DrawerHeader>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-2">
            <input
              value={tagInputValue}
              onChange={(e) => setTagInputValue(e.target.value)}
              placeholder={Texts(
                textsList.form_categoryinputPlaceholder,
                isEnglish
              )}
              className="bg-cLight dark:bg-aDark/30 placeholder-dLight/30 dark:placeholder-bDark/30 text-dLight dark:text-bDark basis-0.5 h-full text-sm font-medium rounded-lg outline-hidden focus:ring-1 ring-inset ring-dLight dark:ring-aDark indent-2 py-2"
              type="text"
              autoFocus
            />
            {tagsList.length > 0 && <DropdownMenuCheckboxes />}
          </div>
          <div className="flex items-center">
            <span className="text-dLight dark:text-bDark font-medium text-sm no-select">
              {Texts(textsList.form_categoryCategories, isEnglish)}
            </span>
            {checkedTags.map((tag, i) => (
              <span
                key={i}
                className="flex items-center gap-x-2 text-sm bg-cLight dark:bg-aDark/30 text-dLight dark:text-bDark font-semibold rtl:font-medium px-2 py-2 bg-white/50 rounded-lg shadow-sm outline-hidden no-select"
              >
                <Button
                  onClick={() =>
                    setCheckedTags(
                      checkedTags.filter((tag) => tag.id !== tag.id)
                    )
                  }
                  size={"lg"}
                  className="rounded-full"
                >
                  <Add
                    size={16}
                    color={isDark ? colors.cDark : colors.bLight}
                    className="rotate-45"
                  />
                </Button>
                {tag.tag}
              </span>
            ))}
          </div>
        </div>

        <DrawerFooter>
          <DrawerClose className="flex items-center justify-center gap-2">
            <Button className="text-red dark:text-red bg-0 shadow-none">
              Cancel
            </Button>
            <Button className="px-4">Submit</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
