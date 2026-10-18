// Real, widely reported cases. Check each against a primary source before launch.
import type { schema } from "../db/client";

export const seedCases: (typeof schema.cases.$inferInsert)[] = [
  {
    "slug": "chir-batti",
    "featured": true,
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
    "featured": true,
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
    "featured": true,
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
    "featured": true,
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
    "featured": true,
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
    "featured": true,
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
    "featured": true,
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
    "featured": true,
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
    "featured": true,
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
    "featured": true,
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
    "featured": true,
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
    "featured": true,
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
    "featured": true,
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
    "featured": true,
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
    "featured": true,
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
    "featured": true,
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
    "featured": true,
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
    "featured": true,
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
    "featured": true,
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
  },
  {
    "slug": "barisal-guns",
    "category": "voices",
    "title": "The Barisal Guns",
    "region": "Barisal, Ganges delta, Bangladesh",
    "lat": 22.7,
    "lon": 90.37,
    "dateLabel": "Reported from the 1870s",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Villagers, boatmen and British officials",
    "hook": "Out over the delta, on calm days, people heard booms like distant cannon fire, with no guns anywhere.",
    "summary": [
      "In the 19th century, people living around Barisal in the Ganges delta described deep booms, like cannon fired far away, rolling in from the direction of the sea. Henry Beveridge, a British civil servant, wrote about them in his 1876 history of the district, and the name 'Barisal guns' stuck.",
      "Similar booms were reported across the delta, often during the rainy season. Reports faded in the 20th century, and the sound became a classic example of what are now called skyquakes."
    ],
    "explanation": "Suggestions include distant thunder carried a long way over water, surf breaking on sandbanks, small earthquakes in the soft delta sediments, and gas escaping from the ground. None has been confirmed, and similar sounds are still reported in other coastal areas around the world.",
    "wiki": "Barisal guns"
  },
  {
    "slug": "bengaluru-boom",
    "category": "voices",
    "title": "The Bengaluru Boom",
    "region": "Bengaluru, Karnataka, India",
    "lat": 12.97,
    "lon": 77.59,
    "dateLabel": "20 May 2020",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Much of the city",
    "hook": "Just after lunchtime, a single boom rattled windows from one end of Bengaluru to the other.",
    "summary": [
      "At around 1:20 pm on 20 May 2020, people across Bengaluru, from the airport in the north to Electronic City in the south, heard a loud boom. Windows and doors shook, and many people thought it was an earthquake or an explosion.",
      "The state's earthquake monitoring centre said its instruments had recorded no tremor. For a few hours, social media filled with guesses, from a meteor to a UFO."
    ],
    "explanation": "The Ministry of Defence said the sound came from a military test aircraft going supersonic, flying between 36,000 and 40,000 feet, well outside the city. A sonic boom from that height can be heard 65 to 80 km away.",
    "wiki": null
  },
  {
    "slug": "wow-signal",
    "featured": true,
    "category": "voices",
    "title": "The Wow! Signal",
    "region": "Big Ear radio telescope, Delaware, Ohio, USA",
    "lat": 40.07,
    "lon": -83.07,
    "dateLabel": "15 August 1977",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Recorded by a radio telescope; spotted by astronomer Jerry Ehman",
    "hook": "For 72 seconds, a radio telescope in Ohio picked up a signal so strong that the astronomer reading the printout wrote 'Wow!' next to it.",
    "summary": [
      "On 15 August 1977, Ohio State University's Big Ear radio telescope, which was scanning the sky for signals from other civilisations, recorded a strong, narrow burst of radio waves from the direction of the constellation Sagittarius. It lasted about 72 seconds, roughly as long as it took the sky to drift past the telescope.",
      "Days later, the volunteer astronomer Jerry Ehman circled the code '6EQUJ5' on the printout and wrote 'Wow!' beside it. The signal was close to the frequency of hydrogen, which scientists had suggested others might use to signal. Searches of the same patch of sky since then have never found it again."
    ],
    "explanation": "No explanation has been confirmed. A 2017 suggestion that it came from passing comets was widely rejected. In 2024, researchers proposed that a cold hydrogen cloud was briefly brightened by a burst from a distant star, which would make it a rare natural event. Others still consider it the best candidate signal ever recorded.",
    "wiki": "Wow! signal"
  },
  {
    "slug": "the-bloop",
    "featured": true,
    "category": "voices",
    "title": "The Bloop",
    "region": "South Pacific Ocean, west of the tip of South America",
    "lat": -50.0,
    "lon": -100.0,
    "dateLabel": "1997",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Underwater microphones run by the US government",
    "hook": "In 1997, underwater microphones thousands of kilometres apart picked up a deep, rising sound from the remote South Pacific.",
    "summary": [
      "In the summer of 1997, a network of underwater microphones used by the US National Oceanic and Atmospheric Administration (NOAA) recorded a powerful, very low sound that rose in pitch. It was picked up by sensors more than 5,000 km apart, which made it one of the loudest underwater sounds ever recorded.",
      "Because it rose in pitch like some animal calls, it was quickly suggested that it came from a creature far bigger than any whale. The 'Bloop' became a favourite of ocean-monster stories."
    ],
    "explanation": "NOAA later concluded that the sound matched an icequake: a large iceberg cracking and breaking away from Antarctica. Similar sounds have since been recorded from icebergs.",
    "wiki": "Bloop"
  },
  {
    "slug": "taos-hum",
    "category": "voices",
    "title": "The Taos Hum",
    "region": "Taos, New Mexico, USA",
    "lat": 36.41,
    "lon": -105.57,
    "dateLabel": "Early 1990s onwards",
    "status": "open",
    "statusLabel": null,
    "witnesses": "A small share of residents",
    "hook": "In a quiet desert town, some people hear a low drone at night that their neighbours can't hear at all.",
    "summary": [
      "In the early 1990s, residents of Taos and the surrounding area began reporting a faint, low humming or droning sound, often described as like a distant diesel engine. It was usually heard indoors and at night, and some people found it impossible to sleep.",
      "Most people in town heard nothing. A study by scientists from the University of New Mexico and nearby national laboratories found that roughly 2 percent of residents said they heard it, but recording equipment never picked up a source."
    ],
    "explanation": "No single cause has been found. Suggestions include industrial or electrical noise, low-frequency sound carried through the ground, and a form of tinnitus that only some people experience. Similar hums have been reported in Bristol, England, and Windsor, Canada, where one was later linked to industry across the river.",
    "wiki": "The Hum"
  },
  {
    "slug": "uvb-76",
    "featured": true,
    "category": "voices",
    "title": "UVB-76, 'The Buzzer'",
    "region": "Western Russia",
    "lat": 56.08,
    "lon": 37.07,
    "dateLabel": "On air since at least the early 1980s",
    "status": "open",
    "statusLabel": "Purpose unknown",
    "witnesses": "Radio listeners worldwide",
    "hook": "On a shortwave frequency, a short buzz has repeated, minute after minute, for more than forty years.",
    "summary": [
      "On 4625 kHz, listeners with a shortwave radio can hear a short, harsh buzz repeated about 25 times a minute, day and night. Radio enthusiasts nicknamed it 'The Buzzer'. It has been broadcasting since at least the early 1980s.",
      "Every so often, the buzz stops and a man's voice reads out a short message in Russian: a code word, a string of numbers and Russian names. No one has publicly explained what the messages mean."
    ],
    "explanation": "It is widely believed to be a Russian military station, and its transmitters have been traced to sites in western Russia. Its purpose is unknown. Suggestions include keeping the frequency reserved, checking that a communications channel is working, and passing orders to military units.",
    "wiki": "UVB-76"
  },
  {
    "slug": "52-hertz-whale",
    "featured": true,
    "category": "voices",
    "title": "The 52-Hertz Whale",
    "region": "North Pacific Ocean",
    "lat": 45.0,
    "lon": -140.0,
    "dateLabel": "Heard since 1989",
    "status": "open",
    "statusLabel": "Unidentified",
    "witnesses": "US Navy underwater microphones; ocean researchers",
    "hook": "Somewhere in the North Pacific, a whale has been singing for decades at a pitch no other whale uses.",
    "summary": [
      "In 1989, US Navy microphones built to track submarines picked up a whale song at about 52 hertz. That's a much higher pitch than blue whales or fin whales, the species whose songs are closest to it. Researchers tracked the same voice each season for years as it moved through the North Pacific.",
      "The whale has never been seen, and nobody knows what species it is. A 2004 scientific paper on the calls caught the public imagination, and it became known as 'the loneliest whale in the world'."
    ],
    "explanation": "Scientists think it is a real whale, perhaps a hybrid of two species or an animal with an unusual voice. Its song has deepened slightly over the years, and some researchers think similar calls have been heard at more than one place at a time. Whether other whales can hear and answer it is unknown.",
    "wiki": "52-hertz whale"
  },
  {
    "slug": "kuldhara",
    "featured": true,
    "category": "places",
    "title": "Kuldhara",
    "region": "Near Jaisalmer, Rajasthan, India",
    "lat": 26.82,
    "lon": 70.79,
    "dateLabel": "Abandoned in the early 1800s",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Visitors to the ruins",
    "hook": "A whole desert village stands empty, and the story goes that everyone left in a single night.",
    "summary": [
      "Kuldhara, about 18 km from Jaisalmer, was a prosperous village founded centuries ago by Paliwal Brahmins. Today its rows of stone houses, temples and wells stand empty and roofless.",
      "Local legend says that in the early 19th century, after the demands of a cruel state minister, the people of Kuldhara and dozens of nearby villages packed up and left in one night, putting a curse on the land so that no one could settle there again."
    ],
    "explanation": "Historians point to a slower decline. Surveys of the site found that most of the village's wells had dried up by the early 1800s, while taxes from the Jaisalmer state stayed high. Farming became impossible, and families moved away over years rather than overnight.",
    "wiki": "Kuldhara"
  },
  {
    "slug": "bhangarh-fort",
    "featured": true,
    "category": "places",
    "title": "Bhangarh Fort",
    "region": "Alwar district, Rajasthan, India",
    "lat": 27.1,
    "lon": 76.29,
    "dateLabel": "Ruined town from the 1600s",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Visitors and villagers",
    "hook": "A government sign at the gate of a ruined Rajasthan fort forbids anyone from entering after sunset.",
    "summary": [
      "Bhangarh is a ruined fort and town at the edge of the Sariska Tiger Reserve, built in the late 16th or early 17th century. Its bazaars, temples and palace walls still stand, but the town has been empty for centuries.",
      "Two legends explain its fall. In one, a sorcerer named Singhia fell for the princess Ratnavati and cursed the town when his spell failed. In the other, a holy man allowed the town to be built on condition that its buildings never cast a shadow on his retreat. The Archaeological Survey of India's sign banning entry between sunset and sunrise has made the legends famous."
    ],
    "explanation": "The Archaeological Survey of India puts up similar rules at many protected sites. At Bhangarh, the reasons are practical: crumbling ruins, no lighting and wildlife from the nearby reserve. Historians link the town's decline to ordinary causes, including the shifting fortunes of its rulers and famine.",
    "wiki": "Bhangarh Fort"
  },
  {
    "slug": "lonar-lake-pink",
    "featured": true,
    "category": "places",
    "title": "Lonar Lake Turns Pink",
    "region": "Lonar, Buldhana district, Maharashtra, India",
    "lat": 19.98,
    "lon": 76.51,
    "dateLabel": "June 2020",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Villagers, visitors and scientists",
    "hook": "In just a few days, the green water of a meteor-crater lake turned pink.",
    "summary": [
      "Lonar Lake sits inside a crater made when a meteorite struck the Deccan plateau long ago. Its water is salty and alkaline, and it is normally green.",
      "In early June 2020, during the lockdown, the lake turned reddish-pink within two or three days. Photos spread widely, and theories ranged from pollution to something from the meteorite itself."
    ],
    "explanation": "Scientists at the Agharkar Research Institute in Pune found large numbers of haloarchaea, salt-loving microbes that make a pink pigment. With no pre-monsoon rain, the water had become saltier, and the microbes multiplied. The colour faded once the rains came.",
    "wiki": "Lonar Lake"
  },
  {
    "slug": "kodinhi-twins",
    "category": "places",
    "title": "Kodinhi, the Village of Twins",
    "region": "Malappuram district, Kerala, India",
    "lat": 11.04,
    "lon": 75.92,
    "dateLabel": "Ongoing",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Villagers, doctors and researchers",
    "hook": "In one Kerala village, so many twins are born that their families formed an association.",
    "summary": [
      "Kodinhi, a village in Malappuram district, has one of the highest rates of twin births reported anywhere. Local counts put the number of twin pairs at around 400 among roughly 2,000 families, several times the national average.",
      "Villagers say the number of twins has grown over the past few generations. The village has a twins and kins association, and twins are part of its identity."
    ],
    "explanation": "No cause has been confirmed. In 2016, researchers from the CSIR-Centre for Cellular and Molecular Biology in Hyderabad, the Kerala University of Fisheries and Ocean Studies, and universities in the UK and Germany collected saliva and hair samples to study the villagers' genes. Suggestions include inherited traits passed down through families, diet and the local water.",
    "wiki": "Kodinhi"
  },
  {
    "slug": "lepakshi-hanging-pillar",
    "category": "places",
    "title": "The Hanging Pillar of Lepakshi",
    "region": "Lepakshi, Sri Sathya Sai district, Andhra Pradesh, India",
    "lat": 13.8,
    "lon": 77.61,
    "dateLabel": "Temple built in the 1500s",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Visitors every day",
    "hook": "In a 16th-century temple, one stone pillar doesn't quite touch the floor: you can slide a cloth underneath it.",
    "summary": [
      "The Veerabhadra temple at Lepakshi was built in the 16th century under the Vijayanagara empire. One of the roughly 70 carved pillars in its hall hangs slightly clear of the floor, so visitors pass a thin cloth or a sheet of paper beneath it.",
      "Local accounts say that during British rule an engineer tried to move the pillar to find out how it was supported, and that his attempt shifted the pillars and roof around it."
    ],
    "explanation": "The pillar is held by the stone beams and roof it is locked into, so it doesn't need to rest on the floor. Many think it was knocked slightly out of place, perhaps during that attempt to move it, rather than built to hang. How exactly the builders spread its weight is still debated.",
    "wiki": "Lepakshi"
  },
  {
    "slug": "racetrack-playa",
    "category": "places",
    "title": "The Sailing Stones",
    "region": "Racetrack Playa, Death Valley, California, USA",
    "lat": 36.68,
    "lon": -117.56,
    "dateLabel": "Seen since the early 1900s; solved in 2014",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Visitors and scientists",
    "hook": "On a dry lake bed in Death Valley, heavy rocks leave long trails behind them, but nobody had ever seen one move.",
    "summary": [
      "Racetrack Playa is a flat, dry lake bed high in Death Valley. Scattered across it are rocks, some weighing hundreds of kilograms, each at the end of a long, shallow trail carved into the mud. Some trails run straight; others curve or zigzag.",
      "For decades, nobody saw a rock move. Explanations ranged from strong winds to magnetism to pranksters."
    ],
    "explanation": "In 2013 and 2014, a team of scientists fitted rocks with GPS trackers and filmed them moving. After rain, a thin layer of ice forms on the shallow water. When it breaks up on a sunny day, light winds push the ice sheets, which push the rocks a few metres a minute.",
    "wiki": "Sailing stones"
  },
  {
    "slug": "fairy-circles",
    "category": "places",
    "title": "Fairy Circles",
    "region": "Namib Desert, Namibia",
    "lat": -24.5,
    "lon": 15.8,
    "dateLabel": "Ongoing",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Local communities, visitors and scientists",
    "hook": "Across the Namib Desert, millions of bare circles dot the grassland, each one ringed with taller grass.",
    "summary": [
      "Along the edge of the Namib Desert, the grassland is covered in bare, round patches, from a couple of metres to more than 30 metres across, each with a ring of taller grass around its edge. Seen from the air, they spread across the landscape in a strangely regular pattern.",
      "Each circle can last for decades. Local stories have explained them as the footprints of gods, and similar circles were found in Western Australia in 2016."
    ],
    "explanation": "Scientists disagree. One group says sand termites eat the grass roots at the centre, creating a bare patch that traps water for the ring around it. Another says the grasses arrange themselves this way as they compete for scarce water. Some think both may be at work.",
    "wiki": "Fairy circle (arid grass formation)"
  },
  {
    "slug": "mande-barung",
    "category": "creatures",
    "title": "Mande Barung",
    "region": "Garo Hills, Meghalaya, India",
    "lat": 25.5,
    "lon": 90.3,
    "dateLabel": "Reported for generations",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Villagers and local researchers",
    "hook": "In the forests of the Garo Hills, villagers describe a tall, hairy 'forest man' that walks on two legs.",
    "summary": [
      "In the Garo Hills of Meghalaya, near the border with Bangladesh, villagers have long told of the mande barung, or forest man: a tall, hairy, ape-like creature that walks upright. Reports increased in the 2000s, and a local group spent years photographing footprints and 'nests' that people led them to.",
      "In 2008, the group passed hairs found in one of the nests to a British primatologist, who said they didn't match any animal he knew from those forests. The story was covered around the world."
    ],
    "explanation": "DNA analysis at a UK university found that the hairs came from a Himalayan goral, a wild goat-antelope that lives in the region. Supporters say the creature may still exist and that one sample proves little. Scientists say no animal of this kind has ever been confirmed.",
    "wiki": "Mande Barung"
  },
  {
    "slug": "buru",
    "category": "creatures",
    "title": "The Buru",
    "region": "Apatani Valley (Ziro), Arunachal Pradesh, India",
    "lat": 27.55,
    "lon": 93.83,
    "dateLabel": "Accounts collected in 1947–48",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Apatani elders; a 1948 newspaper expedition",
    "hook": "Apatani elders described a long, scaly creature that once lived in the swamps of their valley.",
    "summary": [
      "In 1947, Charles Stonor, an official working in what is now Arunachal Pradesh, collected stories from the Apatani people about the buru: a long animal with scaly skin, a heavy tail, short legs and a long head, that lived in the swamps of their valley and bellowed.",
      "The elders said the buru disappeared when their ancestors drained the swamps to grow rice. In 1948, the British newspaper the Daily Mail sent journalist Ralph Izzard with Stonor to look for it in neighbouring valleys. They found nothing, and Izzard wrote a book about the search."
    ],
    "explanation": "Most researchers think the stories preserve a memory of a known animal, such as a crocodile, a large monitor lizard or a big swamp fish, that no longer lives in the valley. No physical remains have been found.",
    "wiki": "Buru (legendary creature)"
  },
  {
    "slug": "patterson-gimlin-film",
    "featured": true,
    "category": "creatures",
    "title": "The Patterson–Gimlin Film",
    "region": "Bluff Creek, Northern California, USA",
    "lat": 41.44,
    "lon": -123.7,
    "dateLabel": "20 October 1967",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Roger Patterson and Bob Gimlin",
    "hook": "Two riders in the California woods filmed a large, hairy figure walking away across a creek bed, and it turned to look at them.",
    "summary": [
      "On 20 October 1967, Roger Patterson and Bob Gimlin were riding along Bluff Creek, looking for evidence of Bigfoot, when they say they came upon a tall, dark, hairy figure by the creek. Patterson filmed it with a 16 mm camera as it walked away across the sandbar.",
      "Partway through, the figure turns its head and upper body to look back at the camera. The minute-long film is still the most famous Bigfoot evidence, and frame 352 has been reproduced countless times."
    ],
    "explanation": "Many people think it shows a person in a costume. A man named Bob Heironimus said in 2004 that he wore the suit, and a costume maker said he sold one to Patterson, but no suit has been produced. Some researchers argue the figure's walk and proportions would be hard to fake. Gimlin has always said the encounter was real.",
    "wiki": "Patterson–Gimlin film"
  },
  {
    "slug": "mothman",
    "featured": true,
    "category": "creatures",
    "title": "The Mothman",
    "region": "Point Pleasant, West Virginia, USA",
    "lat": 38.84,
    "lon": -82.14,
    "dateLabel": "November 1966 – 1967",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Dozens of residents",
    "hook": "Two young couples driving at night near an old munitions site said a tall winged figure with glowing red eyes chased their car.",
    "summary": [
      "On the night of 15 November 1966, two young couples driving near an old World War II munitions area outside Point Pleasant told police they had seen a figure taller than a man, with large wings and glowing red eyes. They said it followed their car at high speed.",
      "Over the next year, dozens of people in the area reported something similar. The local newspaper named it the Mothman, and it later inspired a book, a film and an annual festival in the town."
    ],
    "explanation": "A wildlife biologist at West Virginia University suggested it was a sandhill crane, a tall bird with red patches around its eyes that could have strayed from its usual route. Others have proposed a large owl, whose eyes shine red in headlights. Many witnesses rejected both ideas.",
    "wiki": "Mothman"
  },
  {
    "slug": "devils-footprints",
    "category": "creatures",
    "title": "The Devil's Footprints",
    "region": "Exe estuary, Devon, England",
    "lat": 50.68,
    "lon": -3.46,
    "dateLabel": "8–9 February 1855",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Residents of dozens of towns and villages",
    "hook": "After a snowy night in Devon, people woke to a single line of hoof-like prints that seemed to cross rooftops and walls.",
    "summary": [
      "On the morning of 9 February 1855, after a night of snow, people in towns and villages around the Exe estuary in south Devon found tracks shaped like small hooves. They ran in a single line, one in front of another, and were reported to continue for many kilometres in total.",
      "According to the newspapers of the time, the tracks went over rooftops and high walls, through haystacks and up to doors, and even seemed to cross the estuary. Some people called them the devil's footprints."
    ],
    "explanation": "Suggestions at the time and since include hopping rodents such as wood mice, birds, a loose pony, an experimental balloon trailing a rope, and tracks from several animals that were linked together in the retelling. Many historians think the tracks were real but the reports were exaggerated.",
    "wiki": "Devil's Footprints"
  },
  {
    "slug": "orang-pendek",
    "category": "creatures",
    "title": "Orang Pendek",
    "region": "Kerinci Seblat National Park, Sumatra, Indonesia",
    "lat": -1.7,
    "lon": 101.26,
    "dateLabel": "Reported for over a century",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Villagers, travellers and researchers",
    "hook": "In the rainforests of Sumatra, people describe a short, strong ape that walks upright like a person.",
    "summary": [
      "In the mountain forests of western Sumatra, villagers describe the orang pendek, or 'short person': an ape about a metre tall that walks on two legs, with powerful shoulders and short dark hair. Dutch colonists recorded reports in the early 1900s.",
      "Some researchers who have spent years in the forest, including a British conservationist working with Fauna & Flora International, say they have seen it themselves. Footprint casts and hair samples have been collected, but none has given a clear answer."
    ],
    "explanation": "Sceptics suggest sightings are of known animals such as sun bears, gibbons or orangutans seen briefly. Some primatologists think an undiscovered ape in such a remote forest is possible, but there is no photograph or specimen yet.",
    "wiki": "Orang pendek"
  },
  {
    "slug": "mokele-mbembe",
    "featured": true,
    "category": "creatures",
    "title": "Mokele-mbembe",
    "region": "Likouala swamps, Republic of the Congo",
    "lat": 1.35,
    "lon": 17.15,
    "dateLabel": "Reported since the early 1900s",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Local communities; several expeditions",
    "hook": "In the swamps of the Congo basin, people tell of a huge animal with a long neck that lives in the rivers.",
    "summary": [
      "People living around the Likouala swamps and Lake Tele in the Republic of the Congo describe the mokele-mbembe, a large river animal often said to have a long neck and tail. Reports reached Europe in the early 20th century.",
      "Since the 1980s, several expeditions have searched the swamps, some hoping to find a surviving dinosaur. They brought back interviews and a few unclear photographs, but no clear evidence."
    ],
    "explanation": "Scientists consider a surviving dinosaur extremely unlikely. Researchers suggest the stories may describe known animals such as elephants, hippos, crocodiles or large snakes, or a river spirit in local belief that outsiders took literally.",
    "wiki": "Mokele-mbembe"
  },
  {
    "slug": "betty-barney-hill",
    "featured": true,
    "category": "visitors",
    "title": "Betty and Barney Hill",
    "region": "White Mountains, New Hampshire, USA",
    "lat": 44.1,
    "lon": -71.68,
    "dateLabel": "19–20 September 1961",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Betty and Barney Hill",
    "hook": "Driving home through the mountains at night, a couple watched a light follow their car, then arrived home two hours later than they should have.",
    "summary": [
      "Late on 19 September 1961, Betty and Barney Hill were driving home to Portsmouth, New Hampshire, after a holiday in Canada. They said a bright light seemed to follow their car through the White Mountains, and that Barney stopped and saw figures through binoculars at the windows of a craft.",
      "They reached home around dawn, about two hours later than expected. Years later, under hypnosis with a psychiatrist, both described being taken aboard and examined. It became the first widely publicised abduction account in the United States."
    ],
    "explanation": "Their psychiatrist, Dr Benjamin Simon, believed the abduction story was most likely a dream Betty had after the drive, which Barney had absorbed by hearing her tell it. Some researchers think the light was the planet Jupiter or a beacon on a nearby mountain. Supporters point to the couple's sincerity, and to the fact that they reported the light and the lost time before either was hypnotised.",
    "wiki": "Barney and Betty Hill incident"
  },
  {
    "slug": "socorro-zamora",
    "featured": true,
    "category": "visitors",
    "title": "The Socorro Landing",
    "region": "Socorro, New Mexico, USA",
    "lat": 34.06,
    "lon": -106.9,
    "dateLabel": "24 April 1964",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Police officer Lonnie Zamora",
    "hook": "A police officer chasing a speeding car heard a roar, saw a flame, and found an egg-shaped craft on legs in a gully.",
    "summary": [
      "On the afternoon of 24 April 1964, police officer Lonnie Zamora was chasing a speeding car outside Socorro when he heard a roar and saw a blue-orange flame in the sky. He drove towards it and saw a white, egg-shaped object on legs in a gully, with two small figures in white coveralls beside it.",
      "As he approached, the object roared, rose and flew away. Investigators found scorched brush and marks in the ground where he said it stood. The US Air Force's Project Blue Book investigated and listed the case as unidentified."
    ],
    "explanation": "No explanation has been confirmed. Suggestions include a test of an experimental aircraft or lunar landing craft, and a prank by students from the nearby New Mexico Tech: a note found decades later shows the college's president writing that he had 'good indication' of a student who engineered a hoax. Zamora's honesty has rarely been questioned.",
    "wiki": "Lonnie Zamora incident"
  },
  {
    "slug": "flatwoods-monster",
    "category": "visitors",
    "title": "The Flatwoods Monster",
    "region": "Flatwoods, Braxton County, West Virginia, USA",
    "lat": 38.72,
    "lon": -80.65,
    "dateLabel": "12 September 1952",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "A group of local boys, a mother and a National Guardsman",
    "hook": "A group of boys saw a bright light land on a hill, climbed up to look, and met a tall figure with glowing eyes.",
    "summary": [
      "On the evening of 12 September 1952, a group of boys in Flatwoods saw a bright object cross the sky and seem to land on a farm hill. They went up the hill with Kathleen May, the mother of two of them, and a young National Guardsman, Eugene Lemon.",
      "At the top, they said, they saw a pulsing red light and a tall figure, about 3 metres high, with a glowing face, a spade-shaped hood and a hissing sound, surrounded by a choking mist. They ran. Several of the group said they felt ill afterwards."
    ],
    "explanation": "Investigator Joe Nickell argued that the bright object was a meteor seen across several states that night, the pulsing red light was an aircraft beacon, and the figure was a barn owl perched on a branch, its face lit by a torch. Some witnesses' families still reject that explanation.",
    "wiki": "Flatwoods monster"
  },
  {
    "slug": "valensole",
    "category": "visitors",
    "title": "The Valensole Encounter",
    "region": "Valensole, Provence, France",
    "lat": 43.84,
    "lon": 5.98,
    "dateLabel": "1 July 1965",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Lavender farmer Maurice Masse",
    "hook": "At dawn in a lavender field in Provence, a farmer said he came upon a small craft and two child-sized figures.",
    "summary": [
      "Early on the morning of 1 July 1965, Maurice Masse, a lavender farmer, heard a whistling sound in his field near Valensole. He said he found an egg-shaped object, about the size of a car, standing on thin legs, and two small figures near it, looking at his lavender plants.",
      "Masse said one of the figures pointed something at him and he found he couldn't move. The figures went back inside, and the object flew off. The local gendarmerie investigated, and marks were found in the soil where the lavender later grew poorly."
    ],
    "explanation": "No explanation has been confirmed. Sceptics have suggested a helicopter or an experimental aircraft, or that Masse misremembered an ordinary event. Investigators who met him found him sincere, and he rarely spoke about it afterwards.",
    "wiki": "Valensole UFO incident"
  },
  {
    "slug": "pascagoula",
    "category": "visitors",
    "title": "The Pascagoula Encounter",
    "region": "Pascagoula River, Mississippi, USA",
    "lat": 30.37,
    "lon": -88.56,
    "dateLabel": "11 October 1973",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Charles Hickson and Calvin Parker",
    "hook": "Two men fishing off a pier at night said a glowing craft landed beside them, and they were taken on board.",
    "summary": [
      "On the evening of 11 October 1973, Charles Hickson and Calvin Parker were fishing from a pier on the Pascagoula River when, they said, a glowing, egg-shaped craft appeared near them. They said three figures with wrinkled grey skin and claw-like hands floated out and carried them aboard, where they were examined.",
      "They went to the sheriff's office that night. Officers left the two men alone in a room with a hidden tape recorder, and on the tape they sound frightened and confused, which convinced many people they believed what they were saying."
    ],
    "explanation": "Sceptics suggest a hoax, or that the men shared a frightening hallucination. Others point to inconsistencies in later retellings. Hickson passed a lie-detector test, and Parker repeated the account in a book decades later.",
    "wiki": "Pascagoula abduction"
  },
  {
    "slug": "utsuro-bune",
    "category": "visitors",
    "title": "Utsuro-bune, the Hollow Ship",
    "region": "Pacific coast of Hitachi Province (Ibaraki), Japan",
    "lat": 36.4,
    "lon": 140.6,
    "dateLabel": "1803",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Fishermen, as told in later accounts",
    "hook": "In 1803, fishermen on the Japanese coast found a round vessel washed ashore, with a young woman inside who spoke no known language.",
    "summary": [
      "Several Japanese texts from the early 19th century describe how, in 1803, fishermen in Hitachi Province pulled a strange vessel from the sea. It was round, like an incense burner, with glass windows and an iron base. Inside was a young woman with unfamiliar clothes and hair, who spoke a language no one understood and held a small box she would not let go of.",
      "In the story, the fishermen pushed the vessel and its passenger back out to sea. Some of the texts include drawings of the vessel and strange writing found inside it."
    ],
    "explanation": "Historians see it as a folk tale, related to older Japanese stories of hollow boats carrying exiled princesses. The place named in the accounts has never been found in the records. Some UFO writers have read it as an early encounter, and others suggest it was a foreign ship's passenger.",
    "wiki": "Utsuro-bune"
  },
  {
    "slug": "kerala-red-rain",
    "featured": true,
    "category": "sky",
    "title": "The Red Rain of Kerala",
    "region": "Kottayam and Idukki, Kerala, India",
    "lat": 9.59,
    "lon": 76.52,
    "dateLabel": "July – September 2001",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Thousands of residents",
    "hook": "For weeks in 2001, rain fell red over parts of Kerala, staining clothes the colour of blood.",
    "summary": [
      "From 25 July 2001, red rain fell in short showers over parts of Kerala, mostly in Kottayam and Idukki districts. It stained clothes pink and red, and over the next two months yellow, green and black rain was also reported.",
      "Some people thought it was blood or a sign; others thought a meteor had exploded overhead. A later scientific paper even proposed that the red particles came from space."
    ],
    "explanation": "A report for the Government of India by the Centre for Earth Science Studies and the Tropical Botanical Garden and Research Institute found the red colour came from spores of a local algae, Trentepohlia, which grows on trees and rocks. Later studies confirmed it. How so many spores got into the rain clouds is less clear.",
    "wiki": "Red rain in Kerala"
  },
  {
    "slug": "ladakh-lights-2012",
    "category": "sky",
    "title": "The Ladakh Lights",
    "region": "Thakung, near Pangong Tso, Ladakh, India",
    "lat": 33.95,
    "lon": 78.45,
    "dateLabel": "August 2012 – early 2013",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Indo-Tibetan Border Police troops",
    "hook": "At a border post high in Ladakh, soldiers watched glowing objects rise over the horizon night after night.",
    "summary": [
      "Between August and October 2012, an Indo-Tibetan Border Police unit at Thakung, near Pangong Tso, reported more than 100 sightings of bright, unidentified objects rising from the horizon and moving slowly across the sky. Reports continued into early 2013.",
      "The sightings were reported up to the highest levels of government. Several agencies looked into them, and there was worry that they might be surveillance drones from across the border."
    ],
    "explanation": "Astronomers from the Indian Institute of Astrophysics concluded that the objects were the planets Jupiter and Venus. At that altitude the air is very clear, and the two planets, the brightest in the sky at the time, rose and set at exactly the times the soldiers described.",
    "wiki": null
  },
  {
    "slug": "naga-fireballs",
    "featured": true,
    "category": "sky",
    "title": "The Naga Fireballs",
    "region": "Mekong River, Nong Khai, Thailand",
    "lat": 18.02,
    "lon": 103.08,
    "dateLabel": "Every year, at the end of Buddhist Lent",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Thousands of spectators every year",
    "hook": "Once a year, glowing red balls rise silently out of the Mekong River and vanish into the night sky.",
    "summary": [
      "Every year, around the full moon in October that marks the end of Buddhist Lent, people along the Mekong in Thailand and Laos watch reddish balls of light rise from the river. They climb silently for a few hundred metres and disappear. Local belief says they are breathed out by the naga, a serpent that lives in the river.",
      "The event draws large crowds, especially to Phon Phisai district in Nong Khai province, and has become a major festival."
    ],
    "explanation": "One explanation is gas from rotting matter in the riverbed igniting as it reaches the air, though scientists have not shown how this could happen on a schedule. In 2002, a Thai television team filmed soldiers on the Lao side of the river firing tracer rounds into the sky during the festival. Many locals reject both explanations.",
    "wiki": "Naga fireball"
  },
  {
    "slug": "hampi-musical-pillars",
    "featured": true,
    "category": "voices",
    "title": "The Musical Pillars of Hampi",
    "region": "Vijaya Vittala temple, Hampi, Karnataka, India",
    "lat": 15.34,
    "lon": 76.48,
    "dateLabel": "Temple built in the 1500s",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Visitors and musicians",
    "hook": "Tap the stone pillars of a 16th-century temple in Hampi, and they ring out musical notes.",
    "summary": [
      "The Vijaya Vittala temple at Hampi, built under the Vijayanagara empire, has a hall of carved granite pillars. Clusters of slender columns around the main pillars give out clear, distinct notes when tapped, like a set of stone instruments. They are often called the SaReGaMa pillars.",
      "A story told at the temple says that during British rule, two pillars were cut open to find what made them sing, and nothing was found inside. Visitors are no longer allowed to tap them, to protect the stone."
    ],
    "explanation": "The sound comes from the stone itself. Each slender column was carved to a particular thickness and length from dense, resonant granite, so it rings at its own pitch when struck, much like a tuning fork. How the builders tuned them so precisely is still admired.",
    "wiki": "Vijaya Vittala Temple"
  },
  {
    "slug": "latur-underground-sounds",
    "category": "voices",
    "title": "The Sounds Under Hasori",
    "region": "Hasori, Latur district, Maharashtra, India",
    "lat": 18.07,
    "lon": 76.75,
    "dateLabel": "September 2022",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Villagers",
    "hook": "In a village near the site of a great earthquake, people began hearing rumbles from under the ground.",
    "summary": [
      "From 6 September 2022, people in Hasori, a village in Latur district, reported loud rumbling sounds that seemed to come from beneath the ground. Some families slept outdoors.",
      "The fear was understandable: Hasori is about 28 km from Killari, the centre of the 1993 Latur earthquake. But seismographs recorded no earthquake, and district officials called in experts from a university in Nanded and the Indian Institute of Geomagnetism."
    ],
    "explanation": "No clear cause was widely reported. Similar rumbling sounds elsewhere in the Deccan have been linked to tiny earthquakes too small to be felt, or to water moving through cracks in the basalt rock after heavy rain.",
    "wiki": null
  },
  {
    "slug": "booming-dunes",
    "category": "voices",
    "title": "The Singing Sand Mountain",
    "region": "Mingsha Shan, Dunhuang, Gansu, China",
    "lat": 40.08,
    "lon": 94.67,
    "dateLabel": "Recorded for over a thousand years",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Travellers and visitors",
    "hook": "When the sand slides down the dunes outside Dunhuang, the desert gives out a deep, droning hum.",
    "summary": [
      "Mingsha Shan, the 'Singing Sand Mountain', is a range of tall dunes just outside the old Silk Road town of Dunhuang. When the sand slides down the slopes, or people slide down them, the dunes give out a loud, low hum that can last for minutes. Chinese writings described the sound more than a thousand years ago.",
      "Marco Polo described similar sounds in the deserts of Asia, and travellers believed they were the voices of spirits. Around 35 dunes worldwide are known to boom like this."
    ],
    "explanation": "Scientists agree the sound comes from dry, rounded grains of sand moving together in an avalanche. They still debate exactly how the grains synchronise, and why only some dunes sing.",
    "wiki": "Singing sand"
  },
  {
    "slug": "lincolnshire-poacher",
    "category": "voices",
    "title": "The Lincolnshire Poacher",
    "region": "Broadcast from Cyprus",
    "lat": 34.59,
    "lon": 32.99,
    "dateLabel": "1970s – 2008",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Shortwave radio listeners",
    "hook": "For decades, a shortwave station played a few bars of an English folk song, then a woman's voice read out numbers.",
    "summary": [
      "From the 1970s until 2008, shortwave listeners could tune in to a station that opened with a few bars of the English folk song 'The Lincolnshire Poacher', played on an electronic instrument. Then a woman's voice, with an English accent, read out groups of five numbers, over and over.",
      "It was one of the best-known 'numbers stations', strange broadcasts of spoken numbers heard around the world during and after the Cold War. Radio enthusiasts traced its signal to Cyprus."
    ],
    "explanation": "It is widely believed to have been run by British intelligence, sending coded messages to agents abroad, which could only be read with a matching one-time code. The British government has never confirmed this. The station stopped in 2008.",
    "wiki": "Lincolnshire Poacher (numbers station)"
  },
  {
    "slug": "upsweep",
    "category": "voices",
    "title": "The Upsweep",
    "region": "Remote South Pacific Ocean",
    "lat": -54.0,
    "lon": -140.0,
    "dateLabel": "Since 1991",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Underwater microphones run by the US government",
    "hook": "Since 1991, underwater microphones have recorded a long series of rising sounds from a remote corner of the Pacific.",
    "summary": [
      "In 1991, the US National Oceanic and Atmospheric Administration (NOAA) began recording a strange sound in the Pacific: a long series of rising tones, each lasting several seconds. It was loud enough to be picked up across the whole Pacific, and it came from a remote area between New Zealand and South America.",
      "The sound was strongest in spring and autumn, and has slowly faded since the early 1990s. It became known as the Upsweep."
    ],
    "explanation": "NOAA's best explanation is volcanic activity on the seabed, which can produce long-lasting sounds. The source has never been precisely located, so this has not been confirmed.",
    "wiki": "Upsweep"
  },
  {
    "slug": "seneca-guns",
    "category": "voices",
    "title": "The Seneca Guns",
    "region": "Seneca Lake, New York, and the US East Coast",
    "lat": 42.6,
    "lon": -76.9,
    "dateLabel": "Reported since the 1800s",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Residents along lakes and coasts",
    "hook": "On clear days, people on Seneca Lake hear booms like distant cannon fire, with nothing to explain them.",
    "summary": [
      "People living around Seneca Lake in upstate New York have long described deep booms that sound like distant artillery. The writer James Fenimore Cooper wrote a story about them in 1850, and the name 'Seneca guns' spread.",
      "Similar booms are reported along the coasts of the Carolinas and elsewhere on the US East Coast, sometimes rattling windows. They are a close relative of the Barisal guns of the Ganges delta."
    ],
    "explanation": "Suggestions include supersonic aircraft, small earthquakes, gas escaping from the lake bed or seabed, distant thunder, and military exercises at sea. Some booms have been traced to aircraft, but many remain unexplained.",
    "wiki": "Skyquake"
  },
  {
    "slug": "ringing-rocks",
    "category": "voices",
    "title": "The Ringing Rocks",
    "region": "Ringing Rocks Park, Upper Black Eddy, Pennsylvania, USA",
    "lat": 40.56,
    "lon": -75.13,
    "dateLabel": "Known since the 1800s",
    "status": "explained",
    "statusLabel": "Partly explained",
    "witnesses": "Visitors every day",
    "hook": "In a field of boulders in Pennsylvania, some rocks ring like bells when you strike them with a hammer.",
    "summary": [
      "In a forest in Bucks County, a field of bare boulders stretches across several acres, with no trees growing on it. Strike some of the rocks with a hammer, and they ring like metal bells; others nearby just thud.",
      "In 1890, a local doctor gathered rocks of different pitches and played them with a band. Visitors still bring hammers to play them today."
    ],
    "explanation": "The rocks are diabase, a dense volcanic rock. Geologists think the ringing ones hold internal stress from repeated freezing and thawing, which lets them vibrate. Why some ring and others don't, and why nothing grows in the field, is not fully understood.",
    "wiki": "Ringing Rocks Park"
  },
  {
    "slug": "konark-lodestone",
    "category": "places",
    "title": "The Konark Lodestone",
    "region": "Konark, Puri district, Odisha, India",
    "lat": 19.89,
    "lon": 86.09,
    "dateLabel": "Temple built in the 1200s",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Sailors, as told in legend",
    "hook": "Legend says a giant magnet at the top of the Konark temple once pulled passing ships towards the shore.",
    "summary": [
      "The Sun Temple at Konark was built in the 13th century as a giant stone chariot for the sun god. Sailors on the Bay of Bengal used its tall tower as a landmark and called it the Black Pagoda.",
      "A popular legend says a huge lodestone, a natural magnet, sat at the top of the tower and held the idol in the air. It was so strong, the story goes, that it threw off ships' compasses and drew them onto the rocks, until sailors climbed the tower and removed it. The main tower later collapsed."
    ],
    "explanation": "There is no historical evidence of a lodestone. A magnet strong enough to affect ships out at sea is not physically possible, though iron beams were used inside the temple. Historians put the tower's collapse down to structural weakness and the soft, sandy ground.",
    "wiki": "Konark Sun Temple"
  },
  {
    "slug": "ramappa-floating-bricks",
    "category": "places",
    "title": "The Floating Bricks of Ramappa",
    "region": "Palampet, Mulugu district, Telangana, India",
    "lat": 18.26,
    "lon": 79.94,
    "dateLabel": "Temple built around 1213",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Visitors and researchers",
    "hook": "The bricks in the tower of an 800-year-old temple in Telangana are so light that they float on water.",
    "summary": [
      "The Ramappa temple, also called the Rudreshwara temple, was built in the early 13th century under the Kakatiya dynasty. It is famous for its carvings, and in 2021 it became a UNESCO World Heritage Site.",
      "Its tower is made of bricks so light that they float when placed in water, which has made them one of the temple's best-known mysteries. The temple has also survived earthquakes that damaged other buildings in the region."
    ],
    "explanation": "Studies of the bricks suggest they were made from clay mixed with materials such as sawdust or husk, which burned away during firing and left the brick full of tiny air pockets. That made them lighter than water and reduced the weight on the temple's structure.",
    "wiki": "Ramappa Temple"
  },
  {
    "slug": "devils-kettle",
    "category": "places",
    "title": "The Devil's Kettle",
    "region": "Judge C.R. Magney State Park, Minnesota, USA",
    "lat": 47.83,
    "lon": -90.05,
    "dateLabel": "Known for generations; studied in 2016–17",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Hikers and scientists",
    "hook": "At a Minnesota waterfall, half the river pours into a hole in the rock and seems to disappear.",
    "summary": [
      "On the Brule River, near Lake Superior, the water splits around a rock. One half falls normally. The other half plunges into a deep pothole called the Devil's Kettle and seems to vanish.",
      "For years, people said that sticks, balls and even dye dropped into the kettle never came out anywhere, and some wondered whether the water ran to Lake Superior through a hidden tunnel."
    ],
    "explanation": "In 2016 and 2017, state hydrologists measured the flow above and below the falls and found it was the same. That means the water in the kettle rejoins the river just downstream, below the surface of the plunge pool, so anything thrown in is probably broken up or hidden there.",
    "wiki": "Devil's Kettle"
  },
  {
    "slug": "skinwalker-ranch",
    "category": "places",
    "title": "Skinwalker Ranch",
    "region": "Uintah Basin, Utah, USA",
    "lat": 40.26,
    "lon": -109.89,
    "dateLabel": "Reports since the 1990s",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Ranch owners, researchers and TV crews",
    "hook": "A ranch in Utah's Uintah Basin became known for strange lights, odd animals and things no one could explain.",
    "summary": [
      "In the 1990s, a family who had bought a ranch in north-eastern Utah described a string of strange events: lights and objects in the sky, unusually large animals, and equipment that stopped working. The surrounding area already had a long history of reported lights and local stories.",
      "In 1996, businessman Robert Bigelow bought the ranch and set up a research group to study it. Later, part of a US government programme on unexplained phenomena funded work there. Since 2020 it has been the subject of a television series."
    ],
    "explanation": "Researchers who spent years at the ranch say they never captured clear evidence. Sceptics point out that many reports come from people with a commercial or personal interest in the story, and that remote ranches see plenty of ordinary lights and animals. Supporters say the number of witnesses is hard to dismiss.",
    "wiki": "Skinwalker Ranch"
  },
  {
    "slug": "hoia-baciu-forest",
    "category": "places",
    "title": "Hoia-Baciu Forest",
    "region": "Near Cluj-Napoca, Romania",
    "lat": 46.78,
    "lon": 23.52,
    "dateLabel": "Known since the 1960s",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Visitors, a biologist's photograph",
    "hook": "In a forest outside Cluj, the trees grow twisted, and in the middle is a round clearing where almost nothing grows.",
    "summary": [
      "Hoia-Baciu is a forest on the edge of Cluj-Napoca. Many of its trees grow in bent and twisted shapes, and near its centre is an almost perfectly round clearing where few plants grow.",
      "In 1968, a military technician named Emil Barnea took a photograph of a disc-shaped object over the clearing, which made the forest famous. Visitors since then have reported lights, odd feelings and lost time."
    ],
    "explanation": "Soil tests have not found anything unusual in the clearing, and twisted trees can be caused by wind, snow and soil conditions. The 1968 photograph has never been explained, but it has also never been verified.",
    "wiki": "Hoia Forest"
  },
  {
    "slug": "blood-falls",
    "category": "places",
    "title": "Blood Falls",
    "region": "Taylor Glacier, McMurdo Dry Valleys, Antarctica",
    "lat": -77.72,
    "lon": 162.27,
    "dateLabel": "Discovered in 1911",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Explorers and scientists",
    "hook": "In the white of Antarctica, a glacier seeps a stream of deep red, like blood running over the ice.",
    "summary": [
      "In 1911, the geologist Griffith Taylor, on a British expedition, found a glacier in Antarctica's Dry Valleys stained a deep red where it met a frozen lake. Early explorers thought the colour might come from red algae.",
      "The red flow still seeps from the end of the glacier today, and the glacier was later named after Taylor."
    ],
    "explanation": "Scientists found that the red comes from salty water trapped under the glacier for perhaps a million years, rich in iron. When it seeps out and meets the air, the iron rusts and turns red. Microbes live in that dark, salty water without sunlight, which has made it important to scientists who study life on other worlds.",
    "wiki": "Blood Falls"
  },
  {
    "slug": "nazca-lines",
    "featured": true,
    "category": "places",
    "title": "The Nazca Lines",
    "region": "Nazca Desert, southern Peru",
    "lat": -14.74,
    "lon": -75.13,
    "dateLabel": "Made about 2,000 years ago",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Pilots, archaeologists and visitors",
    "hook": "Scratched across the Peruvian desert are giant figures, a hummingbird, a monkey, a spider, best seen from the sky.",
    "summary": [
      "In the desert of southern Peru are hundreds of huge lines, shapes and figures drawn on the ground, including a hummingbird, a monkey and a spider, some longer than a football field. Many are best seen from the air, and they became widely known after pilots flew over them in the 1920s and 1930s.",
      "In 1968, the writer Erich von Däniken suggested they were runways or signals for visitors from space, an idea that made them world-famous."
    ],
    "explanation": "Archaeologists say they were made by the Nazca people, roughly 2,000 years ago, by removing the dark surface stones to reveal lighter ground. The dry, windless climate preserved them. They were probably used for ritual walks and linked to water and fertility. Nazca people could have laid them out with simple tools like stakes and cords.",
    "wiki": "Nazca Lines"
  },
  {
    "slug": "yonaguni-monument",
    "category": "places",
    "title": "The Yonaguni Monument",
    "region": "Off Yonaguni Island, Okinawa, Japan",
    "lat": 24.43,
    "lon": 123.01,
    "dateLabel": "Found in 1986",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Divers and geologists",
    "hook": "Under the sea off a small Japanese island lie great stone terraces and steps that look as if they were carved.",
    "summary": [
      "In 1986, a diver off Yonaguni, Japan's westernmost island, found a large underwater rock formation with flat terraces, sharp right angles and what look like steps. It lies between a few metres and about 25 metres below the surface.",
      "A marine geologist from the University of the Ryukyus, Masaaki Kimura, studied it for years and argued that it was shaped by people, perhaps when sea levels were lower thousands of years ago."
    ],
    "explanation": "Most geologists think it is natural. The local sandstone splits along straight, parallel lines, which can produce flat surfaces and steps. Robert Schoch, a geologist who dived there, concluded it was natural, though perhaps altered by people. No tools or other clear signs of human work have been found.",
    "wiki": "Yonaguni Monument"
  },
  {
    "slug": "army-yeti-footprints",
    "category": "creatures",
    "title": "The Army's Yeti Footprints",
    "region": "Near Makalu Base Camp, Nepal",
    "lat": 27.83,
    "lon": 87.09,
    "dateLabel": "9 April 2019",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "An Indian Army mountaineering team",
    "hook": "An Indian Army mountaineering team photographed giant footprints in the snow near Makalu and shared them as signs of the yeti.",
    "summary": [
      "On 9 April 2019, an Indian Army mountaineering expedition near Makalu Base Camp in Nepal found a line of huge single footprints in the snow, measured at about 32 by 15 inches.",
      "On 29 April, the Army shared photos on its official Twitter account, saying the team had seen 'mysterious footprints of mythical beast Yeti'. The post was reported around the world."
    ],
    "explanation": "Officials in Nepal and many scientists said the prints were probably left by a bear. Footprints in snow grow as the sun melts their edges, and an animal that steps into its own prints can leave a single line of large tracks. Supporters of the yeti say the Army team knows mountain snow well.",
    "wiki": "Yeti"
  },
  {
    "slug": "champ",
    "category": "creatures",
    "title": "Champ",
    "region": "Lake Champlain, New York and Vermont, USA",
    "lat": 44.53,
    "lon": -73.33,
    "dateLabel": "Reported since the 1800s",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Hundreds of people over the years",
    "hook": "In Lake Champlain, people report a long, dark creature with a small head that rises from the water and slips away.",
    "summary": [
      "Lake Champlain stretches between New York, Vermont and Quebec. Since the 19th century, people have reported a large animal in the lake, usually described as dark, with a long neck and a small head, and nicknamed Champ.",
      "The best-known evidence is a photograph taken by Sandra Mansi in 1977, which seems to show a head and neck rising from the water. The lake communities have since adopted Champ as a mascot."
    ],
    "explanation": "Suggested explanations include floating logs, large lake sturgeon, otters or deer swimming, and waves. Studies of the Mansi photo have not settled what it shows, since the exact location and scale are unknown. No body or bones have been found.",
    "wiki": "Champ (folklore)"
  },
  {
    "slug": "beast-of-bodmin",
    "category": "creatures",
    "title": "The Beast of Bodmin Moor",
    "region": "Bodmin Moor, Cornwall, England",
    "lat": 50.55,
    "lon": -4.6,
    "dateLabel": "Reported since the 1980s",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Farmers and walkers",
    "hook": "On the open moors of Cornwall, people describe a large black cat, far bigger than any house cat, slipping into the bracken.",
    "summary": [
      "Since the 1980s, people on and around Bodmin Moor have reported seeing a large, black, panther-like cat. Photos and videos have been taken, though most are distant and unclear.",
      "In 1995, the British government investigated the reports. Shortly afterwards, a boy found a large cat skull in a river on the moor, which seemed to settle the question until it was examined."
    ],
    "explanation": "The government investigation found 'no verifiable evidence' of big cats on the moor, and the skull turned out to come from a leopard-skin rug. Some people think escaped or released exotic cats could have lived on the moor for a time. Others think the sightings are of large domestic cats seen at a distance.",
    "wiki": "Beast of Bodmin Moor"
  },
  {
    "slug": "jersey-devil",
    "category": "creatures",
    "title": "The Jersey Devil",
    "region": "Pine Barrens, New Jersey, USA",
    "lat": 39.8,
    "lon": -74.5,
    "dateLabel": "Legend from the 1700s; sightings in January 1909",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Hundreds of residents in 1909",
    "hook": "In one week of January 1909, people across New Jersey reported strange tracks in the snow and a winged creature in the night.",
    "summary": [
      "The Pine Barrens of southern New Jersey have a legend dating back to the 1700s: a creature with wings, hooves and a long tail, said to have been born to a woman named Mother Leeds. It became known as the Jersey Devil.",
      "In the week of 16 to 23 January 1909, hundreds of people in New Jersey and Pennsylvania reported mysterious tracks in the snow and sightings of a winged creature. Some schools and mills closed, and newspapers covered it daily."
    ],
    "explanation": "Historians think the legend began partly as political mockery of the Leeds family, who published almanacs. The 1909 wave was fuelled by newspapers, and some tracks were later admitted as hoaxes. Others suggest birds such as sandhill cranes or owls lay behind some sightings.",
    "wiki": "Jersey Devil"
  },
  {
    "slug": "thylacine-sightings",
    "category": "creatures",
    "title": "The Tasmanian Tiger Sightings",
    "region": "Tasmania, Australia",
    "lat": -42.0,
    "lon": 146.5,
    "dateLabel": "Since 1936",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Hundreds of people",
    "hook": "The last known Tasmanian tiger died in a zoo in 1936. People have been reporting them in the bush ever since.",
    "summary": [
      "The thylacine, or Tasmanian tiger, was a striped, dog-like marsupial. Hunted heavily, it became rare, and the last known animal died at Hobart's Beaumaris Zoo on 7 September 1936. It was later declared extinct.",
      "Since then, people in Tasmania and on mainland Australia have reported hundreds of sightings of striped, dog-like animals. Searches with camera traps have not found one."
    ],
    "explanation": "Most sightings are thought to be dogs, foxes or other animals seen briefly. A 2023 study of the sighting records suggested the species may have survived in remote Tasmania for decades after 1936, possibly into the 1980s or later. Most scientists think it is now gone, but searches continue.",
    "wiki": "Thylacine"
  },
  {
    "slug": "dover-demon",
    "category": "creatures",
    "title": "The Dover Demon",
    "region": "Dover, Massachusetts, USA",
    "lat": 42.25,
    "lon": -71.28,
    "dateLabel": "21–22 April 1977",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Three teenagers, on two nights",
    "hook": "A teenager driving home saw a small creature with a huge head and glowing eyes crawling along a stone wall.",
    "summary": [
      "On the night of 21 April 1977, 17-year-old Bill Bartlett was driving through Dover when he said he saw a strange creature on a low stone wall: thin limbs, long fingers, hairless skin and a large, watermelon-shaped head with glowing orange eyes.",
      "Later that night, and again the next evening, two other teenagers reported seeing a similar figure nearby. Bartlett drew what he saw, and the drawing became famous."
    ],
    "explanation": "Suggested explanations include a young moose or a foal seen in the headlights, or a hoax, though the witnesses have stood by their accounts for decades. Investigators at the time found them credible and found no sign of a prank.",
    "wiki": "Dover Demon"
  },
  {
    "slug": "coelacanth",
    "featured": true,
    "category": "creatures",
    "title": "The Coelacanth",
    "region": "East London, South Africa",
    "lat": -33.02,
    "lon": 27.91,
    "dateLabel": "22 December 1938",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Museum curator Marjorie Courtenay-Latimer",
    "hook": "A museum curator spotted a strange blue fish in a fisherman's catch, and it turned out to be a creature thought to have died out with the dinosaurs.",
    "summary": [
      "The coelacanth was a fish known only from fossils, and scientists believed it had died out about 66 million years ago. On 22 December 1938, Marjorie Courtenay-Latimer, curator of a small museum in East London, South Africa, noticed a large, blue, oddly finned fish in a local trawler's catch.",
      "She sent a sketch to the chemist and fish expert J.L.B. Smith, who identified it as a living coelacanth. A second species was found in Indonesia in 1997."
    ],
    "explanation": "This is a case where the extraordinary turned out to be true. The coelacanth lives in deep water around underwater caves, which is why it went unseen for so long. It is a reminder of why some people keep looking for animals that others say can't exist.",
    "wiki": "Coelacanth"
  },
  {
    "slug": "travis-walton",
    "featured": true,
    "category": "visitors",
    "title": "Travis Walton",
    "region": "Apache-Sitgreaves National Forest, Arizona, USA",
    "lat": 34.4,
    "lon": -110.6,
    "dateLabel": "5–10 November 1975",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Travis Walton and six members of his logging crew",
    "hook": "A logging crew driving home saw a glowing object over the forest. One of them got out to look, and was missing for five days.",
    "summary": [
      "On 5 November 1975, a seven-man logging crew driving home through the forest in eastern Arizona said they saw a glowing, disc-shaped object hovering above a clearing. Travis Walton, 22, got out and walked towards it. The others said a beam of light struck him and threw him back, and they drove away in panic.",
      "When they returned, Walton was gone. A large search found nothing. Five days later, he phoned from a petrol station in a nearby town, saying he had woken up aboard a craft. His story was later made into the film 'Fire in the Sky'."
    ],
    "explanation": "Sceptics argue it was a hoax, perhaps to escape a logging contract the crew was behind on. Supporters point out that five of the six crew members passed lie-detector tests about what they saw. Walton has never changed his account.",
    "wiki": "Travis Walton UFO incident"
  },
  {
    "slug": "allagash-abductions",
    "category": "visitors",
    "title": "The Allagash Abductions",
    "region": "Eagle Lake, Allagash Wilderness, Maine, USA",
    "lat": 46.33,
    "lon": -69.35,
    "dateLabel": "August 1976",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Four art students on a camping trip",
    "hook": "Four friends fishing by canoe at night saw a glowing sphere over the lake, and back at camp, their large fire had burned down to coals.",
    "summary": [
      "In August 1976, four young men, art students from Boston, were on a canoe trip in Maine's Allagash Wilderness. Night-fishing on Eagle Lake, they said a large glowing sphere rose above the trees and moved towards them, and a beam of light swept over their canoe.",
      "The next thing they remembered was being back on shore, where the big campfire they had built to guide them back had burned down to embers. More than a decade later, under hypnosis, all four described being taken aboard and examined."
    ],
    "explanation": "Sceptics point to the unreliability of memories recovered under hypnosis. In 2016, one of the four said the group had exaggerated the abduction part of the story. The other three rejected that and stand by the full account.",
    "wiki": "Allagash abductions"
  },
  {
    "slug": "voronezh-1989",
    "category": "visitors",
    "title": "The Voronezh Encounter",
    "region": "Voronezh, Russia (then USSR)",
    "lat": 51.67,
    "lon": 39.18,
    "dateLabel": "27 September 1989",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Children and adults in a city park",
    "hook": "Children playing in a Soviet city park said a red sphere landed, and a very tall figure stepped out.",
    "summary": [
      "On the evening of 27 September 1989, a group of children in a park in Voronezh said they saw a pink or red sphere land. They described a tall figure, around three metres, with three eyes, and a smaller robot-like companion. Several adults reported lights in the sky over the city that week.",
      "In October, the official Soviet news agency TASS ran the story, and it was picked up by newspapers around the world, which was very unusual for a UFO report at the time."
    ],
    "explanation": "Many people outside the Soviet Union treated the TASS report as a joke, and sceptics suggest the children's story grew in the telling. Local investigators said they found marks in the ground. With few adult witnesses to the landing, it has never been settled.",
    "wiki": "Voronezh UFO incident"
  },
  {
    "slug": "broad-haven-school",
    "category": "visitors",
    "title": "The Broad Haven School Sighting",
    "region": "Broad Haven, Pembrokeshire, Wales",
    "lat": 51.78,
    "lon": -5.1,
    "dateLabel": "4 February 1977",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Over a dozen schoolchildren",
    "hook": "One lunchtime in 1977, a group of Welsh schoolchildren said they saw a silver craft land in a field behind their school.",
    "summary": [
      "On 4 February 1977, a group of children at Broad Haven Primary School in Pembrokeshire said they saw a large, silver, cigar-shaped object in a field near the playground. Some said they saw a figure in a silver suit beside it.",
      "The headmaster separated the children and had them draw what they saw. Their drawings were strikingly similar. Over the following months, many adults in the area also reported lights and figures."
    ],
    "explanation": "Sceptics suggested the children saw an ordinary vehicle, such as a sewage tanker truck parked in the field, or an aircraft from a nearby air base. Many of the witnesses, now adults, still say they saw something they can't explain.",
    "wiki": "Broad Haven UFO sighting"
  },
  {
    "slug": "knowles-family",
    "category": "visitors",
    "title": "The Knowles Family Encounter",
    "region": "Eyre Highway near Mundrabilla, Western Australia",
    "lat": -31.85,
    "lon": 127.5,
    "dateLabel": "20 January 1988",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Faye Knowles and her three sons",
    "hook": "Driving across the Nullarbor before dawn, a family said a glowing light came down onto their car and lifted it off the road.",
    "summary": [
      "In the early hours of 20 January 1988, Faye Knowles and her three adult sons were driving east across the Nullarbor Plain when they saw a bright light on the road ahead. They said it followed them, came down onto the roof of the car, and lifted it off the road before dropping it, bursting a tyre.",
      "They said the car filled with a dark ash and a strange smell, and that their voices sounded distorted. A truck driver who later met them said they were clearly frightened, and the story made headlines around the world."
    ],
    "explanation": "Investigators who examined the car found nothing unusual in the dust. Sceptics suggest the family saw the lights of an oncoming truck, made strange by the flat desert and a mirage, and that a tyre blowout caused the rest. The family stood by their account.",
    "wiki": "Knowles family UFO incident"
  },
  {
    "slug": "chandrapur-fireball",
    "category": "sky",
    "title": "The Chandrapur Fireball",
    "region": "Sindewahi, Chandrapur district, Maharashtra, India",
    "lat": 20.28,
    "lon": 79.66,
    "dateLabel": "2 April 2022",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Thousands across Maharashtra and Madhya Pradesh",
    "hook": "One evening, a trail of glowing fireballs crossed the sky over central India, and the next morning a metal ring was found in a field.",
    "summary": [
      "On the evening of 2 April 2022, people across Maharashtra and Madhya Pradesh saw a string of bright, burning objects moving slowly across the sky. Many filmed it, and some thought it was a meteor shower.",
      "The next day, villagers in Sindewahi, in Chandrapur district, found a metal ring about 3 metres across in an open field, and metal cylinders were found nearby. No one was hurt."
    ],
    "explanation": "Astronomers identified it as the re-entry of part of a Chinese Long March 3B rocket, launched in 2021. Scientists from the Indian Space Research Organisation examined the debris and said the ring was consistent with part of the rocket's upper stage.",
    "wiki": null
  },
  {
    "slug": "kenneth-arnold",
    "category": "sky",
    "title": "Kenneth Arnold's Sighting",
    "region": "Near Mount Rainier, Washington, USA",
    "lat": 46.85,
    "lon": -121.76,
    "dateLabel": "24 June 1947",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Private pilot Kenneth Arnold",
    "hook": "A private pilot saw nine shining objects racing past Mount Rainier, and the newspapers called them 'flying saucers'.",
    "summary": [
      "On 24 June 1947, Kenneth Arnold, a businessman and experienced private pilot, was flying near Mount Rainier when he saw a flash of light, then nine bright objects flying in a line at great speed. He estimated them at well over 1,000 miles an hour.",
      "He told reporters they moved 'like a saucer if you skip it across the water'. Newspapers turned that into 'flying saucers', and within weeks hundreds of similar sightings were reported across the United States."
    ],
    "explanation": "The US Air Force listed it as a mirage. Other suggestions include a formation of pelicans or other birds, reflections, and fragments of a meteor. Arnold, an experienced flier, rejected these explanations and maintained he saw solid craft.",
    "wiki": "Kenneth Arnold UFO sighting"
  },
  {
    "slug": "nuremberg-1561",
    "featured": true,
    "category": "sky",
    "title": "The Nuremberg Sky Battle",
    "region": "Nuremberg, Germany",
    "lat": 49.45,
    "lon": 11.08,
    "dateLabel": "14 April 1561",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Townspeople, as recorded in a printed broadsheet",
    "hook": "At sunrise one spring day, the people of Nuremberg saw the sky fill with spheres, crosses and tubes that seemed to battle.",
    "summary": [
      "A broadsheet printed in Nuremberg in 1561 by Hans Glaser describes how, at dawn on 14 April, many people saw a 'frightful' sight in the sky: red, blue and black spheres, crosses and long tubes, which seemed to fight one another for about an hour before falling to earth in smoke.",
      "A woodcut on the broadsheet shows the scene, with the sun overhead. It is now a well-known image in UFO books."
    ],
    "explanation": "Many scientists think the townspeople saw a sun halo display, where ice crystals high in the air create rings, bright spots and arcs around the sun, which they described in the religious language of the time. Some UFO writers think it records a real aerial event.",
    "wiki": "1561 celestial phenomenon over Nuremberg"
  },
  {
    "slug": "moodus-noises",
    "category": "voices",
    "title": "The Moodus Noises",
    "region": "Moodus, East Haddam, Connecticut, USA",
    "lat": 41.5,
    "lon": -72.45,
    "dateLabel": "Reported for centuries",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Residents, from the Wangunk people to today",
    "hook": "Under a quiet Connecticut village, the ground booms and cracks, and has done for as long as anyone remembers.",
    "summary": [
      "The Wangunk people called the hills around Moodus 'Machimoodus', the place of noises. European settlers in the 1600s and 1700s wrote of booms, rumbles and cracking sounds from under the ground, sometimes strong enough to rattle dishes.",
      "Over the centuries, the noises were blamed on everything from the Devil to battling witches to a giant pearl blocking an underground cave. In 1791, an earthquake centred near Moodus shook the whole of Connecticut."
    ],
    "explanation": "Scientists from Boston College's Weston Observatory found that the noises come from swarms of tiny, very shallow earthquakes. Because they happen so close to the surface, the sound reaches people before it fades, even when the shaking is too small to feel.",
    "wiki": "Machimoodus State Park"
  },
  {
    "slug": "windsor-hum",
    "category": "voices",
    "title": "The Windsor Hum",
    "region": "Windsor, Ontario, Canada",
    "lat": 42.28,
    "lon": -83.03,
    "dateLabel": "2011 – 2020",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Thousands of residents",
    "hook": "For nearly a decade, people in a Canadian city heard a low rumble that rattled their windows, coming from across the river.",
    "summary": [
      "From 2011, people in Windsor, Ontario, across the Detroit River from the United States, began reporting a low, rumbling hum, like a distant engine idling. Some said it shook their windows and kept them awake.",
      "Thousands of residents reported it. The Canadian government paid for a study to find the source."
    ],
    "explanation": "Researchers traced the sound to Zug Island on the US side of the river, an industrial area with steel blast furnaces. The US authorities never fully confirmed the source, but in 2020, when the steelworks there was idled, residents said the hum stopped.",
    "wiki": "Windsor Hum"
  },
  {
    "slug": "yellowstone-lake-music",
    "category": "voices",
    "title": "The Yellowstone Lake Music",
    "region": "Yellowstone Lake, Wyoming, USA",
    "lat": 44.45,
    "lon": -110.37,
    "dateLabel": "Reported since 1872",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Explorers, rangers and visitors",
    "hook": "On still mornings over Yellowstone Lake, people hear a sound in the air above them, like wind in wires or far-off bells.",
    "summary": [
      "In 1872, F.H. Bradley, a geologist on the Hayden expedition, wrote of a curious sound at Yellowstone Lake, 'between a whistle and a hoarse whine', that he couldn't place. Twenty years later, the scientist Edwin Linton described a sound that began in the distance and grew louder overhead, like wind in pine trees and telegraph wires, echoing bells and a swarm of bees.",
      "Visitors and rangers have reported the same 'lake music' since, mostly on calm, clear mornings, and only around Yellowstone and Shoshone lakes."
    ],
    "explanation": "No source has been confirmed. Suggestions include wind creating standing sound waves over the water, the movement of ice, birds, distant thunder, and stress in the ground of one of the world's most active volcanic areas.",
    "wiki": "Yellowstone Lake"
  },
  {
    "slug": "max-headroom-intrusion",
    "category": "voices",
    "title": "The Max Headroom Broadcast Intrusion",
    "region": "Chicago, Illinois, USA",
    "lat": 41.88,
    "lon": -87.63,
    "dateLabel": "22 November 1987",
    "status": "open",
    "statusLabel": "Never solved",
    "witnesses": "Television viewers across Chicago",
    "hook": "One night in 1987, someone in a rubber mask hijacked two Chicago TV stations, and was never caught.",
    "summary": [
      "On the evening of 22 November 1987, during the sports news on Chicago station WGN-TV, the screen suddenly cut to a person wearing a mask of Max Headroom, a popular TV character, swaying in front of a rotating metallic background. There was only a buzzing sound. After about 25 seconds, engineers switched frequencies and the picture returned.",
      "Two hours later, the same masked figure took over station WTTW during an episode of 'Doctor Who', this time with distorted speech, for about a minute and a half."
    ],
    "explanation": "It was clearly a human prank, carried out by someone with the equipment and skill to overpower a TV station's signal. The US Federal Communications Commission investigated, but no one has ever been identified.",
    "wiki": "Max Headroom broadcast signal intrusion"
  },
  {
    "slug": "vrillon-broadcast",
    "category": "voices",
    "title": "The Vrillon Broadcast",
    "region": "Hannington transmitter, Hampshire, England",
    "lat": 51.3,
    "lon": -1.24,
    "dateLabel": "26 November 1977",
    "status": "explained",
    "statusLabel": "Hoax, never traced",
    "witnesses": "Television viewers across southern England",
    "hook": "During the early evening news, the sound on British TV cut out, and a strange voice claimed to speak for beings from space.",
    "summary": [
      "At about 5:10 pm on 26 November 1977, the sound of an ITN news broadcast on Southern Television was replaced by a deep, distorted voice. The picture stayed normal, so viewers saw the newsreader while hearing the voice.",
      "The speaker called himself Vrillon, of the 'Ashtar Galactic Command', and warned that humanity must give up its weapons of evil and learn to live in peace. The interruption lasted about six minutes, and newspapers carried the story for days."
    ],
    "explanation": "It was a hoax: someone took over the signal of the Hannington transmitter, which relayed the station to viewers. The broadcasting authorities investigated, but whoever did it was never identified.",
    "wiki": "Southern Television broadcast interruption"
  },
  {
    "slug": "parkes-perytons",
    "category": "voices",
    "title": "The Parkes Perytons",
    "region": "Parkes radio telescope, New South Wales, Australia",
    "lat": -33.0,
    "lon": 148.26,
    "dateLabel": "1998 – 2015",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Astronomers",
    "hook": "For 17 years, one of the world's great radio telescopes picked up mysterious bursts, and they turned out to come from the staff kitchen.",
    "summary": [
      "From 1998, the Parkes radio telescope in Australia occasionally detected short, powerful bursts of radio waves that looked a little like signals from deep space. Astronomers called them 'perytons', after a mythical creature, and suggested causes from lightning to aircraft to the telescope itself.",
      "They were puzzling because they seemed to happen mostly during office hours."
    ],
    "explanation": "In 2015, astronomer Emily Petroff and her colleagues installed a new interference monitor and caught the culprit: a microwave oven at the site. When someone opened the door before the timer finished, the oven gave off a burst that the telescope picked up. They could create perytons on demand.",
    "wiki": "Peryton (astronomy)"
  },
  {
    "slug": "apocalyptic-sounds",
    "category": "voices",
    "title": "The Sky Trumpets",
    "region": "Kyiv, Ukraine, and worldwide",
    "lat": 50.45,
    "lon": 30.52,
    "dateLabel": "From 2011",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Social media users worldwide",
    "hook": "In 2011, videos began spreading of deep, groaning trumpet sounds coming from the sky above cities.",
    "summary": [
      "In August 2011, a video filmed in Kyiv showed a city street while a loud, metallic, groaning sound seemed to come from the sky. Over the following years, hundreds of similar videos were posted from Canada, the United States, Europe and elsewhere.",
      "People called them 'apocalyptic sounds' or 'sky trumpets', and some saw them as a sign of the end of the world."
    ],
    "explanation": "Many of the videos were shown to be edited, with sound effects taken from films added over ordinary footage. Some real recordings have been traced to trains, construction work, industrial machinery and wind through structures. A few remain unexplained.",
    "wiki": "Apocalyptic sounds"
  },
  {
    "slug": "iron-pillar-delhi",
    "featured": true,
    "category": "places",
    "title": "The Iron Pillar of Delhi",
    "region": "Qutb complex, Mehrauli, Delhi, India",
    "lat": 28.52,
    "lon": 77.19,
    "dateLabel": "About 1,600 years old",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Visitors every day",
    "hook": "In Delhi stands an iron pillar more than 1,600 years old, and it has barely rusted.",
    "summary": [
      "In the courtyard of the Qutb complex in Delhi stands a pillar of solid iron about 7 metres tall. An inscription on it, from the Gupta period, honours a king named Chandra, thought to be Chandragupta II, who ruled around 1,600 years ago.",
      "Despite standing in the open through centuries of monsoons, it shows very little rust. Visitors used to try to wrap their arms around it backwards for luck, and it is now fenced off to protect it."
    ],
    "explanation": "Metallurgists, including R. Balasubramaniam of IIT Kanpur, found that the iron contains a high level of phosphorus and very little sulphur. Over time, this formed a thin protective layer on the surface that slows rusting. It is a mark of the skill of ancient Indian ironworkers, not a mystery of physics.",
    "wiki": "Iron pillar of Delhi"
  },
  {
    "slug": "kailasa-temple",
    "category": "places",
    "title": "The Kailasa Temple",
    "region": "Ellora Caves, Aurangabad district, Maharashtra, India",
    "lat": 20.02,
    "lon": 75.18,
    "dateLabel": "Built in the 700s",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Visitors and archaeologists",
    "hook": "An entire temple at Ellora was carved downwards out of a single hill of rock, and no one quite knows how long it took.",
    "summary": [
      "The Kailasa temple, Cave 16 at Ellora, is not built from blocks: it was carved out of a single basalt cliff, from the top down. Its towers, halls, bridges and life-size elephants are all one piece of rock. It is usually dated to the 8th century, under the Rashtrakuta king Krishna I.",
      "Builders are estimated to have removed around 200,000 tonnes of rock. Because records of the work don't survive, the temple has attracted claims of lost technology and even help from beyond Earth."
    ],
    "explanation": "Archaeologists say it was made by skilled stonemasons using iron chisels and hammers, probably over decades and perhaps several generations, working to a carefully planned design. The removed rock was likely carried away and reused. Its achievement is human, and all the more remarkable for that.",
    "wiki": "Kailasa Temple, Ellora"
  },
  {
    "slug": "brihadeeswarar-shadow",
    "category": "places",
    "title": "The Shadow of the Big Temple",
    "region": "Thanjavur, Tamil Nadu, India",
    "lat": 10.78,
    "lon": 79.13,
    "dateLabel": "Temple completed in 1010",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Visitors and guides",
    "hook": "Legend says the great tower of Thanjavur's Big Temple never casts a shadow on the ground at noon.",
    "summary": [
      "The Brihadeeswarar temple in Thanjavur was completed in 1010 under the Chola king Rajaraja I. Its main tower rises about 66 metres and is one of the tallest of its kind in the world. It is a UNESCO World Heritage Site.",
      "A popular saying, repeated by guides and travel sites, is that the tower's shadow never falls on the ground at midday."
    ],
    "explanation": "The tower does cast a shadow. Because Thanjavur is close to the equator, the midday sun is high overhead for much of the year, and the tapering tower's shadow falls mostly onto the temple's own base and courtyard. The legend is a tribute to the builders' skill rather than a literal fact.",
    "wiki": "Brihadeeswarar Temple"
  },
  {
    "slug": "behta-rain-temple",
    "category": "places",
    "title": "The Rain Temple of Behta",
    "region": "Behta Bujurg, Kanpur district, Uttar Pradesh, India",
    "lat": 26.19,
    "lon": 80.25,
    "dateLabel": "Ongoing",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Villagers and visitors",
    "hook": "Villagers say the ceiling of an old temple near Kanpur starts to drip about a week before the monsoon arrives.",
    "summary": [
      "In the village of Behta Bujurg, near Kanpur, stands an old Jagannath temple, now protected by the Archaeological Survey of India. Its age is uncertain.",
      "Villagers say that about six or seven days before the monsoon rains arrive, drops of water appear on the stone ceiling above the sanctum. Small damp patches are said to mean light rain, and heavy drops a strong monsoon. Farmers have long watched it to plan their sowing."
    ],
    "explanation": "No detailed scientific study has been published. The likely explanation is condensation: as warm, humid air arrives ahead of the monsoon, moisture collects on the thick, cool stone, much as water forms on a cold glass. That would make the temple a natural humidity gauge.",
    "wiki": "Behta Bujurg"
  },
  {
    "slug": "anjikuni-lake",
    "category": "places",
    "title": "The Vanishing Village of Lake Anjikuni",
    "region": "Angikuni Lake, Nunavut, Canada",
    "lat": 62.2,
    "lon": -100.0,
    "dateLabel": "Reported in November 1930",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "A fur trapper, as told by a newspaper",
    "hook": "A 1930 newspaper story told of a trapper who found an entire Inuit village empty, with meals left half-cooked.",
    "summary": [
      "In November 1930, a newspaper in The Pas, Manitoba, published a story by journalist Emmett Kelleher. It said a fur trapper named Joe Labelle had arrived at a familiar Inuit village by Lake Anjikuni and found it deserted: kayaks still on the shore, food left over cold fires, and no footprints leading away.",
      "The story was reprinted around the world, and over the decades grew in the retelling, with the village's size swelling from a few dozen people to more than a thousand."
    ],
    "explanation": "The Royal Canadian Mounted Police looked into the story and found no evidence that the village or the disappearance existed. Historians think it was invented or greatly exaggerated. It remains popular in books of mysteries.",
    "wiki": "Lake Angikuni"
  },
  {
    "slug": "coral-castle",
    "category": "places",
    "title": "Coral Castle",
    "region": "Homestead, Florida, USA",
    "lat": 25.5,
    "lon": -80.44,
    "dateLabel": "Built 1923 – 1951",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Neighbours and visitors",
    "hook": "One small man, working alone and at night, moved and carved more than a thousand tonnes of coral rock, and wouldn't say how.",
    "summary": [
      "Edward Leedskalnin, a Latvian immigrant just over 1.5 metres tall, spent nearly 30 years building a garden of huge carved stones in Florida: walls, a table shaped like Florida, a giant crescent moon and a nine-tonne gate that could be pushed open with one finger. In all, he is said to have worked more than 1,000 tonnes of coral limestone.",
      "He worked alone, mostly at night, and when asked how he did it, he said he knew the secrets of the people who built the pyramids. He even moved the whole garden to a new site in the 1930s."
    ],
    "explanation": "Photographs show Leedskalnin's tools: tripods, chains, pulleys and winches. Engineers say levers and patience can move very heavy stones, and that coral limestone, being porous, is lighter than it looks. His exact methods were never recorded.",
    "wiki": "Coral Castle"
  },
  {
    "slug": "ogopogo",
    "category": "creatures",
    "title": "Ogopogo",
    "region": "Okanagan Lake, British Columbia, Canada",
    "lat": 49.88,
    "lon": -119.5,
    "dateLabel": "Reported for generations",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Residents and visitors",
    "hook": "In Okanagan Lake, people describe a long, dark creature with humps that ripples along the surface.",
    "summary": [
      "The Syilx (Okanagan) people tell of N'ha-a-itk, a spirit of Okanagan Lake. Settlers in the 19th century began reporting a large serpent-like animal in the lake, later nicknamed Ogopogo.",
      "Sightings continue, usually of a long, dark shape with several humps moving through the water. Several films have been taken, including a well-known one from 1968, but all are distant."
    ],
    "explanation": "Suggested explanations include floating logs, large sturgeon, otters or beavers swimming in a line, and boat wakes or waves. No body or bones have been found. Ogopogo is now the region's mascot.",
    "wiki": "Ogopogo"
  },
  {
    "slug": "yowie",
    "category": "creatures",
    "title": "The Yowie",
    "region": "Blue Mountains, New South Wales, Australia",
    "lat": -33.7,
    "lon": 150.3,
    "dateLabel": "Reported since the 1800s",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Bushwalkers, farmers and Aboriginal traditions",
    "hook": "In the Australian bush, people describe a tall, hairy figure that walks upright and watches from the trees.",
    "summary": [
      "Aboriginal traditions in parts of Australia tell of large, hairy, human-like beings living in the bush. Since the 19th century, settlers and bushwalkers have reported similar figures, most often in the Blue Mountains of New South Wales and parts of Queensland.",
      "The creature became known as the yowie. Reports describe a tall, broad, hairy figure that walks on two legs and disappears into the forest."
    ],
    "explanation": "Australia has no native apes, and no bones or bodies have been found. Sceptics suggest sightings of kangaroos standing upright, people, shadows, or stories shaped by the Bigfoot legend. Supporters say the bush is vast and little explored.",
    "wiki": "Yowie"
  },
  {
    "slug": "almas",
    "category": "creatures",
    "title": "The Almas",
    "region": "Altai and Gobi regions, Mongolia",
    "lat": 46.4,
    "lon": 96.3,
    "dateLabel": "Reported for centuries",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Herders, travellers and researchers",
    "hook": "In the mountains of Mongolia, herders tell of a wild, hairy people who live apart from humans.",
    "summary": [
      "In Mongolia and parts of Central Asia, herders have long described the almas: a wild, human-like being, covered in reddish hair, that lives in remote mountains and avoids people. Old Tibetan and Mongolian books of medicine include drawings of similar creatures.",
      "In the mid-20th century, Soviet researchers collected accounts and argued the almas might be a surviving early human. Expeditions have searched since, without finding clear evidence."
    ],
    "explanation": "No bones, hair or photographs have been confirmed. Sceptics suggest the stories describe bears, people living wild, or a figure of folklore. Some researchers note that early humans did live in the region thousands of years ago, which keeps interest alive.",
    "wiki": "Almas (cryptozoology)"
  },
  {
    "slug": "giant-squid",
    "featured": true,
    "category": "creatures",
    "title": "The Giant Squid",
    "region": "Off the Ogasawara Islands, Japan",
    "lat": 27.1,
    "lon": 142.2,
    "dateLabel": "First photographed alive in 2004",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Japanese marine scientists",
    "hook": "For centuries, sailors told of the kraken, a giant many-armed monster. In 2004, scientists finally photographed one alive.",
    "summary": [
      "Sailors' tales of the kraken, a sea monster with huge arms that could grab ships, go back centuries. Bodies of giant squid occasionally washed ashore, proving the animal was real, but no one had ever seen a living one in the deep sea.",
      "In 2004, Japanese scientists Tsunemi Kubodera and Kyoichi Mori lowered a camera with bait into the deep water off the Ogasawara Islands and photographed a giant squid about 8 metres long. In 2012, a team filmed one in its natural habitat for the first time."
    ],
    "explanation": "This is a case where the legend had real roots. Giant squid can grow longer than a bus and live at depths of hundreds of metres, which is why they stayed hidden for so long. The kraken stories were exaggerated, but the animal behind them was real.",
    "wiki": "Giant squid"
  },
  {
    "slug": "mapinguari",
    "category": "creatures",
    "title": "The Mapinguari",
    "region": "Western Amazon, Brazil",
    "lat": -9.5,
    "lon": -67.0,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Rubber tappers, hunters and Indigenous communities",
    "hook": "Deep in the Amazon, people tell of a huge, shaggy creature with a terrible smell that walks on two legs.",
    "summary": [
      "In the western Amazon, Indigenous peoples, rubber tappers and hunters tell of the mapinguari: a large, shaggy animal that walks upright, roars, smells foul and is almost impossible to kill. Some versions give it a single eye or a mouth on its belly.",
      "In the 1990s, American ornithologist David Oren, who had worked in the region for years, collected dozens of accounts and suggested the stories might describe a surviving giant ground sloth, an animal thought to have died out about 10,000 years ago."
    ],
    "explanation": "Oren's searches found no animal, and most scientists think a large animal like that could not stay hidden. Others suggest the legend may preserve a very old memory of giant sloths, which did live alongside the first people in South America.",
    "wiki": "Mapinguari"
  },
  {
    "slug": "boianai-father-gill",
    "category": "visitors",
    "title": "Father Gill's Sighting",
    "region": "Boianai, Milne Bay, Papua New Guinea",
    "lat": -10.2,
    "lon": 149.85,
    "dateLabel": "26–27 June 1959",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Father William Gill and about 38 people at the mission",
    "hook": "At a mission in Papua, a priest and dozens of others watched figures on top of a glowing craft, and when he waved, they waved back.",
    "summary": [
      "On the evening of 26 June 1959, Father William Gill, an Anglican priest at the Boianai mission, and around 38 others, including teachers and mission staff, watched a bright object hovering over the bay. They said figures appeared on top of it, as if working on deck.",
      "The next evening the object returned. Gill and others waved, and the figures appeared to wave back. When Gill flashed a torch, the object seemed to move in response. Gill wrote a detailed report signed by 25 witnesses."
    ],
    "explanation": "The astronomer Donald Menzel suggested they had seen the planet Venus, which was bright in the west at the time, blurred by Gill's short-sightedness. Gill pointed out that he saw Venus separately in the sky that evening. The large number of witnesses makes it one of the most discussed cases.",
    "wiki": "Father William Gill"
  },
  {
    "slug": "cussac-encounter",
    "category": "visitors",
    "title": "The Cussac Encounter",
    "region": "Cussac, Cantal, France",
    "lat": 44.98,
    "lon": 2.98,
    "dateLabel": "29 August 1967",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Two children, a brother and sister",
    "hook": "Two children watching cows on a French hillside saw four small black figures rise into the air and dive into a glowing sphere.",
    "summary": [
      "On the morning of 29 August 1967, François, 13, and his sister Anne-Marie, 9, were herding cows on a plateau near Cussac when they saw four small figures, about 1.2 metres tall and completely black, beside a shining sphere on the other side of a road.",
      "The children said the figures rose into the air one after another and dived head first into the top of the sphere, which then flew off with a whistling sound. Police who arrived later noted a smell of sulphur and an area of dried grass."
    ],
    "explanation": "No explanation has been confirmed. The gendarmerie found the children credible, and France's official office for investigating unidentified aerial phenomena has documented the case. Sceptics suggest the children misidentified something ordinary at a distance, but no candidate has been agreed.",
    "wiki": "Close encounter of Cussac"
  },
  {
    "slug": "quarouble-dewilde",
    "category": "visitors",
    "title": "The Quarouble Encounter",
    "region": "Quarouble, Nord, France",
    "lat": 50.39,
    "lon": 3.62,
    "dateLabel": "10 September 1954",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Metalworker Marius Dewilde",
    "hook": "Late at night, a French worker went outside to see why his dog was barking, and found a dark craft on the railway line.",
    "summary": [
      "On the night of 10 September 1954, Marius Dewilde, a metalworker living beside a railway line near the Belgian border, heard his dog barking. Outside, he said, he saw a dark shape on the tracks and two small figures in suits like divers, with large helmets.",
      "When he moved towards them, a beam of light from the object froze him in place. The figures went back to the craft, which rose and flew away. Investigators later found marks on the wooden railway sleepers, as if something heavy had stood there."
    ],
    "explanation": "The case came during a wave of UFO reports across France that autumn. Sceptics suggest a hoax or a misinterpreted event, but no explanation has been confirmed. Dewilde stood by his account.",
    "wiki": "Quarouble UFO incident"
  },
  {
    "slug": "kofu-encounter",
    "category": "visitors",
    "title": "The Kofu Encounter",
    "region": "Kofu, Yamanashi, Japan",
    "lat": 35.66,
    "lon": 138.57,
    "dateLabel": "23 February 1975",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Two seven-year-old boys",
    "hook": "Two schoolboys roller skating in Kofu saw an orange light land in a vineyard, and a figure climbed out.",
    "summary": [
      "On the evening of 23 February 1975, two seven-year-old boys roller skating near a housing estate in Kofu saw two orange lights in the sky. One of them came down into a vineyard nearby.",
      "Going closer, they said, they saw a silver, domed craft with strange writing on its side. A hatch opened, a ladder came down, and a figure with a wrinkled face and pointed ears came out and tapped one boy on the shoulder. The boys ran home, and their parents also said they saw an orange glow in the vineyard."
    ],
    "explanation": "Sceptics think the boys' story grew from something ordinary, shaped by children's imagination and by the attention it got in Japanese media. Others point out that the boys gave consistent accounts, and that adults reported the glow.",
    "wiki": "Kofu UFO incident"
  },
  {
    "slug": "herbert-schirmer",
    "category": "visitors",
    "title": "The Schirmer Encounter",
    "region": "Ashland, Nebraska, USA",
    "lat": 41.04,
    "lon": -96.37,
    "dateLabel": "3 December 1967",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Police officer Herbert Schirmer",
    "hook": "On a night patrol, a young police officer saw lights on the highway, and later found 20 minutes he couldn't account for.",
    "summary": [
      "At about 2:30 am on 3 December 1967, police officer Herbert Schirmer, 22, was on patrol near Ashland when he saw red lights on the highway ahead. Back at the station, he wrote in the log: 'Saw a flying saucer at the junction of highways 6 and 63. Believe it or not!'",
      "He realised later that about 20 minutes were missing from his night. Under hypnosis, arranged by a university study of UFOs, he described being taken aboard a craft and spoken to by its crew."
    ],
    "explanation": "The University of Colorado UFO study, known as the Condon Committee, examined the case and concluded there was no good evidence the events happened as Schirmer later described them. Schirmer stood by his account, and the log entry he wrote that night is still cited by supporters.",
    "wiki": "Herbert Schirmer"
  },
  {
    "slug": "ilkley-moor",
    "category": "visitors",
    "title": "The Ilkley Moor Photograph",
    "region": "Ilkley Moor, West Yorkshire, England",
    "lat": 53.91,
    "lon": -1.83,
    "dateLabel": "1 December 1987",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "A retired police officer, known as Philip Spencer",
    "hook": "Crossing a Yorkshire moor at dawn, a man photographed a small green figure, then saw a craft rise into the sky.",
    "summary": [
      "Early on 1 December 1987, a retired police officer, later known by the name Philip Spencer, was crossing Ilkley Moor with a camera when, he said, he saw a small green figure. He took a single photograph before it moved away.",
      "Following it, he said he saw a silver, saucer-shaped craft rise and disappear. When he reached the nearest town, he found he had lost more than an hour. The photo shows a blurry, small figure on the moor."
    ],
    "explanation": "Sceptics suggest a hoax, or a person or animal blurred in the low light. The film was examined by photographic experts, who found no sign of tampering but couldn't say what it showed. The witness's identity has never been made public.",
    "wiki": "Ilkley Moor alien photograph"
  },
  {
    "slug": "jal-1628",
    "featured": true,
    "category": "sky",
    "title": "Japan Air Lines Flight 1628",
    "region": "Over north-eastern Alaska, USA",
    "lat": 66.0,
    "lon": -146.0,
    "dateLabel": "17 November 1986",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Captain Kenju Terauchi and his crew",
    "hook": "Over Alaska at night, the crew of a cargo jet watched lights pace their plane for nearly an hour.",
    "summary": [
      "On 17 November 1986, a Japan Air Lines Boeing 747 cargo flight was crossing Alaska towards Anchorage when Captain Kenju Terauchi and his crew saw lights near the plane. Terauchi described two smaller objects and, later, an enormous craft shaped like a walnut, much larger than an aircraft carrier.",
      "The lights stayed with the plane for around 50 minutes, even as it changed course. Air traffic controllers at times reported unidentified returns on radar. The US Federal Aviation Administration investigated."
    ],
    "explanation": "The FAA concluded that the radar returns were probably caused by equipment issues, and some investigators suggested the crew saw the planets Jupiter and Mars, or reflections. Terauchi, an experienced pilot, was certain he saw craft. The crew's descriptions were consistent with each other.",
    "wiki": "Japan Air Lines Cargo Flight 1628 incident"
  },
  {
    "slug": "petrozavodsk-1977",
    "category": "sky",
    "title": "The Petrozavodsk Phenomenon",
    "region": "Petrozavodsk, Karelia, Russia (then USSR)",
    "lat": 61.79,
    "lon": 34.36,
    "dateLabel": "20 September 1977",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Thousands across Karelia and Finland",
    "hook": "Before dawn, a huge glowing shape like a jellyfish hung over a Soviet city, trailing rays of light.",
    "summary": [
      "At about 4 am on 20 September 1977, people in Petrozavodsk saw a huge glowing object appear in the sky. They described it as like a jellyfish, with rays of light pouring down towards the city. It hung there for minutes before fading.",
      "Similar lights were reported across north-western Russia and in Finland. The Soviet news agency TASS reported it, which was unusual, and Soviet scientists set up a study of strange aerial phenomena in response."
    ],
    "explanation": "The lights coincided with the launch of a Soviet satellite, Kosmos-955, from the secret Plesetsk launch site. Rocket exhaust lit by the sun high above the dark ground can spread into glowing shapes. The military kept the launch secret at the time.",
    "wiki": "Petrozavodsk phenomenon"
  },
  {
    "slug": "norway-spiral",
    "category": "sky",
    "title": "The Norway Spiral",
    "region": "Northern Norway",
    "lat": 69.65,
    "lon": 18.96,
    "dateLabel": "9 December 2009",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Thousands across northern Norway",
    "hook": "One winter morning, a glowing spiral appeared over northern Norway, with a blue beam shooting from its centre.",
    "summary": [
      "Early on 9 December 2009, people across northern Norway saw a strange light in the sky: a spinning white spiral, with a blue-green beam shooting out of its centre, which grew and then collapsed into a black hole-like shape.",
      "Photographs and videos spread around the world within hours, along with theories ranging from a wormhole to a secret experiment."
    ],
    "explanation": "The next day, Russia confirmed that a Bulava missile, test-fired from a submarine in the White Sea, had failed. The spiral was the rocket spinning out of control, its exhaust lit by the sun high in the sky.",
    "wiki": "2009 Norwegian spiral anomaly"
  },
  {
    "slug": "min-min-lights",
    "featured": true,
    "category": "sky",
    "title": "The Min Min Lights",
    "region": "Boulia, Channel Country, Queensland, Australia",
    "lat": -22.91,
    "lon": 139.91,
    "dateLabel": "Reported since the 1800s",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Stockmen, travellers and locals",
    "hook": "In the Australian outback, a light appears at night and seems to follow travellers, keeping its distance however fast they go.",
    "summary": [
      "In the remote Channel Country of western Queensland, people have long told of a light that appears after dark, hovering above the horizon. It can seem to follow travellers, approaching and retreating, and to vanish when someone gets close. It is named after the old Min Min hotel near Boulia.",
      "Aboriginal traditions in the region include stories of similar lights. Accounts from stockmen and travellers go back to the 19th century."
    ],
    "explanation": "In 2003, neuroscientist Jack Pettigrew suggested the lights are a kind of mirage called a Fata Morgana: on cold nights, layers of air can bend light from distant sources, such as car headlights or campfires far beyond the horizon, and make it appear to hover nearby. He produced a similar effect himself. Not everyone accepts that this explains every sighting.",
    "wiki": "Min Min light"
  },
  {
    "slug": "starlink-india-2021",
    "category": "sky",
    "title": "The Lights Over Punjab and Jammu",
    "region": "Pathankot, Punjab, and Jammu, India",
    "lat": 32.27,
    "lon": 75.65,
    "dateLabel": "June and December 2021",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Thousands of residents",
    "hook": "One evening, a long line of lights glided silently across the sky over north India, one after another.",
    "summary": [
      "In June 2021, people in Junagadh, Gujarat, filmed a line of bright lights moving steadily across the night sky. In December 2021, a similar trail of lights was seen over Pathankot in Punjab and in border areas of Jammu, lasting a few minutes.",
      "Near the border, some feared drones. Videos spread quickly, and many people wondered whether they were seeing UFOs."
    ],
    "explanation": "Police and defence sources said the lights were a 'train' of Starlink satellites, launched in batches by SpaceX. Soon after launch, they fly close together in a line and reflect sunlight while the ground below is dark. Similar sightings have been reported around the world.",
    "wiki": "Starlink"
  },
  {
    "slug": "aurora-airship",
    "category": "visitors",
    "title": "The Aurora Airship",
    "region": "Aurora, Wise County, Texas, USA",
    "lat": 33.06,
    "lon": -97.51,
    "dateLabel": "17 April 1897",
    "status": "explained",
    "statusLabel": "Probably a hoax",
    "witnesses": "As reported by a local newspaper correspondent",
    "hook": "In 1897, a Texas newspaper reported that an airship had crashed into a windmill, and its pilot was 'not an inhabitant of this world'.",
    "summary": [
      "In 1896 and 1897, newspapers across the United States carried reports of mysterious 'airships' with bright lights crossing the night sky, years before the first aeroplane flew.",
      "On 19 April 1897, the Dallas Morning News printed a report from S.E. Haydon, a correspondent in the small town of Aurora. He wrote that two days earlier an airship had struck a windmill on a judge's land and exploded, scattering strange metal with unreadable writing, and that its small pilot was 'not an inhabitant of this world'."
    ],
    "explanation": "Historians think Haydon invented the story, perhaps to draw attention to Aurora, which was declining after the railway passed it by. The judge's farm reportedly had no windmill, and other newspapers of the time ran many similar tall tales during the airship wave. Searches of the town since then have not turned up any proof.",
    "wiki": "Aurora, Texas"
  },
  {
    "slug": "gef-talking-mongoose",
    "category": "voices",
    "title": "Gef, the Talking Mongoose",
    "region": "Dalby, Isle of Man",
    "lat": 54.17,
    "lon": -4.73,
    "dateLabel": "From 1931",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "The Irving family and visitors",
    "hook": "On a lonely farm on the Isle of Man, a family said a talking mongoose lived in their walls, and it wouldn't stop chatting.",
    "summary": [
      "In 1931, the Irving family, living on an isolated farm near Dalby on the Isle of Man, began hearing scratching and animal noises in the wooden panelling of their house. Soon, they said, the creature began to speak: first mimicking sounds, then talking, singing and joking.",
      "It called itself Gef and claimed to be a mongoose born in India in 1852. Newspapers made it a sensation, and the investigator Harry Price visited, but Gef never spoke to him. Most of what Gef said was heard when the family's teenage daughter, Voirrey, was nearby."
    ],
    "explanation": "Most investigators thought Voirrey produced the voice herself, perhaps with ventriloquism, and the story grew from there. Mongooses had been released on the island, so a real animal in the walls is possible. Voirrey later said she wished the story had never happened, but didn't admit to faking it.",
    "wiki": "Gef (mongoose)"
  },
  {
    "slug": "aurora-sounds",
    "category": "voices",
    "title": "The Sound of the Northern Lights",
    "region": "Fiskars, Finland, and the far north",
    "lat": 60.13,
    "lon": 23.53,
    "dateLabel": "Reported for centuries; recorded in 2016",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "People in Finland, Scandinavia and Canada",
    "hook": "People in the far north have long said the northern lights crackle and clap. Scientists didn't believe them.",
    "summary": [
      "In Finland, Norway, Canada and other northern lands, people have long described sounds during strong displays of the northern lights: crackling, popping, clapping or a faint hiss. Scientists doubted it, because the aurora shines about 100 km up, where the air is too thin to carry sound to the ground.",
      "Some suggested people were 'hearing' what they saw, a trick of the mind."
    ],
    "explanation": "In 2016, Finnish acoustics researcher Unto Laine recorded the sounds and located their source about 70 metres above the ground, not in the aurora itself. He suggested that during strong geomagnetic activity, electric charge builds up in a layer of air where temperatures invert, and discharges as small cracks and pops. The witnesses had been right.",
    "wiki": "Aurora"
  },
  {
    "slug": "darasuram-musical-steps",
    "category": "voices",
    "title": "The Musical Steps of Darasuram",
    "region": "Airavatesvara temple, Darasuram, Tamil Nadu, India",
    "lat": 10.95,
    "lon": 79.36,
    "dateLabel": "Temple built in the 1100s",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Visitors and musicians",
    "hook": "At a Chola temple in Tamil Nadu, seven stone steps are said to play the seven notes of the scale when struck.",
    "summary": [
      "The Airavatesvara temple at Darasuram, near Kumbakonam, was built by the Chola king Rajaraja II in the 12th century. It is one of the Great Living Chola Temples listed by UNESCO.",
      "Near its entrance is a short flight of stone steps. Each one, when tapped, is said to give a different note, together making the seven notes of Indian classical music, sa, re, ga, ma, pa, dha and ni. The steps are now protected behind a grille."
    ],
    "explanation": "The steps are carved from granite, a dense stone that rings when struck. The note depends on each block's size, shape and how it rests, so the builders likely chose and shaped the stones to give different pitches. Exactly how they tuned them isn't recorded.",
    "wiki": "Airavatesvara Temple"
  },
  {
    "slug": "gol-gumbaz-whispers",
    "category": "voices",
    "title": "The Whispering Gallery of Gol Gumbaz",
    "region": "Vijayapura (Bijapur), Karnataka, India",
    "lat": 16.83,
    "lon": 75.74,
    "dateLabel": "Completed in 1656",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Visitors every day",
    "hook": "Whisper against the wall of a great dome in Bijapur, and someone on the far side, almost 40 metres away, can hear every word.",
    "summary": [
      "Gol Gumbaz, the tomb of Sultan Mohammed Adil Shah in Vijayapura, was completed in 1656. Its dome is one of the largest in the world built without pillars inside.",
      "Around the base of the dome runs a narrow gallery. A whisper or the tick of a watch on one side can be heard clearly on the opposite side, and a clap or shout echoes many times. Visitors fill it with noise every day to try it."
    ],
    "explanation": "It is an acoustic effect, also found in St Paul's Cathedral in London. Sound waves cling to the smooth curved wall and travel around it with little loss, so a whisper arrives clearly on the far side. The dome's shape also makes sounds echo repeatedly.",
    "wiki": "Gol Gumbaz"
  },
  {
    "slug": "golconda-clap",
    "category": "voices",
    "title": "The Clap at Golconda Fort",
    "region": "Golconda Fort, Hyderabad, Telangana, India",
    "lat": 17.38,
    "lon": 78.4,
    "dateLabel": "Fort built from the 1500s",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Visitors and guides",
    "hook": "Clap your hands beneath the entrance dome of Golconda Fort, and the sound is said to carry all the way to the top of the hill.",
    "summary": [
      "Golconda Fort, on the edge of Hyderabad, was the seat of the Qutb Shahi kings and famous for its diamond trade. Its main entrance, the Fateh Darwaza, has a dome above the gateway.",
      "Guides tell visitors that a clap beneath the dome can be heard at the Bala Hisar, the pavilion at the very top of the fort, high above. The story says it was an early warning system, so guards at the gate could alert the king to danger."
    ],
    "explanation": "The dome focuses and reflects sound, and the fort's walls and quiet hillside help it carry. Visitors do hear claps from the gate far up the hill, though how clearly they reach the very top has probably grown in the telling. Whether it was designed as a signal is not recorded.",
    "wiki": "Golconda Fort"
  },
  {
    "slug": "singing-ice",
    "category": "voices",
    "title": "The Singing Ice",
    "region": "Frozen lakes in Sweden and other cold countries",
    "lat": 59.4,
    "lon": 18.2,
    "dateLabel": "Every winter",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Skaters and walkers on frozen lakes",
    "hook": "Skate across new black ice on a frozen lake, and it sings back with eerie sounds, like lasers from a science fiction film.",
    "summary": [
      "On frozen lakes in Sweden, Canada, Russia and elsewhere, people skating or throwing stones onto thin, clear new ice hear strange sounds: high, sweeping 'pew-pew' tones, whoops and chirps, like the sound effects of a space battle.",
      "Recordings of the sounds have spread widely online, and many people hearing them for the first time assume they are fake."
    ],
    "explanation": "Physicists explain it as a natural effect of thin ice. When the ice is struck, high-pitched vibrations travel through the sheet faster than low ones, so they reach a listener first, followed by lower notes. The result is a falling, laser-like sound.",
    "wiki": "Lake ice"
  },
  {
    "slug": "crop-circles",
    "featured": true,
    "category": "places",
    "title": "The Crop Circles of Wiltshire",
    "region": "Wiltshire, England",
    "lat": 51.35,
    "lon": -1.99,
    "dateLabel": "1970s onwards",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Farmers, visitors and pilots",
    "hook": "Overnight, huge patterns appear in fields of wheat in southern England, flattened with perfect precision.",
    "summary": [
      "From the late 1970s, farmers in southern England, especially Wiltshire, began finding large circles of flattened crops in their fields, appearing overnight. Over the years they grew into huge, complex patterns, some hundreds of metres across.",
      "Theories ranged from whirlwinds and unusual weather to messages from beyond Earth. Wiltshire, home to Stonehenge and Avebury, became the centre of a whole culture of crop circle watching."
    ],
    "explanation": "In 1991, two men from Southampton, Doug Bower and Dave Chorley, revealed they had been making circles since the 1970s, using planks, rope and a wire sighting device, and showed reporters how. Teams of artists have since made far more elaborate designs. A small number of enthusiasts still believe some circles can't be explained.",
    "wiki": "Crop circle"
  },
  {
    "slug": "seven-pagodas",
    "category": "places",
    "title": "The Seven Pagodas of Mahabalipuram",
    "region": "Mahabalipuram, Tamil Nadu, India",
    "lat": 12.65,
    "lon": 80.2,
    "dateLabel": "Legend from at least the 1700s; ruins found in 2004",
    "status": "explained",
    "statusLabel": "Partly confirmed",
    "witnesses": "Fishermen, travellers and archaeologists",
    "hook": "Legend said six temples lay drowned under the sea at Mahabalipuram. Then the 2004 tsunami pulled back the water.",
    "summary": [
      "Early European visitors to Mahabalipuram, on the coast south of Chennai, wrote of the 'Seven Pagodas': seven temples, of which only the Shore Temple stood above the sea. The other six, local stories said, had been swallowed by the waves. Fishermen spoke of seeing temple tops under the water.",
      "In December 2004, as the Indian Ocean tsunami drew the sea back, people on the beach saw rows of stone structures briefly exposed. Afterwards, the sand left behind revealed carved stones, including an elephant's head and a lion."
    ],
    "explanation": "Archaeologists from the Archaeological Survey of India and the National Institute of Oceanography found ruins of walls, steps and carved blocks on the seabed offshore, and excavated an old temple on the beach whose brick foundations go back about 2,000 years. They haven't found six complete temples, but the legend clearly has a real basis.",
    "wiki": "Seven Pagodas of Mahabalipuram"
  },
  {
    "slug": "bosnian-pyramids",
    "category": "places",
    "title": "The Bosnian Pyramids",
    "region": "Visoko, Bosnia and Herzegovina",
    "lat": 43.98,
    "lon": 18.18,
    "dateLabel": "Claimed since 2005",
    "status": "explained",
    "statusLabel": "Natural hills",
    "witnesses": "Visitors and researchers",
    "hook": "A hill in Bosnia looks so much like a pyramid that one man claimed it was the oldest and largest ever built.",
    "summary": [
      "In 2005, Semir Osmanagić, a Bosnian-American businessman, announced that Visočica hill, above the town of Visoko, was not a hill but a giant ancient pyramid, older and taller than the pyramids of Egypt. He named it the Pyramid of the Sun and identified other nearby hills as pyramids too.",
      "The claim drew huge attention, tourists and volunteers. Digging revealed flat slabs of stone and tunnels that supporters said were built by an ancient civilisation."
    ],
    "explanation": "Geologists and archaeologists who studied the site concluded the hill is a natural formation called a flatiron, shaped by erosion, and that the stone slabs are natural layers of rock that cracked into blocks. The European Association of Archaeologists described the project as a cruel hoax on the public. Visitors still come in large numbers.",
    "wiki": "Bosnian pyramid claims"
  },
  {
    "slug": "eye-of-the-sahara",
    "category": "places",
    "title": "The Eye of the Sahara",
    "region": "Richat Structure, Adrar, Mauritania",
    "lat": 21.12,
    "lon": -11.4,
    "dateLabel": "Noticed from space in the 1960s",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Astronauts and geologists",
    "hook": "From orbit, astronauts saw a giant blue eye staring up from the Sahara, about 40 km across.",
    "summary": [
      "In the Sahara in Mauritania lies the Richat Structure, a series of rings about 40 km wide. On the ground it is hard to notice, but from space it looks like a giant bullseye or eye. Astronauts used it as a landmark from the 1960s onwards.",
      "It was first thought to be a crater made by a meteorite. More recently, some writers have claimed it is the lost city of Atlantis described by Plato."
    ],
    "explanation": "Geologists found no signs of a meteorite impact. They explain it as a dome of rock pushed up from below about 100 million years ago, then worn down by wind and water, so that rings of harder and softer rock are exposed, like the cut layers of an onion. There is no archaeological evidence of a city.",
    "wiki": "Richat Structure"
  },
  {
    "slug": "costa-rica-stone-spheres",
    "category": "places",
    "title": "The Stone Spheres of Costa Rica",
    "region": "Diquís Delta, Puntarenas, Costa Rica",
    "lat": 8.95,
    "lon": -83.47,
    "dateLabel": "Made between about 500 and 1500 CE",
    "status": "open",
    "statusLabel": "Purpose unknown",
    "witnesses": "Workers, archaeologists and visitors",
    "hook": "In the jungles of southern Costa Rica, workers clearing land found hundreds of almost perfectly round stone balls.",
    "summary": [
      "In the 1930s, workers clearing jungle for banana plantations in the Diquís Delta of southern Costa Rica began finding large, nearly perfect stone spheres. More than 300 are now known, from the size of a tennis ball to over 2 metres across and weighing many tonnes.",
      "Many were moved to gardens and offices, and some were broken open by treasure hunters who believed they contained gold. Nothing was found inside."
    ],
    "explanation": "Archaeologists have shown they were made by people of the Diquís culture, shaping granite-like rock by hammering and grinding. What they were for remains unknown: suggestions include marking the homes of important people, or astronomical alignments. In 2014, the sites were listed by UNESCO.",
    "wiki": "Stone spheres of Costa Rica"
  },
  {
    "slug": "mount-shasta",
    "category": "places",
    "title": "The Secrets of Mount Shasta",
    "region": "Mount Shasta, California, USA",
    "lat": 41.41,
    "lon": -122.19,
    "dateLabel": "Legends since the late 1800s",
    "status": "explained",
    "statusLabel": "Legend",
    "witnesses": "Hikers, visitors and spiritual seekers",
    "hook": "Stories say a hidden city lies inside a volcano in northern California, home to people from a lost continent.",
    "summary": [
      "Mount Shasta is a tall, snow-covered volcano in northern California, sacred to several Native American peoples. From the late 19th century, a series of books and writers claimed that survivors of a lost continent called Lemuria lived in tunnels and a city deep inside it.",
      "Visitors have since reported tall robed figures, strange lights and humming sounds on its slopes. Its smooth, saucer-shaped lenticular clouds are often photographed and mistaken for flying craft."
    ],
    "explanation": "The Lemuria stories trace back to a novel published in 1905 and to later spiritual movements. There is no geological or archaeological evidence of tunnels or a city. The lens-shaped clouds form when strong winds flow over the peak.",
    "wiki": "Mount Shasta"
  },
  {
    "slug": "hms-daedalus-serpent",
    "category": "creatures",
    "title": "The HMS Daedalus Sea Serpent",
    "region": "South Atlantic Ocean, west of southern Africa",
    "lat": -24.73,
    "lon": 9.37,
    "dateLabel": "6 August 1848",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Captain Peter M'Quhae and officers of HMS Daedalus",
    "hook": "Officers of a Royal Navy ship watched an enormous serpent swim past them for twenty minutes, its head held high above the waves.",
    "summary": [
      "On 6 August 1848, the Royal Navy frigate HMS Daedalus was sailing in the South Atlantic when a midshipman reported something approaching. The captain, Peter M'Quhae, and several officers saw what they described as an enormous serpent, with about 60 feet of its body visible, its head held above the water, swimming steadily past the ship.",
      "They watched it for about 20 minutes. The captain reported it to the Admiralty, and the account, with drawings, was published in The Times, causing a sensation in Victorian Britain."
    ],
    "explanation": "The scientist Richard Owen argued they had seen a large seal. Others have suggested a giant squid swimming near the surface, a whale, or an oarfish, a very long fish rarely seen alive. The officers were experienced seamen, and they rejected Owen's explanation.",
    "wiki": "HMS Daedalus (1826)"
  },
  {
    "slug": "gloucester-sea-serpent",
    "category": "creatures",
    "title": "The Gloucester Sea Serpent",
    "region": "Gloucester Harbor, Massachusetts, USA",
    "lat": 42.61,
    "lon": -70.66,
    "dateLabel": "August 1817",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Hundreds of townspeople and sailors",
    "hook": "One summer, a long serpent appeared in a New England harbour, and hundreds of people lined the shore to watch it.",
    "summary": [
      "In August 1817, people in Gloucester, Massachusetts, began reporting a huge serpent in the harbour, often described as dark, with a head like a turtle's or a snake's and a body that moved in vertical humps. Over the following weeks, hundreds of people watched from the shore and from boats.",
      "The Linnean Society of New England, a scientific society, collected sworn statements from witnesses and concluded a new species had been found."
    ],
    "explanation": "The society then made an embarrassing mistake: it declared a deformed black snake found in a field to be a baby sea serpent. Modern suggestions for the sightings include a whale, a line of porpoises or tuna swimming in a row, and floating objects. The large number of witnesses still makes it one of the best-known sea serpent cases.",
    "wiki": "Gloucester sea serpent"
  },
  {
    "slug": "lizard-man-scape-ore",
    "category": "creatures",
    "title": "The Lizard Man of Scape Ore Swamp",
    "region": "Bishopville, South Carolina, USA",
    "lat": 34.22,
    "lon": -80.25,
    "dateLabel": "Summer 1988",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "A teenager and other residents",
    "hook": "Changing a flat tyre near a swamp at 2 am, a teenager said a tall, green, scaly figure came running at his car.",
    "summary": [
      "Late on 29 June 1988, 17-year-old Christopher Davis was changing a flat tyre near Scape Ore Swamp outside Bishopville when, he said, a figure about two metres tall, with green scaly skin, three-fingered hands and red eyes, ran towards him. He jumped in the car and drove off, and said it grabbed at the roof.",
      "Over the next weeks, other residents reported sightings and scratches on cars. The local sheriff took the reports seriously, and the 'Lizard Man' became a national news story and a local tourist attraction."
    ],
    "explanation": "Investigators found no physical evidence of an unknown animal. Suggestions include a bear, a person in a costume, and a story that grew with attention. Davis passed a lie-detector test and stood by his account.",
    "wiki": "Lizard Man of Scape Ore Swamp"
  },
  {
    "slug": "lawndale-thunderbird",
    "category": "creatures",
    "title": "The Lawndale Thunderbirds",
    "region": "Lawndale, Illinois, USA",
    "lat": 40.22,
    "lon": -89.28,
    "dateLabel": "25 July 1977",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "A family and neighbours",
    "hook": "In a small Illinois town, a family said two huge birds swooped down, and one lifted their ten-year-old off the ground.",
    "summary": [
      "On the evening of 25 July 1977, in Lawndale, Illinois, several people said they saw two enormous black birds with white rings around their necks fly low over a garden. They said one of them grabbed 10-year-old Marlon Lowe by the shirt and lifted him a short way off the ground as he screamed, before dropping him. He was frightened but not seriously hurt.",
      "His parents and neighbours described the birds' wingspan as around three metres. The story recalled Native American legends of the thunderbird."
    ],
    "explanation": "No known North American bird can lift a child of that size. Wildlife experts suggested the birds were turkey vultures, which are large but much too weak to lift a child, and that the boy may have been knocked over or tugged rather than carried. The family stood by their account.",
    "wiki": "Thunderbird (cryptozoology)"
  },
  {
    "slug": "bunyip",
    "category": "creatures",
    "title": "The Bunyip",
    "region": "Murray River region, south-eastern Australia",
    "lat": -35.9,
    "lon": 144.3,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Aboriginal communities and early settlers",
    "hook": "In the swamps and billabongs of Australia, Aboriginal stories tell of the bunyip, a creature that lurks in deep water and calls at night.",
    "summary": [
      "Aboriginal peoples across south-eastern Australia tell of a creature that lives in swamps, rivers and waterholes, often called the bunyip. Descriptions vary from place to place, but it is often said to be large, to live in deep water, and to make a booming call at night.",
      "In the 1840s, European settlers reported sightings and strange calls, and in 1846 a skull found on the Murrumbidgee River was displayed in Sydney as a bunyip skull, drawing large crowds."
    ],
    "explanation": "The 1846 skull was later thought to be that of a deformed foal or calf. Some researchers think the legend may preserve memories of extinct giant marsupials, such as the diprotodon, or of seals that occasionally swam far up rivers. The booming call may have come from birds such as the bittern.",
    "wiki": "Bunyip"
  },
  {
    "slug": "golden-langur",
    "category": "creatures",
    "title": "The Golden Langur",
    "region": "Assam–Bhutan border, near the Sankosh River",
    "lat": 26.65,
    "lon": 89.95,
    "dateLabel": "Confirmed in 1953",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Tea planters, naturalist E.P. Gee",
    "hook": "For decades, tea planters spoke of a cream-coloured monkey in the forests of Assam. Scientists didn't know it existed until 1953.",
    "summary": [
      "In the early 20th century, tea planters and foresters in Assam occasionally reported a monkey with fur of 'one colour, a light silvery-gold' in the forests near the Bhutan border. No photograph or specimen was ever produced, and science had no record of such an animal.",
      "In November 1953, the naturalist and tea planter E.P. Gee went looking. Near the Sankosh River, his team found several groups of golden-furred langurs, on both the Indian and Bhutanese sides, and he photographed them."
    ],
    "explanation": "The golden langur was formally described as a new species in 1956, and was named Gee's golden langur. It lives only in a small area of western Assam and Bhutan, and is endangered. It is a reminder that local accounts of unknown animals are sometimes right.",
    "wiki": "Gee's golden langur"
  },
  {
    "slug": "aveley-abduction",
    "category": "visitors",
    "title": "The Aveley Encounter",
    "region": "Aveley, Essex, England",
    "lat": 51.5,
    "lon": 0.25,
    "dateLabel": "27 October 1974",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "A family of five",
    "hook": "Driving home on an autumn night, a family's car entered a strange green mist, and they reached home three hours late.",
    "summary": [
      "Late on 27 October 1974, a couple and their three children were driving home to Aveley in Essex after visiting relatives when they noticed a blue light following the car. Turning a corner, they said, they drove into a bank of green mist, and the radio crackled and sparked.",
      "When they reached home, it was about three hours later than it should have been. In 1977, under hypnosis, the parents described being taken aboard a craft and examined by tall figures and small, furry creatures. The family is known in reports by the pseudonym Avis."
    ],
    "explanation": "Sceptics point to the unreliability of memories recovered under hypnosis, which can draw on films and stories. Others suggest the family misjudged the time. The family maintained something happened that night that changed their lives.",
    "wiki": "Aveley abduction"
  },
  {
    "slug": "armando-valdes",
    "category": "visitors",
    "title": "The Armando Valdés Case",
    "region": "Near Putre, Arica, Chile",
    "lat": -18.2,
    "lon": -69.56,
    "dateLabel": "25 April 1977",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Corporal Armando Valdés and his patrol",
    "hook": "A Chilean army corporal walked towards strange lights and vanished for 15 minutes. When he came back, he had a beard.",
    "summary": [
      "Before dawn on 25 April 1977, a Chilean army patrol camped high on the plateau near Putre saw two violet lights descending nearby. Their leader, Corporal Armando Valdés, walked towards the lights alone, and, the soldiers said, simply disappeared.",
      "About 15 minutes later he reappeared, confused, and collapsed. The soldiers said he now had several days' growth of beard, and that the date on his watch had jumped forward five days. The Chilean army allowed the soldiers to be interviewed by the press."
    ],
    "explanation": "No explanation has been confirmed. Sceptics suggest a hoax, a story that grew among the soldiers, or a medical episode at high altitude. Valdés later became reluctant to talk about it.",
    "wiki": null
  },
  {
    "slug": "rosa-lotti",
    "category": "visitors",
    "title": "The Encounter of Rosa Lotti",
    "region": "Cennina, Tuscany, Italy",
    "lat": 43.45,
    "lon": 11.62,
    "dateLabel": "1 November 1954",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Rosa Lotti",
    "hook": "Walking to church with a bunch of carnations, a Tuscan woman met two small beings who took a flower and a stocking.",
    "summary": [
      "On the morning of 1 November 1954, Rosa Lotti was walking through the woods near Cennina, in Tuscany, carrying a bunch of carnations and a pair of stockings to put on at church. In a clearing she said she found a spindle-shaped object, about two metres tall, and two small, smiling beings about a metre high, dressed in grey.",
      "They chattered in a language she didn't understand, took one carnation and one of her stockings. When she ran away, she said, the object rose and flew off. Some local people said they saw a strange object in the sky that morning."
    ],
    "explanation": "The case came during a wave of UFO reports across Europe in the autumn of 1954. No explanation has been confirmed, and sceptics think it may have grown from a misunderstood encounter. Lotti was described by those who knew her as honest and sincere.",
    "wiki": null
  },
  {
    "slug": "trans-en-provence",
    "category": "visitors",
    "title": "The Trans-en-Provence Landing",
    "region": "Trans-en-Provence, Var, France",
    "lat": 43.5,
    "lon": 6.49,
    "dateLabel": "8 January 1981",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Renato Nicolaï",
    "hook": "A man building a shed in his garden in Provence said a craft landed nearby, and scientists later found the plants there had changed.",
    "summary": [
      "On the afternoon of 8 January 1981, Renato Nicolaï, 52, was working in his garden at Trans-en-Provence when he heard a whistling sound and saw a grey object, shaped like two saucers placed together, land on a terrace below. A moment later, it rose and flew away, leaving circular marks on the ground.",
      "The gendarmerie took soil and plant samples the next day. France's official office for studying unidentified aerial phenomena, then called GEPAN, investigated."
    ],
    "explanation": "GEPAN's laboratory analysis reported that the soil had been compressed and heated, and that alfalfa plants near the marks showed chemical changes that decreased with distance. GEPAN listed the case as unexplained. Sceptics argue that the marks could have come from a vehicle and that the plant results were open to other interpretations.",
    "wiki": "Trans-en-Provence case"
  },
  {
    "slug": "alan-godfrey",
    "category": "visitors",
    "title": "The Todmorden Encounter",
    "region": "Todmorden, West Yorkshire, England",
    "lat": 53.71,
    "lon": -2.1,
    "dateLabel": "28 November 1980",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Police constable Alan Godfrey",
    "hook": "On a rainy night patrol, a police constable came upon a huge glowing object hovering over the road. The road beneath it was dry.",
    "summary": [
      "In the early hours of 28 November 1980, police constable Alan Godfrey was driving through Todmorden looking for a reported herd of loose cattle when he saw a large, glowing, diamond-shaped object hovering just above the road ahead. He sketched it from his car.",
      "Suddenly, he said, he found himself further down the road with the object gone, and about 15 minutes he couldn't account for. The road where the object had hovered was dry, though it had been raining. Later, under hypnosis, he described being taken aboard."
    ],
    "explanation": "Sceptics suggest he saw a bus or another vehicle lit up in the rain, and point to the unreliability of hypnosis. Godfrey, an experienced officer, has always said he saw something real, though he has been cautious about the hypnosis memories.",
    "wiki": null
  },
  {
    "slug": "dechmont-woods",
    "category": "visitors",
    "title": "The Dechmont Woods Encounter",
    "region": "Dechmont Law, near Livingston, Scotland",
    "lat": 55.9,
    "lon": -3.52,
    "dateLabel": "9 November 1979",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Forestry worker Robert Taylor",
    "hook": "A forestry worker walking in the woods came upon a dome-shaped object in a clearing, and two spiked spheres rolled out towards him.",
    "summary": [
      "On the morning of 9 November 1979, Robert Taylor, a forestry foreman, was checking young trees on Dechmont Law near Livingston when he said he came upon a large, dome-shaped object hovering in a clearing. Two smaller spheres covered in spikes rolled towards him and caught hold of his trousers, and he smelled a choking odour and blacked out.",
      "He woke to find the object gone, his trousers torn and his legs grazed. Police went to the site and found marks in the ground, and they investigated, which was very unusual for a UFO report."
    ],
    "explanation": "Some doctors have suggested Taylor had a seizure, as he had been ill with meningitis years earlier. Others have suggested a mirage of the planet Venus or a hoax, though Taylor was widely seen as an honest man with no interest in publicity. The site now has a memorial plaque.",
    "wiki": "Robert Taylor incident"
  },
  {
    "slug": "washington-1952",
    "category": "sky",
    "title": "The Washington Flap",
    "region": "Washington, D.C., USA",
    "lat": 38.9,
    "lon": -77.04,
    "dateLabel": "July 1952",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Air traffic controllers, pilots and the public",
    "hook": "On two summer weekends, radar screens around Washington filled with unknown objects, some flying over the White House.",
    "summary": [
      "On the weekends of 19 to 20 July and 26 to 27 July 1952, radar operators at Washington National Airport and Andrews Air Force Base tracked unidentified objects moving over the capital, including over restricted airspace near the White House and Capitol. Pilots in the air reported lights where the radar showed targets.",
      "Fighter jets were sent up to intercept. Some pilots saw lights that sped away; others saw nothing. The sightings made front-page news across the country."
    ],
    "explanation": "At a large press conference, the US Air Force said the radar targets were caused by temperature inversions, which can bend radar beams and create false returns, and the lights by stars and meteors. Some of the radar operators involved disagreed, saying they knew what inversion effects looked like.",
    "wiki": "1952 Washington, D.C., UFO incident"
  },
  {
    "slug": "exeter-incident",
    "category": "sky",
    "title": "The Incident at Exeter",
    "region": "Exeter, New Hampshire, USA",
    "lat": 42.98,
    "lon": -70.95,
    "dateLabel": "3 September 1965",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "A teenager and two police officers",
    "hook": "A teenager ran into a police station shaking, saying a silent object with red lights had swooped at him in a field. Two officers went back with him and saw it too.",
    "summary": [
      "In the early hours of 3 September 1965, 18-year-old Norman Muscarello arrived at the police station in Exeter, frightened, saying a large object with pulsing red lights had come down towards him near a farm. An officer, Eugene Bertrand, drove him back to the spot.",
      "There, both said, the object rose from behind trees and came towards them, silent, with red lights flashing in sequence. A second officer, David Hunt, arrived and saw it too. A writer, John Fuller, later made it famous in the book 'Incident at Exeter'."
    ],
    "explanation": "The US Air Force first said the witnesses had seen aircraft from a military exercise. The officers pointed out that the exercise had ended before their sighting. Later suggestions include a refuelling aircraft or an advertising plane with lights. No explanation has been agreed.",
    "wiki": "Exeter incident"
  },
  {
    "slug": "ohare-2006",
    "category": "sky",
    "title": "The O'Hare Airport Sighting",
    "region": "O'Hare International Airport, Chicago, Illinois, USA",
    "lat": 41.98,
    "lon": -87.9,
    "dateLabel": "7 November 2006",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Airline employees and pilots",
    "hook": "On a grey afternoon at one of the world's busiest airports, airline staff watched a dark disc hover over a gate, then shoot up through the clouds.",
    "summary": [
      "At about 4:15 pm on 7 November 2006, several United Airlines employees at O'Hare Airport, including a ramp worker and pilots, said they saw a dark, disc-shaped object hovering low over gate C17 under a thick cloud layer. It stayed there for several minutes.",
      "Then, they said, it shot straight up, leaving a clear hole in the clouds through which blue sky could be seen, which closed soon after. The story became public two months later through the Chicago Tribune."
    ],
    "explanation": "The US Federal Aviation Administration said its radar showed nothing unusual and suggested a weather phenomenon. It did not investigate further. Some meteorologists have suggested a 'hole-punch' cloud, which can form naturally, but witnesses said the object was solid.",
    "wiki": "2006 O'Hare International Airport UFO sighting"
  },
  {
    "slug": "brown-mountain-lights",
    "category": "sky",
    "title": "The Brown Mountain Lights",
    "region": "Brown Mountain, North Carolina, USA",
    "lat": 35.92,
    "lon": -81.83,
    "dateLabel": "Reported since the early 1900s",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Residents and visitors",
    "hook": "Over a low ridge in the Blue Ridge Mountains, glowing lights rise, drift and vanish on certain nights.",
    "summary": [
      "Since at least the early 1900s, people have watched mysterious lights over Brown Mountain, a long, low ridge in western North Carolina. The lights are described as glowing balls, red, white or blue, that rise above the ridge, hang there and fade. Viewing spots along the roads draw visitors on autumn nights.",
      "Local legends have explained them as lanterns carried by searchers long ago, and the song 'Brown Mountain Light' made them famous."
    ],
    "explanation": "The US Geological Survey looked into them in 1913 and 1922 and concluded that many were headlights of trains and cars in the valleys beyond, along with brush fires and stars. Researchers since then have filmed lights they say don't fit those explanations, and some suggest a natural glow from the rocks.",
    "wiki": "Brown Mountain lights"
  },
  {
    "slug": "hudson-valley-boomerang",
    "category": "sky",
    "title": "The Hudson Valley Boomerang",
    "region": "Hudson Valley, New York, USA",
    "lat": 41.5,
    "lon": -73.9,
    "dateLabel": "1982 – 1986",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Thousands of residents",
    "hook": "For four years, people north of New York City watched a huge V of lights glide silently over their towns at night.",
    "summary": [
      "Between 1982 and 1986, thousands of people in the Hudson Valley, in Westchester, Putnam and nearby counties, reported a giant boomerang or V-shaped formation of lights moving slowly and quietly across the night sky. Some described it as larger than a football field. Police stations were flooded with calls.",
      "On one night in 1984, staff at a nuclear power plant reported seeing it close by."
    ],
    "explanation": "Investigators and journalists found that a group of local pilots had been flying light aircraft in tight formation at night with their lights on, sometimes switching them off to make the shape seem to vanish. Some witnesses insisted what they saw was silent and solid, and not a group of planes.",
    "wiki": null
  },
  {
    "slug": "red-sprites",
    "category": "sky",
    "title": "The Red Sprites",
    "region": "Minnesota, USA, and above storms worldwide",
    "lat": 45.18,
    "lon": -92.77,
    "dateLabel": "Reported by pilots for decades; filmed in 1989",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Pilots, then scientists",
    "hook": "For decades, pilots described brief red flashes shooting upward above thunderstorms. Hardly anyone believed them.",
    "summary": [
      "Airline and military pilots flying at night near large thunderstorms sometimes reported strange, brief flashes of red light shooting upward from the tops of the clouds, towards space. Because they lasted only a fraction of a second and scientists had no explanation, the reports were largely dismissed.",
      "In July 1989, scientists from the University of Minnesota were testing a sensitive camera when they caught one by accident: a huge, faint flash above a distant storm."
    ],
    "explanation": "These flashes are now known as red sprites, a kind of electrical discharge high in the atmosphere, set off by powerful lightning below. They have since been filmed from aircraft, mountaintops and the International Space Station. The pilots had been right all along.",
    "wiki": "Sprite (lightning)"
  },
  {
    "slug": "colossi-of-memnon",
    "featured": true,
    "category": "voices",
    "title": "The Singing Statue of Memnon",
    "region": "Luxor (ancient Thebes), Egypt",
    "lat": 25.72,
    "lon": 32.61,
    "dateLabel": "About 27 BCE to 200 CE",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Greek and Roman travellers, including an emperor",
    "hook": "For two centuries, one of two giant stone statues in Egypt gave out a soft, musical sound at dawn.",
    "summary": [
      "On the west bank of the Nile at Luxor stand two huge seated statues of the pharaoh Amenhotep III, about 3,400 years old. After an earthquake around 27 BCE cracked the northern statue, travellers reported that it made a sound at sunrise, like a lyre string snapping or a soft moan.",
      "Greeks and Romans believed it was Memnon, a hero of the Trojan War, greeting his mother, the dawn. Visitors carved more than a hundred inscriptions on its legs recording that they had heard it, including members of the emperor Hadrian's party in 130 CE."
    ],
    "explanation": "The sound stopped after the statue was repaired, probably under the emperor Septimius Severus around 200 CE. Scientists think the sun warming the cracked stone at dawn, and dew evaporating from inside the cracks, made the stone vibrate. Once the cracks were sealed, the statue fell silent.",
    "wiki": "Colossi of Memnon"
  },
  {
    "slug": "witsand-roaring-sands",
    "category": "voices",
    "title": "The Roaring Sands of Witsand",
    "region": "Witsand Nature Reserve, Northern Cape, South Africa",
    "lat": -28.57,
    "lon": 22.47,
    "dateLabel": "Known for generations",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Visitors and local communities",
    "hook": "In the middle of the red Kalahari lies a ridge of white dunes that groan and roar when you slide down them.",
    "summary": [
      "Witsand, in South Africa's Northern Cape, is a strip of brilliant white dunes about 9 km long, surrounded by the red sands of the Kalahari. Local people call it the Brulsand, the roaring sand.",
      "On hot, dry days, when the sand is disturbed or slides down a slope, the dunes make a deep groaning or roaring sound, sometimes compared to a low-flying aircraft. Visitors slide down the slopes to hear it."
    ],
    "explanation": "Like the singing dunes of China and the Sahara, the sound comes from dry, well-rounded grains of sand moving together in an avalanche. It only happens when the sand is very dry, which is why the dunes are quiet after rain. Scientists still debate exactly how the grains synchronise.",
    "wiki": "Witsand Nature Reserve"
  },
  {
    "slug": "whistling-vessels-peru",
    "category": "voices",
    "title": "The Whistling Vessels of Peru",
    "region": "North coast of Peru",
    "lat": -8.11,
    "lon": -79.03,
    "dateLabel": "Made over about 2,000 years",
    "status": "explained",
    "statusLabel": "Purpose debated",
    "witnesses": "Archaeologists and musicians",
    "hook": "Ancient Peruvian pots were made to whistle, and some give out sounds that seem to buzz inside the listener's head.",
    "summary": [
      "Across ancient Peru, cultures including the Moche and Chimú made clay vessels with two connected chambers and a hidden whistle. When water is tipped from one chamber to the other, or air is blown in, the vessel whistles, sometimes in the voice of a bird or animal shaped on top.",
      "In the 1970s, researchers who played many of them together found that the high, slightly different tones combine into a strange, pulsing sound that seems to come from inside the head."
    ],
    "explanation": "How they work is understood: air pushed through a small whistle by moving water or breath. What they were for is less clear. Suggestions include music, rituals and altering people's state of mind, as the combined sounds can be disorienting. Researchers have made working copies.",
    "wiki": "Whistling vessel"
  },
  {
    "slug": "cueva-del-guacharo",
    "category": "voices",
    "title": "The Cave of the Guácharo",
    "region": "Caripe, Monagas, Venezuela",
    "lat": 10.17,
    "lon": -63.55,
    "dateLabel": "Described by Humboldt in 1799",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Local people and the explorer Alexander von Humboldt",
    "hook": "Deep in a Venezuelan cave, thousands of unseen birds shriek in the dark, and local people once believed it was a place of spirits.",
    "summary": [
      "In 1799, the explorer Alexander von Humboldt entered a great cave near Caripe, guided by local people who were wary of going deep inside. In the darkness, thousands of birds screamed and clicked, a sound he described as deafening.",
      "Local people associated the cave with the spirits of the dead and would not go far into it. The birds were known as guácharos."
    ],
    "explanation": "Humboldt described the bird for science: the oilbird, which lives in caves and feeds on fruit at night. Oilbirds find their way in total darkness using echolocation, making clicking sounds that humans can hear, and they screech loudly when disturbed. The cave is now Venezuela's first national monument.",
    "wiki": "Cueva del Guácharo National Park"
  },
  {
    "slug": "pororoca",
    "category": "voices",
    "title": "The Great Roar of the Amazon",
    "region": "Mouth of the Amazon, Amapá and Pará, Brazil",
    "lat": 1.2,
    "lon": -50.0,
    "dateLabel": "Twice a year, at the highest tides",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "River communities and surfers",
    "hook": "Near the mouth of the Amazon, a deep roar is heard half an hour before a wall of water comes racing upriver.",
    "summary": [
      "Where the Amazon and nearby rivers meet the Atlantic, people hear a deep roar coming from the sea, around 30 minutes before a wave several metres high surges upriver against the current, tearing at trees and banks. Local people call it the pororoca, from a Tupi word for a great roar.",
      "Folk stories explained it as the work of river creatures. Today, surfers come to ride the wave for many kilometres."
    ],
    "explanation": "It is a tidal bore. Around the new and full moons, especially near the spring and autumn equinoxes, the strongest tides push into the shallow river mouths and build into a single wave that travels upstream. The roar is the sound of the wave breaking ahead of its arrival.",
    "wiki": "Tidal bore"
  },
  {
    "slug": "puma-punku",
    "featured": true,
    "category": "places",
    "title": "Puma Punku",
    "region": "Tiwanaku, La Paz department, Bolivia",
    "lat": -16.56,
    "lon": -68.68,
    "dateLabel": "Built around 500–600 CE",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Archaeologists and visitors",
    "hook": "High on the Bolivian plateau lie scattered stone blocks cut with such precision that some have claimed no ancient people could have made them.",
    "summary": [
      "Puma Punku is part of Tiwanaku, a city near Lake Titicaca that was the centre of a powerful Andean culture around 1,500 years ago. Its ruins are a jumble of andesite and sandstone blocks, some with sharp inner corners, flat faces and repeated 'H' shapes that look almost machine-made.",
      "Because the site is in ruins and its builders left no writing, it has become a favourite of television shows suggesting it was built with lost technology or help from beyond Earth."
    ],
    "explanation": "Archaeologists say the Tiwanaku people shaped the stones with harder hammerstones, sand and abrasives, using standard templates so that pieces fitted together. The repeated shapes show careful planning, not machinery. How they moved the largest blocks is debated, but ramps, ropes and large work crews are thought to explain it.",
    "wiki": "Puma Punku"
  },
  {
    "slug": "tayos-cave",
    "category": "places",
    "title": "The Tayos Cave",
    "region": "Morona Santiago, Ecuador",
    "lat": -3.06,
    "lon": -78.2,
    "dateLabel": "Claims from 1969; expedition in 1976",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Explorers, including astronaut Neil Armstrong",
    "hook": "A cave in the Ecuadorian jungle was said to hide a library of metal books from a lost civilisation.",
    "summary": [
      "The Cueva de los Tayos is a huge cave system in the Amazon foothills of Ecuador, named after the oilbirds (tayos) that nest inside. In 1969, an explorer named Juan Moricz claimed it held tunnels and a library of metal plates engraved by an ancient civilisation.",
      "The writer Erich von Däniken popularised the story in a 1972 book. In 1976, a large British and Ecuadorian expedition explored the cave, with the astronaut Neil Armstrong as its honorary leader."
    ],
    "explanation": "The 1976 expedition mapped the cave and found remarkable natural formations, wildlife and signs of ancient human use, but no metal library. Moricz's claims were never backed by evidence. The legend still draws treasure hunters.",
    "wiki": "Cueva de los Tayos"
  },
  {
    "slug": "rapa-nui-moai",
    "featured": true,
    "category": "places",
    "title": "The Walking Moai of Rapa Nui",
    "region": "Rapa Nui (Easter Island), Chile",
    "lat": -27.12,
    "lon": -109.37,
    "dateLabel": "Carved about 1250–1500",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Rapa Nui people, archaeologists and visitors",
    "hook": "On a remote Pacific island, giant stone heads stand far from the quarry where they were carved. The islanders say they walked.",
    "summary": [
      "Rapa Nui, or Easter Island, is one of the most remote inhabited places on Earth. Its people carved nearly a thousand giant stone figures called moai, some taller than 10 metres and weighing many tonnes, at a single quarry, then moved them kilometres across the island.",
      "With no large trees left and no wheels or draught animals, how they moved them puzzled outsiders. Rapa Nui oral tradition says the moai walked to their places."
    ],
    "explanation": "In 2012, archaeologists Terry Hunt and Carl Lipo showed that a team of about 18 people with ropes could rock a replica moai from side to side so that it 'walked' upright down a road. The moai's shape suits this method, which matches the islanders' own account.",
    "wiki": "Moai"
  },
  {
    "slug": "lake-guatavita",
    "category": "places",
    "title": "Lake Guatavita and El Dorado",
    "region": "Guatavita, Cundinamarca, Colombia",
    "lat": 4.98,
    "lon": -73.78,
    "dateLabel": "Ceremony from before the 1500s",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Spanish chroniclers and Muisca tradition",
    "hook": "The legend of El Dorado, a city of gold, began with a real ceremony on a round lake in the Colombian Andes.",
    "summary": [
      "The Muisca people of the Colombian highlands held a ceremony when a new ruler took power. According to Spanish accounts, he was covered in gold dust and rafted out onto the round Lake Guatavita, where gold and emeralds were offered to the water.",
      "Europeans turned the story of 'el dorado', the golden one, into a legend of a lost city of gold. Expeditions searched South America for it for centuries, and several attempts were made to drain Lake Guatavita to recover its treasure."
    ],
    "explanation": "There was no city of gold. The ceremony was real, and a famous golden model of a raft with figures, found in a cave in 1969 and now in Bogotá's Gold Museum, appears to show it. Draining attempts recovered some gold objects, but the lake is now protected.",
    "wiki": "Lake Guatavita"
  },
  {
    "slug": "oklo-reactor",
    "category": "places",
    "title": "The Oklo Natural Reactor",
    "region": "Oklo, Haut-Ogooué, Gabon",
    "lat": -1.39,
    "lon": 13.16,
    "dateLabel": "About 2 billion years ago; found in 1972",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "French nuclear scientists",
    "hook": "In 1972, scientists found uranium from a mine in Gabon that had already been 'used', as if by a nuclear reactor two billion years ago.",
    "summary": [
      "In 1972, workers at a French processing plant noticed that uranium from the Oklo mine in Gabon contained slightly less of a key type of uranium, uranium-235, than uranium from anywhere else. It looked as if some of it had already been burned in a nuclear reactor.",
      "The finding caused alarm at first, and inspired later claims of an ancient civilisation with nuclear power."
    ],
    "explanation": "Scientists found the answer in the rock itself. About two billion years ago, when natural uranium was richer in uranium-235, groundwater seeping into the deposit slowed down neutrons enough for natural nuclear chain reactions to start. They ran on and off for hundreds of thousands of years. Oklo is the only known natural reactor on Earth.",
    "wiki": "Natural nuclear fission reactor"
  },
  {
    "slug": "libyan-desert-glass",
    "category": "places",
    "title": "The Glass of the Great Sand Sea",
    "region": "Great Sand Sea, western Egypt",
    "lat": 25.5,
    "lon": 25.5,
    "dateLabel": "Formed about 29 million years ago",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Explorers, geologists and Egyptologists",
    "hook": "Scattered across the Sahara lie pieces of yellow glass, and one was carved into a scarab for Tutankhamun.",
    "summary": [
      "In the Great Sand Sea of western Egypt, near the border with Libya, the desert is scattered with pieces of pale yellow-green glass, some as heavy as 20 kg. It was described by explorers in the 1930s, but people had used it for tools for thousands of years.",
      "In 1998, a scientist identified the yellow scarab at the centre of a pectoral found in Tutankhamun's tomb as being carved from this desert glass."
    ],
    "explanation": "The glass formed when sand was melted at extremely high temperatures, about 29 million years ago. Most scientists think this was caused by a meteorite impact or a meteor exploding in the air above the desert. Studies of tiny minerals in the glass have found signs of extreme shock that support an impact, though no crater has been found.",
    "wiki": "Libyan desert glass"
  },
  {
    "slug": "great-zimbabwe",
    "featured": true,
    "category": "places",
    "title": "Great Zimbabwe",
    "region": "Masvingo Province, Zimbabwe",
    "lat": -20.27,
    "lon": 30.93,
    "dateLabel": "Built from the 11th to the 15th century",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Archaeologists and visitors",
    "hook": "When Europeans found a great stone city in southern Africa, they invented stories about who built it. The truth had been there all along.",
    "summary": [
      "Great Zimbabwe is a city of massive stone walls, towers and enclosures, built without mortar between the 11th and 15th centuries. At its height it was the capital of a trading kingdom linked to the Indian Ocean coast, and it gave the modern country of Zimbabwe its name.",
      "When European colonists arrived in the late 19th century, many refused to believe Africans had built it. They claimed it was the work of Phoenicians, Arabs or the Queen of Sheba."
    ],
    "explanation": "Archaeologists, starting with David Randall-MacIver in 1905 and Gertrude Caton-Thompson in 1929, showed that Great Zimbabwe was built by the ancestors of the Shona people. The colonial government of Rhodesia continued to promote other theories for political reasons. The 'mystery' was never really a mystery.",
    "wiki": "Great Zimbabwe"
  },
  {
    "slug": "sphinx-water-erosion",
    "category": "places",
    "title": "The Weathering of the Great Sphinx",
    "region": "Giza, Egypt",
    "lat": 29.98,
    "lon": 31.14,
    "dateLabel": "Debated since 1991",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Geologists and Egyptologists",
    "hook": "A geologist looked at the grooves on the walls around the Great Sphinx and argued it must be thousands of years older than anyone thought.",
    "summary": [
      "The Great Sphinx at Giza is generally dated to around 2500 BCE, during the reign of the pharaoh Khafre. The walls of the enclosure carved out around it are worn with deep, rounded grooves.",
      "In 1991, Boston University geologist Robert Schoch argued that the grooves were made by years of heavy rain, which would mean the Sphinx was carved thousands of years earlier, when Egypt had a wetter climate. The idea became popular in books and documentaries about lost civilisations."
    ],
    "explanation": "Most Egyptologists and many geologists disagree. They point out that the soft limestone layers weather in this way from salt, wind and occasional rain, and that the tools, quarries and workers' settlements found at Giza fit the traditional date. No evidence of an earlier civilisation has been found at the site.",
    "wiki": "Great Sphinx of Giza"
  },
  {
    "slug": "adams-calendar",
    "category": "places",
    "title": "Adam's Calendar",
    "region": "Near Kaapschehoop, Mpumalanga, South Africa",
    "lat": -25.58,
    "lon": 30.76,
    "dateLabel": "Claimed since 2003",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Visitors, researchers and archaeologists",
    "hook": "On a South African escarpment, a ring of standing stones was claimed to be a calendar 75,000 years old.",
    "summary": [
      "On the edge of an escarpment in Mpumalanga is a circle of stones, some standing upright. In the 2000s, a former pilot named Johan Heine and author Michael Tellinger claimed it was an ancient calendar aligned to the sun, around 75,000 years old, which would make it the oldest human-made structure on Earth.",
      "The claim spread widely online, and the site is visited by tour groups. The surrounding region is covered with thousands of old stone-walled ruins."
    ],
    "explanation": "Archaeologists say the stone circles of Mpumalanga were built by Bokoni farming communities, mostly between about 1500 and 1800, as homesteads, cattle enclosures and terraces. There is no scientific evidence that the site is anywhere near 75,000 years old.",
    "wiki": "Adam's Calendar"
  },
  {
    "slug": "minhocao",
    "category": "creatures",
    "title": "The Minhocão",
    "region": "Southern Brazil",
    "lat": -26.0,
    "lon": -50.5,
    "dateLabel": "Reported in the 1800s",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Farmers and settlers",
    "hook": "In 19th-century Brazil, farmers blamed a giant burrowing worm for trenches that appeared overnight, swallowing fences and trees.",
    "summary": [
      "In the 1800s, people in southern Brazil described the minhocão, a huge worm-like creature that burrowed underground and left deep trenches across fields and roads. Trees were said to be uprooted and rivers diverted where it passed.",
      "In 1877, the German naturalist Fritz Müller, who lived in Brazil, collected the reports and published them, suggesting a real but unknown animal might lie behind them."
    ],
    "explanation": "No such animal has been found. Suggestions include large caecilians, legless amphibians that do burrow, a giant extinct armadillo remembered in folklore, or trenches caused by erosion and floods. Reports faded in the 20th century.",
    "wiki": "Minhocão (legendary creature)"
  },
  {
    "slug": "patagonian-plesiosaur",
    "category": "creatures",
    "title": "The Patagonian Plesiosaur",
    "region": "Near Epuyén, Chubut, Argentina",
    "lat": -42.2,
    "lon": -71.4,
    "dateLabel": "1922",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "An American prospector, Martin Sheffield",
    "hook": "In 1922, a prospector wrote to Buenos Aires zoo that he had seen a long-necked creature in a Patagonian lake. The zoo sent an expedition.",
    "summary": [
      "In 1922, Martin Sheffield, an American prospector living in Patagonia, wrote to Clemente Onelli, director of the Buenos Aires Zoo. He said he had seen tracks and then a huge animal with a long neck, like a swan's, in a lake near Epuyén.",
      "Onelli, who believed a prehistoric reptile might have survived, organised an expedition. The press called the animal the Patagonian plesiosaur, and the story became an international sensation."
    ],
    "explanation": "The expedition found nothing and was mocked in the press. Historians note that Sheffield was known for tall tales. Long-necked lake creatures are still reported in Patagonia, most famously Nahuelito in Lake Nahuel Huapi, but none has been confirmed.",
    "wiki": "Nahuelito"
  },
  {
    "slug": "curupira",
    "category": "creatures",
    "title": "The Curupira",
    "region": "Amazon rainforest, Brazil",
    "lat": -3.1,
    "lon": -60.0,
    "dateLabel": "Recorded since 1560",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Amazonian communities",
    "hook": "In the Amazon, people tell of a small forest guardian with red hair and backwards feet, who leads hunters astray.",
    "summary": [
      "The curupira is one of Brazil's best-known forest beings. Usually described as a small figure with flaming red hair and feet that point backwards, it protects the forest and its animals. Its backward footprints mislead anyone who tries to follow it.",
      "The Jesuit priest José de Anchieta wrote about it in 1560, describing how Indigenous people left offerings to keep it friendly. Hunters and woodcutters still tell of getting lost after taking more than they need."
    ],
    "explanation": "The curupira is a figure of folklore, not a reported animal, and no one claims it can be caught. Many see the stories as a way of teaching respect for the forest, and it is often used as a symbol of forest protection in Brazil.",
    "wiki": "Curupira"
  },
  {
    "slug": "kongamato",
    "category": "creatures",
    "title": "The Kongamato",
    "region": "Jiundu swamp, North-Western Province, Zambia",
    "lat": -11.7,
    "lon": 24.4,
    "dateLabel": "Reported in 1923",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Local people, as reported by Frank Melland",
    "hook": "In the swamps of north-western Zambia, people described a flying creature with leathery wings and teeth, which they called the overwhelmer of boats.",
    "summary": [
      "In 1923, the British colonial official Frank Melland published a book describing a creature that people around the Jiundu swamp called the kongamato, 'the overwhelmer of boats'. It was said to be red or black, with a wingspan of up to two metres, leathery wings and a beak full of teeth.",
      "Melland wrote that when he showed people pictures of pterodactyls, they identified them as the kongamato. The story led to claims that a flying reptile might have survived in Africa."
    ],
    "explanation": "Scientists consider a surviving pterosaur impossible. Suggestions include the shoebill, a large grey stork with a huge bill, large fruit bats, or a memory shaped by outsiders' questions and pictures. No specimen or photograph exists.",
    "wiki": "Kongamato"
  },
  {
    "slug": "okapi",
    "featured": true,
    "category": "creatures",
    "title": "The Okapi",
    "region": "Ituri Forest, Democratic Republic of the Congo",
    "lat": 1.5,
    "lon": 28.5,
    "dateLabel": "Described by science in 1901",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Mbuti people; explorer Harry Johnston",
    "hook": "For years, Europeans heard rumours of a strange striped animal deep in the Congo forest. Then it turned out to be real.",
    "summary": [
      "In 1890, the explorer Henry Morton Stanley wrote that the people of the Ituri Forest knew a donkey-like animal that lived deep in the forest. European scientists had never seen it, and some joked it might be an 'African unicorn'.",
      "Around 1900, the British official Harry Johnston obtained strips of striped skin and later a whole skin and skulls from Mbuti hunters and Congolese soldiers, and sent them to London."
    ],
    "explanation": "In 1901, the animal was described as a new species: the okapi, a forest relative of the giraffe with zebra-like stripes on its legs. The people of the Ituri had known it all along. It is now endangered, and a symbol of the Democratic Republic of the Congo.",
    "wiki": "Okapi"
  },
  {
    "slug": "ninki-nanka",
    "category": "creatures",
    "title": "The Ninki Nanka",
    "region": "Gambia River, The Gambia",
    "lat": 13.45,
    "lon": -15.5,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "People living along the Gambia River",
    "hook": "In the swamps along the Gambia River, people tell of the Ninki Nanka, a huge dragon-like creature that few dare to look at.",
    "summary": [
      "In The Gambia and parts of Senegal and Guinea, the Ninki Nanka is a legendary creature said to live in swamps and rivers. Descriptions vary: a giant reptile with a long body, a horse-like head, a crest and shining scales. Seeing it is said to bring bad luck.",
      "In 2006, a group of British monster hunters visited The Gambia and interviewed people who said they had seen it. They returned without evidence."
    ],
    "explanation": "Most researchers see the Ninki Nanka as a figure of folklore, perhaps built on encounters with large crocodiles, monitor lizards or pythons in the dense mangroves. No physical evidence has been found.",
    "wiki": "Ninki Nanka"
  },
  {
    "slug": "tassili-martians",
    "category": "visitors",
    "title": "The 'Martians' of Tassili",
    "region": "Tassili n'Ajjer, Algeria",
    "lat": 25.5,
    "lon": 9.0,
    "dateLabel": "Paintings thousands of years old; named in the 1950s",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Explorer Henri Lhote and later visitors",
    "hook": "In the Sahara, ancient rock paintings show tall, round-headed figures that one explorer nicknamed 'the great Martian god'.",
    "summary": [
      "The Tassili n'Ajjer plateau in the Sahara holds thousands of rock paintings, made over thousands of years when the region was green. In the 1950s, the French explorer Henri Lhote copied many of them, including tall figures with large, round, featureless heads.",
      "Lhote jokingly nicknamed one large figure 'the great Martian god'. Writers including Erich von Däniken later suggested the figures showed visitors in space helmets."
    ],
    "explanation": "Archaeologists think the round-headed figures show people in ceremonial masks or headdresses, or spiritual beings in local belief. Similar masks are still used in ceremonies in parts of Africa. The paintings are now a UNESCO World Heritage Site.",
    "wiki": "Tassili n'Ajjer"
  },
  {
    "slug": "dogon-sirius",
    "featured": true,
    "category": "visitors",
    "title": "The Dogon and Sirius",
    "region": "Bandiagara Escarpment, Mali",
    "lat": 14.35,
    "lon": -3.6,
    "dateLabel": "Reported in the 1930s–1950s",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "French anthropologists and Dogon elders",
    "hook": "Anthropologists reported that the Dogon people knew Sirius had a small, heavy companion star, invisible to the naked eye.",
    "summary": [
      "The Dogon people live along the Bandiagara cliffs in Mali. In the 1930s to 1950s, the French anthropologists Marcel Griaule and Germaine Dieterlen reported that Dogon elders described the star Sirius as having a tiny, very heavy companion that orbits it every 50 years. Such a star, Sirius B, does exist, but can only be seen with a telescope.",
      "In 1976, the writer Robert Temple argued in 'The Sirius Mystery' that the Dogon must have learned this from visitors from the Sirius system."
    ],
    "explanation": "Later researchers, including anthropologist Walter van Beek, who spent years with the Dogon, found no such knowledge among the elders they spoke to. Many think the details came from conversations with Europeans, including the anthropologists themselves, or from missionaries. Sirius B was well known to astronomers by the 1920s.",
    "wiki": "Dogon religion"
  },
  {
    "slug": "canary-islands-1976",
    "category": "visitors",
    "title": "The Canary Islands Sphere",
    "region": "Gran Canaria, Canary Islands, Spain",
    "lat": 27.96,
    "lon": -15.6,
    "dateLabel": "22 June 1976",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Thousands across the Canary Islands, including a Spanish Navy ship",
    "hook": "One summer night, a giant glowing sphere rose over the Canary Islands, and a doctor said he saw two tall figures inside it.",
    "summary": [
      "At about 9:30 pm on 22 June 1976, people across the Canary Islands saw a bright light rise from the sea and expand into an enormous, glowing, transparent sphere. A Spanish Navy ship off Fuerteventura reported it, and thousands of people saw it from several islands.",
      "On Gran Canaria, a doctor and a taxi driver said they saw the sphere close up, with two tall figures standing inside it. Spanish authorities investigated, and the case became one of the most famous in Spain."
    ],
    "explanation": "In 2001, Spanish researchers Ricardo Campo and Vicente-Juan Ballester Olmos showed that a US Navy submarine had test-launched two Poseidon missiles in the Atlantic that evening, at exactly the right time and place. Rocket exhaust high in the sunlit atmosphere can expand into huge glowing spheres. The figures inside remain part of the story.",
    "wiki": "1976 Canary Islands UFO sightings"
  },
  {
    "slug": "vidal-teleportation",
    "category": "visitors",
    "title": "The Vidal Teleportation",
    "region": "Chascomús, Buenos Aires Province, Argentina",
    "lat": -35.57,
    "lon": -58.01,
    "dateLabel": "Reported in 1968",
    "status": "explained",
    "statusLabel": "Probably a hoax",
    "witnesses": "Never found",
    "hook": "A couple driving near Buenos Aires were said to have entered a fog, and woken up in their car in Mexico two days later.",
    "summary": [
      "In 1968, a story spread across Argentina and then the world: a couple named Vidal, driving near Chascomús at night, had entered a thick fog. The next thing they knew, they were on a road in Mexico, 6,000 km away, two days later, with their car scorched.",
      "The story was repeated in books and magazines for decades as one of the strangest UFO cases ever recorded."
    ],
    "explanation": "Researchers who tried to trace the couple never found them, or anyone who had met them. Journalist Alejandro Agostinelli showed that an Argentine film with a very similar plot, about a couple teleported by a flying saucer, had been made the year before and was released soon after the rumour spread. The case appears to have been a publicity stunt.",
    "wiki": null
  },
  {
    "slug": "trancas-1963",
    "category": "visitors",
    "title": "The Trancas Case",
    "region": "Trancas, Tucumán, Argentina",
    "lat": -26.23,
    "lon": -65.28,
    "dateLabel": "21 October 1963",
    "status": "open",
    "statusLabel": null,
    "witnesses": "The Moreno family and their household",
    "hook": "On a cold night in northern Argentina, a family saw glowing craft by the railway line, and beams of solid light reaching towards their house.",
    "summary": [
      "On the evening of 21 October 1963, the household at a farm near Trancas, in Tucumán, saw a series of lights near the railway line beside their property. Two of the Moreno family's daughters went out with a torch and saw, they said, a disc-shaped object with lit windows hovering low over the ground.",
      "Over the next hour, the family described several craft and beams of light, like solid tubes, that moved slowly towards the house and gave off heat. The local police and a judge took statements."
    ],
    "explanation": "No explanation has been confirmed. Sceptics have suggested railway workers with lamps or a military operation, but neither matches all of the family's account. Investigators at the time found the witnesses credible.",
    "wiki": null
  },
  {
    "slug": "catatumbo-lightning",
    "featured": true,
    "category": "sky",
    "title": "The Catatumbo Lightning",
    "region": "Lake Maracaibo, Zulia, Venezuela",
    "lat": 9.5,
    "lon": -71.6,
    "dateLabel": "Most nights of the year",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Sailors, fishermen and visitors",
    "hook": "Where a river meets a great lake in Venezuela, silent lightning flickers in the sky on more nights of the year than anywhere else.",
    "summary": [
      "Where the Catatumbo River flows into Lake Maracaibo, storms gather on most nights of the year, and lightning flashes for hours at a time, sometimes dozens of times a minute. From far away it is often silent, a glow flickering on the horizon.",
      "For centuries, sailors used it as a natural lighthouse, and it is known as the Beacon of Maracaibo. It appears on the flag of the state of Zulia."
    ],
    "explanation": "Scientists explain it by the local landscape. Warm, moist air from the lake meets cool winds coming down from the Andes, which surround the lake on three sides, and forms thunderstorms night after night. The lake has been named one of the places with the most lightning on Earth.",
    "wiki": "Catatumbo lightning"
  },
  {
    "slug": "night-of-the-ufos-1986",
    "featured": true,
    "category": "sky",
    "title": "Brazil's Night of the UFOs",
    "region": "São Paulo, Rio de Janeiro and nearby states, Brazil",
    "lat": -23.18,
    "lon": -45.88,
    "dateLabel": "19 May 1986",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Air force pilots, air traffic controllers and civilian pilots",
    "hook": "One night, Brazil's air defence radar tracked about 21 unknown objects, and fighter jets were sent up to chase them.",
    "summary": [
      "On the evening of 19 May 1986, radar operators in south-eastern Brazil began tracking unidentified objects over São Paulo, Rio de Janeiro, Minas Gerais and Goiás. Civilian pilots and air traffic controllers reported bright lights. In all, about 21 objects were reported.",
      "The Brazilian Air Force scrambled five fighter jets. Some pilots reported lights that kept pace with them or vanished as they approached. A few days later, the Minister of Aeronautics held a press conference with the pilots and confirmed the radar contacts."
    ],
    "explanation": "No official explanation was given at the time. Suggestions include planets and stars, radar effects caused by weather, and balloons. An air force report made public years later described the objects as real and solid, but did not identify them. In Brazil, 19 May is sometimes marked as 'Official UFO Night'.",
    "wiki": "1986 Brazilian UFO incident"
  },
  {
    "slug": "trindade-island-photos",
    "category": "sky",
    "title": "The Trindade Island Photographs",
    "region": "Trindade Island, South Atlantic, Brazil",
    "lat": -20.51,
    "lon": -29.32,
    "dateLabel": "16 January 1958",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "A photographer and crew aboard a Brazilian Navy ship",
    "hook": "From the deck of a navy ship, a photographer took four pictures of a ringed object flying around a remote Atlantic island.",
    "summary": [
      "On 16 January 1958, the Brazilian Navy ship Almirante Saldanha was at Trindade Island, a remote volcanic island in the South Atlantic, as part of a scientific programme. Almiro Baraúna, a photographer on board, took four photographs of an object shaped like the planet Saturn, flying around the island's peaks.",
      "Several crew members said they saw it too. Brazil's president, Juscelino Kubitschek, allowed the photos to be released, and they were published around the world."
    ],
    "explanation": "Sceptics argue the photos were a hoax by double exposure. Baraúna was known for trick photography and had earlier published fake UFO pictures as a joke. Others point to the crew witnesses and the navy's own investigation, which did not find a hoax.",
    "wiki": "Trindade Island UFO photographs"
  },
  {
    "slug": "bariloche-1995",
    "category": "sky",
    "title": "The Bariloche Incident",
    "region": "San Carlos de Bariloche, Río Negro, Argentina",
    "lat": -41.15,
    "lon": -71.16,
    "dateLabel": "31 July 1995",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Pilot Jorge Polanco, his crew and airport staff",
    "hook": "As an airliner came in to land at night, a bright light flew alongside it, and then every light in the city went out.",
    "summary": [
      "On the night of 31 July 1995, Aerolíneas Argentinas flight 674, a Boeing 727 with more than 100 people on board, was approaching Bariloche airport when the pilot, Jorge Polanco, saw a bright light approaching. He said it stopped about 100 metres from the plane and flew alongside it, matching its turns, for around 17 minutes.",
      "As he tried to land, the lights of the airport and the city went out. Staff in the control tower reported that instruments behaved strangely, and other witnesses on the ground said they saw lights."
    ],
    "explanation": "No explanation has been agreed. Suggestions include a bright planet or star, a reflection, and a military aircraft, with the power cut put down to coincidence. The pilot and several others insisted the light was a real object. The case appeared in US government files on unexplained phenomena released in 2026.",
    "wiki": null
  },
  {
    "slug": "chilean-navy-video",
    "category": "sky",
    "title": "The Chilean Navy Video",
    "region": "Off the coast near San Antonio, Valparaíso, Chile",
    "lat": -33.6,
    "lon": -71.7,
    "dateLabel": "11 November 2014",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Two Chilean Navy officers in a helicopter",
    "hook": "A Chilean Navy helicopter filmed an object trailing a strange plume over the sea, and the government's UFO committee couldn't identify it.",
    "summary": [
      "On 11 November 2014, two officers in a Chilean Navy helicopter filmed a flying object over the sea with an infrared camera. Through the camera it looked like a flat object with two hot spots, and at one point it released a long, dark plume.",
      "Chile's official committee for studying aerial phenomena, CEFAA, spent two years studying the video, consulting experts. Most members concluded they could not identify it, and the video was released in 2017 to international headlines."
    ],
    "explanation": "Soon after its release, researchers matched the object's position, throughout the video, to a passenger flight, Iberia IB6830, leaving Santiago. The 'hot spots' were its engines, and the plume was most likely a contrail. Most investigators now accept this explanation.",
    "wiki": null
  },
  {
    "slug": "ubatuba-fragments",
    "category": "sky",
    "title": "The Ubatuba Fragments",
    "region": "Ubatuba, São Paulo, Brazil",
    "lat": -23.43,
    "lon": -45.07,
    "dateLabel": "September 1957",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Unnamed fishermen, as described in an anonymous letter",
    "hook": "An anonymous letter to a Rio newspaper said a disc had exploded over the sea near Ubatuba, and it came with pieces of the debris.",
    "summary": [
      "In September 1957, a columnist at the Rio de Janeiro newspaper O Globo received an anonymous letter. The writer said that while fishing near Ubatuba, on the São Paulo coast, he and friends had watched a flying disc dive towards the sea, pull up, and explode in a shower of burning fragments. Enclosed were three small pieces of grey metal.",
      "The fragments were passed to Olavo Fontes, a doctor and UFO researcher, who had them analysed. A government laboratory reported that they were magnesium of unusually high purity."
    ],
    "explanation": "Later tests found the metal was not as pure as first claimed, and contained elements such as strontium, which some say points to ordinary manufacturing. The letter writer and the fishermen were never identified, which makes the story impossible to check. Researchers still debate how the fragments were made.",
    "wiki": "UFO sightings in Brazil"
  },
  {
    "slug": "barra-da-tijuca-photos",
    "category": "sky",
    "title": "The Barra da Tijuca Photographs",
    "region": "Barra da Tijuca, Rio de Janeiro, Brazil",
    "lat": -23.0,
    "lon": -43.37,
    "dateLabel": "May 1952",
    "status": "explained",
    "statusLabel": "Probably a hoax",
    "witnesses": "A journalist and a photographer from O Cruzeiro magazine",
    "hook": "Two magazine journalists said they saw a flying disc over a Rio beach, and published five photographs of it.",
    "summary": [
      "In May 1952, João Martins, a reporter for the popular Brazilian magazine O Cruzeiro, and photographer Ed Keffel said they saw a disc-shaped object fly over Barra da Tijuca, then a quiet stretch of coast outside Rio de Janeiro. Keffel said he took five photographs in about a minute.",
      "O Cruzeiro published the pictures, which sold out the issue and became the most famous UFO photos in Brazil."
    ],
    "explanation": "Analysts soon pointed out that the light and shadows on the disc didn't match the shadows on the ground below. Later studies of the photographs concluded they were faked, probably using a model, and many Brazilian researchers now consider the case a hoax.",
    "wiki": "UFO sightings in Brazil"
  },
  {
    "slug": "luz-mala",
    "category": "sky",
    "title": "The Luz Mala",
    "region": "The Pampas, Argentina",
    "lat": -34.5,
    "lon": -62.0,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Gauchos, farmers and travellers",
    "hook": "On dark nights across the Argentine plains, people speak of the luz mala, a light that rises from the ground and drifts away when followed.",
    "summary": [
      "In rural Argentina, Uruguay and Paraguay, people tell of the luz mala, the 'evil light': a glowing ball that appears low over fields and hills at night, especially in the Pampas and the hills of the north-west. It is said to drift, stop, and move away from anyone who follows it.",
      "Folk belief says it marks the place where treasure is buried, and that it is best left alone. Gauchos and farmers have passed the stories down for generations."
    ],
    "explanation": "Suggested explanations include gases from marshy ground catching fire, like the will-o'-the-wisp of Europe, glowing insects, distant headlights and mirages on the flat plains. No single explanation covers every account.",
    "wiki": "Luz mala"
  },
  {
    "slug": "pisco-earthquake-lights",
    "category": "sky",
    "title": "The Earthquake Lights over Lima",
    "region": "Lima, Peru",
    "lat": -12.07,
    "lon": -77.08,
    "dateLabel": "15 August 2007",
    "status": "explained",
    "statusLabel": "Partly explained",
    "witnesses": "Security cameras and residents across Lima",
    "hook": "As a great earthquake shook the coast of Peru, flashes of blue and white light lit up the sky over Lima.",
    "summary": [
      "On the evening of 15 August 2007, a powerful earthquake struck near Pisco, about 150 km south of Lima. As the ground shook in the capital, people saw bright flashes of light over the sea and the city, in blue, white and orange.",
      "Security cameras at a university, the airport and a seaside shopping centre filmed the lights. The videos spread around the world and became some of the clearest recordings ever made of 'earthquake lights'."
    ],
    "explanation": "Scientists studied the footage and confirmed that the lights were not caused by power lines or lightning. Earthquake lights have been reported for centuries, and the leading idea is that stress in certain rocks releases electrical charges that reach the surface. Exactly how this works is still being researched.",
    "wiki": "Earthquake light"
  },
  {
    "slug": "boitata",
    "category": "sky",
    "title": "The Boitatá",
    "region": "Southern Brazil",
    "lat": -29.5,
    "lon": -53.0,
    "dateLabel": "Recorded since 1560",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Rural communities across Brazil",
    "hook": "In Brazilian folklore, a fiery serpent glides over the fields at night, a living light that guards the land.",
    "summary": [
      "The boitatá, from Tupi words for 'fire snake', is a figure of Brazilian folklore: a great serpent of fire that moves across fields and marshes at night. In some stories it protects the land from those who set fires; in others, it chases travellers.",
      "The Jesuit José de Anchieta wrote in 1560 of fiery apparitions that Indigenous people called 'baetatá', which they feared and which 'appeared at night'."
    ],
    "explanation": "The boitatá is widely thought to be a folk explanation for natural lights seen over marshes and wet ground, such as the will-o'-the-wisp, caused by gases from rotting plants igniting. The legend lives on in festivals and children's stories.",
    "wiki": "Boitatá"
  },
  {
    "slug": "saci",
    "category": "creatures",
    "title": "The Saci",
    "region": "São Paulo state and across Brazil",
    "lat": -23.2,
    "lon": -46.9,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Generations of Brazilians",
    "hook": "Across Brazil, people blame a one-legged boy in a red cap for whirlwinds, lost things and tangled horses' manes.",
    "summary": [
      "The saci, or saci-pererê, is one of Brazil's best-loved folklore figures: a mischievous, one-legged boy with a red cap and a pipe, who travels in whirlwinds. He is blamed for spilled milk, hidden keys, burnt food and horses found with braided manes in the morning.",
      "In 1917, the writer Monteiro Lobato asked newspaper readers to send in their saci stories, and published the results as a book. Some Brazilians now celebrate 31 October as Saci Day."
    ],
    "explanation": "The saci is a figure of folklore, not a reported animal. Stories mixing Indigenous, African and European traditions have explained everyday mishaps for generations, and the saci remains a symbol of Brazilian culture.",
    "wiki": "Saci (Brazilian folklore)"
  },
  {
    "slug": "yacumama",
    "category": "creatures",
    "title": "The Yacumama",
    "region": "Amazon rivers near Iquitos, Peru",
    "lat": -3.75,
    "lon": -73.25,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "River communities of the Amazon",
    "hook": "Along the Amazon, people speak of the Yacumama, the mother of the waters: a serpent so large it can swallow a canoe.",
    "summary": [
      "In the Peruvian Amazon, river communities tell of the Yacumama, 'mother of the water', a vast serpent said to live at the mouths of rivers and in deep lakes. It is said to be dozens of metres long and able to pull in anything that passes with its breath.",
      "Travellers and rubber workers in the 19th and 20th centuries brought back stories of enormous snakes, and some claimed to have seen them."
    ],
    "explanation": "The legend is probably rooted in the green anaconda, the heaviest snake in the world, which can grow longer than 6 metres and lives in the same rivers. Reports of far larger snakes have never been confirmed. Many communities see the Yacumama as a spirit that protects the rivers.",
    "wiki": "Yacumama"
  },
  {
    "slug": "ucumar",
    "category": "creatures",
    "title": "The Ucumar",
    "region": "Salta, north-west Argentina",
    "lat": -24.8,
    "lon": -65.4,
    "dateLabel": "Reported for generations",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Rural residents and hikers",
    "hook": "In the mountain forests of north-west Argentina, people describe a large, hairy, upright creature they call the Ucumar.",
    "summary": [
      "In the forested hills and valleys of Salta and neighbouring provinces, local stories tell of the Ucumar: a large, shaggy, ape-like creature that walks on two legs and makes a call like 'uhu, uhu'. It is said to live in remote ravines and to come down to steal maize.",
      "In the 1950s, newspapers reported large human-like footprints in the Andes, and sightings have continued, including videos shared online in recent years."
    ],
    "explanation": "Many researchers think the Ucumar is a memory of the spectacled bear, which once lived in north-west Argentina, can stand upright and has shaggy dark fur. Others see it as a figure of local folklore. No body, bones or clear photographs have been found.",
    "wiki": "Ucumar"
  },
  {
    "slug": "cueva-del-milodon",
    "category": "creatures",
    "title": "The Milodón Cave",
    "region": "Near Puerto Natales, Magallanes, Chile",
    "lat": -51.57,
    "lon": -72.62,
    "dateLabel": "Skin found in 1895",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Explorers and scientists",
    "hook": "In a Patagonian cave, an explorer found a piece of fresh-looking hairy skin from a giant sloth. Scientists wondered if one was still alive.",
    "summary": [
      "In 1895, the German settler and explorer Hermann Eberhard found a large cave near what is now Puerto Natales, in southern Chile. Inside was a piece of thick skin, still covered in coarse hair and studded with small bones, that looked as though it came from a recently living animal.",
      "Scientists identified it as belonging to a mylodon, a giant ground sloth thought to have died out thousands of years earlier. Newspapers suggested the animal might still survive in the Patagonian wilderness, and the British newspaper the Daily Express paid for an expedition to find one."
    ],
    "explanation": "The expedition found no living sloth. Radiocarbon dating later showed the skin is around 10,000 years old, kept unusually fresh by the cold, dry conditions in the cave. The site is now a natural monument, with a life-size model of the sloth at its entrance.",
    "wiki": "Cueva del Milodón Natural Monument"
  },
  {
    "slug": "nahuelito",
    "category": "creatures",
    "title": "Nahuelito",
    "region": "Nahuel Huapi Lake, Río Negro, Argentina",
    "lat": -40.95,
    "lon": -71.5,
    "dateLabel": "Reported since the early 1900s",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Residents and visitors",
    "hook": "In a deep, cold lake in Patagonia, people report a long creature with humps moving through the water.",
    "summary": [
      "Nahuel Huapi is a large, deep glacial lake near Bariloche in Argentine Patagonia. Since the early 20th century, people have reported a large creature in it, usually described as having humps or a long neck. It is affectionately known as Nahuelito.",
      "Sightings have continued over the decades, and photographs said to show it have appeared in local newspapers, though none is clear."
    ],
    "explanation": "Suggested explanations include waves and wind patterns on the lake, floating logs, large fish and swimming animals. No physical evidence has been found. Nahuelito has become a local mascot, like the Loch Ness Monster in Scotland.",
    "wiki": "Nahuelito"
  },
  {
    "slug": "chavin-acoustics",
    "category": "voices",
    "title": "The Sounding Galleries of Chavín",
    "region": "Chavín de Huántar, Áncash, Peru",
    "lat": -9.59,
    "lon": -77.18,
    "dateLabel": "Temple used about 1200–500 BCE",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Archaeologists and acoustics researchers",
    "hook": "Beneath a 3,000-year-old Andean temple runs a maze of dark stone passages, built so that sound would travel through them strangely.",
    "summary": [
      "Chavín de Huántar, high in the Peruvian Andes, was a great religious centre around 3,000 years ago. Under its temples runs a network of narrow stone galleries, ducts and chambers, in near-total darkness.",
      "In 2001, archaeologists found 20 decorated conch-shell trumpets, called pututus, buried in one gallery. Water channels beneath the temple also roar when water runs through them."
    ],
    "explanation": "Acoustics researchers, including a team from Stanford University, have shown that the galleries carry and distort sound, so a trumpet blown in one place could seem to come from everywhere, or from the stone itself. Many archaeologists think the temple was designed to create an unsettling experience during rituals.",
    "wiki": "Chavín de Huántar"
  },
  {
    "slug": "serra-do-roncador",
    "category": "voices",
    "title": "The Snoring Mountains",
    "region": "Serra do Roncador, Mato Grosso, Brazil",
    "lat": -13.0,
    "lon": -52.0,
    "dateLabel": "Legends from the 1900s",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Explorers, settlers and spiritual seekers",
    "hook": "A remote range in central Brazil is named for the deep snoring sound the wind makes through its rocks, and legends say it hides lost cities.",
    "summary": [
      "The Serra do Roncador, the 'Snorer's Range', is a long line of rocky hills in Mato Grosso. It takes its name from the low, rumbling sound the wind makes as it passes through the gaps and caves in its rocks.",
      "In the 20th century, the area became the centre of legends about hidden cities, tunnels and lost civilisations. The British explorer Percy Fawcett was heading into this part of Brazil in search of a lost city he called 'Z' when he was last heard from in 1925."
    ],
    "explanation": "The roaring sound is caused by wind moving through the rock formations, a natural effect found in other rocky landscapes. No evidence of hidden cities has been found in the range, though archaeologists have since found large ancient settlements elsewhere in the region.",
    "wiki": "Serra do Roncador"
  },
  {
    "slug": "dionisio-llanca",
    "category": "visitors",
    "title": "The Dionisio Llanca Case",
    "region": "Near Bahía Blanca, Buenos Aires Province, Argentina",
    "lat": -38.72,
    "lon": -62.27,
    "dateLabel": "28 October 1973",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Truck driver Dionisio Llanca",
    "hook": "A young truck driver stopped at night to change a tyre, and was found hours later, unable to remember who he was.",
    "summary": [
      "Early on 28 October 1973, Dionisio Llanca, a 26-year-old truck driver, stopped on Route 3 near Bahía Blanca to change a flat tyre. Hours later he was found wandering in a confused state, unable to remember his name, and was taken to hospital.",
      "Over the following days, as his memory returned, and later under hypnosis, he described a yellow light, a craft hovering over the road, and three blond figures who took him aboard and took a sample of his blood."
    ],
    "explanation": "Doctors found him in a genuine state of shock and memory loss. Sceptics suggest he suffered a medical episode and that details were shaped by hypnosis and questioning. Supporters note that he was a quiet man with no interest in publicity.",
    "wiki": null
  },
  {
    "slug": "jose-antonio-da-silva",
    "category": "visitors",
    "title": "The Bebedouro Case",
    "region": "Bebedouro, Minas Gerais, Brazil",
    "lat": -19.0,
    "lon": -44.5,
    "dateLabel": "4–9 May 1969",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Soldier José Antônio da Silva",
    "hook": "A young soldier went fishing at a lagoon in Minas Gerais, and turned up four days later, hundreds of kilometres away.",
    "summary": [
      "On the afternoon of 4 May 1969, José Antônio da Silva, a 24-year-old soldier, was fishing at a lagoon near Bebedouro when, he said, small figures in metallic suits and helmets took him to a tall, cylindrical craft.",
      "He described a journey and a meeting with beings with long reddish hair. More than four days later, he found himself near Vitória, in Espírito Santo, hundreds of kilometres away, with no memory of how he got there. Researchers interviewed him at length."
    ],
    "explanation": "Sceptics suggest that da Silva experienced a period of memory loss or a dissociative episode, and that the story took shape afterwards. Investigators who met him found him sincere. How he travelled so far remains unexplained.",
    "wiki": null
  },
  {
    "slug": "friendship-island",
    "category": "visitors",
    "title": "Friendship Island",
    "region": "Chiloé Archipelago, Los Lagos, Chile",
    "lat": -42.6,
    "lon": -73.9,
    "dateLabel": "From 1985",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Radio enthusiasts and their families",
    "hook": "In 1985, a Chilean radio enthusiast began talking with voices who said they lived on a hidden island in the southern fjords.",
    "summary": [
      "In 1985, Octavio Ortiz, a radio enthusiast in Santiago, began picking up unusually clear messages on his citizens' band radio from a man who called himself Ariel. Ariel said he belonged to a group, Friendship, living on a hidden island among the fjords and channels of southern Chile.",
      "Over the following years, other people said they had received radio messages, food and help from the group, and that their boats had met ships from the island. The story grew into one of Chile's best-known mysteries."
    ],
    "explanation": "No island fitting the descriptions has been found, despite searches of the area. Sceptics suggest a long-running hoax or a group of people inventing a story together. Some who took part still say the contacts were real.",
    "wiki": null
  },
  {
    "slug": "pajarillo-mark",
    "category": "visitors",
    "title": "The Pajarillo Mark",
    "region": "Cerro El Pajarillo, Capilla del Monte, Córdoba, Argentina",
    "lat": -30.85,
    "lon": -64.52,
    "dateLabel": "January 1986",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "A local family and later visitors",
    "hook": "One night in 1986, a family saw a glowing object near a hill outside Capilla del Monte. Next morning, a huge burn mark lay on the hillside.",
    "summary": [
      "Capilla del Monte, in the hills of Córdoba, sits beneath Cerro Uritorco, a mountain famous across Argentina for reports of strange lights. In January 1986, a local family said they saw a bright object hovering near Cerro El Pajarillo, a smaller hill nearby.",
      "The next day, a large oval mark of scorched vegetation, roughly 100 metres across, was found on the hillside. Researchers, officials and television crews came to examine it, and the town became the centre of UFO tourism in Argentina."
    ],
    "explanation": "Some visitors reported unusual soil readings; others argued the mark was made by a fire, lightning or people, or that it was exaggerated. No official explanation settled the question. The town now celebrates its reputation, with UFO-themed shops and festivals.",
    "wiki": "Capilla del Monte"
  },
  {
    "slug": "kuhikugu-lost-city-z",
    "featured": true,
    "category": "places",
    "title": "The Real Lost City of Z",
    "region": "Upper Xingu, Mato Grosso, Brazil",
    "lat": -12.56,
    "lon": -53.11,
    "dateLabel": "Settled from about 1250 to 1650",
    "status": "explained",
    "statusLabel": "Partly confirmed",
    "witnesses": "Explorers, the Kuikuro people and archaeologists",
    "hook": "Explorer Percy Fawcett vanished in 1925 searching for a lost city in the Amazon. Archaeologists later found that something like it had existed.",
    "summary": [
      "In 1925, the British explorer Percy Fawcett set off into the Mato Grosso to find a lost city he called 'Z', and was never seen again. For decades, the idea of a great Amazon civilisation was dismissed: the rainforest, scientists said, could never have supported large populations.",
      "Working with the Kuikuro people of the Upper Xingu, the archaeologist Michael Heckenberger studied the area for years."
    ],
    "explanation": "In 2008, Heckenberger and colleagues published evidence of a network of large settlements in the Upper Xingu, linked by wide roads, with plazas, bridges, moats and farmland, home to many thousands of people between about 1250 and 1650. It was not a city of stone, but it was a real lost civilisation, much as Fawcett imagined.",
    "wiki": "Kuhikugu"
  },
  {
    "slug": "acre-geoglyphs",
    "category": "places",
    "title": "The Geoglyphs of Acre",
    "region": "Acre, Brazil",
    "lat": -10.0,
    "lon": -67.8,
    "dateLabel": "Built about 2,000 years ago",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Pilots, archaeologists and ranchers",
    "hook": "When the Amazon forest was cleared in western Brazil, huge geometric ditches appeared in the ground: perfect circles and squares, hundreds of metres across.",
    "summary": [
      "As forest was cleared for cattle ranches in the Brazilian state of Acre, people began to notice huge earthworks: deep ditches dug in perfect circles, squares and other shapes, some more than 300 metres across, often linked by straight roads. A palaeontologist, Alceu Ranzi, saw many from a plane in the late 1990s and drew attention to them.",
      "More than 450 are now known. For many people they came as a shock: the Amazon was supposed to be an untouched wilderness."
    ],
    "explanation": "Archaeologists date the earthworks to roughly 2,000 years ago. They appear to have been ceremonial sites rather than villages or forts. Studies of ancient pollen suggest the builders managed the forest around them rather than clearing it wholesale.",
    "wiki": "Amazon geoglyphs"
  },
  {
    "slug": "pedra-do-inga",
    "category": "places",
    "title": "The Ingá Stone",
    "region": "Ingá, Paraíba, Brazil",
    "lat": -7.28,
    "lon": -35.61,
    "dateLabel": "Age unknown",
    "status": "open",
    "statusLabel": "Meaning unknown",
    "witnesses": "Archaeologists and visitors",
    "hook": "Beside a river in north-eastern Brazil lies a long rock face covered in carved symbols that no one has been able to read.",
    "summary": [
      "The Pedra do Ingá is a gneiss rock formation about 24 metres long beside the Ingá River in Paraíba. Its surface is carved with hundreds of deep, carefully made symbols: spirals, lines, shapes like plants and animals, and others that resemble stars.",
      "Over the years, writers have claimed the carvings were made by Phoenicians, a lost civilisation or visitors from space."
    ],
    "explanation": "Archaeologists think the carvings were made by Indigenous peoples of the region, possibly thousands of years ago, though dating rock carvings is difficult. Their meaning is unknown: suggestions include astronomical records and ritual marks. It is a protected national heritage site.",
    "wiki": "Ingá Stone"
  },
  {
    "slug": "mount-roraima",
    "category": "places",
    "title": "Mount Roraima, the Lost World",
    "region": "Where Venezuela, Brazil and Guyana meet",
    "lat": 5.14,
    "lon": -60.76,
    "dateLabel": "Climbed in 1884; Conan Doyle's novel in 1912",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Explorers, scientists and the Pemón people",
    "hook": "A vast, sheer-sided plateau above the clouds inspired the story of a lost world where dinosaurs still lived.",
    "summary": [
      "Mount Roraima is a tepui, a flat-topped mountain with cliffs about 400 metres high, rising above the rainforest where Venezuela, Brazil and Guyana meet. Its top is often hidden in cloud. The Pemón people tell that it is the stump of a great tree, the mother of all rivers.",
      "After explorers first reached the summit in 1884, reports of its strange plants and isolated world helped inspire Arthur Conan Doyle's 1912 novel 'The Lost World', in which dinosaurs survive on a South American plateau."
    ],
    "explanation": "There are no dinosaurs on Roraima, but there is something real behind the idea: cut off by its cliffs, the summit has many plants and animals found nowhere else on Earth, including tiny black frogs and carnivorous plants.",
    "wiki": "Mount Roraima"
  },
  {
    "slug": "el-enladrillado",
    "category": "places",
    "title": "El Enladrillado",
    "region": "Altos de Lircay National Reserve, Maule, Chile",
    "lat": -35.6,
    "lon": -71.03,
    "dateLabel": "Known for generations",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Hikers and visitors",
    "hook": "High in the Chilean Andes lies a flat plateau of huge stone blocks, fitted together so neatly that people call it a landing strip.",
    "summary": [
      "El Enladrillado, 'the bricked place', is a plateau about 2,200 metres up in the Andes of the Maule Region. Its surface is made of more than 200 large stone blocks with flat tops and straight edges, fitted together like paving.",
      "It is one of the most popular stops on Chile's 'UFO trail' around San Clemente, and stories say it was built as a landing strip for craft from beyond Earth, or as an ancient altar."
    ],
    "explanation": "Geologists explain it as volcanic rock that cracked into regular blocks as it cooled, a natural process that also creates formations like the Giant's Causeway in Northern Ireland. Weather has since smoothed the surface.",
    "wiki": "Altos de Lircay National Reserve"
  },
  {
    "slug": "atacama-giant",
    "category": "places",
    "title": "The Atacama Giant",
    "region": "Cerro Unita, Tarapacá, Chile",
    "lat": -19.95,
    "lon": -69.63,
    "dateLabel": "Made about 1000–1400 CE",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Archaeologists and visitors",
    "hook": "On a bare hillside in the Atacama Desert, a giant figure with a rayed head stares up at the sky.",
    "summary": [
      "On the slope of Cerro Unita, in the Atacama Desert of northern Chile, is a huge human-like figure about 86 metres tall, made by arranging dark stones on the lighter ground. Its square head has rays coming from it, and it is best seen from a distance.",
      "Because of its odd, rectangular shape and rays, it is sometimes described as a robot or an astronaut."
    ],
    "explanation": "Archaeologists think it was made by local peoples between about 1000 and 1400 CE, perhaps as a deity or as a guide for caravans crossing the desert. Some researchers suggest the rays lined up with the moon to mark the seasons. It is one of thousands of geoglyphs in the Atacama.",
    "wiki": "Atacama Giant"
  },
  {
    "slug": "marcahuasi",
    "category": "places",
    "title": "The Stone Forest of Marcahuasi",
    "region": "Marcahuasi plateau, Lima region, Peru",
    "lat": -11.78,
    "lon": -76.58,
    "dateLabel": "Claims from the 1950s",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Hikers and visitors",
    "hook": "On a high Andean plateau, the rocks seem to have faces: a giant head, animals, figures watching over the valley.",
    "summary": [
      "Marcahuasi is a plateau about 4,000 metres up in the Andes east of Lima, covered in large granite rock formations. Many look like faces or animals, and the most famous, the 'Monument to Humanity', is said to show several human faces when seen from different angles.",
      "In the 1950s, the Peruvian writer Daniel Ruzo claimed the rocks were carved by a lost civilisation he called the Masma, and the site became popular with spiritual seekers."
    ],
    "explanation": "Geologists say the shapes were made by wind, rain and frost wearing down the granite unevenly. People naturally see faces in shapes, an effect called pareidolia, and the light at different times of day adds to it. No evidence of carving or of a lost civilisation has been found.",
    "wiki": "Marcahuasi"
  },
  {
    "slug": "aramu-muru",
    "category": "places",
    "title": "The Gate of Aramu Muru",
    "region": "Hayu Marka, near Juli, Puno, Peru",
    "lat": -16.17,
    "lon": -69.43,
    "dateLabel": "Carved in ancient times",
    "status": "explained",
    "statusLabel": "Legend",
    "witnesses": "Local communities and visitors",
    "hook": "Near Lake Titicaca, a giant doorway carved into a rock face leads nowhere. Legend says it was once a gateway to another world.",
    "summary": [
      "At Hayu Marka, near Lake Titicaca in southern Peru, a large doorway shape about 7 metres high and wide is carved into a natural wall of red rock. In its centre is a smaller, human-sized alcove.",
      "A local legend tells of an Inca priest, Aramu Muru, who fled the Spanish with a sacred golden disc and passed through the door, never to return. In recent decades, it has become known as a 'stargate' among spiritual tourists."
    ],
    "explanation": "Archaeologists see it as a carved shrine, possibly unfinished, made by local Andean peoples who often shaped natural rock into sacred places. There is no evidence of anything behind the carving. The legend of the priest is not recorded in early sources.",
    "wiki": null
  },
  {
    "slug": "ica-stones",
    "category": "places",
    "title": "The Ica Stones",
    "region": "Ica, Peru",
    "lat": -14.07,
    "lon": -75.73,
    "dateLabel": "Collected from the 1960s",
    "status": "explained",
    "statusLabel": "Hoax",
    "witnesses": "A doctor's collection and the farmer who made them",
    "hook": "A Peruvian doctor collected thousands of engraved stones that seemed to show ancient people hunting dinosaurs.",
    "summary": [
      "In the 1960s, Javier Cabrera, a doctor in Ica, began collecting andesite stones engraved with pictures, eventually gathering more than 11,000. Some showed people riding and fighting dinosaurs, using telescopes and performing surgery.",
      "Cabrera argued that the stones were the work of an advanced ancient civilisation that lived alongside dinosaurs, and opened a museum to display them."
    ],
    "explanation": "A local farmer, Basilio Uschuya, who had sold many of the stones, admitted in the 1970s that he carved them himself, copying pictures from comics and magazines, and showed reporters how he aged them. Archaeologists consider the dinosaur stones a hoax, though Peru does have genuine ancient engraved stones.",
    "wiki": "Ica stones"
  },
  {
    "slug": "samaipata",
    "category": "places",
    "title": "El Fuerte de Samaipata",
    "region": "Samaipata, Santa Cruz, Bolivia",
    "lat": -18.18,
    "lon": -63.82,
    "dateLabel": "Carved from about 300 CE",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Archaeologists and visitors",
    "hook": "A whole hill of red sandstone in Bolivia is covered in carved channels, seats and animals, and some say it was a landing pad.",
    "summary": [
      "Near the town of Samaipata in eastern Bolivia, the top of a long sandstone hill is carved with channels, niches, seats, steps and animal figures, including jaguars and snakes. It is one of the largest carved rocks in the world and a UNESCO World Heritage Site.",
      "Its parallel grooves have led to claims that it was a launch ramp or landing site for ancient flying craft."
    ],
    "explanation": "Archaeologists say it was a religious centre, carved and used first by local Chané peoples and later by the Inca, who built a town around it. The channels are thought to have carried water or offerings in ceremonies.",
    "wiki": "El Fuerte de Samaipata"
  },
  {
    "slug": "cano-cristales",
    "category": "places",
    "title": "Caño Cristales, the River of Five Colours",
    "region": "Serranía de la Macarena, Meta, Colombia",
    "lat": 2.27,
    "lon": -73.79,
    "dateLabel": "Every year, from about July to November",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Visitors and scientists",
    "hook": "For a few months each year, a river in Colombia turns red, yellow, green, blue and black.",
    "summary": [
      "Caño Cristales is a river in the Serranía de la Macarena, in central Colombia. For most of the year it looks like any clear mountain stream. But between roughly July and November, its bed bursts into colour: bright red and pink, with patches of yellow, green, blue and black.",
      "It is often called the most beautiful river in the world, or the liquid rainbow, and it was long hard to reach because of the region's conflicts."
    ],
    "explanation": "The red colour comes from a water plant, Macarenia clavigera, that grows on the rocks of the riverbed and turns red when the water level and sunlight are just right. Green algae, yellow sand and dark rock add the other colours.",
    "wiki": "Caño Cristales"
  },
  {
    "slug": "lake-parime",
    "category": "places",
    "title": "Lake Parime",
    "region": "Rupununi savannah, Guyana",
    "lat": 3.0,
    "lon": -59.5,
    "dateLabel": "On maps from the 1500s to the 1800s",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Explorers and mapmakers",
    "hook": "For more than two centuries, maps of South America showed a huge lake with a golden city on its shore. It wasn't there.",
    "summary": [
      "After the Spanish heard stories of El Dorado, a legend grew of a great inland lake called Parime in the Guiana highlands, with the golden city of Manoa on its shore. Sir Walter Raleigh searched for it in 1595.",
      "From the late 1500s, mapmakers drew a huge Lake Parime in the interior of South America, and it stayed on many maps until the early 1800s."
    ],
    "explanation": "Explorers including Alexander von Humboldt and later Robert Schomburgk found no such lake. The legend may have grown from the Rupununi savannah, which floods widely in the rainy season, forming large temporary lakes. There was never a golden city.",
    "wiki": "Lake Parime"
  },
  {
    "slug": "vilcabamba-longevity",
    "category": "places",
    "title": "Vilcabamba, the Valley of Long Life",
    "region": "Vilcabamba, Loja, Ecuador",
    "lat": -4.26,
    "lon": -79.22,
    "dateLabel": "Claims from the 1950s to the 1970s",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Villagers, journalists and scientists",
    "hook": "A valley in Ecuador became famous as a place where people lived to 120 or more. Then scientists checked the records.",
    "summary": [
      "In the mid-20th century, the village of Vilcabamba, in a green valley in southern Ecuador, became famous for its very old residents. Visiting journalists and doctors reported people claiming to be 120, 130 and even older, and the valley was called the 'valley of longevity'.",
      "Theories credited the mineral water, the climate, the diet and the slow pace of life, and the village attracted tourists and settlers seeking long lives."
    ],
    "explanation": "In the late 1970s, researchers who carefully checked birth and baptism records found that many elderly residents had exaggerated their ages, often adding years as they grew older, and none was found to be over 100. Vilcabamba is still a pleasant place to grow old.",
    "wiki": "Vilcabamba, Ecuador"
  },
  {
    "slug": "patagonian-giants",
    "category": "places",
    "title": "The Giants of Patagonia",
    "region": "Puerto San Julián, Santa Cruz, Argentina",
    "lat": -49.3,
    "lon": -67.73,
    "dateLabel": "1520 onwards",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Magellan's crew and later sailors",
    "hook": "When Magellan's ships landed in Patagonia in 1520, the crew reported meeting giants so tall that their heads barely reached the giants' waists.",
    "summary": [
      "In 1520, Ferdinand Magellan's expedition spent the winter at San Julián Bay in Patagonia. Antonio Pigafetta, who kept a record of the voyage, wrote that they met a man so tall that the Europeans came up only to his waist. Magellan's crew called the people Patagones.",
      "For the next 250 years, sailors' accounts and maps described Patagonia as a land of giants, and in 1766 reports from a British voyage again claimed people around 9 feet tall."
    ],
    "explanation": "The people they met were probably the Tehuelche, who were genuinely tall, often around 1.8 metres, while many European sailors of the time were much shorter. The reports were exaggerated in the retelling, and later expeditions measured ordinary, if tall, people.",
    "wiki": "Patagonian giants"
  },
  {
    "slug": "sasovo-explosion",
    "category": "voices",
    "title": "The Sasovo Explosion",
    "region": "Sasovo, Ryazan Oblast, Russia",
    "lat": 54.35,
    "lon": 41.92,
    "dateLabel": "12 April 1991",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Townspeople across Sasovo",
    "hook": "In the early hours of a spring night, a huge blast shook a Russian town, shattering windows, and left a crater in a field. No one has found a cause.",
    "summary": [
      "In the early morning of 12 April 1991, a powerful explosion shook the town of Sasovo, about 350 km south-east of Moscow. Windows broke across the town and people thought a bomb or even a nuclear blast had gone off.",
      "Nearby, investigators found a fresh crater about 30 metres wide and 3 metres deep. Some residents said they had seen glowing balls of light and heard rumbling in the hours before, and that radios crackled with interference just before the blast."
    ],
    "explanation": "No explosives, meteorite fragments or industrial cause were found. Many of the early theories have been dropped, and most researchers now suggest a sudden release of gas from deep underground, possibly hydrogen. It remains officially unexplained.",
    "wiki": null
  },
  {
    "slug": "kola-well-to-hell",
    "featured": true,
    "category": "voices",
    "title": "The Well to Hell",
    "region": "Kola Superdeep Borehole, Murmansk Oblast, Russia",
    "lat": 69.4,
    "lon": 30.61,
    "dateLabel": "Story spread from 1989",
    "status": "explained",
    "statusLabel": "Hoax",
    "witnesses": "No real witnesses",
    "hook": "A story spread that Soviet scientists drilling the deepest hole on Earth had lowered a microphone and recorded screams from below.",
    "summary": [
      "The Kola Superdeep Borehole, in the far north-west of Russia, is the deepest hole ever drilled. Soviet scientists bored more than 12 km into the Earth's crust, reaching their greatest depth in 1989.",
      "That year, a story spread through Christian newsletters and broadcasts in the West: the drillers had broken into a cavern, lowered a microphone and recorded the screams of the damned. An audio clip of the 'sounds of hell' later circulated widely."
    ],
    "explanation": "The story was invented and grew as it was retold. No such recording exists from the Kola project, and the audio clip was traced to a film soundtrack. What the scientists actually found was remarkable enough: water deep in the rock, microscopic fossils and temperatures of 180°C.",
    "wiki": "Kola Superdeep Borehole"
  },
  {
    "slug": "svetloyar-bells",
    "category": "voices",
    "title": "The Bells of Lake Svetloyar",
    "region": "Lake Svetloyar, Nizhny Novgorod Oblast, Russia",
    "lat": 56.82,
    "lon": 45.09,
    "dateLabel": "Legend recorded from the 1700s",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Pilgrims and visitors",
    "hook": "Legend says a holy city sank into a small Russian lake to escape invaders. On still nights, pilgrims say they can hear its bells.",
    "summary": [
      "Lake Svetloyar is a small, round, very deep lake in the forests east of Nizhny Novgorod. According to a legend first written down in the 18th century, the city of Kitezh, threatened by a Mongol army, sank beneath its waters rather than be captured, and lives on there, invisible.",
      "For centuries, pilgrims have spent nights by the lake hoping to hear the city's church bells ringing from under the water, or to glimpse its domes reflected on the surface. Many say they have."
    ],
    "explanation": "Kitezh is a legend, often called the Russian Atlantis, and inspired an opera by Rimsky-Korsakov. Sounds over still water carry a long way, and bells from distant churches may explain some reports. Geologists have studied the lake's unusual round basin, but found no city.",
    "wiki": "Kitezh"
  },
  {
    "slug": "sikhote-alin-meteorite",
    "featured": true,
    "category": "sky",
    "title": "The Sikhote-Alin Meteorite",
    "region": "Sikhote-Alin Mountains, Primorsky Krai, Russia",
    "lat": 46.16,
    "lon": 134.65,
    "dateLabel": "12 February 1947",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Thousands across the Russian Far East",
    "hook": "One winter morning, a fireball brighter than the sun crossed the sky over the Russian Far East, and iron rained down on the mountains.",
    "summary": [
      "Late on the morning of 12 February 1947, people in the Russian Far East saw a fireball brighter than the sun streak across the sky, leaving a smoke trail that hung in the air for hours. Moments later came a deafening roar.",
      "In the snowy Sikhote-Alin mountains, an iron meteorite had broken apart in the air and showered the forest with fragments, blasting more than a hundred craters."
    ],
    "explanation": "Scientists from the Soviet Academy of Sciences reached the site and recovered more than 20 tonnes of iron meteorite. It is one of the largest meteorite falls ever witnessed, and pieces are now in museums and collections worldwide. A Soviet stamp marked its tenth anniversary.",
    "wiki": "Sikhote-Alin meteorite"
  },
  {
    "slug": "vitim-bolide",
    "category": "sky",
    "title": "The Vitim Fireball",
    "region": "Bodaybo district, Irkutsk Oblast, Russia",
    "lat": 58.2,
    "lon": 113.4,
    "dateLabel": "24–25 September 2002",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Residents of remote Siberian villages; US satellites",
    "hook": "Late at night in remote Siberia, a brilliant light lit up the sky, and villagers heard a roar and felt the ground shake.",
    "summary": [
      "Around midnight on 24 to 25 September 2002, people in the remote Bodaybo district of Siberia, near the Vitim River, saw an intense flash light up the sky, followed by a roar and a shaking of the ground.",
      "US military satellites recorded the flash. Because the area was so remote, it took time for expeditions to reach it, and stories spread comparing it to the Tunguska event of 1908."
    ],
    "explanation": "Scientists concluded that a small asteroid or meteoroid exploded in the atmosphere, releasing energy equal to a small nuclear explosion. Expeditions found areas of damaged forest but no large fragments. Some unusual theories still circulate, but most scientists accept the airburst explanation.",
    "wiki": "Vitim event"
  },
  {
    "slug": "dalnegorsk-height-611",
    "category": "visitors",
    "title": "Height 611",
    "region": "Dalnegorsk, Primorsky Krai, Russia",
    "lat": 44.55,
    "lon": 135.57,
    "dateLabel": "29 January 1986",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Residents of Dalnegorsk",
    "hook": "A glowing red sphere crossed the sky over a Russian mining town and crashed into a hill. Scientists who climbed up found strange metal beads.",
    "summary": [
      "On the evening of 29 January 1986, people in Dalnegorsk, a mining town in the Russian Far East, watched a reddish glowing sphere fly silently and slowly across the sky, then fall onto a hill known as Height 611. Witnesses said there was a flash and a fire.",
      "When researchers reached the site, they found a small patch of scorched rock and burnt wood, surrounded by tiny metal beads, fine mesh-like fragments and droplets of metal. The case became known as Russia's Roswell."
    ],
    "explanation": "Analyses found the beads were made of common elements such as lead, iron and silicon, with traces of others. Suggestions include a meteorite, ball lightning, a piece of space debris or a weather probe. Researchers have never agreed on what fell on Height 611.",
    "wiki": "Height 611 UFO incident"
  },
  {
    "slug": "molebka-triangle",
    "category": "visitors",
    "title": "The Molebka Triangle",
    "region": "Near Molebka, Perm Krai, Russia",
    "lat": 57.65,
    "lon": 58.15,
    "dateLabel": "Reports since the 1980s",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Geologists, researchers and visitors",
    "hook": "In a forest in the Urals, a geologist found a perfect circle in the snow. The area soon became Russia's most famous UFO zone.",
    "summary": [
      "In 1983, Emil Bachurin, a geologist from Perm, was hunting in the forests near the village of Molebka, in the Ural region, when he said he found a large, perfectly round track in the snow, about 60 metres across. He returned with researchers to study the area.",
      "When the story reached the press in 1989, the 'M-Triangle' became famous. Visitors have reported lights in the sky, glowing spheres, and odd feelings in the woods, and it now draws researchers and tourists each summer."
    ],
    "explanation": "No physical evidence has been found that clearly points to anything unusual. Sceptics say that once a place is known for strange events, visitors expecting to see something interpret ordinary lights, sounds and feelings that way. Supporters point to the number of reports.",
    "wiki": "Molebka"
  },
  {
    "slug": "labynkyr-devil",
    "category": "creatures",
    "title": "The Labynkyr Devil",
    "region": "Lake Labynkyr, Yakutia, Russia",
    "lat": 62.5,
    "lon": 143.6,
    "dateLabel": "Told for generations; reported in 1953",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Local Evenk and Yakut people; Soviet geologists",
    "hook": "In one of the coldest places on Earth, the people of Yakutia speak of a huge, dark creature living in a deep lake.",
    "summary": [
      "Lake Labynkyr lies in the Oymyakon area of Yakutia, one of the coldest inhabited regions on Earth, and stays frozen for much of the year. Local people have long told of a large dark creature in the lake, which they call the Labynkyr devil.",
      "In 1953, Soviet geologist Viktor Tverdokhlebov, working at the nearby Lake Vorota, wrote that he saw a large animal, the size of an orca, swimming towards the shore. In 2012, a researcher said sonar picked up large objects underwater in Labynkyr."
    ],
    "explanation": "The lake is deep and cold, with fish that could grow large. Suggested explanations include giant pike, a large seal or a story that grew among outsiders. Scientists point out that the lake could not feed a large animal through the long winters. No clear photographs or remains have been found.",
    "wiki": "Labynkyr Lake"
  },
  {
    "slug": "brosno-dragon",
    "category": "creatures",
    "title": "The Brosno Dragon",
    "region": "Lake Brosno, Tver Oblast, Russia",
    "lat": 56.83,
    "lon": 32.94,
    "dateLabel": "Legends for centuries; reports since the 1990s",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Villagers, fishermen and visitors",
    "hook": "In a deep lake west of Moscow, villagers speak of a dragon that rises from the water and sinks again.",
    "summary": [
      "Lake Brosno is a deep lake in the forests of Tver Oblast, west of Moscow. Local legends going back centuries tell of a dragon-like creature living in it.",
      "In the 1990s, new reports came in from fishermen and holidaymakers of a large animal with a long neck, of strange disturbances in the water, and of boats rocked by something below. Expeditions with sonar have searched the lake."
    ],
    "explanation": "Researchers who studied the lake suggest that gas, such as hydrogen sulphide from rotting matter on the deep lake bed, sometimes rises in large bubbles, churning the surface and making waves. Large fish, floating logs and swimming animals may explain other sightings.",
    "wiki": "Brosno dragon"
  },
  {
    "slug": "almasty",
    "category": "creatures",
    "title": "The Almasty",
    "region": "North Caucasus, Kabardino-Balkaria, Russia",
    "lat": 43.5,
    "lon": 43.4,
    "dateLabel": "Reported for generations",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Villagers and herders; researcher Marie-Jeanne Koffmann",
    "hook": "In the mountain villages of the Caucasus, people describe a wild, hairy figure that steals from orchards and braids horses' manes.",
    "summary": [
      "In the North Caucasus, villagers tell of the almasty, a tall, hairy, human-like being that lives in the forests and mountains. It is said to raid gardens and orchards at night and to tangle the manes of horses.",
      "For decades from the 1950s, the French-born doctor Marie-Jeanne Koffmann collected hundreds of accounts from people in the region who said they had seen it, and led expeditions to find it."
    ],
    "explanation": "No body, bones or clear photographs have been found. Sceptics suggest bears, people living wild, and folklore. Some researchers have suggested a surviving relative of early humans, which most scientists consider very unlikely.",
    "wiki": "Almas (cryptozoology)"
  },
  {
    "slug": "kemerovo-yeti",
    "category": "creatures",
    "title": "The Kemerovo Yeti",
    "region": "Azasskaya Cave, Mountain Shoria, Kemerovo Oblast, Russia",
    "lat": 52.77,
    "lon": 87.87,
    "dateLabel": "October 2011",
    "status": "explained",
    "statusLabel": "Probably a publicity stunt",
    "witnesses": "Conference participants and local officials",
    "hook": "In 2011, a Siberian region announced it had 'indisputable proof' that yetis lived in its mountains.",
    "summary": [
      "In October 2011, the government of Kemerovo Oblast, a coal-mining region in Siberia, held an international conference on the yeti and took researchers to Azasskaya Cave in the Mountain Shoria area. Officials then announced they had found 'indisputable proof' that the yeti lived there: footprints, a possible bed and a few grey hairs.",
      "The story went around the world, and local people had long told of a wild man in the forests."
    ],
    "explanation": "Scientists who attended said the evidence was unconvincing, and one said there had been no proper expedition at all. Many observers saw it as a publicity stunt to attract tourists to the region, and visitor numbers to the cave did rise. No tests on the hairs have confirmed an unknown animal.",
    "wiki": "Yeti"
  },
  {
    "slug": "patomskiy-crater",
    "category": "places",
    "title": "The Patomskiy Crater",
    "region": "Patom Highlands, Irkutsk Oblast, Russia",
    "lat": 59.29,
    "lon": 116.59,
    "dateLabel": "Found in 1949",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Geologist Vadim Kolpakov and later expeditions",
    "hook": "Deep in the Siberian forest stands a cone of broken limestone with a crater on top, and no one is sure how it got there.",
    "summary": [
      "In 1949, geologist Vadim Kolpakov came upon a strange mound in the remote Patom Highlands: a cone of broken limestone about 40 metres high and 160 metres across, with a ring-shaped trench at the top and a smaller mound in its centre.",
      "Local Yakut people avoided it, calling it the 'fiery eagle's nest'. Trees growing on it suggest it is a few hundred years old."
    ],
    "explanation": "A meteorite impact was first suspected, and some linked it to the Tunguska event, but no meteorite material has been found. Volcanic activity is unlikely because no volcanic rock is present. Most researchers now suggest a sudden release of gas or fluid from deep underground pushed up the broken rock.",
    "wiki": "Patomskiy crater"
  },
  {
    "slug": "arkaim",
    "category": "places",
    "title": "Arkaim",
    "region": "Chelyabinsk Oblast, southern Urals, Russia",
    "lat": 52.65,
    "lon": 59.57,
    "dateLabel": "About 4,000 years old; found in 1987",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Archaeologists, visitors and spiritual seekers",
    "hook": "On the steppe of the southern Urals, archaeologists found a 4,000-year-old ringed settlement just before it was due to be flooded.",
    "summary": [
      "In 1987, archaeologists surveying land in the southern Urals, which was about to be flooded for a reservoir, found the remains of a circular fortified settlement with two rings of walls and houses around a central square. It was about 4,000 years old.",
      "Arkaim was saved from flooding, and it has since become both an important archaeological site and a magnet for spiritual seekers, who claim it has healing energies, astronomical secrets or links to lost civilisations."
    ],
    "explanation": "Archaeologists see it as one of many fortified settlements of the Bronze Age Sintashta culture, known for early chariots and metalworking. There is no scientific evidence for the energy claims. It is now a protected reserve.",
    "wiki": "Arkaim"
  },
  {
    "slug": "manpupuner",
    "category": "places",
    "title": "The Stone Giants of Manpupuner",
    "region": "Manpupuner plateau, Komi Republic, Russia",
    "lat": 62.22,
    "lon": 59.3,
    "dateLabel": "Ancient legend",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Mansi people, hikers and visitors",
    "hook": "On a remote plateau in the northern Urals stand seven stone pillars. The Mansi people say they are giants turned to stone.",
    "summary": [
      "On the Manpupuner plateau in the northern Urals, seven rock pillars between about 30 and 42 metres tall stand in a row, far from any road. Their name in the Mansi language means 'small mountain of idols'.",
      "A Mansi legend says six giants were chasing the Mansi people across the mountains, when a shaman turned them to stone, and himself with them."
    ],
    "explanation": "Geologists say the pillars are made of hard rock that resisted erosion while softer rock around them was worn away by wind, frost and rain over hundreds of millions of years. They are one of the Seven Wonders of Russia, chosen in a national vote in 2008.",
    "wiki": "Manpupuner rock formations"
  },
  {
    "slug": "baikal-ice-rings",
    "category": "places",
    "title": "The Rings in the Ice of Baikal",
    "region": "Lake Baikal, Russia",
    "lat": 51.8,
    "lon": 105.4,
    "dateLabel": "Seen from space since 2009",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Astronauts and satellite images",
    "hook": "From space, astronauts saw huge dark rings, several kilometres wide, in the ice of the world's deepest lake.",
    "summary": [
      "In April 2009, photographs from the International Space Station and satellites showed giant dark rings in the ice of Lake Baikal in Siberia, each about 4 to 7 km across. Similar rings have since been spotted in other years.",
      "The images went around the world, and speculation ranged from gas eruptions to something landing on the ice."
    ],
    "explanation": "A study led by scientists in France and Russia found that the rings form above slow, swirling eddies of warmer water beneath the ice. The warmer water thins the ice in a ring, making it darker. The eddies can be predicted, which matters for people who drive across the ice in winter.",
    "wiki": "Lake Baikal"
  },
  {
    "slug": "yamal-craters",
    "category": "places",
    "title": "The Yamal Craters",
    "region": "Yamal Peninsula, Russia",
    "lat": 69.97,
    "lon": 68.37,
    "dateLabel": "First found in 2014",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Helicopter pilots and scientists",
    "hook": "In 2014, helicopter pilots in Arctic Siberia spotted a giant hole in the tundra that hadn't been there before.",
    "summary": [
      "In July 2014, helicopter pilots flying over the Yamal Peninsula in Arctic Siberia spotted a huge, deep, round crater in the tundra, about 30 metres wide, with soil scattered around its rim as if blasted out. It made news worldwide, with theories ranging from a meteorite to a missile.",
      "Since then, around 20 similar craters have been found in the region."
    ],
    "explanation": "Scientists have concluded that the craters form when methane gas builds up under mounds of frozen ground as the permafrost thaws, until the pressure becomes too great and the ground bursts. Warmer summers in the Arctic are thought to be making them more common.",
    "wiki": null
  },
  {
    "slug": "batagaika-crater",
    "featured": true,
    "category": "places",
    "title": "The Batagaika Crater",
    "region": "Verkhoyansk district, Yakutia, Russia",
    "lat": 67.58,
    "lon": 134.77,
    "dateLabel": "Growing since the 1960s",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Local people and scientists",
    "hook": "Local people call it a doorway to the underworld: a vast, growing scar in the Siberian ground, nearly a kilometre wide.",
    "summary": [
      "Near the village of Batagay in Yakutia lies a huge crater shaped like a tadpole, nearly a kilometre wide and getting bigger every year. Its walls of frozen earth slump and collapse each summer, and local Yakut people call it a doorway to the underworld.",
      "As it grows, it reveals ancient layers of frozen soil, along with the remains of long-dead animals."
    ],
    "explanation": "It is a 'megaslump' caused by thawing permafrost. After forest was cleared in the 1960s, the ground warmed in summer, and the ice in the soil began to melt, so the land collapsed. Scientists study it because its walls hold a record of climate going back hundreds of thousands of years.",
    "wiki": "Batagaika crater"
  },
  {
    "slug": "kumburgaz-ufo",
    "category": "sky",
    "title": "The Kumburgaz Videos",
    "region": "Kumburgaz, Istanbul, Türkiye",
    "lat": 41.02,
    "lon": 28.47,
    "dateLabel": "2007 – 2009",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Night watchman Yalçın Yalman",
    "hook": "Over many nights, a night watchman on the Sea of Marmara filmed glowing objects that, zoomed in, seemed to show shapes inside.",
    "summary": [
      "Between 2007 and 2009, Yalçın Yalman, a night watchman at a holiday complex in Kumburgaz on the Sea of Marmara near Istanbul, filmed bright objects over the water on many nights. Zoomed in, some of the footage appears to show disc-shaped objects, and some viewers say they can see figures inside.",
      "A Turkish UFO research group released the videos, and a Turkish scientific body was reported to have found no signs of digital editing. The footage drew international attention."
    ],
    "explanation": "Sceptics suggest the objects were planets, stars or lights on ships, made to look strange by the camera's zoom and focus, or that some footage was staged with models. No independent analysis has settled what the videos show.",
    "wiki": null
  },
  {
    "slug": "kuwait-1978",
    "category": "sky",
    "title": "The Kuwait Oil Field Sighting",
    "region": "Northern oil fields, Kuwait",
    "lat": 29.85,
    "lon": 47.68,
    "dateLabel": "November – December 1978",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Kuwait Oil Company technicians and others",
    "hook": "Oil workers in Kuwait watched a large, domed object hover over their oil field, and the pumping equipment stopped by itself.",
    "summary": [
      "On 9 November 1978, technicians at a Kuwait Oil Company field in the north of the country reported a large, cylindrical object with a dome and a flashing red light hovering nearby for several minutes. A senior company official later told US diplomats that the automatic pumps shut down while it was there, and started again by themselves afterwards.",
      "More sightings followed over the next weeks, and the Kuwaiti government set up a committee of experts from the Kuwait Institute for Scientific Research to investigate."
    ],
    "explanation": "The committee concluded the objects were not spy aircraft, but did not say what they were. Suggestions include atmospheric effects, misidentified aircraft and coincidental equipment faults. The case is known mainly through press reports and US embassy cables released later.",
    "wiki": null
  },
  {
    "slug": "lake-van-monster",
    "category": "creatures",
    "title": "The Lake Van Monster",
    "region": "Lake Van, Türkiye",
    "lat": 38.63,
    "lon": 42.9,
    "dateLabel": "Reports since 1995",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Residents and a university assistant",
    "hook": "In Türkiye's largest lake, people say they have seen a huge dark creature rise from the salty water.",
    "summary": [
      "Lake Van, in eastern Türkiye, is a vast salty lake surrounded by mountains. From the mid-1990s, people began reporting a large, dark creature in the water, and newspapers named it the Lake Van Monster.",
      "In 1997, Ünal Kozak, a teaching assistant at the local university, released a video he said showed the creature swimming near the surface, which was shown around the world."
    ],
    "explanation": "Scientists point out that Lake Van's very salty, alkaline water supports few fish, and could not feed a large animal. Analysts of the video questioned whether it showed a model or something being towed. Some local people saw the whole story as a way to attract tourists.",
    "wiki": "Lake Van Monster"
  },
  {
    "slug": "anunnaki-claims",
    "category": "visitors",
    "title": "The Anunnaki of Sumer",
    "region": "Nippur, ancient Sumer, Iraq",
    "lat": 32.13,
    "lon": 45.23,
    "dateLabel": "Claims since 1976",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "A writer, and the scholars who disagreed",
    "hook": "A writer claimed that ancient Sumerian texts told of gods from a hidden planet who came to Earth and made humans.",
    "summary": [
      "The Sumerians of southern Iraq, one of the world's first civilisations, wrote on clay tablets about a family of gods called the Anunnaki.",
      "In 1976, the writer Zecharia Sitchin published 'The 12th Planet', claiming that Sumerian texts described a hidden planet, Nibiru, whose people, the Anunnaki, came to Earth to mine gold and created humans to work for them. His books sold millions of copies and inspired a large following."
    ],
    "explanation": "Scholars who read Sumerian say Sitchin mistranslated the texts. In Sumerian religion, the Anunnaki are gods, and the tablets describe no hidden planet. The 'Nibiru' idea has since been linked to repeated end-of-the-world predictions, none of which came true.",
    "wiki": "Anunnaki"
  },
  {
    "slug": "baalbek-stones",
    "featured": true,
    "category": "places",
    "title": "The Giant Stones of Baalbek",
    "region": "Baalbek, Lebanon",
    "lat": 34.01,
    "lon": 36.2,
    "dateLabel": "Temples built 1st–3rd century CE",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Visitors, engineers and archaeologists",
    "hook": "The temples of Baalbek rest on stone blocks so huge that some have claimed no ancient people could have moved them.",
    "summary": [
      "Baalbek, in Lebanon's Beqaa Valley, has some of the largest Roman temples ever built. The Temple of Jupiter stands on a platform that includes three enormous stone blocks, the 'trilithon', each weighing around 800 tonnes.",
      "In the nearby quarry lie even bigger blocks, cut but never moved, including the Stone of the Pregnant Woman and another found in 2014, which may weigh more than 1,600 tonnes. They have become a favourite subject of books about ancient visitors from space."
    ],
    "explanation": "Archaeologists say the Romans quarried and moved the stones using levers, ramps, rollers and capstans worked by large teams. The blocks left in the quarry show the work in progress. Engineering studies suggest the methods were demanding but entirely possible.",
    "wiki": "Baalbek"
  },
  {
    "slug": "baghdad-battery",
    "category": "places",
    "title": "The Baghdad Battery",
    "region": "Khujut Rabu, near Baghdad, Iraq",
    "lat": 33.3,
    "lon": 44.4,
    "dateLabel": "About 2,000 years old; found in 1936",
    "status": "disputed",
    "statusLabel": "Mostly explained",
    "witnesses": "Archaeologists",
    "hook": "A small clay jar found near Baghdad, with a copper tube and an iron rod inside, was claimed to be a battery 2,000 years old.",
    "summary": [
      "In 1936, a small clay jar was found near Baghdad, dating from the Parthian or Sasanian period, roughly 2,000 years ago. Inside was a copper cylinder and an iron rod, which had corroded.",
      "In 1938, the German archaeologist Wilhelm König suggested it was a galvanic battery, perhaps used for electroplating. Replicas filled with vinegar or grape juice can produce a small electric current, and the idea became famous."
    ],
    "explanation": "Most archaeologists think the jar was a container for storing sacred scrolls, as similar jars from the region held rolled-up papyrus. No wires or other electrical equipment have been found with it, and ancient electroplating has not been confirmed.",
    "wiki": "Baghdad Battery"
  },
  {
    "slug": "al-naslaa",
    "category": "places",
    "title": "Al Naslaa Rock",
    "region": "Tayma oasis, Tabuk Province, Saudi Arabia",
    "lat": 27.65,
    "lon": 38.55,
    "dateLabel": "Ancient",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Visitors and geologists",
    "hook": "In the Saudi desert, a great sandstone rock is split down the middle by a crack so straight it looks as if it was cut with a laser.",
    "summary": [
      "Near the Tayma oasis in north-western Saudi Arabia stands Al Naslaa, a sandstone outcrop about 6 metres tall, divided into two halves by a perfectly straight, narrow gap. The two halves balance on small natural pedestals. Ancient carvings of horses and people decorate one side.",
      "Photographs of it spread widely online, with claims that it must have been cut by people or by an ancient laser."
    ],
    "explanation": "Geologists say the rock split along a natural weakness, a joint or fault line, and that wind carrying sand then smoothed the crack. Such straight cracks are common in sandstone. The pedestals were carved out by wind erosion at ground level.",
    "wiki": "Al Naslaa rock formation"
  },
  {
    "slug": "derinkuyu",
    "featured": true,
    "category": "places",
    "title": "The Underground City of Derinkuyu",
    "region": "Derinkuyu, Nevşehir, Cappadocia, Türkiye",
    "lat": 38.37,
    "lon": 34.73,
    "dateLabel": "Rediscovered in 1963",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "A homeowner, then archaeologists",
    "hook": "In 1963, a man renovating his house in Cappadocia knocked through a wall and found a tunnel leading to an underground city.",
    "summary": [
      "In 1963, a resident of Derinkuyu in central Türkiye was renovating his home when he broke through a wall and found a hidden passage. It led into a vast underground city carved into the soft volcanic rock, reaching around 85 metres deep, with many levels.",
      "The city has rooms for living, stables, chapels, wells, ventilation shafts and huge rolling stone doors that could be closed from the inside. It could shelter thousands of people and their animals."
    ],
    "explanation": "Historians think the tunnels were begun around the first millennium BCE and greatly expanded in Byzantine times, when local people needed refuge from raids. Cappadocia has many such underground cities. Its scale is astonishing, but it was clearly the work of people.",
    "wiki": "Derinkuyu underground city"
  },
  {
    "slug": "chimaera-flames",
    "category": "places",
    "title": "The Eternal Flames of Chimaera",
    "region": "Yanartaş, near Olympos, Antalya, Türkiye",
    "lat": 36.43,
    "lon": 30.46,
    "dateLabel": "Burning for thousands of years",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Ancient sailors and modern visitors",
    "hook": "On a hillside on the Turkish coast, flames burn straight out of the rock, and have done for thousands of years.",
    "summary": [
      "At Yanartaş, on a rocky hillside above the Mediterranean in southern Türkiye, dozens of small fires burn constantly from cracks in the ground. Ancient sailors used them as a landmark at night.",
      "The ancient Greeks linked the place to the Chimera, a fire-breathing monster slain by the hero Bellerophon, and the site is still known as Chimaera."
    ],
    "explanation": "The flames are fed by natural gas, mostly methane, seeping from deep underground through the rock and igniting. Scientists have studied the site because the gas forms in an unusual way, without living matter. The fires have burned for at least 2,500 years.",
    "wiki": "Yanartaş"
  },
  {
    "slug": "well-of-barhout",
    "category": "places",
    "title": "The Well of Barhout",
    "region": "Al-Mahra Governorate, Yemen",
    "lat": 16.1,
    "lon": 51.0,
    "dateLabel": "Legend for centuries; explored in 2021",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Local people; Omani cave explorers",
    "hook": "In the Yemeni desert lies a vast hole that legend called the Well of Hell, a prison for jinn. In 2021, cavers finally went down.",
    "summary": [
      "In the desert of al-Mahra, in eastern Yemen, a round sinkhole about 30 metres wide plunges into darkness. Local legend called it the Well of Hell or the prison of the jinn, and said that anything that went in would not come back, and that strange smells rose from it. Few people dared approach.",
      "In September 2021, a team of cave explorers from Oman climbed down to the bottom, about 112 metres below, for the first time."
    ],
    "explanation": "They found a natural limestone cave with waterfalls, stalagmites and glittering cave pearls, along with snakes, beetles, toads and the remains of animals that had fallen in, which explained the smells. The team called it 'magnificent'. Its age and how it formed are now being studied.",
    "wiki": "Well of Barhout"
  },
  {
    "slug": "gobekli-tepe",
    "featured": true,
    "category": "places",
    "title": "Göbekli Tepe",
    "region": "Near Şanlıurfa, Türkiye",
    "lat": 37.22,
    "lon": 38.92,
    "dateLabel": "Built about 11,500 years ago",
    "status": "explained",
    "statusLabel": "Partly explained",
    "witnesses": "Archaeologists",
    "hook": "On a hill in south-east Türkiye, archaeologists found giant carved stone pillars set up thousands of years before farming began.",
    "summary": [
      "Göbekli Tepe is a hilltop site near Şanlıurfa. Excavations led by Klaus Schmidt from 1995 uncovered circles of huge T-shaped stone pillars, some over 5 metres tall, carved with foxes, boars, snakes, vultures and human arms and hands.",
      "The site is about 11,500 years old, older than Stonehenge by around 6,000 years, and was built by people who had not yet started farming. That overturned the idea that monuments came only after agriculture and settled towns."
    ],
    "explanation": "Archaeologists agree it was built by hunter-gatherers, using stone tools. What it was for is still debated: a ritual centre, a place for gatherings and feasts, or a settlement with special buildings. It shows that early people were capable of far more than once thought.",
    "wiki": "Göbekli Tepe"
  },
  {
    "slug": "rig-e-jenn",
    "category": "places",
    "title": "Rig-e Jenn, the Dunes of the Jinn",
    "region": "Dasht-e Kavir, between Semnan and Isfahan, Iran",
    "lat": 34.4,
    "lon": 53.6,
    "dateLabel": "Legend for centuries",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Caravan travellers and explorers",
    "hook": "In the middle of Iran's great salt desert lies a sea of dunes that caravans refused to cross, believing it belonged to the jinn.",
    "summary": [
      "Rig-e Jenn, 'the dunes of the jinn', is a vast area of sand dunes in the heart of the Dasht-e Kavir, Iran's great salt desert. Old caravan routes went around it rather than through it: travellers believed it was home to jinn and evil spirits, and that those who entered would be lost.",
      "Even the Swedish explorer Sven Hedin, who crossed many of Asia's deserts, avoided it in the early 1900s. Only a handful of expeditions have crossed it since."
    ],
    "explanation": "Its reputation probably comes from real danger: shifting dunes, salt marsh that can trap people and animals, extreme heat, and no water. Sounds of wind and moving sand at night may have added to the legend. It is now visited by a few desert tour groups.",
    "wiki": "Rig-e Jenn"
  },
  {
    "slug": "piri-reis-map",
    "category": "places",
    "title": "The Piri Reis Map",
    "region": "Topkapı Palace, Istanbul, Türkiye",
    "lat": 41.01,
    "lon": 28.98,
    "dateLabel": "Drawn in 1513; found in 1929",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Historians and map experts",
    "hook": "A map drawn by an Ottoman admiral in 1513 was claimed to show the coast of Antarctica, centuries before it was discovered.",
    "summary": [
      "In 1929, historians at Topkapı Palace in Istanbul found part of a world map drawn on gazelle skin in 1513 by Piri Reis, an Ottoman admiral and mapmaker. It shows the Atlantic coasts of Europe, Africa and South America, and notes that it was based on older maps, including one by Columbus.",
      "In the 1960s, a writer claimed the bottom of the map showed the coast of Antarctica without its ice, which would mean someone had mapped it thousands of years ago, perhaps with help from beyond Earth."
    ],
    "explanation": "Historians say the southern part of the map shows the coast of South America, bent eastwards to fit on the skin, as mapmakers often did. It is a remarkable and valuable early map of the Americas, but it does not show Antarctica.",
    "wiki": "Piri Reis map"
  },
  {
    "slug": "echo-wall-beijing",
    "category": "voices",
    "title": "The Echo Wall of the Temple of Heaven",
    "region": "Temple of Heaven, Beijing, China",
    "lat": 39.88,
    "lon": 116.41,
    "dateLabel": "Built in the 1500s",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Visitors every day",
    "hook": "Whisper into a round wall at Beijing's Temple of Heaven, and a friend on the far side, 60 metres away, hears you clearly.",
    "summary": [
      "The Imperial Vault of Heaven, part of the Temple of Heaven complex in Beijing where emperors prayed for good harvests, is surrounded by a smooth circular wall about 65 metres across. It is known as the Echo Wall.",
      "Two people standing at opposite sides can whisper to each other along the wall and hear every word. Nearby, the Triple Echo Stones are said to return a clap once, twice or three times depending on where you stand."
    ],
    "explanation": "It is a whispering gallery, like Gol Gumbaz in India or St Paul's Cathedral in London. Sound waves hug the smooth, curved, hard surface of the wall and travel around it with little loss. The echoes from the stones come from sound bouncing off the surrounding walls.",
    "wiki": "Temple of Heaven"
  },
  {
    "slug": "nightingale-floors",
    "category": "voices",
    "title": "The Nightingale Floors of Nijō Castle",
    "region": "Nijō Castle, Kyoto, Japan",
    "lat": 35.01,
    "lon": 135.75,
    "dateLabel": "Built in the early 1600s",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Visitors every day",
    "hook": "Walk the corridors of a shogun's palace in Kyoto, and the wooden floor chirps under your feet like birds.",
    "summary": [
      "In the Ninomaru Palace at Nijō Castle, built for the Tokugawa shoguns in Kyoto, the wooden corridors sing as people walk on them, making a high chirping sound like birds. They are known as 'nightingale floors'.",
      "It is often said they were designed as an alarm, so that no assassin or spy could creep through the palace in silence."
    ],
    "explanation": "The chirping comes from metal clamps and nails under the floorboards, which rub against each other when weight presses the boards down. Whether the effect was designed as a security measure or was a lucky side effect of the construction is debated by historians.",
    "wiki": "Nijō Castle"
  },
  {
    "slug": "bio-duck",
    "category": "voices",
    "title": "The Bio-Duck",
    "region": "Southern Ocean, off Western Australia and Antarctica",
    "lat": -38.0,
    "lon": 115.0,
    "dateLabel": "Heard since the 1960s; identified in 2014",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Submarine crews and ocean scientists",
    "hook": "For 50 years, submarines in the Southern Ocean picked up a strange, repeating quack that no one could identify.",
    "summary": [
      "From the 1960s, submarine crews in the Southern Ocean, including off Western Australia, heard a strange, rhythmic sound on their sonar: a series of short, low pulses that sounded like a duck quacking. They called it the 'bio-duck'.",
      "It was heard again and again, often in winter and spring, and for decades scientists couldn't tell what made it. Some suspected an animal; others, a machine."
    ],
    "explanation": "In 2014, scientists attached recording tags to Antarctic minke whales and found that they make the bio-duck sound. The whales are hard to see and study, which is why the source stayed hidden for so long.",
    "wiki": null
  },
  {
    "slug": "chichen-itza-chirp",
    "featured": true,
    "category": "voices",
    "title": "The Chirp of Chichén Itzá",
    "region": "El Castillo, Chichén Itzá, Yucatán, Mexico",
    "lat": 20.68,
    "lon": -88.57,
    "dateLabel": "Pyramid built around 900–1100 CE",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Visitors and acoustics researchers",
    "hook": "Clap your hands in front of the great pyramid of Chichén Itzá, and the echo comes back as the chirp of a bird.",
    "summary": [
      "El Castillo, the Temple of Kukulcán at Chichén Itzá, is a stepped pyramid built by the Maya. When visitors stand at the foot of its main staircase and clap, the echo that comes back is not a clap but a descending chirp.",
      "Some say it sounds like the call of the quetzal, a bird sacred to the Maya, and guides have long shown it off to tourists."
    ],
    "explanation": "Acoustics researchers have shown that the chirp is caused by the sound reflecting off the regular steps of the staircase, each step sending back a slightly delayed echo, which together form a falling tone. Whether the Maya designed it on purpose is debated.",
    "wiki": "El Castillo, Chichén Itzá"
  },
  {
    "slug": "zone-of-silence",
    "category": "voices",
    "title": "The Zone of Silence",
    "region": "Bolsón de Mapimí, Durango, Mexico",
    "lat": 26.68,
    "lon": -103.75,
    "dateLabel": "Legend since the 1970s",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Visitors and scientists",
    "hook": "In the deserts of northern Mexico, legend says radios fall silent and compasses spin. It began with a rocket that went astray.",
    "summary": [
      "The Zone of Silence is an area of desert near Mapimí in northern Mexico. Stories say that radio and television signals cannot be received there, compasses go haywire, meteorites fall more often and the plants and animals are strange.",
      "The legend took off in July 1970, when a US Athena test rocket launched from Utah went off course and crashed in the area. A US team came to recover it, which fuelled rumours that the place was special."
    ],
    "explanation": "Scientists have not found any unusual electromagnetic effect that stops radio signals. The region does have iron-rich rocks and has had meteorite falls, which may have fed the stories. The area is now part of a biosphere reserve, and its reputation draws curious tourists.",
    "wiki": "Mapimí Silent Zone"
  },
  {
    "slug": "tanganyika-laughter",
    "category": "voices",
    "title": "The Tanganyika Laughter Epidemic",
    "region": "Kashasha, near Bukoba, Tanzania",
    "lat": -1.4,
    "lon": 31.7,
    "dateLabel": "1962",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Pupils, teachers and villagers",
    "hook": "In 1962, laughter spread through a girls' school in Tanganyika and then from village to village, until schools had to close.",
    "summary": [
      "In January 1962, at a girls' boarding school in Kashasha, near Lake Victoria in what was then Tanganyika, a few pupils began laughing uncontrollably. Within weeks, dozens of students were affected, with bouts of laughing and crying lasting hours, and the school closed.",
      "When the girls went home, the laughter spread to their villages and to other schools. Over the following months, around a thousand people were affected, and more than a dozen schools closed for a time."
    ],
    "explanation": "Doctors found no infection or poison. It is now considered a well-documented case of mass psychogenic illness, in which stress and anxiety spread through a group, showing up as real physical symptoms. The country had just become independent, and pupils faced new pressures at school.",
    "wiki": "1962 Tanganyika laughter epidemic"
  },
  {
    "slug": "russian-woodpecker",
    "category": "voices",
    "title": "The Russian Woodpecker",
    "region": "Chernobyl-2, near Chernobyl, Ukraine",
    "lat": 51.3,
    "lon": 30.07,
    "dateLabel": "1976 – 1989",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Radio users around the world",
    "hook": "For 13 years, a loud tapping noise interrupted radio broadcasts around the world, and nobody would say where it came from.",
    "summary": [
      "From July 1976, radio listeners and broadcasters around the world began hearing a sharp, repetitive tapping sound, about ten taps a second, cutting across shortwave frequencies. It disrupted radio stations, aircraft communications and amateur radio. Listeners called it the Russian Woodpecker.",
      "It was traced to the Soviet Union, but Soviet authorities said nothing about it, and theories ranged from mind control to weather manipulation."
    ],
    "explanation": "It was the Duga radar, a giant Soviet system designed to detect missiles launched from far beyond the horizon. One of its huge antennas stood near Chernobyl, in Ukraine. It stopped in 1989, and its towering frame still stands in the exclusion zone around the Chernobyl power plant.",
    "wiki": "Duga radar"
  },
  {
    "slug": "bell-island-boom",
    "category": "voices",
    "title": "The Bell Island Boom",
    "region": "Bell Island, Newfoundland, Canada",
    "lat": 47.62,
    "lon": -52.98,
    "dateLabel": "2 April 1978",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Residents across Conception Bay",
    "hook": "One April morning, a deafening blast on a Newfoundland island blew out televisions, burned wiring, and left holes in the ground.",
    "summary": [
      "Late on the morning of 2 April 1978, a huge bang rang out over Bell Island, in Conception Bay, Newfoundland. It was heard across the bay. In the community of Bickfordville, electrical wiring burned out in several houses, televisions blew up and small holes were found blasted in the ground.",
      "Within days, two scientists from Los Alamos National Laboratory in the United States arrived to investigate, which led to rumours of secret weapons tests."
    ],
    "explanation": "The Los Alamos scientists concluded the most likely cause was a 'superbolt', a rare and extremely powerful form of lightning. Some residents remained unconvinced, partly because of the American scientists' quick arrival. It remains one of Canada's most famous unexplained bangs.",
    "wiki": null
  },
  {
    "slug": "mistpouffers",
    "category": "voices",
    "title": "The Mistpouffers",
    "region": "Coast of Belgium and the Netherlands",
    "lat": 51.6,
    "lon": 3.7,
    "dateLabel": "Reported for centuries",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Coastal residents and fishermen",
    "hook": "On calm, misty days along the North Sea coast, people hear dull booms like distant guns rolling in from the sea.",
    "summary": [
      "Along the coasts of Belgium and the Netherlands, people have long described mistpouffers, or 'fog belches': dull booms or thuds that seem to come from the sea, often on calm, hazy days. Similar sounds are reported in other countries under other names, such as the Barisal guns of Bengal and the Seneca guns of New York.",
      "Before modern times, they were sometimes blamed on distant battles or storms out at sea."
    ],
    "explanation": "No single cause has been confirmed. Suggestions include distant thunder carried by layers of air over the sea, sonic booms, gas escaping from the seabed, and waves crashing in sea caves. Some booms today are traced to military activity, but not all.",
    "wiki": "Skyquake"
  },
  {
    "slug": "orang-bunian",
    "category": "visitors",
    "title": "The Orang Bunian",
    "region": "Gunung Ledang (Mount Ophir), Malaysia",
    "lat": 2.37,
    "lon": 102.61,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Villagers across Malaysia and Indonesia",
    "hook": "In Malay folklore, the orang bunian are a hidden people who live in the forests, unseen, and sometimes lead travellers away.",
    "summary": [
      "In Malaysia, Indonesia and Brunei, people tell of the orang bunian, the 'hidden people': beings who look like humans but live unseen in the forest, in villages that can only be glimpsed by a few. They are said to be beautiful and sometimes kind, but those who wander into their world can lose track of time.",
      "Stories often tell of people who go missing in the jungle for days and later say they were looked after by the orang bunian. The legend is especially linked to Gunung Ledang, a mountain in southern Malaysia."
    ],
    "explanation": "The orang bunian are a figure of folklore, similar to the fairies and elves of European tradition. Researchers suggest that the stories helped explain how people get lost in dense jungle and why they come back confused, and taught respect for the forest.",
    "wiki": "Orang bunian"
  },
  {
    "slug": "biringan",
    "category": "visitors",
    "title": "The Invisible City of Biringan",
    "region": "Samar, Philippines",
    "lat": 12.0,
    "lon": 124.75,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Fishermen, travellers and villagers of Samar",
    "hook": "Legend says a glittering city stands on the island of Samar, invisible to most people, and that some who find it never return.",
    "summary": [
      "On the island of Samar in the Philippines, people tell of Biringan, a beautiful city with tall buildings and bright lights, inhabited by spirits called engkanto. It is said to be invisible, and only a few people ever see it.",
      "Fishermen describe seeing city lights at sea where there is nothing on the map, and stories tell of travellers who visited the city, or were invited in by people who looked like humans."
    ],
    "explanation": "Biringan is a legend, part of a wider Filipino belief in engkanto spirits. Lights seen at night may come from boats, distant towns or mirages over the sea. The legend is now part of Samar's identity, and appears in films and books.",
    "wiki": null
  },
  {
    "slug": "menehune",
    "category": "visitors",
    "title": "The Menehune of Kauaʻi",
    "region": "Alekoko fishpond, Kauaʻi, Hawaiʻi, USA",
    "lat": 21.95,
    "lon": -159.37,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Native Hawaiian tradition",
    "hook": "Hawaiian stories say a small people called the Menehune built great stone works overnight, and vanished before sunrise.",
    "summary": [
      "In Hawaiian tradition, the Menehune are a small people who lived in the forests and valleys of Kauaʻi, and were skilled builders. They worked only at night, and legend says they could complete a fishpond, a temple or a road in a single night, leaving it unfinished if dawn came.",
      "The Alekoko fishpond and the 'Menehune ditch' on Kauaʻi are two of the stone works credited to them."
    ],
    "explanation": "Some historians suggest the Menehune legend preserves a memory of an earlier group of settlers on the islands, or of commoners, as the word may once have referred to people of low status. Others see them simply as figures of folklore. The stone works are real and remarkable.",
    "wiki": "Menehune"
  },
  {
    "slug": "tully-saucer-nest",
    "category": "visitors",
    "title": "The Tully Saucer Nest",
    "region": "Horseshoe Lagoon, near Tully, Queensland, Australia",
    "lat": -17.93,
    "lon": 145.92,
    "dateLabel": "19 January 1966",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Banana farmer George Pedley",
    "hook": "A banana farmer said a grey saucer rose from a lagoon in front of him. Where it had been, the reeds lay flattened in a perfect circle.",
    "summary": [
      "On the morning of 19 January 1966, George Pedley, a banana farmer near Tully in tropical Queensland, was driving his tractor when he heard a loud hissing. He said he saw a large, grey, saucer-shaped object rise from Horseshoe Lagoon, spin, and fly away.",
      "Where it had been, he found a circle of reeds about 9 metres across, flattened and swirled clockwise as if by a spinning force. More 'nests' were found in the area in the following days."
    ],
    "explanation": "Investigators suggested whirlwinds, waterspouts, helicopters and even crocodiles or birds. Some sceptics pointed out that reeds can form such shapes naturally in water. The case became one of Australia's most famous UFO reports, and an early example of what were later called crop circles.",
    "wiki": null
  },
  {
    "slug": "dropa-stones",
    "category": "visitors",
    "title": "The Dropa Stones",
    "region": "Bayan Har Mountains, Qinghai, China",
    "lat": 34.5,
    "lon": 97.0,
    "dateLabel": "Story spread from the 1960s",
    "status": "explained",
    "statusLabel": "Hoax",
    "witnesses": "No verified witnesses",
    "hook": "A story claimed that Chinese archaeologists found hundreds of stone discs in a mountain cave, carved with tiny writing about a crashed spacecraft.",
    "summary": [
      "In the 1960s, articles in Western magazines described the 'Dropa stones': hundreds of stone discs said to have been found in caves in the Bayan Har Mountains in 1938, each with a spiral groove of tiny writing. A Chinese professor was said to have translated them as an account of beings, the Dropa, whose ship crashed in the mountains.",
      "The story spread through books and documentaries, often with photographs of small stone discs."
    ],
    "explanation": "No reliable evidence exists that the discs were found or translated. The professor and the archaeologists named in the story can't be traced, and no Chinese scientific record of the find has been located. Researchers consider it a hoax built from earlier magazine stories.",
    "wiki": "Dropa stones"
  },
  {
    "slug": "palenque-lid",
    "category": "visitors",
    "title": "The 'Astronaut' of Palenque",
    "region": "Temple of the Inscriptions, Palenque, Chiapas, Mexico",
    "lat": 17.48,
    "lon": -92.05,
    "dateLabel": "Carved in 683 CE; claims since 1968",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Archaeologists and visitors",
    "hook": "A carved stone lid in a Maya temple shows a king that some have claimed is an astronaut at the controls of a spaceship.",
    "summary": [
      "In 1952, the Mexican archaeologist Alberto Ruz Lhuillier found a hidden tomb deep inside the Temple of the Inscriptions at Palenque. It held the carved stone lid of the sarcophagus of K'inich Janaab' Pakal, a great Maya king who died in 683 CE.",
      "In 1968, the writer Erich von Däniken claimed the carving showed a man inside a rocket, operating controls, with flames coming out of the back. The 'Palenque astronaut' became famous."
    ],
    "explanation": "Maya scholars read the carving as Pakal falling into, or rising from, the underworld at the moment of death, at the base of a sacred world tree. Its symbols, including the 'controls' and 'flames', all appear in other Maya art. Reading the writing around it confirms the scene.",
    "wiki": "Sarcophagus of Pakal"
  },
  {
    "slug": "crystal-skulls",
    "category": "visitors",
    "title": "The Crystal Skulls",
    "region": "Lubaantun, Toledo District, Belize",
    "lat": 16.28,
    "lon": -88.96,
    "dateLabel": "Claimed finds from the 1800s and 1924",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Collectors, museums and scientists",
    "hook": "Carved skulls of clear crystal were said to be ancient relics with mysterious powers. One was claimed to be found in a Maya ruin.",
    "summary": [
      "Several carved skulls of rock crystal have been displayed in museums and private collections, said to come from the Aztecs or the Maya. The most famous, the Mitchell-Hedges skull, was said to have been found in 1924 by a teenage girl at the Maya site of Lubaantun in Belize.",
      "Over the years, the skulls were claimed to have healing powers, to be millions of years old, or to have come from beyond Earth. They even inspired an Indiana Jones film."
    ],
    "explanation": "Scientists at the British Museum and the Smithsonian studied several skulls and found marks made by modern rotary cutting tools, which the ancient Mesoamericans did not have. They concluded the skulls were made in the 19th or 20th century. Records show that the Mitchell-Hedges skull was bought at an auction in London in 1943.",
    "wiki": "Crystal skull"
  },
  {
    "slug": "kalanoro",
    "category": "visitors",
    "title": "The Kalanoro",
    "region": "Highland forests, Madagascar",
    "lat": -19.0,
    "lon": 47.0,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Malagasy communities",
    "hook": "In Madagascar's forests, people tell of the kalanoro, a small, long-haired being with backward feet that lives near water.",
    "summary": [
      "The kalanoro is a figure of Malagasy folklore, described as a small, human-like being, often less than a metre tall, with long hair, long nails and sometimes backward-pointing feet. It lives in forests, caves and near water, and is said to be shy and to come out at night.",
      "Some stories say kalanoro can grant powers to those they favour, or steal food; others say they lure people into the forest."
    ],
    "explanation": "The kalanoro is generally understood as a figure of folklore. Some researchers have wondered if the legend preserves a memory of an extinct animal, such as a giant lemur, some of which lived on the island until about 1,000 years ago. There is no evidence that such beings exist today.",
    "wiki": "Kalanoro"
  },
  {
    "slug": "emilcin-abduction",
    "category": "visitors",
    "title": "The Emilcin Encounter",
    "region": "Emilcin, Lublin Voivodeship, Poland",
    "lat": 51.19,
    "lon": 22.07,
    "dateLabel": "10 May 1978",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Farmer Jan Wolski",
    "hook": "Early one morning, a Polish farmer driving his horse cart said two small, green-faced figures climbed up beside him.",
    "summary": [
      "Early on 10 May 1978, Jan Wolski, a 71-year-old farmer, was driving his horse-drawn cart through the woods near Emilcin in eastern Poland when, he said, two short figures with greenish faces and slanted eyes jumped onto the cart and sat beside him, talking in a language he didn't understand.",
      "He said they directed him to a clearing where a large white object hovered, and invited him on board, where he was examined. Wolski went home and told his family; investigators later found him consistent and sincere."
    ],
    "explanation": "No physical evidence was found, and the case relies on Wolski's account, with a few people saying they saw something unusual that morning. Sceptics suggest a dream or a misremembered experience. It remains Poland's best-known UFO case, and a small monument now stands in Emilcin.",
    "wiki": "Emilcin Abduction"
  },
  {
    "slug": "cottingley-fairies",
    "featured": true,
    "category": "visitors",
    "title": "The Cottingley Fairies",
    "region": "Cottingley, West Yorkshire, England",
    "lat": 53.83,
    "lon": -1.82,
    "dateLabel": "1917 – 1920",
    "status": "explained",
    "statusLabel": "Hoax",
    "witnesses": "Two cousins, Elsie Wright and Frances Griffiths",
    "hook": "Two young cousins in Yorkshire took photographs of themselves with tiny dancing fairies, and the creator of Sherlock Holmes believed them.",
    "summary": [
      "In 1917, cousins Elsie Wright, 16, and Frances Griffiths, 9, took two photographs by a stream in Cottingley, near Bradford, showing Frances with a group of tiny winged fairies and Elsie with a gnome. They took three more in 1920.",
      "The photographs came to the attention of the writer Arthur Conan Doyle, a firm believer in spiritualism, who published them in 1920 as proof that fairies existed. They caused a sensation."
    ],
    "explanation": "In 1983, the cousins, then elderly women, admitted that the fairies were paper cut-outs copied from a children's book and held up with hatpins. Frances, though, always said the fifth photograph was genuine, and that she really had seen fairies at the stream.",
    "wiki": "Cottingley Fairies"
  },
  {
    "slug": "green-children-woolpit",
    "category": "visitors",
    "title": "The Green Children of Woolpit",
    "region": "Woolpit, Suffolk, England",
    "lat": 52.22,
    "lon": 0.89,
    "dateLabel": "12th century",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Villagers, as recorded by medieval chroniclers",
    "hook": "In medieval England, two children with green skin were found near a Suffolk village, speaking a language no one knew.",
    "summary": [
      "Two English chroniclers of the 12th century, William of Newburgh and Ralph of Coggeshall, tell how two children, a brother and sister, were found near the village of Woolpit in Suffolk. Their skin was green, they wore strange clothes, and they spoke a language no one understood. At first they would eat only raw beans.",
      "Over time their green colour faded. The girl later said they came from a land where the sun never shone, called St Martin's Land, and had wandered into Woolpit by following the sound of bells."
    ],
    "explanation": "Historians have suggested the children were lost Flemish children, orphaned during conflicts of the time, and pale-green from malnutrition, with their story made stranger in the retelling. Others see it as a folk tale. The village sign at Woolpit still shows the two green children.",
    "wiki": "Green children of Woolpit"
  },
  {
    "slug": "huldufolk",
    "category": "visitors",
    "title": "The Huldufólk of Iceland",
    "region": "Álfhóll, Kópavogur, Iceland",
    "lat": 64.11,
    "lon": -21.9,
    "dateLabel": "Told for centuries",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Icelanders across the country",
    "hook": "In Iceland, roads have been rerouted around rocks said to be the homes of the hidden people.",
    "summary": [
      "In Icelandic folklore, the huldufólk, or 'hidden people', live in rocks, hills and lava fields, in a world parallel to ours. They look like humans but are usually invisible, and they can be offended if their homes are disturbed.",
      "Surveys have found that many Icelanders don't rule out their existence. Several times, roads and building projects have been changed or delayed because of concerns about disturbing elf rocks, including a hill called Álfhóll in Kópavogur, where a road was narrowed rather than dig it up."
    ],
    "explanation": "The huldufólk are folklore, closely tied to Iceland's dramatic landscape and to respect for nature. Many Icelanders treat the stories with a mix of humour and care, and some road changes also had environmental or practical reasons.",
    "wiki": "Huldufólk"
  },
  {
    "slug": "sulawesi-superbolide",
    "category": "sky",
    "title": "The Sulawesi Fireball",
    "region": "Watampone, Bone, South Sulawesi, Indonesia",
    "lat": -4.54,
    "lon": 120.33,
    "dateLabel": "8 October 2009",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Residents of Bone; sensors worldwide",
    "hook": "One morning in Indonesia, a huge explosion in the sky shook the town of Bone. People thought a plane had crashed.",
    "summary": [
      "At about 11 am on 8 October 2009, people around Watampone in South Sulawesi heard a tremendous bang and saw a fireball and a trail of smoke in the sky. Some called the police to report a plane crash or an earthquake.",
      "Videos of the smoke trail were shared widely. No one was hurt."
    ],
    "explanation": "Scientists identified it as a small asteroid, about 6 to 10 metres across, that exploded in the atmosphere 15 to 20 km up, releasing energy equal to several times the Hiroshima bomb. Sensors built to detect nuclear tests picked up the blast more than 10,000 km away.",
    "wiki": "2009 Sulawesi superbolide"
  },
  {
    "slug": "kaikoura-lights",
    "featured": true,
    "category": "sky",
    "title": "The Kaikōura Lights",
    "region": "Off Kaikōura, South Island, New Zealand",
    "lat": -42.4,
    "lon": 173.68,
    "dateLabel": "December 1978",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Aircraft crews, a TV film crew and air traffic controllers",
    "hook": "On a night flight along the New Zealand coast, a TV crew filmed bright lights pacing their plane, while radar tracked unknown targets.",
    "summary": [
      "In late December 1978, the crews of cargo flights along the east coast of New Zealand's South Island reported strange lights near Kaikōura, and air traffic controllers in Wellington saw unidentified returns on radar.",
      "On the night of 30 to 31 December, an Australian television crew led by reporter Quentin Fogarty flew along the coast on an Argosy freight plane to investigate. They filmed bright, pulsing lights, one of which seemed to follow the plane, and the footage was broadcast around the world."
    ],
    "explanation": "Explanations suggested include the lights of squid-fishing boats, which use powerful lamps, reflections, the planet Venus and unusual atmospheric conditions. The crew and pilots rejected the simpler explanations. The case is still debated.",
    "wiki": "Kaikoura lights"
  },
  {
    "slug": "hangzhou-airport-2010",
    "category": "sky",
    "title": "The Hangzhou Airport Closure",
    "region": "Xiaoshan International Airport, Hangzhou, China",
    "lat": 30.24,
    "lon": 120.43,
    "dateLabel": "7 July 2010",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Air traffic staff and residents",
    "hook": "One summer evening, a glowing object over Hangzhou's airport forced it to close for an hour, and diverted flights across China.",
    "summary": [
      "At about 8:30 pm on 7 July 2010, a bright, twinkling object was reported over Hangzhou in eastern China. Shortly afterwards, Xiaoshan International Airport closed its airspace for nearly an hour after the object was spotted near the flight path. Flights were diverted and delayed, affecting more than 2,000 passengers.",
      "Photographs taken by residents that evening showed a glowing shape with a comet-like tail, and the event was widely reported in the Chinese media."
    ],
    "explanation": "Officials did not give a clear explanation. A source told the state newspaper China Daily that the object had a military connection, and other suggestions include a private plane, sunlight reflecting off a high aircraft after sunset, and long-exposure photos of a helicopter's searchlight.",
    "wiki": "UFO sightings in China"
  },
  {
    "slug": "joseon-1609",
    "category": "sky",
    "title": "The Gangwon Sightings of 1609",
    "region": "Gangwon Province, Korea",
    "lat": 37.75,
    "lon": 128.9,
    "dateLabel": "September 1609",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Officials and residents in five districts, recorded in the royal annals",
    "hook": "The official royal annals of Korea record that, on one day in 1609, glowing objects shaped like bowls and gourds crossed the skies over five towns.",
    "summary": [
      "The Annals of the Joseon Dynasty, the official record of Korea's kings, include a report from the governor of Gangwon Province in 1609, in the first year of King Gwanghaegun's reign. On a single day, people in five districts saw strange objects in the sky.",
      "They were described in different ways: like a large bowl, a gourd, a washbasin or a red pear, some moving quickly and giving off light and sound. The governor checked the reports before sending them to the court."
    ],
    "explanation": "Historians and astronomers have suggested a large meteor or fireball breaking up, which could look different from different places, or other natural phenomena. The annals record many unusual sky events, and this one stands out for being seen in several places at once.",
    "wiki": null
  },
  {
    "slug": "mexico-eclipse-1991",
    "category": "sky",
    "title": "The Mexico City Eclipse Lights",
    "region": "Mexico City, Mexico",
    "lat": 19.43,
    "lon": -99.13,
    "dateLabel": "11 July 1991",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Thousands of people filming the eclipse",
    "hook": "During a total solar eclipse over Mexico City, people filming the sky captured a bright, still object near the darkened sun.",
    "summary": [
      "On 11 July 1991, a total solar eclipse passed over Mexico City, and thousands of people filmed the sky with video cameras. Several recordings showed a bright, silvery object hanging in the sky away from the sun.",
      "The videos were shown on Mexican television, and launched a wave of UFO interest in Mexico that lasted for years, with many more sightings reported."
    ],
    "explanation": "Astronomers pointed out that the planet Venus was bright and well placed in the sky during the eclipse, exactly where many of the videos showed the object. Most of the footage is consistent with Venus, though some enthusiasts insist that a few videos show something else.",
    "wiki": "UFO sightings in Mexico"
  },
  {
    "slug": "campeche-2004",
    "category": "sky",
    "title": "The Campeche Infrared Video",
    "region": "Over Campeche, Mexico",
    "lat": 18.65,
    "lon": -91.83,
    "dateLabel": "5 March 2004",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "A Mexican Air Force crew",
    "hook": "A Mexican Air Force patrol plane, hunting drug smugglers, filmed eleven glowing objects with its infrared camera.",
    "summary": [
      "On 5 March 2004, a Mexican Air Force surveillance plane searching for drug-smuggling flights over the state of Campeche filmed a group of bright objects on its infrared camera. They couldn't be seen with the naked eye or on radar.",
      "The Mexican defence ministry released the footage in May 2004, and it made headlines around the world as an official UFO video."
    ],
    "explanation": "Researchers who studied the video concluded that the objects were the flames of oil and gas flares on platforms in the Cantarell oil field in the Gulf of Mexico, far beyond the horizon. The camera picked up their heat, and the plane's movement made them seem to shift. Most researchers accept this explanation.",
    "wiki": "UFO sightings in Mexico"
  },
  {
    "slug": "yoro-fish-rain",
    "category": "sky",
    "title": "The Rain of Fish in Yoro",
    "region": "Yoro, Honduras",
    "lat": 15.14,
    "lon": -87.13,
    "dateLabel": "Every year, in the rainy season",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Townspeople of Yoro",
    "hook": "Every year, after a great storm, the people of a Honduran town find the streets and fields full of live fish.",
    "summary": [
      "In Yoro, in northern Honduras, residents say that once a year, usually in May or June, a violent storm brings a 'rain of fish'. Afterwards, hundreds of small, silvery fish are found flapping on the ground, and families gather them to eat.",
      "The event has been reported for more than a century, and the town holds an annual Festival de la Lluvia de Peces. Local tradition links it to a Spanish priest who prayed for food for the poor in the 1800s."
    ],
    "explanation": "One idea is that waterspouts lift fish from the sea and drop them inland, but the sea is about 70 km away. Another is that the fish live in underground rivers and are pushed to the surface by flooding. The fish found are reported to be blind, which supports the underground idea, but it has not been fully studied.",
    "wiki": "Lluvia de peces"
  },
  {
    "slug": "hoba-meteorite",
    "category": "sky",
    "title": "The Hoba Meteorite",
    "region": "Near Grootfontein, Otjozondjupa, Namibia",
    "lat": -19.59,
    "lon": 17.93,
    "dateLabel": "Found in 1920",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "A farmer, then scientists",
    "hook": "A Namibian farmer ploughing his field struck metal. It turned out to be the largest meteorite on Earth, and it left no crater.",
    "summary": [
      "In 1920, the owner of the Hoba West farm in Namibia was ploughing when his plough hit something hard. It was a slab of iron about 2.7 metres across, weighing around 60 tonnes: the largest known meteorite on Earth.",
      "Strangely, there was no crater around it. The meteorite has never been moved, and lies where it fell."
    ],
    "explanation": "Scientists think it fell around 80,000 years ago. Its unusual flat shape may have let it skip and slow down through the atmosphere like a stone on water, so it landed at a low speed without making a crater. It is now a national monument.",
    "wiki": "Hoba meteorite"
  },
  {
    "slug": "florence-1954",
    "category": "sky",
    "title": "The Florence Stadium Sighting",
    "region": "Stadio Artemio Franchi, Florence, Italy",
    "lat": 43.78,
    "lon": 11.28,
    "dateLabel": "27 October 1954",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "About 10,000 people at a football match",
    "hook": "During a football match in Florence, the players stopped and the crowd fell silent as shining objects crossed the sky, and silver threads drifted down.",
    "summary": [
      "On the afternoon of 27 October 1954, about 10,000 people were watching a football match between Fiorentina and Pistoiese at the stadium in Florence when, witnesses said, cigar-shaped objects moved quickly across the sky and stopped over the stadium. The game halted as players and spectators stared upward.",
      "Then fine, shiny threads began to fall from the sky, settling on the stadium and the city, and dissolving when touched. Similar sightings and 'angel hair' were reported across Italy and France that autumn."
    ],
    "explanation": "The threads may have been silk from migrating spiders, which travel on long strands carried by the wind, sometimes in huge numbers. The objects have been explained as balloons or reflections, but no explanation is agreed. Players at the match spoke about it for the rest of their lives.",
    "wiki": "UFO sightings in Italy"
  },
  {
    "slug": "manises-1979",
    "category": "sky",
    "title": "The Manises Incident",
    "region": "Over the Mediterranean, landing at Valencia, Spain",
    "lat": 39.49,
    "lon": -0.47,
    "dateLabel": "11 November 1979",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "The crew of a passenger jet, radar operators and a fighter pilot",
    "hook": "Red lights approached a Spanish passenger jet at night and followed it so closely that the captain made an emergency landing.",
    "summary": [
      "On the night of 11 November 1979, a TAE Super Caravelle flying from Mallorca to the Canary Islands with 109 passengers was over the Mediterranean when its crew saw two red lights approaching fast. The captain, Francisco Javier Lerdo de Tejada, said they came so close and moved so strangely that he diverted to Valencia's Manises airport.",
      "Ground radar was reported to show unknown targets, and the Spanish Air Force sent up a Mirage fighter, whose pilot reported lights that outran him."
    ],
    "explanation": "The official explanation was that the crew saw 'freak optical illusions'. Later researchers suggested the lights included flares from a chemical plant, and stars or planets distorted by the atmosphere. The case was declassified by the Spanish Air Force in the 1990s and is still debated.",
    "wiki": "Manises UFO incident"
  },
  {
    "slug": "flores-hobbit",
    "featured": true,
    "category": "creatures",
    "title": "The Ebu Gogo and the Hobbit of Flores",
    "region": "Liang Bua, Flores, Indonesia",
    "lat": -8.53,
    "lon": 120.44,
    "dateLabel": "Legend for generations; fossils found in 2003",
    "status": "explained",
    "statusLabel": "Partly confirmed",
    "witnesses": "Nage villagers; archaeologists",
    "hook": "Villagers on Flores told of small, hairy people who lived in the forest long ago. Then archaeologists found the bones of a tiny human.",
    "summary": [
      "The Nage people of the Indonesian island of Flores tell stories of the ebu gogo, 'the grandmother who eats anything': small, hairy, human-like creatures who lived in caves, murmured to each other and stole food. The stories say they lived there until a few generations ago.",
      "In 2003, archaeologists digging in the Liang Bua cave on Flores found the bones of a tiny human species, about a metre tall, which they named Homo floresiensis, nicknamed the 'hobbit'."
    ],
    "explanation": "Scientists now date the hobbit remains to between about 100,000 and 50,000 years ago, long before the ebu gogo stories describe, so most think the legend is not a memory of the same species. Still, the discovery showed that a small human species really did live on Flores, just as the legend imagined.",
    "wiki": "Homo floresiensis"
  },
  {
    "slug": "saola",
    "category": "creatures",
    "title": "The Saola, Asia's Unicorn",
    "region": "Vũ Quang, Annamite Mountains, Vietnam",
    "lat": 18.3,
    "lon": 105.4,
    "dateLabel": "Discovered by science in 1992",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Local hunters; a joint survey team",
    "hook": "In 1992, scientists in a Vietnamese forest found the long, straight horns of an animal that wasn't in any book.",
    "summary": [
      "In May 1992, a survey team from Vietnam's Ministry of Forestry and the conservation group WWF was working in the Vũ Quang forest, near the border with Laos, when they found a skull with two long, straight horns hanging in a hunter's home. It came from an animal unknown to science.",
      "Local people knew it well. They called it the saola, and described a shy, forest-dwelling animal with white markings on its face."
    ],
    "explanation": "The saola was described as a new species in 1993, the first large land mammal discovered in over 50 years. It is so rare and secretive that it has been photographed in the wild only a handful of times, and is critically endangered. It is often called the Asian unicorn.",
    "wiki": "Saola"
  },
  {
    "slug": "nguoi-rung",
    "category": "creatures",
    "title": "The Người Rừng",
    "region": "Central Highlands, Vietnam",
    "lat": 14.35,
    "lon": 108.0,
    "dateLabel": "Reported for generations; expedition in 1974",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Villagers, soldiers and scientists",
    "hook": "In the forests of Vietnam, people describe the người rừng, the 'forest people': tall, hairy beings that walk upright.",
    "summary": [
      "In the mountain forests of Vietnam and Laos, local people tell of the người rừng, or 'forest people', hairy, ape-like beings that walk on two legs and avoid humans. During the Vietnam War, soldiers on both sides reported strange encounters in the jungle.",
      "In 1974, a North Vietnamese general asked scientists to survey the Central Highlands for the creature. The expedition did not find one, but brought back the cast of a large footprint."
    ],
    "explanation": "No body, bones or clear photographs have been found. Suggested explanations include known apes and monkeys such as gibbons, bears, and folklore. Some researchers note that new large animals, like the saola, have been found in these forests, which keeps interest alive.",
    "wiki": "Nguoi Rung"
  },
  {
    "slug": "yeren-shennongjia",
    "category": "creatures",
    "title": "The Yeren of Shennongjia",
    "region": "Shennongjia, Hubei, China",
    "lat": 31.5,
    "lon": 110.5,
    "dateLabel": "Reported for centuries; expeditions since the 1970s",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Villagers, forestry workers and researchers",
    "hook": "In the remote forests of Shennongjia, people describe a tall, red-haired 'wild man' that walks on two legs.",
    "summary": [
      "Shennongjia is a mountainous, forested region in Hubei province, central China. For centuries, people have described the yeren, or 'wild man': a tall, reddish-haired creature that walks upright. Ancient Chinese poems and books mention similar beings.",
      "In the 1970s and 1980s, the Chinese Academy of Sciences sent several expeditions to search for the yeren, collecting hair, footprints and hundreds of eyewitness accounts."
    ],
    "explanation": "Hair samples analysed so far have come from known animals, and no clear photographs or remains have been found. Suggested explanations include golden snub-nosed monkeys, macaques, bears and people. Shennongjia is now a protected area and a UNESCO World Heritage Site.",
    "wiki": "Yeren"
  },
  {
    "slug": "tianchi-monster",
    "category": "creatures",
    "title": "The Tianchi Lake Monster",
    "region": "Heaven Lake, Changbai (Paektu) Mountain, China–North Korea border",
    "lat": 42.0,
    "lon": 128.06,
    "dateLabel": "Reports since the early 1900s",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Tourists and local residents",
    "hook": "In a crater lake at the top of a volcano, tourists have photographed dark shapes moving fast across the water.",
    "summary": [
      "Heaven Lake is a deep crater lake at the top of Changbai Mountain, known in Korea as Paektu, on the border between China and North Korea. It is frozen for much of the year and is one of the highest crater lakes in the world.",
      "Since the early 20th century, people have reported a large creature in the lake, sometimes with a head like a seal's or a horse's. Groups of tourists have photographed and filmed dark shapes moving quickly through the water."
    ],
    "explanation": "Scientists point out that the cold, high lake has very little food, which makes a large animal unlikely. Suggested explanations include boats, swimming animals, waves, and fish introduced to the lake in recent decades. No clear evidence has been found.",
    "wiki": "Lake Tianchi Monster"
  },
  {
    "slug": "kappa",
    "featured": true,
    "category": "creatures",
    "title": "The Kappa",
    "region": "Tōno, Iwate, Japan",
    "lat": 39.33,
    "lon": 141.53,
    "dateLabel": "Told for centuries",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Japanese villages, especially around Tōno",
    "hook": "In Japanese folklore, the kappa is a small river creature with a dish of water on its head. Spill the water, and it loses its strength.",
    "summary": [
      "The kappa is one of Japan's best-known folklore creatures: a child-sized being that lives in rivers and ponds, with a beak, a shell like a turtle's and a dish-shaped hollow on its head filled with water. If the water spills, the kappa becomes weak. It loves cucumbers and sumo wrestling.",
      "Stories warn children to stay away from deep water. In the town of Tōno in northern Japan, made famous by a 1910 collection of local legends, visitors can still see the Kappa-buchi pool where the creatures are said to live."
    ],
    "explanation": "The kappa is folklore, and some researchers think the legend may have grown partly from sightings of animals such as otters, giant salamanders or turtles. Signs warning of kappa still stand near some Japanese rivers, partly as a way of warning children about drowning.",
    "wiki": "Kappa (folklore)"
  },
  {
    "slug": "tsuchinoko",
    "category": "creatures",
    "title": "The Tsuchinoko",
    "region": "Higashishirakawa, Gifu, Japan",
    "lat": 35.65,
    "lon": 137.33,
    "dateLabel": "Reports for centuries; bounties since the 1980s",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Villagers and hikers",
    "hook": "In the Japanese countryside, people report a short, fat snake that can leap great distances. Towns offer rewards for catching one.",
    "summary": [
      "The tsuchinoko is a creature of Japanese folklore described as a snake with a short, very thick body, like a beer bottle, and a thin tail. It is said to be able to jump a metre or more, to make squeaking noises, and to enjoy alcohol.",
      "Sightings are reported across rural Japan, and some towns, including Higashishirakawa in Gifu, hold tsuchinoko festivals and have offered large cash rewards for anyone who can catch one alive."
    ],
    "explanation": "No tsuchinoko has been caught. Scientists suggest sightings are of known snakes that have just eaten a large meal, or of blue-tongued skinks, short-legged lizards that have escaped from pet owners. The reward has never been claimed.",
    "wiki": "Tsuchinoko"
  },
  {
    "slug": "olgoi-khorkhoi",
    "category": "creatures",
    "title": "The Olgoi-Khorkhoi",
    "region": "Gobi Desert, Mongolia",
    "lat": 43.5,
    "lon": 104.0,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Mongolian herders",
    "hook": "In the sands of the Gobi, Mongolian herders tell of a thick red worm that lives underground and is best avoided.",
    "summary": [
      "In the Gobi Desert of southern Mongolia, herders tell of the olgoi-khorkhoi, the 'large intestine worm': a fat, red, worm-like creature about a metre long that lives beneath the sand and comes out in the rainy months of June and July. Stories say it can spit poison or give an electric shock from a distance.",
      "In 1926, the American explorer Roy Chapman Andrews heard about it from Mongolian officials, and later expeditions, including several led by the Czech explorer Ivan Mackerle in the 1990s, went looking for it."
    ],
    "explanation": "No expedition has found one. Suggested explanations include sand boas and other burrowing reptiles, or amphisbaenians, which are legless burrowing lizards, though these are not known from the Gobi. Many researchers see it as a figure of folklore.",
    "wiki": "Mongolian death worm"
  },
  {
    "slug": "nyami-nyami",
    "category": "creatures",
    "title": "Nyami Nyami, the River God",
    "region": "Lake Kariba, Zambezi River, Zambia–Zimbabwe",
    "lat": -16.52,
    "lon": 28.8,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "The Tonga people of the Zambezi valley",
    "hook": "The Tonga people say a great serpent spirit lives in the Zambezi. When the river was dammed, they said Nyami Nyami was angry.",
    "summary": [
      "The Tonga people of the Zambezi valley tell of Nyami Nyami, a river spirit with the body of a snake and the head of a fish, who protects them and the river. Stories say Nyami Nyami and his wife were separated when a dam was built across the river.",
      "In the 1950s, the Kariba Dam was built across the Zambezi, flooding the valley and moving tens of thousands of Tonga people from their homes. During construction, unusually large floods damaged the works twice, and many local people saw this as Nyami Nyami's anger."
    ],
    "explanation": "Engineers put the floods down to exceptionally heavy rains in the river's catchment area. Nyami Nyami remains an important figure in Tonga culture, and carved walking sticks and pendants of the river god are popular across Zambia and Zimbabwe.",
    "wiki": "Nyami Nyami"
  },
  {
    "slug": "elephant-bird",
    "category": "creatures",
    "title": "The Elephant Bird and the Roc",
    "region": "Southern Madagascar",
    "lat": -24.0,
    "lon": 45.0,
    "dateLabel": "Survived until about 1,000 years ago",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Travellers, sailors and scientists",
    "hook": "Arabian tales spoke of the roc, a bird big enough to carry off an elephant. On Madagascar, a giant bird with eggs bigger than footballs really existed.",
    "summary": [
      "Stories from medieval Arabia and Persia, including the voyages of Sinbad, told of the roc, a bird so huge it could carry an elephant in its claws. Marco Polo wrote that it lived on islands off Africa.",
      "On Madagascar, people found enormous eggshells, and early European visitors heard of a giant bird. In the 19th century, scientists described the elephant bird, Aepyornis: a flightless bird up to 3 metres tall, which laid eggs with about 150 times the volume of a hen's egg."
    ],
    "explanation": "Elephant birds could not fly, so they couldn't carry off elephants, but they were among the largest birds ever. They died out roughly 1,000 years ago, and some researchers think travellers' stories of their huge eggs helped inspire the legend of the roc.",
    "wiki": "Elephant bird"
  },
  {
    "slug": "lusca",
    "category": "creatures",
    "title": "The Lusca of the Blue Holes",
    "region": "Andros Island, Bahamas",
    "lat": 24.7,
    "lon": -77.8,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Bahamian fishermen and divers",
    "hook": "In the Bahamas, fishermen say a giant creature, half shark and half octopus, lurks in the deep blue holes and pulls things down.",
    "summary": [
      "Andros, the largest island in the Bahamas, is dotted with blue holes: deep, round, water-filled sinkholes in the sea and on land. Bahamian folklore says some are home to the lusca, a huge creature often described as part octopus and part shark, which can drag boats and swimmers down.",
      "Divers and fishermen have long reported strong pulls and whirlpools at the mouths of the holes."
    ],
    "explanation": "The whirlpools are real: as the tide rises and falls, water rushes in and out of the blue holes with great force, which can suck down objects at the surface. Some researchers also suggest that sightings of large octopuses or squid may have added to the legend.",
    "wiki": "Lusca"
  },
  {
    "slug": "gunung-padang",
    "category": "places",
    "title": "Gunung Padang",
    "region": "Cianjur, West Java, Indonesia",
    "lat": -6.99,
    "lon": 107.06,
    "dateLabel": "Megalithic site; disputed age",
    "status": "disputed",
    "statusLabel": "Claims retracted",
    "witnesses": "Archaeologists and geologists",
    "hook": "A hilltop in Java covered in ancient stone terraces was claimed to be a buried pyramid 27,000 years old. Then the paper was retracted.",
    "summary": [
      "Gunung Padang is a hill in West Java topped with terraces made of thousands of columns of volcanic rock. It is the largest megalithic site in Southeast Asia, and archaeologists have long dated the terraces to roughly 2,000 to 3,000 years ago.",
      "In 2023, a team led by geologist Danny Hilman Natawidjaja published a paper arguing that the hill hides a man-made pyramid begun 27,000 years ago, far older than any known monument. It made headlines around the world."
    ],
    "explanation": "In 2024, the journal retracted the paper, saying the soil samples dated were not shown to be connected to any human-made structure, so the age could not be applied to the site. The authors disagreed. The terraces on top are clearly human-built; whether anything older lies beneath is unproven.",
    "wiki": "Gunung Padang"
  },
  {
    "slug": "ta-prohm-stegosaurus",
    "category": "places",
    "title": "The 'Stegosaurus' of Ta Prohm",
    "region": "Ta Prohm, Angkor, Cambodia",
    "lat": 13.43,
    "lon": 103.89,
    "dateLabel": "Temple built in the late 1100s",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Visitors and researchers",
    "hook": "On a doorway of a jungle temple at Angkor, a small carving seems to show a stegosaurus, an animal extinct for 150 million years.",
    "summary": [
      "Ta Prohm is a temple at Angkor in Cambodia, famous for the giant trees growing out of its walls. Among the carvings on one doorway is a small circle containing an animal with a bulky body and a row of plates along its back.",
      "Some people have claimed it shows a stegosaurus, which would mean the temple's builders had seen a living dinosaur."
    ],
    "explanation": "Historians point out that the 'plates' match the leafy decorative background found around many other animals carved on the same doorway. The animal itself is probably a rhinoceros, boar or chameleon, all familiar to the Khmer. Dinosaurs died out about 66 million years before humans existed.",
    "wiki": "Ta Prohm"
  },
  {
    "slug": "baigong-pipes",
    "category": "places",
    "title": "The Baigong Pipes",
    "region": "Mount Baigong, near Delingha, Qinghai, China",
    "lat": 37.2,
    "lon": 97.0,
    "dateLabel": "Reported from the 1990s",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Visitors, journalists and scientists",
    "hook": "In a remote corner of western China, pipe-like tubes run through the rock of a mountain. Some said they were left by visitors from space.",
    "summary": [
      "Near the city of Delingha in Qinghai province, on and around Mount Baigong, are rusty-looking tubes and pipe shapes embedded in the rock and scattered near a lake. In the early 2000s, Chinese and Western media reported them as 'alien pipes', possibly 150,000 years old.",
      "The story became popular, and a local monument was put up referring to the extraterrestrial theory."
    ],
    "explanation": "Chinese scientists who studied samples found plant material and traces of tree rings in the 'pipes'. They concluded the tubes were fossilised casts of tree roots, formed when minerals filled the spaces left by roots in ancient sand. Similar structures are known elsewhere.",
    "wiki": "Baigong pipes"
  },
  {
    "slug": "turgai-geoglyphs",
    "category": "places",
    "title": "The Steppe Geoglyphs of Kazakhstan",
    "region": "Turgai region, Kostanay, Kazakhstan",
    "lat": 50.83,
    "lon": 65.33,
    "dateLabel": "Spotted in 2007; thousands of years old",
    "status": "explained",
    "statusLabel": "Partly explained",
    "witnesses": "An economist using Google Earth; archaeologists",
    "hook": "In 2007, a man browsing satellite images spotted giant squares, crosses and rings drawn across the steppe of Kazakhstan.",
    "summary": [
      "In 2007, Dmitriy Dey, a Kazakh economist and amateur archaeologist, was looking at satellite images of the Turgai region when he spotted huge geometric shapes on the steppe: squares, crosses, rings and a swastika-like figure, some hundreds of metres across. They are almost invisible on the ground.",
      "More than 250 have since been found. In 2015, NASA released high-resolution satellite photos of the sites."
    ],
    "explanation": "Archaeologists have found that many are made of low earth mounds, and some of timber, and date back thousands of years, possibly to Stone Age hunting peoples or later communities. One idea is that some were used to watch the movements of the sun. Their purpose is still being studied.",
    "wiki": "Steppe Geoglyphs"
  },
  {
    "slug": "darvaza-crater",
    "featured": true,
    "category": "places",
    "title": "The Door to Hell",
    "region": "Darvaza, Karakum Desert, Turkmenistan",
    "lat": 40.25,
    "lon": 58.44,
    "dateLabel": "Burning since about 1971",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Visitors and scientists",
    "hook": "In the middle of Turkmenistan's desert, a crater has been on fire for half a century. Locals call it the Door to Hell.",
    "summary": [
      "Near the village of Darvaza in the Karakum Desert of Turkmenistan is a crater about 70 metres wide, filled with flames that have burned day and night for decades. At night its glow can be seen from far away, and visitors camp on its rim.",
      "Its local nickname is the Door to Hell, or the Gates of Hell."
    ],
    "explanation": "The usual account is that Soviet geologists drilling for natural gas in 1971 accidentally collapsed the ground into a cavern, and set the escaping gas alight to burn it off, expecting it to stop within weeks. It is still burning. Turkmenistan's government has talked about putting it out to capture the gas.",
    "wiki": "Darvaza gas crater"
  },
  {
    "slug": "ciudad-blanca",
    "category": "places",
    "title": "La Ciudad Blanca, the White City",
    "region": "La Mosquitia, Honduras",
    "lat": 15.5,
    "lon": -85.0,
    "dateLabel": "Legend for centuries; ruins found in 2015",
    "status": "explained",
    "statusLabel": "Partly confirmed",
    "witnesses": "Explorers, then archaeologists",
    "hook": "For centuries, explorers searched the Honduran rainforest for a lost White City. In 2015, lasers from an aircraft found ruins beneath the trees.",
    "summary": [
      "The Mosquitia region of eastern Honduras is one of the largest rainforests in Central America. Since the time of the Spanish conquest, stories spoke of a lost 'White City' hidden in its jungle, sometimes called the City of the Monkey God. Several explorers claimed to have found it, without proof.",
      "In 2012, a team flew over the forest using lidar, a laser-scanning technique that can map the ground beneath trees, and found the outlines of plazas, mounds and earthworks."
    ],
    "explanation": "In 2015, archaeologists reached the site on foot and found the remains of a large pre-Columbian settlement, with stone sculptures, belonging to a little-known culture that flourished about 1,000 years ago. It was not a single 'White City', but a real lost civilisation, one of many in the region.",
    "wiki": "La Ciudad Blanca"
  },
  {
    "slug": "belmez-faces",
    "category": "places",
    "title": "The Faces of Bélmez",
    "region": "Bélmez de la Moraleda, Jaén, Spain",
    "lat": 37.73,
    "lon": -3.38,
    "dateLabel": "From 1971",
    "status": "disputed",
    "statusLabel": "Probably a hoax",
    "witnesses": "A family, visitors and investigators",
    "hook": "In 1971, a woman in a small Spanish village saw a face appear in her kitchen floor. When it was dug up, more faces appeared.",
    "summary": [
      "On 23 August 1971, María Gómez Cámara, in the village of Bélmez de la Moraleda in Andalusia, said she saw the image of a human face appear on the concrete floor of her kitchen. Her family broke up the floor and laid new concrete, but more faces appeared over the following years.",
      "The house became a sensation, drawing thousands of visitors. Investigators argued for years about whether the faces were genuine."
    ],
    "explanation": "Some laboratory tests reported traces of paint or chemicals that could have been used to create the images, while others reported none, and the samples' handling was questioned. Many researchers think the faces were made by people, possibly to attract visitors. The family always denied it.",
    "wiki": "Bélmez Faces"
  },
  {
    "slug": "antikythera-mechanism",
    "featured": true,
    "category": "places",
    "title": "The Antikythera Mechanism",
    "region": "Antikythera, Greece",
    "lat": 35.87,
    "lon": 23.3,
    "dateLabel": "Made about 2,100 years ago; found in 1901",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Sponge divers, then scientists",
    "hook": "Divers exploring an ancient shipwreck found a lump of corroded bronze. It turned out to be an ancient computer.",
    "summary": [
      "In 1901, sponge divers exploring a Roman-era shipwreck off the Greek island of Antikythera brought up statues, pottery and a shoebox-sized lump of corroded bronze and wood. Inside the lump, researchers later found precisely cut gear wheels.",
      "For decades, no one knew what it was. Because nothing so complex was known from the ancient world, some suggested it couldn't have been ancient at all."
    ],
    "explanation": "Using X-ray scans, scientists have shown that it is a Greek astronomical calculator, made around the 2nd or 1st century BCE. Turned by a handle, its gears modelled the movements of the sun, moon and planets, predicted eclipses and tracked the dates of the Olympic Games. Its full design is still being reconstructed.",
    "wiki": "Antikythera mechanism"
  },
  {
    "slug": "hal-saflieni-hypogeum",
    "category": "voices",
    "title": "The Oracle Room of Ħal Saflieni",
    "region": "Ħal Saflieni Hypogeum, Paola, Malta",
    "lat": 35.87,
    "lon": 14.51,
    "dateLabel": "Carved about 5,000 years ago",
    "status": "explained",
    "statusLabel": "Partly explained",
    "witnesses": "Archaeologists, acoustics researchers and visitors",
    "hook": "In an underground temple carved 5,000 years ago, a man's deep voice echoes through the whole complex, as if the rock itself were singing.",
    "summary": [
      "The Ħal Saflieni Hypogeum in Malta is a prehistoric underground complex carved into the rock on three levels, used as a sanctuary and burial site around 5,000 years ago. It was found by accident in 1902, when workers digging cisterns for new houses broke into it. It is a UNESCO World Heritage Site.",
      "In one small chamber, known as the Oracle Room, a low male voice resonates strongly, and the sound seems to fill the rooms around it. Visitors have long described the effect as eerie."
    ],
    "explanation": "Acoustics studies have measured strong resonances in the chamber at low frequencies around 110 Hz, in the range of a deep male voice. Whether the builders shaped it deliberately for sound is debated. Claims that the frequency has special effects on the mind are not supported by solid evidence.",
    "wiki": "Ħal Saflieni Hypogeum"
  },
  {
    "slug": "earth-26-second-pulse",
    "category": "voices",
    "title": "Earth's 26-Second Pulse",
    "region": "Gulf of Guinea, off West Africa",
    "lat": 3.5,
    "lon": 7.5,
    "dateLabel": "Detected since the early 1960s",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Seismometers around the world",
    "hook": "Every 26 seconds, a faint tremor ripples out from the Gulf of Guinea. Seismologists have known about it for 60 years, and still argue about the cause.",
    "summary": [
      "In the early 1960s, geologist Jack Oliver noticed a faint, regular 'pulse' on seismometers, repeating every 26 seconds. In 1962 he published a paper suggesting it came from somewhere in the Atlantic.",
      "Later researchers traced it to the Bight of Bonny, in the Gulf of Guinea off the coast of West Africa. It is too weak to feel, but seismometers on several continents pick it up, and it has continued for decades."
    ],
    "explanation": "One leading idea is that ocean waves strike the continental shelf in a way that sets up a regular vibration in the Earth's crust. Another links it to volcanic activity near the island of São Tomé. Neither explanation has been confirmed, and similar pulses are not known anywhere else.",
    "wiki": null
  },
  {
    "slug": "ross-ice-shelf-song",
    "category": "voices",
    "title": "The Song of the Ross Ice Shelf",
    "region": "Ross Ice Shelf, Antarctica",
    "lat": -81.5,
    "lon": -175.0,
    "dateLabel": "Recorded 2014–2017; reported in 2018",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Seismic sensors buried in the ice",
    "hook": "Scientists buried sensors in Antarctica's largest ice shelf and found it hums almost constantly, a song too low for human ears.",
    "summary": [
      "The Ross Ice Shelf is a floating slab of ice about the size of France. From 2014 to 2017, scientists buried 34 sensitive seismic sensors in its snow to study its structure.",
      "They found that the ice shelf vibrates almost all the time, producing a range of low tones. When the recordings were sped up so people could hear them, they sounded like an eerie, shifting hum."
    ],
    "explanation": "The scientists concluded that wind blowing across the huge snow dunes on the ice shelf's surface makes the top layer of snow vibrate, like the skin of a drum. Changes in the 'song' could help scientists monitor the ice shelf for melting and cracking in the future.",
    "wiki": "Ross Ice Shelf"
  },
  {
    "slug": "singing-barkhan",
    "category": "voices",
    "title": "The Singing Dune of Altyn-Emel",
    "region": "Altyn-Emel National Park, Almaty Region, Kazakhstan",
    "lat": 43.86,
    "lon": 78.56,
    "dateLabel": "Known for centuries",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Local people, travellers and visitors",
    "hook": "Between two mountain ranges in Kazakhstan stands a lone sand dune that groans like an organ when the sand slides.",
    "summary": [
      "In Altyn-Emel National Park in south-eastern Kazakhstan, a single huge sand dune, about 150 metres high and over a kilometre long, stands by itself between low mountains, far from any desert. In dry weather, when the wind blows or people slide down it, it gives out a deep, droning sound, like an organ or a distant aircraft.",
      "Local legends explain the sound in different ways, and the dune is said to have stayed in the same place for centuries despite the wind."
    ],
    "explanation": "Like other 'booming dunes', its sound comes from dry, rounded sand grains sliding together in an avalanche. The surrounding winds blow from opposite directions in different seasons, which is thought to keep the dune in place.",
    "wiki": null
  },
  {
    "slug": "atencion-numbers-station",
    "category": "voices",
    "title": "The 'Atención' Numbers Station",
    "region": "Broadcast from Cuba",
    "lat": 22.95,
    "lon": -82.5,
    "dateLabel": "Heard since the 1960s; exposed in a trial in 2001",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Shortwave listeners and the FBI",
    "hook": "For decades, a woman's voice on shortwave radio read out strings of numbers in Spanish. In 2001, it was heard in a US courtroom.",
    "summary": [
      "Shortwave listeners across the Americas have long heard a station that opens with the word 'Atención!' followed by a woman reading groups of numbers in Spanish. It was one of many 'numbers stations' that puzzled radio enthusiasts during the Cold War.",
      "Its purpose was a matter of speculation, as no government admitted to running such stations."
    ],
    "explanation": "In 1998, the FBI arrested members of a Cuban spy ring in Florida, known as the Wasp Network. At their trial in 2001, prosecutors showed that the spies had used shortwave radios and decoding software to read secret instructions from the Atención broadcasts. It was the first time a numbers station was publicly tied to spies in court.",
    "wiki": "Numbers station"
  },
  {
    "slug": "serengeti-gong-rock",
    "category": "voices",
    "title": "The Gong Rock of the Serengeti",
    "region": "Moru Kopjes, Serengeti, Tanzania",
    "lat": -2.75,
    "lon": 34.78,
    "dateLabel": "Used for centuries",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Maasai people, earlier communities and visitors",
    "hook": "In the middle of the Serengeti lies a great stone that rings like metal when struck, covered in hollows from centuries of drumming.",
    "summary": [
      "Among the rocky outcrops of the Moru Kopjes in the Serengeti lies a large, wedge-shaped boulder about 2 metres long. When struck with a smaller stone, it gives out clear, ringing, almost metallic notes, which change depending on where it is hit.",
      "Its surface is covered in dozens of round hollows, worn by generations of people striking it. The Maasai are said to have used it to call people together for gatherings and ceremonies."
    ],
    "explanation": "Geologists explain that some granite boulders ring when struck because of their shape and the way they rest, which lets them vibrate freely. Archaeologists think the gong was used long before the Maasai arrived about two centuries ago, making it an ancient musical instrument.",
    "wiki": null
  },
  {
    "slug": "chime-repeating-burst",
    "category": "voices",
    "title": "The Signal That Repeats Every 16 Days",
    "region": "CHIME radio telescope, near Penticton, British Columbia, Canada",
    "lat": 49.32,
    "lon": -119.62,
    "dateLabel": "Detected from 2018; pattern reported in 2020",
    "status": "explained",
    "statusLabel": "Partly explained",
    "witnesses": "Astronomers",
    "hook": "A Canadian radio telescope picked up flashes of radio waves from another galaxy, arriving in a pattern that repeats every 16 days.",
    "summary": [
      "Fast radio bursts are flashes of radio waves lasting a few thousandths of a second, coming from far beyond our galaxy. Most are seen only once. In 2018, the CHIME telescope in British Columbia began detecting repeated bursts from one source, named FRB 20180916B.",
      "In 2020, astronomers reported that its bursts follow a cycle: about four days of activity, then twelve days of silence, repeating every 16.35 days. The source was traced to a galaxy about 500 million light years away."
    ],
    "explanation": "Most astronomers think fast radio bursts come from magnetars, extremely magnetic neutron stars, and in 2020 one was caught producing a burst in our own galaxy. The 16-day cycle may come from the source orbiting another star or wobbling as it spins. Exactly what produces the pattern is still being studied.",
    "wiki": "Fast radio burst"
  },
  {
    "slug": "bhulbhulaiya-lucknow",
    "category": "voices",
    "title": "The Whispering Walls of the Bhulbhulaiya",
    "region": "Bara Imambara, Lucknow, Uttar Pradesh, India",
    "lat": 26.87,
    "lon": 80.91,
    "dateLabel": "Built in the 1780s",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Visitors and guides",
    "hook": "In a maze of passages in Lucknow, guides strike a match against one wall, and a visitor across the hall hears it clearly.",
    "summary": [
      "The Bara Imambara in Lucknow was built in the 1780s by Nawab Asaf-ud-Daula, partly to give work to people during a famine. Above its great hall, which has no supporting beams, is the Bhulbhulaiya, a maze of hundreds of narrow, identical passages.",
      "Guides show visitors how a whisper, the tearing of paper or the strike of a match on one side of the gallery around the hall can be heard clearly on the far side. It gave rise to the local saying that 'the walls have ears'."
    ],
    "explanation": "The effect comes from sound travelling along the hollow walls and curved surfaces with little loss, like the whispering galleries of Gol Gumbaz and St Paul's Cathedral. The maze itself is thought to have helped spread the weight of the great hall's roof.",
    "wiki": "Bara Imambara"
  },
  {
    "slug": "latoon-fairy-bush",
    "category": "visitors",
    "title": "The Fairy Bush of Latoon",
    "region": "Latoon, County Clare, Ireland",
    "lat": 52.88,
    "lon": -8.95,
    "dateLabel": "1999",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "A storyteller, local people and road builders",
    "hook": "When a new motorway in Ireland was planned through a hawthorn bush, a storyteller warned it was a meeting place of the fairies. The road was moved.",
    "summary": [
      "In Irish folklore, lone hawthorn bushes and ancient circular earthworks, known as fairy forts, belong to the 'good people', the fairies, and harming them brings bad luck. Farmers across Ireland have long ploughed around them.",
      "In 1999, the folklorist and storyteller Eddie Lenihan warned that a new road near Latoon, in County Clare, would destroy a whitethorn bush where, he said, local fairies gathered before setting out to fight their rivals. The story was reported around the world, and the road plans were altered to leave the bush standing."
    ],
    "explanation": "The fairies are folklore, but respect for fairy forts and bushes has protected many ancient sites across Ireland that might otherwise have been destroyed. The authorities did not say the fairies were the reason for the change, but the bush survived.",
    "wiki": null
  },
  {
    "slug": "big-grey-man",
    "category": "visitors",
    "title": "The Big Grey Man of Ben Macdhui",
    "region": "Ben Macdhui, Cairngorms, Scotland",
    "lat": 57.07,
    "lon": -3.67,
    "dateLabel": "Reported since 1925",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Mountaineers and hikers",
    "hook": "A respected scientist told how, alone on a Scottish mountain in the mist, he heard huge footsteps following him, and fled in terror.",
    "summary": [
      "In 1925, J. Norman Collie, a respected chemist and mountaineer, told a mountaineering club that years earlier, while descending Ben Macdhui, the second-highest mountain in Britain, alone in the mist, he had heard crunching footsteps behind him, one for every few of his own, as if something enormous was following. He ran for miles.",
      "Other climbers then came forward with similar stories of footsteps, a looming grey figure and a sudden feeling of dread on the mountain. It became known in Gaelic as Am Fear Liath Mòr, the Big Grey Man."
    ],
    "explanation": "Many think the giant figure is a Brocken spectre: a climber's own shadow cast onto mist below, magnified and ringed with light, which seems to move when they do. The footsteps may be echoes or the creaking of snow, and fear can grow in isolation on a misty summit.",
    "wiki": "Am Fear Liath Mòr"
  },
  {
    "slug": "tokoloshe",
    "category": "visitors",
    "title": "The Tokoloshe",
    "region": "Eastern Cape and across southern Africa",
    "lat": -32.0,
    "lon": 27.5,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Zulu, Xhosa and other communities",
    "hook": "In southern African folklore, a small, mischievous being called the tokoloshe comes at night, and some people still raise their beds on bricks to stay out of reach.",
    "summary": [
      "The tokoloshe is a figure of Zulu, Xhosa and other southern African folklore: a small, hairy, dwarf-like being that is said to cause mischief and illness, and can become invisible by drinking water or holding a pebble in its mouth.",
      "Because the tokoloshe is said to be short, a custom grew of raising beds on bricks so it can't reach the sleeper. The practice is still seen in parts of South Africa."
    ],
    "explanation": "The tokoloshe is a folklore figure, and stories about it often explain misfortune, bad dreams or illness. Some researchers link the bed-raising custom to sleep paralysis, the frightening sense of a presence in the room while waking, which is common around the world.",
    "wiki": "Tokoloshe"
  },
  {
    "slug": "patupaiarehe",
    "category": "visitors",
    "title": "The Patupaiarehe",
    "region": "Mount Pirongia, Waikato, New Zealand",
    "lat": -37.99,
    "lon": 175.09,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Māori tradition",
    "hook": "Māori tradition tells of the patupaiarehe, fair-skinned people of the misty hills, who play haunting music on their flutes at night.",
    "summary": [
      "In Māori tradition, the patupaiarehe are a people who live in the high, misty forests of mountains such as Pirongia and the Hunua Ranges. They are said to be pale-skinned, with red or fair hair, and to come out only at night or in mist, as sunlight is harmful to them.",
      "Stories tell that their flute music can be heard drifting from the hills, and that it sometimes lured people away."
    ],
    "explanation": "The patupaiarehe are figures of folklore, like the fairies of European tradition. Some writers have suggested the stories reflect early contact with other peoples, but there is no evidence for this, and many Māori see them as part of a spiritual landscape rather than a historical one.",
    "wiki": "Patupaiarehe"
  },
  {
    "slug": "ummo-letters",
    "category": "visitors",
    "title": "The Ummo Letters",
    "region": "Madrid, Spain",
    "lat": 40.42,
    "lon": -3.7,
    "dateLabel": "1960s – 1990s",
    "status": "explained",
    "statusLabel": "Hoax",
    "witnesses": "Hundreds of letter recipients",
    "hook": "For decades, people in Spain received detailed typed letters from beings who said they came from a planet called Ummo.",
    "summary": [
      "From the mid-1960s, hundreds of people, mostly in Spain, received typed letters signed by beings who claimed to come from Ummo, a planet orbiting a star about 14 light years away. The letters described Ummo's science, society and language in great detail, with diagrams and a distinctive symbol.",
      "In 1967, photographs of a craft bearing the Ummo symbol were taken near Madrid. The letters attracted a devoted following, and some scientists studied them seriously."
    ],
    "explanation": "In 1993, José Luis Jordán Peña, a Spanish psychologist, said he had written many of the letters as an experiment in how people come to believe things. Analysts had already found the photographs were faked, using a small model. Some followers still dispute his confession.",
    "wiki": "Ummo"
  },
  {
    "slug": "cergy-pontoise",
    "category": "visitors",
    "title": "The Cergy-Pontoise Case",
    "region": "Cergy-Pontoise, Val-d'Oise, France",
    "lat": 49.04,
    "lon": 2.06,
    "dateLabel": "26 November 1979",
    "status": "explained",
    "statusLabel": "Hoax",
    "witnesses": "Three young men",
    "hook": "Three young men near Paris said one of them was taken by a glowing sphere. He reappeared a week later, and decades afterwards a friend admitted it was a hoax.",
    "summary": [
      "Early on 26 November 1979, three young men loading a car near Cergy-Pontoise, a new town outside Paris, said a ball of light surrounded the car while one of them, Franck Fontaine, sat inside. When it vanished, so had he.",
      "He reappeared a week later, saying he had been aboard a craft. The case caused a sensation in France and was investigated by the police, who found no sign of a crime."
    ],
    "explanation": "Many investigators doubted the story at the time. In 2004, Jean-Pierre Prévost, one of the three, said in a book that they had invented the whole affair, and that Fontaine had been hiding with friends. The case is now widely regarded as a hoax.",
    "wiki": "Cergy-Pontoise UFO incident"
  },
  {
    "slug": "angelholm-1946",
    "category": "visitors",
    "title": "The Ängelholm Encounter",
    "region": "Kronoskogen, Ängelholm, Sweden",
    "lat": 56.24,
    "lon": 12.86,
    "dateLabel": "18 May 1946; told publicly from 1971",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Gösta Carlsson",
    "hook": "A Swedish man said that in 1946 he met small beings beside a landed craft in a forest clearing, and that they taught him about healing plants.",
    "summary": [
      "Gösta Carlsson, a businessman from Ängelholm in southern Sweden, said that on the night of 18 May 1946 he was walking in the Kronoskogen forest when he came upon a disc-shaped craft in a clearing and several small figures in tight suits. He said one of them warned him away.",
      "He kept the story to himself for decades. In the 1970s, after he had built a successful company making health products from pollen, he said the beings had given him the knowledge behind it. A monument with a model craft stands in the forest today."
    ],
    "explanation": "No other witnesses have been found, and his account appeared only 25 years later. Sceptics note that it grew in detail over time, and that it was told by a businessman who benefited from the publicity. Others say he was sincere.",
    "wiki": null
  },
  {
    "slug": "dokkaebi",
    "category": "visitors",
    "title": "The Dokkaebi",
    "region": "Across Korea",
    "lat": 36.5,
    "lon": 127.8,
    "dateLabel": "Told for centuries",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Korean tradition",
    "hook": "Korean folklore tells of the dokkaebi, mischievous goblins who challenge travellers to wrestling matches at night.",
    "summary": [
      "In Korean folklore, dokkaebi are mischievous beings, sometimes said to be formed from old household objects like brooms. They are fond of playing tricks, love wrestling and challenge travellers to matches on lonely roads at night. Many carry a magic club that can produce whatever its owner wishes.",
      "Stories describe dokkaebi rewarding good people and tricking greedy ones. Some tales say a traveller wrestling one all night might wake in the morning to find himself grappling with a broom or a tree."
    ],
    "explanation": "The dokkaebi are figures of folklore, different from the evil spirits of some traditions: they are usually playful rather than harmful. They remain popular in Korean children's stories, television dramas and festivals.",
    "wiki": "Dokkaebi"
  },
  {
    "slug": "mbale-meteorite",
    "category": "sky",
    "title": "The Mbale Meteorite",
    "region": "Mbale, Uganda",
    "lat": 1.08,
    "lon": 34.18,
    "dateLabel": "14 August 1992",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Thousands of residents of Mbale",
    "hook": "One afternoon, an explosion over a Ugandan town rained stones from the sky, and a small one bounced off a banana tree onto a boy's head.",
    "summary": [
      "At about 3:40 pm on 14 August 1992, people in Mbale, in eastern Uganda, heard a deafening explosion and saw a smoke trail in the sky. Moments later, stones began falling over the town and surrounding countryside, punching holes in roofs.",
      "One small fragment, weighing a few grams, fell through the leaves of a banana tree and struck a boy on the head. The leaves had slowed it down, and he was unhurt."
    ],
    "explanation": "Scientists identified the stones as fragments of a meteorite, an ordinary stony type, which broke apart in the air and scattered pieces across an area of about 3 by 7 km. Many kilograms of fragments were collected. It is one of the best-documented meteorite falls in Africa.",
    "wiki": "Mbale meteorite"
  },
  {
    "slug": "murchison-meteorite",
    "category": "sky",
    "title": "The Murchison Meteorite",
    "region": "Murchison, Victoria, Australia",
    "lat": -36.62,
    "lon": 145.2,
    "dateLabel": "28 September 1969",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Residents of Murchison",
    "hook": "A fireball over a small Australian town scattered stones that turned out to contain the building blocks of life, and grains of dust older than the Sun.",
    "summary": [
      "Late on the morning of 28 September 1969, people in Murchison, Victoria, saw a fireball split into pieces and heard a loud bang. Stones fell across the area, some through roofs, and one into a haystack. Residents noticed they smelled strongly of methylated spirits.",
      "More than 100 kg of fragments were collected. Because it was gathered so quickly, it reached scientists unusually free of contamination."
    ],
    "explanation": "Studies found it contains amino acids and many other organic compounds formed in space. In 2020, scientists reported that some of its tiny grains are stardust from before the Sun was born, the oldest solid material known on Earth, possibly up to 7 billion years old.",
    "wiki": "Murchison meteorite"
  },
  {
    "slug": "alh84001",
    "category": "sky",
    "title": "The Mars Rock from Antarctica",
    "region": "Allan Hills, Antarctica",
    "lat": -76.72,
    "lon": 159.67,
    "dateLabel": "Found 1984; claim made in 1996",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Meteorite hunters and NASA scientists",
    "hook": "A rock picked up from the Antarctic ice turned out to have come from Mars, and in 1996 scientists said it might hold fossils of tiny life.",
    "summary": [
      "In December 1984, a team searching for meteorites on the ice of the Allan Hills in Antarctica picked up a greenish rock. It was later shown to have come from Mars, blasted off by an impact millions of years ago, before landing in Antarctica about 13,000 years ago. It was labelled ALH84001.",
      "In 1996, a NASA-led team announced that the rock contained chemical traces and tiny tube-shaped structures that might be fossils of ancient Martian bacteria. US President Bill Clinton made a televised statement about it."
    ],
    "explanation": "Most scientists now think the features can be explained without life: the shapes are too small for known bacteria, and the chemistry can form through ordinary processes. The rock is still studied, and it helped launch decades of research into whether Mars ever had life.",
    "wiki": "Allan Hills 84001"
  },
  {
    "slug": "charlie-red-star",
    "category": "sky",
    "title": "Charlie Red Star",
    "region": "Carman, Manitoba, Canada",
    "lat": 49.5,
    "lon": -98.0,
    "dateLabel": "1975 – 1976",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Hundreds of residents of southern Manitoba",
    "hook": "For more than a year, a red light flew over the farms of southern Manitoba almost nightly, and residents gave it a friendly name.",
    "summary": [
      "In 1975, people in southern Manitoba, especially around the town of Carman, began seeing a bright red light in the night sky. It was described as a red ball, sometimes with a dome, hovering silently, moving slowly or darting away at speed. Sightings continued for about 16 to 18 months.",
      "It was seen so often that residents nicknamed it Charlie Red Star. People drove out to the countryside at night hoping to see it, and some photographed and filmed it."
    ],
    "explanation": "No official explanation was ever given. Suggestions include planets and stars seen through unusual atmospheric conditions, aircraft, and mass enthusiasm turning ordinary lights into sightings. Carman still celebrates it, and a book of residents' accounts has since been published.",
    "wiki": null
  },
  {
    "slug": "bonilla-1883",
    "category": "sky",
    "title": "The Bonilla Observation",
    "region": "Zacatecas Observatory, Zacatecas, Mexico",
    "lat": 22.77,
    "lon": -102.58,
    "dateLabel": "12–13 August 1883",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Astronomer José Bonilla",
    "hook": "In 1883, a Mexican astronomer watching the Sun counted more than 400 dark objects crossing its face, and photographed them.",
    "summary": [
      "On 12 August 1883, José Bonilla, director of the observatory in Zacatecas, was observing sunspots when he saw a stream of dark objects crossing in front of the Sun. Over two days he counted 447 of them, and took photographs, some of the earliest of their kind.",
      "He published his observations in 1886 in the French journal L'Astronomie. No other observatory reported seeing them."
    ],
    "explanation": "The journal's editors suggested the objects were birds, insects or dust passing close to the telescope, which would explain why no one else saw them. In 2011, researchers at Mexico's national university argued they might have been fragments of a comet passing very close to Earth. Neither explanation is agreed.",
    "wiki": "Bonilla observation"
  },
  {
    "slug": "scandinavian-rockets-1946",
    "category": "sky",
    "title": "The Rockets of 1946",
    "region": "Lake Kölmjärv, Norrbotten, and across Sweden",
    "lat": 66.2,
    "lon": 22.8,
    "dateLabel": "Summer 1946",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Thousands of people across Scandinavia",
    "hook": "In the summer of 1946, people across Sweden reported fast, rocket-like objects streaking through the sky. One appeared to crash into a lake.",
    "summary": [
      "Between May and December 1946, nearly 2,000 reports came in from Sweden, and more from Norway and Finland, of objects like rockets or missiles crossing the sky, often silently, sometimes with a fiery tail. The press called them 'ghost rockets'.",
      "On 19 July 1946, witnesses at Lake Kölmjärv in northern Sweden said an object dived into the lake. The Swedish military searched the lake bed but found nothing. Fears grew that the Soviet Union was testing captured German rockets."
    ],
    "explanation": "A Swedish military investigation concluded that most reports were meteors, aircraft or imagination, but a small number could not be explained. No evidence of Soviet tests was ever found. The wave helped set the stage for the 'flying saucer' reports in America the following year.",
    "wiki": "Ghost rockets"
  },
  {
    "slug": "wabar-craters",
    "category": "sky",
    "title": "The Wabar Craters",
    "region": "Rub' al Khali (Empty Quarter), Saudi Arabia",
    "lat": 21.5,
    "lon": 50.47,
    "dateLabel": "Found in 1932",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Explorer Harry St John Philby",
    "hook": "An explorer went into the Empty Quarter to find a lost city destroyed by fire from heaven. He found craters made by a meteorite.",
    "summary": [
      "Arab legends told of Wabar, or Ubar, a wealthy city in the deserts of Arabia destroyed by fire from heaven for its people's wickedness. In 1932, the British explorer Harry St John Philby set out across the Rub' al Khali, the Empty Quarter, guided by Bedouin who described ruins and pieces of iron at a place called al-Hadida.",
      "Philby found no ruins. Instead he found several craters in the sand, littered with black glass and chunks of iron."
    ],
    "explanation": "The craters were made by an iron meteorite that broke up and struck the desert, probably only a few hundred years ago. One fragment, the 'camel's hump', weighs over two tonnes. The legend of a city destroyed by fire may have been inspired by the impact.",
    "wiki": "Wabar craters"
  },
  {
    "slug": "storsjo-monster",
    "category": "creatures",
    "title": "The Storsjö Monster",
    "region": "Storsjön, Jämtland, Sweden",
    "lat": 63.18,
    "lon": 14.64,
    "dateLabel": "Reported since the 1600s",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Hundreds of residents and visitors",
    "hook": "In a deep lake in central Sweden, people report a long creature with humps, and for 19 years it was officially a protected species.",
    "summary": [
      "Storsjön, 'the Great Lake', in the province of Jämtland, has a long tradition of a large creature, often described with a long neck, humps and a dog-like head. A local legend from the 1600s tells of trolls who created it. Hundreds of sightings have been reported since the 19th century.",
      "In 1894, a company was set up to catch it, with specially made traps, without success. In 1986, the county government declared the creature a protected species, a status that was removed in 2005."
    ],
    "explanation": "No body, bones or clear photographs have been found. Suggested explanations include large fish, swimming elk or deer, floating logs and waves. The monster is a beloved local symbol, and a camera project has watched the lake for it.",
    "wiki": "Storsjöodjuret"
  },
  {
    "slug": "kting-voar",
    "category": "creatures",
    "title": "The Kting Voar",
    "region": "Mondulkiri, Cambodia",
    "lat": 12.5,
    "lon": 107.0,
    "dateLabel": "Reported in the 1990s",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Hunters, market traders and scientists",
    "hook": "Strange twisted horns sold in Cambodian markets were said to come from a hidden, snake-eating forest ox. Scientists tested them.",
    "summary": [
      "In the 1990s, scientists exploring Cambodia and Vietnam came across unusual horns being sold in markets: long and spirally twisted, with frayed tips. Local hunters said they came from the kting voar, the 'wild cow with twisted horns', a rare forest animal that was said to eat snakes.",
      "After the discovery of the saola in Vietnam, some scientists wondered if another unknown large mammal was waiting to be found, and the horns were described as a possible new species."
    ],
    "explanation": "Later DNA studies and close examination showed that the horns came from ordinary domestic cattle, and had been heated, twisted and carved, probably to sell as charms or trophies. Most scientists now consider the kting voar a mistake, though the region's forests have hidden real discoveries.",
    "wiki": "Kting voar"
  },
  {
    "slug": "bakunawa",
    "category": "creatures",
    "title": "The Bakunawa",
    "region": "Visayas, Philippines",
    "lat": 10.3,
    "lon": 123.9,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Filipino tradition",
    "hook": "In Philippine mythology, a giant sea serpent rises from the ocean to swallow the moon, and people bang pots to make it spit it out.",
    "summary": [
      "In the folklore of the Visayas and other parts of the Philippines, the bakunawa is an enormous sea serpent or dragon. In one version, the sky once held seven moons, and the bakunawa swallowed six of them. To protect the last one, people bang pots and pans and make noise until the creature spits it back out.",
      "The bakunawa is linked to eclipses of the moon and sun, and to the tides."
    ],
    "explanation": "The story explains lunar and solar eclipses, which are now understood as the Earth or moon passing into each other's shadow. Similar stories of creatures swallowing the moon or sun are found in many cultures, from India to China.",
    "wiki": "Bakunawa"
  },
  {
    "slug": "inkanyamba",
    "category": "creatures",
    "title": "The Inkanyamba of Howick Falls",
    "region": "Howick Falls, KwaZulu-Natal, South Africa",
    "lat": -29.48,
    "lon": 30.23,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Zulu tradition and local residents",
    "hook": "Zulu tradition says a great serpent lives in the pool beneath Howick Falls, and that its anger brings summer storms.",
    "summary": [
      "In Zulu tradition, the inkanyamba is a huge serpent-like creature, sometimes described with a horse-like head, that lives in deep pools, especially the one beneath Howick Falls, a 95-metre waterfall in KwaZulu-Natal. It is said to be most active in summer, and its anger is blamed for violent storms and tornadoes.",
      "Some local residents and visitors have reported seeing a large shape in the pool, and traditional healers have long made offerings there."
    ],
    "explanation": "No evidence of a large unknown animal has been found. Large eels live in the region's rivers, and some suggest they or other animals explain sightings. Many people see the inkanyamba as a spiritual figure connected to water and weather.",
    "wiki": "Inkanyamba"
  },
  {
    "slug": "cadejo",
    "category": "creatures",
    "title": "The Cadejo",
    "region": "El Salvador and across Central America",
    "lat": 13.7,
    "lon": -89.2,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Rural communities across Central America",
    "hook": "In Central America, travellers on lonely roads at night tell of a great black dog with burning eyes, and a white one that protects them from it.",
    "summary": [
      "In the folklore of El Salvador, Guatemala, Honduras, Nicaragua and southern Mexico, the cadejo is a large, dog-like creature that appears to people walking alone at night. The black cadejo, with glowing red eyes, is said to follow and frighten them.",
      "The white cadejo is its opposite: a protective spirit that walks beside travellers and keeps the black one away."
    ],
    "explanation": "The cadejo is a figure of folklore, often told to warn people about travelling alone at night or to explain fear on dark roads. Stray dogs following walkers at night may have helped keep the stories alive.",
    "wiki": "Cadejo"
  },
  {
    "slug": "waitoreke",
    "category": "creatures",
    "title": "The Waitoreke",
    "region": "South Island, New Zealand",
    "lat": -44.5,
    "lon": 169.0,
    "dateLabel": "Reported since the 1700s",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Early explorers, settlers and Māori tradition",
    "hook": "New Zealand has no native land mammals except bats, yet settlers reported an otter-like animal in its rivers and lakes.",
    "summary": [
      "New Zealand's only native land mammals are bats. Yet since the 18th century, explorers and settlers on the South Island have reported a small, furry, otter- or beaver-like animal in rivers and lakes, called the waitoreke. Some accounts describe tracks and a creature slipping into the water.",
      "Māori traditions of creatures in the water are sometimes linked to the reports."
    ],
    "explanation": "No specimen has ever been found. Suggested explanations include seals swimming up rivers, escaped pets or introduced animals, and misidentified birds. Some researchers have wondered whether a now-extinct mammal once lived there, as fossils of a small land mammal have been found in New Zealand dating back millions of years.",
    "wiki": "Waitoreke"
  },
  {
    "slug": "chuchunaa",
    "category": "creatures",
    "title": "The Chuchunaa",
    "region": "Verkhoyansk Range, Yakutia, Russia",
    "lat": 64.5,
    "lon": 126.0,
    "dateLabel": "Reported in the 1800s and 1900s",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Yakut and Evenk people, and Soviet-era researchers",
    "hook": "In the far north of Siberia, Yakut and Evenk people told of a tall, wild man dressed in animal skins, who lived in the mountains.",
    "summary": [
      "In Yakutia, in north-eastern Siberia, Yakut and Evenk people told of the chuchunaa: a tall, strong, human-like being with long hair, dressed in animal skins, that lived in remote parts of the Verkhoyansk mountains. Stories described it stealing food and reindeer, and avoiding people.",
      "In the 20th century, Soviet researchers collected reports, many from the 1920s and 1930s, and some wondered if the chuchunaa might be a relict population of early humans."
    ],
    "explanation": "No body, bones or photographs have been found. Some researchers think the stories describe people living wild in the taiga, escaped prisoners or isolated hunters, rather than an unknown species. The reports have become rare in recent decades.",
    "wiki": "Chuchunaa"
  },
  {
    "slug": "aspendos-theatre",
    "category": "voices",
    "title": "The Whispering Stage of Aspendos",
    "region": "Aspendos, Antalya, Türkiye",
    "lat": 36.94,
    "lon": 31.17,
    "dateLabel": "Built in the 2nd century CE",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Visitors and performers",
    "hook": "In a Roman theatre almost 2,000 years old, a coin dropped on the stage can be heard in the highest row of seats.",
    "summary": [
      "The Roman theatre at Aspendos, in southern Türkiye, was built in the 2nd century CE and is one of the best-preserved ancient theatres in the world. It seats around 7,000 people and is still used for concerts and festivals.",
      "Guides like to show visitors that a whisper, a clap or a coin dropped at the centre of the stage can be heard clearly from the top rows, high above."
    ],
    "explanation": "The effect comes from the theatre's design: the steeply raked semicircle of stone seats reflects sound from the stage back to the audience, while the tall stage building behind holds it in. Roman and Greek architects understood these principles, even without modern acoustics.",
    "wiki": "Aspendos"
  },
  {
    "slug": "corryvreckan-roar",
    "category": "voices",
    "title": "The Roar of Corryvreckan",
    "region": "Gulf of Corryvreckan, between Jura and Scarba, Scotland",
    "lat": 56.15,
    "lon": -5.72,
    "dateLabel": "Known for centuries",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Sailors and islanders",
    "hook": "Between two Scottish islands, a great whirlpool churns with the tide, and on still days its roar can be heard miles away.",
    "summary": [
      "The Gulf of Corryvreckan is a narrow strait between the islands of Jura and Scarba off western Scotland. When the tide races through, it forms one of the largest whirlpools in the world, with standing waves several metres high.",
      "Its roar can carry for many kilometres. Gaelic legend says it is the voice of the Cailleach, the winter hag, washing her great cloak in the whirlpool before the season turns."
    ],
    "explanation": "The whirlpool forms because strong tidal currents rush through the strait and over an uneven seabed, including a deep hole and a rock pinnacle that rises close to the surface. The roar is the sound of that turbulent water, which carries far over the sea on calm days.",
    "wiki": "Gulf of Corryvreckan"
  },
  {
    "slug": "cantref-gwaelod-bells",
    "category": "voices",
    "title": "The Bells of the Drowned Kingdom",
    "region": "Borth, Ceredigion, Wales",
    "lat": 52.49,
    "lon": -4.05,
    "dateLabel": "Legend for centuries; sunken forest exposed in 2014",
    "status": "explained",
    "statusLabel": "Partly confirmed",
    "witnesses": "Local people and archaeologists",
    "hook": "Welsh legend says a kingdom lies drowned beneath Cardigan Bay, and its church bells can still be heard under the waves. Then storms uncovered an ancient forest.",
    "summary": [
      "Welsh legend tells of Cantre'r Gwaelod, a fertile kingdom protected from the sea by dykes and gates, which was drowned when a watchman failed to close the floodgates. It is said that the bells of its churches still ring beneath the waters of Cardigan Bay in times of danger, a legend that inspired the folk song 'The Bells of Aberdovey'.",
      "In 2014, winter storms stripped sand from the beach at Borth and exposed the stumps of an ancient forest of oak, pine and birch, along with a wooden walkway."
    ],
    "explanation": "Scientists date the drowned forest to between about 4,500 and 6,000 years ago, when rising seas after the last Ice Age flooded low-lying land. There was no medieval kingdom, but the legend may preserve a very old memory of real land lost to the sea. The bells are folklore.",
    "wiki": "Cantre'r Gwaelod"
  },
  {
    "slug": "kodama-echoes",
    "category": "voices",
    "title": "The Kodama",
    "region": "Yakushima and the forests of Japan",
    "lat": 30.35,
    "lon": 130.53,
    "dateLabel": "Told for centuries",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Japanese tradition",
    "hook": "In Japanese folklore, the echo that answers you in the mountains is the voice of a kodama, a spirit that lives in an old tree.",
    "summary": [
      "In Japanese tradition, kodama are spirits that live in very old trees. When a voice or sound echoes back from the mountains, it was said to be the kodama answering. Cutting down a tree that holds a kodama was believed to bring misfortune, and some old trees are marked with sacred ropes.",
      "The ancient cedar forests of Yakushima island, where some trees are thousands of years old, are closely linked to the kodama in popular culture, and inspired the forest spirits in the film 'Princess Mononoke'."
    ],
    "explanation": "Echoes are sound reflecting off mountainsides and valleys. The kodama legend gives them a voice, and has helped protect ancient trees by encouraging respect for the forest.",
    "wiki": "Kodama (folklore)"
  },
  {
    "slug": "jebel-naqus",
    "category": "voices",
    "title": "The Mountain of the Bell",
    "region": "Jebel Naqus, near El Tor, South Sinai, Egypt",
    "lat": 28.33,
    "lon": 33.62,
    "dateLabel": "Legend recorded since the 1800s",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Bedouin, monks and travellers",
    "hook": "On a sandy mountain in Sinai, people heard bell-like booms and said a monastery lay buried inside, its bells still ringing for prayers.",
    "summary": [
      "Jebel Naqus, the 'Mountain of the Bell', is a hill near the Gulf of Suez in southern Sinai, with a steep slope of fine sand. Bedouin and travellers reported hearing deep, ringing sounds from it.",
      "Legend said a monastery had been swallowed by the mountain, and that the sound was its bells, or the wooden gong called a naqus that monks beat to call people to prayer."
    ],
    "explanation": "In the 19th century, the explorer James Wellsted ran down the sandy slope and set off the sound himself, loud enough to startle him. Like the singing dunes of China and Kazakhstan, the boom comes from dry sand grains sliding together in an avalanche.",
    "wiki": "Naqus"
  },
  {
    "slug": "captain-midnight",
    "category": "voices",
    "title": "Captain Midnight",
    "region": "Ocala, Florida, USA",
    "lat": 29.19,
    "lon": -82.14,
    "dateLabel": "27 April 1986",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Millions of HBO viewers",
    "hook": "Just after midnight, HBO viewers across the United States saw their film replaced by a message from someone calling himself Captain Midnight.",
    "summary": [
      "At 12:32 am on 27 April 1986, viewers of the television channel HBO in the eastern United States were watching the film 'The Falcon and the Snowman' when the picture was replaced by colour bars and a message protesting against HBO's prices for satellite dish owners, signed 'Captain Midnight'.",
      "The message stayed on screen for about four and a half minutes. It caused alarm, because if one person could take over a major satellite channel, others could too."
    ],
    "explanation": "The FBI traced it to John MacDougall, an engineer working the night shift at a satellite uplink station in Ocala, Florida, who had overpowered HBO's signal. He was fined and put on probation, and the incident led to new laws and technical safeguards.",
    "wiki": "Captain Midnight broadcast signal intrusion"
  },
  {
    "slug": "western-pacific-biotwang",
    "category": "voices",
    "title": "The Mariana Biotwang",
    "region": "Mariana Trench, Western Pacific",
    "lat": 11.35,
    "lon": 142.2,
    "dateLabel": "Recorded since 2014; identified in 2024",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Underwater recorders and scientists",
    "hook": "Near the deepest point on Earth, underwater microphones picked up a strange sound: a low grunt followed by a metallic twang.",
    "summary": [
      "In 2014, ocean gliders carrying underwater microphones near the Mariana Trench in the western Pacific recorded an unusual sound lasting a few seconds: a deep moan followed by a high, metallic twang, almost like a sound effect from a science fiction film.",
      "Researchers named it the 'Western Pacific biotwang', suspecting an animal, but couldn't identify it, and it became one of the ocean's best-known mystery sounds."
    ],
    "explanation": "In 2024, scientists matched the sound to Bryde's whales, after recording biotwangs at the same time as they saw the whales during research voyages. They then used artificial intelligence to find the call in years of earlier recordings, tracking the whales' movements across the Pacific.",
    "wiki": "Western Pacific Biotwang"
  },
  {
    "slug": "arctic-ping",
    "category": "voices",
    "title": "The Arctic Ping",
    "region": "Fury and Hecla Strait, near Igloolik, Nunavut, Canada",
    "lat": 69.9,
    "lon": -84.0,
    "dateLabel": "Summer 2016",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Inuit hunters near Igloolik",
    "hook": "Hunters in the Canadian Arctic heard a strange pinging from the seabed, and the animals they hunted disappeared. The military was sent to listen.",
    "summary": [
      "In the summer of 2016, Inuit hunters from Igloolik reported a strange beeping or pinging sound coming from under the water in Fury and Hecla Strait, a channel about 120 km away that is usually rich in bowhead whales, seals and walruses. They said the animals had left the area.",
      "In November, the Canadian military sent a patrol aircraft to investigate with acoustic sensors."
    ],
    "explanation": "The aircraft searched for over an hour and detected no unusual sounds or submarines, though it did see whales and walruses. Suggestions included sonar surveys by a nearby mining company, which said it had no equipment in the water, and natural sounds of the ice. The source was never confirmed.",
    "wiki": null
  },
  {
    "slug": "wild-hunt",
    "category": "voices",
    "title": "The Wild Hunt",
    "region": "Odenwald, Hesse, Germany",
    "lat": 49.72,
    "lon": 8.85,
    "dateLabel": "Told for centuries",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Villagers across Europe",
    "hook": "On stormy winter nights, Europeans said they heard a great hunt racing through the sky: horns, hooves and baying hounds overhead.",
    "summary": [
      "Across northern and central Europe, folklore tells of the Wild Hunt: a host of riders and hounds that sweeps through the sky on winter nights, led by a figure such as Odin, a legendary king or a cursed huntsman. People said they heard horns, hoofbeats, shouts and barking passing overhead, and stayed indoors.",
      "In the Odenwald in Germany, the legend of the Rodenstein knight said his phantom army rode out through the sky before a war."
    ],
    "explanation": "Folklorists suggest that the sounds behind the legend include winter storms howling through forests, and especially the calls of migrating geese flying over at night, which can sound remarkably like a pack of hounds. The legend has inspired music, paintings and stories for centuries.",
    "wiki": "Wild Hunt"
  },
  {
    "slug": "billy-meier",
    "category": "visitors",
    "title": "The Billy Meier Photographs",
    "region": "Schmidrüti, Zürich, Switzerland",
    "lat": 47.43,
    "lon": 8.9,
    "dateLabel": "From 1975",
    "status": "explained",
    "statusLabel": "Hoax",
    "witnesses": "Eduard 'Billy' Meier",
    "hook": "A Swiss farmer said beings from the Pleiades visited him, and took hundreds of photographs of their gleaming craft over the countryside.",
    "summary": [
      "From 1975, Eduard 'Billy' Meier, a one-armed farmer in Switzerland, said he was in regular contact with beings from the Pleiades star cluster, who flew 'beamships' and gave him messages about the future. He produced hundreds of clear photographs and films of disc-shaped craft over Swiss fields.",
      "The photographs became some of the most famous UFO images ever taken, and Meier gathered a devoted following."
    ],
    "explanation": "Investigators found evidence that the craft were small models, photographed close to the camera, and some features matched household objects. Photographs said to show a Pleiadian woman turned out to be of dancers from an American TV show. Meier's followers still defend his account.",
    "wiki": "Billy Meier"
  },
  {
    "slug": "men-in-black",
    "category": "visitors",
    "title": "The Men in Black",
    "region": "Bridgeport, Connecticut, USA",
    "lat": 41.18,
    "lon": -73.19,
    "dateLabel": "From 1953",
    "status": "open",
    "statusLabel": "Folklore",
    "witnesses": "A UFO researcher, as told by a friend's book",
    "hook": "In 1953, an American UFO researcher shut down his club, saying three men in black suits had visited and warned him to stop.",
    "summary": [
      "In 1953, Albert K. Bender, who ran a flying saucer research group from his home in Bridgeport, Connecticut, suddenly closed it down. He said three men dressed in black suits had visited him and warned him not to publish what he had learned about flying saucers.",
      "His friend Gray Barker wrote about it in a 1956 book, and the 'men in black' became a lasting part of UFO folklore: mysterious, oddly behaving visitors who appear after a sighting to silence witnesses."
    ],
    "explanation": "Bender later wrote a book saying the men were beings from another world, which many readers found hard to believe. Sceptics see the men in black as a story that grew in the retelling, possibly with real government interest in UFO reports at its root. The idea inspired the 'Men in Black' films.",
    "wiki": "Men in black"
  },
  {
    "slug": "fairy-flag-dunvegan",
    "category": "visitors",
    "title": "The Fairy Flag of Dunvegan",
    "region": "Dunvegan Castle, Isle of Skye, Scotland",
    "lat": 57.45,
    "lon": -6.59,
    "dateLabel": "Legend for centuries",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Clan MacLeod tradition",
    "hook": "In a Scottish castle hangs a faded silk flag said to be a gift from the fairies, able to save the clan three times when waved.",
    "summary": [
      "Dunvegan Castle on the Isle of Skye, seat of the chiefs of Clan MacLeod, keeps a fragile, faded silk banner called the Fairy Flag. Clan tradition says it was given to a MacLeod chief by a fairy, sometimes said to be his fairy wife, and that waving it in time of need will bring help.",
      "Legend says it can be used only three times, and that it has already been waved twice, to win battles or stop a plague among the clan's cattle."
    ],
    "explanation": "Textile experts who examined the flag found it is made of silk probably woven in the Middle East, perhaps Syria or Rhodes, between the 4th and 7th centuries, long before the MacLeods. How it reached Skye is unknown; one idea is that it was brought back from the Crusades.",
    "wiki": "Fairy Flag"
  },
  {
    "slug": "aluxes",
    "category": "visitors",
    "title": "The Aluxes of Yucatán",
    "region": "Yucatán Peninsula, Mexico",
    "lat": 20.97,
    "lon": -89.62,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Maya communities",
    "hook": "Maya farmers in Yucatán say tiny guardians called aluxes watch over fields, and build small houses for them to keep them happy.",
    "summary": [
      "In Maya folklore, aluxes are small, child-sized beings that live in the forest and fields of the Yucatán Peninsula. They can be helpful, guarding crops and bringing rain, but play tricks or cause trouble if they are not respected.",
      "Farmers traditionally build a small house for the aluxes in a corner of their fields and leave offerings of food and drink. Stories say building work goes wrong when aluxes are ignored."
    ],
    "explanation": "Aluxes are figures of folklore that remain an important part of Maya culture. Offerings to them are still made today, including, some say, at the start of large construction projects in the region.",
    "wiki": "Alux"
  },
  {
    "slug": "sombreron",
    "category": "visitors",
    "title": "El Sombrerón",
    "region": "Antigua and across Guatemala",
    "lat": 14.56,
    "lon": -90.73,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Guatemalan tradition",
    "hook": "In Guatemala, they say a small man in an enormous hat comes at night with his guitar, and in the morning, the horses' manes are braided.",
    "summary": [
      "El Sombrerón, 'the man with the big hat', is a figure of Guatemalan and Central American folklore: a short man dressed in black, with a huge sombrero and a guitar, who appears at night, often with a team of mules.",
      "He is said to braid the manes and tails of horses and mules in stables overnight, so tightly they cannot be undone. Some tales say he serenades people he takes a liking to."
    ],
    "explanation": "El Sombrerón is a folklore figure, especially associated with the old capital Antigua. Similar braided manes are explained elsewhere as 'elf locks' or 'witches' knots', tangles formed naturally in horses' hair. The legend has inspired plays and films in Guatemala.",
    "wiki": "Sombrerón"
  },
  {
    "slug": "tengu-kurama",
    "category": "visitors",
    "title": "The Tengu of Mount Kurama",
    "region": "Mount Kurama, north of Kyoto, Japan",
    "lat": 35.12,
    "lon": 135.77,
    "dateLabel": "Told for centuries",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Japanese tradition",
    "hook": "On a forested mountain north of Kyoto, legend says a tengu king taught a young warrior the art of the sword.",
    "summary": [
      "In Japanese folklore, tengu are mountain spirits, first imagined as bird-like and later as red-faced, long-nosed beings in the robes of mountain monks. They could be dangerous tricksters or protectors of the mountains and forests.",
      "The most famous tengu, Sōjōbō, is said to live on Mount Kurama near Kyoto. Legend tells that he trained the young Minamoto no Yoshitsune, who became one of Japan's greatest warriors, in swordsmanship deep in the forest."
    ],
    "explanation": "Tengu are figures of folklore, linked to the ascetic monks who trained in Japan's mountains. Mount Kurama remains a place of pilgrimage, and tengu masks are a common sight at festivals.",
    "wiki": "Tengu"
  },
  {
    "slug": "domovoy",
    "category": "visitors",
    "title": "The Domovoy",
    "region": "Villages of northern Russia",
    "lat": 59.22,
    "lon": 39.89,
    "dateLabel": "Told for centuries",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Slavic tradition",
    "hook": "In Slavic tradition, every home has its own domovoy, a small bearded spirit who lives behind the stove and must be kept happy.",
    "summary": [
      "In Russian and wider Slavic folklore, the domovoy is a household spirit, usually imagined as a small, hairy old man with a beard, who lives behind the stove or under the threshold. A happy domovoy looks after the family and animals; an offended one causes noises, broken dishes and nightmares.",
      "Families left him bread and milk, and when moving house, people would invite the domovoy to come along, sometimes carrying embers from the old stove to the new one."
    ],
    "explanation": "The domovoy is a folklore figure that reflects respect for home and hearth. Unexplained household noises, the creaks of wooden houses settling, and the feeling of pressure in sleep paralysis may have helped keep the stories alive.",
    "wiki": "Domovoy"
  },
  {
    "slug": "tikbalang",
    "category": "visitors",
    "title": "The Tikbalang",
    "region": "Rural Luzon, Philippines",
    "lat": 15.5,
    "lon": 121.0,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Filipino tradition",
    "hook": "In Philippine folklore, a tall, horse-headed figure lurks in the forest and leads travellers in circles until they're lost.",
    "summary": [
      "The tikbalang is a creature of Filipino folklore: a tall, bony figure with the head and hooves of a horse and very long limbs, so that its knees reach above its head when it squats. It is said to live in forests and bamboo groves and to lead travellers astray, making them walk in circles.",
      "To break its spell, people say, a traveller should wear their shirt inside out. Rain falling while the sun shines is said to mean a tikbalang is getting married."
    ],
    "explanation": "The tikbalang is a figure of folklore, perhaps shaped partly by the arrival of horses with Spanish colonisers. Stories of being led astray reflect the real ease of getting lost in dense forest.",
    "wiki": "Tikbalang"
  },
  {
    "slug": "nittaewo",
    "category": "visitors",
    "title": "The Nittaewo",
    "region": "Mahalenama, south-eastern Sri Lanka",
    "lat": 6.4,
    "lon": 81.4,
    "dateLabel": "Told by the Vedda people",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Vedda tradition, recorded by colonial writers",
    "hook": "The Vedda people of Sri Lanka told of the nittaewo, a small, hairy people who lived in the forest long ago and walked upright.",
    "summary": [
      "The Vedda, the indigenous people of Sri Lanka, told stories of the nittaewo: a race of small, hairy, human-like beings, about a metre tall, who lived in trees and caves in the remote Mahalenama area, had sharp claws and spoke in a twittering language.",
      "In the early 20th century, British colonial officials recorded the stories, and the Vedda said the nittaewo had disappeared generations earlier."
    ],
    "explanation": "Most researchers think the nittaewo are a figure of folklore, or a memory of other people or animals such as monkeys or sloth bears. Since the discovery of the small human species on Flores in Indonesia, some have wondered whether the stories could preserve a far older memory, though there is no evidence for this.",
    "wiki": "Nittaewo"
  },
  {
    "slug": "dendera-light",
    "category": "visitors",
    "title": "The 'Light Bulbs' of Dendera",
    "region": "Temple of Hathor, Dendera, Egypt",
    "lat": 26.14,
    "lon": 32.67,
    "dateLabel": "Carved about 2,000 years ago",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Visitors and Egyptologists",
    "hook": "Carvings in an Egyptian temple show what some say are giant electric light bulbs, held up by priests.",
    "summary": [
      "In crypts beneath the Temple of Hathor at Dendera, built in Ptolemaic and Roman times about 2,000 years ago, are reliefs showing a long, bulb-like shape with a wavy snake inside, rising from a lotus flower and supported by a pillar.",
      "From the 1980s, some writers claimed they showed electric lamps, with the snake as a filament, and that the Egyptians had electricity, perhaps learned from visitors from elsewhere."
    ],
    "explanation": "Egyptologists can read the hieroglyphic texts beside the reliefs, which describe a religious scene: a snake rising from a lotus flower, a symbol of creation and the birth of the sun god. No wires, glass bulbs or other electrical equipment have been found in Egypt.",
    "wiki": "Dendera light"
  },
  {
    "slug": "rubezahl",
    "category": "visitors",
    "title": "Rübezahl, Lord of the Mountains",
    "region": "Karkonosze (Krkonoše), Poland–Czech Republic",
    "lat": 50.74,
    "lon": 15.74,
    "dateLabel": "Told for centuries",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Mountain communities",
    "hook": "In the Giant Mountains of central Europe, a moody mountain spirit called Rübezahl controls the weather and plays tricks on travellers.",
    "summary": [
      "Rübezahl, known in Polish as Liczyrzepa and in Czech as Krakonoš, is the spirit of the Giant Mountains on the border of Poland and the Czech Republic. He can take many shapes, from a giant to a monk to an old man, and controls the mountain weather, sending sudden storms and fog.",
      "He is kind to the honest and poor, but punishes the rude and greedy. One story says he got his name, meaning 'turnip counter', when a princess he had captured tricked him into counting turnips while she escaped."
    ],
    "explanation": "Rübezahl is a folklore figure who reflects the real dangers of mountain weather. He is a beloved symbol of the region, appearing in statues, shop signs and children's stories on both sides of the border.",
    "wiki": "Rübezahl"
  },
  {
    "slug": "purple-frog",
    "category": "creatures",
    "title": "The Purple Frog",
    "region": "Western Ghats, Idukki, Kerala, India",
    "lat": 9.85,
    "lon": 77.0,
    "dateLabel": "Described by science in 2003",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Local people; scientists S.D. Biju and Franky Bossuyt",
    "hook": "In the Western Ghats lives a bloated purple frog that spends almost its whole life underground. Science only described it in 2003.",
    "summary": [
      "In 2003, scientists S.D. Biju of the University of Delhi and Franky Bossuyt of the Free University of Brussels described a strange new frog from the Western Ghats of Kerala: dark purple, round and bloated, with a small head and a pointed, pig-like snout.",
      "It lives buried several metres underground, feeding on termites with a special tongue, and comes to the surface for only a few weeks a year during the monsoon to breed. Local people knew it, but it had never been described by science."
    ],
    "explanation": "The purple frog's closest relatives live in the Seychelles, thousands of kilometres away. Their ancestors split apart more than 100 million years ago, when India broke away from other landmasses, which makes it a living fossil. It is now a symbol of the Western Ghats' hidden wildlife.",
    "wiki": "Purple frog"
  },
  {
    "slug": "barmanou",
    "category": "creatures",
    "title": "The Barmanou",
    "region": "Chitral, Khyber Pakhtunkhwa, Pakistan",
    "lat": 35.85,
    "lon": 71.79,
    "dateLabel": "Reported for generations",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Herders and villagers in northern Pakistan",
    "hook": "In the high valleys of northern Pakistan, shepherds tell of a hairy, upright 'big man' that roams the mountains.",
    "summary": [
      "In the mountains of Chitral and Gilgit-Baltistan in northern Pakistan, herders and villagers have long told of the barmanou, a large, hairy, ape-like creature that walks on two legs, wears animal skins in some tales and is said to steal from shepherds.",
      "In the 1990s, a Spanish zoologist spent years in Chitral collecting dozens of eyewitness accounts and footprints."
    ],
    "explanation": "No body, bones or clear photographs have been found. Suggested explanations include brown bears standing upright, people living wild in the mountains, and folklore. Some researchers link it to similar legends across the Himalayas and Central Asia, such as the yeti and the almas.",
    "wiki": "Barmanou"
  },
  {
    "slug": "khumjung-yeti-scalp",
    "category": "creatures",
    "title": "The Yeti Scalp of Khumjung",
    "region": "Khumjung Monastery, Solukhumbu, Nepal",
    "lat": 27.82,
    "lon": 86.71,
    "dateLabel": "Examined in 1960",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Monks and villagers; Edmund Hillary's expedition",
    "hook": "A monastery near Everest keeps a conical, hairy 'yeti scalp'. Edmund Hillary took it around the world to be tested.",
    "summary": [
      "The Buddhist monastery in Khumjung, a Sherpa village below Mount Everest, keeps a tall, cone-shaped scalp covered in coarse reddish hair, said to have come from a yeti. Villagers regard it as a treasure that protects the village.",
      "In 1960, Edmund Hillary, who had made the first ascent of Everest, led an expedition looking for the yeti. The village agreed to let him borrow the scalp, on condition that a village elder went with it, and that Hillary paid for repairs to the monastery and a school."
    ],
    "explanation": "Scientists who examined it concluded it had been moulded from the hide of a serow, a Himalayan goat-antelope. The scalp was returned to Khumjung, where it is still shown to trekkers today.",
    "wiki": "Khumjung"
  },
  {
    "slug": "migoi-sakteng",
    "category": "creatures",
    "title": "The Migoi of Sakteng",
    "region": "Sakteng Wildlife Sanctuary, Trashigang, Bhutan",
    "lat": 27.25,
    "lon": 91.95,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "The Brokpa people of eastern Bhutan",
    "hook": "In eastern Bhutan, a wildlife sanctuary was set up partly to protect the home of the migoi, Bhutan's yeti.",
    "summary": [
      "The Brokpa, a semi-nomadic yak-herding people of eastern Bhutan, tell of the migoi, the 'strong man': a large, hairy, ape-like creature that can make itself invisible and walk backwards to confuse anyone following its tracks.",
      "When Bhutan created the Sakteng Wildlife Sanctuary in 2003, the migoi was included among the creatures whose habitat it protects. It is often described as the only reserve in the world that protects a yeti."
    ],
    "explanation": "No migoi has been found or photographed. Scientists suggest sightings may be of Himalayan black bears or other animals. The sanctuary also protects real and rare wildlife, including red pandas and snow leopards, and the legend has helped draw attention to it.",
    "wiki": "Sakteng Wildlife Sanctuary"
  },
  {
    "slug": "naga-oarfish-photo",
    "category": "creatures",
    "title": "The 'Captured Naga' Photograph",
    "region": "Mekong River, Laos (as claimed)",
    "lat": 17.97,
    "lon": 102.6,
    "dateLabel": "Photo taken in 1996; claimed to be from 1973",
    "status": "explained",
    "statusLabel": "Hoax",
    "witnesses": "No witnesses in Laos",
    "hook": "A photograph shows soldiers holding up a giant sea serpent, said to be a naga captured in the Mekong in 1973.",
    "summary": [
      "A photograph widely shared across Thailand and Laos shows a group of American servicemen holding up an enormous silver serpent, over 7 metres long. A caption claims it shows the 'Queen of the Nagas', captured by the US Army in the Mekong River in Laos in 1973.",
      "The naga, a great serpent of Buddhist and Hindu tradition, is believed to live in the Mekong, and the photo became a celebrated piece of 'evidence'. Copies hang in shops and temples."
    ],
    "explanation": "The photograph was actually taken in 1996, when US Navy trainees found a dead giant oarfish washed up near San Diego, California. Oarfish are real fish that can grow longer than 8 metres and rarely come to the surface, and they may explain many sea-serpent sightings around the world.",
    "wiki": "Giant oarfish"
  },
  {
    "slug": "kasai-rex",
    "category": "creatures",
    "title": "The Kasai Rex",
    "region": "Kasai region, Democratic Republic of the Congo",
    "lat": -6.0,
    "lon": 22.5,
    "dateLabel": "Reported in 1932",
    "status": "explained",
    "statusLabel": "Hoax",
    "witnesses": "A plantation owner's account and later photos",
    "hook": "A plantation owner claimed he saw a giant, dinosaur-like lizard attack a rhinoceros in the Congo. The photographs were fakes.",
    "summary": [
      "In 1932, a Swedish plantation owner named John Johanson said that while travelling in the Kasai region of what is now the Democratic Republic of the Congo, he and his guide saw a huge animal, about 13 metres long, red with black stripes, rush out of the undergrowth and attack a rhinoceros.",
      "The story spread with photographs said to show the animal, and the 'Kasai rex' became a favourite of stories about living dinosaurs in Africa."
    ],
    "explanation": "Researchers showed that the best-known photograph was a fake, made by drawing or pasting a lizard onto a picture of a dead animal, and another was a composite using a model of a Tyrannosaurus. There are no rhinoceroses in that part of the Congo. Most consider the whole story a hoax.",
    "wiki": "Kasai rex"
  },
  {
    "slug": "bili-ape",
    "category": "creatures",
    "title": "The Bili Apes",
    "region": "Bili forest, northern Democratic Republic of the Congo",
    "lat": 4.15,
    "lon": 25.15,
    "dateLabel": "Reported from 1996; studied in the 2000s",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Hunters, photographers and primatologists",
    "hook": "Hunters in a remote Congo forest told of giant apes that slept on the ground and howled at the moon. Scientists went to find them.",
    "summary": [
      "In 1996, a Swiss photographer working in the Bili forest of the northern Democratic Republic of the Congo brought back skulls and stories from local hunters of huge apes, bigger than normal chimpanzees, that nested on the ground like gorillas and were said to be unafraid of leopards.",
      "The press called them 'lion killers' or a possible new species of great ape, and their size and behaviour caused excitement among scientists."
    ],
    "explanation": "Researchers who later studied them, including primatologist Cleve Hicks, found that they are eastern chimpanzees, genetically ordinary, but unusually large and with distinctive behaviour, including nesting on the ground and their own tool-use traditions. They are a real and special population, not a new species.",
    "wiki": "Bili ape"
  },
  {
    "slug": "taniwha-karu-tahi",
    "category": "creatures",
    "title": "The Taniwha of Meremere",
    "region": "Meremere, Waikato, New Zealand",
    "lat": -37.32,
    "lon": 175.08,
    "dateLabel": "Told for generations; road changed in 2002",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Ngāti Naho; road engineers",
    "hook": "When a New Zealand highway was planned through a swamp, local Māori warned it would disturb a one-eyed guardian. The road was moved.",
    "summary": [
      "In Māori tradition, taniwha are powerful beings that live in rivers, lakes and the sea. Some are guardians of a tribe or a place; others are dangerous. They are often described as giant reptiles, sharks or eels.",
      "In 2002, the local Ngāti Naho people told the transport authority that a planned stretch of State Highway 1 at Meremere would disturb the home of Karu Tahi, a one-eyed taniwha, in a swamp beside the Waikato River. The road was redesigned to avoid the swamp."
    ],
    "explanation": "The taniwha is a figure of Māori belief. The redesign also had practical value: in 2004, the Waikato River flooded the swamp, which would have threatened the original route. Some engineers have since pointed to the case as an example of local knowledge about the land.",
    "wiki": "Taniwha"
  },
  {
    "slug": "cadborosaurus",
    "category": "creatures",
    "title": "Cadborosaurus",
    "region": "Cadboro Bay, Victoria, British Columbia, Canada",
    "lat": 48.46,
    "lon": -123.29,
    "dateLabel": "Reported since the 1930s",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Sailors, fishermen and coastal residents",
    "hook": "Off the coast of British Columbia, people report a long sea serpent with a horse-like head, nicknamed Caddy.",
    "summary": [
      "Since the 1930s, people along the coast of British Columbia and Washington state have reported a long, serpent-like animal in the sea, with a head like a horse or camel and humps along its back. A Victoria newspaper editor named it Cadborosaurus, 'Caddy' for short, after Cadboro Bay.",
      "Coastal First Nations traditions also include sea creatures, and in 1937, whalers photographed a strange carcass found in a whale's stomach that some believed was a young Caddy."
    ],
    "explanation": "The 1937 remains were never kept or tested, and many think they were a fish or another known animal. Suggested explanations for sightings include sea lions swimming in a line, oarfish, elephant seals and floating kelp. No specimen has been confirmed.",
    "wiki": "Cadborosaurus"
  },
  {
    "slug": "rolling-calf",
    "category": "creatures",
    "title": "The Rolling Calf",
    "region": "Rural Jamaica",
    "lat": 18.1,
    "lon": -77.3,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Jamaican tradition",
    "hook": "In Jamaican folklore, a calf with blazing eyes roams the roads at night, dragging a chain behind it.",
    "summary": [
      "The rolling calf is one of the best-known figures in Jamaican folklore: a creature that looks like a calf or bull, with fiery red eyes, that roams country roads and lanes at night, dragging a clanking chain. People walking home in the dark said they heard the chain before they saw it.",
      "Stories say it can be kept away by certain tricks, such as dropping grains or seeds for it to count, or by the light of a full moon."
    ],
    "explanation": "The rolling calf is a figure of folklore, with roots in both African and European traditions, and it is often told as a warning against wandering at night. Stray livestock and the sounds of the night may have helped keep the stories alive.",
    "wiki": "Rolling calf"
  },
  {
    "slug": "asteroid-2018-la",
    "category": "sky",
    "title": "The Asteroid Seen Before It Struck",
    "region": "Central Kalahari Game Reserve, Botswana",
    "lat": -21.5,
    "lon": 23.8,
    "dateLabel": "2 June 2018",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Astronomers; a security camera; meteorite searchers",
    "hook": "Astronomers spotted a small asteroid just eight hours before it hit Earth, and then found its pieces in the Kalahari.",
    "summary": [
      "On 2 June 2018, the Catalina Sky Survey in Arizona spotted a small asteroid heading for Earth, about 2 metres across. Just eight hours later, it entered the atmosphere over southern Africa and exploded as a brilliant fireball over Botswana, caught on a security camera.",
      "It was only the third time in history that an asteroid had been seen in space before striking Earth."
    ],
    "explanation": "Scientists calculated where fragments should have landed, and a team from Botswana, South Africa, Finland and the United States searched the Central Kalahari Game Reserve. On the fifth day, they found the first of 23 meteorites. Studies suggest the asteroid came from Vesta, one of the largest bodies in the asteroid belt.",
    "wiki": "2018 LA"
  },
  {
    "slug": "lake-cote-1971",
    "category": "sky",
    "title": "The Lake Cote Photograph",
    "region": "Lake Cote, Guanacaste, Costa Rica",
    "lat": 10.58,
    "lon": -84.91,
    "dateLabel": "4 September 1971",
    "status": "open",
    "statusLabel": null,
    "witnesses": "A government mapping camera; the crew saw nothing",
    "hook": "A Costa Rican government survey plane photographing a lake for mapping captured a sharp, metallic disc in a single frame.",
    "summary": [
      "On 4 September 1971, a plane from Costa Rica's National Geographic Institute was flying at about 3,000 metres over Lake Cote, taking aerial photographs for a hydroelectric project. Its mapping camera fired automatically every few seconds.",
      "When the film was developed, one frame showed a disc-shaped, apparently metallic object over the lake, which did not appear in the frames before or after. The crew had not seen anything unusual."
    ],
    "explanation": "Several analysts found no sign of a hoax or film defect. Sceptics suggest an object near the plane, such as a balloon or a piece of debris, a reflection, or a bird caught in mid-flight, and note that one frame is not enough to judge size or distance. The original negative is kept by the institute.",
    "wiki": "Lake Cote"
  },
  {
    "slug": "brocken-spectre",
    "category": "sky",
    "title": "The Brocken Spectre",
    "region": "The Brocken, Harz Mountains, Germany",
    "lat": 51.8,
    "lon": 10.62,
    "dateLabel": "Described since 1780",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Hikers and climbers",
    "hook": "On a misty German mountain, climbers saw a giant shadowy figure in the clouds, crowned with a rainbow halo, that moved when they moved.",
    "summary": [
      "The Brocken is the highest peak in northern Germany, often wrapped in mist and long linked with legends of witches. In 1780, the scientist Johann Silberschlag described a strange sight there: a huge, dark human figure standing in the clouds, surrounded by rings of coloured light.",
      "Climbers on many mountains have since reported the same thing, and some found it frightening until they noticed that the giant copied their own movements."
    ],
    "explanation": "The 'spectre' is the observer's own shadow, cast by the low sun onto mist or cloud below, which makes it look enormous and far away. The coloured rings, called a glory, are caused by light bending around tiny water droplets. It is now known simply as a Brocken spectre wherever it appears.",
    "wiki": "Brocken spectre"
  },
  {
    "slug": "berwyn-1974",
    "category": "sky",
    "title": "The Berwyn Mountain Incident",
    "region": "Berwyn Mountains, near Llandrillo, Wales",
    "lat": 52.9,
    "lon": -3.4,
    "dateLabel": "23 January 1974",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Villagers, a nurse and police",
    "hook": "One winter evening in Wales, a loud bang shook a village, lights glowed on the mountain, and rumours spread of a crashed craft.",
    "summary": [
      "On the evening of 23 January 1974, people around Llandrillo in north Wales heard a loud explosion and felt the ground shake. Some reported a bright light in the sky, and others saw glowing lights on the hillside of the Berwyn Mountains.",
      "A nurse who drove up the mountain said she saw a large glowing sphere. Rumours grew over the years of a crashed craft and a military cover-up, and the case became known as the 'Welsh Roswell'."
    ],
    "explanation": "Researchers found that a small earthquake of about magnitude 3.5 struck the area at that moment, and that a bright meteor was seen across Britain at almost the same time. The lights on the hill were probably from hunters using lamps. Together, these explain the events, though some still believe more happened.",
    "wiki": "Berwyn Mountains UFO incident"
  },
  {
    "slug": "tissint-meteorite",
    "category": "sky",
    "title": "The Tissint Mars Meteorite",
    "region": "Tata Province, Morocco",
    "lat": 29.48,
    "lon": -7.61,
    "dateLabel": "18 July 2011",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Nomads and local residents",
    "hook": "One July night, people in the Moroccan desert saw a bright fireball. The stones it scattered turned out to be from Mars.",
    "summary": [
      "Around 2 am on 18 July 2011, people in the desert of south-eastern Morocco saw a bright yellow fireball turn green, then break apart with two loud bangs. Months later, nomads began finding black, glassy stones in the area near Tissint.",
      "Scientists who examined them found gas bubbles trapped inside that matched the atmosphere of Mars, as measured by spacecraft."
    ],
    "explanation": "Tissint is a piece of Mars, blasted off by an impact about 700,000 years ago, which drifted through space before falling to Earth. It is only the fifth Martian meteorite ever seen to fall, which meant it was collected before it could be changed by Earth's weather, making it extremely valuable to science.",
    "wiki": "Tissint meteorite"
  },
  {
    "slug": "morning-glory-clouds",
    "category": "sky",
    "title": "The Morning Glory Clouds",
    "region": "Burketown, Gulf of Carpentaria, Queensland, Australia",
    "lat": -17.74,
    "lon": 139.55,
    "dateLabel": "Most years, September to November",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Locals, glider pilots and scientists",
    "hook": "On spring mornings over a small Australian town, a single cloud up to 1,000 km long rolls in from the sea like a giant tube.",
    "summary": [
      "Near Burketown, in the remote Gulf Country of northern Australia, a spectacular cloud appears on some mornings between September and November: a long, rolling tube of cloud that can stretch for hundreds of kilometres, sometimes in several parallel bands, moving in from the Gulf of Carpentaria at dawn.",
      "Aboriginal people of the region have long known it. Today, glider pilots travel from around the world to ride the rising air on its front edge, like surfers on a wave."
    ],
    "explanation": "Scientists explain it as a kind of atmospheric wave. When sea breezes from opposite sides of the Cape York Peninsula collide overnight, they create a wave in a layer of cool, moist air, and cloud forms along its crest. Morning glory clouds appear elsewhere, but are most regular here.",
    "wiki": "Morning Glory cloud"
  },
  {
    "slug": "popocatepetl-objects",
    "category": "sky",
    "title": "The Popocatépetl Webcam Objects",
    "region": "Popocatépetl volcano, Puebla, Mexico",
    "lat": 19.02,
    "lon": -98.62,
    "dateLabel": "From 2012",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "A volcano webcam and TV viewers",
    "hook": "A webcam watching Mexico's most active volcano caught a glowing object that seemed to dive straight into the crater.",
    "summary": [
      "Popocatépetl is an active volcano south-east of Mexico City, watched around the clock by cameras. In October 2012, a television network broadcast footage from one camera that appeared to show a long, glowing object descending straight into the crater.",
      "More clips followed over the years showing lights and shapes near the summit, and the volcano gained a reputation as a 'UFO base' online."
    ],
    "explanation": "Analysts pointed out that the webcam takes images at intervals, which makes anything passing through look much faster and stranger than it is. The 2012 object is widely thought to be a meteor or an aircraft caught across several frames, and other clips show insects, birds, lens reflections or volcanic debris.",
    "wiki": null
  },
  {
    "slug": "paulding-light",
    "category": "sky",
    "title": "The Paulding Light",
    "region": "Robbins Pond Road, near Paulding, Michigan, USA",
    "lat": 46.36,
    "lon": -89.18,
    "dateLabel": "Reported since the 1960s; tested in 2010",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Visitors; Michigan Tech students",
    "hook": "At the end of a forest road in Michigan, a light appears in the distance at night, glows and fades. Legend says it's an old railwayman's lantern.",
    "summary": [
      "Since the 1960s, people have driven to a viewing spot on a forest road near Paulding, in Michigan's Upper Peninsula, to watch a light that appears in the valley at night: a white or red glow that brightens, wavers and fades away. A sign at the spot tells the local legend that it is the lantern of a railwayman killed on the line.",
      "Crowds gather on summer nights to see it."
    ],
    "explanation": "In 2010, students from Michigan Technological University studied the light with a telescope and found they could see car headlights and tail lights on a highway several kilometres away, distorted by the hills and the air. They timed lights to passing cars. Most researchers accept this explanation.",
    "wiki": "Paulding Light"
  },
  {
    "slug": "mohenjo-daro-claims",
    "category": "places",
    "title": "Mohenjo-daro and the 'Ancient Blast'",
    "region": "Mohenjo-daro, Sindh, Pakistan",
    "lat": 27.33,
    "lon": 68.14,
    "dateLabel": "City built about 4,500 years ago",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Archaeologists and writers",
    "hook": "Some writers claim the great Indus city of Mohenjo-daro was destroyed by an ancient nuclear blast. Archaeologists found something else.",
    "summary": [
      "Mohenjo-daro, in Sindh, Pakistan, was one of the great cities of the Indus Valley Civilisation, built around 2500 BCE, with brick houses, drains, granaries and a great bath. It was abandoned around 1900 BCE, and its writing has never been deciphered.",
      "Since the 1970s, some writers have claimed the city was destroyed in a nuclear war thousands of years ago, pointing to stories in ancient texts and claims of high radioactivity and melted stone."
    ],
    "explanation": "Archaeologists have found no unusual radioactivity, no melted city and no sign of sudden destruction. The city declined slowly, probably because of changes in rivers and climate that affected farming and trade across the Indus region. It is a UNESCO World Heritage Site, threatened today by salt and flooding.",
    "wiki": "Mohenjo-daro"
  },
  {
    "slug": "singapore-stone",
    "category": "places",
    "title": "The Singapore Stone",
    "region": "Mouth of the Singapore River, Singapore",
    "lat": 1.29,
    "lon": 103.85,
    "dateLabel": "Inscribed about 700 years ago; blown up in 1843",
    "status": "open",
    "statusLabel": "Unread",
    "witnesses": "Historians and visitors",
    "hook": "A great inscribed boulder stood at the mouth of the Singapore River for centuries. The British blew it up, and nobody can read what's left.",
    "summary": [
      "At the mouth of the Singapore River once stood a huge sandstone boulder covered in an ancient inscription. Malay legend said it was thrown there by Badang, a strongman of old Singapore, in a contest of strength.",
      "In 1843, British engineers blew the boulder up to widen the river mouth and make room for a fort. Scholars saved a few fragments, and one is now in the National Museum of Singapore."
    ],
    "explanation": "The writing is thought to be an old script related to those of Java or Sumatra, from the 10th to 14th centuries, but too little survives to read it. It may record a king or an event in early Singapore's history. The fragment is one of Singapore's national treasures.",
    "wiki": "Singapore Stone"
  },
  {
    "slug": "issyk-kul-ruins",
    "category": "places",
    "title": "The City Beneath Issyk-Kul",
    "region": "Toru-Aygyr, Lake Issyk-Kul, Kyrgyzstan",
    "lat": 42.53,
    "lon": 76.48,
    "dateLabel": "Flooded in the early 1400s; surveyed from the 2000s",
    "status": "explained",
    "statusLabel": "Partly confirmed",
    "witnesses": "Local fishermen and archaeologists",
    "hook": "Legends said cities lay drowned under a great mountain lake in Kyrgyzstan. Divers have found streets and buildings beneath the water.",
    "summary": [
      "Lake Issyk-Kul, high in the Tian Shan mountains of Kyrgyzstan, is one of the largest mountain lakes in the world. Local legends told of towns swallowed by its waters, and fishermen sometimes pulled up old pots and bricks in their nets.",
      "Underwater archaeologists have explored the shallows near the village of Toru-Aygyr, a few metres below the surface, and found the remains of brick buildings, a mill, ceramic vessels and a cemetery."
    ],
    "explanation": "Archaeologists think a powerful earthquake in the early 1400s caused part of a medieval Silk Road trading town to sink beneath the lake. The legends had a real basis, though there was no single lost city of gold. Surveys of the lake bed continue.",
    "wiki": null
  },
  {
    "slug": "genghis-khan-tomb",
    "category": "places",
    "title": "The Lost Tomb of Genghis Khan",
    "region": "Near Burkhan Khaldun, Khentii, Mongolia",
    "lat": 48.76,
    "lon": 108.65,
    "dateLabel": "Lost since 1227",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Historians, archaeologists and searchers",
    "hook": "Genghis Khan ruled the largest land empire in history. Where he was buried has been kept secret for 800 years.",
    "summary": [
      "Genghis Khan, founder of the Mongol Empire, died in 1227. According to tradition, he was buried in secret, perhaps near Burkhan Khaldun, a mountain in north-eastern Mongolia sacred to him, and the place was hidden: horses were said to have trampled the ground, and forests grew over it.",
      "For centuries, the area was a forbidden zone, guarded and closed to outsiders. Expeditions in modern times have searched with satellites, drones and ground radar, including a project that asked thousands of volunteers to scan satellite images online."
    ],
    "explanation": "The tomb has never been found. Many Mongolians feel it should not be disturbed, out of respect for Genghis Khan's wishes, and the area around Burkhan Khaldun is now a UNESCO World Heritage Site.",
    "wiki": "Tomb of Genghis Khan"
  },
  {
    "slug": "mustatils",
    "category": "places",
    "title": "The Mustatils of Arabia",
    "region": "Near AlUla and Khaybar, north-western Saudi Arabia",
    "lat": 26.6,
    "lon": 37.9,
    "dateLabel": "Built about 7,000 years ago",
    "status": "explained",
    "statusLabel": "Partly explained",
    "witnesses": "Archaeologists",
    "hook": "Across the deserts of north-west Arabia, satellite images reveal over a thousand giant stone rectangles, some longer than five football pitches.",
    "summary": [
      "In north-western Saudi Arabia, hundreds of long, low stone structures lie across the desert, each a rectangle with thick walls and a 'head' at one end. Some are more than 600 metres long. Local Bedouin knew them, but their scale only became clear from satellite images and aerial surveys.",
      "Archaeologists named them mustatils, from the Arabic for 'rectangle'. More than 1,600 have been mapped."
    ],
    "explanation": "Excavations found that they were built around 7,000 years ago, which makes them older than Stonehenge and the pyramids. Animal bones and horns found inside suggest they were used for rituals, perhaps offerings. Who built them, and exactly what for, is still being studied.",
    "wiki": "Mustatil"
  },
  {
    "slug": "ubar-shisr",
    "category": "places",
    "title": "Ubar, the Atlantis of the Sands",
    "region": "Shisr, Dhofar, Oman",
    "lat": 18.26,
    "lon": 53.65,
    "dateLabel": "Legend for centuries; found in 1992",
    "status": "explained",
    "statusLabel": "Partly confirmed",
    "witnesses": "Explorers, archaeologists and NASA radar",
    "hook": "Legend told of Ubar, a rich city of the incense trade swallowed by the sand. In 1992, satellite images led explorers to its ruins.",
    "summary": [
      "Arabian legends and the Quran speak of Iram or Ubar, a wealthy city destroyed for its people's pride. T.E. Lawrence called it 'the Atlantis of the sands'. Explorers searched the deserts of southern Arabia for it for decades.",
      "In the early 1990s, a team including filmmaker Nicholas Clapp, archaeologist Juris Zarins and explorer Ranulph Fiennes used radar images from NASA's Space Shuttle to trace old caravan tracks, which converged on Shisr in Oman."
    ],
    "explanation": "There, in 1992, they excavated a fortress around a well, a trading post on the frankincense route, which had partly collapsed into a sinkhole beneath it. Many think this was the Ubar of legend, though some historians argue Ubar was a region rather than a single city.",
    "wiki": "Ubar"
  },
  {
    "slug": "nan-madol",
    "category": "places",
    "title": "Nan Madol",
    "region": "Pohnpei, Federated States of Micronesia",
    "lat": 6.84,
    "lon": 158.33,
    "dateLabel": "Built from about the 1100s",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Pohnpeians, archaeologists and visitors",
    "hook": "On a Pacific reef stand the ruins of a city built from stacked basalt columns. Legend says two sorcerers flew the stones into place.",
    "summary": [
      "Off the island of Pohnpei in Micronesia lie the ruins of Nan Madol: nearly a hundred artificial islands linked by canals, with walls built of huge, dark basalt columns stacked like logs, some weighing several tonnes. It was the seat of the Saudeleur dynasty that ruled Pohnpei for centuries.",
      "Pohnpeian legend says it was built by twin sorcerers, Olisihpa and Olosohpa, who used magic to fly the stones through the air. It is a UNESCO World Heritage Site."
    ],
    "explanation": "Archaeologists say the basalt came from natural columns on the island, and was moved by raft and lever, probably over generations. Exactly how the heaviest stones were moved and lifted is still debated. The ruins are threatened today by mangroves and rising seas.",
    "wiki": "Nan Madol"
  },
  {
    "slug": "pitch-lake",
    "category": "places",
    "title": "The Pitch Lake",
    "region": "La Brea, Trinidad and Tobago",
    "lat": 10.23,
    "lon": -61.63,
    "dateLabel": "Known for centuries",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Local people, sailors and scientists",
    "hook": "In Trinidad, a lake of black, oozing asphalt bubbles and shifts. Legend says it swallowed a village that angered the spirits.",
    "summary": [
      "The Pitch Lake at La Brea, in southern Trinidad, is the largest natural deposit of asphalt in the world: about 40 hectares of black, sticky pitch, firm enough to walk on in places, with pools of water and bubbles of gas. Sir Walter Raleigh used it to seal his ships in 1595.",
      "A legend of the Chaima people says the lake appeared when the gods punished a village for killing sacred hummingbirds, swallowing it whole."
    ],
    "explanation": "Geologists explain that oil seeps up from deep underground along a fault, and the lighter parts evaporate, leaving thick asphalt. The lake slowly churns, which brings up old objects. Scientists have even found microbes living in tiny water droplets in the pitch.",
    "wiki": "Pitch Lake"
  },
  {
    "slug": "teotihuacan-mercury",
    "category": "places",
    "title": "The Mercury Under Teotihuacan",
    "region": "Temple of the Feathered Serpent, Teotihuacan, Mexico",
    "lat": 19.68,
    "lon": -98.85,
    "dateLabel": "Found in 2015",
    "status": "explained",
    "statusLabel": "Partly explained",
    "witnesses": "Archaeologists",
    "hook": "At the end of a sealed tunnel beneath a great Mexican pyramid, archaeologists found pools of liquid mercury.",
    "summary": [
      "In 2003, heavy rain opened a hole at the foot of the Temple of the Feathered Serpent in Teotihuacan, the ancient city near Mexico City. It led to a tunnel, sealed nearly 1,800 years ago, running deep beneath the pyramid.",
      "Archaeologist Sergio Gómez spent years excavating it, using robots to explore. In 2015, his team announced that they had found large amounts of liquid mercury in chambers at the end of the tunnel, along with thousands of offerings, including jade, shells and carvings."
    ],
    "explanation": "Mercury does not occur naturally in pools like this, so it was put there deliberately, probably extracted from cinnabar ore by heating. Archaeologists think it may have represented an underworld river or lake. Whether a royal tomb lies nearby is still unknown.",
    "wiki": "Teotihuacan"
  },
  {
    "slug": "crooked-forest",
    "category": "places",
    "title": "The Crooked Forest",
    "region": "Nowe Czarnowo, West Pomerania, Poland",
    "lat": 53.21,
    "lon": 14.48,
    "dateLabel": "Planted around 1930",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Visitors and foresters",
    "hook": "In a small Polish wood, about 400 pine trees all bend sharply at the base and curve north, like a row of hooks.",
    "summary": [
      "Near the village of Nowe Czarnowo in western Poland is a small grove of around 400 pine trees, each bent at a sharp angle just above the ground, before curving up and growing straight. They all bend the same way, towards the north.",
      "The trees were planted around 1930, when the area was part of Germany, and the people who planted them left no records explaining the shape."
    ],
    "explanation": "No explanation has been confirmed. The most popular idea is that the trees were deliberately shaped while young, perhaps to produce curved timber for furniture or boat-building, a project abandoned during the Second World War. Other suggestions include heavy snow or tanks flattening them when young.",
    "wiki": "Crooked Forest"
  },
  {
    "slug": "baltic-sea-anomaly",
    "category": "places",
    "title": "The Baltic Sea Anomaly",
    "region": "Northern Baltic Sea, between Sweden and Finland",
    "lat": 60.6,
    "lon": 19.5,
    "dateLabel": "Found in 2011",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "A Swedish treasure-hunting team",
    "hook": "A sonar image from the bottom of the Baltic showed a round object with a 'runway' behind it, and some said it looked like a spaceship.",
    "summary": [
      "In June 2011, a Swedish team of wreck hunters called Ocean X, searching the northern Baltic Sea for sunken ships and cargo, picked up a sonar image of a round object about 60 metres across lying on the seabed, with a long track behind it.",
      "The grainy image looked to some people like the Millennium Falcon from 'Star Wars', and the 'Baltic Sea anomaly' made headlines worldwide, with theories ranging from a crashed spacecraft to a sunken Nazi device."
    ],
    "explanation": "Geologists who examined samples from the site said they were ordinary rocks, such as granite, gneiss and sandstone, left by glaciers at the end of the last Ice Age. Most scientists consider it a natural rock formation, shaped and exposed by ice and currents.",
    "wiki": "Baltic Sea anomaly"
  },
  {
    "slug": "egg-laying-cliff",
    "category": "places",
    "title": "The Cliff That Lays Eggs",
    "region": "Gulu village, Sandu County, Guizhou, China",
    "lat": 25.98,
    "lon": 107.87,
    "dateLabel": "Known for generations",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "The Shui people of Gulu and visitors",
    "hook": "In a village in southern China, a cliff slowly 'lays' smooth stone eggs, which drop to the ground every few decades.",
    "summary": [
      "In the village of Gulu in Guizhou province, home to the Shui people, a small cliff face called Chan Da Ya is studded with smooth, round, dark stones. Every few decades, one of these 'eggs' works loose and drops to the ground. Villagers say the cliff lays an egg about every 30 years.",
      "Families collect the eggs and keep them as treasures, believing they bring good luck and prosperity. Many homes in the village have one."
    ],
    "explanation": "Geologists explain that the cliff is made of soft, layered rock, which weathers away relatively quickly, while the eggs are harder concretions of mineral that formed inside it hundreds of millions of years ago. As the softer rock erodes around them, the eggs are slowly exposed until they fall.",
    "wiki": null
  },
  {
    "slug": "apollo-10-music",
    "category": "voices",
    "title": "The Music on the Far Side of the Moon",
    "region": "Mission Control, Houston, Texas, USA",
    "lat": 29.56,
    "lon": -95.09,
    "dateLabel": "May 1969; transcripts released in 2008",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "The crew of Apollo 10",
    "hook": "Cut off from Earth behind the Moon, three astronauts heard strange whistling 'music' in their headsets, and wondered whether to tell anyone.",
    "summary": [
      "In May 1969, two months before the first Moon landing, Thomas Stafford, John Young and Eugene Cernan flew Apollo 10 around the Moon as a dress rehearsal. While passing over the far side, out of radio contact with Earth, they heard an eerie whistling sound in their headsets, which Cernan called 'outer-space-type music'.",
      "The recording shows them discussing whether to report it, worried no one would believe them. The transcripts were made public in 2008."
    ],
    "explanation": "NASA engineers explained that the sound came from radio interference between the VHF radios of the lunar module and the command module, flying close to each other. On the far side, with no signals from Earth, the interference was easier to hear.",
    "wiki": null
  },
  {
    "slug": "long-delayed-echoes",
    "category": "voices",
    "title": "The Long-Delayed Radio Echoes",
    "region": "Oslo, Norway",
    "lat": 59.91,
    "lon": 10.75,
    "dateLabel": "First reported in 1927",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Radio engineers and amateur operators",
    "hook": "In 1927, a Norwegian engineer heard his radio signal come back to him three seconds after it was sent. Nearly a century later, no one is sure why.",
    "summary": [
      "Radio signals bounced around the Earth by the upper atmosphere normally return as an echo about a seventh of a second later. In 1927, Norwegian engineer Jørgen Hals noticed something stranger: a second, fainter echo arriving about three seconds after the signal. He wrote to the physicist Carl Størmer, who published the finding in the journal Nature.",
      "Experiments in 1928 recorded echoes delayed by up to 30 seconds. They are now called long-delayed echoes, and amateur radio operators still occasionally report them."
    ],
    "explanation": "About 15 explanations have been proposed, including signals trapped and slowed in layers of charged particles high above the Earth, or reflected far out in space. A writer in 1973 even suggested they came from an alien probe. None has been confirmed, and the echoes remain a puzzle for radio physicists.",
    "wiki": "Long delayed echo"
  },
  {
    "slug": "electrophonic-meteors",
    "category": "voices",
    "title": "The Meteors You Can Hear",
    "region": "Newcastle, New South Wales, Australia",
    "lat": -32.93,
    "lon": 151.78,
    "dateLabel": "Reported for centuries; explained in 1980",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Meteor watchers worldwide",
    "hook": "Some people say they hear a hiss or crackle at the very moment a bright meteor flashes overhead. Scientists said that was impossible.",
    "summary": [
      "For centuries, people watching very bright meteors have reported hearing sounds at the same time: hissing, crackling or popping, like frying bacon. Scientists dismissed these reports, because a meteor burns up many kilometres high, and its sound should take minutes to reach the ground.",
      "Some witnesses even said the sound seemed to come from objects around them, such as trees or their own glasses."
    ],
    "explanation": "In 1980, Australian astronomer Colin Keay proposed that bright meteors give off very low-frequency radio waves, which travel at the speed of light and can make nearby objects, such as dry grass, pine needles or frizzy hair, vibrate faintly and produce sound. Experiments have supported the idea. These are now called electrophonic sounds.",
    "wiki": "Electrophonic hearing"
  },
  {
    "slug": "ali-qapu-music-room",
    "category": "voices",
    "title": "The Music Room of Ali Qapu",
    "region": "Ali Qapu Palace, Isfahan, Iran",
    "lat": 32.66,
    "lon": 51.68,
    "dateLabel": "Built in the early 1600s",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Visitors and acoustics researchers",
    "hook": "At the top of a Persian palace, the walls of the music room are cut into hundreds of vase-shaped niches. Clap inside, and there's no echo.",
    "summary": [
      "Ali Qapu, a palace built for Shah Abbas I overlooking the great square of Isfahan, has a music room on its top floor. Its walls and ceiling are covered with delicate plaster niches in the shapes of vases, cups and bottles, cut through a double wall.",
      "Visitors who clap or speak in the room notice how quiet and clear it sounds, with almost no echo, even though it is a large stone room."
    ],
    "explanation": "The niches act as sound absorbers, trapping and breaking up reflections so that music played in the room sounded clear rather than echoing. Modern acoustic studies have confirmed the room's clarity. It is an example of sophisticated sound design in Safavid architecture, centuries before modern acoustics.",
    "wiki": "Ali Qapu"
  },
  {
    "slug": "greenland-glacial-earthquakes",
    "category": "voices",
    "title": "The Glacial Earthquakes of Greenland",
    "region": "Helheim Glacier, east Greenland",
    "lat": 66.4,
    "lon": -38.2,
    "dateLabel": "Discovered in 2003",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Seismometers worldwide",
    "hook": "Seismometers around the world kept picking up slow, rumbling earthquakes from Greenland, where there should be none. They were coming from the ice.",
    "summary": [
      "In 2003, seismologists studying global earthquake records found dozens of unusual events coming from Greenland, a place with very little earthquake activity. They were slow, lasting up to a minute, and had gone unnoticed because standard detection methods missed them.",
      "The events were concentrated at the mouths of Greenland's great glaciers, and they became more frequent over the years."
    ],
    "explanation": "Researchers found that the quakes happen when glaciers calve huge icebergs into the sea. As a vast block of ice capsizes, it pushes the glacier backwards and shakes the ground. Their increase is linked to faster-moving glaciers as the climate warms.",
    "wiki": null
  },
  {
    "slug": "urutau-call",
    "category": "voices",
    "title": "The Cry of the Urutau",
    "region": "Forests of Paraguay",
    "lat": -25.3,
    "lon": -57.6,
    "dateLabel": "Told for generations",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Guaraní tradition and forest travellers",
    "hook": "At night in the forests of South America, a long, mournful wail drifts down through the trees. The Guaraní say it is a girl who became a bird.",
    "summary": [
      "In the forests of Paraguay, Argentina and Brazil, a slow, mournful, descending cry, like a person sobbing, can be heard on moonlit nights. It has long unsettled travellers, who couldn't see where it came from.",
      "A Guaraní legend says it is the voice of a young woman who climbed a tree and wept for her lost love until she was turned into a bird, the urutau."
    ],
    "explanation": "The call belongs to the common potoo, a nocturnal bird whose grey-brown feathers make it look exactly like a broken branch during the day. It sits motionless and is almost impossible to spot, which is why the voice seemed to come from nowhere.",
    "wiki": "Common potoo"
  },
  {
    "slug": "stonehenge-acoustics",
    "category": "voices",
    "title": "The Sound of Stonehenge",
    "region": "Stonehenge, Wiltshire, England",
    "lat": 51.18,
    "lon": -1.83,
    "dateLabel": "Built about 5,000 to 4,000 years ago; studied in 2020",
    "status": "explained",
    "statusLabel": "Partly explained",
    "witnesses": "Acoustics researchers",
    "hook": "Scientists built a scale model of Stonehenge as it once stood, and found that voices and music inside it would have rung and carried like in a hall.",
    "summary": [
      "Stonehenge, on Salisbury Plain, was built in stages between about 5,000 and 4,000 years ago. Today many stones have fallen or been removed, but when complete, it was a ring of tall stones topped with lintels around an inner horseshoe of giant trilithons.",
      "Its purpose has long been debated, and some have wondered whether sound played a part in the ceremonies held there."
    ],
    "explanation": "In 2020, acoustic engineers at the University of Salford built a 1:12 scale model of the complete monument and tested it with sound. They found that inside the ring, voices and music would have been amplified and given a short echo, though sound from outside would have been muffled. Whether the builders intended this is unknown.",
    "wiki": "Stonehenge"
  },
  {
    "slug": "cornish-knockers",
    "category": "voices",
    "title": "The Knockers of the Cornish Mines",
    "region": "Tin mines near St Just, Cornwall, England",
    "lat": 50.12,
    "lon": -5.68,
    "dateLabel": "Told for centuries",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Cornish tin miners",
    "hook": "Deep in the tin mines of Cornwall, miners heard knocking in the rock, and said it was the Knockers, little people of the mines.",
    "summary": [
      "For centuries, tin and copper miners in Cornwall worked deep underground by candlelight. They told of the Knockers, small beings who lived in the mines and could be heard tapping on the rock.",
      "Some said the tapping led to rich veins of ore; others that it was a warning of a coming rockfall. Miners left a scrap of their pasty for the Knockers, and avoided whistling underground so as not to offend them. The legend travelled with Cornish miners to America, where they became the 'tommyknockers'."
    ],
    "explanation": "The sounds that miners heard probably came from the creaking of timber supports and the shifting of rock under stress, which can indeed come before a collapse, as well as from other miners working nearby. Treating the sounds as warnings may well have saved lives.",
    "wiki": "Knocker (folklore)"
  },
  {
    "slug": "shiranui",
    "category": "sky",
    "title": "The Shiranui Lights",
    "region": "Yatsushiro Sea, Kumamoto, Japan",
    "lat": 32.5,
    "lon": 130.5,
    "dateLabel": "Recorded for over a thousand years",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Coastal people and visitors",
    "hook": "On certain summer nights, lights appear far out on a Japanese bay, multiplying and dancing on the water where there are no boats.",
    "summary": [
      "On a few nights each year in late summer, people on the shores of the Yatsushiro Sea and the Ariake Sea in Kyushu have long watched for the shiranui, 'unknown fires': lights that appear far out over the water, split into rows and dance along the horizon.",
      "An old legend says the lights guided a legendary emperor's ships safely to shore. They were thought to be lanterns of the dragon god, and fishing was forbidden on those nights."
    ],
    "explanation": "Scientists explain the shiranui as a mirage. On calm nights, layers of warm and cool air over the shallow, tidal sea bend and multiply the light from distant fishing boats and shore lights. Fewer sightings are reported today, as there are fewer traditional fishing fires.",
    "wiki": "Shiranui (folklore)"
  },
  {
    "slug": "qinghai-ball-lightning",
    "category": "sky",
    "title": "The Ball Lightning of Qinghai",
    "region": "Qinghai Plateau, China",
    "lat": 36.6,
    "lon": 101.8,
    "dateLabel": "July 2012",
    "status": "explained",
    "statusLabel": "Partly explained",
    "witnesses": "Chinese scientists studying lightning",
    "hook": "Scientists filming a thunderstorm in western China caught a rare glowing ball rising from the ground, and for the first time, measured what it was made of.",
    "summary": [
      "Ball lightning, a glowing sphere that floats or drifts during thunderstorms, has been reported for centuries, but it is so rare and short-lived that many scientists doubted it existed.",
      "In July 2012, Chinese researchers studying lightning on the Qinghai Plateau were recording a storm with high-speed cameras and spectrographs when lightning struck the ground nearby, and a glowing ball about 5 metres wide rose up, travelled about 15 metres and vanished after 1.6 seconds."
    ],
    "explanation": "Their spectrograph showed the ball contained silicon, iron and calcium, the same elements as the local soil. This supported a theory that lightning vaporises soil, and the hot particles glow as they burn in the air. It is the best evidence yet, but ball lightning is still not fully understood.",
    "wiki": "Ball lightning"
  },
  {
    "slug": "kamil-crater",
    "category": "sky",
    "title": "The Crater Found on Google Earth",
    "region": "Kamil Crater, East Uweinat, Egypt",
    "lat": 22.02,
    "lon": 26.09,
    "dateLabel": "Formed within the last 5,000 years; found in 2008",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "An Italian mineralogist using Google Earth; a scientific expedition",
    "hook": "Looking for prehistoric sites on Google Earth, a researcher spotted a perfect crater in the Egyptian desert that nobody had ever studied.",
    "summary": [
      "In 2008, Vincenzo de Michele, an Italian mineralogist, was searching satellite images of the remote desert of south-western Egypt for traces of ancient settlements when he noticed a small, sharp crater about 45 metres wide, surrounded by bright rays of ejected rock.",
      "In 2010, an expedition of Italian and Egyptian scientists reached the site."
    ],
    "explanation": "They found it was made by an iron meteorite, which struck the desert within the last 5,000 years, perhaps within sight of prehistoric people. Thousands of iron fragments were scattered around it. It is one of the best-preserved small impact craters on Earth.",
    "wiki": "Kamil Crater"
  },
  {
    "slug": "wolfe-creek-crater",
    "category": "sky",
    "title": "The Wolfe Creek Crater",
    "region": "Kimberley, Western Australia",
    "lat": -19.17,
    "lon": 127.8,
    "dateLabel": "Formed about 120,000 years ago",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "The Jaru people; scientists",
    "hook": "In the remote Kimberley lies a vast, nearly perfect crater. The Jaru people have their own story of how it was made.",
    "summary": [
      "Wolfe Creek Crater, in the Kimberley region of Western Australia, is a huge round bowl about 880 metres across, its floor filled with sand and trees. It was seen by surveyors from the air in 1947, but the Jaru people have long known it as Kandimalal.",
      "Jaru stories describe the crater's creation in the Dreaming, linked to the movements of great beings across the land."
    ],
    "explanation": "Scientists found that it was made by an iron meteorite that struck around 120,000 years ago, scattering fragments of iron that have since rusted into the rock. It is one of the best-preserved meteorite craters in the world, and is now a national park.",
    "wiki": "Wolfe Creek crater"
  },
  {
    "slug": "pingualuit-crater",
    "category": "sky",
    "title": "The Crystal Eye of Nunavik",
    "region": "Pingualuit, Nunavik, Quebec, Canada",
    "lat": 61.28,
    "lon": -73.66,
    "dateLabel": "Formed about 1.4 million years ago",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Inuit hunters, a prospector and scientists",
    "hook": "In the tundra of northern Quebec lies a perfectly round crater lake, so clear it is called the Crystal Eye.",
    "summary": [
      "In the Arctic tundra of Nunavik, in northern Quebec, is a round lake 3.4 km across, sunk deep in a crater with high rims. Its water is among the clearest and purest in the world. Inuit knew it as Pingualuit, and used its raised rim as a landmark.",
      "In 1950, a prospector named Fred Chubb, hoping it might be an extinct volcano with diamonds, brought it to scientists' attention."
    ],
    "explanation": "It was made by a meteorite impact about 1.4 million years ago. The lake is fed only by rain and snow, with no streams running in or out, which explains its clarity. Sediments at its bottom hold a record of climate going back hundreds of thousands of years.",
    "wiki": "Pingualuit crater"
  },
  {
    "slug": "campo-del-cielo",
    "category": "sky",
    "title": "The Field of the Sky",
    "region": "Campo del Cielo, Chaco, Argentina",
    "lat": -27.63,
    "lon": -61.7,
    "dateLabel": "Fell about 4,000 years ago",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Indigenous peoples, Spanish explorers and scientists",
    "hook": "Indigenous peoples of northern Argentina knew of a place where iron had fallen from the sky. They called it the field of the sky.",
    "summary": [
      "In the Gran Chaco of northern Argentina, the local Indigenous people knew of an area where great masses of iron lay scattered across the ground, which they called Piguem Nonraltá, the field of the sky. They said the iron had fallen from the heavens.",
      "Spanish explorers heard the stories, and an expedition in 1576 went to find the iron, thinking it might be a silver mine. Huge pieces have been found since, including one of about 37 tonnes, among the heaviest meteorites ever found."
    ],
    "explanation": "Scientists confirmed the iron came from a meteorite that broke up as it fell around 4,000 years ago, creating a field of small craters. The Indigenous account was right, and fell within human memory: people in the region may have witnessed the fall.",
    "wiki": "Campo del Cielo"
  },
  {
    "slug": "bendego-meteorite",
    "category": "sky",
    "title": "The Bendegó Meteorite",
    "region": "Monte Santo, Bahia, Brazil",
    "lat": -10.12,
    "lon": -39.26,
    "dateLabel": "Found in 1784",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "A cowherd, then scientists",
    "hook": "A boy herding cattle in Brazil found a strange, heavy rock. It was a meteorite, and two centuries later it survived a fire that destroyed a museum.",
    "summary": [
      "In 1784, a young cowherd named Domingos da Motta Botelho found a huge, dark, heavy rock in the countryside of Bahia, in north-eastern Brazil. Attempts to move it to the coast failed when it rolled into a stream bed, where it stayed for a century.",
      "In 1888, a team finally moved the 5-tonne iron meteorite to Rio de Janeiro, where it became one of the treasures of the National Museum."
    ],
    "explanation": "It is one of the largest meteorites ever found in Brazil. In 2018, a fire destroyed most of the National Museum and its collections, but the Bendegó, made of iron, survived almost undamaged in the ruined building, and became a symbol of the museum's recovery.",
    "wiki": "Bendegó meteorite"
  },
  {
    "slug": "ensisheim-meteorite",
    "category": "sky",
    "title": "The Ensisheim Thunderstone",
    "region": "Ensisheim, Alsace, France",
    "lat": 47.87,
    "lon": 7.35,
    "dateLabel": "7 November 1492",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "A boy and the townspeople of Ensisheim",
    "hook": "In 1492, a boy in Alsace saw a great stone fall from the sky with a crash of thunder. The town chained it up in the church.",
    "summary": [
      "Around midday on 7 November 1492, a loud thunderclap was heard over Alsace, and a boy in a field near Ensisheim saw a large stone fall from the sky and bury itself in the ground. Townspeople dug it up: it weighed about 127 kg.",
      "The future emperor Maximilian I came to see it, took pieces as good-luck charms, and ordered the rest to be kept in the church, where it was hung with chains so that it could not fly away again."
    ],
    "explanation": "It is the oldest meteorite in the Western world whose fall was witnessed and whose stone survives. At the time, few scholars believed stones could fall from the sky, and Ensisheim was seen as an omen. It is still on display in the town today.",
    "wiki": "Ensisheim meteorite"
  },
  {
    "slug": "wold-cottage-meteorite",
    "category": "sky",
    "title": "The Wold Cottage Meteorite",
    "region": "Wold Newton, East Riding of Yorkshire, England",
    "lat": 54.13,
    "lon": -0.4,
    "dateLabel": "13 December 1795",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "A farm worker and landowner Edward Topham",
    "hook": "In 1795, a stone fell from a clear sky onto a Yorkshire farm, and helped convince scientists that rocks really do fall from space.",
    "summary": [
      "On the afternoon of 13 December 1795, a farm worker near Wold Cottage in Yorkshire was nearly hit when a stone fell from the sky with a series of loud bangs and buried itself in the ground. It weighed about 25 kg.",
      "The landowner, Edward Topham, collected witness statements and put the stone on display in London, where crowds paid to see it. He later built a monument where it fell."
    ],
    "explanation": "At the time, most scientists did not believe that stones could fall from the sky. Chemical analysis of the Wold Cottage stone and others showed they were unlike any Earth rocks, and within a few years scientists accepted that meteorites were real. It is now in the Natural History Museum in London.",
    "wiki": "Wold Cottage meteorite"
  },
  {
    "slug": "allende-meteorite",
    "category": "sky",
    "title": "The Allende Meteorite",
    "region": "Pueblito de Allende, Chihuahua, Mexico",
    "lat": 26.95,
    "lon": -105.33,
    "dateLabel": "8 February 1969",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Residents across northern Mexico",
    "hook": "One night in 1969, a fireball broke up over northern Mexico and scattered stones older than the Earth itself.",
    "summary": [
      "Just after 1 am on 8 February 1969, a brilliant fireball lit up the sky over northern Mexico and broke apart, scattering thousands of stones over a wide area around the village of Pueblito de Allende in Chihuahua.",
      "Over two tonnes of fragments were collected. Scientists, preparing for the return of the first Moon rocks that year, studied them intensively."
    ],
    "explanation": "Allende contains small white grains that are among the oldest solid material in the solar system, about 4.57 billion years old, formed before the Earth itself. It has been one of the most studied meteorites in history, and taught scientists much about how the planets formed.",
    "wiki": "Allende meteorite"
  },
  {
    "slug": "st-elmos-fire",
    "category": "sky",
    "title": "St Elmo's Fire",
    "region": "Gaeta and the Mediterranean, Italy",
    "lat": 41.21,
    "lon": 13.57,
    "dateLabel": "Reported since ancient times",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Sailors through the ages",
    "hook": "During storms at sea, sailors saw blue-white flames dancing on the tops of their masts. They took it as a sign their patron saint was watching over them.",
    "summary": [
      "Since ancient times, sailors have reported a strange glow during thunderstorms: flickering blue or violet flames on the tips of masts and rigging, sometimes with a hissing sound. Ancient Greek sailors saw it as a sign of the twins Castor and Pollux.",
      "Later, Mediterranean sailors named it after St Erasmus, or Elmo, their patron saint, whose shrine was at Gaeta in Italy. Its appearance was often taken as a sign of protection. Magellan's crew reported it on their voyage around the world."
    ],
    "explanation": "St Elmo's fire is a kind of glowing electrical discharge, known as a corona discharge. In thunderstorms, the electric field in the air becomes strong enough to make pointed objects like masts and aircraft wings glow. It is harmless in itself, but shows that the air is highly charged.",
    "wiki": "St. Elmo's fire"
  },
  {
    "slug": "fata-morgana-messina",
    "category": "sky",
    "title": "The Fata Morgana of Messina",
    "region": "Strait of Messina, between Sicily and Calabria, Italy",
    "lat": 38.2,
    "lon": 15.62,
    "dateLabel": "Recorded for centuries",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Fishermen and coastal residents",
    "hook": "On calm mornings over the Strait of Messina, castles and towers appear floating above the sea, then fade away.",
    "summary": [
      "On certain calm, hot days, people on the shores of the Strait of Messina, between Sicily and the Italian mainland, have reported seeing cities, castles and towers rising above the water, shimmering and changing shape.",
      "The sight was named after Morgan le Fay, the enchantress of Arthurian legend, who was said to conjure castles in the air to lure sailors."
    ],
    "explanation": "It is a complex mirage. When a layer of warm air lies over cooler air near the sea surface, light from distant coastlines, buildings and ships is bent and stretched, making them appear as towering structures in the sky. The name 'fata morgana' is now used for this kind of mirage worldwide.",
    "wiki": "Fata Morgana (mirage)"
  },
  {
    "slug": "golem-of-prague",
    "category": "visitors",
    "title": "The Golem of Prague",
    "region": "Old New Synagogue, Prague, Czech Republic",
    "lat": 50.09,
    "lon": 14.42,
    "dateLabel": "Legend set in the 1500s",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Jewish tradition of Prague",
    "hook": "Legend says a rabbi in Prague shaped a giant from river clay and brought it to life to protect his community. Some say it still lies in the synagogue attic.",
    "summary": [
      "A famous legend of Prague tells that in the 16th century, Rabbi Judah Loew ben Bezalel, a great scholar, made a giant figure from the clay of the Vltava river and brought it to life with sacred words, to protect the Jewish community of the city from attacks.",
      "In most versions, the golem grew too powerful and the rabbi deactivated it, laying its body in the attic of the Old New Synagogue, which visitors are still not allowed to enter."
    ],
    "explanation": "Historians note that the legend first appears in writing in the 19th century, long after Rabbi Loew's time. The golem is a figure from older Jewish tradition, and the story has inspired countless books and films about creations that escape their makers' control.",
    "wiki": "Golem"
  },
  {
    "slug": "tomte",
    "category": "visitors",
    "title": "The Tomte",
    "region": "Farms of Småland, Sweden",
    "lat": 57.2,
    "lon": 14.8,
    "dateLabel": "Told for centuries",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Swedish farm tradition",
    "hook": "On old Swedish farms, a small bearded tomte was said to guard the animals at night, as long as he got his bowl of porridge at Christmas.",
    "summary": [
      "In Scandinavian folklore, the tomte (in Norway and Denmark, the nisse) is a small, old, bearded man in grey clothes and a red cap who lives on a farm, often in the barn. He looks after the animals and the household at night, and brings good luck.",
      "But he is easily offended. Families left him a bowl of porridge with butter on Christmas Eve, and stories warned that a tomte who was insulted or forgotten might play tricks or leave, taking the farm's luck with him."
    ],
    "explanation": "The tomte is a folklore figure, possibly rooted in old beliefs about the spirit of the person who first cleared a farm. Today he has merged with Father Christmas in Sweden, where the Christmas tomte brings presents.",
    "wiki": "Tomte"
  },
  {
    "slug": "monaciello",
    "category": "visitors",
    "title": "The Monaciello of Naples",
    "region": "Naples, Campania, Italy",
    "lat": 40.85,
    "lon": 14.27,
    "dateLabel": "Told for centuries",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Neapolitan tradition",
    "hook": "In old Naples, people said a small hooded monk slipped into houses at night, leaving coins for some and playing tricks on others.",
    "summary": [
      "In Neapolitan folklore, the monaciello, 'little monk', is a small figure dressed in a monk's habit and hood, who appears in houses at night. To some families he leaves coins or good luck; to others he causes mischief, hiding things or pulling bedclothes.",
      "Neapolitans still talk about him, and some say finding money unexpectedly is a sign of his visit."
    ],
    "explanation": "One popular explanation is historical: the 'pozzari', workers who maintained the city's ancient underground water cisterns, wore hooded clothes, and could reach houses through the wells. They may have been seen at night, and sometimes taken things or left them behind, giving rise to the legend.",
    "wiki": "Munaciello"
  },
  {
    "slug": "kallikantzaroi",
    "category": "visitors",
    "title": "The Kallikantzaroi",
    "region": "Thessaly and across Greece",
    "lat": 39.6,
    "lon": 22.4,
    "dateLabel": "Told for centuries",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Greek tradition",
    "hook": "In Greek folklore, goblins climb up from under the earth during the twelve days of Christmas, causing mischief until they're chased away.",
    "summary": [
      "In Greek and wider Balkan folklore, the kallikantzaroi are goblins who spend the year underground, sawing at the tree that holds up the world. During the twelve days of Christmas, they come up to the surface to cause mischief: putting out fires, spoiling food and frightening people.",
      "Families kept fires burning, hung charms and burned things that smell bad to keep them away. At Epiphany, on 6 January, the water was blessed and the kallikantzaroi fled back underground, to find the world tree had healed."
    ],
    "explanation": "The kallikantzaroi are figures of folklore, tied to the long, dark nights around midwinter, when people in many cultures feared that spirits were abroad.",
    "wiki": "Kallikantzaros"
  },
  {
    "slug": "mmoatia",
    "category": "visitors",
    "title": "The Mmoatia",
    "region": "Ashanti forests, Ghana",
    "lat": 6.7,
    "lon": -1.6,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Akan tradition",
    "hook": "In the forests of Ghana, Akan tradition tells of the mmoatia, tiny forest people with backward feet who speak in whistles.",
    "summary": [
      "In Akan folklore in Ghana, the mmoatia are small beings, about the height of a child's knee, who live deep in the forest. Their feet point backwards, and they talk to each other in a language of whistles.",
      "They can be mischievous, stealing food and beer, but they are also said to know the secrets of healing plants, and some traditional healers say they learned their knowledge from them."
    ],
    "explanation": "The mmoatia are figures of folklore. Like similar 'little people' in many cultures, they reflect respect for the forest and its knowledge, especially of medicinal plants.",
    "wiki": "Mmoatia"
  },
  {
    "slug": "peri",
    "category": "visitors",
    "title": "The Peri",
    "region": "Shiraz, Fars, Iran",
    "lat": 29.6,
    "lon": 52.5,
    "dateLabel": "Told for thousands of years",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Persian tradition",
    "hook": "In Persian tradition, the peri are beautiful winged beings of light, who appear in poetry, stories and paintings across the Islamic world.",
    "summary": [
      "In Persian mythology and literature, peri are graceful winged beings, often imagined as beautiful women, who live in a magical world apart from humans. In older Zoroastrian tradition they were mischievous spirits, but over time they came to be seen as gentle, benevolent beings.",
      "They appear in the poetry of Hafez and Ferdowsi, in miniature paintings and in folk tales across Iran, Central Asia and the Middle East, and the word passed into English and other languages."
    ],
    "explanation": "The peri are figures of mythology and literature. They inspired European writers too: the English word 'fairy' is sometimes linked to them, though the connection is uncertain.",
    "wiki": "Peri"
  },
  {
    "slug": "veli-fiji",
    "category": "visitors",
    "title": "The Veli of Fiji",
    "region": "Viti Levu, Fiji",
    "lat": -17.8,
    "lon": 178.0,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Fijian tradition",
    "hook": "In the forests of Fiji, people tell of the veli, small, long-haired forest beings who appear and vanish among the trees.",
    "summary": [
      "In Fijian folklore, the veli are small, dwarf-like beings with long hair who live in the forests and mountains. They are said to be shy and rarely seen, but sometimes appear to people walking alone in the forest, or play music at night.",
      "Some stories say the veli can be helpful, protecting the forest, while others say they play tricks on people who disrespect it."
    ],
    "explanation": "The veli are figures of folklore, part of a family of 'little people' stories found across the Pacific and around the world.",
    "wiki": null
  },
  {
    "slug": "leprechaun",
    "category": "visitors",
    "title": "The Leprechaun",
    "region": "Carlingford, County Louth, Ireland",
    "lat": 54.04,
    "lon": -6.19,
    "dateLabel": "Told for centuries",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Irish tradition",
    "hook": "In Irish folklore, the leprechaun is a solitary little shoemaker with a hidden pot of gold. Catch him, and he must tell you where it is, if you don't look away.",
    "summary": [
      "The leprechaun is one of the best-known figures of Irish folklore: a small, bearded man, traditionally a shoemaker, who lives alone and hides a crock of gold. Anyone who catches one can demand the treasure, but the leprechaun always tricks his captor into looking away, and vanishes.",
      "Older stories link leprechauns to a medieval tale of water sprites. The village of Carlingford, in County Louth, has made leprechauns part of its identity, with festivals and a local campaign to have them recognised as a protected species."
    ],
    "explanation": "The leprechaun is a folklore figure, now so famous that it has become a symbol of Ireland around the world. The cheerful green-coated version is mostly a modern creation; older stories describe a grumpier, red-coated figure.",
    "wiki": "Leprechaun"
  },
  {
    "slug": "duende",
    "category": "visitors",
    "title": "The Duende",
    "region": "Andalusia, Spain",
    "lat": 37.39,
    "lon": -5.99,
    "dateLabel": "Told for centuries",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Spanish and Latin American tradition",
    "hook": "In Spain and across Latin America, people tell of duendes, small house spirits who hide things, tangle hair and live in the walls.",
    "summary": [
      "In Spanish folklore, a duende is a small, mischievous being who lives in houses, sometimes in the walls or under the floor. Duendes hide objects, make noises, knot hair and play tricks, but may also help around the house if treated well. The name comes from 'dueño de casa', owner of the house.",
      "The tradition travelled to Latin America and the Philippines, where duendes are often linked to forests, ant hills and gardens. In Spanish culture, 'duende' also means the mysterious emotional power of great flamenco performance."
    ],
    "explanation": "Duendes are figures of folklore, and like many household spirits they have long been used to explain lost objects and unexplained noises in old houses.",
    "wiki": "Duende (mythology)"
  },
  {
    "slug": "abatwa",
    "category": "visitors",
    "title": "The Abatwa",
    "region": "KwaZulu-Natal, South Africa",
    "lat": -28.5,
    "lon": 31.0,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Zulu tradition",
    "hook": "Zulu folklore tells of the abatwa, people so small they ride on ants and hide under blades of grass.",
    "summary": [
      "In Zulu folklore, the abatwa are the smallest people in the world, so tiny that they can hide beneath a single blade of grass and ride on the backs of ants. They live in the grasslands and among anthills, and are said to be easily offended.",
      "Stories say that if you meet one, you should claim to have seen them from far away. Only certain people, such as young children, wizards and pregnant women, are said to be able to see them."
    ],
    "explanation": "The abatwa are figures of folklore. Some writers have linked the stories to encounters between farming peoples and the San, who were much smaller in stature, but this is speculation.",
    "wiki": "Abatwa"
  },
  {
    "slug": "kijimuna",
    "category": "visitors",
    "title": "The Kijimuna of Okinawa",
    "region": "Okinawa Island, Japan",
    "lat": 26.5,
    "lon": 127.9,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Okinawan tradition",
    "hook": "In Okinawa, little red-haired tree spirits live in the old banyan trees. They love fishing, and they only eat the fish's eyes.",
    "summary": [
      "In the folklore of Okinawa, in southern Japan, kijimuna are small, child-sized spirits with bright red hair who live in old banyan trees. They are mostly friendly and helpful, and especially good at fishing, though they are said to eat only one eye of each fish.",
      "People who befriend a kijimuna may have good luck, but the spirits are said to dislike octopus and chickens, and to take revenge if their tree is cut down."
    ],
    "explanation": "The kijimuna are figures of Okinawan folklore, and a much-loved local symbol, appearing on souvenirs and mascots. Like the kodama of mainland Japan, they encourage respect for old trees.",
    "wiki": "Kijimuna"
  },
  {
    "slug": "bugun-liocichla",
    "category": "creatures",
    "title": "The Bugun Liocichla",
    "region": "Eaglenest Wildlife Sanctuary, Arunachal Pradesh, India",
    "lat": 27.1,
    "lon": 92.45,
    "dateLabel": "Described in 2006",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "An astronomer turned birdwatcher",
    "hook": "An astronomer birdwatching in Arunachal Pradesh spotted a small, brightly coloured bird no one had ever described. Only a handful are known to exist.",
    "summary": [
      "In 1995, Ramana Athreya, an astronomer and keen birdwatcher, glimpsed an unfamiliar bird in the forests of Eaglenest Wildlife Sanctuary in Arunachal Pradesh. It was a small, olive-grey songbird with a black cap and bright yellow, red and white patches on its wings.",
      "It took him years to see it again. In 2006, he described it as a new species and named it after the Bugun people, on whose land it lives."
    ],
    "explanation": "The Bugun liocichla was the first new bird species found in India in more than 50 years, and only a few pairs have been seen. Its discovery showed how much remains unknown in the forests of north-east India, and helped protect them.",
    "wiki": "Bugun liocichla"
  },
  {
    "slug": "ahool",
    "category": "creatures",
    "title": "The Ahool",
    "region": "Mount Salak, West Java, Indonesia",
    "lat": -6.72,
    "lon": 106.73,
    "dateLabel": "Reported in 1925 and since",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "A naturalist and local people",
    "hook": "In the mountain forests of Java, people describe a giant bat with a monkey-like face, named for its call: 'ahOOOL'.",
    "summary": [
      "In 1925, naturalist Ernst Bartels, exploring a waterfall on Mount Salak in western Java, said a huge bat-like creature flew over his head. Local people knew it as the ahool, after its call. It is described as having a wingspan of up to 3 metres, a face like a monkey's and large claws.",
      "Reports from Java and other parts of Southeast Asia describe similar giant bat-like animals."
    ],
    "explanation": "No specimen has been found. Suggested explanations include large fruit bats, such as flying foxes, which can have wingspans of over 1.5 metres, and large owls. A bat of the size described would be the largest ever known.",
    "wiki": "Ahool"
  },
  {
    "slug": "hibagon",
    "category": "creatures",
    "title": "The Hibagon",
    "region": "Mount Hiba, Hiroshima Prefecture, Japan",
    "lat": 35.07,
    "lon": 133.05,
    "dateLabel": "Sightings 1970 – 1974",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Residents of the Saijo area",
    "hook": "In 1970, people near a mountain in western Japan began reporting an ape-like creature walking in the fields.",
    "summary": [
      "On 20 July 1970, a man driving near Saijo, a town in northern Hiroshima Prefecture, said he saw an ape-like creature walking upright on a mountainside near Mount Hiba. Within days, others reported similar sightings: a creature about 1.5 metres tall, covered in dark fur, with a large triangular face.",
      "Sightings continued until about 1974, and the creature, named the Hibagon after the mountain, became a national sensation. The town set up a 'Hibagon office' to handle reports."
    ],
    "explanation": "No specimen or clear photograph was obtained. Suggested explanations include escaped pet monkeys or a large Japanese macaque, and later sightings may have been encouraged by the publicity. The Hibagon remains a local mascot.",
    "wiki": "Hibagon"
  },
  {
    "slug": "kanas-lake-monster",
    "category": "creatures",
    "title": "The Kanas Lake Monster",
    "region": "Kanas Lake, Altay, Xinjiang, China",
    "lat": 48.73,
    "lon": 87.03,
    "dateLabel": "Reported since the 1980s",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Tourists, scientists and local Tuvan people",
    "hook": "In a remote mountain lake in north-west China, people have photographed huge, dark shapes moving just below the surface.",
    "summary": [
      "Kanas Lake is a long, deep glacial lake in the Altay Mountains of Xinjiang, near the borders with Kazakhstan, Russia and Mongolia. Local Tuvan people have told of creatures in the lake, and since the 1980s, tourists and researchers have reported large, dark shapes moving in groups near the surface.",
      "The 'Kanas monster' became a famous Chinese mystery, featured in the national media."
    ],
    "explanation": "In 1985, a professor from Xinjiang University led a team that watched large red fish in the lake, and scientists believe the sightings are of taimen, a giant relative of the salmon that can grow to 1.5 metres or more. Some suspect even bigger individuals live in the lake.",
    "wiki": "Kanas Lake"
  },
  {
    "slug": "tratratratra",
    "category": "creatures",
    "title": "The Tratratratra",
    "region": "South-west Madagascar",
    "lat": -22.0,
    "lon": 44.5,
    "dateLabel": "Described in 1658",
    "status": "explained",
    "statusLabel": "Partly confirmed",
    "witnesses": "A French governor, from local accounts",
    "hook": "In 1658, a French governor in Madagascar described a calf-sized animal with a human-like face. Scientists later found the bones of giant lemurs.",
    "summary": [
      "In 1658, Étienne de Flacourt, the French governor of a colony in southern Madagascar, wrote about the tratratratra, an animal described to him by local people: about the size of a two-year-old calf, with a round head and a face like a man's, which lived alone in remote areas and was rarely seen.",
      "For centuries, it was taken as a legend or exaggeration."
    ],
    "explanation": "In the 19th and 20th centuries, scientists found bones of several kinds of giant lemur, some as large as a gorilla, that lived on Madagascar until about 1,000 years ago or later. Many researchers think the tratratratra was one of these, and that Flacourt's informants were describing a living memory.",
    "wiki": "Tratratratra"
  },
  {
    "slug": "megalania-sightings",
    "category": "creatures",
    "title": "The Giant Lizards of the Outback",
    "region": "Outback Queensland, Australia",
    "lat": -21.0,
    "lon": 145.5,
    "dateLabel": "Reported in the 20th century",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Ranchers, travellers and bushwalkers",
    "hook": "Australia was once home to a giant lizard bigger than a crocodile. Some people say they've seen one still walking the outback.",
    "summary": [
      "Megalania was a giant monitor lizard that lived in Australia until about 40,000 years ago. It may have reached 5 to 7 metres long, making it the largest land lizard known.",
      "In the 20th century, a number of people in Queensland and New South Wales reported seeing enormous lizards, far larger than any known species, crossing roads or moving through the bush, and some wondered if megalania had survived."
    ],
    "explanation": "No body, bones or clear photographs of a living giant lizard have been found. Most sightings are thought to be perenties, Australia's largest living lizard, which can reach 2.5 metres and look much bigger when seen briefly. Megalania is generally accepted as extinct.",
    "wiki": "Megalania"
  },
  {
    "slug": "harrison-sasquatch",
    "category": "creatures",
    "title": "The Sasquatch of Harrison",
    "region": "Harrison Hot Springs, British Columbia, Canada",
    "lat": 49.3,
    "lon": -121.78,
    "dateLabel": "Named in the 1920s",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Stó:lō people, residents and visitors",
    "hook": "The word 'sasquatch' comes from a valley in British Columbia, where the Stó:lō people tell of a hairy giant of the forest.",
    "summary": [
      "The Stó:lō and other Coast Salish peoples of British Columbia have long told of sásq'ets, a large, hairy, human-like being that lives in the mountains and forests. In the 1920s, a schoolteacher named J.W. Burns, working on a reserve near Harrison Lake, collected stories and popularised the name 'sasquatch'.",
      "Harrison Hot Springs now calls itself the sasquatch capital of the world, with a sasquatch museum, festivals and a provincial park named after the creature. Reports of sightings and footprints continue."
    ],
    "explanation": "No body, bones or clear evidence has been found. Sceptics suggest bears, people and folklore; supporters point to the vast, little-explored forests of the region. For many Coast Salish people, sásq'ets is a spiritual being rather than an animal to be caught.",
    "wiki": "Bigfoot"
  },
  {
    "slug": "lagarfljot-worm",
    "category": "creatures",
    "title": "The Lagarfljót Worm",
    "region": "Lagarfljót, East Iceland",
    "lat": 65.18,
    "lon": -14.55,
    "dateLabel": "Reported since the 1300s; filmed in 2012",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Residents, and a farmer's video",
    "hook": "An Icelandic lake has been home to a legendary serpent since medieval times. In 2012, a farmer filmed something swimming in it, and a local committee ruled the video real.",
    "summary": [
      "Lagarfljót is a long, narrow lake in east Iceland. A creature living in it, the Lagarfljót worm, is mentioned in Icelandic annals from the 14th century, and sightings have been reported for centuries, describing a long, humped serpent.",
      "In February 2012, farmer Hjörtur Kjerúlf filmed a long, snake-like shape moving through the water near his home. In 2014, a 13-member 'truth committee' set up by the local council narrowly concluded that the video was genuine."
    ],
    "explanation": "Sceptics say the video shows an inanimate object, such as a frozen fishing net or a piece of fabric caught in the current, moving in the river's flow. The lake is glacial and murky, which makes it hard to see what lies beneath the surface.",
    "wiki": "Lagarfljót Worm"
  },
  {
    "slug": "laotian-rock-rat",
    "category": "creatures",
    "title": "The Laotian Rock Rat",
    "region": "Khammouane Province, Laos",
    "lat": 17.4,
    "lon": 104.8,
    "dateLabel": "Described in 2005",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Market traders, then scientists",
    "hook": "Scientists found a strange rodent for sale in a Laos market. It turned out to belong to a family thought to have died out 11 million years ago.",
    "summary": [
      "In 1996, conservation researchers in Laos noticed an unfamiliar rodent being sold for food in a market in the town of Thakhek: a dark, squirrel-like animal with a long, hairy tail, called kha-nyou by local people.",
      "In 2005, scientists described it as a new species. A year later, other scientists realised it belonged to a family of rodents known only from fossils, thought to have died out about 11 million years ago."
    ],
    "explanation": "The Laotian rock rat is a 'living fossil', a survivor of an ancient line that disappeared from the fossil record. It was filmed alive for the first time in 2006. It lives among the limestone rocks of central Laos, and local people had known it all along.",
    "wiki": "Laotian rock rat"
  },
  {
    "slug": "takahe-rediscovery",
    "category": "creatures",
    "title": "The Takahē Rediscovered",
    "region": "Murchison Mountains, Fiordland, New Zealand",
    "lat": -45.25,
    "lon": 167.6,
    "dateLabel": "Declared extinct 1898; rediscovered 1948",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "A doctor and amateur naturalist, Geoffrey Orbell",
    "hook": "A large blue-green bird was thought to have been extinct for 50 years, until a doctor went looking in the mountains and found it.",
    "summary": [
      "The takahē is a large, flightless bird with blue and green feathers and a big red beak, found only in New Zealand. After only four specimens were collected in the 19th century, it was declared extinct in 1898.",
      "Geoffrey Orbell, a doctor from Invercargill, believed it might survive in the remote Murchison Mountains. In November 1948, he led a small party there and found a living colony beside a mountain lake."
    ],
    "explanation": "The rediscovery made headlines around the world. The takahē is still rare and carefully protected, with numbers slowly growing thanks to conservation work. It shows that animals declared extinct are occasionally found again.",
    "wiki": "Takahē"
  },
  {
    "slug": "ajanta-rediscovery",
    "category": "places",
    "title": "The Rediscovery of Ajanta",
    "region": "Ajanta Caves, Aurangabad district, Maharashtra, India",
    "lat": 20.55,
    "lon": 75.7,
    "dateLabel": "Carved 2nd century BCE – 5th century CE; seen again in 1819",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "A British officer hunting a tiger",
    "hook": "In 1819, a British officer chasing a tiger looked across a ravine and saw carved doorways in the cliff: the lost caves of Ajanta.",
    "summary": [
      "The Ajanta Caves are about 30 Buddhist monasteries and prayer halls carved into a horseshoe-shaped cliff above the Waghora river, between the 2nd century BCE and the 5th century CE. Their walls are covered in some of the finest ancient paintings in the world.",
      "After the monks left, the caves were overgrown by forest and largely forgotten by the outside world, though local people knew of them. On 28 April 1819, a British cavalry officer, John Smith, hunting a tiger, glimpsed a carved archway across the ravine."
    ],
    "explanation": "Smith scratched his name and the date onto a painting in Cave 10, where it can still be seen. The caves were studied, copied and protected, and are now a UNESCO World Heritage Site, visited by millions.",
    "wiki": "Ajanta Caves"
  },
  {
    "slug": "shettihalli-church",
    "category": "places",
    "title": "The Drowning Church of Shettihalli",
    "region": "Shettihalli, Hassan district, Karnataka, India",
    "lat": 13.08,
    "lon": 76.1,
    "dateLabel": "Built in the 1860s; submerged since 1960",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Villagers and visitors",
    "hook": "Every monsoon, a ruined Gothic church in Karnataka slowly sinks beneath the water. Every summer, it rises again.",
    "summary": [
      "The Rosary Church at Shettihalli, near Hassan in Karnataka, was built by French missionaries in the 1860s in the Gothic style, with tall pointed arches. In 1960, the Hemavathi dam was built downstream, and the church and village were abandoned as the land was flooded for the reservoir.",
      "Each year, as the monsoon fills the reservoir, the church disappears under the water, sometimes all but its spires. In the dry months, from about December to May, the water drops and the roofless ruin stands again on the cracked lake bed."
    ],
    "explanation": "It is a simple effect of the reservoir's water level rising and falling with the seasons. The ruin has become a popular, eerily beautiful place to visit, and a favourite of photographers.",
    "wiki": "Shettihalli Rosary Church"
  },
  {
    "slug": "mustang-sky-caves",
    "category": "places",
    "title": "The Sky Caves of Mustang",
    "region": "Upper Mustang, Nepal",
    "lat": 29.18,
    "lon": 83.96,
    "dateLabel": "Carved up to 3,000 years ago",
    "status": "open",
    "statusLabel": "Partly explained",
    "witnesses": "Villagers, climbers and archaeologists",
    "hook": "In the cliffs of a remote Himalayan kingdom are some 10,000 caves, many high above the ground, with no obvious way to reach them.",
    "summary": [
      "In Upper Mustang, a remote former kingdom in northern Nepal near the Tibetan border, the cliffs of the Kali Gandaki valley are honeycombed with caves, some stacked several storeys high and cut into sheer rock faces far above the valley floor. There may be around 10,000 of them.",
      "Who carved them, when, and how people climbed up to them has long been a mystery. Local people had no clear memory of their origins."
    ],
    "explanation": "Since the 1990s, teams of climbers and archaeologists have reached some caves and found that they were used over thousands of years, as homes, storage, meditation chambers and places for the dead. They found Buddhist manuscripts, wall paintings and everyday objects. How people reached the highest caves is still not fully understood.",
    "wiki": "Mustang Caves"
  },
  {
    "slug": "longyou-caves",
    "category": "places",
    "title": "The Longyou Caves",
    "region": "Longyou County, Zhejiang, China",
    "lat": 29.03,
    "lon": 119.18,
    "dateLabel": "Found in 1992; at least 2,000 years old",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Villagers and archaeologists",
    "hook": "In 1992, villagers pumped the water out of a pond and found a vast, carved cavern underneath. Nobody knows who made it, or why.",
    "summary": [
      "In 1992, a villager in Longyou County, Zhejiang province, pumped the water out of a small pond that local people had believed was bottomless. Beneath it was an enormous man-made cave, with high ceilings, columns and walls covered in neat, parallel chisel marks.",
      "Two dozen similar caves have since been found in the area, some covering more than 1,000 square metres. No historical records mention them."
    ],
    "explanation": "Archaeologists estimate they were dug at least 2,000 years ago, removing huge amounts of rock by hand. Suggestions for their purpose include quarries, storage, military use or tombs for nobles, but no clear evidence has settled it. The lack of any record of such an enormous project is the real mystery.",
    "wiki": "Longyou Caves"
  },
  {
    "slug": "carnac-stones",
    "category": "places",
    "title": "The Carnac Stones",
    "region": "Carnac, Brittany, France",
    "lat": 47.59,
    "lon": -3.08,
    "dateLabel": "Raised about 6,000 years ago",
    "status": "explained",
    "statusLabel": "Purpose debated",
    "witnesses": "Archaeologists and visitors",
    "hook": "Thousands of standing stones march in long rows across the fields of Brittany. Legend says they are Roman soldiers turned to stone.",
    "summary": [
      "Around the village of Carnac in Brittany, more than 3,000 standing stones stand in long, straight rows stretching for kilometres, along with stone circles and burial mounds. They were raised by Neolithic people between about 4500 and 3300 BCE.",
      "A local legend says they were a Roman army pursuing Saint Cornelius, who turned them to stone, which is why they stand in such perfect ranks."
    ],
    "explanation": "Archaeologists agree the stones were set up by Neolithic farming communities, but why remains debated: suggestions include ceremonies, marking territory, honouring ancestors or tracking the sun and seasons. It is one of the largest groups of standing stones in the world.",
    "wiki": "Carnac stones"
  },
  {
    "slug": "lalibela",
    "category": "places",
    "title": "The Rock Churches of Lalibela",
    "region": "Lalibela, Amhara, Ethiopia",
    "lat": 12.03,
    "lon": 39.04,
    "dateLabel": "Carved in the 12th and 13th centuries",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Pilgrims, priests and archaeologists",
    "hook": "In the highlands of Ethiopia, eleven churches were carved straight down into solid rock. Tradition says angels worked on them at night.",
    "summary": [
      "In the town of Lalibela in Ethiopia's highlands, eleven churches are carved directly out of the volcanic rock, cut downwards from ground level, so that their roofs are level with the earth around them. They have doors, windows, columns and passages, all carved from a single mass of stone.",
      "Tradition credits King Lalibela, who reigned around 1200, with building them as a 'New Jerusalem', and says that angels continued the work at night while the builders slept."
    ],
    "explanation": "Archaeologists say they were carved by skilled stoneworkers using simple iron tools, probably over many decades, and some may have begun as other kinds of buildings. They are still active places of worship and pilgrimage, and a UNESCO World Heritage Site.",
    "wiki": "Lalibela"
  },
  {
    "slug": "kaali-crater",
    "category": "places",
    "title": "The Kaali Crater",
    "region": "Saaremaa island, Estonia",
    "lat": 58.37,
    "lon": 22.67,
    "dateLabel": "Formed about 3,500 years ago",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Islanders and scientists",
    "hook": "On an Estonian island, a round lake sits in a crater made when a meteorite exploded overhead within human memory.",
    "summary": [
      "On the island of Saaremaa in Estonia, a round lake about 110 metres across lies in a deep crater surrounded by a ring of rock and trees. Eight smaller craters lie nearby. Local legends tell of the sun falling to earth.",
      "Archaeologists have found signs of an ancient settlement and offerings around the crater, suggesting it was a sacred place."
    ],
    "explanation": "Scientists confirmed it was made by an iron meteorite that broke up in the atmosphere, probably between about 3,500 and 4,000 years ago, when the island was inhabited. The impact would have been witnessed by people living nearby, and some researchers think it is remembered in Baltic and Finnish myths.",
    "wiki": "Kaali crater"
  },
  {
    "slug": "moeraki-boulders",
    "category": "places",
    "title": "The Moeraki Boulders",
    "region": "Koekohe Beach, Otago, New Zealand",
    "lat": -45.35,
    "lon": 170.83,
    "dateLabel": "Formed about 60 million years ago",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Māori tradition and visitors",
    "hook": "On a New Zealand beach, giant stone spheres lie scattered along the sand, as if dropped from the sky. Māori tradition says they are cargo from a wrecked canoe.",
    "summary": [
      "On Koekohe Beach near Moeraki, on the east coast of New Zealand's South Island, dozens of huge, nearly perfectly round boulders lie along the shore, some up to 2 metres across. Many are cracked open, revealing honeycomb-like patterns inside.",
      "Māori tradition says they are gourds, food baskets and eel traps that washed ashore from the wreck of the great voyaging canoe Āraiteuru, and that the nearby reef is its hull."
    ],
    "explanation": "Geologists explain that they are concretions, which formed slowly in the mud of the sea floor about 60 million years ago, as minerals cemented the sediment around a centre. Over time, the softer cliffs eroded, releasing the hard boulders onto the beach.",
    "wiki": "Moeraki Boulders"
  },
  {
    "slug": "bimini-road",
    "category": "places",
    "title": "The Bimini Road",
    "region": "North Bimini, Bahamas",
    "lat": 25.77,
    "lon": -79.28,
    "dateLabel": "Found in 1968",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Divers and geologists",
    "hook": "In 1968, divers off Bimini found a long line of flat stone blocks on the seabed, just as a famous psychic had predicted signs of Atlantis would appear.",
    "summary": [
      "In 1968, divers including J. Manson Valentine found a straight, half-kilometre line of flat, rectangular limestone blocks lying in shallow water off North Bimini in the Bahamas. It looked like a road or wall.",
      "The American psychic Edgar Cayce had predicted decades earlier that part of Atlantis would rise near Bimini in 1968 or 1969, and many saw the 'Bimini Road' as the fulfilment of his prophecy."
    ],
    "explanation": "Geologists who studied it concluded it is beachrock, a natural limestone that forms along shorelines and cracks into rectangular slabs. Radiocarbon dating showed the blocks formed a few thousand years ago in place, not as a built structure. Some Atlantis enthusiasts still dispute this.",
    "wiki": "Bimini Road"
  },
  {
    "slug": "tansen-raga",
    "category": "voices",
    "title": "Tansen and the Raga of Fire",
    "region": "Gwalior, Madhya Pradesh, India",
    "lat": 26.23,
    "lon": 78.18,
    "dateLabel": "16th century",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Musicians and storytellers through the centuries",
    "hook": "Legend says the great musician Tansen sang a raga so powerful that the lamps of Akbar's court burst into flame.",
    "summary": [
      "Tansen was one of the most celebrated musicians in Indian history, a singer at the court of the Mughal emperor Akbar in the 16th century. He is buried in Gwalior, where a music festival is held in his honour every year.",
      "A famous legend says that when Akbar asked him to sing Raga Deepak, the raga of fire, the lamps in the hall lit by themselves and the air grew so hot that Tansen's body burned, until a woman singing Raga Megh Malhar, the raga of rain, brought a downpour that cooled him."
    ],
    "explanation": "The story is a legend, told to show the power that Indian classical music was believed to hold over nature, with ragas linked to times of day, seasons and moods. There is no historical record of the event, but the tale is still told by musicians and taught to students.",
    "wiki": "Tansen"
  },
  {
    "slug": "whistling-schoolboy",
    "category": "voices",
    "title": "The Whistling Schoolboy",
    "region": "Western Ghats, near Agumbe, Karnataka, India",
    "lat": 13.5,
    "lon": 75.09,
    "dateLabel": "Heard every morning",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Hikers and villagers",
    "hook": "At dawn in the forests of the Western Ghats, travellers hear what sounds like a boy whistling a tune, but no one is there.",
    "summary": [
      "In the hill forests of the Western Ghats, from Maharashtra to Kerala, people walking along streams at dawn and dusk often hear a loud, rambling, very human whistle, rising and falling as if a boy were idly whistling a song. Many have searched for the whistler and found nobody.",
      "Local people and early naturalists gave the sound's owner the nickname 'the whistling schoolboy'."
    ],
    "explanation": "It is the Malabar whistling thrush, a dark blue bird found only in the Western Ghats, which lives along forest streams and sings its human-like whistle especially in the early morning. It is shy and blends into the shadows, so it is much easier to hear than to see.",
    "wiki": "Malabar whistling thrush"
  },
  {
    "slug": "ulama-devil-bird",
    "category": "voices",
    "title": "The Ulama, Sri Lanka's Devil Bird",
    "region": "Central hill forests, Sri Lanka",
    "lat": 7.0,
    "lon": 80.6,
    "dateLabel": "Told for generations; identified around 2001",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Villagers and naturalists",
    "hook": "In the forests of Sri Lanka, a terrible scream at night was blamed on the ulama, a bird that folklore treated as a bad omen.",
    "summary": [
      "For centuries, people in Sri Lanka have told of the ulama, or devil bird, whose cry at night is described as a blood-curdling human scream. Folklore treated hearing it as a bad omen, and nobody was sure which creature made the sound.",
      "Many birds were suggested over the years, including owls, nightjars and even forest eagles."
    ],
    "explanation": "In 2001, a spot-bellied eagle owl found by villagers was widely reported as the answer, and recordings of this large forest owl match the eerie, rising scream described for the ulama. Some naturalists think more than one species may lie behind the legend.",
    "wiki": "Devil Bird"
  },
  {
    "slug": "fiji-turtle-calling",
    "category": "voices",
    "title": "The Turtle Callers of Kadavu",
    "region": "Namuana, Kadavu, Fiji",
    "lat": -19.05,
    "lon": 178.18,
    "dateLabel": "Tradition handed down for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "The women of Namuana village",
    "hook": "On an island in Fiji, the women of one village stand on the cliffs and sing, and turtles are said to rise from the sea to listen.",
    "summary": [
      "In the village of Namuana on Kadavu island, the women keep an old tradition: standing on the headland above the bay and singing a special chant, after which, it is said, sea turtles rise to the surface below. The ceremony has been described by visitors for over a century.",
      "The legend says the turtles are a princess and her daughter from Namuana who were carried off by fishermen from a rival village and turned into turtles to escape. The turtles will not come, it is said, if anyone from that village is watching."
    ],
    "explanation": "The ceremony is a living cultural tradition, and visitors have reported seeing turtles surface during it. Turtles are common in Fijian waters and come up to breathe, so sightings can be explained naturally, but for the people of Namuana the song is a link to their ancestors.",
    "wiki": null
  },
  {
    "slug": "mapua-vaea-blowholes",
    "category": "voices",
    "title": "The Whistling Blowholes of Tonga",
    "region": "Houma, Tongatapu, Tonga",
    "lat": -21.18,
    "lon": -175.32,
    "dateLabel": "Known for generations",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Islanders and visitors",
    "hook": "Along a reef in Tonga, hundreds of jets of sea water shoot into the air with a roar and a whistle, like a chorus of the sea.",
    "summary": [
      "On the south coast of Tongatapu, Tonga's main island, the waves strike a long, flat limestone reef full of holes and channels. With every wave, dozens or hundreds of plumes of spray burst up to 30 metres into the air, each with a whoosh and a whistle.",
      "The place is called Mapu'a 'a Vaea, 'the chief's whistle', and the sound can carry a long way along the coast."
    ],
    "explanation": "The reef is riddled with tunnels formed by erosion. When a wave rushes in, it compresses the water and air inside, forcing them up through openings in the rock, which makes the jets and the whistling sound. The effect is strongest when the sea is rough.",
    "wiki": null
  },
  {
    "slug": "vietnam-lithophone",
    "category": "voices",
    "title": "The Stone Xylophone of the Highlands",
    "region": "Ndut Liêng Krak, Đắk Lắk, Vietnam",
    "lat": 12.4,
    "lon": 108.0,
    "dateLabel": "Found in 1949; about 3,000 years old",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Road builders and an ethnologist",
    "hook": "Workers building a road in Vietnam's highlands dug up a set of long stones. Laid in a row and struck, they played a scale.",
    "summary": [
      "In February 1949, local people building a road near the village of Ndut Liêng Krak in Vietnam's Central Highlands found eleven long, chipped stone slabs. When the French ethnologist Georges Condominas laid them in order and struck them, it was clear they were a musical instrument.",
      "More of these stone instruments, called lithophones, have since been found across the region, and highland peoples still play stone and bamboo instruments today."
    ],
    "explanation": "Archaeologists estimate the Ndut Liêng Krak lithophone is around 3,000 years old, making it one of the oldest known musical instruments in Southeast Asia. Its stones were carefully shaped to give a musical scale. It is now held in a museum in Paris.",
    "wiki": "Lithophone"
  },
  {
    "slug": "marquis-yi-bells",
    "category": "voices",
    "title": "The Two-Note Bells of Marquis Yi",
    "region": "Suizhou, Hubei, China",
    "lat": 31.69,
    "lon": 113.38,
    "dateLabel": "Made about 2,400 years ago; found in 1978",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Archaeologists and musicians",
    "hook": "In a 2,400-year-old tomb in China, archaeologists found 65 bronze bells, each of which plays two different notes.",
    "summary": [
      "In 1978, soldiers levelling a hill near Suizhou in Hubei province uncovered the tomb of Marquis Yi of Zeng, a ruler who died around 433 BCE. Inside was a complete set of 65 bronze bells hanging from a wooden frame, along with other instruments.",
      "When musicians struck the bells, they found that each one produced two distinct notes, depending on where it was hit, and that the whole set could still play music."
    ],
    "explanation": "The secret is the bells' almond-shaped cross-section, rather than round, which lets each bell vibrate in two different ways. It shows remarkable knowledge of acoustics and metalworking in ancient China. The bells are now in the Hubei Provincial Museum.",
    "wiki": "Bianzhong of Marquis Yi"
  },
  {
    "slug": "earth-hum",
    "category": "voices",
    "title": "The Hum of the Earth",
    "region": "Japan, where it was first detected",
    "lat": 35.68,
    "lon": 139.69,
    "dateLabel": "Discovered in 1998",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Seismometers worldwide",
    "hook": "Even on days without earthquakes, the whole planet rings very faintly, like a bell. Japanese scientists found it in 1998.",
    "summary": [
      "After a large earthquake, the whole Earth vibrates for days, ringing at very low frequencies like a struck bell. Scientists long assumed that between earthquakes, the planet fell silent.",
      "In 1998, Japanese research groups analysing sensitive seismometer records found that the Earth never stops ringing: a constant, faint vibration, far too low for humans to hear, continues even on the quietest days."
    ],
    "explanation": "Scientists now think the 'hum' is driven mainly by ocean waves, especially long waves pressing on the sea floor along coasts and continental shelves, with some contribution from the atmosphere. Its seasonal changes follow the stormy seasons in each hemisphere.",
    "wiki": null
  },
  {
    "slug": "fingals-cave",
    "category": "voices",
    "title": "The Music of Fingal's Cave",
    "region": "Staffa, Inner Hebrides, Scotland",
    "lat": 56.43,
    "lon": -6.34,
    "dateLabel": "Made famous in 1772",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Sailors, visitors and a composer",
    "hook": "On a tiny Scottish island, waves boom and echo inside a cave of black columns, a sound that inspired a famous piece of music.",
    "summary": [
      "The uninhabited island of Staffa, off the west coast of Scotland, is made of tall, six-sided basalt columns. At its edge is Fingal's Cave, a sea cave about 70 metres deep, its walls and roof formed of columns, its floor the sea.",
      "Visitors since the 18th century have described the eerie, cathedral-like booming and echoing of the waves inside. In 1829, the composer Felix Mendelssohn visited and wrote his Hebrides Overture, often called 'Fingal's Cave', inspired by it. Gaelic legend links the cave to the giant Fionn mac Cumhaill."
    ],
    "explanation": "The columns formed from lava that cooled and cracked into regular shapes about 60 million years ago, the same lava field that formed the Giant's Causeway. The cave's arched shape and the sea surging in make it act like a giant echo chamber.",
    "wiki": "Fingal's Cave"
  },
  {
    "slug": "ear-of-dionysius",
    "category": "voices",
    "title": "The Ear of Dionysius",
    "region": "Syracuse, Sicily, Italy",
    "lat": 37.07,
    "lon": 15.28,
    "dateLabel": "Named in 1586",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Visitors and acoustics researchers",
    "hook": "A tall cave in Sicily shaped like an ear carries every whisper to the top. Legend says a tyrant used it to spy on his prisoners.",
    "summary": [
      "In an ancient limestone quarry at Syracuse in Sicily is a tall, narrow cave about 23 metres high, curving inward like the shape of an ear. Sounds inside are greatly amplified, and a whisper near the floor can be heard clearly near the top of the opening.",
      "The painter Caravaggio is said to have named it in 1586, after the legend that Dionysius, a tyrant of ancient Syracuse, used it to listen secretly to the conversations of prisoners kept below."
    ],
    "explanation": "The cave was probably cut by ancient quarry workers, and its shape and smooth walls give it strong acoustic effects. There is no evidence it was designed for eavesdropping, and the legend appears long after Dionysius's time.",
    "wiki": "Ear of Dionysius"
  },
  {
    "slug": "weddell-seal-songs",
    "category": "voices",
    "title": "The Songs Under the Antarctic Ice",
    "region": "McMurdo Sound, Antarctica",
    "lat": -77.85,
    "lon": 166.6,
    "dateLabel": "Recorded for decades",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Researchers and divers",
    "hook": "Beneath the Antarctic sea ice, divers hear sounds like laser guns and alien trills echoing through the water.",
    "summary": [
      "Scientists and divers working under the sea ice of Antarctica, such as in McMurdo Sound, have long been startled by the sounds around them: descending whistles, trills, chirps and sweeps that sound like science fiction sound effects, some of them loud enough to feel.",
      "The sounds can be heard through the ice itself, and on hydrophones lowered through holes."
    ],
    "explanation": "They are made by Weddell seals, which live further south than any other mammal and spend the winter under the ice, keeping breathing holes open. Males use their calls to defend underwater territories and attract mates. Their sounds travel far in the cold water.",
    "wiki": "Weddell seal"
  },
  {
    "slug": "swedish-rhapsody",
    "category": "voices",
    "title": "The Swedish Rhapsody",
    "region": "Broadcast from Poland",
    "lat": 52.23,
    "lon": 21.01,
    "dateLabel": "Late 1950s – 1998",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Shortwave radio listeners",
    "hook": "For decades, a shortwave station played a tinkling music box tune, then what sounded like a little girl reading numbers in German.",
    "summary": [
      "From the late 1950s until 1998, shortwave listeners in Europe could hear a station that began with a few bars of a melody played on a music box, followed by what sounded like a young girl reading out groups of numbers in German. Listeners nicknamed it the 'Swedish Rhapsody', after the tune they thought it was.",
      "The child's voice made it one of the most unsettling of all the Cold War 'numbers stations'."
    ],
    "explanation": "After the Cold War, documents showed that the station was run by Polish intelligence to send coded messages to agents in the West. The 'girl' was not a child at all, but a voice machine developed in East Germany. The station was last heard in 1998.",
    "wiki": "Swedish Rhapsody (numbers station)"
  },
  {
    "slug": "indri-song",
    "category": "voices",
    "title": "The Song of the Indri",
    "region": "Andasibe, Alaotra-Mangoro, Madagascar",
    "lat": -18.94,
    "lon": 48.42,
    "dateLabel": "Heard every morning",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Malagasy villagers and visitors",
    "hook": "In the rainforests of Madagascar, an eerie wailing song drifts across the treetops each morning, and a legend says the singers are lost relatives.",
    "summary": [
      "In the eastern rainforests of Madagascar, around Andasibe, visitors are often woken by an eerie, wailing chorus that rises and falls across the canopy and can carry for kilometres. It is sung by the indri, the largest living lemur.",
      "Malagasy legend tells of two brothers, one of whom stayed in the forest and became the first indri, so the indri are considered relatives, and many communities hold it fady, or taboo, to hunt them."
    ],
    "explanation": "Indri families sing together to mark their territory and keep in contact. Each family's song is distinct, and young indri learn to sing in time with their parents. The indri is critically endangered, and its song is one of the most famous sounds of Madagascar.",
    "wiki": "Indri"
  },
  {
    "slug": "newgrange-resonance",
    "category": "voices",
    "title": "The Echoing Chamber of Newgrange",
    "region": "Newgrange, Boyne Valley, County Meath, Ireland",
    "lat": 53.69,
    "lon": -6.48,
    "dateLabel": "Built about 5,200 years ago",
    "status": "explained",
    "statusLabel": "Partly explained",
    "witnesses": "Archaeologists and acoustics researchers",
    "hook": "Deep inside a 5,000-year-old Irish passage tomb, a low voice or drum seems to fill the whole stone chamber.",
    "summary": [
      "Newgrange is a great circular mound in Ireland's Boyne Valley, built about 5,200 years ago, older than Stonehenge and the pyramids of Giza. A long stone passage leads to a cross-shaped chamber, which is lit by the rising sun on the mornings around the winter solstice.",
      "In the 1990s, acoustics researchers tested the chamber and found that it resonates strongly at low frequencies, in the range of a deep male voice or a drum, so that such sounds seem to swell and surround the listener."
    ],
    "explanation": "Similar resonances have been measured in other ancient chambers, such as the Ħal Saflieni Hypogeum in Malta. Whether the builders designed them for sound, or whether the effect simply comes from the size and shape of a stone room, is debated by archaeologists.",
    "wiki": "Newgrange"
  },
  {
    "slug": "arecibo-weird-signal",
    "category": "voices",
    "title": "The 'Weird!' Signal from Ross 128",
    "region": "Arecibo Observatory, Puerto Rico",
    "lat": 18.34,
    "lon": -66.75,
    "dateLabel": "May 2017",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Astronomers at Arecibo",
    "hook": "In 2017, the great radio telescope at Arecibo picked up strange signals from a nearby star. The astronomers called them simply 'Weird!'.",
    "summary": [
      "In May 2017, astronomers using the Arecibo radio telescope in Puerto Rico were studying red dwarf stars when they recorded unusual, regular radio signals that seemed to come from the direction of Ross 128, a small star about 11 light years away.",
      "Abel Méndez, who led the study, posted about the 'Weird!' signals, and the news spread around the world with speculation about alien transmissions. The team appealed for help from other observatories."
    ],
    "explanation": "Follow-up observations showed the signals most likely came from geostationary satellites, which sat close to the star's position in the sky. The episode showed how astronomers check unusual signals. The Arecibo telescope collapsed in 2020.",
    "wiki": null
  },
  {
    "slug": "divje-babe-flute",
    "category": "voices",
    "title": "The Divje Babe Flute",
    "region": "Divje Babe cave, near Cerkno, Slovenia",
    "lat": 46.07,
    "lon": 13.92,
    "dateLabel": "About 50,000 years old; found in 1995",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Archaeologists",
    "hook": "In a Slovenian cave, archaeologists found a cave bear bone with holes in a row. Some say it is the oldest musical instrument in the world, made by Neanderthals.",
    "summary": [
      "In 1995, archaeologist Ivan Turk, excavating the Divje Babe cave in western Slovenia, found a piece of a young cave bear's thigh bone with two complete holes and traces of others in a line, in a layer dating to roughly 50,000 years ago, when Neanderthals lived in the area.",
      "Turk argued it was a flute, which would make it the oldest known musical instrument, and the first made by Neanderthals. Musicians have played replicas of it."
    ],
    "explanation": "Other researchers argue the holes were made by a carnivore, such as a hyena, biting the bone, since similar punctures are seen on bones chewed by animals. The debate continues. The oldest undisputed flutes, made from bird bone and ivory by modern humans in Germany, are about 40,000 years old.",
    "wiki": "Divje Babe flute"
  },
  {
    "slug": "hurrian-hymn",
    "category": "voices",
    "title": "The Oldest Song in the World",
    "region": "Ugarit (Ras Shamra), Latakia, Syria",
    "lat": 35.6,
    "lon": 35.78,
    "dateLabel": "Written about 3,400 years ago",
    "status": "disputed",
    "statusLabel": "Interpretations differ",
    "witnesses": "Archaeologists and musicologists",
    "hook": "A clay tablet from an ancient Syrian city holds a hymn with musical notes, the oldest written melody known. Nobody agrees on how it sounded.",
    "summary": [
      "In the 1950s, archaeologists excavating the ancient city of Ugarit, on the coast of Syria, found clay tablets inscribed in cuneiform, written around 1400 BCE. One of them, known as Hurrian hymn number 6, contains the words of a hymn to a goddess, together with instructions for playing it on a lyre.",
      "It is the oldest substantially complete piece of written music yet found."
    ],
    "explanation": "Scholars agree that it is music, but not on how to read the notation. Since the 1970s, several researchers have published very different reconstructions, and performers have recorded many versions. Each is an informed guess at a song last heard more than 3,000 years ago.",
    "wiki": "Hurrian songs"
  },
  {
    "slug": "kupgal-rock-gongs",
    "category": "voices",
    "title": "The Rock Gongs of Kupgal Hill",
    "region": "Kupgal, near Ballari, Karnataka, India",
    "lat": 15.2,
    "lon": 76.98,
    "dateLabel": "Used thousands of years ago",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Archaeologists and villagers",
    "hook": "On a granite hill in Karnataka, Neolithic people struck boulders that ring like bells, and carved pictures on the rocks around them.",
    "summary": [
      "Kupgal Hill, near Ballari in Karnataka, is a granite hill crossed by a band of dark dolerite rock. Thousands of years ago, Neolithic people carved hundreds of pictures of cattle, people and other figures on its rocks.",
      "Among them are boulders that ring with a clear, metallic note when struck with a stone. They are covered with small cup-shaped hollows, worn by people striking them again and again."
    ],
    "explanation": "Archaeologists, including Nicole Boivin, have studied the site and concluded the boulders were used as rock gongs, probably in gatherings or ceremonies. Dolerite boulders resting on other rocks can vibrate freely and ring. The site suggests sound and music were important to the region's early farming communities.",
    "wiki": "Kupgal petroglyphs"
  },
  {
    "slug": "bristol-hum",
    "category": "voices",
    "title": "The Bristol Hum",
    "region": "Bristol, England",
    "lat": 51.45,
    "lon": -2.59,
    "dateLabel": "Reported from the 1970s",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Hundreds of residents",
    "hook": "In the 1970s, hundreds of people in Bristol complained of a low, droning hum that kept them awake, which most of their neighbours couldn't hear.",
    "summary": [
      "In the late 1970s, people in and around Bristol began reporting a low-frequency hum, often described as like a distant engine idling, mostly heard indoors at night. When a national newspaper wrote about it, hundreds of readers wrote in to say they heard it too.",
      "Some sufferers said it caused headaches and sleeplessness, and many spent years trying to find its source."
    ],
    "explanation": "No single source was found. Suggestions included factories, traffic, pipelines and power lines, as well as a form of tinnitus or a sensitivity to low sounds that only some people have. Similar hums have since been reported around the world, including in Taos, New Mexico.",
    "wiki": "The Hum"
  },
  {
    "slug": "bush-stone-curlew",
    "category": "voices",
    "title": "The Wailing in the Australian Night",
    "region": "Eastern Queensland, Australia",
    "lat": -27.47,
    "lon": 153.03,
    "dateLabel": "Heard every night",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Residents and campers",
    "hook": "On Australian nights, a long, mournful wail drifts through parks and bush, startling newcomers who think someone is crying.",
    "summary": [
      "Across northern and eastern Australia, people out after dark sometimes hear a drawn-out, eerie wailing, rising to a scream, that can sound like a woman or child crying. New arrivals and campers are often alarmed, and some Aboriginal traditions associate the call with sad news.",
      "The wailing often comes from parks, golf courses and open woodland, even in suburbs."
    ],
    "explanation": "It is the call of the bush stone-curlew, a tall, long-legged bird with big yellow eyes that is active at night and stands frozen during the day, relying on camouflage. Its calls are a way for birds to keep in contact and defend territory.",
    "wiki": "Bush stone-curlew"
  },
  {
    "slug": "screaming-foxes",
    "category": "voices",
    "title": "The Screams in the Dark",
    "region": "London and across Britain",
    "lat": 51.51,
    "lon": -0.13,
    "dateLabel": "Heard every winter",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "City residents",
    "hook": "On winter nights in British cities, people wake to a blood-curdling scream outside, and call the police thinking someone is in danger.",
    "summary": [
      "Every winter, especially in January and February, residents of London and other British towns report terrible screams in the night, like a woman shrieking. Police and emergency services receive calls from people convinced someone is being attacked.",
      "Folklore once blamed such sounds on spirits, but the source is much closer to home."
    ],
    "explanation": "The scream belongs to the red fox. During the winter breeding season, foxes, especially vixens, make loud screaming calls to attract mates and warn rivals. Cities have large fox populations, so the sound is common, and when people see the fox, the mystery is solved.",
    "wiki": "Red fox"
  },
  {
    "slug": "kapre",
    "category": "visitors",
    "title": "The Kapre",
    "region": "Bicol, Luzon, Philippines",
    "lat": 13.6,
    "lon": 123.2,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Filipino tradition",
    "hook": "In Philippine folklore, a giant sits in the branches of an old tree at night, smoking a huge cigar. You can smell the smoke.",
    "summary": [
      "The kapre is a figure of Filipino folklore: a very tall, dark, hairy giant who lives in large old trees such as acacia, balete and mango, and is often seen smoking a big cigar. People walking at night say they smell tobacco smoke near such trees, or see a glowing ember high in the branches.",
      "Kapres are usually said to be harmless, but they like to play tricks, making travellers lose their way in a familiar place. Some stories say a kapre may befriend a person and protect them."
    ],
    "explanation": "The kapre is a folklore figure, and many households still treat old trees with respect. Stories of being led in circles reflect how easy it is to get lost in the dark, and the 'smoke' may come from fires, plants or imagination.",
    "wiki": "Kapre"
  },
  {
    "slug": "kitsune",
    "category": "visitors",
    "title": "The Kitsune",
    "region": "Fushimi Inari, Kyoto, Japan",
    "lat": 34.97,
    "lon": 135.77,
    "dateLabel": "Told for over a thousand years",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Japanese tradition",
    "hook": "In Japanese folklore, foxes grow wiser and more powerful with age, gaining extra tails and the power to take human form.",
    "summary": [
      "In Japanese tradition, kitsune, foxes, are intelligent beings with magical powers that grow with age. An old fox may have up to nine tails, and can take human form, often as a beautiful woman, to trick or test people.",
      "Kitsune are also the messengers of Inari, the god of rice and prosperity. At Fushimi Inari Shrine in Kyoto, thousands of fox statues stand among the famous tunnels of red torii gates, and offerings of fried tofu, said to be their favourite food, are left for them."
    ],
    "explanation": "The kitsune is a figure of folklore and religion, found in stories, theatre and art for more than a thousand years. Foxes really do live close to Japanese farms and villages, and their cleverness and nighttime habits helped inspire the legends.",
    "wiki": "Kitsune"
  },
  {
    "slug": "trolls-norway",
    "category": "visitors",
    "title": "The Trolls of Norway",
    "region": "Trollstigen, Møre og Romsdal, Norway",
    "lat": 62.45,
    "lon": 7.67,
    "dateLabel": "Told for centuries",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Norwegian tradition",
    "hook": "In Norway, they say the trolls who lived in the mountains turned to stone if the sun caught them, and you can still see them in the rocks.",
    "summary": [
      "In Norwegian folklore, trolls are huge, slow, often foolish beings who live in mountains, forests and under bridges. They avoid daylight, because the sun turns them to stone.",
      "Many strange rock formations across Norway are said to be trolls who were caught by the dawn, and places are named after them, such as Trollstigen, the 'troll's ladder', a mountain road with steep hairpin bends, and Trolltunga, 'the troll's tongue'."
    ],
    "explanation": "Trolls are folklore, but they helped people explain Norway's dramatic landscape of jagged peaks and odd-shaped boulders. Today they are a beloved part of Norwegian culture, appearing in fairy tales, art and souvenir shops.",
    "wiki": "Troll"
  },
  {
    "slug": "mouras-encantadas",
    "category": "visitors",
    "title": "The Enchanted Moorish Maidens",
    "region": "Minho, northern Portugal",
    "lat": 41.7,
    "lon": -8.3,
    "dateLabel": "Told for centuries",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Portuguese and Galician tradition",
    "hook": "In northern Portugal, they say enchanted maidens guard treasure in springs and caves, and appear on summer mornings combing their hair with golden combs.",
    "summary": [
      "In the folklore of northern Portugal and Galicia in Spain, the mouras encantadas are enchanted maidens who live in springs, caves, rocks and old hillforts. They are said to guard hidden treasure, and are most often seen on Midsummer morning, sitting by water and combing their long hair with a golden comb.",
      "A person who finds one may be offered a choice between her and her treasure, or asked to break her enchantment, which usually requires a test that ends in failure."
    ],
    "explanation": "The mouras encantadas are folklore figures. Many of the places linked to them are prehistoric sites, such as Iron Age hillforts and ancient tombs, which local people explained with stories of a mysterious people of the past.",
    "wiki": null
  },
  {
    "slug": "leshy",
    "category": "visitors",
    "title": "The Leshy, Lord of the Forest",
    "region": "Northern Russian forests",
    "lat": 60.5,
    "lon": 38.5,
    "dateLabel": "Told for centuries",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Slavic tradition",
    "hook": "In the great forests of Russia, people said the Leshy, lord of the woods, could lead you in circles until you turned your clothes inside out.",
    "summary": [
      "In Slavic folklore, the leshy is the spirit of the forest, who can be as tall as the tallest tree or as small as a blade of grass. He protects the forest and its animals, and herders and hunters made deals with him for good luck.",
      "Travellers who got lost in the woods blamed the leshy for leading them astray. To break his spell, people said, you should turn your clothes inside out and put your shoes on the wrong feet."
    ],
    "explanation": "The leshy is a figure of folklore that reflects the real dangers and power of the vast northern forests. Getting lost and walking in circles is a common experience in dense woods without landmarks.",
    "wiki": "Leshy"
  },
  {
    "slug": "vazimba",
    "category": "visitors",
    "title": "The Vazimba",
    "region": "Lake Itasy and the central highlands, Madagascar",
    "lat": -19.07,
    "lon": 46.78,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Malagasy tradition",
    "hook": "In Madagascar's highlands, people tell of the Vazimba, the island's first inhabitants, whose spirits still live in springs and lakes.",
    "summary": [
      "In the traditions of Madagascar's central highlands, the Vazimba were the first people to live on the island, before the ancestors of today's Malagasy arrived. They are often described as small and living close to water.",
      "Their spirits are believed to dwell in springs, rivers, lakes and rocks, and places associated with them are treated with care. Offerings are made there, and certain things, such as pork, are forbidden nearby."
    ],
    "explanation": "Historians debate who the Vazimba were: perhaps early settlers who lived in the highlands before later migrations, remembered in oral tradition. Others see them mainly as spiritual figures. Their sites remain important in Malagasy culture.",
    "wiki": "Vazimba"
  },
  {
    "slug": "bacoo",
    "category": "visitors",
    "title": "The Bacoo",
    "region": "Coastal Guyana",
    "lat": 6.8,
    "lon": -58.16,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Guyanese tradition",
    "hook": "In Guyanese folklore, a tiny being kept in a bottle can bring its owner riches, as long as it's fed bananas and milk.",
    "summary": [
      "The bacoo is a figure of Guyanese folklore: a small, man-like being who lives in a bottle or jar. Its owner must feed it bananas and milk, and in return it can bring wealth and good fortune.",
      "But a bacoo that is neglected or let out is said to cause chaos in the house, throwing stones, moving objects and making noises."
    ],
    "explanation": "The bacoo is a folklore figure, with roots in African and other traditions brought to the Caribbean. Stories of a hidden helper that brings wealth also explain how some people seemed to grow rich mysteriously.",
    "wiki": null
  },
  {
    "slug": "papa-bois",
    "category": "visitors",
    "title": "Papa Bois, Father of the Forest",
    "region": "Northern Range, Trinidad",
    "lat": 10.72,
    "lon": -61.3,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Trinidad and Tobago tradition",
    "hook": "In Trinidad's forests, the old man Papa Bois guards the animals, and hunters who take too much may meet him, or chase a deer that leads them astray.",
    "summary": [
      "Papa Bois is the guardian of the forest in the folklore of Trinidad and Tobago: an old man with a beard of leaves, the hooves of a goat and a horn he blows to warn animals of hunters. He is said to be able to take the form of a deer.",
      "Hunters who kill for sport or take more than they need may be led deep into the forest by a deer that turns out to be Papa Bois. Those who meet him are told to greet him politely, 'Bonjour, vieux papa'."
    ],
    "explanation": "Papa Bois is a figure of folklore, similar to forest guardians in Brazil and elsewhere. Like them, he teaches respect for nature, and he has become a symbol of conservation in Trinidad and Tobago.",
    "wiki": null
  },
  {
    "slug": "buff-ledge",
    "category": "visitors",
    "title": "The Buff Ledge Encounter",
    "region": "Buff Ledge, Lake Champlain, Vermont, USA",
    "lat": 44.6,
    "lon": -73.25,
    "dateLabel": "7 August 1968",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Two summer camp workers; other campers",
    "hook": "Two teenagers sitting on a camp dock at sunset watched lights over Lake Champlain come closer and closer, and lost track of time.",
    "summary": [
      "On the evening of 7 August 1968, two young employees at a girls' summer camp on Lake Champlain, Michael Lapp, 16, and Janet Cornell, 19, were sitting on the dock when they saw bright lights over the lake. One came close, and they said it was a craft with domed top and figures inside.",
      "In 1978, Lapp contacted a UFO investigator, Walter Webb, who tracked down Cornell. She had not seen Lapp since that summer. Under hypnosis, both described being taken aboard and examined, with similar details. Some campers remembered seeing lights over the lake that night."
    ],
    "explanation": "Sceptics point out that memories recovered under hypnosis are unreliable and can be shaped by the questions asked and by stories in films and books. Others find the matching details and the independent witnesses to the lights hard to dismiss.",
    "wiki": null
  },
  {
    "slug": "maria-makiling",
    "category": "visitors",
    "title": "Maria Makiling",
    "region": "Mount Makiling, Laguna, Philippines",
    "lat": 14.14,
    "lon": 121.2,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Filipino tradition",
    "hook": "A Philippine mountain is said to be watched over by Maria Makiling, a beautiful guardian spirit who helps the poor and punishes the greedy.",
    "summary": [
      "Mount Makiling, a forested dormant volcano south of Manila, is said to be home to Maria Makiling, a diwata, or guardian spirit. She is described as a beautiful young woman who protects the mountain's forests and animals, and its outline is sometimes said to look like a woman lying down.",
      "Stories say she once gave villagers gifts of ginger that turned to gold, but withdrew when people grew greedy and cut down her trees. Hikers who get lost on the mountain sometimes say Maria is playing tricks on them."
    ],
    "explanation": "Maria Makiling is a figure of folklore, written about by the national hero José Rizal. Her stories reflect respect for the mountain, which is now a protected forest reserve.",
    "wiki": "Maria Makiling"
  },
  {
    "slug": "nyai-roro-kidul",
    "category": "visitors",
    "title": "The Queen of the Southern Sea",
    "region": "Pelabuhan Ratu, West Java, Indonesia",
    "lat": -6.99,
    "lon": 106.54,
    "dateLabel": "Told for centuries",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Javanese tradition",
    "hook": "On Java's south coast, a hotel keeps a room reserved for the Queen of the Southern Sea, and visitors are warned not to wear green on the beach.",
    "summary": [
      "In Javanese tradition, Nyai Roro Kidul is the Queen of the Southern Sea, a powerful spirit who rules the waters of the Indian Ocean off Java's south coast. She is associated with the colour green, and the kings of Central Java's royal courts are traditionally said to be her spiritual consorts.",
      "Along the coast, people still warn against wearing green on the beach. At the Samudra Beach Hotel in Pelabuhan Ratu, room 308 is kept decorated in green and reserved for her, with a painting of the queen."
    ],
    "explanation": "Nyai Roro Kidul is a figure of folklore and belief. The warnings along the coast have a practical side: the south coast of Java has strong waves and dangerous rip currents, and the legend encourages people to treat the sea with caution.",
    "wiki": "Nyai Roro Kidul"
  },
  {
    "slug": "clonmacnoise-sky-ship",
    "category": "visitors",
    "title": "The Ship in the Sky over Clonmacnoise",
    "region": "Clonmacnoise, County Offaly, Ireland",
    "lat": 53.33,
    "lon": -7.99,
    "dateLabel": "8th century",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Monks, as recorded in Irish annals",
    "hook": "Irish chronicles tell of a ship sailing through the sky over a monastery, whose anchor caught on the church. A sailor climbed down the rope.",
    "summary": [
      "Medieval Irish annals and later writings tell a strange story set at the monastery of Clonmacnoise, on the River Shannon. During a gathering, a ship appeared sailing in the air, and its anchor caught on the church door, or on the altar rail.",
      "A sailor climbed down the rope to free it, and the monks seized him. He cried out that he was drowning, and the abbot told them to let him go. He climbed back up, the anchor was freed and the ship sailed away."
    ],
    "explanation": "Historians see it as a wonder tale, perhaps a story about the boundary between this world and the otherworld, found in several medieval Irish and English sources. Some writers have read it as an early UFO sighting. The ruins of Clonmacnoise are still visited today.",
    "wiki": "Clonmacnoise"
  },
  {
    "slug": "levelland-1957",
    "category": "sky",
    "title": "The Levelland Sightings",
    "region": "Levelland, Texas, USA",
    "lat": 33.59,
    "lon": -102.38,
    "dateLabel": "2–3 November 1957",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Drivers, police officers and a fire marshal",
    "hook": "One November night in Texas, drivers reported a glowing egg-shaped light crossing the road, and their engines and headlights died as it passed.",
    "summary": [
      "Over a few hours on the night of 2 to 3 November 1957, the police in Levelland, Texas, received a string of calls from drivers on roads around the town. They described a large, glowing, egg-shaped object that flew low over the road or sat on it, and said their car engines and headlights failed as it came near, then worked again when it left.",
      "The local sheriff and other officers also reported seeing a bright light. It happened during a wave of sightings across the United States, days after the Soviet Union launched Sputnik 2."
    ],
    "explanation": "The US Air Force's Project Blue Book concluded the witnesses had seen ball lightning or a similar electrical storm effect, and that wet weather caused the car problems. Critics pointed out that the night was not stormy, and that cars stalling in this way is hard to explain.",
    "wiki": "Levelland UFO case"
  },
  {
    "slug": "lakenheath-bentwaters",
    "category": "sky",
    "title": "The Lakenheath-Bentwaters Radar Case",
    "region": "RAF Lakenheath, Suffolk, England",
    "lat": 52.41,
    "lon": 0.56,
    "dateLabel": "13–14 August 1956",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Radar operators, pilots and ground observers",
    "hook": "One August night in 1956, radar operators at two airbases in England tracked fast-moving objects, and a fighter pilot said one got behind his plane.",
    "summary": [
      "On the night of 13 to 14 August 1956, radar operators at the RAF and US Air Force bases of Bentwaters and Lakenheath in Suffolk tracked several unidentified targets, some moving at very high speed and then stopping suddenly. Ground observers and the crew of a transport plane reported lights.",
      "An RAF Venom night fighter was sent up. Its pilot said he locked onto an object on his radar, and that it then moved behind his aircraft and followed it. A second fighter was sent, and the objects were eventually lost."
    ],
    "explanation": "The University of Colorado UFO study in 1968 examined the case and said it was one of the few it could not explain, describing the apparently intelligent behaviour of the object. Sceptics suggest a combination of radar errors caused by weather, meteors and stars. The case is still debated.",
    "wiki": "Lakenheath-Bentwaters incident"
  },
  {
    "slug": "lubbock-lights",
    "category": "sky",
    "title": "The Lubbock Lights",
    "region": "Lubbock, Texas, USA",
    "lat": 33.58,
    "lon": -101.85,
    "dateLabel": "August – September 1951",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "University professors, residents and a teenage photographer",
    "hook": "On late summer evenings in 1951, professors in Texas watched a curved formation of soft lights glide silently overhead.",
    "summary": [
      "On 25 August 1951, a group of professors from Texas Technological College, sitting outside in Lubbock, saw a semicircle of faint, bluish-green lights pass quickly and silently overhead. They saw it again on several later evenings, as did many residents.",
      "A college student, Carl Hart Jr., took photographs of a V-shaped formation of bright lights, which were published widely and became some of the most famous UFO pictures of the time."
    ],
    "explanation": "Project Blue Book concluded that many sightings were of migrating plovers, birds whose pale undersides reflected the town's new mercury-vapour streetlights. One professor later suggested a natural effect in the atmosphere. Hart's photographs have never been fully explained, but were never shown to be faked.",
    "wiki": "Lubbock Lights"
  },
  {
    "slug": "stephenville-2008",
    "category": "sky",
    "title": "The Stephenville Lights",
    "region": "Stephenville, Texas, USA",
    "lat": 32.22,
    "lon": -98.2,
    "dateLabel": "8 January 2008",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Dozens of residents, including a pilot and a police officer",
    "hook": "One January evening in Texas, residents reported a huge, silent craft with brilliant lights, chased by fighter jets.",
    "summary": [
      "On the evening of 8 January 2008, dozens of people around Stephenville, Texas, reported seeing a very large object, some said a mile long, with bright flashing lights, moving silently and at times very fast. Several said military jets were chasing it.",
      "At first, the US Air Force said no aircraft were flying in the area that evening. Then it corrected itself and said F-16 fighters had been training nearby. The sightings made national news."
    ],
    "explanation": "The Air Force said the witnesses had probably seen the F-16s and the flares they released during exercises. A civilian UFO group studied radar data and argued that an unidentified object was tracked. Most investigators accept that military training explains most of what was seen.",
    "wiki": "2008 Stephenville UFO sighting"
  },
  {
    "slug": "gulf-breeze-1987",
    "category": "sky",
    "title": "The Gulf Breeze Photographs",
    "region": "Gulf Breeze, Florida, USA",
    "lat": 30.36,
    "lon": -87.16,
    "dateLabel": "1987 – 1988",
    "status": "explained",
    "statusLabel": "Probably a hoax",
    "witnesses": "A local builder and residents",
    "hook": "A Florida builder took dozens of photographs of a glowing craft over his town. Years later, a model was found in his old house.",
    "summary": [
      "In November 1987, Ed Walters, a builder in the small town of Gulf Breeze, Florida, sent the local newspaper photographs of a glowing, cylinder-shaped craft hovering near his home. Over the following months he produced dozens more, and said he had been visited by the beings that flew it.",
      "Many other residents reported lights in the sky, and the town became a centre of UFO interest, with crowds gathering at night."
    ],
    "explanation": "In 1990, the family who bought Walters's former house said they found a small model of a UFO hidden in the attic, very similar to the craft in his photos. Walters said it was planted. Most researchers consider his photographs a hoax, though some local sightings of lights were never explained.",
    "wiki": "Gulf Breeze UFO incident"
  },
  {
    "slug": "usovo-1982",
    "category": "sky",
    "title": "The Missile Base Incident of 1982",
    "region": "Near Usovo, Zhytomyr Oblast, Ukraine",
    "lat": 51.0,
    "lon": 28.1,
    "dateLabel": "4 October 1982",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Soldiers at a Soviet missile base, according to later reports",
    "hook": "According to KGB files released decades later, a huge object hovered over a Soviet nuclear missile base, and the launch panel lit up by itself.",
    "summary": [
      "After the fall of the Soviet Union, American journalist George Knapp obtained KGB documents about unidentified flying objects. Among them were accounts of an event on 4 October 1982 at a nuclear missile base near Usovo, in what is now Ukraine.",
      "Witnesses said a large, silent, saucer-shaped object hovered near the base for hours. According to the accounts, for about 15 seconds the launch control panel lit up as if the missiles were being prepared for launch, then went back to normal."
    ],
    "explanation": "There is no independent confirmation of the panel activating, and the accounts come from interviews collected years later. Sceptics suggest rumour and exaggeration, or a technical fault coinciding with lights in the sky. The case is often cited alongside similar claims from American missile bases.",
    "wiki": null
  },
  {
    "slug": "guizhou-forest-1994",
    "category": "sky",
    "title": "The Night the Forest Fell in Guizhou",
    "region": "Duxi forest, near Guiyang, Guizhou, China",
    "lat": 26.65,
    "lon": 106.63,
    "dateLabel": "30 November 1994",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Residents and factory workers",
    "hook": "One night in 1994, witnesses saw glowing lights pass with a roar like a train. In the morning, a swathe of forest lay snapped and flattened.",
    "summary": [
      "Late on 30 November 1994, people near Guiyang, the capital of Guizhou province, saw glowing balls of light in the sky and heard a loud rumbling, like a train passing. The next morning, large areas of pine forest in the Duxi forest farm were found flattened, with trees snapped off in strips.",
      "A nearby factory was also damaged, with roofs torn and a railway wagon pushed along its track. Chinese UFO researchers investigated, and the event became one of China's best-known UFO cases."
    ],
    "explanation": "Meteorologists and other scientists concluded the damage was most likely caused by a downburst or a tornado, powerful winds from a storm cell that can flatten trees in strips. The lights may have been lightning. Some researchers say the pattern of damage was unusual.",
    "wiki": null
  },
  {
    "slug": "mukundpura-meteorite",
    "category": "sky",
    "title": "The Mukundpura Meteorite",
    "region": "Mukundpura, near Jaipur, Rajasthan, India",
    "lat": 26.98,
    "lon": 75.7,
    "dateLabel": "6 June 2017",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Villagers near Jaipur",
    "hook": "Early one June morning, villagers near Jaipur heard a thunderous bang and found a burning stone in their field: a rare meteorite, rich in the chemistry of life.",
    "summary": [
      "At about 5:15 am on 6 June 2017, villagers in Mukundpura, near Jaipur, saw a bright streak in the sky and heard a loud explosion. A stone crashed into a sandy field, making a small crater. The pieces were quickly collected by local authorities and handed to the Geological Survey of India.",
      "Because it was picked up so soon after falling, it was almost untouched by Earth's air and water."
    ],
    "explanation": "Scientists found it is a carbonaceous chondrite, a rare and very old type of meteorite rich in water-bearing minerals and organic compounds, including amino acids, the building blocks of proteins. It has been studied by scientists in India and abroad.",
    "wiki": "Mukundpura meteorite"
  },
  {
    "slug": "polonnaruwa-meteorite",
    "category": "sky",
    "title": "The Polonnaruwa Meteorite",
    "region": "Polonnaruwa, North Central Province, Sri Lanka",
    "lat": 7.94,
    "lon": 81.0,
    "dateLabel": "29 December 2012",
    "status": "disputed",
    "statusLabel": "Claims rejected",
    "witnesses": "Villagers and scientists",
    "hook": "After a fireball fell in Sri Lanka, an astronomer claimed the stones held fossils of tiny life from space. Other scientists disagreed.",
    "summary": [
      "On 29 December 2012, villagers near Polonnaruwa in Sri Lanka saw a bright fireball break up, and collected dark, porous stones from rice fields. Around the same time, coloured rain was reported in parts of the country, as had happened in Kerala in 2001.",
      "In 2013, astronomer Chandra Wickramasinghe, a long-time supporter of the idea that life arrived on Earth from space, published papers claiming the stones contained fossils of diatoms, tiny algae, and were proof of life beyond Earth."
    ],
    "explanation": "Other scientists tested the stones and concluded they were not meteorites at all, but ordinary rocks such as fulgurites, formed when lightning strikes the ground, and that any diatoms were Earth contamination. Most researchers reject the claims.",
    "wiki": "Polonnaruwa (meteorite)"
  },
  {
    "slug": "kitsunebi",
    "category": "sky",
    "title": "The Fox Fires of Ōji",
    "region": "Ōji Inari Shrine, Tokyo, Japan",
    "lat": 35.76,
    "lon": 139.73,
    "dateLabel": "Told for centuries",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Japanese tradition",
    "hook": "Japanese folklore tells of kitsunebi, fox fires: strings of floating lights seen at night in the countryside, said to be carried by foxes.",
    "summary": [
      "In Japanese folklore, kitsunebi, 'fox fires', are mysterious lights seen floating in lines across fields and hillsides at night, appearing and vanishing. They were said to be carried by foxes, or to be the breath of foxes, and to lead travellers astray.",
      "One famous legend says that on New Year's Eve, the foxes of the Kantō region gathered under a great tree near Ōji Inari Shrine in Edo, now Tokyo, their fires shining in the dark. The artist Hiroshige made a famous print of the scene. A festival there still remembers it."
    ],
    "explanation": "Suggested explanations include will-o'-the-wisps from marsh gas, mirages of distant lights, glowing fungi, and the lanterns of people walking in procession at night. The legend is now a celebrated part of Japanese art and festivals.",
    "wiki": "Kitsunebi"
  },
  {
    "slug": "kifuka-lightning",
    "category": "sky",
    "title": "Kifuka, Africa's Lightning Capital",
    "region": "Kifuka, South Kivu, Democratic Republic of the Congo",
    "lat": -2.5,
    "lon": 28.0,
    "dateLabel": "Every year",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Villagers and satellites",
    "hook": "In the mountains of eastern Congo, one small village has some of the most lightning anywhere on Earth.",
    "summary": [
      "Kifuka is a village in the mountains of South Kivu, in the eastern Democratic Republic of the Congo. Satellite measurements show that the area around it has one of the highest rates of lightning on Earth, with an average of about 158 flashes per square kilometre every year.",
      "Thunderstorms build up there on most days of the year, especially from October to March."
    ],
    "explanation": "Scientists explain it by geography: warm, moist air from the Atlantic travels across the Congo rainforest, and when it meets the cooler air of the eastern mountains it rises quickly and forms powerful thunderstorms. Kifuka was once ranked first in the world, but Lake Maracaibo in Venezuela now holds that title.",
    "wiki": "Kifuka"
  },
  {
    "slug": "almahata-sitta",
    "category": "sky",
    "title": "The First Asteroid Caught Before Impact",
    "region": "Nubian Desert, Sudan",
    "lat": 20.75,
    "lon": 32.38,
    "dateLabel": "7 October 2008",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Astronomers, a train station worker and university students",
    "hook": "In 2008, astronomers spotted an asteroid 19 hours before it hit Earth, for the first time ever. Students then found its pieces in the Sudanese desert.",
    "summary": [
      "On 6 October 2008, an astronomer at the Catalina Sky Survey in Arizona spotted a small asteroid, a few metres across, named 2008 TC3. Calculations showed it would hit Earth in about 19 hours, over northern Sudan. It was the first time an asteroid had been seen in space before striking the planet.",
      "Early on 7 October, it exploded in the atmosphere above the Nubian Desert in a brilliant fireball, seen by a pilot and by people on the ground, including workers at a remote railway station called Almahata Sitta."
    ],
    "explanation": "In December, astronomer Peter Jenniskens and Muawia Shaddad of the University of Khartoum led a team of students and staff who walked across the desert in a line, and found about 600 fragments. The meteorite, named Almahata Sitta, turned out to be a rare type. It showed that astronomers could predict and recover a strike.",
    "wiki": "2008 TC3"
  },
  {
    "slug": "cosford-1993",
    "category": "sky",
    "title": "The Cosford Incident",
    "region": "RAF Cosford, Shropshire, England",
    "lat": 52.64,
    "lon": -2.3,
    "dateLabel": "30–31 March 1993",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Police officers, military personnel and the public",
    "hook": "One night in 1993, a huge triangular craft was reported crossing England, flying low over two RAF bases. The Ministry of Defence investigated.",
    "summary": [
      "On the night of 30 to 31 March 1993, people across England and Wales reported bright lights in the sky. Some witnesses, including police officers and military staff at RAF Cosford and RAF Shawbury, described a large, triangular object flying low and slowly, then speeding away. One said it shone a beam of light on the ground.",
      "Nick Pope, who then worked on UFO reports at the Ministry of Defence, investigated and argued the case was of real defence interest."
    ],
    "explanation": "The Ministry of Defence concluded there was no threat. Investigators found that the earlier sightings that night matched the re-entry of a Russian rocket body, which would have looked like a formation of bright lights. The later, low-level sightings at Shawbury have not been fully explained.",
    "wiki": null
  },
  {
    "slug": "pribram-meteorite",
    "category": "sky",
    "title": "The Příbram Meteorite",
    "region": "Příbram, Central Bohemia, Czech Republic",
    "lat": 49.68,
    "lon": 14.0,
    "dateLabel": "7 April 1959",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Astronomers at Ondřejov Observatory and the public",
    "hook": "In 1959, cameras in Czechoslovakia photographed a fireball as it fell, and for the first time scientists traced a meteorite back to its orbit in space.",
    "summary": [
      "On the evening of 7 April 1959, a brilliant fireball crossed the sky over central Czechoslovakia. It was photographed by cameras at two stations of the Ondřejov Observatory, which had been set up to record meteors.",
      "Several stones were later found near the town of Příbram. They were ordinary stony meteorites."
    ],
    "explanation": "Using the photographs, astronomers calculated the fireball's path and worked out the orbit the meteorite had followed around the Sun, which reached out into the asteroid belt. It was the first time this had been done, and it proved that meteorites come from asteroids. Camera networks around the world now do the same.",
    "wiki": "Příbram (meteorite)"
  },
  {
    "slug": "tagish-lake-meteorite",
    "category": "sky",
    "title": "The Tagish Lake Meteorite",
    "region": "Tagish Lake, British Columbia, Canada",
    "lat": 59.7,
    "lon": -134.2,
    "dateLabel": "18 January 2000",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Residents of the Yukon and British Columbia",
    "hook": "A fireball exploded over northern Canada in winter, and a local man gathered its fragments from the frozen lake without touching them by hand.",
    "summary": [
      "On the morning of 18 January 2000, a huge fireball lit up the sky over the Yukon and northern British Columbia, followed by sonic booms. A week later, Jim Brook, a local resident, found dark fragments lying on the ice of Tagish Lake.",
      "Knowing they might be valuable to science, he collected them in clean plastic bags without touching them, and kept them frozen, so they were never warmed or contaminated."
    ],
    "explanation": "The Tagish Lake meteorite turned out to be a very rare, fragile type rich in carbon and organic compounds, possibly from the outer asteroid belt. Because it was kept frozen and clean, it is one of the most pristine meteorites ever studied, and has taught scientists about the early solar system.",
    "wiki": "Tagish Lake (meteorite)"
  },
  {
    "slug": "chicxulub-crater",
    "category": "sky",
    "title": "The Crater That Ended the Dinosaurs",
    "region": "Chicxulub, Yucatán, Mexico",
    "lat": 21.4,
    "lon": -89.52,
    "dateLabel": "About 66 million years ago; found in 1978",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Oil geologists, then scientists",
    "hook": "Buried beneath the Yucatán Peninsula is a crater 180 km wide, left by the asteroid that wiped out the dinosaurs.",
    "summary": [
      "In 1978, geophysicists working for Mexico's state oil company, Pemex, noticed a huge buried ring structure under the Yucatán Peninsula while searching for oil. Separately, in 1980, scientists had proposed that an asteroid impact caused the extinction of the dinosaurs, based on a layer of rare metals found around the world.",
      "In the early 1990s, researchers linked the two: the buried structure, centred near the town of Chicxulub, was a crater about 180 km across, the right age."
    ],
    "explanation": "Scientists now agree that an asteroid about 10 km wide struck here about 66 million years ago, causing fires, tsunamis and years of darkness that led to the extinction of the dinosaurs and many other species. A ring of cenotes, water-filled sinkholes, traces the crater's buried edge.",
    "wiki": "Chicxulub crater"
  },
  {
    "slug": "vinales-meteorite",
    "category": "sky",
    "title": "The Viñales Meteorite",
    "region": "Viñales, Pinar del Río, Cuba",
    "lat": 22.62,
    "lon": -83.71,
    "dateLabel": "1 February 2019",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Thousands of people across western Cuba",
    "hook": "One afternoon in 2019, a fireball streaked over western Cuba and exploded with a bang that shook houses. Stones rained down around Viñales.",
    "summary": [
      "Around 1:20 pm on 1 February 2019, people across western Cuba saw a brilliant fireball cross the sky, leaving a long smoke trail, followed by a loud explosion that rattled windows. It was also seen from Florida.",
      "Soon after, residents around Viñales, a valley famous for its tobacco farms and limestone hills, found dark stones scattered in fields and streets, some of which had fallen through roofs. No one was hurt."
    ],
    "explanation": "Scientists confirmed that a small asteroid had broken up in the atmosphere, scattering fragments of an ordinary stony meteorite over the area. It was one of the best-recorded meteorite falls in the Caribbean.",
    "wiki": "Viñales meteorite"
  },
  {
    "slug": "gimbal-gofast",
    "category": "sky",
    "title": "The 'Gimbal' and 'GoFast' Videos",
    "region": "Off the coast of Florida, Atlantic Ocean",
    "lat": 30.3,
    "lon": -80.0,
    "dateLabel": "2015; released 2017–2020",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "US Navy pilots",
    "hook": "Navy fighter pilots filmed objects on their infrared cameras off the US East Coast, one seeming to rotate in mid-air. The Pentagon later confirmed the videos.",
    "summary": [
      "In 2015, US Navy F/A-18 pilots from the aircraft carrier USS Theodore Roosevelt, training off the East Coast, recorded several videos on their targeting cameras. In one, nicknamed 'Gimbal', a dark object appears to rotate as it moves. In another, 'GoFast', a small object seems to race low over the ocean.",
      "The videos were published in 2017, and in 2020 the Pentagon officially released them as showing 'unidentified aerial phenomena'. Pilots described seeing many such objects during that period."
    ],
    "explanation": "Analysts have argued that the 'rotation' in Gimbal is an effect of the camera's mount and lens glare, and that the GoFast object was moving much more slowly and higher up than it appears, possibly a balloon. The Navy has not given an official explanation.",
    "wiki": "Pentagon UFO videos"
  },
  {
    "slug": "dhajala-meteorite",
    "category": "sky",
    "title": "The Dhajala Meteorite Shower",
    "region": "Dhajala, Surendranagar, Gujarat, India",
    "lat": 22.38,
    "lon": 71.43,
    "dateLabel": "28 January 1976",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Villagers across Saurashtra",
    "hook": "One January night in 1976, a fireball brighter than the full moon exploded over Gujarat, and hundreds of stones rained down on the villages below.",
    "summary": [
      "On the night of 28 January 1976, people across the Saurashtra region of Gujarat saw a fireball much brighter than the full moon, ending in a flash and two loud explosions. Stones fell over an area about 18 km long around the village of Dhajala.",
      "Villagers and scientists collected hundreds of fragments, more than 60 kg in all, the largest weighing about 12 kg."
    ],
    "explanation": "Dhajala is an ordinary stony meteorite of a rare, little-altered type. Because so many fragments were found and their positions mapped, scientists used it to study how meteoroids break up in the atmosphere. The main mass is held by the Geological Survey of India.",
    "wiki": "Dhajala meteorite"
  },
  {
    "slug": "forest-owlet",
    "category": "creatures",
    "title": "The Forest Owlet's Return",
    "region": "Toranmal, Nandurbar, Maharashtra, India",
    "lat": 21.9,
    "lon": 74.47,
    "dateLabel": "Lost after 1884; rediscovered 1997",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Ornithologists Pamela Rasmussen and Ben King",
    "hook": "For 113 years, a small Indian owl was thought extinct, partly because of a museum fraud. Then two birdwatchers found it in Maharashtra.",
    "summary": [
      "The forest owlet, a small, stocky owl found only in central India, was last reliably recorded in 1884. Searches in the places listed on old museum specimens found nothing, and it was presumed extinct.",
      "Researchers later discovered why: some specimens in a British museum had been stolen and re-labelled with false locations by a 20th-century collector, sending searchers to the wrong places. In November 1997, ornithologists Pamela Rasmussen and Ben King searched the right kind of forest and found a forest owlet at Toranmal in Maharashtra."
    ],
    "explanation": "Since then, small populations have been found in Maharashtra, Madhya Pradesh and Gujarat. The owlet is still endangered, but its rediscovery showed how a single dishonest record can make a living species seem lost.",
    "wiki": "Forest owlet"
  },
  {
    "slug": "jerdons-courser",
    "category": "creatures",
    "title": "Jerdon's Courser",
    "region": "Lankamalla hills, Kadapa, Andhra Pradesh, India",
    "lat": 14.55,
    "lon": 78.95,
    "dateLabel": "Lost after 1900; rediscovered 1986",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "A local trapper and researchers of the Bombay Natural History Society",
    "hook": "A shy, night-flying bird of Andhra Pradesh was not seen for 86 years. A local man who knew the scrub forest helped find it again.",
    "summary": [
      "Jerdon's courser is a small, long-legged bird with striking bands on its neck, which lives in the scrub jungle of southern Andhra Pradesh and is active mainly at night. After 1900, there were no confirmed records, and many feared it was extinct.",
      "In January 1986, a researcher from the Bombay Natural History Society, Bharat Bhushan, working with a local trapper named Aitanna who knew its call, found the bird near the Lankamalla hills."
    ],
    "explanation": "Its rediscovery led to the creation of the Sri Lankamalleswara Wildlife Sanctuary to protect it. It remains critically endangered and very rarely seen, and its survival depends on protecting the scrub forest.",
    "wiki": "Jerdon's courser"
  },
  {
    "slug": "arunachal-macaque",
    "category": "creatures",
    "title": "The Arunachal Macaque",
    "region": "Tawang, Arunachal Pradesh, India",
    "lat": 27.59,
    "lon": 91.86,
    "dateLabel": "Described in 2005",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Local communities and scientists",
    "hook": "In 2005, scientists described a new species of monkey from the high forests of Arunachal Pradesh, one that local villagers had known all along.",
    "summary": [
      "In 2003 and 2004, researchers from the Nature Conservation Foundation in India surveyed the high-altitude forests of Tawang and West Kameng in Arunachal Pradesh. They studied a stocky, dark brown macaque with a short tail that lived at up to 3,500 metres, and that local Monpa people called 'mune'.",
      "In 2005, they described it as a new species, the Arunachal macaque, the first new macaque species found in more than a century."
    ],
    "explanation": "The discovery showed that large, new animals can still be found in the forests of north-east India. The macaque lives near villages and sometimes raids crops, and conservation work involves local communities.",
    "wiki": "Arunachal macaque"
  },
  {
    "slug": "hoan-kiem-turtle",
    "category": "creatures",
    "title": "The Turtle of the Returned Sword",
    "region": "Hoàn Kiếm Lake, Hanoi, Vietnam",
    "lat": 21.03,
    "lon": 105.85,
    "dateLabel": "Legend from the 1400s; last turtle died in 2016",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Hanoi residents and scientists",
    "hook": "Legend says a giant turtle in a Hanoi lake took back a magic sword from Vietnam's king. Giant turtles really did live in the lake, until 2016.",
    "summary": [
      "Hoàn Kiếm, 'Lake of the Returned Sword', lies in the heart of Hanoi. Legend says that in the 15th century, the emperor Lê Lợi was given a magic sword to drive out invaders, and after victory, while boating on the lake, a giant golden turtle rose and took the sword back to its divine owner.",
      "For centuries, people reported seeing a huge turtle surfacing in the lake, and its appearances were taken as omens."
    ],
    "explanation": "A real giant softshell turtle lived in the lake, one of the last of the species Rafetus swinhoei, among the largest freshwater turtles in the world. It was treated with great reverence, and when it died in January 2016, it was mourned across Vietnam. Only a few of the species may survive.",
    "wiki": "Hoan Kiem turtle"
  },
  {
    "slug": "chinese-giant-salamander",
    "category": "creatures",
    "title": "The Fish That Cries Like a Baby",
    "region": "Zhangjiajie, Hunan, China",
    "lat": 29.12,
    "lon": 110.48,
    "dateLabel": "Known for centuries",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Villagers and scientists",
    "hook": "In the mountain streams of China lives an amphibian almost two metres long, whose cry sounds like a human baby.",
    "summary": [
      "In Chinese, the Chinese giant salamander is called 'wawa yu', the 'baby fish', because its call is said to sound like a crying infant. It lives in cold, fast mountain streams and caves in central and southern China, and was once found widely there.",
      "Old stories describe strange creatures in mountain pools, and its size, up to 1.8 metres long, and its slippery, wrinkled skin made it the stuff of legend."
    ],
    "explanation": "It is the largest amphibian in the world, a living relative of species that lived alongside the dinosaurs. It is now critically endangered in the wild because of hunting and habitat loss, and genetic studies have found that it is actually several separate species.",
    "wiki": "Chinese giant salamander"
  },
  {
    "slug": "formosan-clouded-leopard",
    "category": "creatures",
    "title": "The Formosan Clouded Leopard",
    "region": "Mountains of Taitung, Taiwan",
    "lat": 22.75,
    "lon": 121.0,
    "dateLabel": "Declared extinct in 2013; reported since",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Indigenous rangers and villagers",
    "hook": "Taiwan's clouded leopard was declared extinct after years of camera traps found nothing. Then rangers said they had seen one.",
    "summary": [
      "The Formosan clouded leopard, a medium-sized wild cat with large cloud-shaped markings, once lived in the mountain forests of Taiwan and was important in the traditions of Indigenous peoples such as the Paiwan and Rukai. It was last reliably recorded decades ago.",
      "A large camera-trap survey between 1997 and 2012 found no trace, and in 2013 scientists declared it extinct. In 2019, rangers from a Paiwan village reported seeing clouded leopards in the mountains of Taitung."
    ],
    "explanation": "No photographs or physical evidence have confirmed the 2019 sightings, and scientists remain cautious. The reports led to new searches. If it survives, it would be one of the rarest cats in the world.",
    "wiki": "Formosan clouded leopard"
  },
  {
    "slug": "orang-mawas",
    "category": "creatures",
    "title": "The Orang Mawas",
    "region": "Endau-Rompin, Johor, Malaysia",
    "lat": 2.5,
    "lon": 103.3,
    "dateLabel": "Reported for generations; wave of sightings in 2005–06",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Orang Asli villagers, workers and visitors",
    "hook": "In the rainforests of southern Malaysia, people describe a tall, hairy creature that walks upright, and in 2006 the state government went looking.",
    "summary": [
      "The Orang Asli, the Indigenous peoples of Peninsular Malaysia, have long told of the orang mawas or hantu jarang gigi, a tall, hairy, ape-like being living in the forests of Johor. In 2005 and 2006, a wave of reported sightings and large footprints in the Endau-Rompin area made national news.",
      "The Johor state government organised an expedition with scientists and rangers to search the forest, and the story drew international attention."
    ],
    "explanation": "No body, bones or clear photographs were found. Suggestions include sun bears standing upright, other animals, and footprints enlarged by rain. Some saw the interest as a boost for tourism. The forests of Endau-Rompin remain a protected national park.",
    "wiki": null
  },
  {
    "slug": "olitiau",
    "category": "creatures",
    "title": "The Olitiau",
    "region": "Assumbo mountains, Manyu, Cameroon",
    "lat": 5.7,
    "lon": 9.7,
    "dateLabel": "Reported in 1932",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Naturalist Ivan Sanderson and a companion",
    "hook": "Wading through a river in Cameroon at dusk, two naturalists said a huge black bat with a jaw full of teeth swooped down at them.",
    "summary": [
      "In 1932, the naturalist Ivan Sanderson was collecting animals in the Assumbo mountains of Cameroon with a colleague. Wading in a stream at dusk, they said a huge dark creature, like a bat with a wingspan of about 3.5 metres and a gaping jaw full of teeth, flew straight at them, then returned before vanishing into the night.",
      "Their local guides, Sanderson said, called it olitiau and were terrified of it."
    ],
    "explanation": "No such animal has been found. Most researchers think they saw a hammer-headed bat, Africa's largest bat, which has a wingspan of up to a metre and a large, strange-looking head, its size exaggerated by the shock and the dusk light.",
    "wiki": null
  },
  {
    "slug": "grootslang",
    "category": "creatures",
    "title": "The Grootslang",
    "region": "Richtersveld, Northern Cape, South Africa",
    "lat": -28.2,
    "lon": 17.1,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Local tradition",
    "hook": "In the deserts of north-western South Africa, legend tells of the Grootslang, a giant serpent guarding a bottomless cave full of diamonds.",
    "summary": [
      "The grootslang, Afrikaans for 'great snake', is a legendary creature said to live in a deep cave in the Richtersveld, a remote, rugged desert on the border with Namibia. It is described as a vast serpent, sometimes with the head of an elephant, created by the gods at the beginning of the world.",
      "Its cave, sometimes called the 'Wonder Hole', is said to be bottomless and filled with diamonds, and the region really is rich in diamonds, which have drawn prospectors for over a century."
    ],
    "explanation": "The grootslang is a figure of legend. Stories of fearsome guardians around treasure may have grown among prospectors in a harsh, dangerous landscape. The Richtersveld is now a UNESCO World Heritage Site, known for its rare plants.",
    "wiki": null
  },
  {
    "slug": "megamouth-shark",
    "category": "creatures",
    "title": "The Megamouth Shark",
    "region": "Off Oahu, Hawaiʻi, USA",
    "lat": 21.15,
    "lon": -157.5,
    "dateLabel": "Discovered on 15 November 1976",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "A US Navy research crew",
    "hook": "In 1976, a Navy ship hauled up its sea anchor and found a 4.5-metre shark tangled in it, unlike anything science had seen.",
    "summary": [
      "On 15 November 1976, a US Navy research vessel working off the island of Oahu in Hawaiʻi pulled in a parachute-like sea anchor it had lowered deep into the water. Tangled in it was a large shark, about 4.5 metres long, with a huge, rubbery mouth and soft, flabby body.",
      "Scientists realised it belonged not just to a new species but to a whole new family of sharks. It was named megamouth."
    ],
    "explanation": "Megamouth sharks are gentle filter feeders that live in the deep ocean and rise towards the surface at night to feed on plankton. Only a few hundred have been seen since 1976. Their discovery showed that even large animals can remain hidden in the deep sea.",
    "wiki": "Megamouth shark"
  },
  {
    "slug": "moa-sightings",
    "category": "creatures",
    "title": "The Moa Sightings",
    "region": "Craigieburn Range, Canterbury, New Zealand",
    "lat": -43.15,
    "lon": 171.72,
    "dateLabel": "Reported in 1993",
    "status": "disputed",
    "statusLabel": "Probably a hoax",
    "witnesses": "Three hikers",
    "hook": "New Zealand's giant moa birds died out centuries ago. In 1993, three hikers said they saw one, and photographed it.",
    "summary": [
      "Moa were giant flightless birds, some taller than an adult human, that lived only in New Zealand. They were hunted to extinction soon after people arrived, by around 1400 to 1450.",
      "In January 1993, three hikers in the Craigieburn Range said they saw a large bird, which they believed was a moa, cross a stream. One of them, Paddy Freaney, took a blurry photograph. The story made headlines around the world."
    ],
    "explanation": "Experts who studied the photograph thought it showed a red deer, a person or something else, and some suspected a hoax. Scientists consider moa extinct; the last were seen by Māori and early Polynesian settlers, and their bones are common in caves and swamps.",
    "wiki": "Moa"
  },
  {
    "slug": "drop-bear",
    "category": "creatures",
    "title": "The Drop Bear",
    "region": "Forests of Victoria, Australia",
    "lat": -37.8,
    "lon": 145.5,
    "dateLabel": "A tall tale since the 20th century",
    "status": "explained",
    "statusLabel": "Tall tale",
    "witnesses": "Visitors who were told about it",
    "hook": "Australians warn visitors about the drop bear: a fierce relative of the koala that drops from trees onto unwary hikers.",
    "summary": [
      "Visitors to Australia are often warned, with a straight face, about drop bears: large, carnivorous relatives of the koala that hide in gum trees and drop onto the heads of passers-by. Locals suggest smearing toothpaste or Vegemite behind your ears, or speaking with an Australian accent, to keep them away.",
      "The story is told around campfires, in tourist shops and even in a mock entry on the Australian Museum's website."
    ],
    "explanation": "Drop bears are a joke played on visitors, part of Australian humour. There is a grain of truth: a much larger, extinct relative of the koala and wombat did once live in Australia, and the marsupial lion, an extinct tree-climbing predator, may have ambushed prey from above.",
    "wiki": "Drop bear"
  },
  {
    "slug": "balls-pyramid-tree-lobster",
    "category": "creatures",
    "title": "The Tree Lobster of Ball's Pyramid",
    "region": "Ball's Pyramid, off Lord Howe Island, Australia",
    "lat": -31.75,
    "lon": 159.25,
    "dateLabel": "Thought extinct by 1920s; rediscovered 2001",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Scientists who climbed the rock",
    "hook": "A giant insect thought extinct for 80 years was found living under a single bush on a sheer sea stack in the Pacific.",
    "summary": [
      "The Lord Howe Island stick insect, nicknamed the tree lobster, is a large, dark, flightless insect up to 15 cm long. It was common on Lord Howe Island until 1918, when rats escaped from a shipwreck and wiped it out. It was declared extinct.",
      "Twenty kilometres away stands Ball's Pyramid, a sheer volcanic spike rising 562 metres from the ocean. In 2001, scientists David Priddel and Nicholas Carlile climbed it at night and found 24 of the insects living under a single shrub, high on the rock."
    ],
    "explanation": "Some of the insects were taken to breed in captivity at Melbourne Zoo, where thousands have since been raised. Plans are under way to return them to Lord Howe Island now that rats have been removed. It is one of the most remarkable rediscoveries in natural history.",
    "wiki": "Dryococelus australis"
  },
  {
    "slug": "basajaun",
    "category": "creatures",
    "title": "The Basajaun",
    "region": "Gorbeia, Basque Country, Spain",
    "lat": 43.03,
    "lon": -2.78,
    "dateLabel": "Told for centuries",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Basque tradition",
    "hook": "In the Basque mountains, shepherds tell of the Basajaun, a giant, hairy lord of the woods who protects the flocks.",
    "summary": [
      "In Basque mythology, the basajaun, 'lord of the forest', is a giant, hairy, human-like being who lives in caves and forests high in the Pyrenees and Basque mountains. He protects flocks of sheep, warning shepherds of coming storms or wolves by shouting from the hills.",
      "Some legends say the basajaun taught humans to farm, forge metal and make saws, after the knowledge was tricked from him."
    ],
    "explanation": "The basajaun is a figure of folklore, among the oldest in Europe. Some writers have compared him to wild-man legends elsewhere, such as the yeti. The Basque mountains are still farmed by shepherds today.",
    "wiki": "Basajaun"
  },
  {
    "slug": "owlman",
    "category": "creatures",
    "title": "The Owlman of Mawnan",
    "region": "Mawnan, Cornwall, England",
    "lat": 50.1,
    "lon": -5.1,
    "dateLabel": "April 1976",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Two young sisters, and a few others",
    "hook": "Two young sisters on holiday in Cornwall said they saw a huge owl-like figure with glowing eyes hovering above a church tower.",
    "summary": [
      "In April 1976, two young sisters on holiday near Mawnan, in Cornwall, said they saw a large, feathered, man-sized figure with pointed ears and red eyes hovering above the tower of the village church. Their father reported it to a local writer.",
      "A few more sightings were reported near the church woods over the following years. The creature was named the Owlman."
    ],
    "explanation": "The writer who publicised the story was known for playful hoaxes, and some suspect he exaggerated it. Others suggest the girls saw a large owl, such as an escaped eagle owl, which can have a wingspan of nearly two metres. No evidence of an unknown creature has been found.",
    "wiki": "Owlman"
  },
  {
    "slug": "fresno-nightcrawlers",
    "category": "creatures",
    "title": "The Fresno Nightcrawlers",
    "region": "Fresno, California, USA",
    "lat": 36.74,
    "lon": -119.79,
    "dateLabel": "Filmed in 2007 and 2011",
    "status": "disputed",
    "statusLabel": "Probably a hoax",
    "witnesses": "A homeowner's security camera",
    "hook": "A security camera in California recorded two white figures that seemed to be just a pair of legs, walking across a garden at night.",
    "summary": [
      "In 2007, a man in Fresno, California, released footage from a security camera showing two small, white figures that seemed to consist of nothing but long legs, gliding across his front garden at night. In 2011, a similar clip was said to have been filmed in Yosemite National Park.",
      "The 'nightcrawlers' became an internet sensation, and some linked them to Native American stories of small beings."
    ],
    "explanation": "Sceptics suggest the figures were created with puppets, people wearing white trousers filmed in a certain way, or editing. The people involved have never fully explained the footage, and many think it was a clever hoax.",
    "wiki": null
  },
  {
    "slug": "bear-lake-monster",
    "category": "creatures",
    "title": "The Bear Lake Monster",
    "region": "Bear Lake, Utah–Idaho, USA",
    "lat": 41.96,
    "lon": -111.4,
    "dateLabel": "1868",
    "status": "explained",
    "statusLabel": "Hoax",
    "witnesses": "A newspaper writer's account",
    "hook": "In 1868, a newspaper reported a serpent-like monster in a mountain lake on the Utah–Idaho border. Its author later admitted making it up.",
    "summary": [
      "In 1868, Joseph C. Rich, a settler in the Bear Lake valley, wrote an article for the Deseret News in Salt Lake City describing a huge, serpent-like creature seen by several people in Bear Lake, building on a local Shoshone legend.",
      "The story caused a sensation, and more sightings followed as people came to look."
    ],
    "explanation": "Years later, Rich admitted he had invented or exaggerated the reports as a joke, partly to bring attention to the valley. Sightings continued anyway, and the monster is now a cheerful local mascot, with a monster-shaped boat taking tourists out on the lake.",
    "wiki": "Bear Lake Monster"
  },
  {
    "slug": "steller-sea-ape",
    "category": "creatures",
    "title": "Steller's Sea Ape",
    "region": "Shumagin Islands, Alaska, USA",
    "lat": 55.2,
    "lon": -160.5,
    "dateLabel": "August 1741",
    "status": "open",
    "statusLabel": "Unidentified",
    "witnesses": "Naturalist Georg Steller",
    "hook": "On a voyage to Alaska in 1741, a respected naturalist watched a strange animal with a dog-like head and a tail like a shark's play beside his ship.",
    "summary": [
      "In August 1741, Georg Steller, the naturalist on Vitus Bering's expedition to Alaska, described an animal that swam around the ship near the Shumagin Islands for two hours. It was about 1.5 metres long, with a head like a dog's, large eyes, long whiskers and a tail divided like a shark's, and it played with a piece of seaweed.",
      "Steller was a careful observer who described many animals for the first time, including the Steller's sea cow and the Steller's jay. He called this one a sea ape."
    ],
    "explanation": "No animal matching his description is known. Suggestions include a young fur seal, a sea otter, or an unusual or deformed seal seen in poor conditions. Because Steller was so reliable, the sea ape remains a puzzle.",
    "wiki": null
  },
  {
    "slug": "guije",
    "category": "creatures",
    "title": "The Güije",
    "region": "Rivers of central Cuba",
    "lat": 21.9,
    "lon": -79.97,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Cuban tradition",
    "hook": "In Cuban folklore, a small, dark imp called the güije lives in rivers and pools, and plays tricks on anyone who comes too close.",
    "summary": [
      "The güije, or jigüe, is a figure of Cuban folklore: a small, dark, child-sized being with long hair who lives in rivers, ponds and pools. He is said to come out to sun himself on rocks and to play pranks, splashing people or stealing things from riverbanks.",
      "Parents warned children not to swim alone in deep pools, or the güije might get them."
    ],
    "explanation": "The güije is a folklore figure, with roots in African and Indigenous Taíno traditions. Like many water spirits, the stories serve as a warning about the dangers of rivers.",
    "wiki": "Güije"
  },
  {
    "slug": "ropen",
    "category": "creatures",
    "title": "The Ropen",
    "region": "Umboi Island, Papua New Guinea",
    "lat": -5.6,
    "lon": 147.9,
    "dateLabel": "Reported in the 20th century",
    "status": "open",
    "statusLabel": "Unconfirmed",
    "witnesses": "Islanders and visiting expeditions",
    "hook": "On islands off Papua New Guinea, people describe a large flying creature with a long tail that glows as it flies at night.",
    "summary": [
      "On Umboi Island and other parts of Papua New Guinea, local people tell of the ropen, a large flying creature that comes out at night. Some descriptions give it a long tail with a diamond-shaped tip, and say it glows as it flies.",
      "Several expeditions, mostly by people hoping to prove that pterosaurs survived, have visited the island to look for it, and some have reported seeing lights moving in the night sky."
    ],
    "explanation": "Scientists consider a surviving pterosaur impossible. Suggested explanations include large fruit bats, frigatebirds, which have long forked tails, and bioluminescent insects or other natural lights. No physical evidence has been found.",
    "wiki": "Ropen"
  },
  {
    "slug": "lukwata",
    "category": "creatures",
    "title": "The Lukwata of Lake Victoria",
    "region": "Lake Victoria, Uganda",
    "lat": -0.2,
    "lon": 32.8,
    "dateLabel": "Told for generations",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Baganda tradition and fishermen",
    "hook": "Fishermen on Lake Victoria tell of the lukwata, a great serpent in the lake's depths that can overturn canoes.",
    "summary": [
      "Lake Victoria is Africa's largest lake, shared by Uganda, Kenya and Tanzania. The Baganda people of Uganda tell of the lukwata, a huge, serpent-like creature living in the lake. In the early 20th century, colonial officials and missionaries recorded stories of fishermen who said they had seen it.",
      "It is described as large and dark, with a long neck, and is blamed for sudden disturbances on the water."
    ],
    "explanation": "No evidence of an unknown animal has been found. Suggested explanations include large crocodiles, Nile monitor lizards, giant catfish and lungfish, and the sudden storms that sweep the lake. The legend reflects the lake's importance and dangers for those who fish it.",
    "wiki": null
  },
  {
    "slug": "ramgarh-crater",
    "category": "places",
    "title": "The Ramgarh Crater",
    "region": "Ramgarh, Baran, Rajasthan, India",
    "lat": 25.33,
    "lon": 76.62,
    "dateLabel": "Formed hundreds of millions of years ago; confirmed in 2020",
    "status": "explained",
    "statusLabel": "Confirmed",
    "witnesses": "Villagers, temple keepers and geologists",
    "hook": "In Rajasthan, a ring of hills around a village and an ancient temple turned out to be the remains of a giant meteorite crater.",
    "summary": [
      "Near the village of Ramgarh in Baran district, a near-circular ring of hills about 3 km across rises from the flat plain, with the 10th-century Bhand Deva temple and a lake at its centre. Since the 19th century, geologists had debated whether it was formed by an impact or by other geological processes.",
      "Some saw it as a volcanic or tectonic feature; others pointed to its shape as evidence of a meteorite."
    ],
    "explanation": "In 2020, a study found shocked quartz and other features that only form under the extreme pressure of an impact, and the Earth Impact Database confirmed Ramgarh as an impact structure. It is about 10 km across in total, and was formed hundreds of millions of years ago. It has since been recognised as a geological heritage site.",
    "wiki": "Ramgarh crater"
  },
  {
    "slug": "loktak-phumdis",
    "category": "places",
    "title": "The Floating Islands of Loktak",
    "region": "Loktak Lake, Manipur, India",
    "lat": 24.55,
    "lon": 93.8,
    "dateLabel": "Ancient",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Fishing communities and visitors",
    "hook": "On a lake in Manipur, islands of grass and soil float and drift, and one of them carries the world's only floating national park.",
    "summary": [
      "Loktak Lake in Manipur, the largest freshwater lake in north-east India, is covered with phumdis: floating masses of vegetation, soil and organic matter, some large enough to walk on and to hold fishing huts. They drift with the wind and water levels.",
      "At the southern end lies Keibul Lamjao National Park, the only floating national park in the world, home to the endangered sangai, a dancing deer found nowhere else."
    ],
    "explanation": "The phumdis form over years as plants grow and decay, binding together into thick, buoyant mats. Their thickness changes with the seasons, sinking partly in the dry season and rising in the monsoon. They are threatened today by a dam that keeps water levels high.",
    "wiki": "Loktak Lake"
  },
  {
    "slug": "unakoti",
    "category": "places",
    "title": "The Carvings of Unakoti",
    "region": "Unakoti, Tripura, India",
    "lat": 24.32,
    "lon": 92.07,
    "dateLabel": "Carved between the 7th and 9th centuries",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Pilgrims and archaeologists",
    "hook": "In the forested hills of Tripura, giant faces are carved into the rock. Legend says there are one short of ten million of them.",
    "summary": [
      "Unakoti, in the hills of northern Tripura, is a site of huge rock carvings and stone images set among forest and streams. The largest is a carved head about 10 metres high. Its name means 'one less than a crore', or ten million.",
      "Legend says that Shiva was travelling with a host of gods and stopped there for the night, telling them to rise before dawn. When none of them woke, he cursed them to stone, leaving one short of a crore of images in the hills."
    ],
    "explanation": "Archaeologists date the carvings to between roughly the 7th and 9th centuries, though nobody has counted anything like ten million. The site is protected by the Archaeological Survey of India and is a place of pilgrimage, especially during a spring festival.",
    "wiki": "Unakoti"
  },
  {
    "slug": "shambhala-roerich",
    "category": "places",
    "title": "The Search for Shambhala",
    "region": "Naggar, Kullu, Himachal Pradesh, India",
    "lat": 32.12,
    "lon": 77.17,
    "dateLabel": "Legend for centuries; expedition 1925–28",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Tibetan Buddhist tradition; the Roerich family",
    "hook": "In Tibetan Buddhist tradition, Shambhala is a hidden kingdom beyond the Himalaya. A Russian painter spent years searching for it, then settled in Kullu.",
    "summary": [
      "In Tibetan Buddhist texts, Shambhala is a hidden kingdom somewhere beyond the Himalaya, ruled by wise kings who keep sacred teachings. It is said to be visible only to those who are spiritually ready.",
      "In the 1920s, the Russian painter and mystic Nicholas Roerich and his family led a long expedition across Central Asia and Tibet, partly in search of Shambhala. Afterwards, they settled at Naggar in the Kullu valley, where Roerich painted many Himalayan scenes. His estate is now a museum."
    ],
    "explanation": "Most scholars see Shambhala as a spiritual idea rather than a real place, though some have linked the legend to historical kingdoms in Central Asia. It inspired the Western idea of Shangri-La.",
    "wiki": "Shambhala"
  },
  {
    "slug": "chocolate-hills",
    "category": "places",
    "title": "The Chocolate Hills",
    "region": "Bohol, Philippines",
    "lat": 9.83,
    "lon": 124.17,
    "dateLabel": "Formed over millions of years",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Islanders and visitors",
    "hook": "On a Philippine island, more than a thousand almost identical round hills rise from the plain. In the dry season, they turn brown.",
    "summary": [
      "In the middle of the island of Bohol, more than 1,200 smooth, dome-shaped hills, most 30 to 50 metres high, are scattered across the landscape. They are covered in grass that turns brown in the dry season, giving them their name.",
      "Local legends say they were formed by two giants who threw rocks and sand at each other, or by the tears of a giant mourning a lost love."
    ],
    "explanation": "Geologists explain that they are made of marine limestone, formed from old coral reefs that were lifted up and then worn into rounded shapes by rain and erosion over millions of years. Exactly why they are so regular is still discussed. They are a national geological monument.",
    "wiki": "Chocolate Hills"
  },
  {
    "slug": "son-doong",
    "category": "places",
    "title": "Son Doong, the Hidden Cave",
    "region": "Phong Nha-Kẻ Bàng, Quảng Bình, Vietnam",
    "lat": 17.46,
    "lon": 106.29,
    "dateLabel": "Found around 1990; explored in 2009",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "A local man and British cave explorers",
    "hook": "A man sheltering from a storm in the Vietnamese jungle found a cave entrance with clouds coming out of it. It turned out to be the largest cave passage in the world.",
    "summary": [
      "Around 1990, Hồ Khanh, a local man from the area that is now Phong Nha-Kẻ Bàng National Park, was sheltering in the jungle when he found an opening in a cliff, with the sound of a river inside and mist pouring out. He could not find it again for years.",
      "In 2009, he led a team from the British Cave Research Association back to it. They discovered a passage so vast that it has its own jungle, river and clouds."
    ],
    "explanation": "Son Doong is the largest known cave passage in the world, more than 5 km long and up to 200 metres high in places. It was carved by a river through limestone, and parts of its roof have collapsed, letting sunlight in and allowing forests to grow inside. Tours are strictly limited.",
    "wiki": "Hang Sơn Đoòng"
  },
  {
    "slug": "ishi-no-hoden",
    "category": "places",
    "title": "Ishi-no-Hōden, the Floating Stone",
    "region": "Ōshiko Shrine, Takasago, Hyōgo, Japan",
    "lat": 34.77,
    "lon": 134.79,
    "dateLabel": "Carved by the 7th century",
    "status": "open",
    "statusLabel": "Purpose unknown",
    "witnesses": "Shrine keepers and visitors",
    "hook": "In a Japanese shrine, a giant carved stone sits in a pool of water, seeming to float. No one knows who carved it, or why.",
    "summary": [
      "At the Ōshiko Shrine in Takasago, a huge block of stone weighing around 500 tonnes stands in a rock-cut pit filled with water, so that it appears to float. It was carved out of the surrounding rock, on all sides except a narrow strip beneath it, and has a strange box-like shape with a protrusion on one side.",
      "It is one of the 'three wonders' of Japan, and a sacred object of the shrine. Records mention it as early as the 8th century."
    ],
    "explanation": "Who carved it, when, and for what purpose is unknown. Suggestions include an unfinished burial chamber or a stone that was meant to be moved but never was. The stone is still worshipped at the shrine today.",
    "wiki": "Ishi-no-Hōden"
  },
  {
    "slug": "fuxian-lake-ruins",
    "category": "places",
    "title": "The Ruins Beneath Fuxian Lake",
    "region": "Fuxian Lake, Yunnan, China",
    "lat": 24.53,
    "lon": 102.9,
    "dateLabel": "Found in 2001",
    "status": "disputed",
    "statusLabel": null,
    "witnesses": "Divers and archaeologists",
    "hook": "In 2001, a diver in one of China's deepest lakes spotted stone steps and walls on the lake bed. Surveys found a whole submerged complex.",
    "summary": [
      "Fuxian Lake, in Yunnan province, is one of the deepest lakes in China. In 2001, a local diver spotted large, regular stone blocks, steps and what looked like walls a few hundred metres from the shore.",
      "Surveys using sonar and divers mapped structures across an area of about 2.4 square kilometres, including stone platforms, paved paths and large stepped mounds. Local legends had long told of a city that sank into the lake."
    ],
    "explanation": "Carbon dating of one object suggested an age of about 1,750 years, and some link the site to the ancient Dian kingdom or a Han-dynasty town. Other scientists have urged caution, arguing the evidence is not yet clear enough to say what the structures are or how they came to be underwater.",
    "wiki": "Fuxian Lake"
  },
  {
    "slug": "deer-stones",
    "category": "places",
    "title": "The Deer Stones of Mongolia",
    "region": "Uushigiin Övör, Khövsgöl, Mongolia",
    "lat": 49.66,
    "lon": 99.92,
    "dateLabel": "Carved about 3,000 years ago",
    "status": "explained",
    "statusLabel": "Purpose debated",
    "witnesses": "Herders and archaeologists",
    "hook": "Across the Mongolian steppe stand carved standing stones covered in flying deer, their antlers streaming behind them.",
    "summary": [
      "Across Mongolia and nearby regions stand more than 1,000 tall, carved stones from the Bronze Age, around 3,000 years ago. Many are decorated with stylised deer that seem to fly upward, with long, flowing antlers, as well as belts, weapons and earrings, as if the stone were a person.",
      "At Uushigiin Övör, near the town of Mörön, a group of particularly fine deer stones stands in a valley."
    ],
    "explanation": "Archaeologists think the stones represent people, perhaps important warriors or ancestors, and were part of ritual sites, often surrounded by small stone mounds containing horse remains. What the flying deer meant is debated; one idea is that they carried spirits to the sky.",
    "wiki": "Deer stone"
  },
  {
    "slug": "nemrut-dag",
    "category": "places",
    "title": "The Great Heads of Nemrut Dağ",
    "region": "Mount Nemrut, Adıyaman, Türkiye",
    "lat": 37.98,
    "lon": 38.74,
    "dateLabel": "Built in the 1st century BCE",
    "status": "open",
    "statusLabel": "Tomb not found",
    "witnesses": "Archaeologists and visitors",
    "hook": "On a mountaintop in Türkiye, giant stone heads of gods and a king gaze out at the sunrise. The king's tomb has never been found.",
    "summary": [
      "On the summit of Mount Nemrut, about 2,100 metres high, King Antiochus I of Commagene built a monument to himself and the gods in the 1st century BCE. Giant stone statues of the king, lions, eagles and gods stood on terraces, their heads, now fallen, up to 2 metres high, facing sunrise and sunset.",
      "Between the terraces rises a huge artificial mound of broken rock, 50 metres high, which is thought to cover the king's tomb."
    ],
    "explanation": "Archaeologists have searched for the tomb inside the mound for decades, using tunnels and scans, without finding it. The loose rock makes digging dangerous. The site is a UNESCO World Heritage Site, famous for its sunrise views.",
    "wiki": "Mount Nemrut"
  },
  {
    "slug": "gedi-ruins",
    "category": "places",
    "title": "The Ruins of Gedi",
    "region": "Gedi, near Malindi, Kenya",
    "lat": -3.31,
    "lon": 40.02,
    "dateLabel": "Built from the 12th century; abandoned in the 1600s",
    "status": "open",
    "statusLabel": "Partly explained",
    "witnesses": "Archaeologists and visitors",
    "hook": "Deep in a coastal forest in Kenya lie the ruins of a stone town, with a palace, mosques and houses, abandoned without a clear reason.",
    "summary": [
      "Hidden in the forest near Malindi on the Kenyan coast are the ruins of Gedi, a Swahili town of coral-stone houses, a great mosque, a palace, wells and streets. It was home to several thousand people, and finds of Chinese porcelain and Venetian beads show it traded across the Indian Ocean.",
      "Yet Gedi is not mentioned in any surviving Portuguese or Arab records of the coast, and it was abandoned in the 17th century and swallowed by forest."
    ],
    "explanation": "Historians suggest several reasons for its abandonment: a falling water table that dried the wells, raids by nomadic groups, and the decline of trade after the Portuguese arrived. It is now a national monument, and local tradition treats the forest as a place to approach with respect.",
    "wiki": "Gedi Ruins"
  },
  {
    "slug": "axum-obelisks",
    "category": "places",
    "title": "The Giant Obelisks of Axum",
    "region": "Axum, Tigray, Ethiopia",
    "lat": 14.13,
    "lon": 38.72,
    "dateLabel": "Raised about 1,700 years ago",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Archaeologists and residents",
    "hook": "In the ancient city of Axum stand towering carved stone obelisks, one of them the largest single stone people ever tried to raise.",
    "summary": [
      "Axum, in northern Ethiopia, was the capital of a powerful kingdom that traded with Rome and India around 1,700 years ago. In its stelae park stand tall granite obelisks carved to look like multi-storey buildings, with false doors and windows.",
      "The largest, the Great Stele, was about 33 metres long and weighed some 520 tonnes, but it lies broken on the ground; it probably fell while it was being raised or soon after. Another, taken to Rome in 1937, was returned to Ethiopia in 2005 and re-erected."
    ],
    "explanation": "The obelisks were cut from quarries several kilometres away and probably moved with ramps, rollers and great numbers of people. They are thought to have marked royal tombs. The site is a UNESCO World Heritage Site.",
    "wiki": "Obelisk of Axum"
  },
  {
    "slug": "kaimanawa-wall",
    "category": "places",
    "title": "The Kaimanawa Wall",
    "region": "Kaimanawa Forest Park, near Taupō, New Zealand",
    "lat": -39.1,
    "lon": 175.88,
    "dateLabel": "Claimed in 1996",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "A visitor, writers and geologists",
    "hook": "In a New Zealand forest, a wall of huge, neatly squared blocks was claimed to be built by a lost people before the Māori. Geologists disagreed.",
    "summary": [
      "In 1996, writers publicised a 'wall' in Kaimanawa Forest Park south of Lake Taupō: a line of large, rectangular stone blocks, neatly stacked, partly covered in forest. Some claimed it was built by an unknown people who lived in New Zealand before the Māori arrived.",
      "The claim drew attention because it challenged the accepted history of the country's settlement."
    ],
    "explanation": "Geologists from New Zealand's Department of Conservation examined the site and concluded it is a natural outcrop of ignimbrite, a rock formed from volcanic ash, which cracks along straight lines into block-like shapes. There is no archaeological evidence of human work at the site.",
    "wiki": null
  },
  {
    "slug": "haamonga-a-maui",
    "category": "places",
    "title": "Ha'amonga 'a Maui",
    "region": "Niutōua, Tongatapu, Tonga",
    "lat": -21.13,
    "lon": -175.05,
    "dateLabel": "Built around 1200",
    "status": "explained",
    "statusLabel": "Mostly explained",
    "witnesses": "Tongans and visitors",
    "hook": "In Tonga stands a giant stone gateway, like a piece of Stonehenge, which legend says the demigod Maui carried there.",
    "summary": [
      "Ha'amonga 'a Maui, 'the burden of Maui', is a trilithon on the island of Tongatapu: two upright coral limestone stones about 5 metres tall, topped by a third stone, each weighing many tonnes. Legend says the demigod Maui carried the stones there from another island on a pole across his shoulders.",
      "Tongan tradition credits its construction to King Tu'itātui, around the 13th century, as a gateway to his royal compound."
    ],
    "explanation": "In 1967, King Tāufa'āhau Tupou IV pointed out that markings on the lintel line up with the sunrise on the solstices, suggesting it may also have marked the seasons. How the stones were quarried and raised is not recorded, but levers, ramps and large work crews could have done it.",
    "wiki": "Haʻamonga ʻa Maui"
  },
  {
    "slug": "giants-causeway",
    "category": "places",
    "title": "The Giant's Causeway",
    "region": "County Antrim, Northern Ireland",
    "lat": 55.24,
    "lon": -6.51,
    "dateLabel": "Formed about 60 million years ago",
    "status": "explained",
    "statusLabel": null,
    "witnesses": "Visitors and geologists",
    "hook": "On the coast of Northern Ireland, 40,000 stone columns step down into the sea. Legend says a giant built them to reach Scotland.",
    "summary": [
      "On the north coast of County Antrim, around 40,000 interlocking basalt columns, most of them six-sided, form stepping stones that lead from the cliffs down into the sea.",
      "Irish legend says the giant Fionn mac Cumhaill, Finn McCool, built the causeway to cross to Scotland and fight a rival giant, Benandonner. Similar columns appear across the sea on the Scottish island of Staffa, home of Fingal's Cave."
    ],
    "explanation": "Geologists explain that about 60 million years ago, lava flowed across the area and cooled slowly. As it cooled, it shrank and cracked into regular columns, in the same way drying mud cracks into polygons. It is a UNESCO World Heritage Site.",
    "wiki": "Giant's Causeway"
  },
  {
    "slug": "malta-cart-ruts",
    "category": "places",
    "title": "The Cart Ruts of Malta",
    "region": "Misraħ Għar il-Kbir, Malta",
    "lat": 35.88,
    "lon": 14.4,
    "dateLabel": "Age unknown",
    "status": "open",
    "statusLabel": null,
    "witnesses": "Archaeologists and visitors",
    "hook": "Across the bare limestone of Malta run pairs of deep grooves like railway tracks. Nobody knows who made them, or how.",
    "summary": [
      "On the rocky plateaus of Malta and Gozo run hundreds of pairs of parallel grooves cut into the limestone, some up to 60 cm deep. At Misraħ Għar il-Kbir, so many cross and branch that the site is nicknamed 'Clapham Junction', after the busy London railway station. Some ruts even run off cliff edges and into the sea.",
      "They have been studied for more than a century, and their age is uncertain: estimates range from the Bronze Age to Roman times."
    ],
    "explanation": "The most common explanation is that they were worn by carts or sledges carrying heavy loads, such as stone, over many years, deepening as the soft rock eroded. Why they run where they do, including into the sea, may be explained by changes in sea level and erosion since they were made.",
    "wiki": "Clapham Junction (archaeological site)"
  },
  {
    "slug": "cuba-underwater-city",
    "category": "places",
    "title": "The 'Underwater City' off Cuba",
    "region": "Off the Guanahacabibes Peninsula, Cuba",
    "lat": 21.8,
    "lon": -84.75,
    "dateLabel": "Reported in 2001",
    "status": "disputed",
    "statusLabel": "Probably natural",
    "witnesses": "An ocean survey team",
    "hook": "In 2001, a survey ship scanning the seabed off western Cuba found shapes that looked like pyramids and streets, half a kilometre down.",
    "summary": [
      "In 2001, a Canadian company led by Paulina Zelitsky and Paul Weinzweig, surveying the seabed off Cuba's western tip, reported sonar images showing large, regular shapes about 600 to 750 metres deep: what looked like rectangles, circles and pyramid-like forms.",
      "The find was widely reported as a possible sunken city, and linked by some to legends of Atlantis."
    ],
    "explanation": "Geologists pointed out that the land could not have sunk so far in the time humans have existed, and that natural rock formations can look regular on sonar. Follow-up studies were limited, and no evidence of human work has been confirmed. Most scientists consider the shapes natural.",
    "wiki": null
  },
  {
    "slug": "peles-curse",
    "category": "places",
    "title": "Pele's Curse",
    "region": "Hawaiʻi Volcanoes National Park, Hawaiʻi, USA",
    "lat": 19.42,
    "lon": -155.29,
    "dateLabel": "Told since the 20th century",
    "status": "open",
    "statusLabel": "Legend",
    "witnesses": "Park rangers and visitors",
    "hook": "Visitors who take a piece of lava home from Hawaiʻi's volcanoes are said to suffer bad luck, and every year, hundreds of rocks are posted back.",
    "summary": [
      "In Hawaiian tradition, Pele is the goddess of fire and volcanoes, who lives in the crater of Kīlauea. A modern legend says that anyone who takes rocks, sand or lava from her island will be cursed with bad luck until they return them.",
      "Every year, Hawaiʻi Volcanoes National Park and local hotels receive packages of rocks posted back by visitors from around the world, often with letters apologising and describing the misfortunes they blame on the stones."
    ],
    "explanation": "Many historians think the 'curse' was invented or spread in the 20th century, possibly by park rangers or tour guides trying to stop visitors from taking rocks. Hawaiian cultural practitioners note that taking things from sacred places is disrespectful, curse or not, and removing rocks from the national park is illegal.",
    "wiki": "Pele (deity)"
  }
];
