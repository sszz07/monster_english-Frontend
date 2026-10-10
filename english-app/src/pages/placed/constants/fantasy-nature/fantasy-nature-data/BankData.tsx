import bankImg from "@/assets/image/places/fantasy-nature/Bank.jpg";

export interface RegionData {
  wordKey: string;
  korean: string;
  audioUrl: string;
  videoPath: string;
  sentence: string;
  targetStyle: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
  points: string;
  imageType?: string;
}

export interface PlaceDataType {
  placeKey: string;
  placeTitle: string;
  bgImage: string;
  masterRegions: RegionData[];
}

export const bankData: PlaceDataType = {
  placeKey: "bank",
  placeTitle: "Bank Word Adventure",
  bgImage: bankImg,
  masterRegions: [
    // 1. ATM (좌측 기기의 상단 본체)
    {
      wordKey: "ATM",
      korean: "현금자동입출금기",
      audioUrl: "/audio/bank/atm.mp3",
      videoPath: "/video/bank/ATM.mp4",
      sentence: "The ATM is bright and easy to use near the entrance. Using the ATM outside the bank is quick and convenient.",
      imageType: "bank",
      targetStyle: { top: '30.0%', left: '22.0%', width: '6.0%', height: '10.0%' },
      points: "35.2,27.0 44.8,27.0 44.8,36.0 35.2,36.0"
    },
    // 2. 비밀번호 (ATM 화면/키패드 부근으로 매우 작게 축소)
    {
      wordKey: "password",
      korean: "비밀번호",
      audioUrl: "/audio/bank/password.mp3",
      videoPath: "/video/bank/Password.mp4",
      sentence: "The password is long and secret on the screen. Changing your password regularly keeps your account safe from hackers.",
      imageType: "bank",
      targetStyle: { top: '42.0%', left: '24.0%', width: '3.0%', height: '4.0%' },
      points: "38.4,37.8 43.2,37.8 43.2,41.4 38.4,41.4"
    },
    // 3. 출금/인출 (ATM 현금이 나오는 하단 투입구)
    {
      wordKey: "withdraw",
      korean: "출금(인출)",
      audioUrl: "/audio/bank/withdraw.mp3",
      videoPath: "/video/bank/Withdraw.mp4",
      sentence: "The withdrawal amount is limited at the ATM. Withdrawing too much cash from the ATM at once is risky.",
      imageType: "bank",
      targetStyle: { top: '48.0%', left: '24.0%', width: '3.0%', height: '3.0%' },
      points: "38.4,43.2 43.2,43.2 43.2,45.9 38.4,45.9"
    },
    // 4. 줄/대기선 (바닥에 설치된 파란색 차단봉 라인)
    {
      wordKey: "line",
      korean: "줄(대기선)",
      audioUrl: "/audio/bank/line.mp3",
      videoPath: "/video/bank/Line.mp4",
      sentence: "The line is long and slow near the entrance. Waiting in line at the bank during lunch time is frustrating.",
      imageType: "bank",
      targetStyle: { top: '75.0%', left: '25.0%', width: '4.0%', height: '15.0%' },
      points: "40.0,67.5 46.4,67.5 46.4,81.0 40.0,81.0"
    },
    // 5. 계좌/통장 (좌측 핑크색 옷 소녀가 들고 있는 통장)
    {
      wordKey: "account",
      korean: "계좌(통장)",
      audioUrl: "/audio/bank/account.mp3",
      videoPath: "/video/bank/Account.mp4",
      sentence: "The account is new and active at the bank. Opening an account at the bank is the first step to saving.",
      imageType: "bank",
      targetStyle: { top: '58.0%', left: '32.0%', width: '3.0%', height: '4.0%' },
      points: "51.2,52.2 56.0,52.2 56.0,55.8 51.2,55.8"
    },
    // 6. 잔액 (소년이 들고 있는 안내지 부분)
    {
      wordKey: "balance",
      korean: "잔액",
      audioUrl: "/audio/bank/balance.mp3",
      videoPath: "/video/bank/Balance.mp4",
      sentence: "The balance is low and worrying on the screen. Checking your balance at the ATM is a good financial habit.",
      imageType: "bank",
      targetStyle: { top: '63.0%', left: '38.0%', width: '3.0%', height: '3.0%' },
      points: "60.8,56.7 65.6,56.7 65.6,59.4 60.8,59.4"
    },
    // 7. 이자 (배경 뒷쪽 대출 상담 데스크에 놓인 서류)
    {
      wordKey: "interest",
      korean: "이자",
      audioUrl: "/audio/bank/interest.mp3",
      videoPath: "/video/bank/Interest.mp4",
      sentence: "The interest is low and fixed on the account. Earning interest on your savings feels like free money in the bank.",
      imageType: "bank",
      targetStyle: { top: '44.0%', left: '47.0%', width: '2.0%', height: '2.0%' },
      points: "75.2,39.6 78.4,39.6 78.4,41.4 75.2,41.4"
    },
    // 8. 대출 (배경 뒷쪽 창구 직원과 손님의 상담 코너 공간)
    {
      wordKey: "loan",
      korean: "대출",
      audioUrl: "/audio/bank/loan.mp3",
      videoPath: "/video/bank/Loan.mp4",
      sentence: "The loan is large and serious at the bank. Applying for a loan at the bank requires a lot of documents.",
      imageType: "bank",
      targetStyle: { top: '38.0%', left: '45.0%', width: '5.0%', height: '5.0%' },
      points: "72.0,34.2 80.0,34.2 80.0,38.7 72.0,38.7"
    },
    // 9. 지갑/가방 (카운터 앞 노란 옷 소녀가 메고 있는 핸드백)
    {
      wordKey: "wallet",
      korean: "지갑",
      audioUrl: "/audio/bank/wallet.mp3",
      videoPath: "/video/bank/Wallet.mp4",
      sentence: "The wallet is brown and full in his pocket. Losing your wallet with all your cards inside is a nightmare.",
      imageType: "bank",
      targetStyle: { top: '72.0%', left: '48.0%', width: '3.0%', height: '5.0%' },
      points: "76.8,64.8 81.6,64.8 81.6,69.3 76.8,69.3"
    },
    // 10. 수표 (노란 옷 소녀가 카운터에 내밀고 있는 수표)
    {
      wordKey: "check",
      korean: "수표",
      audioUrl: "/audio/bank/check.mp3",
      videoPath: "/video/bank/Check.mp4",
      sentence: "The check is official and signed on the counter. Writing a check for the first time feels very grown-up.",
      imageType: "bank",
      targetStyle: { top: '67.0%', left: '52.0%', width: '3.0%', height: '3.0%' },
      points: "83.2,60.3 88.0,60.3 88.0,63.0 83.2,63.0"
    },
    // 11. 은행원 (마스코트 직원의 얼굴 중앙 부분)
    {
      wordKey: "clerk",
      korean: "은행원",
      audioUrl: "/audio/bank/clerk.mp3",
      videoPath: "/video/bank/Clerk.mp4",
      sentence: "The clerk is polite and helpful at the counter. The clerk enjoys assisting customers with their accounts every day.",
      imageType: "bank",
      targetStyle: { top: '28.0%', left: '60.0%', width: '6.0%', height: '8.0%' },
      points: "96.0,25.2 105.6,25.2 105.6,32.4 96.0,32.4"
    },
    // 12. 신분증 (은행원 가슴의 'FUZZY' 이름표)
    {
      wordKey: "ID",
      korean: "신분증(ID카드)",
      audioUrl: "/audio/bank/id.mp3",
      videoPath: "/video/bank/ID.mp4",
      sentence: "The ID is official and valid in her bag. Bringing your ID to the bank is required for opening an account.",
      imageType: "bank",
      targetStyle: { top: '50.0%', left: '64.0%', width: '2.0%', height: '2.0%' },
      points: "102.4,45.0 105.6,45.0 105.6,46.8 102.4,46.8"
    },
    // 13. 돈 (카운터 위, 직원 손 주변에 묶여있는 돈다발 1)
    {
      wordKey: "money",
      korean: "돈",
      audioUrl: "/audio/bank/money.mp3",
      videoPath: "/video/bank/Money.mp4",
      sentence: "The money is safe and clean in the vault. Saving money in the bank is a very smart habit.",
      imageType: "bank",
      targetStyle: { top: '58.0%', left: '53.0%', width: '4.0%', height: '3.0%' },
      points: "84.8,52.2 91.2,52.2 91.2,54.9 84.8,54.9"
    },
    // 14. 예금/입금 (카운터 위 직원 손 옆의 입금 용지)
    {
      wordKey: "deposit",
      korean: "예금(입금)",
      audioUrl: "/audio/bank/deposit.mp3",
      videoPath: "/video/bank/Deposit.mp4",
      sentence: "The deposit is safe and recorded in the system. Depositing money into your account every month helps you save faster.",
      imageType: "bank",
      targetStyle: { top: '58.0%', left: '58.0%', width: '3.0%', height: '2.0%' },
      points: "92.8,52.2 97.6,52.2 97.6,54.0 92.8,54.0"
    },
    // 15. 지폐 (카운터 위 흩어져 있는 낱장 지폐들)
    {
      wordKey: "bill",
      korean: "지폐",
      audioUrl: "/audio/bank/bill.mp3",
      videoPath: "/video/bank/Bill.mp4",
      sentence: "The bill is large and official in the envelope. Paying bills on time at the bank avoids extra late fees.",
      imageType: "bank",
      targetStyle: { top: '61.0%', left: '57.0%', width: '2.0%', height: '2.0%' },
      points: "91.2,54.9 94.4,54.9 94.4,56.7 91.2,56.7"
    },
    // 16. 현금 (카운터 위 우측 돈다발 2)
    {
      wordKey: "cash",
      korean: "현금",
      audioUrl: "/audio/bank/cash.mp3",
      videoPath: "/video/bank/Cash.mp4",
      sentence: "The cash is crisp and green in the envelope. Counting cash carefully at the counter is the clerk's job.",
      imageType: "bank",
      targetStyle: { top: '58.0%', left: '62.0%', width: '3.0%', height: '3.0%' },
      points: "99.2,52.2 104.0,52.2 104.0,54.9 99.2,54.9"
    },
    // 17. 카드 (카운터 위 신용카드들)
    {
      wordKey: "card",
      korean: "카드",
      audioUrl: "/audio/bank/card.mp3",
      videoPath: "/video/bank/Card.mp4",
      sentence: "The card is thin and blue in her wallet. Using a card at the store is easier than carrying cash.",
      imageType: "bank",
      targetStyle: { top: '64.0%', left: '58.0%', width: '3.0%', height: '2.0%' },
      points: "92.8,57.6 97.6,57.6 97.6,59.4 92.8,59.4"
    },
    // 18. 동전 (카운터 위 동전 탑들)
    {
      wordKey: "coin",
      korean: "동전",
      audioUrl: "/audio/bank/coin.mp3",
      videoPath: "/video/bank/Coin.mp4",
      sentence: "The coin is small and round in his pocket. Collecting coins in a piggy bank is a good saving habit.",
      imageType: "bank",
      targetStyle: { top: '65.0%', left: '62.0%', width: '2.0%', height: '3.0%' },
      points: "99.2,58.5 102.4,58.5 102.4,61.2 99.2,61.2"
    },
    // 19. 서명 (카운터 위 결제 패드 및 서명 구역)
    {
      wordKey: "signature",
      korean: "서명(사인)",
      audioUrl: "/audio/bank/signature.mp3",
      videoPath: "/video/bank/Signature.mp4",
      sentence: "The signature is unique and small on the document. Signing your name on a bank document makes everything official.",
      imageType: "bank",
      targetStyle: { top: '65.0%', left: '66.0%', width: '3.0%', height: '3.0%' },
      points: "105.6,58.5 110.4,58.5 110.4,61.2 105.6,61.2"
    },
    // 20. 영수증 (결제 패드 좌측에 놓인 영수증 용지)
    {
      wordKey: "receipt",
      korean: "영수증",
      audioUrl: "/audio/bank/receipt.mp3",
      videoPath: "/video/bank/Receipt.mp4",
      sentence: "The receipt is long and thin in her hand. Keeping every receipt from the bank is a wise financial habit.",
      imageType: "bank",
      targetStyle: { top: '68.0%', left: '58.0%', width: '3.0%', height: '3.0%' },
      points: "92.8,61.2 97.6,61.2 97.6,63.9 92.8,63.9"
    },
    // 21. 비밀번호(PIN) (카운터 위 번호를 누르는 키패드 단말기)
    {
      wordKey: "pinNumber",
      korean: "비밀번호(PIN)",
      audioUrl: "/audio/bank/pinnumber.mp3",
      videoPath: "/video/bank/PinNumber.mp4",
      sentence: "The PIN number is secret and private on your card. Memorizing your PIN number is safer than writing it down anywhere.",
      imageType: "bank",
      targetStyle: { top: '69.0%', left: '68.0%', width: '3.0%', height: '3.0%' },
      points: "108.8,62.1 113.6,62.1 113.6,64.8 108.8,64.8"
    },
    // 22. 금고 (카운터 위 'SAFE'라고 적힌 회색 미니 금고 상자)
    {
      wordKey: "safe",
      korean: "금고",
      audioUrl: "/audio/bank/safe.mp3",
      videoPath: "/video/bank/Safe.mp4",
      sentence: "The safe is heavy and locked in the office. Locking valuables in a safe at the bank keeps them protected.",
      imageType: "bank",
      targetStyle: { top: '58.0%', left: '69.0%', width: '4.0%', height: '6.0%' },
      points: "110.4,52.2 116.8,52.2 116.8,57.6 110.4,57.6"
    },
    // 23. 대형 금고/금고실 (우측 뒷벽에 있는 둥근 손잡이의 'VAULT' 문)
    {
      wordKey: "vault",
      korean: "대형 금고(금고실)",
      audioUrl: "/audio/bank/vault.mp3",
      videoPath: "/video/bank/Vault.mp4",
      sentence: "The vault is enormous and secure in the basement. Storing gold and money in the vault keeps them completely safe.",
      imageType: "bank",
      targetStyle: { top: '30.0%', left: '88.0%', width: '8.0%', height: '15.0%' },
      points: "140.8,27.0 153.6,27.0 153.6,40.5 140.8,40.5"
    },
    // 24. 이체/송금 (우측 데스크에 놓인 컴퓨터 모니터)
    {
      wordKey: "transfer",
      korean: "이체(송금)",
      audioUrl: "/audio/bank/transfer.mp3",
      videoPath: "/video/bank/Transfer.mp4",
      sentence: "The transfer is fast and safe through the app. Transferring money to a friend through the app takes only seconds.",
      imageType: "bank",
      targetStyle: { top: '50.0%', left: '92.0%', width: '4.0%', height: '6.0%' },
      points: "147.2,45.0 153.6,45.0 153.6,50.4 147.2,50.4"
    },
    // 25. 창구/카운터 (물건이 하나도 없는 앞쪽의 둥근 원목 카운터 나무 엣지)
    {
      wordKey: "counter",
      korean: "창구(카운터)",
      audioUrl: "/audio/bank/counter.mp3",
      videoPath: "/video/bank/Counter.mp4",
      sentence: "The counter is wide and clean at the front. Standing at the counter for a long time makes customers impatient.",
      imageType: "bank",
      targetStyle: { top: '80.0%', left: '70.0%', width: '10.0%', height: '5.0%' },
      points: "112.0,72.0 128.0,72.0 128.0,76.5 112.0,76.5"
    }
  ]
};