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
  }
];
