// Définition du composant 'Tweet' avec destructuration des props pour extraire les valeurs nécessaires.
export default function Tweet({id, name, content, like, onDelete, onLike }) {
    return (
        <div className="tweet">
            {/* Bouton pour supprimer le tweet. Lorsqu'il est cliqué, la fonction 'onDelete'
                est appelée avec l'ID du tweet en tant qu'argument, permettant ainsi d'identifier
                quel tweet doit être supprimé dans la liste des tweets. */}
            <button onClick={() => onDelete(id)} className="delete">❌</button>
            
            {/* Affichage du nom de l'utilisateur qui a posté le tweet. */}
            <h3>{name}</h3>
            
            {/* Affichage du contenu du tweet. */}
            <p>{content}</p>
            
            {/* Bouton pour aimer le tweet. Lorsqu'il est cliqué, la fonction 'onLike'
                est appelée avec l'ID du tweet, ce qui permet d'incrémenter le compteur de 'likes'
                pour ce tweet spécifique. Le nombre actuel de 'likes' est également affiché
                à côté du cœur. */}
            <button onClick={() => onLike(id)}>{like} ❤️</button>
        </div>
    )
}
