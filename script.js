
fetch("asana_data.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("asana-container");
    data.forEach(asana => {
      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.src = "assets/images/" + asana.image;
      img.alt = asana.english_name;

      const title = document.createElement("h2");
      title.textContent = asana.sanskrit_name;

      const playSanskrit = document.createElement("div");
      playSanskrit.className = "audio-button";
      playSanskrit.innerHTML = "🔊 Pronuncia Sanscrita";
      playSanskrit.onclick = () => {
        new Audio("assets/audio/audio_asana/" + asana.audio_sanskrit).play();
      };

      const eng = document.createElement("h3");
      eng.textContent = asana.english_name;

      const playEnglish = document.createElement("div");
      playEnglish.className = "audio-button";
      playEnglish.innerHTML = "🔊 Pronuncia Inglese";
      playEnglish.onclick = () => {
        new Audio("assets/audio/audio_asana/" + asana.audio_english).play();
      };

      const cat = document.createElement("div");
      cat.className = "category";
      cat.textContent = asana.category;

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(playSanskrit);
      card.appendChild(eng);
      card.appendChild(playEnglish);
      card.appendChild(cat);
      container.appendChild(card);
    });
  });

fetch("asana_data.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("asana-container");
    data.forEach(asana => {
      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.src = "assets/images/" + asana.image;
      img.alt = asana.english_name;

      const title = document.createElement("h2");
      title.textContent = asana.sanskrit_name;

      const playSanskrit = document.createElement("div");
      playSanskrit.className = "audio-button";
      playSanskrit.innerHTML = "🔊 Pronuncia Sanscrita";
      playSanskrit.onclick = () => {
        new Audio("assets/audio/audio_asana/" + asana.audio_sanskrit).play();
      };

      const eng = document.createElement("h3");
      eng.textContent = asana.english_name;

      const playEnglish = document.createElement("div");
      playEnglish.className = "audio-button";
      playEnglish.innerHTML = "🔊 Pronuncia Inglese";
      playEnglish.onclick = () => {
        new Audio("assets/audio/audio_asana/" + asana.audio_english).play();
      };

      const cat = document.createElement("div");
      cat.className = "category";
      cat.textContent = asana.category;

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(playSanskrit);
      card.appendChild(eng);
      card.appendChild(playEnglish);
      card.appendChild(cat);
      container.appendChild(card);
    });
  });
