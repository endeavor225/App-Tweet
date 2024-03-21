// Importation du composant Tweet pour l'utiliser dans la liste.
import Tweet from './Tweet';

// Définition du composant fonctionnel TweetList qui accepte les props tweets, onDelete et onLike.
export default function TweetList({tweets, onDelete, onLike}) {
    // Vérifie si la liste des tweets est vide ou indéfinie. Si c'est le cas, affiche "No tweets".
    // La condition a été corrigée pour s'assurer qu'elle vérifie correctement si tweets est vide.
    if (!tweets || tweets.length === 0) {
        return "No tweets";
    }

    // Si la liste des tweets contient des éléments, les rend à l'écran.
    return (
        <div>
            <div className='tweet-container'>
                {/* Itère sur la liste des tweets, en générant un composant Tweet pour chaque élément. */}
                {tweets.map((tweet) => {
                    return (
                        <Tweet 
                            key={tweet.id} // Utilise l'ID du tweet comme clé pour optimiser les performances de rendu.
                            id={tweet.id} // Passe l'ID à chaque composant Tweet.
                            name={tweet.name} // Passe le nom de l'utilisateur à chaque composant Tweet.
                            content={tweet.content} // Passe le contenu du tweet à chaque composant Tweet.
                            like={tweet.like} // Passe le nombre de likes à chaque composant Tweet.
                            onDelete={onDelete} // Passe la fonction de suppression à chaque composant Tweet.
                            onLike={onLike} // Passe la fonction de like à chaque composant Tweet.
                        />
                    );
                })}
            </div>
        </div>
    );
}
