import React from "react";
import Headers from "@/component/Heading";
import Text from "@/component/Text";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full h-full flex-col flex items-center justify-center">
    <Text> <Link href= "/home/dynamicRoute" > DynamicRoute</Link></Text>
      <Headers >{"<Link>"} Component</Headers>
      <div className="w-6/12">
        <Text>{"<Link>"} is a built-in component that extends the HTML {"<a> "}tag to provide prefetching and client-side navigation between routes. It is the primary and recommended way to navigate between routes in Next.js. </Text>
      </div>
    </div>
  );
};

export default Home;
