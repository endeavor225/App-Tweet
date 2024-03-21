// Importations des hooks et des composants nécessaires de React et des fichiers locaux
import { useState } from 'react';
import TweetForm from './TweetForm'; // Composant pour le formulaire d'ajout de tweet
import TweetList from './TweetList'; // Composant pour afficher la liste des tweets

// Définition de la liste initiale de tweets comme état initial
const DEFAULT_TWEET = [
  {
    id: 1, name: "Melvyn", content: "Je vais bien", like: 1000
  },{
    id: 2, name: "Didier", content: "cool", like: 20
  },{
    id: 3, name: "Luca", content: "SUPER", like: 1
  },{
    id: 4, name: "Jean", content: "FUN", like: 14
  },
];

// Hook personnalisé pour gérer les tweets
const useTweets = () => {
  // Initialisation de l'état 'tweets' avec les tweets par défaut
  let [tweets, setTweets] = useState(DEFAULT_TWEET);

  // Fonction pour ajouter un tweet
  const addTweet = (tweet) => {
    setTweets((curr) => {
      // Création d'un nouveau tweet avec un ID unique et les données passées en argument
      const newTweet = {
        id: curr.length + 1, // Attention : cette méthode pour générer l'ID n'est pas idéale dans une application réelle
        name: tweet.name,
        content: tweet.content,
        like: 0
      };

      // Ajout du nouveau tweet au tableau existant
      return [...curr, newTweet];
    })
  };

  // Fonction pour supprimer un tweet spécifique
  const onDelete = (tweetID) => {
    setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetID));
  };

  // Fonction pour incrémenter le nombre de 'likes' d'un tweet
  const onLike = (tweetID) => {
    setTweets((curr) => {
      const copyTweet = [...curr];
      
      // Trouver le tweet à 'liker' et incrémenter son compteur de 'likes'
      const likedTweet = copyTweet.find((tweet) => tweet.id === tweetID);
      likedTweet.like += 1;

      // Retourner le tableau mis à jour
      return copyTweet;
    })
  };

  // Renvoi des fonctions et de l'état pour utilisation dans d'autres composants
  return { onLike, onDelete, addTweet, tweets };
};

// Composant principal 'App' qui utilise le hook personnalisé 'useTweets'
function App() {
  // Récupération des fonctions et de l'état depuis le hook 'useTweets'
  const { onLike, onDelete, addTweet, tweets } = useTweets();

  return (
    <div>
      {/* Formulaire pour ajouter un nouveau tweet */}
      <TweetForm onSubmit={addTweet}/>
        
      {/* Liste des tweets avec possibilité de les 'liker' ou de les supprimer */}
      <TweetList tweets={tweets} onDelete={onDelete} onLike={onLike} />
    </div>
  );
}

export default App;
