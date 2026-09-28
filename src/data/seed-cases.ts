// Real, widely reported cases. Check each against a primary source before launch.
import type { schema } from "../db/client";

export const seedCases: (typeof schema.cases.$inferInsert)[] = [
  {
    "slug": "chir-batti",
    "category": "sky",
    "title": "Chir Batti",
    "region": "Banni grasslands, Kutch, India",
    "lat": 23.72,
    "lon": 69.85,
    "dateLabel": "Reported for generations",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Local herders and travellers",
    "hook": "On dark nights over the Banni grasslands, people describe a light that moves like a lantern with no one carrying it.",
    "summary": [
      "Herders and villagers in the Banni grasslands, on the edge of the Rann of Kutch, have long described lights that appear after dark, float above the ground, and seem to keep their distance when someone follows. Locally they are called chir batti.",
      "Accounts say the lights can shift colour and are seen most often on dark, moonless nights. Stories of travellers who followed them and lost their way are part of local folklore."
    ],
    "explanation": "The usual suggestion is marsh gas or another natural glow from the wetland ground, like the will-o'-the-wisp lights described in Europe. No detailed scientific study has confirmed it.",
    "wiki": "Chir Batti"
  },
  {
    "slug": "jatinga",
    "category": "places",
    "title": "Jatinga",
    "region": "Dima Hasao, Assam, India",
    "lat": 25.12,
    "lon": 93.03,
    "dateLabel": "Every autumn",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Villagers and ornithologists",
    "hook": "On foggy autumn nights, birds fly out of the dark towards the village lights and drop to the ground.",
    "summary": [
      "In the hill village of Jatinga, on dark, foggy nights roughly between September and November, birds fly towards lights after sunset and come down dazed. For years the village was described in the press as the place where birds come to die.",
      "Villagers once believed the birds were sent from the sky, and many were caught for food."
    ],
    "explanation": "Ornithologists think the birds, many of them young, are pushed off course by strong winds and fog while flying at night, then drawn to the village lights. Conservation work has since reduced the trapping.",
    "wiki": "Jatinga"
  },
  {
    "slug": "magnetic-hill",
    "category": "places",
    "title": "Magnetic Hill",
    "region": "Near Leh, Ladakh, India",
    "lat": 34.17,
    "lon": 77.36,
    "dateLabel": "Ongoing",
    "status": "explained",
    "statusLabel": "Explained",
    "witnesses": "Visitors every day",
    "hook": "Leave your car in neutral on this stretch of road, and it appears to roll uphill.",
    "summary": [
      "On the highway west of Leh, a signboard marks a short stretch where vehicles left in neutral seem to roll uphill by themselves. Local stories say the hill's magnetic pull is strong enough to affect cars, and even aircraft flying over.",
      "It is now a stop on almost every tourist route through Ladakh."
    ],
    "explanation": "It's an optical illusion. The shape of the surrounding slopes hides the true horizon, so a gentle downhill slope looks like an uphill one. Similar 'gravity hills' exist around the world.",
    "wiki": "Magnetic Hill Ladakh"
  },
  {
    "slug": "phoenix-lights",
    "category": "sky",
    "title": "The Phoenix Lights",
    "region": "Phoenix, Arizona, USA",
    "lat": 33.45,
    "lon": -112.07,
    "dateLabel": "13 March 1997",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Thousands",
    "hook": "Around 8 pm, people across Arizona looked up at a V of lights crossing the sky so slowly it seemed to hang there.",
    "summary": [
      "On the evening of 13 March 1997, people from Nevada down to Tucson reported a formation of lights moving across the sky. Many described a huge V- or boomerang-shaped object that blocked out the stars as it passed silently overhead.",
      "Later that night, around 10 pm, a second set of lights hung over the mountains south-west of Phoenix. That second event was widely filmed, and it is the footage most people remember."
    ],
    "explanation": "The US military said the 10 pm lights were flares dropped by aircraft during an exercise over the Barry M. Goldwater Range, and many researchers accept that. The earlier V formation is more disputed. Some say it was planes flying in formation, while witnesses who saw it overhead describe one solid object. Arizona's governor at the time, Fife Symington, later said he had seen it himself.",
    "wiki": "Phoenix Lights"
  },
  {
    "slug": "roswell",
    "category": "sky",
    "title": "The Roswell Incident",
    "region": "Roswell, New Mexico, USA",
    "lat": 33.39,
    "lon": -104.52,
    "dateLabel": "July 1947",
    "status": "explained",
    "statusLabel": "Officially explained",
    "witnesses": "A rancher, then military staff",
    "hook": "A rancher found a field scattered with foil, rubber strips and sticks, and the local air base announced it had recovered a 'flying disc'.",
    "summary": [
      "In the summer of 1947, rancher W. W. 'Mac' Brazel found debris on a ranch north-west of Roswell. On 8 July, Roswell Army Air Field issued a press release saying it had recovered a 'flying disc'. Within a day, the military corrected the story: it was a weather balloon.",
      "The case was largely forgotten until the late 1970s, when researchers began interviewing people who said the debris had been something else. Roswell became the most famous UFO case in the world."
    ],
    "explanation": "In 1994 the US Air Force said the debris came from Project Mogul, a classified programme that flew balloons to listen for Soviet nuclear tests, which would explain the secrecy. Many researchers accept this. Others still believe a craft was recovered and hidden.",
    "wiki": "Roswell incident"
  },
  {
    "slug": "marfa",
    "category": "sky",
    "title": "The Marfa Lights",
    "region": "Marfa, Texas, USA",
    "lat": 30.28,
    "lon": -103.88,
    "dateLabel": "Reported since the 1880s",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Locals and visitors",
    "hook": "On clear nights, people gather at a roadside viewing area in west Texas to watch lights flicker on the horizon.",
    "summary": [
      "East of the small town of Marfa, glowing orbs are reported over the flat land towards the mountains. People describe them splitting, merging and bobbing before they vanish. Local stories say sightings go back to the 1880s.",
      "The lights are now a tourist attraction, with an official viewing area beside the highway east of town."
    ],
    "explanation": "A 2004 study by students from the University of Texas at Dallas concluded that the lights they recorded were headlights from cars on a distant highway. Others point out that the oldest accounts come from before cars, and say some sightings still don't fit.",
    "wiki": "Marfa lights"
  },
  {
    "slug": "kecksburg",
    "category": "sky",
    "title": "The Kecksburg Fireball",
    "region": "Kecksburg, Pennsylvania, USA",
    "lat": 40.18,
    "lon": -79.46,
    "dateLabel": "9 December 1965",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "People across several US states and Canada",
    "hook": "A fireball crossed the sky over several states, and people in a small Pennsylvania village said something came down in the woods.",
    "summary": [
      "On the afternoon of 9 December 1965, a bright fireball was seen over parts of Canada and the north-eastern United States. Residents of Kecksburg reported smoke in the woods, and some said they saw an acorn-shaped object partly buried in the ground.",
      "Witnesses described soldiers arriving, closing off the area and taking something away on a flatbed truck. The military said nothing was found."
    ],
    "explanation": "Astronomers generally attribute the fireball to a meteor. A crashed Soviet satellite has also been suggested, but re-entry records for that day don't support it. What, if anything, was taken from the woods is still argued about.",
    "wiki": "Kecksburg UFO incident"
  },
  {
    "slug": "nimitz",
    "category": "sky",
    "title": "The Nimitz 'Tic Tac'",
    "region": "Pacific Ocean, off Baja California",
    "lat": 31.8,
    "lon": -117.9,
    "dateLabel": "14 November 2004",
    "status": "open",
    "statusLabel": null,
    "witnesses": "US Navy pilots and radar operators",
    "hook": "A Navy pilot dropped down to meet a white, wingless object shaped like a breath mint. It turned sharply and was gone.",
    "summary": [
      "In November 2004, radar operators on the USS Princeton, part of the USS Nimitz carrier group, reported tracking unusual objects for days. On 14 November, Commander David Fravor and other pilots were sent to look. They described a smooth, white, oblong object about 12 metres long, moving erratically above a disturbance in the water.",
      "Later that day another jet recorded infrared video of an object. The US Department of Defense officially released that video in 2020."
    ],
    "explanation": "No official explanation has been given. Sceptics suggest sensor artefacts or misjudged distances, but the pilots' accounts and the radar tracking have kept this case at the centre of recent official UFO inquiries.",
    "wiki": "USS Nimitz UFO incident"
  },
  {
    "slug": "shag-harbour",
    "category": "sky",
    "title": "Shag Harbour",
    "region": "Nova Scotia, Canada",
    "lat": 43.49,
    "lon": -65.71,
    "dateLabel": "4 October 1967",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Villagers, fishermen and police officers",
    "hook": "Villagers watched a row of lights dive into the sea, then a glow floating on the water.",
    "summary": [
      "Late on the night of 4 October 1967, several people in the fishing village of Shag Harbour reported lights coming down at an angle and hitting the water. Thinking a plane had crashed, they called the police.",
      "Officers from the Royal Canadian Mounted Police and local fishing boats went out to search. They found a patch of yellowish foam but no wreckage, and no aircraft was reported missing."
    ],
    "explanation": "Canadian government records list the object as unidentified, which is rare in official files. No conventional explanation has been widely accepted.",
    "wiki": "Shag Harbour UFO incident"
  },
  {
    "slug": "rendlesham",
    "category": "visitors",
    "title": "Rendlesham Forest",
    "region": "Suffolk, England",
    "lat": 52.09,
    "lon": 1.44,
    "dateLabel": "26–28 December 1980",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "US Air Force personnel",
    "hook": "Guards at a US air base saw lights among the pine trees and walked into the forest to look.",
    "summary": [
      "Over several nights just after Christmas 1980, US Air Force personnel stationed at RAF Woodbridge reported strange lights in Rendlesham Forest, just outside the base. Some said they approached a glowing object among the trees.",
      "On a later night the deputy base commander, Lt Col Charles Halt, led a patrol and recorded his observations on tape. His memo to the UK Ministry of Defence became one of the best-known documents in British UFO history."
    ],
    "explanation": "Sceptics note that a flashing light seen through the trees lines up with the Orford Ness lighthouse on the coast, and that a bright fireball was reported over southern England on one of the nights. Witnesses reject this, and some accounts have grown over the years, which makes the case harder to judge.",
    "wiki": "Rendlesham Forest incident"
  },
  {
    "slug": "loch-ness",
    "category": "creatures",
    "title": "The Loch Ness Monster",
    "region": "Highland, Scotland",
    "lat": 57.32,
    "lon": -4.44,
    "dateLabel": "Modern sightings since 1933",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Thousands of reports",
    "hook": "After a new road opened along the loch, drivers began reporting something huge moving through the water.",
    "summary": [
      "Stories of a creature in Loch Ness go back centuries, but modern interest began in 1933. A new road along the north shore gave drivers a clear view of the water, and a local newspaper reported a sighting of a large animal.",
      "The most famous photo, the 1934 'surgeon's photograph' of a long neck, was revealed in 1994 to be a hoax made with a toy submarine."
    ],
    "explanation": "A 2018 survey sampled DNA from the loch's water and found no reptile DNA but a great deal of eel DNA, which led some to suggest very large eels. Sightings are also put down to waves, boat wakes, logs and swimming deer. New reports still come in every year.",
    "wiki": "Loch Ness Monster"
  },
  {
    "slug": "belgian-wave",
    "category": "sky",
    "title": "The Belgian UFO Wave",
    "region": "Belgium",
    "lat": 50.63,
    "lon": 6.03,
    "dateLabel": "November 1989 – April 1990",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Thousands, including police officers",
    "hook": "Two police officers reported a silent triangle with lights at each corner, gliding low over the fields.",
    "summary": [
      "Starting in late November 1989, thousands of people across Belgium reported large, silent, triangular craft with bright lights underneath. Two police officers near Eupen gave one of the first detailed reports.",
      "On the night of 30–31 March 1990, the Belgian Air Force sent two F-16 fighter jets after radar contacts. Unusually, the Air Force discussed the results in public."
    ],
    "explanation": "No single explanation covers the wave. The best-known photo of a triangle was later admitted to be a hoax, and some radar returns have been put down to weather effects. Many individual sightings remain unexplained.",
    "wiki": "Belgian UFO wave"
  },
  {
    "slug": "hessdalen",
    "category": "sky",
    "title": "The Hessdalen Lights",
    "region": "Trøndelag, Norway",
    "lat": 62.79,
    "lon": 11.19,
    "dateLabel": "Since the early 1980s",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Residents and scientists",
    "hook": "In a quiet Norwegian valley, bright lights drift above the hills, sometimes for over an hour.",
    "summary": [
      "Between 1981 and 1984, residents of the Hessdalen valley reported lights several times a week: white or yellow balls hanging above the ground, moving slowly, then racing away. The reports drew enough attention that researchers began studying the valley in 1983.",
      "Lights are still seen, though less often. An automatic measuring station has watched the valley since 1998, making this one of the few unexplained lights studied with scientific instruments."
    ],
    "explanation": "Researchers have proposed ideas such as glowing dust or gas linked to the valley's rocks and minerals, but none has been proven. Because the lights have been photographed and measured many times, few doubt that something is there.",
    "wiki": "Hessdalen lights"
  },
  {
    "slug": "tunguska",
    "category": "sky",
    "title": "The Tunguska Event",
    "region": "Siberia, Russia",
    "lat": 60.89,
    "lon": 101.89,
    "dateLabel": "30 June 1908",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Villagers and herders",
    "hook": "A ball of fire crossed the Siberian sky, and an area of forest bigger than a city was flattened.",
    "summary": [
      "On the morning of 30 June 1908, people near the Podkamennaya Tunguska river saw a bright light cross the sky, followed by a blast that knocked people off their feet dozens of kilometres away. Around 80 million trees were flattened across roughly 2,000 square kilometres.",
      "No expedition reached the site until 1927. Researchers found the trees laid out in a vast radial pattern, but no crater."
    ],
    "explanation": "Most scientists agree a meteoroid or small comet exploded in the air several kilometres above the ground, which explains the missing crater. The remote location and the long wait before anyone investigated left room for other theories that still circulate.",
    "wiki": "Tunguska event"
  },
  {
    "slug": "tehran-1976",
    "category": "sky",
    "title": "The Tehran Incident",
    "region": "Tehran, Iran",
    "lat": 35.69,
    "lon": 51.39,
    "dateLabel": "19 September 1976",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Residents, air traffic control and two fighter crews",
    "hook": "Two fighter jets went after a bright light over Tehran. Both crews reported equipment failing as they got close.",
    "summary": [
      "In the early hours of 19 September 1976, residents of Tehran called the airport about a bright object in the sky. The Imperial Iranian Air Force sent an F-4 Phantom, which reported losing instruments and communications as it approached, then getting them back after turning away.",
      "A second jet described the object as very bright, flashing coloured lights, and said a smaller object seemed to separate from it. A US defence intelligence report on the incident was later made public."
    ],
    "explanation": "Suggested explanations include the planet Jupiter, which was bright that night, combined with equipment faults and the stress of a night intercept. Others argue this doesn't account for the radar contact and the equipment failures.",
    "wiki": "1976 Tehran UFO incident"
  },
  {
    "slug": "yeti-1951",
    "category": "creatures",
    "title": "The Shipton Footprint",
    "region": "Menlung Glacier, Nepal–Tibet border",
    "lat": 28,
    "lon": 86.35,
    "dateLabel": "November 1951",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Mountaineers Eric Shipton and Michael Ward",
    "hook": "Two climbers found a trail of huge footprints in the snow and photographed one beside an ice axe for scale.",
    "summary": [
      "During an expedition near Everest in 1951, British mountaineers Eric Shipton and Michael Ward found a trail of large footprints on the Menlung Glacier. Shipton's photo of one print, next to an ice axe, made the yeti famous around the world.",
      "The yeti had long been part of Sherpa tradition. Shipton's photo carried it into Western newspapers and led to several yeti-hunting expeditions in the 1950s."
    ],
    "explanation": "Suggestions include animal tracks that melted and widened in the sun, or several prints overlapping. Some have argued the print was faked. Recent DNA studies of alleged yeti samples found they came from bears.",
    "wiki": "Yeti Shipton footprint"
  },
  {
    "slug": "ariel-school",
    "category": "visitors",
    "title": "The Ariel School Encounter",
    "region": "Ruwa, Zimbabwe",
    "lat": -17.89,
    "lon": 31.24,
    "dateLabel": "16 September 1994",
    "status": "open",
    "statusLabel": null,
    "witnesses": "About 60 schoolchildren",
    "hook": "During morning break, a group of schoolchildren ran to their teachers saying something had landed beyond the playground.",
    "summary": [
      "At the Ariel School near Harare, dozens of children aged roughly six to twelve said they saw a craft come down in the scrub beside the school field, with small figures in dark clothing near it. The teachers were in a staff meeting and did not see it.",
      "Journalists and the Harvard psychiatrist John Mack interviewed the children soon afterwards. Many drew similar pictures, and several, now adults, still describe the event the same way."
    ],
    "explanation": "There is no agreed explanation. Sceptics suggest excitement spreading through a group of children after reports of strange lights in the region that week. Witnesses who have spoken as adults say that doesn't match what they remember.",
    "wiki": "Ariel School UFO incident"
  },
  {
    "slug": "varginha",
    "category": "creatures",
    "title": "The Varginha Creature",
    "region": "Minas Gerais, Brazil",
    "lat": -21.55,
    "lon": -45.43,
    "dateLabel": "20 January 1996",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Three young women, then other residents",
    "hook": "Three young women cutting through a vacant lot saw a crouching creature with red eyes looking back at them.",
    "summary": [
      "On the afternoon of 20 January 1996, three young women in Varginha said they saw a strange creature crouched against a wall, with brown, oily-looking skin, a large head and big red eyes. They ran home terrified.",
      "Other residents told stories that same week of military trucks and a creature being taken away. It became Brazil's most famous UFO case."
    ],
    "explanation": "A Brazilian military inquiry concluded the women had seen a local man crouching in the lot, and denied any capture. Supporters of the case say the official accounts contradict one another.",
    "wiki": "Varginha UFO incident"
  },
  {
    "slug": "westall",
    "category": "sky",
    "title": "The Westall Sighting",
    "region": "Melbourne, Australia",
    "lat": -37.94,
    "lon": 145.14,
    "dateLabel": "6 April 1966",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Over 200 students and teachers",
    "hook": "In the middle of a school morning, a silvery object came down behind the trees next to a Melbourne school field.",
    "summary": [
      "On 6 April 1966, students and teachers at Westall High School and the nearby primary school reported a grey, disc-shaped object that came down into an open grassy area, then rose and flew off. Some said small aircraft circled it.",
      "Many witnesses say they were told not to talk about it. The event was mostly forgotten until the 2000s, when former students began comparing memories."
    ],
    "explanation": "One suggestion is a balloon from a high-altitude research project being flown in Australia at the time. This has not been confirmed, and many witnesses dispute it.",
    "wiki": "Westall UFO"
  }
];
