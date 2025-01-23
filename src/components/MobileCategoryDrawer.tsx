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
import { v4 } from "uuid";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";
v4();

export default function MobileCategoryDrawer() {
  const {
    tagInputValue,
    setTagInputValue,
    isEnglish,
    tagsList,
    setCheckedTags,
    checkedTags,
    isDark,
    isMobile,
    setTags,
    tags,
  } = useZState();

  function handleAddTags(e: any) {
    e.preventDefault();
    if (!tagInputValue) return;
    setTags([...tags, { id: v4(), tag: tagInputValue }]);
    setTagInputValue("");
  }

  function handleClearTags() {
    setTagInputValue("");
    setTags([]);
    setCheckedTags([]);
  }
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="flex flex-col items-center gap-1">
          <Button
            size={"lg"}
            variant={"mobile"}
            className={cn(
              "font-[Quicksand] px-4 sm:mr-2 rtl:sm:ml-2 text-base size-12 sm:h-full sm:w-auto",
              (checkedTags.length > 0 || tags.length > 0) &&
                "bg-aLight dark:bg-aDark"
            )}
          >
            <Category
              size={24}
              variant="Bold"
              color={
                checkedTags.length > 0 || tags.length > 0
                  ? isDark
                    ? colors.bDark
                    : colors.bLight
                  : isDark
                  ? colors.aDark
                  : colors.aLight
              }
            />
          </Button>
          <span className="text-xs font-medium text-dLight dark:text-bDark">
            {Texts(textsList.form_category, isEnglish)}
          </span>
        </div>
      </DrawerTrigger>
      <DrawerContent className="px-6 bg-cLight dark:bg-aDark30 text-dLight dark:text-bDark">
        <DrawerHeader>
          <DrawerTitle>
            {Texts(textsList.form_categoryTitleMobile, isEnglish)}
          </DrawerTitle>
          <DrawerDescription>
            {Texts(textsList.form_categoryDescriptionMobile, isEnglish)}
          </DrawerDescription>
        </DrawerHeader>

        <div className="flex flex-col gap-6">
          <form
            onSubmit={handleAddTags}
            className="flex items-center gap-4 h-10 mt-4"
          >
            <div className="relative flex items-center size-full">
              <input
                value={tagInputValue}
                onChange={(e) => setTagInputValue(e.target.value)}
                placeholder={Texts(
                  textsList.form_categoryinputPlaceholderMobile,
                  isEnglish
                )}
                className="bg-aLight/20 dark:bg-aDark/30 placeholder-dLight/30 dark:placeholder-bDark/30 text-dLight dark:text-bDark basis-[1/2] w-full h-full text-sm font-medium rounded-lg outline-hidden focus:ring-1 ring-inset ring-dLight dark:ring-aDark indent-2"
                type="text"
                autoFocus={!isMobile}
              />
              <Button
                type="submit"
                onClick={(e) => handleAddTags(e)}
                className="absolute h-full w-10 ltr:rounded-r-lg ltr:rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none ltr:right-0 rtl:left-0 z-30"
              >
                <Add color={isDark ? colors.cDark : colors.cLight} size={16} />
              </Button>
            </div>
            {tagsList.length > 0 && <DropdownMenuCheckboxes />}
          </form>
          <div className="flex items-center w-full pb-2">
            {checkedTags.length > 0 || tags.length > 0 ? (
              <span className="text-dLight dark:text-bDark font-medium text-sm no-select text-nowrap pr-2">
                {Texts(textsList.form_categoryCategories, isEnglish)}
              </span>
            ) : (
              <span className="text-dLight dark:text-bDark font-medium text-sm no-select text-nowrap pr-2">
                {Texts(textsList.form_categoryNoCategoryMobile, isEnglish)}
              </span>
            )}
            <ScrollArea className="min-h-9">
              <div className="flex items-center gap-x-4">
                {checkedTags.map((tagg, i) => (
                  <span
                    key={i}
                    className="flex size-fit items-center gap-x-2 text-sm bg-aLight/20 dark:bg-aDark text-dLight dark:text-bDark font-semibold rtl:font-medium px-2 py-2 bg-white/50 rounded-lg shadow-sm outline-hidden no-select text-nowrap"
                  >
                    <Button
                      onClick={() =>
                        setCheckedTags(
                          checkedTags.filter((tag) => tag.id !== tagg.id)
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
                    {tagg.tag}
                  </span>
                ))}
                {tags.map((tagg, i) => (
                  <span
                    key={i}
                    className="flex size-fit items-center gap-x-2 text-sm bg-aLight/20 dark:bg-aDark text-dLight dark:text-bDark font-semibold rtl:font-medium px-2 py-2 bg-white/50 rounded-lg shadow-xs outline-hidden no-select text-nowrap"
                  >
                    <Button
                      onClick={() =>
                        setTags(tags.filter((tag) => tag.id !== tagg.id))
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
                    {tagg.tag}
                  </span>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
        <DrawerFooter className="py-4 px-0">
          <DrawerClose className="flex items-center justify-center gap-4">
            <Button
              onClick={() => handleClearTags()}
              className="absolute right-2 top-2 bg-cLight dark:bg-aDark30 shadow-none"
            >
              <Add
                size={28}
                color={isDark ? colors.bDark : colors.dLight}
                className="rotate-45 opacity-60"
              />
            </Button>
            <Button className="py-3 px-0 text-base w-full mb-4!">
              {Texts(textsList.form_submit, isEnglish)}
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
