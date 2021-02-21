

fetch('https://api.alquran.cloud/v1/surah')
.then(res => res.json())
.then(data => showSurahList(data));

const showSurahList = (surahList) => {
    console.log(surahList);
    const surahListDetails = document.getElementById("SurahList");
    surahList.data.forEach(element => {
        const surah = document.createElement("div");
        surah.className = "SurahShortDetails";
        surah.innerHTML =`
            <div>
                ${element.number} <span class="nameColor">${element.name}</span> (${element.revelationType}) <span class="englishName">${element.englishName}</span> (${element.englishNameTranslation}) Number of Ayahs: ${element.numberOfAyahs}
            </div>
            
        `;
        surahListDetails.appendChild(surah);
    });
}