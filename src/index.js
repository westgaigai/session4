/**
 * const,let等の変数宣言
 *
 */
// var val1 = "var変数";
// console.log(val1);

// // 　varを上書きしてみる
// val1 = "varを上書きしてみる";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "varの再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// letは再宣言ができない。
// let val2 = "letを再宣言";

// const val3 = "const変数"
// console.log(val3)

// const変数は上書き不可
// val3 = "const上書き"

// constは再宣言も不可
// const val3 = "const再宣言"

// constでもオブジェクトの中身は変更できる。
// const val4 = {
//   name: "るみか",
//   age: "20"
// }

// val4.name = "ゆうと"
// val4.addres ="広島"
// console.log(val4)

// const val5 = ["dog", "cat"]
// val5[0] = "犬"
// val5.push("bird")
// console.log(val5)

/**
 * テンプレート文字列について
 */
// const name = "じゃけぇ";
// const age = 28;
// 出力として私の名前はじゃけぇです。年齢は２８歳です。と出力させる。

// 従来の方法 +で結合していた。。。。
// const msg1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(msg1);

// 新しい方法
// const msg2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(msg2)

// アロー関数について
// 従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("test関数呼び出し"));

// // アロー関数
// const func2 = str2 => str2;

// //2つの引数を持つアロー関数
// const func3 = (num1, num2) => {
//   return num1 + num2;
// }
// console.log(func2("testアロー関数"));
// console.log(func3(10, 20))

/**
 * 分割代入について
 */

// const myProfile = {
//   name: "じゃけい",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;

// //  console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2)

// const myProfile = ["じゃけい", 20];

// // const message3 =`私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`
// // console.log(message3);

// const [name, age] = myProfile;

// const message4 = `私の名前は${name}です。年齢は${age}歳です`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name="ゲスト") =>{
//   return console.log(`こんにちは${name}さん。`)
// }

// sayHello();

/**
 * スプレット構文　...
 */
// 配列の展開？？
// const list1 = [1, 2]
// // console.log(list1)
// console.log(...list1);

// const sum = (num1, num2) => console.log(num1 + num2);

// sum(...list1)

//展開の反対でまとめることができる？？

// const list2 =[1, 2, 3, 4, 5]
// // 分割代入の受け取りをスプレット構文で受け取れる？？
// const [num1, num2, ...num3] = list2

// console.log(num1)
// console.log(num2)
// console.log(num3)
// リストの残りをスプレット構文に渡すことができる。

// 配列のコピーや結合
// const list3 = [10, 20];
// const list4 = [30, 40];

// mapやfirterを使った配列の処理

// const nameArray1 = ["田中", "山田", "ゆうと"];

// 従来はfor分で中身を取得していた
// listの中身の数ぶん回していた。
// for (let index = 0; index < nameArray1.length; index++) {
//   console.log(`${index + 1}番目は${nameArray1[index]}です。`);
// }
// MAPを使ってやるとこう
// const nameArray2 = nameArray1.map((name)=>{
//   return name;
// })
// console.log(nameArray2)

// mapで用を番号を取ろうとすると
// 1つ目の引数は要素、２つ目の引数はインデックスを返してくる。らしい
// nameArray1.map((name, index) => console.log(`${index}番目は${name}です`));

// filterについて
// ある条件に一致する要素を取得してくれる。
// const numberArray1 = [1, 2, 3, 4, 5, 6];
// const newNumberArray1 = numberArray1.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumberArray1)

// 実践的なMapの使い方
// const newNameArray = nameArray1.map((name) =>{
//   if (name ==="ゆうと"){
//     return name;
//   }
//   else {
//     return `${name}さん`;
//   }
// })
// console.log(newNameArray)

/**
 * 三項演算子について
 *
 */
// 基本構文　条件? trueの時実行する処理 : falseの時実行する処理
// const val1 = 1 > 0 ? true: false;
// console.log(val1)

// const num = 1300;
// // toLocalStringは４桁以上の数字に区切り位置をつけてくれるメソッド
// // 文字列の数字は対象外
// // typeofメソッドは変数の型をチェックしてくれるメソッド
// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください"
// console.log(formattedNum)

// 三項演算子をreturnに使ってみる
// const checSum = (num1, num2) => {
//   return num1 +num2>100 ? "100を超えています":"100以下です"
// };
// console.log(checSum(50,40))

/**
 * 論理演算子の本当の意味を知ろう　|| && これらのこと
 */
// const flag1 = true;
// const flag2 = true;

// ||または
// if (flag1 || flag2) {
//   console.log("1か2がtrueです")
// }

// // ＆＆かつ
// if (flag1 && flag2) {
//   console.log("1も2もtrueです")
// }

// 実はこいつらまたはやかつという意味ではないらしい。。。
const num = true;
const fee = num || "金額未設定です";
// console.log(fee)

const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
