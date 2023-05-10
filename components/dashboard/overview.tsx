"use client"

import { TabsContent } from "@radix-ui/react-tabs"
import { Meh } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { Icons } from "../icons"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"
import AccountData from "./account-data"
import RadarMetrics from "./radar-chart"
import TimeSeriesChart from "./time-series"

const data = [
  {
    name: "Topic 1",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 2",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 3",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 4",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 5",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 6",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 7",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 8",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 9",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 10",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 11",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 12",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 13",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 14",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 15",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]

const Overview = () => {
  return (
    <div className="flex-1">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
            <Icons.like className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">50000</div>
            <p className="text-xs text-muted-foreground">
              20% Positive - 80% Negative
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Positive Sentiments
            </CardTitle>
            <Icons.like className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3000</div>
            <p className="text-xs text-muted-foreground">
              20.1% of total posts
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Negative Sentiments
            </CardTitle>
            <Icons.dislike className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2350</div>
            <p className="text-xs text-muted-foreground">20% of total posts</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Neutral Sentiments
            </CardTitle>
            <Meh className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2350</div>
            <p className="text-xs text-muted-foreground">20% of total posts</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="90%" height={350}>
            <BarChart data={data}>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="mt-4 grid sm:gap-x-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Sentiment By Topic</CardTitle>
          </CardHeader>
          <CardContent>
            <RadarMetrics />
          </CardContent>
        </Card>

        <Card className="col-span-3 mt-4 lg:mt-0">
          <CardHeader>
            <CardTitle>Most Active Accounts</CardTitle>
            <CardDescription>
              Your users has submitted a total of 1,000 posts.
            </CardDescription>
          </CardHeader>
          {/* NOTE: SHOULD CONTAIN ONLY FIVE ACCOUNTS AT MOST */}
          <CardContent className="flex flex-col gap-y-8">
            <AccountData />
            <AccountData />
            <AccountData />
            <AccountData />
            <AccountData />
          </CardContent>
        </Card>
      </div>

      <div className="mt-4 grid gap-x-4 md:grid-cols-2 lg:grid-cols-8">
        <Card className="col-span-4 mt-4 lg:mt-0">
          <CardHeader>
            <CardTitle>Most Positive Accounts</CardTitle>
            <CardDescription>
              This contains the top five accounts with the highest{" "}
              <strong className="underline">positive</strong> scores.
            </CardDescription>
          </CardHeader>
          {/* NOTE: SHOULD CONTAIN ONLY FIVE ACCOUNTS AT MOST */}
          <CardContent className="flex flex-col gap-y-8">
            <AccountData />
            <AccountData />
            <AccountData />
            <AccountData />
            <AccountData />
          </CardContent>
        </Card>

        <Card className="col-span-4 mt-4 lg:mt-0">
          <CardHeader>
            <CardTitle>Most Negative Accounts</CardTitle>
            <CardDescription>
              This contains the top five accounts with the highest{" "}
              <strong className="underline">negative</strong> scores.
            </CardDescription>
          </CardHeader>
          {/* NOTE: SHOULD CONTAIN ONLY FIVE ACCOUNTS AT MOST */}
          <CardContent className="flex flex-col gap-y-8">
            <AccountData />
            <AccountData />
            <AccountData />
            <AccountData />
            <AccountData />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="positive">
        {" "}
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>
              <div className="flex flex-row items-center justify-between">
                <span>Sentiments over Time</span>
                <TabsList className="grid w-fit grid-cols-2">
                  <TabsTrigger value="positive">Positive</TabsTrigger>
                  <TabsTrigger value="negative">Negative</TabsTrigger>
                </TabsList>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TabsContent value="positive">
              <TimeSeriesChart />
            </TabsContent>
            <TabsContent value="negative">
              <TimeSeriesChart />
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  )
}

export default Overview
