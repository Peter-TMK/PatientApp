type Operation = "add" | "multiply" | "divide";
// OR
// type Result = number | string;

const multiplicator = (a: number, b: number, op: Operation): number => {
  //   if (op === "add") {
  //     return a + b;
  //   } else if (op === "multiply") {
  //     return a * b;
  //   } else if (op === "divide") {
  //     if (b === 0) throw new Error("can't divide by 0!");
  //     return a / b;
  //   }

  switch (op) {
    case "add":
      return a + b;
    case "multiply":
      return a * b;
    case "divide":
      if (b === 0) throw new Error("can't divide by 0!");
      return a / b;
    default:
      throw new Error("No type option(s) specified!");
  }
};

try {
  console.log(multiplicator(2, 4, "add"));
  console.log(multiplicator(2, 4, "multiply"));
  console.log(multiplicator(2, 0, "divide"));
} catch (error: unknown) {
  let errorMsg = "Something aint right!";
  if (error instanceof Error) {
    errorMsg += error.message;
  }
  console.log(errorMsg);
}

// multiplicator(2, 4, "Multiplied numbers 2 and 4, the result is:");
// multiplicator(
//   "how about a string?",
//   4,
//   "Multiplied a string and 4, the result is:"
// );
