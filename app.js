const quiz = [
  {
    question: "日本でもっとも人気の総合格闘技団体は？",
    answers: ["RIZIN", "K-1", "RISE", "one championship"],
    correct: "RIZIN",
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

const $window = window;
const $doc = document;
const $qustion = $doc.getElementById("js-question");
const $buttons = $doc.querySelectorAll(".btn");

const $quizLength = quiz.length; // 3
let quizIndex = 0;
let score = 0;

// 4つの質問
const $button = document.getElementsByTagName("button");
// ボタンのlength
const $btnLength = $button.length;

// 定数の文字列をHTMLに反映
const setupQuiz = () => {
  // クイズ文上書き
  $qustion.textContent = quiz[quizIndex].question;
  let btnIndex = 0;
  while (btnIndex < $btnLength) {
    $buttons[btnIndex].textContent = quiz[quizIndex].answers[btnIndex];
    btnIndex++;
  }
};

// 対象をクリックしたら
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解");
    score++;
  } else {
    window.alert("不正解");
  }

  quizIndex++;
  // 2問目へ
  if (quizIndex < $quizLength) {
    // 問題があったとき
    setupQuiz();
  } else {
    // 問題がなかったとき
    window.alert(
      "終了！あなたの正解数は" + score + "/" + $quizLength + "です！"
    );
  }
};

setupQuiz();

// ボタンクリックしたら正誤判定
let $handlerIndex = 0;
while ($handlerIndex < $btnLength) {
  $buttons[$handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  $handlerIndex++; //1~4
}
