// Use below arrays to make questions for yourself and practice the methods like
// map
// forEach
// filter
// splics
// reduce
// etc ..

// Write atleast 10 different question for every method.

var pizzas = ["Deep Dish", "Peperoni", "Hawaiian", "Meatzza", "Spicy Mama", "Margherita"];

var cuts = ["Chuck", "Brisket", "Shank", "Rib", "Plate", "Flank", "Short Loin", "Tenderloin", "Sirloin", "Round"];

var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 345, 33, 23, 12, 435, 642, 66, 23];

const got = {
	houses: [
		{
			name: "Starks",
			wikiLink: "http://gameofthrones.wikia.com/wiki/House_Stark",
			people: [
				{
					name: "Eddard Stark",
					description:
						"Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-eddard-stark.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Eddard_Stark"
				},
				{
					name: "Benjen Stark",
					description: "Brother of Eddard Stark - First ranger of the Night's Watch",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-benjen-stark.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Benjen_Stark"
				},
				{
					name: "Robb Stark",
					description: "Son of Eddard and Catelyn Stark - Direwolf: Grey Wind",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-robb-stark.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Robb_Stark"
				},
				{
					name: "Sansa Stark",
					description: "Daughter of Eddard and Catelyn Stark - Direwolf: Lady",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-sansa-stark.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Sansa_Stark"
				},
				{
					name: "Arya Stark",
					description: "Daughter of Eddard and Catelyn Stark - Direwolf: Nymeria",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-arya-stark.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Arya_Stark"
				},
				{
					name: "Brandon Stark",
					description: "Son of Eddard and Catelyn Stark - Direwolf: Summer",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-brandon-stark.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Brandon_Stark"
				},
				{
					name: "Rickon Stark",
					description: "Son of Eddard and Catelyn Stark - Direwolf: Shaggydog",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-rickon-stark.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Rickon_Stark"
				},
				{
					name: "Jon Snow",
					description: "Bastard son of Eddard Stark - Steweard in the Night's Watch - Direwolf: Ghost",
					image: "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-jon-snow.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Jon_Snow"
				}
			]
		},
		{
			name: "Lannisters",
			wikiLink: "http://gameofthrones.wikia.com/wiki/House_Lannister",
			people: [
				{
					name: "Tywin Lannister",
					description: "Lord of Casterly Rock - Warden of the West",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-tywin-lannister.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Tywin_Lannister"
				},
				{
					name: "Tyrion Lannister",
					description: "Son of Tywin Lannister - The Imp",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-tyrion-lannister.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Tyrion_Lannister"
				},
				{
					name: "Jaime Lannister",
					description: "The Kingslayer - Knight of the Kingsgaurd - Son of Tywin Lannister",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-jaime-lannister.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Jaime_Lannister"
				},
				{
					name: "Cersei Baratheon",
					description: "Married to King Robert Baratheon - Daughter of Tywin Lannister",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-cersei-lannister.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Cersei_Lannister"
				}
			]
		},
		{
			name: "Baratheons",
			wikiLink: "http://gameofthrones.wikia.com/wiki/House_Baratheon",
			people: [
				{
					name: "Robert Baratheon",
					description: "The first of his name - Lord of the Seven Kingdoms",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-robert-baratheon.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Robert_Baratheon"
				},
				{
					name: "Stannis Baratheon",
					description: "Lord of Dragonstone - Master of Ships - Brother of Robert Baratheon",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-stannis-baratheon.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Stannis_Baratheon"
				},
				{
					name: "Renly Baratheon",
					description: "Lord of Storm's End - Master of Laws - Brother of Robert Baratheon",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-renly-baratheon.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Renly_Baratheon"
				},
				{
					name: "Joffrey Baratheon",
					description: "Heir to the Iron Throne - Son of Robert and Cersei Baratheon",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-joffrey-baratheon.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Joffrey_Baratheon"
				},
				{
					name: "Tommen Baratheon",
					description: "Son of Robert and Cersei Baratheon",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-tommen-baratheon.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Tommen_Baratheon"
				},
				{
					name: "Myrcella Baratheon",
					description: "Daughter of Robert and Cersei Baratheon",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-myrcella-baratheon.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Myrcella_Baratheon"
				}
			]
		},
		{
			name: "Targaryens",
			wikiLink: "http://gameofthrones.wikia.com/wiki/House_Targaryen",
			people: [
				{
					name: "Daenerys Targaryen",
					description:
						'Stormborn - Khaleesi of the Dothraki - The Unburnt - Mother of Dragons - Daughter of Aerys II Targaryen "The Mad King"',
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-daenerys-targaryen.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Daenerys_Targaryen"
				},
				{
					name: "Viserys Targaryen",
					description: 'The Beggar King - Son of Aerys II Targaryen "The Mad King"',
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-viserys-targaryen.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Viserys_Targaryen"
				}
			]
		},
		{
			name: "Greyjoys",
			wikiLink: "http://gameofthrones.wikia.com/wiki/House_Greyjoy",
			people: [
				{
					name: "Balon Greyjoy",
					description: "Lord Reaper of Pyke - Head of House Greyjoy",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-balon-greyjoy.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Balon_Greyjoy"
				},
				{
					name: "Theon Greyjoy",
					description: "Ward of the Starks - Heir to the Iron Islands - Son of Balon Greyjoy",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-theon-greyjoy.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Theon_Greyjoy"
				},
				{
					name: "Yara Greyjoy",
					description: "Ironborn - Son of Balon Greyjoy",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-yara-greyjoy.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Yara_Greyjoy"
				}
			]
		},
		{
			name: "Tyrells",
			wikiLink: "http://gameofthrones.wikia.com/wiki/House_Tyrell",
			people: [
				{
					name: "Margaery Baratheon",
					description: "Wife of Renly Baratheon - Sister of Loras Tyrell - Granddaughter of Olenna Tyrell",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-margaery-tyrell.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Margaery_Tyrell"
				},
				{
					name: "Loras Tyrell",
					description: "Heir to Highgarden - Commander of the Kings Gaurd - Brother of Margaery Baratheon",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-loras-tyrell.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Loras_Tyrell"
				}
			]
		},
		{
			name: "Tullys",
			wikiLink: "http://gameofthrones.wikia.com/wiki/House_Tully",
			people: [
				{
					name: "Catelyn Stark",
					description: "Married to Eddard Stark - Daughter of Hoster Tully",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-catelyn-tully.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Catelyn_Tully"
				},
				{
					name: "Lysa Arryn",
					description: "Widow of Jon Arryn - Daughter of Hoster Tully",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-lysa-tully.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Lysa_Tully"
				},
				{
					name: "Edmure Tully",
					description: "Heir to Riverrun - Son of Hoster Tully",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-edmure-tully.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Edmure_Tully"
				},
				{
					name: "Brynden Tully",
					description: "Lord of Riverrun - Head of House Tully - Brother of Hoster Tully",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-brynden-tully.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Brynden_Tully"
				}
			]
		},
		{
			name: "Redwyne",
			wikiLink: "http://gameofthrones.wikia.com/wiki/House_Redwyne",
			people: [
				{
					name: "Olenna Tyrell",
					description: "Matriarch of House Tyrell - Queen of Thorns",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-olenna-tyrell.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Olenna_Tyrell"
				}
			]
		},
		{
			name: "Freys",
			wikiLink: "http://gameofthrones.wikia.com/wiki/House_Freys",
			people: [
				{
					name: "Walder Frey",
					description: "Lord of the Crossing - Head of House Frey",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-walder-frey.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Walder_Frey"
				}
			]
		},
		{
			name: "Arryns",
			wikiLink: "http://gameofthrones.wikia.com/wiki/House_Arryns",
			people: [
				{
					name: "Jon Arryn",
					description: "Lord of the Eyrie - Head of House Arryn - Warden of the East - Defender of the Vale",
					image: "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-jon-arryn.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Jon_Arryn"
				}
			]
		},
		{
			name: "Dothrakis",
			wikiLink: "http://gameofthrones.wikia.com/wiki/House_Dothrakis",
			people: [
				{
					name: "Khal Drogo",
					description: "Leader of the Dothraki people - Dothraki Warlord - Married to Daenerys Targaryen",
					image:
						"http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-khal-drogo.jpg",
					wikiLink: "http://gameofthrones.wikia.com/wiki/Drogo"
				}
			]
		}
	]
};

function getPeopleNamesByHouse(array, person) {
	array.push(person.name);
	return array;
}

let houseList = got.houses;
let personList = [];
houseList.forEach(house => {
	personList = personList.concat(house.people.reduce(getPeopleNamesByHouse, []));
});

console.log(personList.filter(person => person.startsWith(`S`)));

Array.prototype.myReduce = function(callback, initial) {
	let accumulator = initial === undefined ? undefined : initial;
	for (let item of this) {
		if (accumulator === undefined) {
			accumulator = item;
		} else {
			accumulator = callback(accumulator, item);
		}
	}
	return accumulator;
};

let arr = [1, 2, 3, 4];
const sumReducer = (accumulator, currentValue) => accumulator + currentValue;
const sum = arr.myReduce(sumReducer);
console.log(sum);

function truncate_string(string, count) {
	return string.slice(0, count);
}
console.log(truncate_string("Robin Singh", 4));

function protect_email(string) {
	let stringSplit = string.split("@");
	if (stringSplit.length < 2) {
		return string;
	}
	return `${stringSplit[0].slice(0, stringSplit[0].length / 2)}...@${stringSplit[1]}`;
}
console.log(protect_email("r@example.com"));

function string_parameterize(string) {
	let stringSplit = string
		.toLowerCase()
		.replace(".", "")
		.split(" ");
	if (stringSplit.length < 2) {
		return string;
	}
	return stringSplit.reduce(function(final, current) {
		final += current;
		if (current !== stringSplit[stringSplit.length - 1]) {
			final += "-";
		}
		return final;
	}, "");
}
console.log(string_parameterize("Robin Singh from USA."));

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1, string.length);
}
console.log(capitalize("j"));

function capitalize_Words(string) {
	let words = string.split(" ");
	return words.reduce(function(final, current) {
		final += capitalize(current);
		if (current !== words[words.length - 1]) {
			final += " ";
		}
		return final;
	}, "");
}
console.log(capitalize_Words("js string exercises"));

function swapcase(string) {
	return string
		.split("")
		.map(char => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
		.join("");
}
console.log(swapcase("AaBbc"));

function camelize(string) {
	let words = string.split(" ");
	if (words.length < 2) {
		return string;
	}
	return words.reduce(function(final, current) {
		if (current !== words[0]) {
			final += current.charAt(0).toUpperCase() + current.slice(1, current.length);
		} else {
			final += current;
		}
		return final;
	}, "");
}
console.log(camelize("avaScript Exercises"));

function uncamelize(string, delimiter) {
	let words = string.split("");
	if (words.length < 2) {
		return string;
	}
	return words
		.reduce(function(final, current) {
			if (current.toUpperCase() === current) {
				final += delimiter;
			}
			final += current;
			return final;
		}, "")
		.toLowerCase();
}
console.log(uncamelize("helloWorld", "_"));

function repeat(string, count = 1) {
	return string.repeat(count);
}
console.log(repeat("Ha!"));

function insert(string, item, count = 1) {
	return [string.slice(0, count), item, string.slice(count)].join("");
}
console.log(insert("We are doing some exercises.", "JavaScript ", 18));

function humanize_format(num) {
	let lastDigit = Number(num.toString().split("").pop());
	let prefix;
	switch (lastDigit) {
		case 1:
			prefix = "st";
			break;
		case 2:
			prefix = "nd";
			break;
		case 3:
			prefix = "rd";
			break;
		default:
			prefix = "th";
			break;
	}
	return num + prefix;
}
console.log(humanize_format(301));
console.log(humanize_format(402));

function text_truncate(string, count, ellipsis = "...") {
	if (string.length > count) {
		return string.slice(0, count) + ellipsis;
	} else {
		return string;
	}
}
console.log(text_truncate("We are doing JS string exercises.", 15, "!!"));

function string_chop(string, length) {
	return string.match(new RegExp(".{1," + length + "}", "g"));
}
console.log(string_chop("w3resource", 2));

function count(string, substring) {
	return (string.match(new RegExp(substring, "gi")) || []).length;
}
console.log(count("The quick brown fox jumps over the lazy dog", "the"));

function truncateWords(string) {
	return string
		.split(" ")
		.slice(0, 4)
		.join(" ");
}
console.log(truncateWords("Aaj mein"));

function alphabetize(string) {
	return string
		.replace(" ", "")
		.split("")
		.sort()
		.join("");
}
console.log(alphabetize("United States"));

function stringEqualsIgnoreCase(string1, string2) {
	return string1.toLowerCase() === string2.toLowerCase();
}
console.log(stringEqualsIgnoreCase("abcd", "AbcD"));
console.log(stringEqualsIgnoreCase("ABCD", "Abce"));
