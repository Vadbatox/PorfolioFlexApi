fetch("infos.json")
    .then(res => res.json())
    .then(mesInfos => {

        //Creation et attachement des élements d'entête  
        const avatar = document.querySelector(".profil")
        avatar.src = mesInfos.avatar
        const noms = document.querySelector(".noms")
        noms.innerText = mesInfos.prenom + " " + mesInfos.postnom[0] + ". " + mesInfos.nom
        const mail = document.querySelector(".mail")
        mail.innerHTML = mesInfos.adresseMail
        mail.href = mesInfos.adresseMail
        const mention = document.querySelector(".ment")
        mention.innerText = mesInfos.qualification
        const description = document.querySelector(".description")
        description.innerText = mesInfos.description
        const telephone = document.querySelector(".telephone")
        telephone.innerText = mesInfos.contact
    })

//Fin entête

const competences = document.querySelector(".competences")


const competence = document.createElement("div")
competence.className = "competence"

const boutonVisibilite = document.createElement("button")
boutonVisibilite.innerText = "Ajouter"


const formulaireSaisiCompt = document.createElement("form")
formulaireSaisiCompt.style.display = 'none'
formulaireSaisiCompt.id = "formulaire"

const divForm1 = document.createElement("div")
divForm1.className = "div1"
const divForm2 = document.createElement("div")

formulaireSaisiCompt.appendChild(divForm1)
formulaireSaisiCompt.appendChild(divForm2)


const ajouterCompetence = document.createElement("button")
ajouterCompetence.type = "submit"
ajouterCompetence.innerText = "Ajouter"

const champProgres = document.createElement("input")
champProgres.placeholder = "Progression"
champProgres.type = "number"
champProgres.min = 0
champProgres.max = 100
champProgres.step = 5
divForm1.appendChild(champProgres)

const champTitre = document.createElement("input")
champTitre.placeholder = "Titre"
champTitre.type = "Text"
champTitre.id = "champTitre"
divForm1.appendChild(champTitre)

const champDescription = document.createElement("input")
champDescription.placeholder = "Description"
champDescription.type = "Text"
champDescription.id = "champDescrition"
divForm1.appendChild(champDescription)



competences.appendChild(competence)
competences.appendChild(boutonVisibilite)
divForm2.appendChild(ajouterCompetence)
competences.appendChild(formulaireSaisiCompt)


formulaireSaisiCompt.addEventListener("submit", function(e) {
    e.preventDefault()

    competence.innerHTML += `

    <div class="niveau">
        <span class="textpourcentage">${champProgres.value}%</span>
        <div class="comp">
            <h3>${champTitre.value}</h3>
            <p>${champDescription.value}</p>
        </div>
    </div>
`
    champProgres.value = ""
    champDescription.value = ""
    champTitre.value = ""
    formulaireSaisiCompt.style.display = "none"
    boutonVisibilite.style.display = "block"
})

boutonVisibilite.addEventListener("click", function() {
    formulaireSaisiCompt.style.display = "block"
    boutonVisibilite.style.display = "none"
    champProgres.focus()
})

//Fin compétence

fetch("drapeau.json")
    .then(res => res.json())
    .then(mesDrapeaux => {

        const langues = document.querySelector(".langues")
        const langue = document.querySelector(".langue")


        const formLang = document.createElement('div')
        langue.appendChild(formLang)
        formLang.style.display = "none"

        const btnLang = document.createElement("button")
        btnLang.innerText = "Ajouter"
        const imgLang = document.querySelector(".imglang")
        langues.appendChild(btnLang)

        const champLang = document.createElement("select")
        const lingala = document.createElement('option')
        lingala.value = 'Lingala'
        lingala.innerText = "Lingala"
        champLang.appendChild(lingala)
        champLang.placeholder = "Ajouter une langue"
        formLang.appendChild(champLang)
        const btnAjoutLang = document.createElement("button")
        btnAjoutLang.innerText = "Ajouter"
        formLang.appendChild(btnAjoutLang)
    })