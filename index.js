import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors()) 



app.get('/tweets', (req, res)=>{
    res.send(tweetArray)
})




app.listen(5000)

const tweetArray = [
	{
		username: "bobesponja",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "eu amo o hub"
	},
    {
		username: "bobesponja",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "eu amo o hub"
	},
    {
		username: "bobesponja",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "eu amo o hub"
	},
    {
		username: "bobesponja",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "eu amo o hub"
	},
    {
		username: "bobesponja",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "eu amo o hub"
    	}
]

// USUARIO:
// {
// 	username: 'bobesponja', 
// 	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
// }

// TWEET:
// {
// 	username: "bobesponja",
//   tweet: "eu amo o hub"
// }