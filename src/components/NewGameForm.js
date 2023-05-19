import React, { useState } from "react";

function NewGameForm({addNewGame}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [platform, setPlatform] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newGame = {
        name,
        image,
        release_year: parseInt(releaseYear),
        platform,
        genre,
        description
      };

      const response = await fetch("http://localhost:3000/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGame),
      });

      if (response.ok) {
        setName("");
        setImage("");
        setReleaseYear("");
        setPlatform("");
        setGenre("");
        setDescription("");

        addNewGame(newGame);
      } else {
        console.error("Failed to submit the new game");
      }  
    } catch (error) {
      console.error("Error submitting the new game", error);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      />
      <input 
      type="text"
      placeholder="Image URL"
      value={image}
      onChange={(e) => setImage(e.target.value)}
      required
      />
      <input 
      type="text"
      placeholder="Release Year"
      value={releaseYear}
      onChange={(e) => setReleaseYear(e.target.value)}
      required
      />
      <input 
      type="text"
      placeholder="Platform"
      value={platform}
      onChange={(e) => setPlatform(e.target.value)}
      required
      />
      <input 
      type="text"
      placeholder="Genre"
      value={genre}
      onChange={(e) => setGenre(e.target.value)}
      required
      />
      <textarea 
      placeholder="Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewGameForm;