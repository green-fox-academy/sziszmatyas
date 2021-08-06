import * as test from "tape";
import { oddSum } from "./oddSum";

test("oddSum returns 4 when [1, 3] is given", t =>  {
    //AAA (Arrange, Act, Assert)
    const numbers = [1, 3];
    const expected = 4;

    const actual = oddSum(1, 3);

    t.equal(actual, expected);
    t.end();
}) 