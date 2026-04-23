const users = [
  { 
    id: 1, 
    nom: "Styve", 
    age: 19, 
    ville: "Douala",
    posts: 45,
    followers: 320,
    verifie: true
  },
  { 
    id: 2, 
    nom: "Paul", 
    age: 25, 
    ville: "Yaoundé",
    posts: 12,
    followers: 150,
    verifie: false
  },
  { 
    id: 3, 
    nom: "Marie", 
    age: 22, 
    ville: "Douala",
    posts: 89,
    followers: 1200,
    verifie: true
  },
  { 
    id: 4, 
    nom: "Jean", 
    age: 30, 
    ville: "Paris",
    posts: 5,
    followers: 80,
    verifie: false
  },
  { 
    id: 5, 
    nom: "Awa", 
    age: 21, 
    ville: "Douala",
    posts: 67,
    followers: 950,
    verifie: true
  },
]
const getUtilisateursVeriifies = users.filter((valide) => valide.verifie == true )
console.log(getUtilisateursVeriifies)
const getUtilisateursParVille = (users, ville) => 
    users.filter((personne)  => personne.ville === ville)
console.log(getUtilisateursParVille(users, "Douala")) 
const getInfluenceurs = users.filter((follower) => follower.followers > 500)
console.log(getInfluenceurs) 
const getTotalPosts = users.reduce((acc, post) => acc + post.posts, 0)
console.log(getTotalPosts)
const getMoyenneAge = users.reduce((acc,ages) => acc + (ages.age), 0) / users.length
console.log(getMoyenneAge)
const getLePlusSuivis = users.reduce((influenceurs, plusSuivis) => {
    if (influenceurs.followers > plusSuivis.followers) {
        return influenceurs
        }
    else {
        return plusSuivis
    }
})
console.log(getLePlusSuivis)
const getStatsVille = (users, ville) => {
    const usersville = users.filter((localisation) => localisation.ville === ville)
    const nbUsers = usersville.length
    const totalPosts = usersville.reduce((acc, post) => acc + post.posts, 0)
    const totalFollowers = usersville.reduce((acc, follower) => acc + follower.followers, 0)
    const totalAge = usersville.reduce((acc, ages) => acc + ages.age, 0)
    const moyenneAge = Math.round((totalAge / usersville.length) *100) / 100
        return {
        ville: ville,
        nbUsers: nbUsers,
        totalPosts: totalPosts,
        totalFollowers: totalFollowers,
        moyenneAge: moyenneAge
    }
}
console.log(getStatsVille(users, "Douala"))