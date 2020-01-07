const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const history = require('connect-history-api-fallback')
const serveStatic = require('serve-static')
const path = require('path')

// eslint-disable-next-line semi
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(serveStatic(path.join(__dirname, '..', '/dist')))
// Inserted this so that client-side routing works
app.use(history({
  verbose: true
}))
// Documentation for connect-history-api-fallback requires this again...
app.use(serveStatic(path.join(__dirname, '..', '/dist')))

app.post('/register', (req, res) => {
  console.log(req.body)
  res.status(200).send(req.body)
})

app.get('/getArt', (req, res) => {
  console.log('Here')
  let response = {
    cards: [
      { src: 'cards/img1.jpg', title: 'Zvartnots Cathedral', id: '1', description: 'Built in the seventh century, Zvarnots is a centrally framed, aisled, tetraconch cathedral. Today, all you can see are ruins located in Vagharshapat. The cathedral was built when the country was overrun by Muslim Arabs who ruled Sasanian Persia, of which Armenia was a part. The exterior, highlighting monuments, vine decorations and eagle capitals, reveal the impact of Mesopotamian and Syrian architecture.' },
      { src: 'cards/img2.jpg', title: 'Opera', id: '2', description: 'Located in the center of Yerevan, this building is an architectural masterpiece created by architect Alexander Tamanyan. In 1937 his project won the grand prize at an international exhibition in Paris. The Yerevan Opera House was constructed in the first half of the twentieth century, and today it is a cultural symbol of the country with its classical beauty, majestic stage, and imposing balconies and hallways.' },
      { src: 'cards/img3.jpg', title: 'Cascade', id: '3', description: 'A relatively new addition to the architectural scene of Yerevan, Cascade is the capital’s most modern structure. Designed by Jim Torosyan, Sargis Gurzadyan and Aslan Mkhitaryan, the construction started in 1971 and was partially finished within nine years. Underneath the exterior steps, there are seven escalators rising along the lengths of the complex. It features various exhibition halls, including the Cafesjian Museum of Art. The exterior highlights multiple levels of decorative fountains and contemporary sculptures from the Cafesjian collection. Feel free to walk up the stairs and enjoy beautiful views of Yerevan’s ce' },
      { src: 'cards/img4.jpg', title: 'Republic Square', id: '4', description: 'Republic Square is another example of modern architecture in Armenia. The square consists of two sections: an elliptical roundabout and a trapezoid-shaped pool with musical fountains. The square is enclosed by five major buildings constructed with yellow and pink tuff stone in the neoclassical style with the extended use of Armenian motifs' },
      { src: 'cards/img5.png', title: 'Mesrop Mahtots', id: '5', description: 'Mesrop Mashtots, also known as Mesrob the Vartabed, was an early medieval Armenian linguist, composer, theologian, statesman and hymnologist. He is best known for inventing the Armenian alphabet 405 AD, which was a fundamental step in strengthening Armenian national identity. He was also the creator of the Caucasian Albanian and Georgian alphabets, according to a number of scholars.' },
      { src: 'cards/img6.jpg', title: 'Raffi', id: '6', description: 'Raffi, pseudonym of Hakob Meliq-hakobian, (born 1835, Payajīk, Iran—died 1888, Tiflis, Georgia, Russian Empire), celebrated Armenian novelist. Raffi worked as a schoolmaster and a journalist, collaborating with the Russian-Armenian paper Mshak from 1872 to 1884. His principal novels are Jalaleddin (1878), The Fool (1880), David Bek (1880), The Golden Cockerel (1882), Sparks (1883–90), and Samuel (1885). He also wrote a number of short stories and historical articles.' },
      { src: 'cards/img7.jpg', title: 'Paruyr Sevak', id: '7', description: 'Sevak was born Paruyr Ghazaryan in Chanakhchi (now Zangakatun) village, Armenian SSR, Soviet Union to Rafael Ghazaryan and Anahit Soghomonyan on January 24, 1924. Young Paruyr attended the village school and later in 1940 moved to Yerevan to study at the philological faculty of Yerevan State University. He graduated from the YSU in 1945. The same year he starts a postgraduate study of Armenian literature at the Academy of Sciences Abeghyan Institute of Literature.In 1951 Sevak went to Moscow to study at the Gorky Institute of World Literature.Graduating from that institute Paruyr works there in 1957-59 as a translating professor.Inspired by the Western Armenian poet Ruben Sevak, Paruyr Ghazaryan adopted the name Paruyr Sevak as his pen name.In 1960 Sevak returns to Yerevan and starts his fecund and meaningful literary, scientific and public activism. He starts to work at the Abeghyan Institute of Literature as a scientific researcher.From 1966-1971 Sevak served as the Secretary of the Board of the Writers Union of Armenia.In 1967 Sevak became a doctor of philology after dissertation defense. In 1968 he was elected to the Supreme Council of the Armenian SSR.Sevak died on June 17, 1971 in a car crash while on a drive back to Yerevan. In previous years, he had voiced his criticism of the corruption of the Soviet establishment and for this, many Armenians believe, he was murdered by the Soviet government. His wife, Nelly Menagharishvili, also died in the car crash. He was buried in the backyard of his home, in Zangakatun, which later became a museum open to everyone.' },
      { src: 'cards/img8.jpg', title: 'Hovhannes Tumanyan', id: '8', description: 'Hovhannes Tumanyan (February 19 [O.S. February 7] 1869 – March 23, 1923) was an Armenian poet, writer, translator, literary and public activist. He is considered the national poet of Armenia.Tumanyan wrote poems, quatrains, ballads, novels, fables, critical and journalistic articles. His work was mostly written in realistic form, often centering on everyday life of his time. Born in the historical village of Dsegh in the Lori region, at a young age Tumanyan moved to Tiflis, which was the center of Armenian culture under the Russian Empire during the 19th and early 20th centuries.Tumanyans work is simple, natural and poetically inspired at the same time. It is not by mere chance that dozens of phrases and expressions from Tumanyans works have become a natural part of peoples everyday language, their sayings, adages, and maxims.He created lyrics, fables, epic poems and translations into Armenian of Byron, Goethe and Pushkin.' },
      { src: 'cards/img9.jpg', title: 'Giqor', id: '9', description: 'Directed by Sergey Israyelyan in 1952, this drama tells us a sorrowful story about a 12 years old boy named Gikor. His father, Hambo wants to take him to a city to make him a “person,” without knowing what severe days expect to his child. Though, Gikor`s mother, Nani begs Hambo not to take her little child. Unfortunately, the father’s decision was final.Here begin the tortures of the inexperienced boy. In Tiflis, Gikor must be work for a cruel trader, named Bazaz Artem who every day and night exploits a pure child and pays only coins and sometimes even doesn’t pay. And the trader’s wife always makes the little boy cry.The main actors of drama “Gikor” are Albert Gulinyan as Gikor, Sos Sargsyan as Hambo, Galya Novents as Nani and Armen Dzhigarkhanyan as Bazaz Artem. These talented actors act in such a natural and real way, and the heartbreaking scenes are so touching that will surely make you cry.' },
      { src: 'cards/img10.png', title: 'The Tango of Our Childhood', id: '10', description: ' The importance of the solidarity and maintenance of the family has always been vital for the Armenians․ “The tango of our childhood” introduces a story about an Armenian family. Ruben, the father of the family, gets divorced from his wife, leaves his children and goes to live with that woman. Though the children get into new trouble every day and it becomes tough for the wife, Siranush to bring up the children alone. She needed the warmth of her husband. She goes against her principles and makes some serious attempts to bring her husband back.The film is unique and meaningful. It worth watching. One of the greatest actor Mher Mkrtchyan is the leading actor. And his wife Galya Novents as a Siranush. The artistic talents of these people are so big that we will always remember their prominent names. Albert Mkrtchyan directed the film in 1985.' },
      { src: 'cards/img11.jpg', title: 'The Men', id: '11', description: 'Another masterpiece of our films is “the Men’’, which presents the friendliness and devotion of Armenian people. The plot is so compelling that will make you fall in love with the film. “There are four friends, Vazgen, Sako, Aram, and Suren. They work as taxi drivers in Yerevan. Aram, the most charming and shy of them, falls in love with a sweet girl named Karine. The lady, however, has no idea who Aram is and doesn’t even pays attention to him, which makes Aram suffer. Seeing the friend\'s sufferings, three friends decide to do their best that the beautiful lady notice and pay attention to their friend Aram. Edmond Keosayan directed the film in 1972. Here also one of the actors is prominent Mher Mkrtchyan as Suren. The role of Aram was playing Avetik Gevorgyan, and the beautiful lady Karine was talented Alla Tumanian. “The men’’ was loved by the audience and as an honor, a statue of the heroes placed in the central Saryan park of our capital, Yerevan.' },
      { src: 'cards/img12.jpg', title: 'The song of The Old Days', id: '12', description: 'We have many prominent films about the war, where there is no war scene, and instead, there is the spirit of war. The most influential is “The song of the old days.” The heroes of the film are members of the provincial city theatre team who shares the bitterness and suffering of the victims with the whole country. The film focuses on the woman named Hayastan, who loses all her five sons during the war, and Nikol who brings the “black paper” about the death of her sons. The film is so touching that even the most cold-hearted person can’t watch without crying. The director of the film is Albert Mkrtchyan, who was the witness of the war. Armenian old films are considered to be one of the valuable treasures for us, which have essential meaning for our national identity. Our old movies are not limited only to these six ones. There are numerous Armenian old films, which are loved by the Armenians and not only. Other treasures are Namus, Pepo, Guys from the Army Band, The Color of Pomegranates, We and Our Mountains, Ararat. It is just impossible to mention all of it, as it seems to be unlimited.' }
    ]
  }
  res.status(200)
  res.json(response)
})

app.get('/getInfo', (req, res) => {
  let response = {
    info: {
      title: 'Zvartnots Cathedral',
      description: 'Zvartnots was built at a time when much of Armenia had just recently been overrun by the Muslim Arabs who were progressively occupying the Sasanian Persia/Iran of which Armenia was a part at the time. Construction of the cathedral began in 643 under the guidance of Catholicos Nerses III (nicknamed Shinogh or the Builder). Dedicated to St. Gregory, it was located at the place where a meeting between King Trdat III and Gregory the Illuminator was supposed to have taken place. According to the medieval Armenian historian Movses Kaghankatvatsi, the cathedral was consecrated in 652.[1] From 653 to 659, Nerses was in Tayk and the construction of the cathedral continued under Anastas Akoratsi. Following the Arab occupation of Dvin and the intensifying wars between the Byzantine and Arab armies on the former\'s eastern borders, Nerses transferred the patriarchal palace of the Catholicos from Dvin to Zvartnots.[2] The exterior church design, featuring basket capitals with Ionic volute mounts, eagle capitals, and vine scroll friezes reveals the influence of Syrian and northern Mesopotamian architecture.[3] Zvartnots remained standing until the end of the tenth century, but historical sources are silent as to the cause of its collapse.[1] A close copy of the cathedral was erected at Ani out by Trdat the Architect under the reign of Gagik I Bagratuni during the final decade of the tenth century. The contemporary Armenian historian Stepanos Taronetsi referred to Zvartnots when describing the church that Gagik I had inaugurated as a large structure at Vałaršapat [Vagharshapat], dedicated to the same saint that had fallen into ruins.[4]',
      images: [
        'https://img.itinari.com/pages/images/original/c09765de-8aa1-4733-8bfd-c666bdc07978-istock-889725394.jpg?ch=DPR&dpr=1&w=1200&h=800&s=0751c09856822165f24b19062a70c39a',
        'https://img.itinari.com/page/content/original/8dbf24e0-4bba-4b85-85b0-9afb02dcc07f-istock-873187630.jpg?ch=DPR&dpr=1&w=994&s=e78c518217bc0924472eae008208550f',
        'https://pbs.twimg.com/media/C9RVeapWAAAvnOV.jpg'
      ]
    }
  }
  res.status(200)
  res.json(response)
})

let port = process.env.PORT || 4000

app.listen(port, function () {
  console.log('Node js at port', port)
})
