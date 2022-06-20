var jsPsych = initJsPsych({
  on_finish: function() {
//    jsPsych.data.get().localSave('csv', 'data.csv');
    jsPsych.data.displayData();
  }
});


// ------------------------------------------------------------------------
// 固定の実験パーツ
// ------------------------------------------------------------------------

var enter_fullscreen = {
  type: jsPsychFullscreen,
  message: '<p>実験名: 2022-1-セッション1</p><p>開始ボタンを押すと全画面表示で実験が始まります。</p>',
  button_label: "開始",
  fullscreen_mode: true
}

// 最初の説明と被検者情報の入力
var par_id = {
  type: jsPsychSurveyText,
  questions: [
    {prompt: '<strong>これから実験を始めます。</strong><br><br><br>学籍番号を入力してください', columns: 10, required: true, name: 'id'},
    {prompt: 'あなたの性別を男性であれば 1、女性であれば 2、答えたくない場合は 3 を入力してください。', columns: 10, required: true, name: 'sex'},
    {prompt: 'あなたの年齢を入力してください。', columns: 10, required: true, name: 'age'},
  ],
  button_label: '次へ',
};

var exit_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: false,
  delay_after: 0
}

var preload = {
  type: jsPsychPreload,
  auto_preload: true
}

// 実験の説明
var hello = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '実験のセッション1を始めます。<br> \
1500 msec の凝視点の後に表示される言葉を音読してください。<br>\
2500msec 表示後に、2000 msec 待った後に次の刺激に切り替わります。<br><br>\
何かキーを押すと始まります。',
};

// 凝視点
var eyepoint = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<p style="font-size: 48px;">+</p>',
  choices: jsPsych.NO_KEYS,
  trial_duration: 1500,
};

var blankscreen = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '',
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
};


// 実験の終了
var bye = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: 'これでセッション1は終了です。 PCには触れずに実験者の指示に従ってください。',
};

// ------------------------------------------------------------------------
// 画像問題の作成
// ------------------------------------------------------------------------

// 刺激

// 順番をランダマイズしたいので指定しておく
var trials = {
  timeline: [],
};





// ----------------------------------------------------------
// P6
// ----------------------------------------------------------
var p6likert = [
  "1.毎日見る", 
  "2.ほとんど毎日見る", 
  "3.1日に1回は見る", 
  "4.週に1～2回は見る", 
  "5.月に1～2回は見る", 
  "6.まったくみない", 
];
var p6likertB = [
  "非常にはっきりしていて、実際の出来事と同じくらいである", 
  "かなりはっきりしているが、実際の経験ほどではない", 
  "あまりはっきりしていない", 
  "ぼんやりしていてかすかである", 
];

var p6 = {
  type: jsPsychSurveyMultiChoice,
  button_label: "次へ",
  preamble: "P6",
  questions: [
    {
      prompt: "<strong>怖くて目が覚めてしまうくらいの悪夢</strong>", 
      name: 'p6-01', options: p6likert, required: true, horizontal: true
    }, 
    {
      prompt: "<strong>「自分はいま夢を見ている」と夢の中で自覚した（気づきながら）夢</strong>", 
      name: 'p6-02', options: p6likert, required: true, horizontal: true
    }, 
    {
      prompt: "<strong>あなたはどのぐらいの頻度で夢をみますか</strong>", 
      name: 'p6-03', options: p6likert, required: true, horizontal: true
    }, 
    {
      prompt: "<strong>あなたの体験する夢はどの程度はっきりしていますか</strong>", 
      name: 'p6-04', options: p6likertB, required: true, horizontal: true
    }, 
  ],
};

trials.timeline.push(p6) ;

// ----------------------------------------------------------
// P7
// ----------------------------------------------------------

var p7likert = [
  "いつも感じる", 
  "よく感じる", 
  "時々感じる", 
  "たまに感じる", 
  "めったに感じない", 
  "全く感じない", 
];

var p7 = {
  type: jsPsychSurveyMultiChoice,
  button_label: "次へ",
  preamble: "P7",
  questions: [
    {
      prompt: "<strong>嬉しさあるいは楽しさ</strong>", 
      name: 'p7-01', options: p7likert, required: true, horizontal: true
    }, 
    {
      prompt: "<strong>希望あるいは期待感</strong>", 
      name: 'p7-02', options: p7likert, required: true, horizontal: true
    }, 
    {
      prompt: "<strong>幸福感</strong>", 
      name: 'p7-03', options: p7likert, required: true, horizontal: true
    }, 
    {
      prompt: "<strong>怒り</strong>", 
      name: 'p7-04', options: p7likert, required: true, horizontal: true
    }, 
    {
      prompt: "<strong>悲しみ</strong>", 
      name: 'p7-05', options: p7likert, required: true, horizontal: true
    }, 
    {
      prompt: "<strong>恐怖感</strong>", 
      name: 'p7-06', options: p7likert, required: true, horizontal: true
    }, 
    {
      prompt: "<strong>緊張感</strong>", 
      name: 'p7-07', options: p7likert, required: true, horizontal: true
    }, 
    {
      prompt: "<strong>不安感</strong>", 
      name: 'p7-08', options: p7likert, required: true, horizontal: true
    }, 
    {
      prompt: "<strong>驚き</strong>", 
      name: 'p7-09', options: p7likert, required: true, horizontal: true
    }, 
    {
      prompt: "<strong>羞恥心（はじらい）</strong>", 
      name: 'p7-10', options: p7likert, required: true, horizontal: true
    }, 
  ],
};


trials.timeline.push(p7) ;

// ------------------------------------------------------------------------
// 実験の開始
// ------------------------------------------------------------------------

jsPsych.run([trials]);
