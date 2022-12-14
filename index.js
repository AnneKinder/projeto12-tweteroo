import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const usersArray = [];


app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  usersArray.push(req.body);
  res.send("OK");
});


app.get("/tweets", (req, res) => {

  let lastTweets= tweetArray.slice(-10)
  res.send(lastTweets);

});



app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;
  let tweetBody = {
    username: username,
    avatar: usersArray[usersArray.length - 1].avatar,
    tweet: tweet,
  };

  tweetArray.push(tweetBody);

  res.send("OK");
});


const tweetArray = [
  {
    username: "bobesponja",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
  {
    username: "tururu",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
  {
    username: "siricascuco",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
  {
    username: "sandy",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
  {
    username: "piratao",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
];

app.listen(5000);

