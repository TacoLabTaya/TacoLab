import { defineNuxtPlugin } from '#app'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('ldPerson', (person) => {
        //console.log(person)
        return {
            '@context': 'https://schema.org',
            "@type": "Person",
            name: person.name == null ? '' : person.name,
            additionalName: person.additional == null ? '' : person.additional,
            givenName: person.given == null ? '' : person.given,
            familyName: person.family == null ? '' : person.family,
            url: person.url == null ? '' : person.url,
            image: person.avatar == null ? '' : person.avatar.filename,
            gender: person.gender == null ? '' : person.gender,
            description: person.description == null ? '' : person.description,
        };
    });
    nuxtApp.provide('ldOrganization', (org) => {
        //console.log(org)
        return {
            '@context': 'https://schema.org',
            '@type' : org.type == null? 'Organization': org.type,
            name : org.name==null ? 'name': org.name,
            logo : org.logo==null ? '' : org.logo.filename,
            url : org.url==null ? 'https://' : org.url,
            slogan : org.slogan==null ? 'slogan': org.slogan,
            founder : org.founder==null ? 'founder' : {
              '@context': 'https://schema.org',
              '@type' : 'Person',
              name: org.founder
            },
            location : org.location==null ? 'location' : {
              '@context': 'https://schema.org',
              '@type' : 'Place',
              name: org.location
            },
            description : org.description==null ? 'description' : org.description,
            foundingDate : org.foundingdate==null ? 'foundingDate' : org.foundingdate,
        };
    });
    nuxtApp.provide('ldArticle', (article,author,publisher,dPub,dMod,path) => {
        //const nuxtApp = useNuxtApp()
        return {
            '@context': 'https://schema.org',
            "@type": "Article",
            author: author,
            publisher:publisher,
            datePublished: dPub,
            dateModified: dMod,
            headline:article.title == null ? 'title' : article.title,
            image:article.eyecatch == null ? [] : [
                nuxtApp.$imagePath(article.eyecatch.filename, 900,  900),
                nuxtApp.$imagePath(article.eyecatch.filename, 1040, 780),
                nuxtApp.$imagePath(article.eyecatch.filename, 1200, 675),
            ],
            mainEntityOfPage: path,
        };
    });
})