function Character({ character, characterFavourites, updateFavourites }) {

  let imageSrc = "http://picsum.photos/300/200/?blur";
  if (character.imageUrl) {
    imageSrc = character.imageUrl.substring(0, character.imageUrl.indexOf('/revision'));
  }

  function toggleFavouriteForCharacter(characterId) {
    if(!characterFavourites.includes(characterId)) {
      updateFavourites([...characterFavourites, characterId]);
    }
    else {
      const updatedFavourites = characterFavourites.filter((id) => id !== characterId);
      updateFavourites(updatedFavourites);
    }
  }

  return (
    <article className="character-item">

      <h2>{character.name}</h2>

      <div className="character-item__actions" onClick={() => toggleFavouriteForCharacter(character._id)}>
      {!characterFavourites.includes(character._id) ? "Add to Favourites" : "Favourited"}
      </div>

      <img className="character-item__img" src={imageSrc} alt={character.name} />

    </article>
  )
}

export default Character