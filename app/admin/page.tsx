"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Download } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Overview from "@/components/dashboard/overview"
import { CalendarDateRangePicker } from "@/components/date-range-picker"

const topics = [
  {
    value: "government",
    label: "Government",
  },
  {
    value: "hospital",
    label: "Hospital",
  },
  {
    value: "education",
    label: "Education",
  },
]

const Dashboard = () => {
  const [open, setOpen] = React.useState<boolean>(false)
  const [value, setValue] = React.useState<string>("")

  return (
    <div className="container my-5">
      <div className="flex flex-col items-center justify-between space-y-2 sm:flex-row">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <CalendarDateRangePicker />
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="my-4 w-full">
        <Tabs defaultValue="overview">
          <div className="flex w-full flex-col items-center justify-between gap-2 sm:flex-row">
            <TabsList className="w-fit">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="topics" disabled>
                Topics
              </TabsTrigger>
            </TabsList>
            {/* <ComboboxDemo /> */}
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  {value
                    ? topics.find((topic) => topic.value === value)?.label
                    : "Select topic..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search topic..." />
                  <CommandEmpty>No topic found.</CommandEmpty>
                  <CommandGroup>
                    {topics.map((topic) => (
                      <CommandItem
                        key={topic.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue)
                          setOpen(false)
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === topic.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {topic.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <TabsContent value="overview" className="w-full space-y-4">
            <Overview />
          </TabsContent>
          <TabsContent value="topics">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Dashboard
