import postofficeImg from "@/assets/image/places/fantasy-nature/Post office.jpg";

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

export const postOfficeData: PlaceDataType = {
  placeKey: "postoffice",
  placeTitle: "Post Office Word Adventure",
  bgImage: postofficeImg,
  masterRegions: [
    {
      wordKey: "package",
      korean: "소포/택배",
      audioUrl: "/audio/postoffice/package.mp3",
      videoPath: "/video/postoffice/package.mp4",
      sentence: "The package is big and heavy on the scale. Wrapping a package with tape before sending it is necessary.",
      targetStyle: { top: '68.0%', left: '2.0%', width: '6.0%', height: '10.0%' },
      points: "2.0,68.0 8.0,68.0 8.0,78.0 2.0,78.0"
    },
    {
      wordKey: "tape",
      korean: "테이프",
      audioUrl: "/audio/postoffice/tape.mp3",
      videoPath: "/video/postoffice/tape.mp4",
      sentence: "The tape is clear and sticky on the desk. Sealing a box with tape keeps everything safe inside.",
      targetStyle: { top: '66.0%', left: '11.0%', width: '3.0%', height: '4.0%' },
      points: "11.0,66.0 14.0,66.0 14.0,70.0 11.0,70.0"
    },
    {
      wordKey: "scale",
      korean: "저울",
      audioUrl: "/audio/postoffice/scale.mp3",
      videoPath: "/video/postoffice/scale.mp4",
      sentence: "The scale is small and digital on the counter. Placing the package on the scale gives the exact weight quickly.",
      targetStyle: { top: '58.0%', left: '15.0%', width: '3.0%', height: '5.0%' },
      points: "15.0,58.0 18.0,58.0 18.0,63.0 15.0,63.0"
    },
    {
      wordKey: "weight",
      korean: "무게/눈금",
      audioUrl: "/audio/postoffice/weight.mp3",
      videoPath: "/video/postoffice/weight.mp4",
      sentence: "The weight is heavy and over the limit on the scale. Checking the weight of a package before mailing saves extra costs.",
      targetStyle: { top: '63.0%', left: '19.0%', width: '3.0%', height: '4.0%' },
      points: "19.0,63.0 22.0,63.0 22.0,67.0 19.0,67.0"
    },
    {
      wordKey: "mail",
      korean: "우편물",
      audioUrl: "/audio/postoffice/mail.mp3",
      videoPath: "/video/postoffice/mail.mp4",
      sentence: "The mail is heavy and full in the bag. Sorting the mail at the post office takes a long time.",
      targetStyle: { top: '60.0%', left: '25.0%', width: '8.0%', height: '8.0%' },
      points: "25.0,60.0 33.0,60.0 33.0,68.0 25.0,68.0"
    },
    {
      wordKey: "receipt",
      korean: "영수증",
      audioUrl: "/audio/postoffice/receipt.mp3",
      videoPath: "/video/postoffice/receipt.mp4",
      sentence: "The receipt is long and thin in her hand. Keeping the receipt after sending a package is a smart habit.",
      targetStyle: { top: '65.0%', left: '38.0%', width: '4.0%', height: '3.0%' },
      points: "38.0,65.0 42.0,65.0 42.0,68.0 38.0,68.0"
    },
    {
      wordKey: "letter",
      korean: "편지",
      audioUrl: "/audio/postoffice/letter.mp3",
      videoPath: "/video/postoffice/letter.mp4",
      sentence: "The letter is thin and white in the envelope. Writing a letter to a friend is a thoughtful and kind gesture.",
      targetStyle: { top: '51.0%', left: '40.0%', width: '4.0%', height: '4.0%' },
      points: "40.0,51.0 44.0,51.0 44.0,55.0 40.0,55.0"
    },
    {
      wordKey: "sticker",
      korean: "스티커/우표 시트",
      audioUrl: "/audio/postoffice/sticker.mp3",
      videoPath: "/video/postoffice/sticker.mp4",
      sentence: "The sticker is bright and red on the package. Putting a fragile sticker on the box protects everything inside.",
      targetStyle: { top: '56.0%', left: '49.0%', width: '8.0%', height: '4.0%' },
      points: "49.0,56.0 57.0,56.0 57.0,60.0 49.0,60.0"
    },
    {
      wordKey: "stamp",
      korean: "도장/스탬프",
      audioUrl: "/audio/postoffice/stamp.mp3",
      videoPath: "/video/postoffice/stamp.mp4",
      sentence: "The stamp is small and colorful on the envelope. Collecting stamps from different countries is her favorite hobby.",
      targetStyle: { top: '51.0%', left: '51.0%', width: '2.0%', height: '3.0%' },
      points: "51.0,51.0 53.0,51.0 53.0,54.0 51.0,54.0"
    },
    {
      wordKey: "counter",
      korean: "계산대/카운터",
      audioUrl: "/audio/postoffice/counter.mp3",
      videoPath: "/video/postoffice/counter.mp4",
      sentence: "The counter is wide and clean at the front. Standing at the counter for a long time makes the clerk tired.",
      targetStyle: { top: '75.0%', left: '20.0%', width: '5.0%', height: '4.0%' },
      points: "20.0,75.0 25.0,75.0 25.0,79.0 20.0,79.0"
    },
    {
      wordKey: "box",
      korean: "상자",
      audioUrl: "/audio/postoffice/box.mp3",
      videoPath: "/video/postoffice/box.mp4",
      sentence: "The box is brown and sturdy on the counter. Packing items into a box carefully prevents damage during delivery.",
      targetStyle: { top: '82.0%', left: '88.0%', width: '10.0%', height: '12.0%' },
      points: "88.0,82.0 98.0,82.0 98.0,94.0 88.0,94.0"
    },
    {
      wordKey: "envelope",
      korean: "봉투",
      audioUrl: "/audio/postoffice/envelope.mp3",
      videoPath: "/video/postoffice/envelope.mp4",
      sentence: "The envelope is flat and white on the counter. Sealing an envelope before mailing it is very important.",
      targetStyle: { top: '88.0%', left: '52.0%', width: '4.0%', height: '4.0%' },
      points: "52.0,88.0 56.0,88.0 56.0,92.0 52.0,92.0"
    },
    {
      wordKey: "address",
      korean: "주소",
      audioUrl: "/audio/postoffice/address.mp3",
      videoPath: "/video/postoffice/address.mp4",
      sentence: "The address is small and clear on the label. Writing the address on the envelope is the first step of mailing.",
      targetStyle: { top: '76.0%', left: '68.0%', width: '3.0%', height: '3.0%' },
      points: "68.0,76.0 71.0,76.0 71.0,79.0 68.0,79.0"
    },
    {
      wordKey: "sender",
      korean: "보내는 사람",
      audioUrl: "/audio/postoffice/sender.mp3",
      videoPath: "/video/postoffice/sender.mp4",
      sentence: "The sender is busy and careful at the counter. Being a reliable sender means always writing the correct address.",
      targetStyle: { top: '60.0%', left: '71.0%', width: '5.0%', height: '8.0%' },
      points: "71.0,60.0 76.0,60.0 76.0,68.0 71.0,68.0"
    },
    {
      wordKey: "receiver",
      korean: "받는 사람/수취인",
      audioUrl: "/audio/postoffice/receiver.mp3",
      videoPath: "/video/postoffice/receiver.mp4",
      sentence: "The receiver is happy and excited at the door. Waiting for a package as a receiver is always exciting.",
      targetStyle: { top: '30.0%', left: '66.0%', width: '6.0%', height: '8.0%' },
      points: "66.0,30.0 72.0,30.0 72.0,38.0 66.0,38.0"
    },
    {
      wordKey: "mailbox",
      korean: "우체통",
      audioUrl: "/audio/postoffice/mailbox.mp3",
      videoPath: "/video/postoffice/mailbox.mp4",
      sentence: "The mailbox is blue and old on the street corner. Checking the mailbox every morning is her daily routine.",
      targetStyle: { top: '38.0%', left: '16.0%', width: '5.0%', height: '10.0%' },
      points: "16.0,38.0 21.0,38.0 21.0,48.0 16.0,48.0"
    },
    {
      wordKey: "route",
      korean: "경로/지도",
      audioUrl: "/audio/postoffice/route.mp3",
      videoPath: "/video/postoffice/route.mp4",
      sentence: "The route is long and winding through the neighborhood. Planning the delivery route carefully saves the driver a lot of time.",
      targetStyle: { top: '18.0%', left: '16.0%', width: '5.0%', height: '10.0%' },
      points: "16.0,18.0 21.0,18.0 21.0,28.0 16.0,28.0"
    },
    {
      wordKey: "express",
      korean: "특급/빠른 우편",
      audioUrl: "/audio/postoffice/express.mp3",
      videoPath: "/video/postoffice/express.mp4",
      sentence: "The express service is fast and expensive at the counter. Choosing express delivery gets your package there the next day.",
      targetStyle: { top: '20.0%', left: '25.0%', width: '5.0%', height: '3.0%' },
      points: "25.0,20.0 30.0,20.0 30.0,23.0 25.0,23.0"
    },
    {
      wordKey: "parcel",
      korean: "소포",
      audioUrl: "/audio/postoffice/parcel.mp3",
      videoPath: "/video/postoffice/parcel.mp4",
      sentence: "The parcel is wrapped and labeled on the scale. Sending a parcel overseas requires filling out a special form.",
      targetStyle: { top: '25.0%', left: '26.0%', width: '3.0%', height: '4.0%' },
      points: "26.0,25.0 29.0,25.0 29.0,29.0 26.0,29.0"
    },
    {
      wordKey: "schedule",
      korean: "일정/시간표",
      audioUrl: "/audio/postoffice/schedule.mp3",
      videoPath: "/video/postoffice/schedule.mp4",
      sentence: "The delivery schedule is tight and busy every day. Checking the delivery schedule helps you plan for your package.",
      targetStyle: { top: '7.0%', left: '26.0%', width: '3.0%', height: '5.0%' },
      points: "26.0,7.0 29.0,7.0 29.0,12.0 26.0,12.0"
    },
    {
      wordKey: "clerk",
      korean: "점원/직원",
      audioUrl: "/audio/postoffice/clerk.mp3",
      videoPath: "/video/postoffice/clerk.mp4",
      sentence: "The clerk is fast and friendly at the counter. The clerk enjoys helping customers send packages at the post office.",
      targetStyle: { top: '30.0%', left: '60.0%', width: '3.0%', height: '7.0%' },
      points: "60.0,30.0 63.0,30.0 63.0,37.0 60.0,37.0"
    },
    {
      wordKey: "delivery",
      korean: "배달",
      audioUrl: "/audio/postoffice/delivery.mp3",
      videoPath: "/video/postoffice/delivery.mp4",
      sentence: "The delivery is fast and reliable in this area. Tracking a delivery on the phone makes waiting less stressful.",
      targetStyle: { top: '24.0%', left: '81.0%', width: '5.0%', height: '3.0%' },
      points: "81.0,24.0 86.0,24.0 86.0,28.0 81.0,28.0"
    },
    {
      wordKey: "truck",
      korean: "트럭",
      audioUrl: "/audio/postoffice/truck.mp3",
      videoPath: "/video/postoffice/truck.mp4",
      sentence: "The delivery truck is big and white on the road. Loading packages onto the truck early in the morning is hard work.",
      targetStyle: { top: '28.0%', left: '88.0%', width: '6.0%', height: '6.0%' },
      points: "88.0,28.0 94.0,28.0 94.0,34.0 88.0,34.0"
    },
    {
      wordKey: "line",
      korean: "대기선",
      audioUrl: "/audio/postoffice/line.mp3",
      videoPath: "/video/postoffice/line.mp4",
      sentence: "The line is long and slow near the entrance. Waiting in line at the post office during holidays is frustrating.",
      targetStyle: { top: '48.0%', left: '90.0%', width: '1.5%', height: '10.0%' },
      points: "90.0,48.0 91.5,48.0 91.5,58.0 90.0,58.0"
    },
    {
      wordKey: "label",
      korean: "라벨/표",
      audioUrl: "/audio/postoffice/label.mp3",
      videoPath: "/video/postoffice/label.mp4",
      sentence: "The label is clear and printed on the package. Reading the label on a package tells you where it is going.",
      targetStyle: { top: '92.0%', left: '21.0%', width: '2.0%', height: '3.0%' },
      points: "21.0,92.0 23.0,92.0 23.0,93.0 21.0,93.0"
    }
  ]
};