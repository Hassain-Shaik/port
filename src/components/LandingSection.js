import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Hassain shaik!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    {/* The UI for the landing section */}
    <VStack spacing={16}>
      <VStack spacing={5}>
        <Avatar
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          size="2xl"
          name="Hassain"
        />
        <Heading as="h4" size="md" noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={7}>
        <Heading as="h1" size="4xl" noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as="h1" size="4xl" noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>
    {/* The UI for the landing section */}
  </FullScreenSection>
);

export default LandingSection;
