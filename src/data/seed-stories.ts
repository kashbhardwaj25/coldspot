// Sample stories written for the prototype. Not real reports. Replace before launch.
import type { schema } from "../db/client";

export const seedStories: (typeof schema.stories.$inferInsert)[] = [
  {
    "slug": "bhopal-whistle",
    "category": "voices",
    "place": "Upper Lake",
    "region": "Bhopal, Madhya Pradesh",
    "lat": 23.25,
    "lon": 77.36,
    "year": 2010,
    "timeLabel": "11:40 pm",
    "witnesses": "4",
    "hook": "Every night, someone whistled from the middle of the lake. Three notes. Always the same three.",
    "body": [
      "Four of us used to sit near the boat club after dinner. On summer nights, a little after eleven, a whistle came from far out on the water. Three notes, the same tune, then nothing.",
      "One night Imran whistled the three notes back. The answer came at once, but this time it came from right by the shore. We never went there at night again."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 3
  },
  {
    "slug": "kutch-lights",
    "category": "sky",
    "place": "Banni grasslands",
    "region": "Kutch, Gujarat",
    "lat": 23.72,
    "lon": 69.85,
    "year": 2016,
    "timeLabel": "1:20 am",
    "witnesses": "3",
    "hook": "There was no moon over the Rann that night. Something was still carrying a light across the ground.",
    "body": [
      "We were driving back from Dhordo when the driver stopped and told us to look, but not to walk towards it. Far off was a yellow light, just above the ground, moving like someone carrying a lantern.",
      "When we stopped, it stopped. When we walked forward, it kept exactly the same distance. The driver said people here know about it, and that was all he would say."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 9
  },
  {
    "slug": "kolkata-tram",
    "category": "voices",
    "place": "An old tram line, north Kolkata",
    "region": "Kolkata, West Bengal",
    "lat": 22.61,
    "lon": 88.37,
    "year": 1998,
    "timeLabel": "1:15 am",
    "witnesses": "Several neighbours",
    "hook": "At night we heard a tram bell. The trams on that line had stopped running years before.",
    "body": [
      "Our house faced the old tracks. Some nights the double ring of a tram bell came down the street, then the slow sound of wheels that faded out at the corner.",
      "The old people in the lane said it happened every year in the first week of the rains. As children we sat at the window and waited. We never saw anything."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 4
  },
  {
    "slug": "majuli-river",
    "category": "creatures",
    "place": "Brahmaputra near Majuli",
    "region": "Majuli, Assam",
    "lat": 26.95,
    "lon": 94.17,
    "year": 2013,
    "timeLabel": "4:50 pm",
    "witnesses": "Ferry passengers",
    "hook": "Something was swimming alongside the ferry. River dolphins don't get that big.",
    "body": [
      "The ferry was moving slowly. On the right, under the water, was a long dark shape as long as the boat. It kept our speed exactly, never ahead, never behind.",
      "The boatman slowed the engine. The shape slowed too. As the bank came close it sank away without making a ripple."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 2
  },
  {
    "slug": "sylhet-call",
    "category": "voices",
    "place": "Tea garden near Sylhet",
    "region": "Sylhet, Bangladesh",
    "lat": 24.9,
    "lon": 91.87,
    "year": 2006,
    "timeLabel": "7:50 pm",
    "witnesses": "3",
    "hook": "Someone called out from the tea garden three times. Each time, closer.",
    "body": [
      "We were sitting in the estate quarters. The first call came from far away, like someone asking the way. The second came from the edge of the garden.",
      "The third came from right outside the door, very softly, like someone speaking into your ear. Nobody opened the door. In the morning there was no one in the garden."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 3
  },
  {
    "slug": "khumbu-tracks",
    "category": "creatures",
    "place": "Above Pangboche",
    "region": "Khumbu, Nepal",
    "lat": 27.86,
    "lon": 86.79,
    "year": 2012,
    "timeLabel": "Dawn",
    "witnesses": "2 porters, 1 trekker",
    "hook": "The porter said it comes at night but never looks inside the tent. At dawn there was a ring of tracks around ours.",
    "body": [
      "The prints made one complete circle, about three metres out from the tent. Not a single step turned inwards.",
      "The porter said it was a sign of respect, not a threat. We pitched the tent somewhere else the next night anyway."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 7
  },
  {
    "slug": "nevada-v",
    "category": "sky",
    "place": "Highway across the Nevada desert",
    "region": "Nevada, USA",
    "lat": 37.35,
    "lon": -116.25,
    "year": 2004,
    "timeLabel": "2:30 am",
    "witnesses": "2 truck drivers",
    "hook": "Two truckers described the same thing over the radio. A V shape, as wide as the highway.",
    "body": [
      "One truck was heading north, the other south. Over the CB, one said, look up. The other said, I'm looking, it's right over me.",
      "Fifty miles separated them. Both gave the same time and the same shape. There was no sound in the air, only their engines."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 12
  },
  {
    "slug": "hessdalen-valley",
    "category": "sky",
    "place": "A valley in central Norway",
    "region": "Trøndelag, Norway",
    "lat": 62.79,
    "lon": 11.19,
    "year": 2011,
    "timeLabel": "8:10 pm",
    "witnesses": "3",
    "hook": "A white ball of light hung over the valley, as if it was trying to work out who we were.",
    "body": [
      "It was a winter evening and the valley was silent. Above the hill a light came on, like a small sun, and stayed hanging in the air.",
      "We flashed a torch. The light blinked once. We flashed twice. It blinked twice. We didn't try a third time."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 9
  },
  {
    "slug": "highlands-name",
    "category": "voices",
    "place": "A glen in the Scottish Highlands",
    "region": "Highland, Scotland",
    "lat": 57.1,
    "lon": -4.95,
    "year": 2001,
    "timeLabel": "6:40 am",
    "witnesses": "1",
    "hook": "In the mist, someone called my name in my brother's voice. My brother was asleep in the tent.",
    "body": [
      "I had gone down to the stream for water. The mist was so thick my own hand looked blurred. From behind me came the voice: quick, come and see what I found.",
      "I was about to turn when my brother's real voice came from the tent, half asleep: where are you? From the stream, the other voice called again. This time it was laughing."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 5
  },
  {
    "slug": "andes-watcher",
    "category": "creatures",
    "place": "High pass above Cusco",
    "region": "Cusco, Peru",
    "lat": -13.4,
    "lon": -71.7,
    "year": 2010,
    "timeLabel": "4:00 am",
    "witnesses": "4",
    "hook": "Something sat on the boulder, the same colour as the rock. When we got close, the boulder was empty.",
    "body": [
      "The trek group left early. On a large rock sat a figure, knees drawn up, head bowed. We took it for a herder.",
      "Our guide greeted it. It raised its head. Then we went round a bend, and when the rock came back into view there was nothing on it but frost."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 3
  },
  {
    "slug": "tono-river",
    "category": "creatures",
    "place": "Riverbank near Tōno",
    "region": "Iwate, Japan",
    "lat": 39.33,
    "lon": 141.53,
    "year": 1999,
    "timeLabel": "5:30 pm",
    "witnesses": "2",
    "hook": "Something the size of a child was watching us from the river, eyes just above the surface.",
    "body": [
      "We were fishing. Near the bank, among the reeds, were two eyes and a flat head. Completely still.",
      "My friend threw the cucumber from his lunch into the water. The eyes went under. The cucumber never came back up."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 4
  },
  {
    "slug": "nullarbor-road",
    "category": "places",
    "place": "Eyre Highway, Nullarbor Plain",
    "region": "South Australia",
    "lat": -31.45,
    "lon": 130.9,
    "year": 1996,
    "timeLabel": "3:15 am",
    "witnesses": "3",
    "hook": "The road ran straight for a hundred kilometres. We still passed the same motel twice.",
    "body": [
      "The motel's neon sign was half dead, one 'O' not lit. We passed it and laughed about a motel in the middle of nowhere.",
      "Forty minutes later the same motel appeared. The same dark 'O', the same red ute parked outside. The road had not turned once. We pulled over and waited for daylight."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 6
  },
  {
    "slug": "coimbra-voice",
    "category": "voices",
    "place": "A student house in the old town",
    "region": "Coimbra, Portugal",
    "lat": 40.21,
    "lon": -8.42,
    "year": 2014,
    "timeLabel": "2:05 am",
    "witnesses": "1",
    "hook": "At two in the morning my mother called my name from under the window. She was in Porto that night.",
    "body": [
      "My room was on the first floor, over a steep cobbled lane. Someone below the window called me by the pet name only my mother uses, stretched out the way only she says it.",
      "I opened the shutters. There was nobody, just wet stones and a flickering lamp. In the morning I phoned her. She had been asleep, and said she had dreamt about me."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 6
  },
  {
    "slug": "maramures-threshold",
    "category": "visitors",
    "place": "A farmhouse in the hills",
    "region": "Maramureș, Romania",
    "lat": 47.68,
    "lon": 24.05,
    "year": 2009,
    "timeLabel": "Midnight",
    "witnesses": "3",
    "hook": "Its head was above the top of the doorframe. Our door is not a small door.",
    "body": [
      "The dogs had gone quiet, which they never do. My father opened the top half of the door to see why, and something was standing in the yard, facing the house.",
      "It was so tall that we could only see it from the shoulders down. It didn't move while we watched. When my father closed the door, the dogs started barking again, all at once."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 5
  },
  {
    "slug": "tefe-tracks",
    "category": "creatures",
    "place": "Forest trail near Tefé",
    "region": "Amazonas, Brazil",
    "lat": -3.36,
    "lon": -64.71,
    "year": 2015,
    "timeLabel": "Morning",
    "witnesses": "2",
    "hook": "There were footprints in the mud. Every one pointed backwards, and each stride was longer than the last.",
    "body": [
      "We had camped by the river and walked back along the trail in the morning. Across it ran a line of small bare footprints, heels at the front.",
      "Our boatman wouldn't follow them. He said whoever made them wants you to walk the wrong way, and that's how people get lost in there. We took the river home."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 4
  },
  {
    "slug": "ruta40-bend",
    "category": "places",
    "place": "A bend on Ruta 40",
    "region": "Mendoza, Argentina",
    "lat": -35.47,
    "lon": -69.58,
    "year": 2003,
    "timeLabel": "1:30 am",
    "witnesses": "3 drivers",
    "hook": "Same bend, same woman, three different nights. Three drivers who had never told each other.",
    "body": [
      "I mentioned it at a service station: a woman by the road on the long bend south of Malargüe, waving, in a summer dress in the cold.",
      "The man at the counter went pale. A trucker had told him the same thing a month before, and a bus driver before that. Nobody had stopped. Nobody wanted to be the first."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 8
  },
  {
    "slug": "atacama-star",
    "category": "sky",
    "place": "Desert near San Pedro de Atacama",
    "region": "Antofagasta, Chile",
    "lat": -22.95,
    "lon": -68.2,
    "year": 2018,
    "timeLabel": "3:40 am",
    "witnesses": "5",
    "hook": "The sky over the desert was so clear the Milky Way cast shadows. One star stopped, then moved the wrong way.",
    "body": [
      "We were on a stargazing tour, lying on mats while the guide pointed out satellites. One of them slowed, stopped dead, and hung there among the stars.",
      "Then it went back the way it had come, faster. The guide stopped talking. Later, in the van, he said it happens out there more than they tell people."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 11
  },
  {
    "slug": "iztapalapa-seven",
    "category": "sky",
    "place": "Rooftops in Iztapalapa",
    "region": "Mexico City, Mexico",
    "lat": 19.36,
    "lon": -99.09,
    "year": 2012,
    "timeLabel": "9:15 pm",
    "witnesses": "Most of the street",
    "hook": "The whole street was up on the roofs. Everyone counted together. Seven lights, and not a single sound.",
    "body": [
      "Someone shouted from a roof, and soon everyone on our block was up there with their phones. Seven orange lights in a line, drifting slowly east.",
      "People said lanterns, or drones. Then the middle light dropped out of the line, stopped over one roof, and went back to its place. Nobody was on that roof."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 10
  },
  {
    "slug": "quindio-short",
    "category": "visitors",
    "place": "A coffee farm",
    "region": "Quindío, Colombia",
    "lat": 4.53,
    "lon": -75.68,
    "year": 2005,
    "timeLabel": "Dusk",
    "witnesses": "2",
    "hook": "Three people were standing between the rows of coffee. None of them came up past my knee.",
    "body": [
      "My cousin and I were picking the last row before dark. Three small figures stood a little way down, wearing hats, very still, watching us work.",
      "My cousin said hello. They turned together and walked into the bushes. Her grandmother said they visit when the harvest is good, and we should leave them some sugar."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 5
  },
  {
    "slug": "bells-line-time",
    "category": "places",
    "place": "Bells Line of Road",
    "region": "New South Wales, Australia",
    "lat": -33.52,
    "lon": 150.42,
    "year": 2011,
    "timeLabel": "10:00 pm",
    "witnesses": "3",
    "hook": "The drive over the mountains takes forty minutes. That night it took three hours, and we never stopped.",
    "body": [
      "We left Lithgow at ten, three of us in the car, talking the whole way. Nobody felt the drive was long.",
      "When we reached the bottom it was past one. The petrol gauge had barely moved. We checked the clock on every phone, and they all agreed with each other, and not with us."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 7
  },
  {
    "slug": "iowa-faceless",
    "category": "visitors",
    "place": "Farmland outside town",
    "region": "Iowa, USA",
    "lat": 42.03,
    "lon": -93.62,
    "year": 1998,
    "timeLabel": "5:50 am",
    "witnesses": "1",
    "hook": "A man was standing in the cornfield. Where his face should have been, there was only smooth, empty skin.",
    "body": [
      "I was driving to an early shift. A man stood at the edge of the corn in work clothes, turned towards the road, and I slowed because I thought he needed help.",
      "As my headlights reached him I saw there was nothing on his face, no eyes, no mouth. I didn't stop. In the mirror the field was empty."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 6
  },
  {
    "slug": "malawi-song",
    "category": "voices",
    "place": "Lakeshore at Nkhata Bay",
    "region": "Nkhata Bay, Malawi",
    "lat": -11.6,
    "lon": 34.3,
    "year": 2013,
    "timeLabel": "Night",
    "witnesses": "4",
    "hook": "We were singing as we pulled in the nets. Someone out on the water sang the next line.",
    "body": [
      "The fishermen sing to keep time. We had finished a verse when a voice came from out on the dark lake, singing the next line, clear and slow.",
      "There were no other boats out. The old fisherman told us to stop singing and row. He said you don't answer a voice on the lake at night."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 4
  },
  {
    "slug": "newfoundland-rise",
    "category": "sky",
    "place": "Cliffs near Cape Spear",
    "region": "Newfoundland and Labrador, Canada",
    "lat": 47.52,
    "lon": -52.62,
    "year": 2007,
    "timeLabel": "4:30 am",
    "witnesses": "2",
    "hook": "A light rose out of the sea. The water around it didn't move.",
    "body": [
      "We had come out to see the first sunrise in North America. Long before dawn, a white light came up slowly from the sea, a few hundred metres out.",
      "There was no splash and no ripple. It climbed to about the height of the cliffs, hung there, and went out like a switch."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 5
  },
  {
    "slug": "khovsgol-steps",
    "category": "creatures",
    "place": "Hills above Lake Khövsgöl",
    "region": "Khövsgöl, Mongolia",
    "lat": 50.6,
    "lon": 100.25,
    "year": 2016,
    "timeLabel": "Morning",
    "witnesses": "2",
    "hook": "There were footprints in the snow. Each step was three metres from the last.",
    "body": [
      "It had snowed overnight. A line of tracks came down the hillside, through the larch trees and past our ger.",
      "Each print was much bigger than a boot, and they were three metres apart, as if something had been walking very slowly with very long legs. Our host looked at them and went back inside."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 6
  },
  {
    "slug": "berlin-last-train",
    "category": "places",
    "place": "The last U-Bahn",
    "region": "Berlin, Germany",
    "lat": 52.5,
    "lon": 13.42,
    "year": 2017,
    "timeLabel": "12:50 am",
    "witnesses": "About ten",
    "hook": "On the last train, everyone in my carriage was staring at the same empty seat.",
    "body": [
      "I looked up from my phone because the carriage had gone silent. Every passenger, about ten of us, was looking at one seat near the door.",
      "Nobody was sitting there. When the doors opened at the next station, everyone stood up and got off. I did too. Nobody said a word on the platform."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 7
  },
  {
    "slug": "snowdonia-shadows",
    "category": "visitors",
    "place": "A ridge path in the fog",
    "region": "Gwynedd, Wales",
    "lat": 53.07,
    "lon": -4.08,
    "year": 2010,
    "timeLabel": "Afternoon",
    "witnesses": "4",
    "hook": "Four of us were walking in the fog. We cast five shadows.",
    "body": [
      "The sun broke through the cloud behind us for a moment, and our shadows fell on the mist ahead. I counted them, as you do.",
      "Five. We stopped and waved our arms, and four shadows waved. The fifth stood at the end of the line, still, until the cloud closed over the sun."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 6
  },
  {
    "slug": "ashanti-triangle",
    "category": "sky",
    "place": "A village outside Kumasi",
    "region": "Ashanti, Ghana",
    "lat": 6.85,
    "lon": -1.55,
    "year": 2008,
    "timeLabel": "11:00 pm",
    "witnesses": "Most of the village",
    "hook": "The whole village was awake. There was a triangle in the sky, very low, making no sound.",
    "body": [
      "Children came running to say the sky was moving. Over the cocoa trees hung a dark triangle with a light at each corner, so low it blocked the stars.",
      "It made no sound at all. After a few minutes it slid away towards the hills, and the lights in the houses flickered as it passed."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 8
  },
  {
    "slug": "upper-peninsula-eyes",
    "category": "creatures",
    "place": "A forest road",
    "region": "Michigan, USA",
    "lat": 46.4,
    "lon": -87.4,
    "year": 2006,
    "timeLabel": "11:30 pm",
    "witnesses": "2",
    "hook": "Two eyes lit up in the headlights. Two metres off the ground.",
    "body": [
      "We were driving home through the woods when two eyes shone at the edge of the road. Deer eyes are low. These were higher than the car roof.",
      "Whatever it was stepped back into the trees without turning round. We didn't talk about it until we were home with the doors locked."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 9
  },
  {
    "slug": "victoria-island",
    "category": "places",
    "place": "Lake Victoria near Entebbe",
    "region": "Wakiso, Uganda",
    "lat": 0.06,
    "lon": 32.47,
    "year": 2007,
    "timeLabel": "Full moon",
    "witnesses": "2 boatmen",
    "hook": "There's an island on the lake you can only see on a full moon. I saved its location on my phone.",
    "body": [
      "The boatmen said it was a full moon, so we would see it. Around midnight there was a small island out on the water, with papyrus and one leaning tree.",
      "I dropped a pin. The next morning we went back to the same spot. There were three metres of water, and nothing below but mud."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 3
  },
  {
    "slug": "mayo-field",
    "category": "visitors",
    "place": "A farm by the bog",
    "region": "County Mayo, Ireland",
    "lat": 53.85,
    "lon": -9.3,
    "year": 2001,
    "timeLabel": "6:20 am",
    "witnesses": "1",
    "hook": "An old man came over the stone wall. His clothes were from my great-grandfather's time.",
    "body": [
      "I was out early bringing in the cows. An old man in a heavy coat and a flat cap stood by the wall, called me by our family name, and asked if the turf was cut yet.",
      "I told him it was. He nodded and walked off towards the bog. At home I told my grandmother, and she took out an old photograph."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 3
  },
  {
    "slug": "merzouga-drums",
    "category": "voices",
    "place": "Dunes of Erg Chebbi",
    "region": "Merzouga, Morocco",
    "lat": 31.1,
    "lon": -4.0,
    "year": 2019,
    "timeLabel": "Night",
    "witnesses": "6",
    "hook": "We heard drumming over the dunes all night. In the morning there were no tracks but ours.",
    "body": [
      "Our camp was deep in the dunes. After the fire died down, drums started somewhere to the east, slow, then fast, then slow again.",
      "Our guide said it was another camp. In the morning we climbed the highest dune. There was no camp in any direction, and the sand was smooth."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 5
  },
  {
    "slug": "wadi-rum-lights",
    "category": "sky",
    "place": "Desert camp in Wadi Rum",
    "region": "Aqaba, Jordan",
    "lat": 29.57,
    "lon": 35.42,
    "year": 2015,
    "timeLabel": "2:00 am",
    "witnesses": "4",
    "hook": "Three lights came down between the cliffs, slowly, as if they were looking for somewhere to land.",
    "body": [
      "I woke and went outside the tent. Three soft lights were sinking between the rock walls, not falling, drifting, one behind the other.",
      "They stopped just above the sand, a long way off, and dimmed together. I woke the others. By the time they came out, the valley was dark."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 6
  },
  {
    "slug": "fiordland-visitor",
    "category": "visitors",
    "place": "A hut on a tramping track",
    "region": "Southland, New Zealand",
    "lat": -45.2,
    "lon": 167.8,
    "year": 2012,
    "timeLabel": "3:00 am",
    "witnesses": "3",
    "hook": "Someone walked round the hut three times in the rain. There were no footprints in the mud.",
    "body": [
      "We were the only ones booked in the hut. In the night, boots went slowly round the deck outside, three full circles, and stopped by the door.",
      "Nobody knocked. In the morning the track was deep mud in every direction, and the only prints in it were the ones we made leaving."
    ],
    "status": "approved",
    "isSample": true,
    "echoSeed": 4
  }
];
