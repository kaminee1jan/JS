const input = require("readline-sync");
const name = input.question("ENTER YOUR NAME : ");
console.log("Hi", name, "WELCOME TO KBC GAME 😊 ");
let play = input.question("Do You Want To Play KBC Game Say (yes or no) :");
if ("yes" === "yes") {
    console.log("\n Apka Question Apki Screen Ke Upar 👇\n")
    let question = ["1. what is the capital of INDIA ", "2. who's won first cricket wold cup ", "3. how many times has INDIA won the ICC world cup ",
        "4.which is the national game in INDIA ", "5. which is the national tree of india"];

    let first_option = ["1.Dehradun", "1.England", "1. three time", "1. cricket", "1. Mango Tree"];
    let second_option = ["2.Delhi", "2.India", "2. one time", "2.hockey", "2.Neem tree"];
    let third_option = ["3.Rajsthan", "3. pakistan", "3.two time", "3.Base Ball", "3.Ficus bengalensis"];
    let forth_option = ["4. Mumbai", "4. Australia", "4. Five time", "4. Athletics", "4.Banana tree"];

    let ans_key = [2, 1, 3, 2, 3]

    let i = 0;
    let l = question.length;
    let lifeline = 0;

    let life_line_1 = ["1.delhi", "1.india", "1.five time", "1.cricket", "1.ficus bengalenis"];
    let life_line_2 = ["2.Dehradun", "2.England", "2.two time", "Hockey", "2.mango tree"];

    let life_line_ans = [1, 2, 2, 2, 1]

    while (i < l) {
        console.log(question[i])
        console.log(first_option[i])
        console.log(second_option[i])
        console.log(third_option[i])
        console.log(forth_option[i])
        console.log("If You Want LifeLine So Press 5050 👍")
        let user_answer = input.questionInt("Enter Answer :");

        if (user_answer === 5050) {
            if (lifeline === 0) {
                console.log(life_line_1[i])
                console.log(life_line_2[i])
                let life_line = input.questionInt("\n choose your lifeline option-->");
                if (life_line == life_line_ans[i]) {
                    console.log("\n your answer correct 🥳\n")
                }

                else {
                    console.log("\n your answer wrong 😞 \n")
                    break
                }
                lifeline++
            }
            else {
                console.log("\nYou already used lifeline 5050 :)\n ")
                console.log("\nSelect the your answer:) \n")
                i--
            }

        }
        else {
            if (user_answer == ans_key[i]) {
                console.log("\n******Wow! your answer correct 🥳 *******\n ")
            }
            else{
                console.log("\nOhh..!! sad 😞 your answer wrong \n")
                break

            }
        }
        i++


    }

}