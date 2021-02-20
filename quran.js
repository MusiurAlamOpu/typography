

fetch('http://api.alquran.cloud/v1/surah')
.then(res => res.json())
.then(data => showSurahList(data));

const showSurahList = (surahList) => {
    console.log(surahList);
    const surahDiv = document.createElement('SurahList');
    
    const englishName = surahList.data[0].englishName;
    console.log("Surah Name",englishName);

    const surahListDiv = document.createElement("div");
    surahListDiv.className = "SurahShortDetails";
    surahListDiv.innerHTML = `
        Name: <span>${englishName}</span>
    `;
    surahDiv.appendChild(surahListDiv);
}