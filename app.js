const quiz = [
  {
    question: "RIZINの社長の名前は？",
    answers: ["榊原信行", "坂城原信雄", "榊原健三", "榊原辰徳"],
    correct: "榊原信行",
  },
  {
    question: "RIZINの設立日はいつ？",
    answers: ["1970年", "1998年", "2003年", "2015年"],
    correct: "2015年",
  },
  {
    question: "RIZIN FIGHTING FEDERATION、略してRIZIN FFは何の略？",
    answers: [
      "ライジン・ファイナル・フラストレーション",
      "ライジン・ファイナル・フランソワ",
      "ライジン・ファイティング・ファンデーション",
      "ライジン・ファイティング・フェデレーション",
    ],
    correct: "ライジン・ファイティング・フェデレーション",
  },
];

// 変数
const $window = window;
const $doc = document;
const $qustion = $doc.getElementById("js-question");
const $buttons = $doc.querySelectorAll(".btn");
const $quizLength = quiz.length; // 3
let quizIndex = 0;

// 結果
const endShare = document.querySelector(".end-share");
const resultImg = document.querySelector(".result-img");
resultImg.setAttribute("src", "./src/img/takada02.jpg");
resultImg.style.display = "none";
endShare.style.display = "none";

// 定数の文字列をHTMLに反映
const setupQuiz = () => {
  // クイズ文上書き
  $qustion.textContent = quiz[quizIndex].question;

  const $setBtnLen = $buttons.length; // 4
  let $btnIndex = 0;

  // 0~4の間
  while ($btnIndex < $setBtnLen) {
    $buttons[$btnIndex].textContent = quiz[quizIndex].answers[$btnIndex];
    $btnIndex++;
  }
};

/* 対象をクリックしたら
 ** juge = clickHandler
 ** scoreが加算されない
 */
const clickHandler = (e) => {
  let score = 0;

  if (quiz[quizIndex].correct === e.target.textContent) {
    $window.alert("正解");
    score++;
  } else {
    $window.alert("不正解");
  }

  quizIndex++;
  // 2問目へ
  if (quizIndex < $quizLength) {
    // 問題があったとき
    setupQuiz();
    console.log(score);
  } else {
    // 問題がなかったとき
    $window.alert(`終了！あなたの正解数は${score}/${$quizLength}です！`);
    endShare.style.display = "block";
    resultImg.style.display = "block";

    let resultText = document.querySelector(".result");
    if (score === 3) {
      resultText.innerHTML = "3問正解";
      resultImg.setAttribute("src", "./src/img/takada02.jpg");
    } else if (score === 2) {
      resultText.innerHTML = "2問正解";
      resultImg.setAttribute("src", "./src/img/takada04.jpg");
    } else if (score === 1) {
      resultText.innerHTML = "1問正解";
      resultImg.setAttribute("src", "./src/img/takada03.jpg");
    } else {
      resultText.innerHTML = "全問不正解";
      resultImg.setAttribute("src", "./src/img/takada01.jpg");
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
