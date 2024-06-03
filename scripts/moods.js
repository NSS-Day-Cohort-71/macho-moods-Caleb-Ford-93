import { data } from "./database.js"

export const moods = () => {
    let moodHtml = ``
    data.forEach(mood => {
        moodHtml += `
            <h3 class="mood-name">${mood.name}</h3>
            <img src="${mood.imageUrl}" class="mood-img" alt="${mood.text}">
            <div class="mood-advice">
                <p class="macho-advice">Macho Advice:</p>
                <ul class="mood-quotes">
                    <li>${mood.quotes[0]}</li>
                    <li>${mood.quotes[1]}</li>
                </ul>
            </div>
        `
    });
    return moodHtml
}

