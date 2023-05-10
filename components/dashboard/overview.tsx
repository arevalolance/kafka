"use client"

import { faker } from "@faker-js/faker"
import { TabsContent } from "@radix-ui/react-tabs"
import { Meh } from "lucide-react"

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
import BarMetrics from "./bar-chart"
import RadarMetrics from "./radar-chart"
import TimeSeriesChart from "./time-series"

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
            <div className="text-2xl font-bold">
              {Math.floor(Math.random() * 5000) + 100000}
            </div>
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
            <div className="text-2xl font-bold">
              {Math.floor(Math.random() * 5000) + 30000}
            </div>
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
            <div className="text-2xl font-bold">
              {Math.floor(Math.random() * 5000) + 10000}
            </div>
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
            <div className="text-2xl font-bold">
              {Math.floor(Math.random() * 5000) + 40000}
            </div>
            <p className="text-xs text-muted-foreground">20% of total posts</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Number of posts per Topic</CardTitle>
        </CardHeader>
        <CardContent>
          <BarMetrics />
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
            {Array.from({ length: 5 }, (_, i) => i + 1).map((item) => (
              <AccountData
                key={faker.name.fullName()}
                image={faker.image.avatar()}
                name={faker.name.fullName()}
                email={faker.internet.email()}
                postCount={Math.floor(Math.random() * 200) + 1000}
                positivity={Math.floor(Math.random() * 1) + 30}
                negativity={Math.floor(Math.random() * 1) + 50}
              />
            ))}
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
            {Array.from({ length: 5 }, (_, i) => i + 1).map((item) => (
              <AccountData
                key={faker.name.fullName()}
                image={faker.image.avatar()}
                name={faker.name.fullName()}
                email={faker.internet.email()}
                postCount={Math.floor(Math.random() * 200) + 1000}
                positivity={Math.floor(Math.random() * 1) + 30}
                negativity={Math.floor(Math.random() * 1) + 50}
              />
            ))}
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
            {Array.from({ length: 5 }, (_, i) => i + 1).map((item) => (
              <AccountData
                key={faker.name.fullName()}
                image={faker.image.avatar()}
                name={faker.name.fullName()}
                email={faker.internet.email()}
                postCount={Math.floor(Math.random() * 200) + 1000}
                positivity={Math.floor(Math.random() * 1) + 30}
                negativity={Math.floor(Math.random() * 1) + 50}
              />
            ))}
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
              <TimeSeriesChart sentiment="positive" />
            </TabsContent>
            <TabsContent value="negative">
              <TimeSeriesChart sentiment="negative" />
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  )
}

export default Overview
