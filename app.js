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

// 変数
const $window = window;
const $doc = document;
const $qustion = $doc.getElementById("js-question");
const $buttons = $doc.querySelectorAll(".btn");
const $quizLength = quiz.length; // 3
let quizIndex = 0;

// シェアボタン
const endShare = document.querySelector(".end-share");
endShare.style.display = "none";

// 定数の文字列をHTMLに反映
const setupQuiz = () => {
  // クイズ文上書き
  $qustion.textContent = quiz[quizIndex].question;

  const $setBtnLen = $buttons.length; // 4
  let $btnIndex = 0;
  // console.log();

  // 0~4の間
  while ($btnIndex < $setBtnLen) {
    $buttons[$btnIndex].textContent = quiz[quizIndex].answers[$btnIndex];
    $btnIndex++;
  }
};

// 対象をクリックしたら
const clickHandler = (e) => {
  let score = 0;

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
    endShare.style.display = "block";

    let resultText = document.querySelector(".result");
    if (score === 3) {
      resultText.innerHTML = "3問正解";
      console.log("3問正解");
    } else if (score === 2) {
      resultText.innerHTML = "2問正解";
      console.log("2問正解");
    } else if (score === 1) {
      resultText.innerHTML = "1問正解";
      console.log("1問正解");
    } else {
      resultText.innerHTML = "全問不正解";
      console.log("全問不正解");
    }
  }
};
setupQuiz();

// ボタンクリックしたら正誤判定
const judQuze = () => {
  let $answerIndex = 0;
  const $answerLength = $buttons.length;
  while ($answerIndex < $answerLength) {
    $buttons[$answerIndex].addEventListener("click", (e) => {
      clickHandler(e);
    });
    $answerIndex++; //1~4
  }
};
judQuze();
