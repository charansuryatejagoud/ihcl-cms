import sanityClient from "@sanity/client";
import { customAlphabet } from "nanoid";

const cardData = [
  {
    title: "GIFT CARDS",
    description:
      "Gift the luxury of moments that will become cherished memories. Opening up the world to a range of exclusively curated experiences at our participating hotels across the globe, these gift cards are redeemable for stays, dining and more, and make for the perfect gift for your loved ones.",
    primaryAction: {
      title: "MORE",
      url: "/gifting-and-shopping/gift-cards",
      variant: "link",
      urlType: "internal",
    },
  },
  {
    title: "TIMELESS WEDDINGS",
    description:
      "A wedding at the Taj has meant something very special for generations. Our experts work closely with you to plan every event and create memories you will cherish for a lifetime. Our iconic grand palaces, idyllic beach resort, picturesque mountain retreats and landmark city hotels make for the perfect backdrop to your special day, as we pull all stops to make it a grand celebration warmed by our legendary hospitality.",
    primaryAction: {
      title: "MORE",
      url: "/wedding",
      variant: "link",
      urlType: "internal",
    },
  },
  {
    title: "NEUPASS LOYALTY PROGRAM",
    description:
      "Designed to make your experience with us even more rewarding, Neupass loyalty program allows you to earn and utilise points on your spends on stays, dining and spa more, and provides you with exclusive benefits and savings.",
    primaryAction: {
      title: "MORE",
      url: "/neupass",
      variant: "link",
      urlType: "internal",
    },
  },
  {
    title: "EXCLUSIVE OFFERS ON STAYS",
    description:
      "Enjoy curated experiences, special amenities, added privileges, extended stay hours, upgrades, savings and more on your stays with exclusive offers from our participating hotels. ",
    primaryAction: {
      title: "MORE",
      url: "/offers",
      variant: "link",
      urlType: "internal",
    },
  },
];

const newArrayCard = [];
const finalDocument = [];

run();

async function run() {
  const client = sanityClient({
    projectId: "ocl5w36p",
    dataset: "production",
    apiVersion: "v2021-10-21",
    token:
      "skIlzYEV0AyovwCGKc4uvF7kNe3IdAp3zI4yjdqSBAB9gpj9r4GnsCmYh9o7iRe9htOJCKdLiJBLpjAFnedjFoLiKujs6mvSmwzkvr0t5obhmsh6Gb6s0MOnarAkqzRikYgBYNkZdEEc7v8BtvywajXtW9A4DmxeZ41aYnJbowf8XOPVt5vc",
    useCdn: false,
  });
  console.log("script starts");
  let pageResponse;
  let pageItems;
  const nanoid = customAlphabet("1234567890abcdef", 12);
  let storeData;

  await client
    .fetch(`*[_type == "page" && path == "/travel/hotel-type-resorts"][0]{...}`)
    .then((response) => {
      // console.log(response)
      pageResponse = response;
      pageItems = response.items;
    })
    .catch((error) => {
      console.log("error", error);
    });

  const cards = pageItems?.map((item) => {
    if (
      item?._type === "group" &&
      item?.largeVariant === "details.group.carousel-with-side-text-card"
    ) {
      console.log("res", item);
      let count = 0;
      let cardCount;
      item?.items?.map((card) => {
        cardCount = cardData[count];
        let newCard = {
          _type: "card",
          ...card,
          title: cardCount?.title,
          description: cardCount?.description,
          primaryAction: {
            title: cardCount?.primaryAction?.title,
            url: cardCount?.primaryAction?.url,
            urlType: cardCount?.primaryAction?.urlType,
            variant: cardCount?.primaryAction?.variant,
          },
        };
        newArrayCard.push(newCard);
        count++;
      });
      storeData = item;
      storeData.items = newArrayCard;
      finalDocument.push(storeData);
    } else {
      finalDocument.push(item);
    }
  });

  pageItems = finalDocument;
  pageResponse.items = pageItems;

  console.log("end ", pageResponse.items[4]);
  client
    .createOrReplace(pageResponse)
    .then((res) => {
      console.log(res?.path + " Updated!");
    })
    .catch((err) => {
      console.error(
        "Oh no, the update failed: ",
        pageResponse.path,
        "Error : ",
        err.message,
      );
    });
}
