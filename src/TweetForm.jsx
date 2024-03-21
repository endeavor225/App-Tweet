// Définition du composant TweetForm avec destructuration pour extraire la fonction onSubmit des props.
export default function TweetForm({onSubmit}) {

    // Définition de la fonction handleSubmit, qui sera appelée lors de la soumission du formulaire.
    const handleSubmit = (event) => {
        // Empêche le comportement par défaut de soumission de formulaire, qui rafraîchirait la page.
        event.preventDefault();
    
        // Récupère la valeur des champs de formulaire 'name' et 'content' à partir de l'événement.
        const name = event.target.name.value;
        const content = event.target.content.value;
    
        // Crée un nouvel objet newTweet avec les valeurs récupérées, et initialise 'like' à 0.
        const newTweet = {
          name,
          content,
          like: 0
        };

        // Appelle la fonction onSubmit passée en prop, en lui passant le nouvel objet tweet.
        onSubmit(newTweet);
    };

    // Rendu du formulaire HTML avec un gestionnaire d'événements onSubmit attaché à handleSubmit.
    return (
        <div>
            <form onSubmit={handleSubmit} className='tweet-form'>
                <h4>New tweet</h4>
                <input type='text' name='name' placeholder='Name' />
                <input type='text' name='content' placeholder='Content' />
                <input type='submit' />
            </form>
        </div>
    );
}
