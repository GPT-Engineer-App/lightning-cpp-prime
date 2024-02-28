import React, { useState } from "react";
import { Box, Button, Container, Heading, Text, VStack, Code, useToast, Image } from "@chakra-ui/react";
import { FaCalculator } from "react-icons/fa";

const Index = () => {
  const [mersennePrime, setMersennePrime] = useState(null);
  const toast = useToast();

  // Simulate the calculation of the largest known Mersenne prime
  const calculateMersennePrime = () => {
    // Pretend we are doing some complex calculation
    setMersennePrime("2^82,589,933 − 1");

    // Show a toast to simulate the completion of a calculation
    toast({
      title: "Calculation Complete",
      description: "The largest known Mersenne prime has been found!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} as="article">
        <Heading as="h1" size="2xl">
          Fastest Mersenne Prime Finder
        </Heading>
        <Text>This website simulates finding the largest known Mersenne prime using C++.</Text>
        <Button leftIcon={<FaCalculator />} colorScheme="teal" onClick={calculateMersennePrime}>
          Calculate Largest Known Mersenne Prime
        </Button>
        {mersennePrime && (
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading as="h2" size="lg">
              Largest Known Mersenne Prime
            </Heading>
            <Code>{mersennePrime}</Code>
          </Box>
        )}
        <Image src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjJTJCJTJCJTIwY29kZXxlbnwwfHx8fDE3MDkxMTAwOTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="C++ Code Simulation" />
      </VStack>
    </Container>
  );
};

export default Index;
