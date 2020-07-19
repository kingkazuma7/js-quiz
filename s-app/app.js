/*
 ** 問題文 配列
 */

const quiz = [
  {
    question: "ゲーム史上、最も売れたゲーム機はどれ？",
    answers: [
      "スーパーファミコン",
      "PlayStation 2",
      "ニンテンドーDS",
      "Xbox 360",
    ],
    correct: "ニンテンドーDS",
  },
  {
    question: "糸井重里が企画に関わった、任天堂の看板ゲームといえば？",
    answers: [
      "MOTHER2",
      "スーパーマリオブラザーズ3",
      "スーパードンキーコング",
      "星のカービィ",
    ],
    correct: "MOTHER2",
  },
  {
    question: "ファイナルファンタジーⅣの主人公の名前は？",
    answers: ["フリオニール", "クラウド", "ティーダ", "セシル"],
    correct: "セシル",
  },
];

/*
 ** 変数初期化
 */
const $window = window;
const $doc = document;
const $question = $doc.getElementById("js-question");
const $buttons = $doc.querySelectorAll(".btn");

let quizLen = quiz.length;
let quizCount = 0;
let score = 0;

/*
 ** 変数初期化
 ** 1行目 クイズの文章 = 配列要素に上書き
 ** buttonIndex++初期化0 カウントアップ
 ** アンサーを代入していく
 */
const init = function () {
  $question.textContent = quiz[quizCount].question;

  const buttonLen = $buttons.length; //4
  let buttonIndex = 0;

  while (buttonIndex < buttonLen) {
    $buttons[buttonIndex].textContent = quiz[quizCount].answers[buttonIndex];
    buttonIndex++;
  }
};
init();

/*
 ** 正誤判定
 */
const judge = (elm) => {
  if (elm.textContent === quiz[quizCount].correct) {
    $window.alert("正解！");
  } else {
    $window.alert("不正解！");
  }
  goToNext();
};

/*
 ** 次の問題へ
 */
const goToNext = () => {
  quizCount++;
  if (quizCount < quizLen) {
    // 問題がある間
    init(quizCount);
  } else {
    // 問題がなくなったら
    console.log("終了！");
  }
};

/*
 ** クリックイベント
 */
let answersIndex = 0;
let answerLen = quiz[quizCount].answers.length;
console.log(quiz[quizCount].answers.length);

while (answersIndex < answerLen) {
  $buttons[answersIndex].addEventListener("click", function (e) {
    judge(e.target);
  });
  answersIndex++;
}
