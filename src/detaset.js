const defaultDataset = {
    "init": {
        answers: [
            {content: "仕事を依頼したい！", nextId: "job_offer"},
            {content: "趣味について知りたい！", nextId: "consultant"},
            {content: "プログラミングの学習法について知りたい！", nextId: "community"},
            {content: "相談したい！", nextId: "dating"},
        ],
        question: "こんにちは！TAKAへのご用件はなんでしょうか？",
    },
    "job_offer": {
        answers: [
            {content: "Webサイトを制作してほしい", nextId: "website"},
            {content: "Webアプリを開発してほしい", nextId: "webapp"},
            {content: "自動化ツールを作ってほしい", nextId: "automation_tool"},
            {content: "その他", nextId: "other_jobs"}
        ],
        question: "どのようなお仕事でしょうか？",
    },
    "website": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Webサイト細作についてですね。コチラからお問い合わせできます。",
    },
    "webapp": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Webアプリ開発についてですね。コチラからお問い合わせできます。",
    },
    "automation_tool": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "自動化ツール開発についてですね。コチラからお問い合わせできます。",
    },
    "other_jobs": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "その他についてですね。コチラからお問い合わせできます。",
    },
    "consultant": {
        answers: [
            {content: "読売巨人軍HP", nextId: "https://www.giants.jp/top.html"},
            {content: "ブクログHP", nextId: "https://booklog.jp/users/e17eb4effdac4048"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "私は趣味が２つあります！１つ目はプロ野球観戦で巨人を応援してます。２つ目は読書です。読んだらブクログというサイトで本の内容についてアウトプットしています。詳しいHPは下記へどうぞ↓",
    },
    "community": {
        answers: [
            {content: "どんな活動をしているの？", nextId: "community_activity"},
            {content: "コミュニティに参加したい", nextId: "https://torahack.web.app/community/"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "フロントエンドエンジニアを目指すにあたって、推薦したいYoutuberがいます！Webエンジニアへの転職を目指す人向けに、プログラミングを教えたりキャリアの相談に乗ってらっしゃっています。",
    },
    "community_activity": {
        answers: [
            {content: "さらに詳細を知りたい", nextId: "https://youtu.be/tIzE7hUDbBM"},
            {content: "コミュニティに参加したい", nextId: "https://torahack.web.app/community/"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "フロントエンド向けの教材の提供、キャリアや勉強法に関するメルマガの配信、週1のオンライン作業会などを開催しています！私自身もお世話になっています。\n詳細はYouTube動画で紹介しています。",
    },
    "dating": {
        answers: [
            {content: "DMする", nextId: "https://twitter.com/taka_medias04"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "まずは一緒にランチでもいかがですか？DMしてください！　相談乗りますよ〜！",
    },
}

export default defaultDataset