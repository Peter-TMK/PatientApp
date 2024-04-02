// type Operation = "add" | "multiply" | "divide";
// // OR
// // type Result = number | string;

// const multiplicator = (a: number, b: number, op: Operation): number => {
//   //   if (op === "add") {
//   //     return a + b;
//   //   } else if (op === "multiply") {
//   //     return a * b;
//   //   } else if (op === "divide") {
//   //     if (b === 0) throw new Error("can't divide by 0!");
//   //     return a / b;
//   //   }

//   switch (op) {
//     case "add":
//       return a + b;
//     case "multiply":
//       return a * b;
//     case "divide":
//       if (b === 0) throw new Error("can't divide by 0!");
//       return a / b;
//     default:
//       throw new Error("No type option(s) specified!");
//   }
// };

// try {
//   console.log(multiplicator(2, 4, "add"));
//   console.log(multiplicator(2, 4, "multiply"));
//   console.log(multiplicator(2, 0, "divide"));
// } catch (error: unknown) {
//   let errorMsg = "Something aint right!";
//   if (error instanceof Error) {
//     errorMsg += error.message;
//   }
//   console.log(errorMsg);
// }

interface MultiplyValues {
  value1: number;
  value2: number;
}
const parseArguments = (args: string[]): MultiplyValues => {
  if (args.length < 4) throw new Error("Not enough arguments!");
  if (args.length > 4) throw new Error("Too many arguments!");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return { value1: Number(args[2]), value2: Number(args[3]) };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

const multiplicator = (a: number, b: number, printText: string) => {
  console.log(printText, a * b);
};

try {
  const { value1, value2 } = parseArguments(process.argv);
  multiplicator(
    value1,
    value2,
    `Multiplied ${value1} and ${value2}, the result is:`
  );
} catch (error: unknown) {
  let errorMsg = "Something aint right! ";
  if (error instanceof Error) {
    errorMsg += "Error: " + error.message;
  }
  console.log(errorMsg);
}
