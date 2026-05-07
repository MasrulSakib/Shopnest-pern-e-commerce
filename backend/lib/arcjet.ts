import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";
import "dotenv/config";

const arcjetKey = process.env.ARCJET_KEY;
if (!arcjetKey) {
  throw new Error("ARCJET_KEY environment variable is required");
}

export const aj = arcjet({
  key: arcjetKey,
  characteristics: ["ip.src"],
  //   shiields protect against bots and abuse, and can be customized with different rules and actions
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      // you can customize the bot detection rules and thresholds
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),
    tokenBucket({
      mode: "LIVE",
      refillRate: 30, // number of tokens added to the bucket per second
      interval: 5, // interval in milliseconds for refilling the bucket
      capacity: 20, // maximum number of tokens in the bucket
    }),
  ],
});
