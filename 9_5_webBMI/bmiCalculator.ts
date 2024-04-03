export const calculateBmi = (
  weight: number,
  height: number
): string | object => {
  let heightInMeterSquare = (height / 100) ** 2;
  const bmi = weight / heightInMeterSquare;
  //   console.log(bmi);
  // return "Normal (healthy weight)";

  if (isNaN(bmi)) {
    return { error: "malformatted parameters" };
  } else if (bmi < 18.5) {
    return { weight, height, bmi: "Underweight" };
  } else if (bmi >= 18.5 && bmi < 25) {
    return { weight, height, bmi: "Normal (healthy weight)" };
  } else if (bmi >= 25 && bmi < 30) {
    return { weight, height, bmi: "Overweight" };
  } else {
    return { weight, height, bmi: "Obese" };
  }
};

// const parseArguments = (
//   args: Array<string>
// ): { height: number; weight: number } => {
//   if (args.length !== 4) throw new Error("Invalid number of arguments");
//   if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
//     return {
//       height: Number(args[2]),
//       weight: Number(args[3]),
//     };
//   } else {
//     throw new Error("Invalid arguments");
//   }
// };

// try {
//   const { height, weight } = parseArguments(process.argv);
//   console.log(calculateBmi(height, weight));
// } catch (error) {
//   console.log("Error:", error.message);
// }

// console.log(calculateBmi(180, 74));
