import blog from "./src/assets/cardPreview/blog-preview.jpg";
import code from "./src/assets/cardPreview/code-preview.jpg";
import profile from "./src/assets/cardPreview/profile-preview.jpg";
import socials from "./src/assets/cardPreview/socials.preview.jpg";
import nft from "./src/assets/cardPreview/nft-preview.jpg";
import order from "./src/assets/orderSummaryCard/order-preview.jpg";
import rating from "./src/assets/InteractiveRating/rating-preview.jpg";
import result from "./src/assets/resultSummary/result-preview.jpg";
import flyo from "./src/assets/flyoSummary/flyo-preview.jpg";

export const PROJECTS = [
  {
    projectName: "Blog preview card",
    image: blog,
    desc: "This HTML & CSS-only challenge is a perfect project for beginners getting up to speed with HTML and CSS fundamentals, like HTML structure and the box model.",
    route: "/blog",
  },
  {
    projectName: "QR code component",
    image: code,
    desc: "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
    route: "/code",
  },
  {
    projectName: "Profile card component",
    image: profile,
    desc: "This is a perfect challenge to test your layout skills. The card layout doesn't shift, so it's also great for those that haven't dived into responsive websites yet!",
    route: "/profile",
  },
  {
    projectName: "Social links profile",
    image: socials,
    desc: "In this small project, you'll build out your social link-sharing profile. You can even personalize it and use it to share all your social profiles!",
    route: "/socials",
  },
  {
    projectName: "NFT preview card component",
    image: nft,
    desc: "This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.",
    route: "/nft",
  },
  {
    projectName: "Order summary component",
    image: order,
    desc: "A perfect project for newbies who are starting to build confidence with layouts!",
    route: "/order",
  },
  {
    projectName: "Interactive rating component",
    image: rating,
    desc: "This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!",
    route: "/rating",
  },
  {
    projectName: "Results summary component",
    image: result,
    desc: "This challenge has something for everyone. It’s a HTML and CSS only project, but we’ve also provided a JSON file of the test results for anyone wanting to practice JS.",
    route: "/result",
  },
  {
    projectName: "Fylo data storage component",
    image: flyo,
    desc: "This component has some interesting CSS challenges in the design. If you're looking to test your CSS skills, this will be a great project for you!",
    route: "/flyo",
  },
];
