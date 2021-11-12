import React from "react";

export const data = {
  count: 639705,
  next: "https://api.rawg.io/api/games?key=4f97804ee5154a98b35ebe36aba1ca3f&page=5&page_size=40",
  previous:
    "https://api.rawg.io/api/games?key=4f97804ee5154a98b35ebe36aba1ca3f&page=3&page_size=40",
  results: [
    {
      id: 17576,
      slug: "batman-arkham-city-goty",
      name: "Batman: Arkham City - Game of the Year Edition",
      released: "2012-09-07",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg",
      rating: 4.4,
      rating_top: 5,
      ratings: [
        { id: 5, title: "exceptional", count: 593, percent: 52.39 },
        { id: 4, title: "recommended", count: 453, percent: 40.02 },
        { id: 3, title: "meh", count: 59, percent: 5.21 },
        { id: 1, title: "skip", count: 27, percent: 2.39 },
      ],
      ratings_count: 1131,
      reviews_text_count: 0,
      added: 6058,
      added_by_status: {
        yet: 287,
        owned: 4393,
        beaten: 1125,
        toplay: 81,
        dropped: 132,
        playing: 40,
      },
      metacritic: 91,
      playtime: 9,
      suggestions_count: 661,
      updated: "2020-08-30T04:09:41",
      user_game: null,
      reviews_count: 1132,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2732,
            image_background:
              "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
          },
          released_at: "2012-09-07",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 81573,
            image_background:
              "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
          },
          released_at: "2012-09-07",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2012-09-07",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2012-09-07",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2012-09-07",
          requirements_en: {
            minimum:
              '<ul class="bb_ul"><li><strong>OS:</strong> Windows XP, Vista, 7<br>\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Processor:</strong> Intel Core 2 Duo 2.4 GHz or AMD Athlon X2 4800+<br>\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 2GB RAM<br>\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 17 GB free hard drive space\t<br>\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> ATI 3850HD 512 MB or NVIDIA GeForce 8800 GT 512MB<br>\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>DirectX®:</strong> 9.0c<br>\t\t\t\t\t\t\t\t\t\t\t</li></ul>',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
        { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 3,
          name: "Adventure",
          slug: "adventure",
          games_count: 98194,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
      ],
      stores: [
        {
          id: 363769,
          store: {
            id: 11,
            name: "Epic Games",
            slug: "epic-games",
            domain: "epicgames.com",
            games_count: 667,
            image_background:
              "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
          },
        },
        {
          id: 19546,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 287616,
          store: {
            id: 4,
            name: "App Store",
            slug: "apple-appstore",
            domain: "apps.apple.com",
            games_count: 70993,
            image_background:
              "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 23660,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7585,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 10813,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 12001,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 36,
          name: "Open World",
          slug: "open-world",
          language: "eng",
          games_count: 4350,
          image_background:
            "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
        },
        {
          id: 149,
          name: "Third Person",
          slug: "third-person",
          language: "eng",
          games_count: 5478,
          image_background:
            "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        },
        {
          id: 40845,
          name: "Partial Controller Support",
          slug: "partial-controller-support",
          language: "eng",
          games_count: 7768,
          image_background:
            "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
        },
        {
          id: 37,
          name: "Sandbox",
          slug: "sandbox",
          language: "eng",
          games_count: 4097,
          image_background:
            "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
        },
        {
          id: 15,
          name: "Stealth",
          slug: "stealth",
          language: "eng",
          games_count: 4291,
          image_background:
            "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
        },
        {
          id: 115,
          name: "Controller",
          slug: "controller",
          language: "eng",
          games_count: 6221,
          image_background:
            "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg",
        },
        {
          id: 69,
          name: "Action-Adventure",
          slug: "action-adventure",
          language: "eng",
          games_count: 9160,
          image_background:
            "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg",
        },
        {
          id: 110,
          name: "Cinematic",
          slug: "cinematic",
          language: "eng",
          games_count: 655,
          image_background:
            "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg",
        },
        {
          id: 203,
          name: "Beat 'em up",
          slug: "beat-em-up",
          language: "eng",
          games_count: 1949,
          image_background:
            "https://media.rawg.io/media/games/98d/98deaf99f06aa3d7e54e1fa69e4a9060.jpg",
        },
        {
          id: 259,
          name: "Metroidvania",
          slug: "metroidvania",
          language: "eng",
          games_count: 2573,
          image_background:
            "https://media.rawg.io/media/games/578/57885b9590c9a9f80ceea34d147a34c4.jpg",
        },
        {
          id: 133,
          name: "3D Vision",
          slug: "3d-vision",
          language: "eng",
          games_count: 303,
          image_background:
            "https://media.rawg.io/media/games/1ed/1edaaa9e24e0072772244633d01642f4.jpg",
        },
        {
          id: 142,
          name: "Detective",
          slug: "detective",
          language: "eng",
          games_count: 1727,
          image_background:
            "https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg",
        },
        {
          id: 268,
          name: "Comic Book",
          slug: "comic-book",
          language: "eng",
          games_count: 385,
          image_background:
            "https://media.rawg.io/media/screenshots/0cd/0cddbca1ecf96f944a218160c7cdead0.jpg",
        },
        {
          id: 234,
          name: "Superhero",
          slug: "superhero",
          language: "eng",
          games_count: 955,
          image_background:
            "https://media.rawg.io/media/screenshots/a8c/a8cd58ee985ab6d509370bddada91dbd.jpeg",
        },
        {
          id: 328,
          name: "Batman",
          slug: "batman",
          language: "eng",
          games_count: 36,
          image_background:
            "https://media.rawg.io/media/games/ce4/ce4b8dac56df7e0b20052033bf207372.jpg",
        },
      ],
      esrb_rating: { id: 3, name: "Teen", slug: "teen" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg",
        },
        {
          id: 160579,
          image:
            "https://media.rawg.io/media/screenshots/7f0/7f06dde491c2e2e7a89d9375f016e0b1.jpg",
        },
        {
          id: 160580,
          image:
            "https://media.rawg.io/media/screenshots/00f/00f1b94e6bee4ca226902ec724ef6cb6.jpg",
        },
        {
          id: 160581,
          image:
            "https://media.rawg.io/media/screenshots/794/79445f5a4e6f145be0a9e8bfb8fe5c03.jpg",
        },
        {
          id: 160582,
          image:
            "https://media.rawg.io/media/screenshots/700/700c6a91d1ea98e7ca3f53e44d6000f0.jpg",
        },
        {
          id: 160583,
          image:
            "https://media.rawg.io/media/screenshots/590/5908186c284c2d02700064a968546d64.jpg",
        },
        {
          id: 160584,
          image:
            "https://media.rawg.io/media/screenshots/712/712aef3ca77ad875dbaf058d0e5949b4.jpg",
        },
      ],
    },
    {
      id: 28568,
      slug: "assassins-creed-ii",
      name: "Assassin's Creed II",
      released: "2009-11-17",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/1be/1bed7fae69d1004c09dfe1101d5a3a94.jpg",
      rating: 4.4,
      rating_top: 5,
      ratings: [
        { id: 5, title: "exceptional", count: 1097, percent: 53.15 },
        { id: 4, title: "recommended", count: 786, percent: 38.08 },
        { id: 3, title: "meh", count: 132, percent: 6.4 },
        { id: 1, title: "skip", count: 49, percent: 2.37 },
      ],
      ratings_count: 2054,
      reviews_text_count: 6,
      added: 6052,
      added_by_status: {
        yet: 148,
        owned: 3097,
        beaten: 2416,
        toplay: 111,
        dropped: 248,
        playing: 32,
      },
      metacritic: 89,
      playtime: 14,
      suggestions_count: 623,
      updated: "2020-08-03T02:17:37",
      user_game: null,
      reviews_count: 2064,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2732,
            image_background:
              "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
          },
          released_at: "2009-11-17",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3625,
            image_background:
              "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
          },
          released_at: "2009-11-17",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2009-11-17",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2009-11-17",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 81573,
            image_background:
              "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
          },
          released_at: "2009-11-17",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2009-11-17",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
        { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
      ],
      stores: [
        {
          id: 390169,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 465886,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
        {
          id: 33859,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1911,
            image_background:
              "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 278,
          name: "Assassin",
          slug: "assassin",
          language: "eng",
          games_count: 599,
          image_background:
            "https://media.rawg.io/media/games/683/6833fbb183fd72a61c032501e3bc6d36.jpg",
        },
        {
          id: 1309,
          name: "hero",
          slug: "hero",
          language: "eng",
          games_count: 4256,
          image_background:
            "https://media.rawg.io/media/screenshots/50c/50c936c3e640dc0265fb69f9909ba592.jpg",
        },
        {
          id: 835,
          name: "Swords",
          slug: "swords",
          language: "eng",
          games_count: 1141,
          image_background:
            "https://media.rawg.io/media/screenshots/a53/a5356228ecd29ffee175dbd8e056414d.jpg",
        },
      ],
      esrb_rating: { id: 4, name: "Mature", slug: "mature" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/1be/1bed7fae69d1004c09dfe1101d5a3a94.jpg",
        },
        {
          id: 526178,
          image:
            "https://media.rawg.io/media/screenshots/e73/e731183e3f545daa3283ca29f4f254cc.jpg",
        },
        {
          id: 526179,
          image:
            "https://media.rawg.io/media/screenshots/fe9/fe9db29056872c1699dde43155c16329.jpg",
        },
        {
          id: 526180,
          image:
            "https://media.rawg.io/media/screenshots/65b/65bced397e2946d6880238c6f9ffddb4_ai30aa1.jpg",
        },
        {
          id: 526181,
          image:
            "https://media.rawg.io/media/screenshots/96e/96e16a1458f1606b2df4d1a623f62b61.jpg",
        },
        {
          id: 526182,
          image:
            "https://media.rawg.io/media/screenshots/447/4470e0dace64fe81b0e1a8bafc0f4686.jpg",
        },
        {
          id: 526183,
          image:
            "https://media.rawg.io/media/screenshots/02b/02bfb9bd79a284db6c9acf5fd30fb8d3.jpg",
        },
      ],
    },
    {
      id: 10065,
      slug: "cities-skylines",
      name: "Cities: Skylines",
      released: "2015-03-10",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg",
      rating: 4.14,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 629, percent: 55.71 },
        { id: 5, title: "exceptional", count: 364, percent: 32.24 },
        { id: 3, title: "meh", count: 103, percent: 9.12 },
        { id: 1, title: "skip", count: 33, percent: 2.92 },
      ],
      ratings_count: 1122,
      reviews_text_count: 4,
      added: 6027,
      added_by_status: {
        yet: 286,
        owned: 4540,
        beaten: 360,
        toplay: 97,
        dropped: 521,
        playing: 223,
      },
      metacritic: 85,
      playtime: 8,
      suggestions_count: 438,
      updated: "2021-04-01T14:40:14",
      user_game: null,
      reviews_count: 1129,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2015-03-10",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 7,
            name: "Nintendo Switch",
            slug: "nintendo-switch",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 4585,
            image_background:
              "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg",
          },
          released_at: "2015-03-10",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 58229,
            image_background:
              "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
          },
          released_at: "2015-03-10",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Ubuntu 12.04 (64-bit)<br></li><li><strong>Processor:</strong> Intel Core 2 Duo, 3.0GHz or AMD Athlon 64 X2 6400+, 3.2GHz<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> nVIDIA GeForce GTX 260, 512 MB or ATI Radeon HD 5670, 512 MB  (Does not support Intel Integrated Graphics Cards)<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 4 GB available space</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Ubuntu 14.10 (64-bit)<br></li><li><strong>Processor:</strong> Intel Core i5-3470, 3.20GHz or AMD FX-6300, 3.5Ghz<br></li><li><strong>Memory:</strong> 6 GB RAM<br></li><li><strong>Graphics:</strong> nVIDIA GeForce GTX 660, 2 GB or AMD Radeon HD 7870, 2 GB  (Does not support Intel Integrated Graphics Cards)<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 4 GB available space</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 81573,
            image_background:
              "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
          },
          released_at: "2015-03-10",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> OS X 10.9 (64-bit)<br></li><li><strong>Processor:</strong> Intel Core 2 Duo, 3.0GHz<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> nVIDIA GeForce GTX 260, 512 MB or ATI Radeon HD 5670, 512 MB  (Does not support Intel Integrated Graphics Cards)<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 4 GB available space</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> OS X 10.10 (64-bit)<br></li><li><strong>Processor:</strong> Intel Core i5-3470, 3.20GHz<br></li><li><strong>Memory:</strong> 6 GB RAM<br></li><li><strong>Graphics:</strong> nVIDIA GeForce GTX 660, 2 GB or AMD Radeon HD 7870, 2 GB  (Does not support Intel Integrated Graphics Cards)<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 4 GB available space</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2015-03-10",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Microsoft Windows XP/Vista/7/8/8.1 (64-bit)<br></li><li><strong>Processor:</strong> Intel Core 2 Duo, 3.0GHz or AMD Athlon 64 X2 6400+, 3.2GHz<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> nVIDIA GeForce GTX 260, 512 MB or ATI Radeon HD 5670, 512 MB (Does not support Intel Integrated Graphics Cards)<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 4 GB available space</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Microsoft Windows 7/8 (64-bit)<br></li><li><strong>Processor:</strong> Intel Core i5-3470, 3.20GHz or AMD FX-6300, 3.5Ghz<br></li><li><strong>Memory:</strong> 6 GB RAM<br></li><li><strong>Graphics:</strong> nVIDIA GeForce GTX 660, 2 GB or AMD Radeon HD 7870, 2 GB (Does not support Intel Integrated Graphics Cards)<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 4 GB available space</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2015-03-10",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
        { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
        { platform: { id: 6, name: "Linux", slug: "linux" } },
        { platform: { id: 7, name: "Nintendo", slug: "nintendo" } },
      ],
      genres: [
        {
          id: 10,
          name: "Strategy",
          slug: "strategy",
          games_count: 41030,
          image_background:
            "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg",
        },
        {
          id: 14,
          name: "Simulation",
          slug: "simulation",
          games_count: 51191,
          image_background:
            "https://media.rawg.io/media/games/270/270b412b66688081497b3d70c100b208.jpg",
        },
      ],
      stores: [
        {
          id: 573313,
          store: {
            id: 11,
            name: "Epic Games",
            slug: "epic-games",
            domain: "epicgames.com",
            games_count: 667,
            image_background:
              "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
          },
        },
        {
          id: 10981,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 283558,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 283559,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
        {
          id: 283560,
          store: {
            id: 6,
            name: "Nintendo Store",
            slug: "nintendo",
            domain: "nintendo.com",
            games_count: 8754,
            image_background:
              "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 23660,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7585,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 10813,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3171,
          image_background:
            "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        },
        {
          id: 40845,
          name: "Partial Controller Support",
          slug: "partial-controller-support",
          language: "eng",
          games_count: 7768,
          image_background:
            "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
        },
        {
          id: 4,
          name: "Funny",
          slug: "funny",
          language: "eng",
          games_count: 15753,
          image_background:
            "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg",
        },
        {
          id: 37,
          name: "Sandbox",
          slug: "sandbox",
          language: "eng",
          games_count: 4097,
          image_background:
            "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
        },
        {
          id: 40852,
          name: "Steam Workshop",
          slug: "steam-workshop",
          language: "eng",
          games_count: 1144,
          image_background:
            "https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg",
        },
        {
          id: 62,
          name: "Moddable",
          slug: "moddable",
          language: "eng",
          games_count: 611,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        {
          id: 40838,
          name: "Includes level editor",
          slug: "includes-level-editor",
          language: "eng",
          games_count: 1425,
          image_background:
            "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        },
        {
          id: 5,
          name: "Replay Value",
          slug: "replay-value",
          language: "eng",
          games_count: 977,
          image_background:
            "https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg",
        },
        {
          id: 107,
          name: "Family Friendly",
          slug: "family-friendly",
          language: "eng",
          games_count: 2749,
          image_background:
            "https://media.rawg.io/media/screenshots/375/375f84d018242d7519a230f623981217.jpg",
        },
        {
          id: 77,
          name: "Realistic",
          slug: "realistic",
          language: "eng",
          games_count: 1896,
          image_background:
            "https://media.rawg.io/media/games/b22/b227810b1a1bcbe9cf3dda22534c686e.jpg",
        },
        {
          id: 39,
          name: "Building",
          slug: "building",
          language: "eng",
          games_count: 3749,
          image_background:
            "https://media.rawg.io/media/games/369/36914d895c20e35f273286145c267764.jpg",
        },
        {
          id: 67,
          name: "Management",
          slug: "management",
          language: "eng",
          games_count: 4737,
          image_background:
            "https://media.rawg.io/media/games/476/4767c380895fd35a4f1b59016dc45967.jpg",
        },
        {
          id: 194,
          name: "Real-Time with Pause",
          slug: "real-time-with-pause",
          language: "eng",
          games_count: 163,
          image_background:
            "https://media.rawg.io/media/games/0fa/0fadc446fd1e9ae9e23a32793d9a5406.jpg",
        },
        {
          id: 195,
          name: "Economy",
          slug: "economy",
          language: "eng",
          games_count: 1323,
          image_background:
            "https://media.rawg.io/media/games/6bc/6bc79f5bc023b1e6938f6eaf9926f073.jpg",
        },
        {
          id: 147,
          name: "Resource Management",
          slug: "resource-management",
          language: "eng",
          games_count: 850,
          image_background:
            "https://media.rawg.io/media/games/a0c/a0cb0ac048c75b41d2620d2e6cb6f983.jpg",
        },
        {
          id: 213,
          name: "City Builder",
          slug: "city-builder",
          language: "eng",
          games_count: 1430,
          image_background:
            "https://media.rawg.io/media/games/6bc/6bc79f5bc023b1e6938f6eaf9926f073.jpg",
        },
        {
          id: 244,
          name: "Mod",
          slug: "mod",
          language: "eng",
          games_count: 1195,
          image_background:
            "https://media.rawg.io/media/screenshots/f34/f34c86335d0c51baa582aa93fa2d3f55.jpg",
        },
        {
          id: 151,
          name: "Modern",
          slug: "modern",
          language: "eng",
          games_count: 543,
          image_background:
            "https://media.rawg.io/media/games/bd4/bd4ab8c94e52fb6d2da185ecca8f6c45.jpg",
        },
      ],
      esrb_rating: { id: 1, name: "Everyone", slug: "everyone" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg",
        },
        {
          id: 76433,
          image:
            "https://media.rawg.io/media/screenshots/c0c/c0c098666e5ee532a8b1459fce1b3a01.jpg",
        },
        {
          id: 76434,
          image:
            "https://media.rawg.io/media/screenshots/702/7021e966d68ab8ccc76f859d30d925fe.jpg",
        },
        {
          id: 76435,
          image:
            "https://media.rawg.io/media/screenshots/15d/15dc7309784c53b75ae05ec95c347d9e.jpg",
        },
        {
          id: 76436,
          image:
            "https://media.rawg.io/media/screenshots/2e7/2e7924d7f3bf1a61498ece6e89edd26c.jpg",
        },
        {
          id: 76437,
          image:
            "https://media.rawg.io/media/screenshots/030/0308db992eac77d507240ae7d6874dd1.jpg",
        },
        {
          id: 76438,
          image:
            "https://media.rawg.io/media/screenshots/e03/e03e7124d4aea8276a6281fb760fb5ce.jpg",
        },
      ],
    },
    {
      id: 17572,
      slug: "batman-aa-goty",
      name: "Batman: Arkham Asylum Game of the Year Edition",
      released: "2010-03-26",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/fd8/fd882c8267a44621a0de6f9cec77ae90.jpg",
      rating: 4.39,
      rating_top: 5,
      ratings: [
        { id: 5, title: "exceptional", count: 695, percent: 54.85 },
        { id: 4, title: "recommended", count: 455, percent: 35.91 },
        { id: 3, title: "meh", count: 73, percent: 5.76 },
        { id: 1, title: "skip", count: 44, percent: 3.47 },
      ],
      ratings_count: 1266,
      reviews_text_count: 0,
      added: 5988,
      added_by_status: {
        yet: 233,
        owned: 4379,
        beaten: 1155,
        toplay: 73,
        dropped: 120,
        playing: 28,
      },
      metacritic: 91,
      playtime: 8,
      suggestions_count: 527,
      updated: "2019-09-19T16:46:05",
      user_game: null,
      reviews_count: 1267,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2732,
            image_background:
              "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
          },
          released_at: "2010-03-26",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3625,
            image_background:
              "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
          },
          released_at: "2010-03-26",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2010-03-26",
          requirements_en: {
            minimum:
              '<ul class="bb_ul"><li><strong>OS:</strong> Vista/XP<br>\t                    </li><li><strong>Processor:</strong> 3Ghz Intel or AMD or any Dual Core<br>\t                    </li><li><strong>Memory:</strong> 1GB Ram(XP)/2GB Ram<br>\t                    </li><li><strong>Graphics:</strong> PCI Express SM3 NVidia 6600/ ATI 1300<br>\t                    </li><li><strong>DirectX®:</strong> 9<br>\t                    </li><li><strong>Hard Drive:</strong> 8GB free space<br>\t                    </li><li><strong>Sound:</strong> Any onboard sound card<br>\t\t   </li></ul>',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 3,
          name: "Adventure",
          slug: "adventure",
          games_count: 98194,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
        {
          id: 83,
          name: "Platformer",
          slug: "platformer",
          games_count: 72876,
          image_background:
            "https://media.rawg.io/media/games/fc8/fc838d98c9b944e6a15176eabf40bee8.jpg",
        },
      ],
      stores: [
        {
          id: 363770,
          store: {
            id: 11,
            name: "Epic Games",
            slug: "epic-games",
            domain: "epicgames.com",
            games_count: 667,
            image_background:
              "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
          },
        },
        {
          id: 19541,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 285458,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1911,
            image_background:
              "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 23660,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7585,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 10813,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 12001,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 36,
          name: "Open World",
          slug: "open-world",
          language: "eng",
          games_count: 4350,
          image_background:
            "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
        },
        {
          id: 149,
          name: "Third Person",
          slug: "third-person",
          language: "eng",
          games_count: 5478,
          image_background:
            "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        },
        {
          id: 40845,
          name: "Partial Controller Support",
          slug: "partial-controller-support",
          language: "eng",
          games_count: 7768,
          image_background:
            "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
        },
        {
          id: 16,
          name: "Horror",
          slug: "horror",
          language: "eng",
          games_count: 26338,
          image_background:
            "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
        },
        {
          id: 15,
          name: "Stealth",
          slug: "stealth",
          language: "eng",
          games_count: 4291,
          image_background:
            "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
        },
        {
          id: 115,
          name: "Controller",
          slug: "controller",
          language: "eng",
          games_count: 6221,
          image_background:
            "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg",
        },
        {
          id: 69,
          name: "Action-Adventure",
          slug: "action-adventure",
          language: "eng",
          games_count: 9160,
          image_background:
            "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg",
        },
        {
          id: 203,
          name: "Beat 'em up",
          slug: "beat-em-up",
          language: "eng",
          games_count: 1949,
          image_background:
            "https://media.rawg.io/media/games/98d/98deaf99f06aa3d7e54e1fa69e4a9060.jpg",
        },
        {
          id: 259,
          name: "Metroidvania",
          slug: "metroidvania",
          language: "eng",
          games_count: 2573,
          image_background:
            "https://media.rawg.io/media/games/578/57885b9590c9a9f80ceea34d147a34c4.jpg",
        },
        {
          id: 133,
          name: "3D Vision",
          slug: "3d-vision",
          language: "eng",
          games_count: 303,
          image_background:
            "https://media.rawg.io/media/games/1ed/1edaaa9e24e0072772244633d01642f4.jpg",
        },
        {
          id: 142,
          name: "Detective",
          slug: "detective",
          language: "eng",
          games_count: 1727,
          image_background:
            "https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg",
        },
        {
          id: 268,
          name: "Comic Book",
          slug: "comic-book",
          language: "eng",
          games_count: 385,
          image_background:
            "https://media.rawg.io/media/screenshots/0cd/0cddbca1ecf96f944a218160c7cdead0.jpg",
        },
        {
          id: 234,
          name: "Superhero",
          slug: "superhero",
          language: "eng",
          games_count: 955,
          image_background:
            "https://media.rawg.io/media/screenshots/a8c/a8cd58ee985ab6d509370bddada91dbd.jpeg",
        },
        {
          id: 328,
          name: "Batman",
          slug: "batman",
          language: "eng",
          games_count: 36,
          image_background:
            "https://media.rawg.io/media/games/ce4/ce4b8dac56df7e0b20052033bf207372.jpg",
        },
      ],
      esrb_rating: null,
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/fd8/fd882c8267a44621a0de6f9cec77ae90.jpg",
        },
        {
          id: 160522,
          image:
            "https://media.rawg.io/media/screenshots/85b/85bb2ed59cc85c21bfdc068012dfc5c8.jpg",
        },
        {
          id: 160523,
          image:
            "https://media.rawg.io/media/screenshots/05e/05ebf1dc9066bf43e9c45b31399e741d.jpg",
        },
        {
          id: 160524,
          image:
            "https://media.rawg.io/media/screenshots/ee2/ee2b4270a1eb48b0aa2ac3deb882ce9b.jpg",
        },
        {
          id: 160525,
          image:
            "https://media.rawg.io/media/screenshots/a43/a43dde8dcb6445387f429da88d50b703.jpg",
        },
        {
          id: 160526,
          image:
            "https://media.rawg.io/media/screenshots/803/803acffeb45da0d884582991f380c6bf.jpg",
        },
        {
          id: 160527,
          image:
            "https://media.rawg.io/media/screenshots/23e/23e14000ba6668b022633e3600c8c140.jpg",
        },
      ],
    },
    {
      id: 3931,
      slug: "saints-row-iv",
      name: "Saints Row IV",
      released: "2013-08-20",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg",
      rating: 3.84,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 703, percent: 57.43 },
        { id: 3, title: "meh", count: 259, percent: 21.16 },
        { id: 5, title: "exceptional", count: 211, percent: 17.24 },
        { id: 1, title: "skip", count: 51, percent: 4.17 },
      ],
      ratings_count: 1216,
      reviews_text_count: 5,
      added: 5944,
      added_by_status: {
        yet: 179,
        owned: 4225,
        beaten: 1080,
        toplay: 72,
        dropped: 346,
        playing: 42,
      },
      metacritic: 86,
      playtime: 13,
      suggestions_count: 567,
      updated: "2021-02-08T02:52:51",
      user_game: null,
      reviews_count: 1224,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3625,
            image_background:
              "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
          },
          released_at: "2013-08-20",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2013-08-20",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows Vista (x86 or x64)<br></li><li><strong>Processor:</strong> Intel Core 2 Quad Q6600 | AMD Athlon II x3<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 260 | AMD Radeon HD 5800 series<br></li><li><strong>DirectX:</strong> Version 10<br></li><li><strong>Storage:</strong> 10 GB available space</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7 (x86 or x64)<br></li><li><strong>Processor:</strong> Intel i3 2100T | AMD Phenom II x4 or higher<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 560 | AMD Radeon HD 6800 series or higher<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 10 GB available space</li></ul>',
          },
          requirements_ru: {
            minimum:
              "Win Vista 32\nDual-Core CPU 3.0 GHz\nGeForce GT 530/Radeon HD 5550\n4 GB\tRAM\n10 GB HDD",
            recommended:
              "Win Vista 64\nMulti-Core CPU 2.4 GHz\nGeForce GTX 260/Radeon HD 5850\n4 GB\tRAM\n10 GB HDD",
          },
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2013-08-23",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2013-08-20",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2732,
            image_background:
              "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
          },
          released_at: "2013-08-20",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 58229,
            image_background:
              "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
          },
          released_at: "2013-08-20",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Ubuntu 14.04.3 LTS or SteamOS Brewmaster<br></li><li><strong>Processor:</strong> Intel Core i3-2100 (3.1 GHz) or AMD Athlon II X4 645 AM3 (3.1 GHz)<br></li><li><strong>Memory:</strong> 4096 MB RAM<br></li><li><strong>Graphics:</strong> GeForce GT 440 (1024 MB) or Radeon HD 6670 (1024 MB)<br></li><li><strong>Storage:</strong> 10 GB available space<br></li><li><strong>Additional Notes:</strong> Recommended Graphics Drivers: Nvidia: 352, 355 or 358 series driver / AMD: AMD Catalyst (fglrx) 15.9 or better. MESA drivers and Intel Graphics are not currently supported.</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Ubuntu 14.04.3 LTS or SteamOS Brewmaster<br></li><li><strong>Processor:</strong> Intel Core i5-2500K (3.3 GHz) or AMD FX-4300 (3.8 GHz)<br></li><li><strong>Memory:</strong> 8192 MB RAM<br></li><li><strong>Graphics:</strong> GeForce GTX 660 (2048 MB) or Radeon HD 6970 (2048 MB)<br></li><li><strong>Storage:</strong> 10 GB available space<br></li><li><strong>Additional Notes:</strong> Recommended Graphics Drivers: Nvidia: 352, 355 or 358 series driver / AMD: AMD Catalyst (fglrx) 15.9 or better. MESA drivers and Intel Graphics are not currently supported.</li></ul>',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
        { platform: { id: 6, name: "Linux", slug: "linux" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 3,
          name: "Adventure",
          slug: "adventure",
          games_count: 98194,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
      ],
      stores: [
        {
          id: 547996,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
        {
          id: 4249,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 11276,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 34034,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1911,
            image_background:
              "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 27875,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 10813,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 10982,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3171,
          image_background:
            "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        },
        {
          id: 18,
          name: "Co-op",
          slug: "co-op",
          language: "eng",
          games_count: 7429,
          image_background:
            "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg",
        },
        {
          id: 36,
          name: "Open World",
          slug: "open-world",
          language: "eng",
          games_count: 4350,
          image_background:
            "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
        },
        {
          id: 411,
          name: "cooperative",
          slug: "cooperative",
          language: "eng",
          games_count: 3055,
          image_background:
            "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
        },
        {
          id: 32,
          name: "Sci-fi",
          slug: "sci-fi",
          language: "eng",
          games_count: 12100,
          image_background:
            "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
        },
        {
          id: 149,
          name: "Third Person",
          slug: "third-person",
          language: "eng",
          games_count: 5478,
          image_background:
            "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        },
        {
          id: 4,
          name: "Funny",
          slug: "funny",
          language: "eng",
          games_count: 15753,
          image_background:
            "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg",
        },
        {
          id: 9,
          name: "Online Co-Op",
          slug: "online-co-op",
          language: "eng",
          games_count: 3056,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 37,
          name: "Sandbox",
          slug: "sandbox",
          language: "eng",
          games_count: 4097,
          image_background:
            "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
        },
        {
          id: 189,
          name: "Female Protagonist",
          slug: "female-protagonist",
          language: "eng",
          games_count: 6812,
          image_background:
            "https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg",
        },
        {
          id: 123,
          name: "Comedy",
          slug: "comedy",
          language: "eng",
          games_count: 7515,
          image_background:
            "https://media.rawg.io/media/screenshots/8f0/8f0b94922ad5e59968852649697b2643.jpg",
        },
        {
          id: 150,
          name: "Third-Person Shooter",
          slug: "third-person-shooter",
          language: "eng",
          games_count: 1835,
          image_background:
            "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg",
        },
        {
          id: 121,
          name: "Character Customization",
          slug: "character-customization",
          language: "eng",
          games_count: 1927,
          image_background:
            "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg",
        },
        {
          id: 172,
          name: "Aliens",
          slug: "aliens",
          language: "eng",
          games_count: 4831,
          image_background:
            "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg",
        },
        {
          id: 148,
          name: "Dark Humor",
          slug: "dark-humor",
          language: "eng",
          games_count: 1775,
          image_background:
            "https://media.rawg.io/media/screenshots/7ab/7ab68441389f60523d2f6cb75c6393f2.jpg",
        },
        {
          id: 234,
          name: "Superhero",
          slug: "superhero",
          language: "eng",
          games_count: 955,
          image_background:
            "https://media.rawg.io/media/screenshots/a8c/a8cd58ee985ab6d509370bddada91dbd.jpeg",
        },
        {
          id: 62348,
          name: "first person mod",
          slug: "first-person-mod",
          language: "eng",
          games_count: 15,
          image_background:
            "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg",
        },
        {
          id: 273,
          name: "Parody",
          slug: "parody",
          language: "eng",
          games_count: 1673,
          image_background:
            "https://media.rawg.io/media/screenshots/191/191b8c462102069c817d86295f45ac01.jpg",
        },
      ],
      esrb_rating: { id: 4, name: "Mature", slug: "mature" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg",
        },
        {
          id: 79472,
          image:
            "https://media.rawg.io/media/screenshots/aa1/aa1d57309779e9ad7abcde1dd042305f.jpg",
        },
        {
          id: 79473,
          image:
            "https://media.rawg.io/media/screenshots/641/64161143c49291cd617ab899e932e93d.jpg",
        },
        {
          id: 79474,
          image:
            "https://media.rawg.io/media/screenshots/a63/a6399d85d923e0ca0e23991b1fcc78dc.jpg",
        },
        {
          id: 79475,
          image:
            "https://media.rawg.io/media/screenshots/ad7/ad7111f5bc7e199a60daddafc3fe3d44.jpg",
        },
        {
          id: 79476,
          image:
            "https://media.rawg.io/media/screenshots/3c7/3c7bcf78505f5c273e5514d296a6499e.jpg",
        },
        {
          id: 79477,
          image:
            "https://media.rawg.io/media/screenshots/745/745e20f00ca4753803ada13c3d7a475a.jpg",
        },
      ],
    },
    {
      id: 3556,
      slug: "alien-isolation",
      name: "Alien: Isolation",
      released: "2014-10-06",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg",
      rating: 4.2,
      rating_top: 5,
      ratings: [
        { id: 5, title: "exceptional", count: 484, percent: 44.61 },
        { id: 4, title: "recommended", count: 433, percent: 39.91 },
        { id: 3, title: "meh", count: 121, percent: 11.15 },
        { id: 1, title: "skip", count: 47, percent: 4.33 },
      ],
      ratings_count: 1080,
      reviews_text_count: 3,
      added: 5938,
      added_by_status: {
        yet: 440,
        owned: 4075,
        beaten: 619,
        toplay: 241,
        dropped: 439,
        playing: 124,
      },
      metacritic: 81,
      playtime: 4,
      suggestions_count: 537,
      updated: "2021-05-06T17:30:51",
      user_game: null,
      reviews_count: 1085,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2014-10-06",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 7,
            name: "Nintendo Switch",
            slug: "nintendo-switch",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 4585,
            image_background:
              "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg",
          },
          released_at: "2014-10-06",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2014-10-06",
          requirements_en: null,
          requirements_ru: {
            minimum:
              "Win 7 (32bit),Intel Core 2 Duo 3.16Ghz,GeForce GT 430/Radeon HD 5550,4GB RAM,35 GB HDD",
            recommended:
              "Win 7 (64bit),Core 2 Quad Q9650 3.0Ghz/Phenom II X4 955 3.2Ghz,GeForce GTX660/Radeon R9 200,8GB RAM,35 GB HDD",
          },
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2014-10-06",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
        { platform: { id: 7, name: "Nintendo", slug: "nintendo" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
      ],
      stores: [
        {
          id: 593103,
          store: {
            id: 11,
            name: "Epic Games",
            slug: "epic-games",
            domain: "epicgames.com",
            games_count: 667,
            image_background:
              "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
          },
        },
        {
          id: 14292,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 3838,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 33836,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1911,
            image_background:
              "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
          },
        },
        {
          id: 7349,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 23660,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 10813,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 10982,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3171,
          image_background:
            "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 16508,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 32,
          name: "Sci-fi",
          slug: "sci-fi",
          language: "eng",
          games_count: 12100,
          image_background:
            "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
        },
        {
          id: 16,
          name: "Horror",
          slug: "horror",
          language: "eng",
          games_count: 26338,
          image_background:
            "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
        },
        {
          id: 30,
          name: "FPS",
          slug: "fps",
          language: "eng",
          games_count: 8853,
          image_background:
            "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
        },
        {
          id: 49,
          name: "Difficult",
          slug: "difficult",
          language: "eng",
          games_count: 9579,
          image_background:
            "https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg",
        },
        {
          id: 26,
          name: "Gore",
          slug: "gore",
          language: "eng",
          games_count: 4079,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        {
          id: 189,
          name: "Female Protagonist",
          slug: "female-protagonist",
          language: "eng",
          games_count: 6812,
          image_background:
            "https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg",
        },
        {
          id: 1,
          name: "Survival",
          slug: "survival",
          language: "eng",
          games_count: 5360,
          image_background:
            "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
        },
        {
          id: 15,
          name: "Stealth",
          slug: "stealth",
          language: "eng",
          games_count: 4291,
          image_background:
            "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
        },
        {
          id: 25,
          name: "Space",
          slug: "space",
          language: "eng",
          games_count: 31630,
          image_background:
            "https://media.rawg.io/media/games/6e0/6e0c19bb111bd4fa20cf0eb72a049519.jpg",
        },
        {
          id: 17,
          name: "Survival Horror",
          slug: "survival-horror",
          language: "eng",
          games_count: 5053,
          image_background:
            "https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg",
        },
        {
          id: 172,
          name: "Aliens",
          slug: "aliens",
          language: "eng",
          games_count: 4831,
          image_background:
            "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg",
        },
        {
          id: 33,
          name: "VR",
          slug: "vr",
          language: "eng",
          games_count: 9460,
          image_background:
            "https://media.rawg.io/media/screenshots/0cf/0cfe4ec4dcffb8fcac999d7176c69176.jpg",
        },
        {
          id: 62349,
          name: "vr mod",
          slug: "vr-mod",
          language: "eng",
          games_count: 17,
          image_background:
            "https://media.rawg.io/media/games/645/64578c2a6daa30995692525172fd13ef.jpg",
        },
      ],
      esrb_rating: { id: 4, name: "Mature", slug: "mature" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg",
        },
        {
          id: 31794,
          image:
            "https://media.rawg.io/media/screenshots/df3/df311b578fbaa587c8ba2d768bcf18d7.jpg",
        },
        {
          id: 31795,
          image:
            "https://media.rawg.io/media/screenshots/b46/b46d5ddcbf7650df4d7eedf1e886bcdb.jpg",
        },
        {
          id: 31796,
          image:
            "https://media.rawg.io/media/screenshots/37a/37a8f38809062d7e68d32c537e23862d.jpg",
        },
        {
          id: 31797,
          image:
            "https://media.rawg.io/media/screenshots/89c/89c46fe1576b925f4c00cc9b6620877a.jpg",
        },
        {
          id: 31798,
          image:
            "https://media.rawg.io/media/screenshots/d06/d0612058778cdf798a747c80a491b55f.jpg",
        },
        {
          id: 31799,
          image:
            "https://media.rawg.io/media/screenshots/e12/e12d1635f074c536a16bc50a6b3f56cc.jpg",
        },
      ],
    },
    {
      id: 2792,
      slug: "layers-of-fear",
      name: "Layers of Fear",
      released: "2016-02-16",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/6a2/6a2e48933245e2cd3c92248c75c925e1.jpg",
      rating: 3.53,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 445, percent: 50.17 },
        { id: 3, title: "meh", count: 191, percent: 21.53 },
        { id: 5, title: "exceptional", count: 132, percent: 14.88 },
        { id: 1, title: "skip", count: 119, percent: 13.42 },
      ],
      ratings_count: 883,
      reviews_text_count: 3,
      added: 5936,
      added_by_status: {
        yet: 556,
        owned: 4486,
        beaten: 595,
        toplay: 110,
        dropped: 159,
        playing: 30,
      },
      metacritic: 72,
      playtime: 3,
      suggestions_count: 549,
      updated: "2020-09-03T12:45:18",
      user_game: null,
      reviews_count: 887,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 7,
            name: "Nintendo Switch",
            slug: "nintendo-switch",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 4585,
            image_background:
              "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg",
          },
          released_at: "2016-02-16",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 58229,
            image_background:
              "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
          },
          released_at: "2016-02-16",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Steam OS, Ubuntu 14.04 and 15.10<br></li><li><strong>Processor:</strong> Intel Core i5 3470<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> GeForce GTX 660 Ti 2GB<br></li><li><strong>Storage:</strong> 5 GB available space<br></li><li><strong>Additional Notes:</strong> Supported Gamepads: Microsoft Xbox 360 Controller for Windows (Wired), Steam Controller</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2016-02-16",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2016-02-16",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7<br></li><li><strong>Processor:</strong> Intel Core2 Quad Q8400<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce GTX 560 1GB / Radeon R7 250X 1GB<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 5 GB available space<br></li><li><strong>Additional Notes:</strong> Supported Gamepads: Microsoft Xbox 360 Games for Windows (Wired), Microsoft Xbox One Controller (Wired), Sony PS4 DualShock 4 controller (wired), Steam Controller</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2016-02-16",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 3,
            name: "iOS",
            slug: "ios",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 72630,
            image_background:
              "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg",
          },
          released_at: "2016-02-16",
          requirements_en: { devices: [] },
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 81573,
            image_background:
              "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
          },
          released_at: "2016-02-16",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> OS X 10.10 or 10.11<br></li><li><strong>Processor:</strong> 2.3GHz Intel Core i5<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> ATI Radeon HD 5770 1GB VRAM / Nvidia GeForce 750M / Intel HD 6100<br></li><li><strong>Storage:</strong> 5 GB available space<br></li><li><strong>Additional Notes:</strong> Supported Gamepads: Xbox 360 for Windows controller (wired) and the Xbox One controller (wired)</li></ul>',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
        { platform: { id: 4, name: "iOS", slug: "ios" } },
        { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
        { platform: { id: 6, name: "Linux", slug: "linux" } },
        { platform: { id: 7, name: "Nintendo", slug: "nintendo" } },
      ],
      genres: [
        {
          id: 3,
          name: "Adventure",
          slug: "adventure",
          games_count: 98194,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
        {
          id: 51,
          name: "Indie",
          slug: "indie",
          games_count: 40360,
          image_background:
            "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg",
        },
      ],
      stores: [
        {
          id: 2941,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 385781,
          store: {
            id: 11,
            name: "Epic Games",
            slug: "epic-games",
            domain: "epicgames.com",
            games_count: 667,
            image_background:
              "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
          },
        },
        {
          id: 13640,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 26614,
          store: {
            id: 5,
            name: "GOG",
            slug: "gog",
            domain: "gog.com",
            games_count: 3721,
            image_background:
              "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg",
          },
        },
        {
          id: 7093,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
        {
          id: 71904,
          store: {
            id: 4,
            name: "App Store",
            slug: "apple-appstore",
            domain: "apps.apple.com",
            games_count: 70993,
            image_background:
              "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7585,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 10813,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 10982,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3171,
          image_background:
            "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 12001,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 16508,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 40845,
          name: "Partial Controller Support",
          slug: "partial-controller-support",
          language: "eng",
          games_count: 7768,
          image_background:
            "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
        },
        {
          id: 16,
          name: "Horror",
          slug: "horror",
          language: "eng",
          games_count: 26338,
          image_background:
            "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
        },
        {
          id: 6,
          name: "Exploration",
          slug: "exploration",
          language: "eng",
          games_count: 12671,
          image_background:
            "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
        },
        {
          id: 41,
          name: "Dark",
          slug: "dark",
          language: "eng",
          games_count: 8894,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 141,
          name: "Point & Click",
          slug: "point-click",
          language: "eng",
          games_count: 8090,
          image_background:
            "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        },
        {
          id: 111,
          name: "Short",
          slug: "short",
          language: "eng",
          games_count: 33214,
          image_background:
            "https://media.rawg.io/media/games/b80/b80de593e66136f8a35c57960cc8fa3b.jpg",
        },
        {
          id: 17,
          name: "Survival Horror",
          slug: "survival-horror",
          language: "eng",
          games_count: 5053,
          image_background:
            "https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg",
        },
        {
          id: 117,
          name: "Mystery",
          slug: "mystery",
          language: "eng",
          games_count: 8146,
          image_background:
            "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg",
        },
        {
          id: 91,
          name: "Walking Simulator",
          slug: "walking-simulator",
          language: "eng",
          games_count: 4545,
          image_background:
            "https://media.rawg.io/media/games/639/639ce7d7fecbb9f0717e9fbc1180f8f8.jpg",
        },
        {
          id: 46,
          name: "Surreal",
          slug: "surreal",
          language: "eng",
          games_count: 3182,
          image_background:
            "https://media.rawg.io/media/screenshots/1ef/1ef455141543c9e27ef0856a68a52b48.jpg",
        },
        {
          id: 47,
          name: "Lovecraftian",
          slug: "lovecraftian",
          language: "eng",
          games_count: 290,
          image_background:
            "https://media.rawg.io/media/games/3f5/3f511f83640249c3225e40050909301c.jpg",
        },
        {
          id: 286,
          name: "Psychedelic",
          slug: "psychedelic",
          language: "eng",
          games_count: 1068,
          image_background:
            "https://media.rawg.io/media/games/555/5551b9f5fc96240bff431d87b4043956.jpg",
        },
      ],
      esrb_rating: { id: 4, name: "Mature", slug: "mature" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/6a2/6a2e48933245e2cd3c92248c75c925e1.jpg",
        },
        {
          id: 25499,
          image:
            "https://media.rawg.io/media/screenshots/f49/f4994fea6a84b578a92abd51b20da5f9.jpg",
        },
        {
          id: 25502,
          image:
            "https://media.rawg.io/media/screenshots/b2f/b2f0f53e5fdeb1c2da275a24a1f86baa.jpg",
        },
        {
          id: 25505,
          image:
            "https://media.rawg.io/media/screenshots/3c5/3c55efc4e3b008840dd2747fd8abbd72.jpg",
        },
        {
          id: 25509,
          image:
            "https://media.rawg.io/media/screenshots/e69/e695b7a3e93ac142d6f7a6c142f4dfad.jpg",
        },
        {
          id: 25512,
          image:
            "https://media.rawg.io/media/screenshots/fe5/fe54e15f23a2f9cffa9a8d113de874db.jpg",
        },
        {
          id: 25514,
          image:
            "https://media.rawg.io/media/screenshots/16c/16cae54a4aff2bc41a4a90221e00309f.jpg",
        },
      ],
    },
    {
      id: 923,
      slug: "titanfall-2",
      name: "Titanfall 2",
      released: "2016-10-28",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg",
      rating: 4.32,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 698, percent: 46.23 },
        { id: 5, title: "exceptional", count: 677, percent: 44.83 },
        { id: 3, title: "meh", count: 105, percent: 6.95 },
        { id: 1, title: "skip", count: 30, percent: 1.99 },
      ],
      ratings_count: 1486,
      reviews_text_count: 20,
      added: 5934,
      added_by_status: {
        yet: 220,
        owned: 3915,
        beaten: 1256,
        toplay: 201,
        dropped: 255,
        playing: 87,
      },
      metacritic: 87,
      playtime: 4,
      suggestions_count: 575,
      updated: "2020-08-27T18:56:42",
      user_game: null,
      reviews_count: 1510,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2016-10-28",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2016-10-28",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2020-06-18",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Win 7/8/8.1/10 64bit<br></li><li><strong>Processor:</strong> Intel Core i3-6300t or equivalent [4 or more hardware threads]<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA Geforce GTX 660 2GB or AMD Radeon HD 7850 2GB<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 45 GB available space</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Win 7/8/8.1/10 64bit<br></li><li><strong>Processor:</strong> Intel Core i5-6600 or equivalent<br></li><li><strong>Memory:</strong> 16 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA Geforce GTX 1060 6GB or AMD Radeon RX 480 8GB<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 45 GB available space</li></ul>',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 2,
          name: "Shooter",
          slug: "shooter",
          games_count: 44689,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
      ],
      stores: [
        {
          id: 475857,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 942,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 8908,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 23660,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 27875,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 10982,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 16508,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 32,
          name: "Sci-fi",
          slug: "sci-fi",
          language: "eng",
          games_count: 12100,
          image_background:
            "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
        },
        {
          id: 30,
          name: "FPS",
          slug: "fps",
          language: "eng",
          games_count: 8853,
          image_background:
            "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
        },
        {
          id: 26,
          name: "Gore",
          slug: "gore",
          language: "eng",
          games_count: 4079,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        {
          id: 6,
          name: "Exploration",
          slug: "exploration",
          language: "eng",
          games_count: 12671,
          image_background:
            "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
        },
        {
          id: 34,
          name: "Violent",
          slug: "violent",
          language: "eng",
          games_count: 4807,
          image_background:
            "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg",
        },
        {
          id: 69,
          name: "Action-Adventure",
          slug: "action-adventure",
          language: "eng",
          games_count: 9160,
          image_background:
            "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg",
        },
        {
          id: 157,
          name: "PvP",
          slug: "pvp",
          language: "eng",
          games_count: 4579,
          image_background:
            "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg",
        },
        {
          id: 11,
          name: "Team-Based",
          slug: "team-based",
          language: "eng",
          games_count: 835,
          image_background:
            "https://media.rawg.io/media/games/388/388935d851846f8ec747fffc7c765800.jpg",
        },
        {
          id: 167,
          name: "Futuristic",
          slug: "futuristic",
          language: "eng",
          games_count: 2764,
          image_background:
            "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
        },
        {
          id: 131,
          name: "Fast-Paced",
          slug: "fast-paced",
          language: "eng",
          games_count: 7942,
          image_background:
            "https://media.rawg.io/media/games/295/295eb868c241e6ad32ac033b8e6a2ede.jpg",
        },
        {
          id: 168,
          name: "RTS",
          slug: "rts",
          language: "eng",
          games_count: 1293,
          image_background:
            "https://media.rawg.io/media/screenshots/65c/65c9c15e274705b5fe343e424ce76ec8.jpg",
        },
        {
          id: 110,
          name: "Cinematic",
          slug: "cinematic",
          language: "eng",
          games_count: 655,
          image_background:
            "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg",
        },
        {
          id: 81,
          name: "Military",
          slug: "military",
          language: "eng",
          games_count: 788,
          image_background:
            "https://media.rawg.io/media/games/121/1213f8b9b0a26307e672cf51f34882f8.jpg",
        },
        {
          id: 188,
          name: "Parkour",
          slug: "parkour",
          language: "eng",
          games_count: 2071,
          image_background:
            "https://media.rawg.io/media/games/cfe/cfe5960b5caca432f3575fc7d8ff736b.jpg",
        },
        {
          id: 197,
          name: "Robots",
          slug: "robots",
          language: "eng",
          games_count: 5965,
          image_background:
            "https://media.rawg.io/media/games/9da/9da42a4da370cc386c8578f0b2578e2c.jpg",
        },
        {
          id: 1465,
          name: "combat",
          slug: "combat",
          language: "eng",
          games_count: 5801,
          image_background:
            "https://media.rawg.io/media/games/64e/64e2a77f37ddc48d102127234af99886.jpg",
        },
        {
          id: 40937,
          name: "Steam Trading Cards",
          slug: "steam-trading-cards-2",
          language: "eng",
          games_count: 248,
          image_background:
            "https://media.rawg.io/media/games/a50/a505bccdcfdc79970a93574c747f6e0d.jpg",
        },
        {
          id: 45878,
          name: "Online PvP",
          slug: "online-pvp",
          language: "eng",
          games_count: 1640,
          image_background:
            "https://media.rawg.io/media/games/377/3770f2c7020bcb6cc2072f073f27fb4c.jpg",
        },
        {
          id: 317,
          name: "Time Travel",
          slug: "time-travel",
          language: "eng",
          games_count: 1251,
          image_background:
            "https://media.rawg.io/media/games/764/7648a8802fae5247298d775c85e9535f.jpg",
        },
        {
          id: 184,
          name: "Mechs",
          slug: "mechs",
          language: "eng",
          games_count: 829,
          image_background:
            "https://media.rawg.io/media/games/fe7/fe774427b11e2a808a1aacf1a32213ed.jpg",
        },
        {
          id: 49953,
          name: "Hero Shooter",
          slug: "hero-shooter-2",
          language: "eng",
          games_count: 211,
          image_background:
            "https://media.rawg.io/media/screenshots/76a/76a799e9946b3eb991618f3ebf823ecf.jpg",
        },
        {
          id: 7413,
          name: "grappling-hook",
          slug: "grappling-hook",
          language: "eng",
          games_count: 53,
          image_background:
            "https://media.rawg.io/media/screenshots/8b4/8b4f1a24f318bbd90789b7305af35a8b.jpg",
        },
      ],
      esrb_rating: { id: 4, name: "Mature", slug: "mature" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg",
        },
        {
          id: 8125,
          image:
            "https://media.rawg.io/media/screenshots/84e/84e29493c294e80fb0311c8381001f77.jpg",
        },
        {
          id: 8126,
          image:
            "https://media.rawg.io/media/screenshots/6b5/6b5e173d4ed40f90aa40e685f11288ef.jpg",
        },
        {
          id: 8129,
          image:
            "https://media.rawg.io/media/screenshots/9f4/9f44676b8807fd78f44711fa842ec685.jpg",
        },
        {
          id: 8130,
          image:
            "https://media.rawg.io/media/screenshots/ac0/ac00a4d622919baafe096060e5c5f838.jpg",
        },
        {
          id: 8131,
          image:
            "https://media.rawg.io/media/screenshots/3cf/3cf20e1cc6f9dfa47b44bd9398dc026f.jpg",
        },
        {
          id: 8133,
          image:
            "https://media.rawg.io/media/screenshots/677/677d773bd606dd7a386bdd1930658ba7.jpg",
        },
      ],
    },
    {
      id: 4003,
      slug: "grid-2",
      name: "GRID 2",
      released: "2013-05-27",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/27b/27b02ffaab6b250cc31bf43baca1fc34.jpg",
      rating: 3.32,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 314, percent: 47.58 },
        { id: 3, title: "meh", count: 189, percent: 28.64 },
        { id: 1, title: "skip", count: 105, percent: 15.91 },
        { id: 5, title: "exceptional", count: 52, percent: 7.88 },
      ],
      ratings_count: 659,
      reviews_text_count: 0,
      added: 5912,
      added_by_status: {
        yet: 352,
        owned: 5013,
        beaten: 175,
        toplay: 37,
        dropped: 312,
        playing: 23,
      },
      metacritic: 80,
      playtime: 4,
      suggestions_count: 391,
      updated: "2019-09-17T03:09:08",
      user_game: null,
      reviews_count: 660,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2013-05-27",
          requirements_en: {
            minimum:
              '<strong> Minimum</strong> <br><ul class="bb_ul"><li><strong>OS:</strong> Windows Vista, Windows 7, Windows 8<br>                </li><li><strong>Processor:</strong> Intel Core 2 Duo @ 2.4Ghz or AMD Athlon X2 5400+<br>                </li><li><strong>Memory:</strong> 2 GB RAM<br>                </li><li><strong>Hard Disk Space:</strong> 15 GB HD space                <br>                </li><li><strong>Video Card:</strong> Intel HD Graphics 3000 / AMD HD2600 / NVIDIA Geforce 8600<br>                </li><li><strong>DirectX®:</strong> 11<br>                </li><li><strong>Sound:</strong> Direct X compatible soundcard<br>                </li><li><strong>Additional:</strong> Broadband Internet connection   <br>                </li><li><strong>Additional Supported Graphics Cards:</strong> Intel HD Graphics 3000, Intel HD Graphics 4000, Intel Graphics 5200.<br>AMD Radeon HD2600 or higher, HD3650 or higher, HD4550 or higher, HD5000 Series, HD6000 Series, HD7000 Series.<br>NVIDIA GeForce 8600 or higher, 9500 or higher, GTX220 or higher, GTX400 Series, GTX500 Series, GTX600 Series: AMD Fusion A8 or higher.<br>       </li></ul>',
            recommended:
              '<strong> Recommended</strong> <br><ul class="bb_ul"><li><strong>OS:</strong> Windows Vista 64 Bit, Windows 7 64 Bit, Windows 8 64 bit<br>                </li><li><strong>Processor:</strong> Intel Core i7/AMD Bulldozer<br>                </li><li><strong>Memory:</strong> 4 GB RAM<br>                </li><li><strong>Hard Disk Space:</strong> 15 GB HD space                 <br>                </li><li><strong>Video Card:</strong> Intel Graphics 5200 / AMD HD6000 Series / Nvidia GTX500 Series minimum 1GB RAM<br>                </li><li><strong>DirectX®:</strong> 11<br>                </li><li><strong>Sound:</strong> Direct X compatible soundcard<br>                </li><li><strong>Additional:</strong> Broadband Internet connection           </li></ul>',
          },
          requirements_ru: {
            minimum:
              "Win Vista 32\nDual Core CPU 2.4 GHz\nGeForce 8600/Radeon HD 2600\n2 GB RAM\n15 GB HDD",
            recommended:
              "Win 7 64\nCore i7-920 Quad 2.67GHz\nGeForce GTX 550/Radeon HD 6770\n4 GB RAM\n15 GB HDD",
          },
        },
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2732,
            image_background:
              "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
          },
          released_at: "2013-05-27",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3625,
            image_background:
              "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
          },
          released_at: "2013-05-27",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 81573,
            image_background:
              "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
          },
          released_at: "2013-05-27",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> 10.9.4<br>\t</li><li><strong>Processor:</strong> 2GHz<br>\t</li><li><strong>Memory:</strong> 4GB Memory<br>\t</li><li><strong>Graphics:</strong> 256MB*<br>\t</li><li><strong>Hard Drive:</strong>11GB HD space<br>\t</li><li><strong>Other Requirements:</strong> The following graphics cards are not supported: ATI X1xxx series, ATI HD2xxx series, Intel GMA series, Intel HD3000, NVIDIA 7xxx series, NVIDIA 8xxx series, NVIDIA 9xxx series, NVIDIA 3xx series and NVIDIA 1xx series.</li></ul>',
            recommended:
              '<strong> Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> 10.9.5<br>\t</li><li><strong>Processor:</strong> 2.4 GHz<br>\t</li><li><strong>Memory:</strong> 8GB Memory<br>\t</li><li><strong>Graphics:</strong> 1GB*<br>\t</li><li><strong>Hard Drive:</strong> 11GB HD space</li></ul>',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
        { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
      ],
      genres: [
        {
          id: 15,
          name: "Sports",
          slug: "sports",
          games_count: 17852,
          image_background:
            "https://media.rawg.io/media/screenshots/1be/1be2141edae05d4ba9858182b081e604.jpg",
        },
        {
          id: 1,
          name: "Racing",
          slug: "racing",
          games_count: 19913,
          image_background:
            "https://media.rawg.io/media/games/97a/97a5fee8bba1189f70a9874171f45195.jpg",
        },
      ],
      stores: [
        {
          id: 4322,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 19555,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 34007,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1911,
            image_background:
              "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 23660,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 27875,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7585,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 10813,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 10982,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 18,
          name: "Co-op",
          slug: "co-op",
          language: "eng",
          games_count: 7429,
          image_background:
            "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg",
        },
        {
          id: 36,
          name: "Open World",
          slug: "open-world",
          language: "eng",
          games_count: 4350,
          image_background:
            "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
        },
        {
          id: 411,
          name: "cooperative",
          slug: "cooperative",
          language: "eng",
          games_count: 3055,
          image_background:
            "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 16508,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 40850,
          name: "Steam Leaderboards",
          slug: "steam-leaderboards",
          language: "eng",
          games_count: 4922,
          image_background:
            "https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg",
        },
        {
          id: 75,
          name: "Local Co-Op",
          slug: "local-co-op",
          language: "eng",
          games_count: 4134,
          image_background:
            "https://media.rawg.io/media/games/9c4/9c4aa07294013802f25fb7386b28512e.jpg",
        },
        {
          id: 198,
          name: "Split Screen",
          slug: "split-screen",
          language: "eng",
          games_count: 4445,
          image_background:
            "https://media.rawg.io/media/games/07a/07a74470a2618fd71945db0619602baf.jpg",
        },
        {
          id: 115,
          name: "Controller",
          slug: "controller",
          language: "eng",
          games_count: 6221,
          image_background:
            "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg",
        },
        {
          id: 72,
          name: "Local Multiplayer",
          slug: "local-multiplayer",
          language: "eng",
          games_count: 10390,
          image_background:
            "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg",
        },
        {
          id: 77,
          name: "Realistic",
          slug: "realistic",
          language: "eng",
          games_count: 1896,
          image_background:
            "https://media.rawg.io/media/games/b22/b227810b1a1bcbe9cf3dda22534c686e.jpg",
        },
        {
          id: 40856,
          name: "Valve Anti-Cheat enabled",
          slug: "valve-anti-cheat-enabled",
          language: "eng",
          games_count: 104,
          image_background:
            "https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg",
        },
        {
          id: 133,
          name: "3D Vision",
          slug: "3d-vision",
          language: "eng",
          games_count: 303,
          image_background:
            "https://media.rawg.io/media/games/1ed/1edaaa9e24e0072772244633d01642f4.jpg",
        },
        {
          id: 130,
          name: "Driving",
          slug: "driving",
          language: "eng",
          games_count: 3727,
          image_background:
            "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg",
        },
      ],
      esrb_rating: { id: 2, name: "Everyone 10+", slug: "everyone-10-plus" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/27b/27b02ffaab6b250cc31bf43baca1fc34.jpg",
        },
        {
          id: 160685,
          image:
            "https://media.rawg.io/media/screenshots/239/239b8ea092f580063a3063837a5d66db.jpg",
        },
        {
          id: 160686,
          image:
            "https://media.rawg.io/media/screenshots/3a3/3a34ca7c5188dbd90cef896a2161cf96.jpg",
        },
        {
          id: 160687,
          image:
            "https://media.rawg.io/media/screenshots/eed/eed60d9303c5601cfc84e2784abf8191.jpg",
        },
        {
          id: 160688,
          image:
            "https://media.rawg.io/media/screenshots/6fc/6fc98ed27cea1282bdfef2fd0cbddf91.jpg",
        },
        {
          id: 160689,
          image:
            "https://media.rawg.io/media/screenshots/966/96667e75197bc34897a4d56461f00807.jpg",
        },
        {
          id: 160690,
          image:
            "https://media.rawg.io/media/screenshots/450/450a36fe9279d2369e472bfe984a1e37.jpg",
        },
      ],
    },
    {
      id: 2819,
      slug: "firewatch",
      name: "Firewatch",
      released: "2016-02-08",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/0be/0bea0a08a4d954337305391b778a7f37.jpg",
      rating: 4.31,
      rating_top: 5,
      ratings: [
        { id: 5, title: "exceptional", count: 876, percent: 46.6 },
        { id: 4, title: "recommended", count: 808, percent: 42.98 },
        { id: 3, title: "meh", count: 150, percent: 7.98 },
        { id: 1, title: "skip", count: 46, percent: 2.45 },
      ],
      ratings_count: 1859,
      reviews_text_count: 16,
      added: 5871,
      added_by_status: {
        yet: 234,
        owned: 3147,
        beaten: 1950,
        toplay: 381,
        dropped: 115,
        playing: 44,
      },
      metacritic: 81,
      playtime: 5,
      suggestions_count: 420,
      updated: "2021-04-03T11:02:58",
      user_game: null,
      reviews_count: 1880,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2016-02-08",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 7,
            name: "Nintendo Switch",
            slug: "nintendo-switch",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 4585,
            image_background:
              "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg",
          },
          released_at: "2016-02-08",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 58229,
            image_background:
              "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
          },
          released_at: "2016-02-08",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> 64-bit OS<br></li><li><strong>Processor:</strong> Intel Core i3 2.00 GHz or AMD equivalent<br></li><li><strong>Memory:</strong> 6 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce 450 or higher with 1GB Memory<br></li><li><strong>Storage:</strong> 4 GB available space</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 81573,
            image_background:
              "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
          },
          released_at: "2016-02-08",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Mac OS X 10.8+<br></li><li><strong>Processor:</strong> 2011 or newer Intel Core i5<br></li><li><strong>Memory:</strong> 6 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia or ATi GPU with 1GB Memory<br></li><li><strong>Storage:</strong> 4 GB available space<br></li><li><strong>Additional Notes:</strong> Dedicated graphics card required. No Mac Mini model is officially supported at this time.</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2016-02-08",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7 or higher 64bit<br></li><li><strong>Processor:</strong> Intel Core i3 2.00 GHz or AMD equivalent<br></li><li><strong>Memory:</strong> 6 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce 450 or higher with 1GB Memory<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 4 GB available space</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2016-02-08",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
        { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
        { platform: { id: 6, name: "Linux", slug: "linux" } },
        { platform: { id: 7, name: "Nintendo", slug: "nintendo" } },
      ],
      genres: [
        {
          id: 3,
          name: "Adventure",
          slug: "adventure",
          games_count: 98194,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
        {
          id: 51,
          name: "Indie",
          slug: "indie",
          games_count: 40360,
          image_background:
            "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg",
        },
      ],
      stores: [
        {
          id: 2972,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 8409,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
        {
          id: 17656,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 26667,
          store: {
            id: 5,
            name: "GOG",
            slug: "gog",
            domain: "gog.com",
            games_count: 3721,
            image_background:
              "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg",
          },
        },
        {
          id: 271556,
          store: {
            id: 6,
            name: "Nintendo Store",
            slug: "nintendo",
            domain: "nintendo.com",
            games_count: 8754,
            image_background:
              "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 10982,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3171,
          image_background:
            "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 12001,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 36,
          name: "Open World",
          slug: "open-world",
          language: "eng",
          games_count: 4350,
          image_background:
            "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 16508,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 16,
          name: "Horror",
          slug: "horror",
          language: "eng",
          games_count: 26338,
          image_background:
            "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
        },
        {
          id: 4,
          name: "Funny",
          slug: "funny",
          language: "eng",
          games_count: 15753,
          image_background:
            "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg",
        },
        {
          id: 123,
          name: "Comedy",
          slug: "comedy",
          language: "eng",
          games_count: 7515,
          image_background:
            "https://media.rawg.io/media/screenshots/8f0/8f0b94922ad5e59968852649697b2643.jpg",
        },
        {
          id: 6,
          name: "Exploration",
          slug: "exploration",
          language: "eng",
          games_count: 12671,
          image_background:
            "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
        },
        {
          id: 111,
          name: "Short",
          slug: "short",
          language: "eng",
          games_count: 33214,
          image_background:
            "https://media.rawg.io/media/games/b80/b80de593e66136f8a35c57960cc8fa3b.jpg",
        },
        {
          id: 117,
          name: "Mystery",
          slug: "mystery",
          language: "eng",
          games_count: 8146,
          image_background:
            "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg",
        },
        {
          id: 192,
          name: "Mature",
          slug: "mature",
          language: "eng",
          games_count: 1120,
          image_background:
            "https://media.rawg.io/media/games/f14/f1422eacab98c5f85a5123da4e9d9e89.jpg",
        },
        {
          id: 91,
          name: "Walking Simulator",
          slug: "walking-simulator",
          language: "eng",
          games_count: 4545,
          image_background:
            "https://media.rawg.io/media/games/639/639ce7d7fecbb9f0717e9fbc1180f8f8.jpg",
        },
        {
          id: 165,
          name: "Colorful",
          slug: "colorful",
          language: "eng",
          games_count: 11512,
          image_background:
            "https://media.rawg.io/media/games/c2e/c2eb6021a2596644b437e943612af25c.jpg",
        },
        {
          id: 209,
          name: "Drama",
          slug: "drama",
          language: "eng",
          games_count: 1404,
          image_background:
            "https://media.rawg.io/media/games/5c5/5c5089af36b99bf9465357a8556449f9.jpg",
        },
        {
          id: 183,
          name: "Thriller",
          slug: "thriller",
          language: "eng",
          games_count: 1141,
          image_background:
            "https://media.rawg.io/media/games/66c/66cad7e826e08682192392e37cce3cd1.jpg",
        },
      ],
      esrb_rating: { id: 4, name: "Mature", slug: "mature" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/0be/0bea0a08a4d954337305391b778a7f37.jpg",
        },
        {
          id: 25705,
          image:
            "https://media.rawg.io/media/screenshots/e86/e86b8c787467f28f816eb59c5a7e8799.jpg",
        },
        {
          id: 25706,
          image:
            "https://media.rawg.io/media/screenshots/5fd/5fd10bf8857d575d25029712eff7a555.jpg",
        },
        {
          id: 25708,
          image:
            "https://media.rawg.io/media/screenshots/12a/12a71dc55e86960b7f0185f12c3affe2.jpg",
        },
        {
          id: 25710,
          image:
            "https://media.rawg.io/media/screenshots/992/9923c31af79cb7a17e24c4ef47d50217.jpg",
        },
        {
          id: 25711,
          image:
            "https://media.rawg.io/media/screenshots/2fd/2fde2721efe9480d2ccd7c204649edab.jpg",
        },
        {
          id: 25712,
          image:
            "https://media.rawg.io/media/screenshots/d96/d96edb4fac41f4c39871ac750893cdec.jpg",
        },
      ],
    },
    {
      id: 5703,
      slug: "uncharted-3-drakes-deception",
      name: "Uncharted 3: Drake's Deception",
      released: "2011-11-01",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/589/589fc47c5ae34160d65c4682e21fed66.jpg",
      rating: 4.37,
      rating_top: 5,
      ratings: [
        { id: 5, title: "exceptional", count: 801, percent: 48.93 },
        { id: 4, title: "recommended", count: 700, percent: 42.76 },
        { id: 3, title: "meh", count: 108, percent: 6.6 },
        { id: 1, title: "skip", count: 28, percent: 1.71 },
      ],
      ratings_count: 1625,
      reviews_text_count: 7,
      added: 5868,
      added_by_status: {
        yet: 156,
        owned: 3614,
        beaten: 1831,
        toplay: 125,
        dropped: 98,
        playing: 44,
      },
      metacritic: 92,
      playtime: 12,
      suggestions_count: 644,
      updated: "2020-05-14T14:02:32",
      user_game: null,
      reviews_count: 1637,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3625,
            image_background:
              "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
          },
          released_at: "2011-11-01",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2011-11-01",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 3,
          name: "Adventure",
          slug: "adventure",
          games_count: 98194,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
      ],
      stores: [
        {
          id: 6061,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 149,
          name: "Third Person",
          slug: "third-person",
          language: "eng",
          games_count: 5478,
          image_background:
            "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        },
        {
          id: 11702,
          name: "cover-shooter",
          slug: "cover-shooter",
          language: "eng",
          games_count: 2,
          image_background:
            "https://media.rawg.io/media/games/589/589fc47c5ae34160d65c4682e21fed66.jpg",
        },
      ],
      esrb_rating: { id: 3, name: "Teen", slug: "teen" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/589/589fc47c5ae34160d65c4682e21fed66.jpg",
        },
        {
          id: 568245,
          image:
            "https://media.rawg.io/media/screenshots/29e/29eedbd39d332cb3bef58a8baf8e9256.jpg",
        },
        {
          id: 568246,
          image:
            "https://media.rawg.io/media/screenshots/718/718c165032556a44f43c783ae75c24f2.jpg",
        },
        {
          id: 568247,
          image:
            "https://media.rawg.io/media/screenshots/dbd/dbd8771df486145d8d53d2777b38b3f4.jpg",
        },
        {
          id: 568248,
          image:
            "https://media.rawg.io/media/screenshots/696/696cc2e1a7fa9ca55ac9138a02df2ee6.jpg",
        },
        {
          id: 568249,
          image:
            "https://media.rawg.io/media/screenshots/b42/b4278e2afed8ba4d0f2e81a65ff48bc5.jpg",
        },
        {
          id: 568250,
          image:
            "https://media.rawg.io/media/screenshots/ae3/ae36d7dd7adf015d687491fa40b0b735.jpg",
        },
      ],
    },
    {
      id: 51329,
      slug: "shadow-of-the-tomb-raider",
      name: "Shadow of the Tomb Raider",
      released: "2018-09-14",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg",
      rating: 3.88,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 675, percent: 58.14 },
        { id: 3, title: "meh", count: 234, percent: 20.16 },
        { id: 5, title: "exceptional", count: 212, percent: 18.26 },
        { id: 1, title: "skip", count: 40, percent: 3.45 },
      ],
      ratings_count: 1147,
      reviews_text_count: 7,
      added: 5838,
      added_by_status: {
        yet: 437,
        owned: 3600,
        beaten: 910,
        toplay: 579,
        dropped: 157,
        playing: 155,
      },
      metacritic: 78,
      playtime: 9,
      suggestions_count: 650,
      updated: "2020-05-15T22:24:11",
      user_game: null,
      reviews_count: 1161,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2018-09-14",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2018-09-14",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2018-09-14",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 81573,
            image_background:
              "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
          },
          released_at: "2018-09-14",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 58229,
            image_background:
              "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
          },
          released_at: "2018-09-14",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
        { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
        { platform: { id: 6, name: "Linux", slug: "linux" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 3,
          name: "Adventure",
          slug: "adventure",
          games_count: 98194,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
      ],
      stores: [
        {
          id: 47143,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 47147,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
        {
          id: 48183,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 23660,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7585,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 10813,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 10982,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3171,
          image_background:
            "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 12001,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 36,
          name: "Open World",
          slug: "open-world",
          language: "eng",
          games_count: 4350,
          image_background:
            "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
        },
        {
          id: 149,
          name: "Third Person",
          slug: "third-person",
          language: "eng",
          games_count: 5478,
          image_background:
            "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        },
        {
          id: 26,
          name: "Gore",
          slug: "gore",
          language: "eng",
          games_count: 4079,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        {
          id: 189,
          name: "Female Protagonist",
          slug: "female-protagonist",
          language: "eng",
          games_count: 6812,
          image_background:
            "https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg",
        },
        {
          id: 1,
          name: "Survival",
          slug: "survival",
          language: "eng",
          games_count: 5360,
          image_background:
            "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
        },
        {
          id: 6,
          name: "Exploration",
          slug: "exploration",
          language: "eng",
          games_count: 12671,
          image_background:
            "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
        },
        {
          id: 15,
          name: "Stealth",
          slug: "stealth",
          language: "eng",
          games_count: 4291,
          image_background:
            "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
        },
        {
          id: 34,
          name: "Violent",
          slug: "violent",
          language: "eng",
          games_count: 4807,
          image_background:
            "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg",
        },
        {
          id: 41,
          name: "Dark",
          slug: "dark",
          language: "eng",
          games_count: 8894,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 69,
          name: "Action-Adventure",
          slug: "action-adventure",
          language: "eng",
          games_count: 9160,
          image_background:
            "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg",
        },
        {
          id: 306,
          name: "Lara Croft",
          slug: "lara-croft",
          language: "eng",
          games_count: 14,
          image_background:
            "https://media.rawg.io/media/games/e6b/e6b025951f9a72673f41c0588fb85758.jpg",
        },
      ],
      esrb_rating: { id: 4, name: "Mature", slug: "mature" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg",
        },
        {
          id: 774019,
          image:
            "https://media.rawg.io/media/screenshots/167/16728aa54b1130772b06cdcac128e056.jpg",
        },
        {
          id: 774020,
          image:
            "https://media.rawg.io/media/screenshots/3f7/3f711b42d24d9fdeb58faf1f69eccbe3.jpg",
        },
        {
          id: 774021,
          image:
            "https://media.rawg.io/media/screenshots/ef2/ef2be35eaf7e083cc5b51d2e2addf441.jpg",
        },
        {
          id: 774022,
          image:
            "https://media.rawg.io/media/screenshots/0d1/0d129ec2c410a11f4407ca469f92edda.jpg",
        },
        {
          id: 774023,
          image:
            "https://media.rawg.io/media/screenshots/bd5/bd51765bc9e33644cae768ee91c10e14.jpg",
        },
        {
          id: 774024,
          image:
            "https://media.rawg.io/media/screenshots/877/877d713525903c9f6019ad58b80650a6.jpg",
        },
      ],
    },
    {
      id: 4544,
      slug: "red-dead-redemption",
      name: "Red Dead Redemption",
      released: "2010-05-18",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/686/686909717c3aa01518bc42ae2bf4259e.jpg",
      rating: 4.41,
      rating_top: 5,
      ratings: [
        { id: 5, title: "exceptional", count: 1031, percent: 59.56 },
        { id: 4, title: "recommended", count: 508, percent: 29.35 },
        { id: 3, title: "meh", count: 127, percent: 7.34 },
        { id: 1, title: "skip", count: 65, percent: 3.76 },
      ],
      ratings_count: 1721,
      reviews_text_count: 5,
      added: 5835,
      added_by_status: {
        yet: 235,
        owned: 3628,
        beaten: 1302,
        toplay: 298,
        dropped: 311,
        playing: 61,
      },
      metacritic: 95,
      playtime: 7,
      suggestions_count: 463,
      updated: "2020-08-03T02:17:36",
      user_game: null,
      reviews_count: 1731,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2010-05-18",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2732,
            image_background:
              "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
          },
          released_at: "2010-05-18",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3625,
            image_background:
              "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
          },
          released_at: "2010-05-18",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 2,
          name: "Shooter",
          slug: "shooter",
          games_count: 44689,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
      ],
      stores: [
        {
          id: 465885,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
        {
          id: 4878,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 34043,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1911,
            image_background:
              "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 27875,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 1465,
          name: "combat",
          slug: "combat",
          language: "eng",
          games_count: 5801,
          image_background:
            "https://media.rawg.io/media/games/64e/64e2a77f37ddc48d102127234af99886.jpg",
        },
        {
          id: 3117,
          name: "shoot",
          slug: "shoot",
          language: "eng",
          games_count: 8044,
          image_background:
            "https://media.rawg.io/media/games/6f0/6f054b79d3fc71ad00784f844f3162c7.jpg",
        },
        {
          id: 3388,
          name: "waves",
          slug: "waves",
          language: "eng",
          games_count: 1481,
          image_background:
            "https://media.rawg.io/media/screenshots/8b7/8b78f34b14ea07bf2398931e7bc3d81d.jpg",
        },
        {
          id: 1427,
          name: "nightmare",
          slug: "nightmare",
          language: "eng",
          games_count: 437,
          image_background:
            "https://media.rawg.io/media/games/686/686909717c3aa01518bc42ae2bf4259e.jpg",
        },
        {
          id: 3992,
          name: "clone",
          slug: "clone",
          language: "eng",
          games_count: 775,
          image_background:
            "https://media.rawg.io/media/screenshots/7b0/7b0072e5e72209c5724de54f91268a00.jpg",
        },
      ],
      esrb_rating: { id: 4, name: "Mature", slug: "mature" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/686/686909717c3aa01518bc42ae2bf4259e.jpg",
        },
        {
          id: 518885,
          image:
            "https://media.rawg.io/media/screenshots/cf4/cf4ff03cc16bf7ccff78c1fb38bcafc2.jpg",
        },
        {
          id: 518886,
          image:
            "https://media.rawg.io/media/screenshots/304/304ad0c33748eff98812f057592741b6.jpg",
        },
        {
          id: 518887,
          image:
            "https://media.rawg.io/media/screenshots/ef7/ef743c271d18cf643a47543bf73fcf78.jpg",
        },
        {
          id: 518888,
          image:
            "https://media.rawg.io/media/screenshots/8f7/8f76b9883f00955461bb4f57cbf64914.jpg",
        },
        {
          id: 518889,
          image:
            "https://media.rawg.io/media/screenshots/7aa/7aafdcf2cf8a9863673b767f368a3291.jpg",
        },
        {
          id: 518890,
          image:
            "https://media.rawg.io/media/screenshots/495/495b5bc877060900fcad68d5c6fb19b2.jpg",
        },
      ],
    },
    {
      id: 1450,
      slug: "inside",
      name: "INSIDE",
      released: "2016-06-28",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg",
      rating: 4.41,
      rating_top: 5,
      ratings: [
        { id: 5, title: "exceptional", count: 1116, percent: 57.97 },
        { id: 4, title: "recommended", count: 619, percent: 32.16 },
        { id: 3, title: "meh", count: 118, percent: 6.13 },
        { id: 1, title: "skip", count: 72, percent: 3.74 },
      ],
      ratings_count: 1897,
      reviews_text_count: 22,
      added: 5835,
      added_by_status: {
        yet: 346,
        owned: 3028,
        beaten: 1881,
        toplay: 397,
        dropped: 141,
        playing: 42,
      },
      metacritic: 87,
      playtime: 4,
      suggestions_count: 262,
      updated: "2020-07-04T11:10:04",
      user_game: null,
      reviews_count: 1925,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2016-06-28",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2016-06-28",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 7,
            name: "Nintendo Switch",
            slug: "nintendo-switch",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 4585,
            image_background:
              "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg",
          },
          released_at: "2016-06-28",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2016-06-28",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7/10<br></li><li><strong>Processor:</strong> Dual Core<br></li><li><strong>Memory:</strong> 512 MB RAM<br></li><li><strong>Graphics:</strong> Supported<br></li><li><strong>Storage:</strong> 10 MB available space</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 3,
            name: "iOS",
            slug: "ios",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 72630,
            image_background:
              "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg",
          },
          released_at: "2016-06-28",
          requirements_en: {
            minimum:
              "iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen",
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
        { platform: { id: 4, name: "iOS", slug: "ios" } },
        { platform: { id: 7, name: "Nintendo", slug: "nintendo" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 3,
          name: "Adventure",
          slug: "adventure",
          games_count: 98194,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
        {
          id: 51,
          name: "Indie",
          slug: "indie",
          games_count: 40360,
          image_background:
            "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg",
        },
        {
          id: 7,
          name: "Puzzle",
          slug: "puzzle",
          games_count: 74757,
          image_background:
            "https://media.rawg.io/media/games/6fc/6fcb1c529c764700d55f3bbc1b0fbb5b.jpg",
        },
        {
          id: 83,
          name: "Platformer",
          slug: "platformer",
          games_count: 72876,
          image_background:
            "https://media.rawg.io/media/games/fc8/fc838d98c9b944e6a15176eabf40bee8.jpg",
        },
      ],
      stores: [
        {
          id: 355597,
          store: {
            id: 11,
            name: "Epic Games",
            slug: "epic-games",
            domain: "epicgames.com",
            games_count: 667,
            image_background:
              "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
          },
        },
        {
          id: 1489,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 8235,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
        {
          id: 10312,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 26855,
          store: {
            id: 5,
            name: "GOG",
            slug: "gog",
            domain: "gog.com",
            games_count: 3721,
            image_background:
              "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg",
          },
        },
        {
          id: 49146,
          store: {
            id: 6,
            name: "Nintendo Store",
            slug: "nintendo",
            domain: "nintendo.com",
            games_count: 8754,
            image_background:
              "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
          },
        },
        {
          id: 44734,
          store: {
            id: 4,
            name: "App Store",
            slug: "apple-appstore",
            domain: "apps.apple.com",
            games_count: 70993,
            image_background:
              "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 23660,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 10813,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 10982,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3171,
          image_background:
            "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 12001,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 32,
          name: "Sci-fi",
          slug: "sci-fi",
          language: "eng",
          games_count: 12100,
          image_background:
            "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
        },
        {
          id: 16,
          name: "Horror",
          slug: "horror",
          language: "eng",
          games_count: 26338,
          image_background:
            "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
        },
        {
          id: 15,
          name: "Stealth",
          slug: "stealth",
          language: "eng",
          games_count: 4291,
          image_background:
            "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
        },
        {
          id: 41,
          name: "Dark",
          slug: "dark",
          language: "eng",
          games_count: 8894,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 336,
          name: "controller support",
          slug: "controller-support",
          language: "eng",
          games_count: 294,
          image_background:
            "https://media.rawg.io/media/games/4cb/4cb855e8ef1578415a928e53c9f51867.png",
        },
        {
          id: 111,
          name: "Short",
          slug: "short",
          language: "eng",
          games_count: 33214,
          image_background:
            "https://media.rawg.io/media/games/b80/b80de593e66136f8a35c57960cc8fa3b.jpg",
        },
        {
          id: 117,
          name: "Mystery",
          slug: "mystery",
          language: "eng",
          games_count: 8146,
          image_background:
            "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg",
        },
        {
          id: 119,
          name: "Dystopian",
          slug: "dystopian",
          language: "eng",
          games_count: 1200,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 334,
          name: "achievements",
          slug: "achievements",
          language: "eng",
          games_count: 4771,
          image_background:
            "https://media.rawg.io/media/games/476/4767c380895fd35a4f1b59016dc45967.jpg",
        },
        {
          id: 83,
          name: "Puzzle-Platformer",
          slug: "puzzle-platformer",
          language: "eng",
          games_count: 7817,
          image_background:
            "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg",
        },
        {
          id: 116,
          name: "2.5D",
          slug: "25d",
          language: "eng",
          games_count: 677,
          image_background:
            "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg",
        },
        {
          id: 19728,
          name: "european",
          slug: "european",
          language: "eng",
          games_count: 11,
          image_background:
            "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
        },
        {
          id: 40844,
          name: "Oyun Kumandası Desteği",
          slug: "oyun-kumandas-destegi",
          language: "eng",
          games_count: 1,
          image_background:
            "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg",
        },
        {
          id: 40848,
          name: "Steam Başarımları",
          slug: "steam-basarmlar",
          language: "eng",
          games_count: 1,
          image_background:
            "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg",
        },
        {
          id: 40853,
          name: "Tek Oyunculu",
          slug: "tek-oyunculu",
          language: "eng",
          games_count: 1,
          image_background:
            "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg",
        },
      ],
      esrb_rating: { id: 3, name: "Teen", slug: "teen" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg",
        },
        {
          id: 12891,
          image:
            "https://media.rawg.io/media/screenshots/3a0/3a049846766e09f8883badea6538e736.jpg",
        },
        {
          id: 12892,
          image:
            "https://media.rawg.io/media/screenshots/b58/b58b50e9da6b409fd223912039c4cba7.jpg",
        },
        {
          id: 12896,
          image:
            "https://media.rawg.io/media/screenshots/7d0/7d07f39a90bc1ed2dea7186580b49c7a.jpg",
        },
        {
          id: 12899,
          image:
            "https://media.rawg.io/media/screenshots/411/4116e5d3ccdf2bdcf6e4ee4eedf7caa2.jpg",
        },
        {
          id: 12904,
          image:
            "https://media.rawg.io/media/screenshots/e6b/e6b8b49e33a11f4ae875d1ce5b236cc8.jpg",
        },
        {
          id: 12907,
          image:
            "https://media.rawg.io/media/screenshots/eb2/eb2b33954421291b98e2ae11fba72f7d.jpg",
        },
      ],
    },
    {
      id: 10989,
      slug: "paladins",
      name: "Paladins",
      released: "2016-09-15",
      tba: false,
      background_image:
        "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg",
      rating: 3.11,
      rating_top: 3,
      ratings: [
        { id: 3, title: "meh", count: 465, percent: 43.79 },
        { id: 4, title: "recommended", count: 373, percent: 35.12 },
        { id: 1, title: "skip", count: 177, percent: 16.67 },
        { id: 5, title: "exceptional", count: 47, percent: 4.43 },
      ],
      ratings_count: 1059,
      reviews_text_count: 2,
      added: 5834,
      added_by_status: {
        yet: 107,
        owned: 4762,
        beaten: 121,
        toplay: 21,
        dropped: 748,
        playing: 75,
      },
      metacritic: 78,
      playtime: 6,
      suggestions_count: 509,
      updated: "2019-09-17T03:10:43",
      user_game: null,
      reviews_count: 1062,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2016-09-15",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2016-09-15",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 7,
            name: "Nintendo Switch",
            slug: "nintendo-switch",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 4585,
            image_background:
              "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg",
          },
          released_at: "2016-09-15",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 81573,
            image_background:
              "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
          },
          released_at: "2016-09-15",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> OS X 10.10<br></li><li><strong>Processor:</strong> Core 2 Duo 2.4 GHz or Althon X2 2.7 GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> ATI or Nvidia graphics card with 512MB video ram or better and Shader Model 3.0+ support. (ATI Radeon 3870 or higher, Nvidia GeForce 8800 GT or higher)<br></li><li><strong>Storage:</strong> 10 GB available space<br></li><li><strong>Sound Card:</strong> DirectX compatible sound card</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> OS X 10.10<br></li><li><strong>Processor:</strong> Intel Core i5-750, 2.67 GHz / AMD Phenom II X4 965, 3.4 GHz<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce GTX 560 / AMD Radeon HD 6950 or better with 768 MB+ of VRAM (DirectX 11 Compatible)<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 10 GB available space<br></li><li><strong>Sound Card:</strong> DirectX compatible sound card</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2016-09-15",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows XP SP2, Windows Vista or Windows 7<br></li><li><strong>Processor:</strong> Core 2 Duo 2.4 GHz or Althon X2 2.7 GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> ATI or Nvidia graphics card with 512MB video ram or better and Shader Model 3.0+ support. (ATI Radeon 3870 or higher, Nvidia GeForce 8800 GT or higher)<br></li><li><strong>Storage:</strong> 10 GB available space<br></li><li><strong>Sound Card:</strong> DirectX compatible sound card</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> 64-bit: Vista, Win 7, Win 8, Win 10<br></li><li><strong>Processor:</strong> Intel Core i5-750, 2.67 GHz / AMD Phenom II X4 965, 3.4 GHz<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce GTX 560 / AMD Radeon HD 6950 or better with 768 MB+ of VRAM (DirectX 11 Compatible)<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 10 GB available space<br></li><li><strong>Sound Card:</strong> DirectX compatible sound card</li></ul>',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
        { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
        { platform: { id: 7, name: "Nintendo", slug: "nintendo" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 2,
          name: "Shooter",
          slug: "shooter",
          games_count: 44689,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
      ],
      stores: [
        {
          id: 25402,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 12048,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 25407,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
        {
          id: 48906,
          store: {
            id: 6,
            name: "Nintendo Store",
            slug: "nintendo",
            domain: "nintendo.com",
            games_count: 8754,
            image_background:
              "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 23660,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 27875,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7585,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 18,
          name: "Co-op",
          slug: "co-op",
          language: "eng",
          games_count: 7429,
          image_background:
            "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg",
        },
        {
          id: 411,
          name: "cooperative",
          slug: "cooperative",
          language: "eng",
          games_count: 3055,
          image_background:
            "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 16508,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 40845,
          name: "Partial Controller Support",
          slug: "partial-controller-support",
          language: "eng",
          games_count: 7768,
          image_background:
            "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
        },
        {
          id: 30,
          name: "FPS",
          slug: "fps",
          language: "eng",
          games_count: 8853,
          image_background:
            "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
        },
        {
          id: 4,
          name: "Funny",
          slug: "funny",
          language: "eng",
          games_count: 15753,
          image_background:
            "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg",
        },
        {
          id: 9,
          name: "Online Co-Op",
          slug: "online-co-op",
          language: "eng",
          games_count: 3056,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 64,
          name: "Fantasy",
          slug: "fantasy",
          language: "eng",
          games_count: 15967,
          image_background:
            "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg",
        },
        {
          id: 1,
          name: "Survival",
          slug: "survival",
          language: "eng",
          games_count: 5360,
          image_background:
            "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
        },
        {
          id: 79,
          name: "Free to Play",
          slug: "free-to-play",
          language: "eng",
          games_count: 4031,
          image_background:
            "https://media.rawg.io/media/games/11f/11fd681c312c14644ab360888dba3486.jpg",
        },
        {
          id: 397,
          name: "Online multiplayer",
          slug: "online-multiplayer",
          language: "eng",
          games_count: 3799,
          image_background:
            "https://media.rawg.io/media/games/1e5/1e5e33b88be978f451196a751424a72e.jpg",
        },
        {
          id: 134,
          name: "Anime",
          slug: "anime",
          language: "eng",
          games_count: 7199,
          image_background:
            "https://media.rawg.io/media/games/651/651ae84f2d5e36206aad90976a453329.jpg",
        },
        {
          id: 14,
          name: "Early Access",
          slug: "early-access",
          language: "eng",
          games_count: 8888,
          image_background:
            "https://media.rawg.io/media/games/11f/11fd681c312c14644ab360888dba3486.jpg",
        },
        {
          id: 157,
          name: "PvP",
          slug: "pvp",
          language: "eng",
          games_count: 4579,
          image_background:
            "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg",
        },
        {
          id: 40837,
          name: "In-App Purchases",
          slug: "in-app-purchases",
          language: "eng",
          games_count: 1499,
          image_background:
            "https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg",
        },
        {
          id: 11,
          name: "Team-Based",
          slug: "team-based",
          language: "eng",
          games_count: 835,
          image_background:
            "https://media.rawg.io/media/games/388/388935d851846f8ec747fffc7c765800.jpg",
        },
        {
          id: 120,
          name: "Memes",
          slug: "memes",
          language: "eng",
          games_count: 1210,
          image_background:
            "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg",
        },
        {
          id: 169,
          name: "MOBA",
          slug: "moba",
          language: "eng",
          games_count: 381,
          image_background:
            "https://media.rawg.io/media/screenshots/4e0/4e0ea16d3362361791100bcbd7a1bf1b.jpg",
        },
      ],
      esrb_rating: { id: 3, name: "Teen", slug: "teen" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg",
        },
        {
          id: 87723,
          image:
            "https://media.rawg.io/media/screenshots/014/014f87c62cbff3027ddcf9779f2ac18c.jpg",
        },
        {
          id: 87724,
          image:
            "https://media.rawg.io/media/screenshots/d48/d488374a06516f9e801ba067fb2469e8.jpg",
        },
        {
          id: 87725,
          image:
            "https://media.rawg.io/media/screenshots/43f/43f109d255699d139723b15bcf0e7d10.jpg",
        },
        {
          id: 87726,
          image:
            "https://media.rawg.io/media/screenshots/737/73717d42eba514f3231df9980206d350.jpg",
        },
        {
          id: 87727,
          image:
            "https://media.rawg.io/media/screenshots/dc6/dc6e1c1b47a3f53cdaa6bbab7dc8b1b5.jpg",
        },
        {
          id: 87728,
          image:
            "https://media.rawg.io/media/screenshots/0cc/0cc3a18b8fdaecfdfe9b6551c32e9297.jpg",
        },
      ],
    },
    {
      id: 2235,
      slug: "batman-arkham-origins",
      name: "Batman: Arkham Origins",
      released: "2013-10-16",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg",
      rating: 3.93,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 704, percent: 58.18 },
        { id: 5, title: "exceptional", count: 244, percent: 20.17 },
        { id: 3, title: "meh", count: 226, percent: 18.68 },
        { id: 1, title: "skip", count: 36, percent: 2.98 },
      ],
      ratings_count: 1200,
      reviews_text_count: 8,
      added: 5822,
      added_by_status: {
        yet: 328,
        owned: 3977,
        beaten: 1163,
        toplay: 133,
        dropped: 188,
        playing: 33,
      },
      metacritic: 74,
      playtime: 12,
      suggestions_count: 587,
      updated: "2021-03-09T15:42:53",
      user_game: null,
      reviews_count: 1210,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 21,
            name: "Android",
            slug: "android",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 42137,
            image_background:
              "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
          },
          released_at: "2013-10-16",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2013-10-16",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong>32-bit:  Vista, Win 7, Win 8<br>\t</li><li><strong>Processor:</strong>Intel Core 2 Duo, 2.4 GHz / AMD Athlon X2, 2.8 GHz<br>\t</li><li><strong>Memory:</strong>2 GB RAM<br>\t</li><li><strong>Graphics:</strong>NVIDIA GeForce 8800 GTS / AMD Radeon HD 3850 or better with 512 MB of VRAM<br>\t</li><li><strong>DirectX®:</strong>9.0c<br>        </li><li><strong>Hard Drive Space:</strong>20 GB<br>        </li><li><strong>Other Requirements:</strong>Broadband Internet connection<br>        </li><li><strong>Additional Notes:</strong>Windows XP and DirectX® 9.0b and below not supported</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong>64-bit: Vista, Win 7, Win 8<br>\t</li><li><strong>Processor:</strong>Intel Core i5-750, 2.67 GHz / AMD Phenom II X4 965, 3.4 GHz<br>\t</li><li><strong>Memory:</strong>4 GB RAM<br>\t</li><li><strong>Graphics:</strong>NVIDIA GeForce GTX 560 / AMD Radeon HD 6950 or better with 768 MB+ of VRAM (DirectX 11 Compatible)<br>\t</li><li><strong>DirectX®:</strong>11<br>        </li><li><strong>Hard Drive Space:</strong>20 GB<br>        </li><li><strong>Other Requirements:</strong>Broadband Internet connection<br>        </li><li><strong>Additional Notes:</strong>Windows XP and DirectX® 9.0b and below not supported</li></ul>',
          },
          requirements_ru: {
            minimum:
              "Win Vista 32\nDual-Core CPU 2.4 GHz\nGeForce 8800 GTS/Radeon HD 3850\n2 GB RAM\n15 GB HDD",
            recommended:
              "Win 7 64\nMulti-Core CPU 2.6 GHZ\nGeForce GTX 560/Radeon HD 6950\n4 GB\tRAM\n15 GB HDD",
          },
        },
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2732,
            image_background:
              "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
          },
          released_at: "2013-10-16",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3625,
            image_background:
              "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
          },
          released_at: "2013-10-16",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
        { platform: { id: 8, name: "Android", slug: "android" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 3,
          name: "Adventure",
          slug: "adventure",
          games_count: 98194,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
      ],
      stores: [
        {
          id: 2325,
          store: {
            id: 4,
            name: "App Store",
            slug: "apple-appstore",
            domain: "apps.apple.com",
            games_count: 70993,
            image_background:
              "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg",
          },
        },
        {
          id: 516727,
          store: {
            id: 5,
            name: "GOG",
            slug: "gog",
            domain: "gog.com",
            games_count: 3721,
            image_background:
              "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg",
          },
        },
        {
          id: 19293,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 4188,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 32010,
          store: {
            id: 6,
            name: "Nintendo Store",
            slug: "nintendo",
            domain: "nintendo.com",
            games_count: 8754,
            image_background:
              "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
          },
        },
        {
          id: 33900,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1911,
            image_background:
              "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
          },
        },
        {
          id: 42833,
          store: {
            id: 8,
            name: "Google Play",
            slug: "google-play",
            domain: "play.google.com",
            games_count: 16433,
            image_background:
              "https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 23660,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 27875,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7585,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 10813,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 10982,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 12001,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 36,
          name: "Open World",
          slug: "open-world",
          language: "eng",
          games_count: 4350,
          image_background:
            "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
        },
        {
          id: 149,
          name: "Third Person",
          slug: "third-person",
          language: "eng",
          games_count: 5478,
          image_background:
            "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        },
        {
          id: 40850,
          name: "Steam Leaderboards",
          slug: "steam-leaderboards",
          language: "eng",
          games_count: 4922,
          image_background:
            "https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg",
        },
        {
          id: 37,
          name: "Sandbox",
          slug: "sandbox",
          language: "eng",
          games_count: 4097,
          image_background:
            "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
        },
        {
          id: 15,
          name: "Stealth",
          slug: "stealth",
          language: "eng",
          games_count: 4291,
          image_background:
            "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
        },
        {
          id: 115,
          name: "Controller",
          slug: "controller",
          language: "eng",
          games_count: 6221,
          image_background:
            "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg",
        },
        {
          id: 150,
          name: "Third-Person Shooter",
          slug: "third-person-shooter",
          language: "eng",
          games_count: 1835,
          image_background:
            "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg",
        },
        {
          id: 69,
          name: "Action-Adventure",
          slug: "action-adventure",
          language: "eng",
          games_count: 9160,
          image_background:
            "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg",
        },
        {
          id: 203,
          name: "Beat 'em up",
          slug: "beat-em-up",
          language: "eng",
          games_count: 1949,
          image_background:
            "https://media.rawg.io/media/games/98d/98deaf99f06aa3d7e54e1fa69e4a9060.jpg",
        },
        {
          id: 133,
          name: "3D Vision",
          slug: "3d-vision",
          language: "eng",
          games_count: 303,
          image_background:
            "https://media.rawg.io/media/games/1ed/1edaaa9e24e0072772244633d01642f4.jpg",
        },
        {
          id: 142,
          name: "Detective",
          slug: "detective",
          language: "eng",
          games_count: 1727,
          image_background:
            "https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg",
        },
        {
          id: 268,
          name: "Comic Book",
          slug: "comic-book",
          language: "eng",
          games_count: 385,
          image_background:
            "https://media.rawg.io/media/screenshots/0cd/0cddbca1ecf96f944a218160c7cdead0.jpg",
        },
        {
          id: 234,
          name: "Superhero",
          slug: "superhero",
          language: "eng",
          games_count: 955,
          image_background:
            "https://media.rawg.io/media/screenshots/a8c/a8cd58ee985ab6d509370bddada91dbd.jpeg",
        },
        {
          id: 328,
          name: "Batman",
          slug: "batman",
          language: "eng",
          games_count: 36,
          image_background:
            "https://media.rawg.io/media/games/ce4/ce4b8dac56df7e0b20052033bf207372.jpg",
        },
      ],
      esrb_rating: { id: 3, name: "Teen", slug: "teen" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg",
        },
        {
          id: 158218,
          image:
            "https://media.rawg.io/media/screenshots/dc3/dc388c04293881ff771241a80b4c2261.jpg",
        },
        {
          id: 158219,
          image:
            "https://media.rawg.io/media/screenshots/ca9/ca9e389da140dad6aac3829f840da57a.jpg",
        },
        {
          id: 158220,
          image:
            "https://media.rawg.io/media/screenshots/e82/e82b3df1d687b0590643ad82d5a54fc9.jpg",
        },
        {
          id: 158221,
          image:
            "https://media.rawg.io/media/screenshots/04e/04e478ce59abed28b912d6b296378227.jpg",
        },
        {
          id: 158222,
          image:
            "https://media.rawg.io/media/screenshots/9e7/9e7cb59972f4b09f5bf9cf0d7c4fe4b1.jpg",
        },
        {
          id: 20214,
          image:
            "https://media.rawg.io/media/screenshots/0cb/0cb5067fa0e917050d5a84e0f6177f8f.jpeg",
        },
      ],
    },
    {
      id: 257201,
      slug: "jedi-the-fallen-order",
      name: "Star Wars Jedi: Fallen Order",
      released: "2019-11-15",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/559/559bc0768f656ad0c63c54b80a82d680.jpg",
      rating: 4.13,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 722, percent: 51.65 },
        { id: 5, title: "exceptional", count: 461, percent: 32.98 },
        { id: 3, title: "meh", count: 186, percent: 13.3 },
        { id: 1, title: "skip", count: 29, percent: 2.07 },
      ],
      ratings_count: 1357,
      reviews_text_count: 33,
      added: 5791,
      added_by_status: {
        yet: 264,
        owned: 3133,
        beaten: 1175,
        toplay: 788,
        dropped: 228,
        playing: 203,
      },
      metacritic: 80,
      playtime: 9,
      suggestions_count: 546,
      updated: "2020-06-07T15:09:05",
      user_game: null,
      reviews_count: 1398,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2019-11-15",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5109,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
          released_at: "2019-11-15",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 381914,
            image_background:
              "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
          },
          released_at: "2019-11-15",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> 64-bit Windows 7/8.1/10<br></li><li><strong>Processor:</strong> AMD FX-6100/Intel i3-3220 or Equivalent<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> AMD Radeon HD 7750/NVIDIA GeForce GTX 650 or Equivalent<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 55 GB available space</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> 64-bit Windows 7/8.1/10<br></li><li><strong>Processor:</strong> AMD Ryzen 7 1700/Intel  i7-6700K or Equivalent<br></li><li><strong>Memory:</strong> 16 GB RAM<br></li><li><strong>Graphics:</strong> AMD RX Vega 56/ Nvidia GTX 1070 or Equivalent<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 55 GB available space</li></ul>',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132593,
          image_background:
            "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
        },
        {
          id: 3,
          name: "Adventure",
          slug: "adventure",
          games_count: 98137,
          image_background:
            "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg",
        },
      ],
      stores: [
        {
          id: 380662,
          store: {
            id: 11,
            name: "Epic Games",
            slug: "epic-games",
            domain: "epicgames.com",
            games_count: 667,
            image_background:
              "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
          },
        },
        {
          id: 376301,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 310603,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 310604,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137183,
          image_background:
            "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17072,
          image_background:
            "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 10982,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 11996,
          image_background:
            "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
        },
        {
          id: 32,
          name: "Sci-fi",
          slug: "sci-fi",
          language: "eng",
          games_count: 12093,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 149,
          name: "Third Person",
          slug: "third-person",
          language: "eng",
          games_count: 5477,
          image_background:
            "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
        },
        {
          id: 49,
          name: "Difficult",
          slug: "difficult",
          language: "eng",
          games_count: 9574,
          image_background:
            "https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg",
        },
        {
          id: 6,
          name: "Exploration",
          slug: "exploration",
          language: "eng",
          games_count: 12660,
          image_background:
            "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
        },
        {
          id: 25,
          name: "Space",
          slug: "space",
          language: "eng",
          games_count: 31610,
          image_background:
            "https://media.rawg.io/media/games/9d5/9d5aa70db8c16566d79712df6417d13a.jpg",
        },
        {
          id: 68,
          name: "Hack and Slash",
          slug: "hack-and-slash",
          language: "eng",
          games_count: 2195,
          image_background:
            "https://media.rawg.io/media/games/569/569ea25d2b56bd05c7fa309ddabe81ff.jpg",
        },
        {
          id: 259,
          name: "Metroidvania",
          slug: "metroidvania",
          language: "eng",
          games_count: 2571,
          image_background:
            "https://media.rawg.io/media/games/f80/f805774c679cca1a1a472d9ac39c78b7.jpg",
        },
        {
          id: 478,
          name: "3rd-Person Perspective",
          slug: "3rd-person-perspective",
          language: "eng",
          games_count: 84,
          image_background:
            "https://media.rawg.io/media/games/053/053fc543bf488349610f1ae2d0c1b51b.jpg",
        },
        {
          id: 216,
          name: "Heist",
          slug: "heist",
          language: "eng",
          games_count: 293,
          image_background:
            "https://media.rawg.io/media/screenshots/bbf/bbf9db1fa0bb301ec051e243e86c05a1.jpg",
        },
        {
          id: 318,
          name: "Star Wars",
          slug: "star-wars",
          language: "eng",
          games_count: 52,
          image_background:
            "https://media.rawg.io/media/screenshots/6c3/6c3cea606428109394ef18fbf7f3d8b5.jpg",
        },
        {
          id: 580,
          name: "Souls-like",
          slug: "souls-like",
          language: "eng",
          games_count: 446,
          image_background:
            "https://media.rawg.io/media/games/a3e/a3ea71c18e81d54ebaf982dadb9a8738.jpg",
        },
        {
          id: 3459,
          name: "cinema",
          slug: "cinema",
          language: "eng",
          games_count: 28,
          image_background:
            "https://media.rawg.io/media/screenshots/61a/61af71bee695a25b20acfd77c37e6e61.jpg",
        },
        {
          id: 21400,
          name: "lightsaber",
          slug: "lightsaber",
          language: "eng",
          games_count: 8,
          image_background:
            "https://media.rawg.io/media/screenshots/4cc/4cc29d41d5a1b54a91e5214c889bab44.jpg",
        },
        {
          id: 503,
          name: "Singe-player",
          slug: "singe-player",
          language: "eng",
          games_count: 4,
          image_background:
            "https://media.rawg.io/media/screenshots/4d4/4d47759d7cfd5572f54f763845106e9e.jpg",
        },
      ],
      esrb_rating: { id: 3, name: "Teen", slug: "teen" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/559/559bc0768f656ad0c63c54b80a82d680.jpg",
        },
        {
          id: 1934861,
          image:
            "https://media.rawg.io/media/screenshots/1c0/1c0016ec0441e86648bd7f751c8e5adf.jpg",
        },
        {
          id: 1934862,
          image:
            "https://media.rawg.io/media/screenshots/4fd/4fd551e67bc9fd9eb4c855604838d10f.jpg",
        },
        {
          id: 1934863,
          image:
            "https://media.rawg.io/media/screenshots/dd6/dd69cc02ef3d56dabbe62f06ddea8569.jpg",
        },
        {
          id: 1934864,
          image:
            "https://media.rawg.io/media/screenshots/b2c/b2cdb1843349dd5db358a4b214a00f2c.jpg",
        },
        {
          id: 1934865,
          image:
            "https://media.rawg.io/media/screenshots/c60/c6065f618a7304016db7fa02d563084a_rSIdAmV.jpg",
        },
        {
          id: 1934866,
          image:
            "https://media.rawg.io/media/screenshots/99f/99f9710b7305817f44866b7a61b77dd0.jpg",
        },
      ],
    },
    {
      id: 3853,
      slug: "trine-2-complete-story",
      name: "Trine 2: Complete Story",
      released: "2013-06-05",
      tba: false,
      background_image:
        "https://media.rawg.io/media/screenshots/c97/c97b943741f5fbc936fe054d9d58851d.jpg",
      rating: 3.75,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 456, percent: 61.37 },
        { id: 3, title: "meh", count: 137, percent: 18.44 },
        { id: 5, title: "exceptional", count: 100, percent: 13.46 },
        { id: 1, title: "skip", count: 50, percent: 6.73 },
      ],
      ratings_count: 741,
      reviews_text_count: 2,
      added: 5790,
      added_by_status: {
        yet: 350,
        owned: 4706,
        beaten: 403,
        toplay: 76,
        dropped: 242,
        playing: 13,
      },
      metacritic: 84,
      playtime: 4,
      suggestions_count: 569,
      updated: "2019-10-21T19:00:36",
      user_game: null,
      reviews_count: 743,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2013-06-05",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 7,
            name: "Nintendo Switch",
            slug: "nintendo-switch",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 4585,
            image_background:
              "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg",
          },
          released_at: "2013-06-05",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2013-06-05",
          requirements_en: {
            minimum:
              '<ul class="bb_ul"><li><strong>OS:</strong> Windows 8 / 7 / Vista / XP<br>\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Processor:</strong> 2.0 GHz CPU (Dual Core recommended) <br>\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1 GB<br>\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 4.5 GB \t<br>\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> ATi Radeon HD 2400 or NVIDIA GeForce 7600 or better (Shader Model 3.0 needs to be supported)<br>\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>DirectX®:</strong> 9.0c<br>\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Sound:</strong> DirectX 9.0c compatible <br>\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Additional:</strong> *Please note that Trine 2 may not run on most Intel graphics solutions used in 2004-2009. The game does run on new (2010-) Intel HD Graphics 3000 or better.</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 58229,
            image_background:
              "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
          },
          released_at: "2013-06-05",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Ubuntu 12.04 LTS<br>\t</li><li><strong>Processor:</strong> 2.2 GHz CPU<br>\t</li><li><strong>Memory:</strong> 1 GB<br>\t</li><li><strong>Graphics:</strong> ATI Radeon HD 2400 or NVIDIA GeForce 7600 or better<br>\t</li><li><strong>Hard Drive:</strong> 4.0 GB<br>\t</li><li><strong>OpenGL:</strong> 2.1</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Ubuntu 12.04 LTS<br>\t</li><li><strong>Processor:</strong> 2.2 GHz CPU<br>\t</li><li><strong>Memory:</strong> 1 GB<br>\t</li><li><strong>Graphics:</strong> ATI Radeon HD 2400 or NVIDIA GeForce 7600 or better (OpenGL 2.1 needs to be supported)<br>\t</li><li><strong>Hard Drive:</strong> 4.0 GB<br>\t</li><li><strong>OpenGL:</strong> 2.1<br>\t</li><li><strong>Additional:</strong> Trine 2 runs best with proprietary drivers and may not function correctly with open source drivers.</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 81573,
            image_background:
              "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
          },
          released_at: "2013-06-05",
          requirements_en: {
            minimum:
              '<ul class="bb_ul"><li><strong>OS:</strong> OS X version Lion 10.7, or later.<br>\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Processor:</strong> Intel Mac<br>\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1 GB RAM<br>\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 4.0 GB\t<br>\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> NVIDIA GeForce 8600M or better / ATi Radeon 2400 or better*<br><br>\t\t\t\t\t\t\t\t\t\t\t*NOTE: Please be advised that Trine 2 does not run on Intel graphics solutions used in 2006-2008. The game does run on new (2010-) Intel HD Graphics 3000 or better. Macs with NVIDIA GeForce 9400M or ATi Radeon X1600 may not achieve smooth gameplay.<br>\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Additional:</strong> Keyboard, Mouse/Trackpad with Secondary click enabled<br>\t\t\t\t\t\t\t\t\t\t\t</li></ul>',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
        { platform: { id: 6, name: "Linux", slug: "linux" } },
        { platform: { id: 7, name: "Nintendo", slug: "nintendo" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 51,
          name: "Indie",
          slug: "indie",
          games_count: 40360,
          image_background:
            "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg",
        },
        {
          id: 7,
          name: "Puzzle",
          slug: "puzzle",
          games_count: 74757,
          image_background:
            "https://media.rawg.io/media/games/6fc/6fcb1c529c764700d55f3bbc1b0fbb5b.jpg",
        },
        {
          id: 83,
          name: "Platformer",
          slug: "platformer",
          games_count: 72876,
          image_background:
            "https://media.rawg.io/media/games/fc8/fc838d98c9b944e6a15176eabf40bee8.jpg",
        },
      ],
      stores: [
        {
          id: 4166,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 16177,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 26123,
          store: {
            id: 5,
            name: "GOG",
            slug: "gog",
            domain: "gog.com",
            games_count: 3721,
            image_background:
              "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg",
          },
        },
        {
          id: 294050,
          store: {
            id: 6,
            name: "Nintendo Store",
            slug: "nintendo",
            domain: "nintendo.com",
            games_count: 8754,
            image_background:
              "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 23660,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 27875,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7585,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 10813,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 10982,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3171,
          image_background:
            "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        },
        {
          id: 24,
          name: "RPG",
          slug: "rpg",
          language: "eng",
          games_count: 12977,
          image_background:
            "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        },
        {
          id: 18,
          name: "Co-op",
          slug: "co-op",
          language: "eng",
          games_count: 7429,
          image_background:
            "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg",
        },
        {
          id: 411,
          name: "cooperative",
          slug: "cooperative",
          language: "eng",
          games_count: 3055,
          image_background:
            "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
        },
        {
          id: 45,
          name: "2D",
          slug: "2d",
          language: "eng",
          games_count: 134902,
          image_background:
            "https://media.rawg.io/media/games/8ca/8ca40b562a755d6a0e30d48e6c74b178.jpg",
        },
        {
          id: 9,
          name: "Online Co-Op",
          slug: "online-co-op",
          language: "eng",
          games_count: 3056,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 64,
          name: "Fantasy",
          slug: "fantasy",
          language: "eng",
          games_count: 15967,
          image_background:
            "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg",
        },
        {
          id: 75,
          name: "Local Co-Op",
          slug: "local-co-op",
          language: "eng",
          games_count: 4134,
          image_background:
            "https://media.rawg.io/media/games/9c4/9c4aa07294013802f25fb7386b28512e.jpg",
        },
        {
          id: 198,
          name: "Split Screen",
          slug: "split-screen",
          language: "eng",
          games_count: 4445,
          image_background:
            "https://media.rawg.io/media/games/07a/07a74470a2618fd71945db0619602baf.jpg",
        },
        {
          id: 72,
          name: "Local Multiplayer",
          slug: "local-multiplayer",
          language: "eng",
          games_count: 10390,
          image_background:
            "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg",
        },
        {
          id: 40852,
          name: "Steam Workshop",
          slug: "steam-workshop",
          language: "eng",
          games_count: 1144,
          image_background:
            "https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg",
        },
        {
          id: 40838,
          name: "Includes level editor",
          slug: "includes-level-editor",
          language: "eng",
          games_count: 1425,
          image_background:
            "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        },
        {
          id: 40832,
          name: "Cross-Platform Multiplayer",
          slug: "cross-platform-multiplayer",
          language: "eng",
          games_count: 1807,
          image_background:
            "https://media.rawg.io/media/games/a77/a7773acbce8720869fcb61d7a1e5c88f.jpg",
        },
        {
          id: 336,
          name: "controller support",
          slug: "controller-support",
          language: "eng",
          games_count: 294,
          image_background:
            "https://media.rawg.io/media/games/4cb/4cb855e8ef1578415a928e53c9f51867.png",
        },
        {
          id: 114,
          name: "Physics",
          slug: "physics",
          language: "eng",
          games_count: 14045,
          image_background:
            "https://media.rawg.io/media/screenshots/dc2/dc2814dc50d61be1ea4fcd5d3c03ddb6.jpg",
        },
        {
          id: 66,
          name: "Medieval",
          slug: "medieval",
          language: "eng",
          games_count: 3426,
          image_background:
            "https://media.rawg.io/media/games/934/934db575e66d63f2a6e86a2c688c141b.jpeg",
        },
        {
          id: 133,
          name: "3D Vision",
          slug: "3d-vision",
          language: "eng",
          games_count: 303,
          image_background:
            "https://media.rawg.io/media/games/1ed/1edaaa9e24e0072772244633d01642f4.jpg",
        },
      ],
      esrb_rating: null,
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/screenshots/c97/c97b943741f5fbc936fe054d9d58851d.jpg",
        },
        {
          id: 32768,
          image:
            "https://media.rawg.io/media/screenshots/53f/53fa1f6c3c22cbf8b634562bc64bc5da.jpg",
        },
        {
          id: 32769,
          image:
            "https://media.rawg.io/media/screenshots/3d7/3d7e3c5d3ffc76f9f1b9c838b1f76f80.jpg",
        },
        {
          id: 32770,
          image:
            "https://media.rawg.io/media/screenshots/5b1/5b1855e5692c14ab600f45817d8b9331.jpg",
        },
        {
          id: 32771,
          image:
            "https://media.rawg.io/media/screenshots/b10/b105738e3208e8ca17707576acf36100.jpg",
        },
        {
          id: 32772,
          image:
            "https://media.rawg.io/media/screenshots/f64/f64412d0dcbbd50aabcc7f5ee6c66fa7.jpg",
        },
        {
          id: 32773,
          image:
            "https://media.rawg.io/media/screenshots/0ba/0ba9b6a2d5aa4247850c028fb2c85107.jpg",
        },
      ],
    },
    {
      id: 1682,
      slug: "the-wolf-among-us",
      name: "The Wolf Among Us",
      released: "2013-10-10",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg",
      rating: 4.36,
      rating_top: 5,
      ratings: [
        { id: 5, title: "exceptional", count: 839, percent: 51.31 },
        { id: 4, title: "recommended", count: 644, percent: 39.39 },
        { id: 3, title: "meh", count: 102, percent: 6.24 },
        { id: 1, title: "skip", count: 50, percent: 3.06 },
      ],
      ratings_count: 1623,
      reviews_text_count: 9,
      added: 5781,
      added_by_status: {
        yet: 278,
        owned: 3481,
        beaten: 1653,
        toplay: 170,
        dropped: 157,
        playing: 42,
      },
      metacritic: 82,
      playtime: 9,
      suggestions_count: 559,
      updated: "2021-05-06T17:44:17",
      user_game: null,
      reviews_count: 1635,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 19,
            name: "PS Vita",
            slug: "ps-vita",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 1938,
            image_background:
              "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
          },
          released_at: "2013-10-10",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2013-10-10",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2013-10-10",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 3,
            name: "iOS",
            slug: "ios",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 72630,
            image_background:
              "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg",
          },
          released_at: "2013-10-10",
          requirements_en: {
            minimum:
              "iPhone 3G S, iPhone 4, iPod Touch Fourth Gen, iPad 2 Wifi, iPad 2 3G, iPhone 4S, iPad Third Gen, iPad Third Gen 4G, iPhone 5, iPod Touch Fifth Gen, iPad Fourth Gen, iPad Fourth Gen 4G, iPad Mini, iPad Mini 4G, iPhone 5c, iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8,  Watch 4, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen",
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2013-10-10",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows XP Service Pack 3<br></li><li><strong>Processor:</strong> Core 2 Duo 2GHz or equivalent<br></li><li><strong>Memory:</strong> 3 GB RAM<br></li><li><strong>Graphics:</strong> ATI or NVidia card w/ 512 MB RAM<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 2 GB available space<br></li><li><strong>Sound Card:</strong> Direct X 9.0c sound device<br></li><li><strong>Additional Notes:</strong> Not recommended for Intel integrated graphics</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7<br></li><li><strong>Processor:</strong> Core 2 Duo 2.3 Ghz or equivalent<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> ATI or NVidia card w/ 1024 MB RAM<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 2 GB available space<br></li><li><strong>Sound Card:</strong> Direct X 9.0c sound device<br></li><li><strong>Additional Notes:</strong> Not recommended for Intel integrated graphics</li></ul>',
          },
          requirements_ru: {
            minimum:
              "Win Xp 32,Pentium 4 2.0GHz/Athlon XP 1700+,GeForce 205,3 GB RAM,2GB HDD",
            recommended:
              "Win Xp 32,Core 2 Duo E4600 2.4GHz/Athlon 5050e,GeForce GT 130/Radeon HD 4650,3 GB RAM,2GB HDD",
          },
        },
        {
          platform: {
            id: 21,
            name: "Android",
            slug: "android",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 42137,
            image_background:
              "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
          },
          released_at: "2013-10-10",
          requirements_en: { minimum: "2.3.3 and up" },
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2732,
            image_background:
              "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
          },
          released_at: "2013-10-10",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 81573,
            image_background:
              "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
          },
          released_at: "2013-10-10",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Snow Leopard (10.6.X)<br></li><li><strong>Processor:</strong> 2.3 Ghz Intel<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> 512 MB NVidia or ATI graphics card<br></li><li><strong>Storage:</strong> 2 GB available space<br></li><li><strong>Additional Notes:</strong> Not recommended for Intel integrated graphics or Mac Minis or early-generation MacBook</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Snow Leopard (10.6.X)<br></li><li><strong>Processor:</strong> Core 2 Duo 2GHz<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> 1024 MB NVidia or ATI graphics card<br></li><li><strong>Storage:</strong> 2 GB available space<br></li><li><strong>Additional Notes:</strong> Not recommended for Intel integrated graphics or Mac Minis or early-generation MacBooks</li></ul>',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
        { platform: { id: 4, name: "iOS", slug: "ios" } },
        { platform: { id: 8, name: "Android", slug: "android" } },
        { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
      ],
      genres: [
        {
          id: 3,
          name: "Adventure",
          slug: "adventure",
          games_count: 98194,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
      ],
      stores: [
        {
          id: 593117,
          store: {
            id: 11,
            name: "Epic Games",
            slug: "epic-games",
            domain: "epicgames.com",
            games_count: 667,
            image_background:
              "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
          },
        },
        {
          id: 3799,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 20080,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 26435,
          store: {
            id: 5,
            name: "GOG",
            slug: "gog",
            domain: "gog.com",
            games_count: 3721,
            image_background:
              "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg",
          },
        },
        {
          id: 33890,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1911,
            image_background:
              "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
          },
        },
        {
          id: 40251,
          store: {
            id: 8,
            name: "Google Play",
            slug: "google-play",
            domain: "play.google.com",
            games_count: 16433,
            image_background:
              "https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg",
          },
        },
        {
          id: 7167,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
        {
          id: 1738,
          store: {
            id: 4,
            name: "App Store",
            slug: "apple-appstore",
            domain: "apps.apple.com",
            games_count: 70993,
            image_background:
              "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 10982,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3171,
          image_background:
            "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 12001,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 64,
          name: "Fantasy",
          slug: "fantasy",
          language: "eng",
          games_count: 15967,
          image_background:
            "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg",
        },
        {
          id: 41,
          name: "Dark",
          slug: "dark",
          language: "eng",
          games_count: 8894,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 141,
          name: "Point & Click",
          slug: "point-click",
          language: "eng",
          games_count: 8090,
          image_background:
            "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        },
        {
          id: 44,
          name: "Nudity",
          slug: "nudity",
          language: "eng",
          games_count: 3029,
          image_background:
            "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
        },
        {
          id: 336,
          name: "controller support",
          slug: "controller-support",
          language: "eng",
          games_count: 294,
          image_background:
            "https://media.rawg.io/media/games/4cb/4cb855e8ef1578415a928e53c9f51867.png",
        },
        {
          id: 117,
          name: "Mystery",
          slug: "mystery",
          language: "eng",
          games_count: 8146,
          image_background:
            "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg",
        },
        {
          id: 192,
          name: "Mature",
          slug: "mature",
          language: "eng",
          games_count: 1120,
          image_background:
            "https://media.rawg.io/media/games/f14/f1422eacab98c5f85a5123da4e9d9e89.jpg",
        },
        {
          id: 110,
          name: "Cinematic",
          slug: "cinematic",
          language: "eng",
          games_count: 655,
          image_background:
            "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg",
        },
        {
          id: 142,
          name: "Detective",
          slug: "detective",
          language: "eng",
          games_count: 1727,
          image_background:
            "https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg",
        },
        {
          id: 232,
          name: "Episodic",
          slug: "episodic",
          language: "eng",
          games_count: 380,
          image_background:
            "https://media.rawg.io/media/games/34e/34ecf9a17fbd9344b0bd8f044ca3f277.jpg",
        },
        {
          id: 268,
          name: "Comic Book",
          slug: "comic-book",
          language: "eng",
          games_count: 385,
          image_background:
            "https://media.rawg.io/media/screenshots/0cd/0cddbca1ecf96f944a218160c7cdead0.jpg",
        },
        {
          id: 269,
          name: "Quick-Time Events",
          slug: "quick-time-events",
          language: "eng",
          games_count: 185,
          image_background:
            "https://media.rawg.io/media/games/264/2642b17a7885f7abc4fd018e98943242.jpg",
        },
        {
          id: 164,
          name: "Cartoony",
          slug: "cartoony",
          language: "eng",
          games_count: 1794,
          image_background:
            "https://media.rawg.io/media/games/725/725eb4171c8aacee030a2d050ebf9fad.jpg",
        },
        {
          id: 222,
          name: "Choose Your Own Adventure",
          slug: "choose-your-own-adventure",
          language: "eng",
          games_count: 961,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0c82a355ccf7c9d192de0c4f983af8.jpg",
        },
        {
          id: 289,
          name: "Noir",
          slug: "noir",
          language: "eng",
          games_count: 764,
          image_background:
            "https://media.rawg.io/media/screenshots/5fa/5fa1bb27fe896a4a7872d72d0d41be96.jpg",
        },
      ],
      esrb_rating: { id: 4, name: "Mature", slug: "mature" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg",
        },
        {
          id: 31577,
          image:
            "https://media.rawg.io/media/screenshots/de9/de9542857c18a8021aaeb6150c13fed0.jpg",
        },
        {
          id: 31578,
          image:
            "https://media.rawg.io/media/screenshots/e24/e24e0d5e604b3746e60e89d2450c8c26.jpg",
        },
        {
          id: 31579,
          image:
            "https://media.rawg.io/media/screenshots/e97/e972f959ca6fd2a10c8775cbe21ac16c.jpg",
        },
        {
          id: 31580,
          image:
            "https://media.rawg.io/media/screenshots/3f9/3f9cceba2f198128b92b1c4ad2eee438.jpg",
        },
        {
          id: 31581,
          image:
            "https://media.rawg.io/media/screenshots/b8e/b8ec355a1260f9d882394ce0350a5d2a.jpg",
        },
        {
          id: 31582,
          image:
            "https://media.rawg.io/media/screenshots/40f/40f741b69448c6c4a73215a47e8d3b95.jpg",
        },
      ],
    },
    {
      id: 15002,
      slug: "the-stanley-parable",
      name: "The Stanley Parable",
      released: "2013-10-17",
      tba: false,
      background_image:
        "https://media.rawg.io/media/screenshots/8f0/8f0b94922ad5e59968852649697b2643.jpg",
      rating: 4.38,
      rating_top: 5,
      ratings: [
        { id: 5, title: "exceptional", count: 877, percent: 54.88 },
        { id: 4, title: "recommended", count: 547, percent: 34.23 },
        { id: 3, title: "meh", count: 126, percent: 7.88 },
        { id: 1, title: "skip", count: 48, percent: 3.0 },
      ],
      ratings_count: 1586,
      reviews_text_count: 9,
      added: 5777,
      added_by_status: {
        yet: 222,
        owned: 3582,
        beaten: 1629,
        toplay: 175,
        dropped: 146,
        playing: 23,
      },
      metacritic: 88,
      playtime: 3,
      suggestions_count: 187,
      updated: "2020-03-12T17:44:32",
      user_game: null,
      reviews_count: 1598,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2013-10-17",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows XP/Vista/7/8<br></li><li><strong>Processor:</strong> 3.0 GHz P4, Dual Core 2.0 (or higher) or AMD64X2 (or higher)<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card must be 128 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 2.0b (ATI Radeon X800 or higher / NVIDIA GeForce 7600 or higher / Intel HD Graphics 2000 or higher - *NOT* an Express graphics card).<br></li><li><strong>Storage:</strong> 3 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible</li></ul>',
          },
          requirements_ru: {
            minimum:
              "Win Xp 32\nCPU 3.0GHz\nGeForce 7600 GS/Radeon X800 GT\n2 GB RAM\n3 GB HDD",
            recommended:
              "Win 7 64\nDual-Core CPU 3.0GHz\nGeForce GT 545/Radeon HD 5670\n2 GB RAM\n3 GB HDD",
          },
        },
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 81573,
            image_background:
              "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
          },
          released_at: "2013-10-17",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> <a href="http://store.steampowered.com/app/221910#game_area_sys_req_full" target="_blank" rel="noreferrer"  ><u>Mac OS X 10.8 or higher required</u></a><br></li><li><strong>Processor:</strong> 3.0 GHz P4, Dual Core 2.0 (or higher) or AMD64X2 (or higher)<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> ATI Radeon 2400 or higher / NVIDIA 8600M or higher</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 58229,
            image_background:
              "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
          },
          released_at: "2013-10-17",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Ubuntu 12.04<br></li><li><strong>Processor:</strong> Dual core from Intel or AMD at 2.8 GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> nVidia GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600 (Graphic Drivers: nVidia 310, AMD 12.11), OpenGL 2.1<br></li><li><strong>Storage:</strong> 4 GB available space<br></li><li><strong>Sound Card:</strong> OpenAL Compatible Sound Card</li></ul>',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
        { platform: { id: 6, name: "Linux", slug: "linux" } },
      ],
      genres: [
        {
          id: 3,
          name: "Adventure",
          slug: "adventure",
          games_count: 98194,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
        {
          id: 51,
          name: "Indie",
          slug: "indie",
          games_count: 40360,
          image_background:
            "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg",
        },
      ],
      stores: [
        {
          id: 409019,
          store: {
            id: 11,
            name: "Epic Games",
            slug: "epic-games",
            domain: "epicgames.com",
            games_count: 667,
            image_background:
              "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
          },
        },
        {
          id: 16533,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 10982,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 12001,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 16508,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 4,
          name: "Funny",
          slug: "funny",
          language: "eng",
          games_count: 15753,
          image_background:
            "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg",
        },
        {
          id: 123,
          name: "Comedy",
          slug: "comedy",
          language: "eng",
          games_count: 7515,
          image_background:
            "https://media.rawg.io/media/screenshots/8f0/8f0b94922ad5e59968852649697b2643.jpg",
        },
        {
          id: 6,
          name: "Exploration",
          slug: "exploration",
          language: "eng",
          games_count: 12671,
          image_background:
            "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
        },
        {
          id: 111,
          name: "Short",
          slug: "short",
          language: "eng",
          games_count: 33214,
          image_background:
            "https://media.rawg.io/media/games/b80/b80de593e66136f8a35c57960cc8fa3b.jpg",
        },
        {
          id: 40833,
          name: "Captions available",
          slug: "captions-available",
          language: "eng",
          games_count: 1084,
          image_background:
            "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
        },
        {
          id: 145,
          name: "Choices Matter",
          slug: "choices-matter",
          language: "eng",
          games_count: 1626,
          image_background:
            "https://media.rawg.io/media/games/c81/c812e158129e00c9b0f096ae8a0bb7d6.jpg",
        },
        {
          id: 91,
          name: "Walking Simulator",
          slug: "walking-simulator",
          language: "eng",
          games_count: 4545,
          image_background:
            "https://media.rawg.io/media/games/639/639ce7d7fecbb9f0717e9fbc1180f8f8.jpg",
        },
        {
          id: 218,
          name: "Multiple Endings",
          slug: "multiple-endings",
          language: "eng",
          games_count: 4079,
          image_background:
            "https://media.rawg.io/media/games/7ba/7baf4663962bad7197e2470d59a6e322.jpg",
        },
        {
          id: 46,
          name: "Surreal",
          slug: "surreal",
          language: "eng",
          games_count: 3182,
          image_background:
            "https://media.rawg.io/media/screenshots/1ef/1ef455141543c9e27ef0856a68a52b48.jpg",
        },
        {
          id: 200,
          name: "Narration",
          slug: "narration",
          language: "eng",
          games_count: 813,
          image_background:
            "https://media.rawg.io/media/screenshots/76a/76a4511b693e10e282463b5904a2f450.jpg",
        },
        {
          id: 285,
          name: "Psychological",
          slug: "psychological",
          language: "eng",
          games_count: 627,
          image_background:
            "https://media.rawg.io/media/screenshots/18b/18b47446f242904662beb3c6efe6b33d.jpg",
        },
        {
          id: 153,
          name: "Satire",
          slug: "satire",
          language: "eng",
          games_count: 850,
          image_background:
            "https://media.rawg.io/media/screenshots/b61/b610448b44cc29cde70345092bcd4cdf.jpg",
        },
        {
          id: 309,
          name: "Dynamic Narration",
          slug: "dynamic-narration",
          language: "eng",
          games_count: 134,
          image_background:
            "https://media.rawg.io/media/screenshots/711/7119853fce71c435ad96898f2698dc0f.jpg",
        },
      ],
      esrb_rating: null,
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/screenshots/8f0/8f0b94922ad5e59968852649697b2643.jpg",
        },
        {
          id: 131805,
          image:
            "https://media.rawg.io/media/screenshots/1c8/1c8d3926c83674020830ad74c9dab0cf.jpg",
        },
        {
          id: 131806,
          image:
            "https://media.rawg.io/media/screenshots/e30/e3038541ff49b1fb1611160f8939fa68.jpg",
        },
        {
          id: 131807,
          image:
            "https://media.rawg.io/media/screenshots/033/033bd132868e1876c24d39016dd20771.jpg",
        },
        {
          id: 131808,
          image:
            "https://media.rawg.io/media/screenshots/214/21469106b5a6e8a07679c98e0c75867f.jpg",
        },
        {
          id: 131809,
          image:
            "https://media.rawg.io/media/screenshots/7e8/7e81831cb05b80ebeefb61f20c6120fb.jpg",
        },
        {
          id: 131810,
          image:
            "https://media.rawg.io/media/screenshots/0d7/0d744206035632e141640eb7d5c6b694.jpg",
        },
      ],
    },
    {
      id: 480,
      slug: "resident-evil-7-biohazard",
      name: "Resident Evil 7: Biohazard",
      released: "2017-01-23",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg",
      rating: 4.33,
      rating_top: 5,
      ratings: [
        { id: 5, title: "exceptional", count: 676, percent: 50.41 },
        { id: 4, title: "recommended", count: 527, percent: 39.3 },
        { id: 3, title: "meh", count: 91, percent: 6.79 },
        { id: 1, title: "skip", count: 47, percent: 3.5 },
      ],
      ratings_count: 1326,
      reviews_text_count: 9,
      added: 5756,
      added_by_status: {
        yet: 276,
        owned: 3753,
        beaten: 1134,
        toplay: 288,
        dropped: 192,
        playing: 113,
      },
      metacritic: 85,
      playtime: 10,
      suggestions_count: 284,
      updated: "2019-09-25T03:39:46",
      user_game: null,
      reviews_count: 1341,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2017-01-23",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2017-01-23",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2017-01-23",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 2,
          name: "Shooter",
          slug: "shooter",
          games_count: 44689,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 3,
          name: "Adventure",
          slug: "adventure",
          games_count: 98194,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
      ],
      stores: [
        {
          id: 484,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 9252,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
        {
          id: 48787,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 23660,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 27875,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7585,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 10813,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 10982,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 12001,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 16508,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 16,
          name: "Horror",
          slug: "horror",
          language: "eng",
          games_count: 26338,
          image_background:
            "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
        },
        {
          id: 30,
          name: "FPS",
          slug: "fps",
          language: "eng",
          games_count: 8853,
          image_background:
            "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
        },
        {
          id: 193,
          name: "Classic",
          slug: "classic",
          language: "eng",
          games_count: 1613,
          image_background:
            "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg",
        },
        {
          id: 26,
          name: "Gore",
          slug: "gore",
          language: "eng",
          games_count: 4079,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        {
          id: 1,
          name: "Survival",
          slug: "survival",
          language: "eng",
          games_count: 5360,
          image_background:
            "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
        },
        {
          id: 6,
          name: "Exploration",
          slug: "exploration",
          language: "eng",
          games_count: 12671,
          image_background:
            "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
        },
        {
          id: 34,
          name: "Violent",
          slug: "violent",
          language: "eng",
          games_count: 4807,
          image_background:
            "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg",
        },
        {
          id: 63,
          name: "Zombies",
          slug: "zombies",
          language: "eng",
          games_count: 7611,
          image_background:
            "https://media.rawg.io/media/games/f14/f1422eacab98c5f85a5123da4e9d9e89.jpg",
        },
        {
          id: 69,
          name: "Action-Adventure",
          slug: "action-adventure",
          language: "eng",
          games_count: 9160,
          image_background:
            "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg",
        },
        {
          id: 17,
          name: "Survival Horror",
          slug: "survival-horror",
          language: "eng",
          games_count: 5053,
          image_background:
            "https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg",
        },
        {
          id: 120,
          name: "Memes",
          slug: "memes",
          language: "eng",
          games_count: 1210,
          image_background:
            "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg",
        },
        {
          id: 110,
          name: "Cinematic",
          slug: "cinematic",
          language: "eng",
          games_count: 655,
          image_background:
            "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg",
        },
        {
          id: 33,
          name: "VR",
          slug: "vr",
          language: "eng",
          games_count: 9460,
          image_background:
            "https://media.rawg.io/media/screenshots/0cf/0cfe4ec4dcffb8fcac999d7176c69176.jpg",
        },
        {
          id: 142,
          name: "Detective",
          slug: "detective",
          language: "eng",
          games_count: 1727,
          image_background:
            "https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg",
        },
        {
          id: 78,
          name: "America",
          slug: "america",
          language: "eng",
          games_count: 243,
          image_background:
            "https://media.rawg.io/media/games/9c5/9c5bc0b6e67102bc96dcf1ba41509e42.jpg",
        },
      ],
      esrb_rating: { id: 4, name: "Mature", slug: "mature" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg",
        },
        {
          id: 4123,
          image:
            "https://media.rawg.io/media/screenshots/9c7/9c7016a1d1a8f66d67266e35452a3cf4.jpg",
        },
        {
          id: 4126,
          image:
            "https://media.rawg.io/media/screenshots/315/3152c8a5165faaefc5429ab54399e3a6.jpg",
        },
        {
          id: 4127,
          image:
            "https://media.rawg.io/media/screenshots/753/753c32daa8a2685f6aecc052e85197f7.jpg",
        },
        {
          id: 4128,
          image:
            "https://media.rawg.io/media/screenshots/3f9/3f916c888d9e135adb456399550fd03e.jpg",
        },
        {
          id: 59869,
          image:
            "https://media.rawg.io/media/screenshots/9bd/9bd7368147200c3e1e615950c4f3fc73.jpg",
        },
        {
          id: 59874,
          image:
            "https://media.rawg.io/media/screenshots/804/804d33ab33db680543a6df814c15c8e3.jpg",
        },
      ],
    },
    {
      id: 10340,
      slug: "crusader-kings-ii",
      name: "Crusader Kings II",
      released: "2012-02-14",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/c22/c22d804ac753c72f2617b3708a625dec.jpg",
      rating: 3.58,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 193, percent: 32.38 },
        { id: 5, title: "exceptional", count: 180, percent: 30.2 },
        { id: 3, title: "meh", count: 118, percent: 19.8 },
        { id: 1, title: "skip", count: 105, percent: 17.62 },
      ],
      ratings_count: 592,
      reviews_text_count: 2,
      added: 5713,
      added_by_status: {
        yet: 419,
        owned: 4816,
        beaten: 115,
        toplay: 40,
        dropped: 253,
        playing: 70,
      },
      metacritic: 82,
      playtime: 3,
      suggestions_count: 521,
      updated: "2019-09-17T03:11:01",
      user_game: null,
      reviews_count: 596,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2012-02-14",
          requirements_en: {
            minimum:
              '<ul class="bb_ul"><li><strong>OS:</strong> Windows 7<br></li><li><strong>Processor:</strong> Intel® Pentium® IV 2.4 GHz or AMD 3500+<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Hard Disk Space:</strong> 2 GB<br></li><li><strong>Video Card:</strong> NVIDIA® GeForce 8800 or ATI Radeon® X1900, 512mb graphics memory required.<br></li><li><strong>DirectX®:</strong> 9.0c<br></li><li><strong>Sound:</strong> Direct X-compatible sound card<br></li><li><strong>Additional:</strong> 3-button mouse and keyboard</li></ul>',
          },
          requirements_ru: {
            minimum:
              "Pentium 4/Athlon XP 2 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,2 Гб на винчестере",
            recommended:
              "Pentium 4/Athlon 64 3 ГГц,1 Гб памяти,3D-ускоритель со 128 Мб памяти,2 Гб на винчестере",
          },
        },
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 81573,
            image_background:
              "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
          },
          released_at: "2012-02-14",
          requirements_en: {
            minimum:
              '<ul class="bb_ul"><li><strong>OS:</strong> Mac OS X 10.6.8 or later<br>\t</li><li><strong>Processor:</strong> Intel Core Duo Processor (2GHz or better)<br>\t</li><li><strong>Memory:</strong> 2 GB RAM<br>\t</li><li><strong>Hard Disk Space:</strong> 2 GB<br>\t</li><li><strong>Video Card:</strong> ATI Radeon HD 6750 /  NVIDIA GeForce 320 /  NVIDIA GeForce<br>9600 or higher, 1024MB graphics memory required</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 58229,
            image_background:
              "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
          },
          released_at: "2012-02-14",
          requirements_en: {
            minimum:
              '<ul class="bb_ul"><li><strong>OS: </strong>Ubuntu 12.04 LTS<br>\t</li><li><strong>Processor: </strong>IntelR PentiumR IV 2.4 GHz or AMD 3500+<br>\t</li><li><strong>Memory: </strong>2 GB <br>\t</li><li><strong>Hard disk space: </strong>2 Gb <br>\t</li><li><strong>Video Card: </strong>ATI Radeon HD 6750 / NVIDIA GeForce 320 / NVIDIA GeForce<br>&gt; 9600 or higher, 1024MB graphics memory required.</li></ul>',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
        { platform: { id: 6, name: "Linux", slug: "linux" } },
      ],
      genres: [
        {
          id: 10,
          name: "Strategy",
          slug: "strategy",
          games_count: 41030,
          image_background:
            "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg",
        },
        {
          id: 14,
          name: "Simulation",
          slug: "simulation",
          games_count: 51191,
          image_background:
            "https://media.rawg.io/media/games/270/270b412b66688081497b3d70c100b208.jpg",
        },
      ],
      stores: [
        {
          id: 11317,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 27875,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7585,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3171,
          image_background:
            "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        },
        {
          id: 24,
          name: "RPG",
          slug: "rpg",
          language: "eng",
          games_count: 12977,
          image_background:
            "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        },
        {
          id: 18,
          name: "Co-op",
          slug: "co-op",
          language: "eng",
          games_count: 7429,
          image_background:
            "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg",
        },
        {
          id: 411,
          name: "cooperative",
          slug: "cooperative",
          language: "eng",
          games_count: 3055,
          image_background:
            "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
        },
        {
          id: 37,
          name: "Sandbox",
          slug: "sandbox",
          language: "eng",
          games_count: 4097,
          image_background:
            "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
        },
        {
          id: 62,
          name: "Moddable",
          slug: "moddable",
          language: "eng",
          games_count: 611,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        {
          id: 5,
          name: "Replay Value",
          slug: "replay-value",
          language: "eng",
          games_count: 977,
          image_background:
            "https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg",
        },
        {
          id: 121,
          name: "Character Customization",
          slug: "character-customization",
          language: "eng",
          games_count: 1927,
          image_background:
            "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg",
        },
        {
          id: 89,
          name: "Historical",
          slug: "historical",
          language: "eng",
          games_count: 1508,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 168,
          name: "RTS",
          slug: "rts",
          language: "eng",
          games_count: 1293,
          image_background:
            "https://media.rawg.io/media/screenshots/65c/65c9c15e274705b5fe343e424ce76ec8.jpg",
        },
        {
          id: 66,
          name: "Medieval",
          slug: "medieval",
          language: "eng",
          games_count: 3426,
          image_background:
            "https://media.rawg.io/media/games/934/934db575e66d63f2a6e86a2c688c141b.jpeg",
        },
        {
          id: 194,
          name: "Real-Time with Pause",
          slug: "real-time-with-pause",
          language: "eng",
          games_count: 163,
          image_background:
            "https://media.rawg.io/media/games/0fa/0fadc446fd1e9ae9e23a32793d9a5406.jpg",
        },
        {
          id: 100,
          name: "Grand Strategy",
          slug: "grand-strategy",
          language: "eng",
          games_count: 341,
          image_background:
            "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg",
        },
        {
          id: 86,
          name: "Education",
          slug: "education",
          language: "eng",
          games_count: 1511,
          image_background:
            "https://media.rawg.io/media/screenshots/f69/f690eafb7cbb29778d129aac3772d433.jpeg",
        },
        {
          id: 287,
          name: "Political",
          slug: "political",
          language: "eng",
          games_count: 368,
          image_background:
            "https://media.rawg.io/media/screenshots/087/0878fce9cdf3d1251f67ce1ec4d59131.jpg",
        },
        {
          id: 211,
          name: "Diplomacy",
          slug: "diplomacy",
          language: "eng",
          games_count: 111,
          image_background:
            "https://media.rawg.io/media/screenshots/096/09627345aa95f0636ea89d326e6ea17c.jpg",
        },
        {
          id: 219,
          name: "Politics",
          slug: "politics",
          language: "eng",
          games_count: 440,
          image_background:
            "https://media.rawg.io/media/games/3ed/3edb65acd71dc2729763141f7ed0ab24.jpg",
        },
      ],
      esrb_rating: null,
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/c22/c22d804ac753c72f2617b3708a625dec.jpg",
        },
        {
          id: 79976,
          image:
            "https://media.rawg.io/media/screenshots/bf1/bf1489ef85bcc54b83decef53756cf1a.jpg",
        },
        {
          id: 79977,
          image:
            "https://media.rawg.io/media/screenshots/8d0/8d07057c417db873377c71d335dff134.jpg",
        },
        {
          id: 79978,
          image:
            "https://media.rawg.io/media/screenshots/792/79260feaa378a8990ae914c08e0093a1.jpg",
        },
        {
          id: 79979,
          image:
            "https://media.rawg.io/media/screenshots/75c/75cf4c20d3990f5783b8770381b763b8.jpg",
        },
        {
          id: 79980,
          image:
            "https://media.rawg.io/media/screenshots/a9e/a9ebad5b9350d75d185092647775e3a7.jpg",
        },
        {
          id: 79981,
          image:
            "https://media.rawg.io/media/screenshots/e09/e09cea3a2d09dfcc01f0812a1380179e.jpg",
        },
      ],
    },
    {
      id: 23585,
      slug: "far-cry-5",
      name: "Far Cry 5",
      released: "2018-03-27",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg",
      rating: 3.72,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 825, percent: 54.31 },
        { id: 3, title: "meh", count: 405, percent: 26.66 },
        { id: 5, title: "exceptional", count: 213, percent: 14.02 },
        { id: 1, title: "skip", count: 76, percent: 5.0 },
      ],
      ratings_count: 1491,
      reviews_text_count: 21,
      added: 5706,
      added_by_status: {
        yet: 276,
        owned: 3186,
        beaten: 1147,
        toplay: 552,
        dropped: 394,
        playing: 151,
      },
      metacritic: 80,
      playtime: 18,
      suggestions_count: 384,
      updated: "2020-06-01T13:41:52",
      user_game: null,
      reviews_count: 1519,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2018-03-27",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2018-03-27",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2018-03-27",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 2,
          name: "Shooter",
          slug: "shooter",
          games_count: 44689,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
      ],
      stores: [
        {
          id: 27680,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 27693,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 27695,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 27875,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7585,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 18,
          name: "Co-op",
          slug: "co-op",
          language: "eng",
          games_count: 7429,
          image_background:
            "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 12001,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 36,
          name: "Open World",
          slug: "open-world",
          language: "eng",
          games_count: 4350,
          image_background:
            "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
        },
        {
          id: 411,
          name: "cooperative",
          slug: "cooperative",
          language: "eng",
          games_count: 3055,
          image_background:
            "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 16508,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 40845,
          name: "Partial Controller Support",
          slug: "partial-controller-support",
          language: "eng",
          games_count: 7768,
          image_background:
            "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
        },
        {
          id: 30,
          name: "FPS",
          slug: "fps",
          language: "eng",
          games_count: 8853,
          image_background:
            "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
        },
        {
          id: 189,
          name: "Female Protagonist",
          slug: "female-protagonist",
          language: "eng",
          games_count: 6812,
          image_background:
            "https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg",
        },
        {
          id: 1,
          name: "Survival",
          slug: "survival",
          language: "eng",
          games_count: 5360,
          image_background:
            "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
        },
        {
          id: 6,
          name: "Exploration",
          slug: "exploration",
          language: "eng",
          games_count: 12671,
          image_background:
            "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
        },
        {
          id: 15,
          name: "Stealth",
          slug: "stealth",
          language: "eng",
          games_count: 4291,
          image_background:
            "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
        },
        {
          id: 40838,
          name: "Includes level editor",
          slug: "includes-level-editor",
          language: "eng",
          games_count: 1425,
          image_background:
            "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        },
        {
          id: 40833,
          name: "Captions available",
          slug: "captions-available",
          language: "eng",
          games_count: 1084,
          image_background:
            "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
        },
        {
          id: 121,
          name: "Character Customization",
          slug: "character-customization",
          language: "eng",
          games_count: 1927,
          image_background:
            "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg",
        },
        {
          id: 120,
          name: "Memes",
          slug: "memes",
          language: "eng",
          games_count: 1210,
          image_background:
            "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg",
        },
        {
          id: 178,
          name: "Illuminati",
          slug: "illuminati",
          language: "eng",
          games_count: 248,
          image_background:
            "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg",
        },
        {
          id: 78,
          name: "America",
          slug: "america",
          language: "eng",
          games_count: 243,
          image_background:
            "https://media.rawg.io/media/games/9c5/9c5bc0b6e67102bc96dcf1ba41509e42.jpg",
        },
        {
          id: 181,
          name: "Hunting",
          slug: "hunting",
          language: "eng",
          games_count: 689,
          image_background:
            "https://media.rawg.io/media/screenshots/41c/41cb09356a97110b6b7d79f0abcb7699.jpg",
        },
        {
          id: 31352,
          name: "microtransactions",
          slug: "microtransactions",
          language: "eng",
          games_count: 3,
          image_background:
            "https://media.rawg.io/media/games/c9b/c9b64ff3987a27a5e66fb62328154e60.jpg",
        },
      ],
      esrb_rating: { id: 4, name: "Mature", slug: "mature" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg",
        },
        {
          id: 239766,
          image:
            "https://media.rawg.io/media/screenshots/5cf/5cf8e7fd61723cdd8f2673be38fa96d7.jpg",
        },
        {
          id: 239767,
          image:
            "https://media.rawg.io/media/screenshots/f10/f103b8facce20a692c632e92d75cb7dc.jpg",
        },
        {
          id: 239768,
          image:
            "https://media.rawg.io/media/screenshots/a75/a7559b87154002909f338f36ae4cf584.jpg",
        },
        {
          id: 239769,
          image:
            "https://media.rawg.io/media/screenshots/954/9543c597ffd856a12d9b0bd82733a370.jpg",
        },
        {
          id: 239770,
          image:
            "https://media.rawg.io/media/screenshots/406/40613f69f9f3b7ed28cf46cc55a9b06a.jpg",
        },
        {
          id: 239841,
          image:
            "https://media.rawg.io/media/screenshots/0ce/0ce9665ddbe8aef0086af7528ae44980.jpg",
        },
      ],
    },
    {
      id: 3740,
      slug: "fez",
      name: "FEZ",
      released: "2012-04-13",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/4cb/4cb855e8ef1578415a928e53c9f51867.png",
      rating: 4.0,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 464, percent: 46.03 },
        { id: 5, title: "exceptional", count: 340, percent: 33.73 },
        { id: 3, title: "meh", count: 138, percent: 13.69 },
        { id: 1, title: "skip", count: 66, percent: 6.55 },
      ],
      ratings_count: 1002,
      reviews_text_count: 5,
      added: 5706,
      added_by_status: {
        yet: 335,
        owned: 4095,
        beaten: 523,
        toplay: 143,
        dropped: 539,
        playing: 71,
      },
      metacritic: 91,
      playtime: 2,
      suggestions_count: 173,
      updated: "2021-04-15T14:10:28",
      user_game: null,
      reviews_count: 1008,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 19,
            name: "PS Vita",
            slug: "ps-vita",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 1938,
            image_background:
              "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
          },
          released_at: "2012-04-13",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2012-04-13",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2732,
            image_background:
              "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
          },
          released_at: "2012-04-13",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 58229,
            image_background:
              "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
          },
          released_at: "2012-04-13",
          requirements_en: {
            minimum:
              "OS: glibc 2.15+, 32/64-bit. S3TC is NOT required.<br />\r\nCPU: Intel Core 2 Duo 2.8GHz or equivalent<br />\r\nMemory: 2GB RAM<br />\r\nGraphics: OpenGL 3.0+ support (2.1 with ARB extensions acceptable)<br />\r\nHard Drive: 1GB HD space<br />\r\nNotes: Intel Integrated Graphics (excluding HD and Iris series) WILL NOT WORK WITH FEZ.",
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 81573,
            image_background:
              "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
          },
          released_at: "2012-04-13",
          requirements_en: {
            minimum:
              "OS: Snow Leopard 10.6.8, Lion strongly recommended, 32/64-bit<br />\r\nCPU: Intel Core 2 Duo 2.8GHz or equivalent<br />\r\nMemory: 2GB RAM<br />\r\nGraphics: OpenGL 3.0+ support (2.1 with ARB extensions acceptable)<br />\r\nHard Drive: 1GB HD space<br />\r\nNotes: Intel Integrated Graphics (excluding HD and Iris series) WILL NOT WORK WITH FEZ.",
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2012-04-13",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong>Windows XP SP3 (for Version 1.11, accessible through the \'Betas\' tab)<br>\t</li><li><strong>Processor:</strong>Intel Core 2 Duo 2.8Ghz or equivalent<br>\t</li><li><strong>Memory:</strong>2 GB RAM<br>\t</li><li><strong>Graphics:</strong>2nd Generation Intel Core HD Graphics (2000/3000), or dedicated GPU with OpenGL 3.0 Support<br>\t</li><li><strong>Hard Drive:</strong>500 MB HD space<br>\t</li><li><strong>Sound:</strong>OpenAL-compatible<br>\t</li><li><strong>Additional:</strong>See <a href="https://steamcommunity.com/linkfilter/?url=https://getsatisfaction.com/polytron/topics/support_for_intel_integrated_graphics_hardware" target="_blank" rel="noopener"  >https://getsatisfaction.com/polytron/topics/support_for_intel_integrated_graphics_hardware</a> for details on Intel HD Graphics support, not all models are supported. Latest graphics drivers are required to maximize OpenGL feature compatibility.</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong>Windows 7 (for version 1.12 or later)<br>\t</li><li><strong>Memory:</strong>4 GB RAM<br>\t</li><li><strong>Graphics:</strong>nVidia GeForce GT 240 or better<br>\t</li><li><strong>Additional:</strong>See <a href="https://steamcommunity.com/linkfilter/?url=https://getsatisfaction.com/polytron/topics/support_for_intel_integrated_graphics_hardware" target="_blank" rel="noopener"  >https://getsatisfaction.com/polytron/topics/support_for_intel_integrated_graphics_hardware</a> for details on Intel HD Graphics support, not all models are supported. Latest graphics drivers are required to maximize OpenGL feature compatibility.</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 3,
            name: "iOS",
            slug: "ios",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 72630,
            image_background:
              "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg",
          },
          released_at: "2012-04-13",
          requirements_en: {
            minimum:
              "iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen",
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 7,
            name: "Nintendo Switch",
            slug: "nintendo-switch",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 4585,
            image_background:
              "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg",
          },
          released_at: "2012-04-13",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3625,
            image_background:
              "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
          },
          released_at: "2012-04-13",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
        { platform: { id: 4, name: "iOS", slug: "ios" } },
        { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
        { platform: { id: 6, name: "Linux", slug: "linux" } },
        { platform: { id: 7, name: "Nintendo", slug: "nintendo" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 3,
          name: "Adventure",
          slug: "adventure",
          games_count: 98194,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
        {
          id: 51,
          name: "Indie",
          slug: "indie",
          games_count: 40360,
          image_background:
            "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg",
        },
        {
          id: 7,
          name: "Puzzle",
          slug: "puzzle",
          games_count: 74757,
          image_background:
            "https://media.rawg.io/media/games/6fc/6fcb1c529c764700d55f3bbc1b0fbb5b.jpg",
        },
        {
          id: 83,
          name: "Platformer",
          slug: "platformer",
          games_count: 72876,
          image_background:
            "https://media.rawg.io/media/games/fc8/fc838d98c9b944e6a15176eabf40bee8.jpg",
        },
      ],
      stores: [
        {
          id: 580045,
          store: {
            id: 6,
            name: "Nintendo Store",
            slug: "nintendo",
            domain: "nintendo.com",
            games_count: 8754,
            image_background:
              "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
          },
        },
        {
          id: 4048,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 353483,
          store: {
            id: 11,
            name: "Epic Games",
            slug: "epic-games",
            domain: "epicgames.com",
            games_count: 667,
            image_background:
              "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
          },
        },
        {
          id: 26024,
          store: {
            id: 5,
            name: "GOG",
            slug: "gog",
            domain: "gog.com",
            games_count: 3721,
            image_background:
              "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg",
          },
        },
        {
          id: 17338,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 33699,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1911,
            image_background:
              "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
          },
        },
        {
          id: 44729,
          store: {
            id: 4,
            name: "App Store",
            slug: "apple-appstore",
            domain: "apps.apple.com",
            games_count: 70993,
            image_background:
              "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg",
          },
        },
        {
          id: 238011,
          store: {
            id: 9,
            name: "itch.io",
            slug: "itch",
            domain: "itch.io",
            games_count: 467520,
            image_background:
              "https://media.rawg.io/media/screenshots/c6a/c6a5d9fbf7730702d28c75bec6f84f47.jpeg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 23660,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 10813,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 10982,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3171,
          image_background:
            "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        },
        {
          id: 45,
          name: "2D",
          slug: "2d",
          language: "eng",
          games_count: 134902,
          image_background:
            "https://media.rawg.io/media/games/8ca/8ca40b562a755d6a0e30d48e6c74b178.jpg",
        },
        {
          id: 40850,
          name: "Steam Leaderboards",
          slug: "steam-leaderboards",
          language: "eng",
          games_count: 4922,
          image_background:
            "https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg",
        },
        {
          id: 6,
          name: "Exploration",
          slug: "exploration",
          language: "eng",
          games_count: 12671,
          image_background:
            "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
        },
        {
          id: 115,
          name: "Controller",
          slug: "controller",
          language: "eng",
          games_count: 6221,
          image_background:
            "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg",
        },
        {
          id: 122,
          name: "Pixel Graphics",
          slug: "pixel-graphics",
          language: "eng",
          games_count: 61152,
          image_background:
            "https://media.rawg.io/media/games/70a/70a7a7b21d8fdf5f19622e5e14599bcd.jpg",
        },
        {
          id: 74,
          name: "Retro",
          slug: "retro",
          language: "eng",
          games_count: 26000,
          image_background:
            "https://media.rawg.io/media/games/2ae/2aedae90b1377a0f3e5ce54d24f8e41a.jpg",
        },
        {
          id: 336,
          name: "controller support",
          slug: "controller-support",
          language: "eng",
          games_count: 294,
          image_background:
            "https://media.rawg.io/media/games/4cb/4cb855e8ef1578415a928e53c9f51867.png",
        },
        {
          id: 88,
          name: "Cute",
          slug: "cute",
          language: "eng",
          games_count: 18685,
          image_background:
            "https://media.rawg.io/media/games/a50/a505bccdcfdc79970a93574c747f6e0d.jpg",
        },
        {
          id: 117,
          name: "Mystery",
          slug: "mystery",
          language: "eng",
          games_count: 8146,
          image_background:
            "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg",
        },
        {
          id: 337,
          name: "overlay",
          slug: "overlay",
          language: "eng",
          games_count: 201,
          image_background:
            "https://media.rawg.io/media/screenshots/9d2/9d22689a1c2a7ced9d1690e0c5c66871.jpg",
        },
        {
          id: 259,
          name: "Metroidvania",
          slug: "metroidvania",
          language: "eng",
          games_count: 2573,
          image_background:
            "https://media.rawg.io/media/games/578/57885b9590c9a9f80ceea34d147a34c4.jpg",
        },
        {
          id: 83,
          name: "Puzzle-Platformer",
          slug: "puzzle-platformer",
          language: "eng",
          games_count: 7817,
          image_background:
            "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg",
        },
        {
          id: 138,
          name: "Relaxing",
          slug: "relaxing",
          language: "eng",
          games_count: 8343,
          image_background:
            "https://media.rawg.io/media/games/4cb/4cb855e8ef1578415a928e53c9f51867.png",
        },
        {
          id: 571,
          name: "3D",
          slug: "3d",
          language: "eng",
          games_count: 48762,
          image_background:
            "https://media.rawg.io/media/games/4ea/4ea507ceebeabb43edbc09468f5aaac6.jpg",
        },
        {
          id: 116,
          name: "2.5D",
          slug: "25d",
          language: "eng",
          games_count: 677,
          image_background:
            "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg",
        },
      ],
      esrb_rating: { id: 1, name: "Everyone", slug: "everyone" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/4cb/4cb855e8ef1578415a928e53c9f51867.png",
        },
        {
          id: 32546,
          image:
            "https://media.rawg.io/media/screenshots/f08/f083ed9be5ed890834ef0815f001d577.jpg",
        },
        {
          id: 32547,
          image:
            "https://media.rawg.io/media/screenshots/88c/88cb946b60c3d5d884607e38f20272b7.jpg",
        },
        {
          id: 32548,
          image:
            "https://media.rawg.io/media/screenshots/abf/abf6ece1162a4776d043ef3eb90dec80.jpg",
        },
        {
          id: 32549,
          image:
            "https://media.rawg.io/media/screenshots/e0c/e0cdab50bf9d971c3151324afdd3898c.jpg",
        },
        {
          id: 32550,
          image:
            "https://media.rawg.io/media/screenshots/e47/e47af843e11dd4640d55fe099f6acf15.jpg",
        },
        {
          id: 32551,
          image:
            "https://media.rawg.io/media/screenshots/f49/f49f3b47f9fff5ca5643d64ef81a4dbb.jpg",
        },
      ],
    },
    {
      id: 13627,
      slug: "undertale",
      name: "Undertale",
      released: "2015-09-14",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg",
      rating: 4.34,
      rating_top: 5,
      ratings: [
        { id: 5, title: "exceptional", count: 791, percent: 60.15 },
        { id: 4, title: "recommended", count: 325, percent: 24.71 },
        { id: 3, title: "meh", count: 125, percent: 9.51 },
        { id: 1, title: "skip", count: 74, percent: 5.63 },
      ],
      ratings_count: 1293,
      reviews_text_count: 16,
      added: 5696,
      added_by_status: {
        yet: 400,
        owned: 3388,
        beaten: 1217,
        toplay: 288,
        dropped: 286,
        playing: 117,
      },
      metacritic: 92,
      playtime: 5,
      suggestions_count: 125,
      updated: "2021-03-19T04:19:35",
      user_game: null,
      reviews_count: 1315,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 186,
            name: "Xbox Series S/X",
            slug: "xbox-series-x",
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 348,
            image_background:
              "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg",
          },
          released_at: "2015-09-14",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 19,
            name: "PS Vita",
            slug: "ps-vita",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 1938,
            image_background:
              "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
          },
          released_at: "2015-09-14",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2015-09-14",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 58229,
            image_background:
              "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
          },
          released_at: "2015-09-14",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> If you can run other games on Steam, it\'s probably OK<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Storage:</strong> 200 MB available space</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Ubuntu 14+<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Storage:</strong> 200 MB available space</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 81573,
            image_background:
              "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
          },
          released_at: "2015-09-14",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Mac OS X<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Storage:</strong> 200 MB available space</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Mac OS X<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Storage:</strong> 200 MB available space</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2015-09-14",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows XP, Vista, 7, 8, or 10<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> 128MB<br></li><li><strong>Storage:</strong> 200 MB available space</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows XP, Vista, 7, or 10<br></li><li><strong>Processor:</strong> 2GHz+<br></li><li><strong>Memory:</strong> 3 GB RAM<br></li><li><strong>Graphics:</strong> 512MB<br></li><li><strong>Storage:</strong> 200 MB available space</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2015-09-14",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 7,
            name: "Nintendo Switch",
            slug: "nintendo-switch",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 4585,
            image_background:
              "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg",
          },
          released_at: "2015-09-14",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
        { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
        { platform: { id: 6, name: "Linux", slug: "linux" } },
        { platform: { id: 7, name: "Nintendo", slug: "nintendo" } },
      ],
      genres: [
        {
          id: 5,
          name: "RPG",
          slug: "role-playing-games-rpg",
          games_count: 40449,
          image_background:
            "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg",
        },
        {
          id: 51,
          name: "Indie",
          slug: "indie",
          games_count: 40360,
          image_background:
            "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg",
        },
      ],
      stores: [
        {
          id: 566913,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
        {
          id: 50264,
          store: {
            id: 6,
            name: "Nintendo Store",
            slug: "nintendo",
            domain: "nintendo.com",
            games_count: 8754,
            image_background:
              "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
          },
        },
        {
          id: 14992,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 26629,
          store: {
            id: 5,
            name: "GOG",
            slug: "gog",
            domain: "gog.com",
            games_count: 3721,
            image_background:
              "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg",
          },
        },
        {
          id: 36351,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3171,
          image_background:
            "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        },
        {
          id: 24,
          name: "RPG",
          slug: "rpg",
          language: "eng",
          games_count: 12977,
          image_background:
            "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 12001,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 45,
          name: "2D",
          slug: "2d",
          language: "eng",
          games_count: 134902,
          image_background:
            "https://media.rawg.io/media/games/8ca/8ca40b562a755d6a0e30d48e6c74b178.jpg",
        },
        {
          id: 16,
          name: "Horror",
          slug: "horror",
          language: "eng",
          games_count: 26338,
          image_background:
            "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
        },
        {
          id: 4,
          name: "Funny",
          slug: "funny",
          language: "eng",
          games_count: 15753,
          image_background:
            "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg",
        },
        {
          id: 123,
          name: "Comedy",
          slug: "comedy",
          language: "eng",
          games_count: 7515,
          image_background:
            "https://media.rawg.io/media/screenshots/8f0/8f0b94922ad5e59968852649697b2643.jpg",
        },
        {
          id: 122,
          name: "Pixel Graphics",
          slug: "pixel-graphics",
          language: "eng",
          games_count: 61152,
          image_background:
            "https://media.rawg.io/media/games/70a/70a7a7b21d8fdf5f19622e5e14599bcd.jpg",
        },
        {
          id: 74,
          name: "Retro",
          slug: "retro",
          language: "eng",
          games_count: 26000,
          image_background:
            "https://media.rawg.io/media/games/2ae/2aedae90b1377a0f3e5ce54d24f8e41a.jpg",
        },
        {
          id: 41,
          name: "Dark",
          slug: "dark",
          language: "eng",
          games_count: 8894,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 468,
          name: "role-playing",
          slug: "role-playing",
          language: "eng",
          games_count: 1286,
          image_background:
            "https://media.rawg.io/media/games/639/639ce7d7fecbb9f0717e9fbc1180f8f8.jpg",
        },
        {
          id: 5,
          name: "Replay Value",
          slug: "replay-value",
          language: "eng",
          games_count: 977,
          image_background:
            "https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg",
        },
        {
          id: 88,
          name: "Cute",
          slug: "cute",
          language: "eng",
          games_count: 18685,
          image_background:
            "https://media.rawg.io/media/games/a50/a505bccdcfdc79970a93574c747f6e0d.jpg",
        },
        {
          id: 145,
          name: "Choices Matter",
          slug: "choices-matter",
          language: "eng",
          games_count: 1626,
          image_background:
            "https://media.rawg.io/media/games/c81/c812e158129e00c9b0f096ae8a0bb7d6.jpg",
        },
        {
          id: 120,
          name: "Memes",
          slug: "memes",
          language: "eng",
          games_count: 1210,
          image_background:
            "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg",
        },
        {
          id: 337,
          name: "overlay",
          slug: "overlay",
          language: "eng",
          games_count: 201,
          image_background:
            "https://media.rawg.io/media/screenshots/9d2/9d22689a1c2a7ced9d1690e0c5c66871.jpg",
        },
        {
          id: 218,
          name: "Multiple Endings",
          slug: "multiple-endings",
          language: "eng",
          games_count: 4079,
          image_background:
            "https://media.rawg.io/media/games/7ba/7baf4663962bad7197e2470d59a6e322.jpg",
        },
        {
          id: 57,
          name: "Bullet Hell",
          slug: "bullet-hell",
          language: "eng",
          games_count: 5449,
          image_background:
            "https://media.rawg.io/media/screenshots/af5/af5fc63cb3be1936a046b4b54c6a8271.jpg",
        },
        {
          id: 160,
          name: "Dating Sim",
          slug: "dating-sim",
          language: "eng",
          games_count: 2771,
          image_background:
            "https://media.rawg.io/media/games/972/972aea3c9eb253e893947bec2d2cfbb9.jpg",
        },
      ],
      esrb_rating: { id: 2, name: "Everyone 10+", slug: "everyone-10-plus" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg",
        },
        {
          id: 116769,
          image:
            "https://media.rawg.io/media/screenshots/f06/f0657f2790937cf09c34f0aa65e81d7d.jpg",
        },
        {
          id: 116770,
          image:
            "https://media.rawg.io/media/screenshots/1af/1af4cbbe6aaaad4661d627f545969a62.jpg",
        },
        {
          id: 116771,
          image:
            "https://media.rawg.io/media/screenshots/030/0302c932c7ba686f2674bc48ad0e941c.jpg",
        },
        {
          id: 116772,
          image:
            "https://media.rawg.io/media/screenshots/33d/33d07448d2df02e23bba54764ca09a18.jpg",
        },
        {
          id: 116773,
          image:
            "https://media.rawg.io/media/screenshots/173/17361724f3e371c5ba14b1db9e166bd9.jpg",
        },
        {
          id: 116774,
          image:
            "https://media.rawg.io/media/screenshots/e19/e19de998e419b52aea601dd83615d060.jpg",
        },
      ],
    },
    {
      id: 13305,
      slug: "assassins-creed-iii-2",
      name: "Assassin’s Creed III",
      released: "2012-10-30",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/275/2759da6fcaa8f81f21800926168c85f6.jpg",
      rating: 3.69,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 828, percent: 51.56 },
        { id: 3, title: "meh", count: 442, percent: 27.52 },
        { id: 5, title: "exceptional", count: 239, percent: 14.88 },
        { id: 1, title: "skip", count: 97, percent: 6.04 },
      ],
      ratings_count: 1596,
      reviews_text_count: 8,
      added: 5655,
      added_by_status: {
        yet: 210,
        owned: 3100,
        beaten: 1861,
        toplay: 103,
        dropped: 340,
        playing: 41,
      },
      metacritic: 80,
      playtime: 22,
      suggestions_count: 450,
      updated: "2019-09-17T03:11:21",
      user_game: null,
      reviews_count: 1606,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 10,
            name: "Wii U",
            slug: "wii-u",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 1274,
            image_background:
              "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg",
          },
          released_at: "2012-10-30",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2732,
            image_background:
              "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
          },
          released_at: "2012-10-30",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3625,
            image_background:
              "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
          },
          released_at: "2012-10-30",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2012-10-30",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2012-10-30",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2012-10-30",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows Vista® (SP2) / Windows® 7 (SP1) / Windows® 8<br>\t</li><li><strong>Processor:</strong> 2.60 GHz Intel® Core™2 Duo E8200 or 2.60 GHz AMD Athlon™ II X4 620 <br>\t</li><li><strong>Memory:</strong> 2 GB<br>\t</li><li><strong>Graphics:</strong> 512 MB DirectX® 10—compliant with Shader Model 4.0 or higher (see supported list)*<br>\t</li><li><strong>DirectX®:</strong> 10<br>\t</li><li><strong>Hard Drive:</strong> 17 GB<br>\t</li><li><strong>Sound:</strong> DirectX 10—compliant (5.1 surround sound recommended)<br>\t</li><li><strong>Multiplayer:</strong> 256 kbps or faster broadband connection<br>\t</li><li><strong>Peripherals:</strong> Windows-compatible keyboard, mouse, optional controller (Xbox 360 Controller for Windows recommended)<br>*Supported Video Cards at Time of Release:<br><br>AMD Radeon™ HD 4850 / 5000 / 6000 / 7000 series<br><br>NVIDIA® GeForce® 8800 GT / 9 / 200 / 400 / 500 / 600 series<br><br>Laptop versions of these cards may work, but are not supported. These chipsets are the only ones that will run this game. For the most up-to-date minimum requirement listings, please visit the FAQ on our support website.<br><br>Requires a <a href="https://steamcommunity.com/linkfilter/?url=http://support.ubi.com" target="_blank" rel="noopener"  >Uplay Account</a></li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows Vista® (SP2) / Windows® 7 (SP1) / Windows® 8<br>\t</li><li><strong>Processor:</strong> 2.66 GHz Intel® Core™2 Quad Q9400 or 3.00 GHz AMD Phenom™ II X4 940<br>\t</li><li><strong>Memory:</strong> 4 GB<br>\t</li><li><strong>Graphics:</strong> 1024 MB DirectX® 10—compliant with Shader Model 5.0 or higher (see supported list)*<br>\t</li><li><strong>DirectX®:</strong> 10 <br>\t</li><li><strong>Hard Drive:</strong> 17 GB<br>\t</li><li><strong>Sound:</strong> DirectX 10–compliant (5.1 surround sound recommended)<br>\t</li><li><strong>Multiplayer:</strong> 256 kbps or faster broadband connection<br>\t</li><li><strong>Peripherals:</strong> Windows-compatible keyboard, mouse, optional controller (Xbox 360 Controller for Windows recommended)<br>*Supported Video Cards at Time of Release:<br><br>AMD Radeon™ HD 4850 / 5000 / 6000 / 7000 series<br><br>NVIDIA® GeForce® 8800 GT / 9 / 200 / 400 / 500 / 600 series<br><br>Laptop versions of these cards may work, but are not supported. These chipsets are the only ones that will run this game. For the most up-to-date minimum requirement listings, please visit the FAQ on our support website.<br><br>Requires a <a href="https://steamcommunity.com/linkfilter/?url=http://support.ubi.com" target="_blank" rel="noopener"  >Uplay Account</a></li></ul>',
          },
          requirements_ru: {
            minimum:
              "OC: Vista SP 2/Win 7 SP 1 /Win 8\nЦП: Intel Core 2 Duo E8200/AMD Athlon II X4 620 2,6 ГГц\nОЗУ: 2 ГБ\nЖесткий диск: 17 ГБ\nВидеокарта: 512 МБ AMD Radeon HD 4850\nNVIDIA GeForce 8800 GT\nСеть: 256кб/c\nНеобходимо наличие аккаунта на Uplay.",
            recommended:
              "OC: Vista SP2/Win 7 SP1/Win 8\nЦП: Intel Core 2 Quad Q9400 2,6 ГГц/AMD Phenom II X4 940 3 ГГц\nОЗУ: 4 ГБ \nЖесткий диск: 17 ГБ\nВидеокарта: 1 ГБ \nAMD Radeon HD 7000/NVIDIA GeForce 600.\nСеть: 1Мб/c\nНеобходимо наличие аккаунта на Uplay.",
          },
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
        { platform: { id: 7, name: "Nintendo", slug: "nintendo" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
      ],
      stores: [
        {
          id: 14631,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 18332,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 31861,
          store: {
            id: 6,
            name: "Nintendo Store",
            slug: "nintendo",
            domain: "nintendo.com",
            games_count: 8754,
            image_background:
              "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
          },
        },
        {
          id: 33043,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
        {
          id: 33920,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1911,
            image_background:
              "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 27875,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 12001,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 36,
          name: "Open World",
          slug: "open-world",
          language: "eng",
          games_count: 4350,
          image_background:
            "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
        },
        {
          id: 149,
          name: "Third Person",
          slug: "third-person",
          language: "eng",
          games_count: 5478,
          image_background:
            "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        },
        {
          id: 40845,
          name: "Partial Controller Support",
          slug: "partial-controller-support",
          language: "eng",
          games_count: 7768,
          image_background:
            "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
        },
        {
          id: 37,
          name: "Sandbox",
          slug: "sandbox",
          language: "eng",
          games_count: 4097,
          image_background:
            "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
        },
        {
          id: 15,
          name: "Stealth",
          slug: "stealth",
          language: "eng",
          games_count: 4291,
          image_background:
            "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
        },
        {
          id: 115,
          name: "Controller",
          slug: "controller",
          language: "eng",
          games_count: 6221,
          image_background:
            "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg",
        },
        {
          id: 69,
          name: "Action-Adventure",
          slug: "action-adventure",
          language: "eng",
          games_count: 9160,
          image_background:
            "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg",
        },
        {
          id: 89,
          name: "Historical",
          slug: "historical",
          language: "eng",
          games_count: 1508,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 188,
          name: "Parkour",
          slug: "parkour",
          language: "eng",
          games_count: 2071,
          image_background:
            "https://media.rawg.io/media/games/cfe/cfe5960b5caca432f3575fc7d8ff736b.jpg",
        },
        {
          id: 278,
          name: "Assassin",
          slug: "assassin",
          language: "eng",
          games_count: 599,
          image_background:
            "https://media.rawg.io/media/games/683/6833fbb183fd72a61c032501e3bc6d36.jpg",
        },
        {
          id: 78,
          name: "America",
          slug: "america",
          language: "eng",
          games_count: 243,
          image_background:
            "https://media.rawg.io/media/games/9c5/9c5bc0b6e67102bc96dcf1ba41509e42.jpg",
        },
        {
          id: 208,
          name: "Alternate History",
          slug: "alternate-history",
          language: "eng",
          games_count: 1014,
          image_background:
            "https://media.rawg.io/media/games/c69/c69e0952cdea6baa7cf0739b2e7792fb.jpg",
        },
        {
          id: 291,
          name: "Conspiracy",
          slug: "conspiracy",
          language: "eng",
          games_count: 379,
          image_background:
            "https://media.rawg.io/media/screenshots/3bc/3bc5be3c955655e4ae46dee83f5217e5.jpg",
        },
        {
          id: 181,
          name: "Hunting",
          slug: "hunting",
          language: "eng",
          games_count: 689,
          image_background:
            "https://media.rawg.io/media/screenshots/41c/41cb09356a97110b6b7d79f0abcb7699.jpg",
        },
      ],
      esrb_rating: { id: 4, name: "Mature", slug: "mature" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/275/2759da6fcaa8f81f21800926168c85f6.jpg",
        },
        {
          id: 113309,
          image:
            "https://media.rawg.io/media/screenshots/078/0781f8511a92fa31fea44ad56d13f7a7.jpg",
        },
        {
          id: 113310,
          image:
            "https://media.rawg.io/media/screenshots/044/0442a134b0bd6f703f84ca9905176f0f.jpg",
        },
        {
          id: 113311,
          image:
            "https://media.rawg.io/media/screenshots/cf7/cf721a31dc4c6187c0715587d9dcaed5.jpg",
        },
        {
          id: 113312,
          image:
            "https://media.rawg.io/media/screenshots/edd/edda41d9bd671c9556c392c7c48ff141.jpg",
        },
        {
          id: 113313,
          image:
            "https://media.rawg.io/media/screenshots/b7b/b7b98bee0fd0ff1f1e79ba8fb94ff864.jpg",
        },
        {
          id: 269133,
          image:
            "https://media.rawg.io/media/screenshots/b5e/b5e79ea8adddfd6886332fca2c93914d.jpg",
        },
      ],
    },
    {
      id: 12024,
      slug: "insurgency",
      name: "Insurgency",
      released: "2014-01-22",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg",
      rating: 3.41,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 365, percent: 47.65 },
        { id: 3, title: "meh", count: 220, percent: 28.72 },
        { id: 1, title: "skip", count: 103, percent: 13.45 },
        { id: 5, title: "exceptional", count: 78, percent: 10.18 },
      ],
      ratings_count: 762,
      reviews_text_count: 3,
      added: 5636,
      added_by_status: {
        yet: 255,
        owned: 4773,
        beaten: 141,
        toplay: 28,
        dropped: 407,
        playing: 32,
      },
      metacritic: 74,
      playtime: 4,
      suggestions_count: 573,
      updated: "2019-09-17T03:09:47",
      user_game: null,
      reviews_count: 766,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 81573,
            image_background:
              "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
          },
          released_at: "2014-01-22",
          requirements_en: {
            minimum:
              '<strong>Minimum</strong><br><ul class="bb_ul"><li><strong>OS:</strong> MacOS X 10.6.6 or higher<br></li><li><strong>Processor:</strong> Intel® Core i3 Processor (2GHz or better)<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> ATI Radeon HD 2400 or better / NVIDIA 8600M or better<br></li><li><strong>Hard Drive:</strong> 10 GB HD space</li></ul>',
            recommended:
              '<strong>Recommended</strong><br><ul class="bb_ul"><li><strong>Processor:</strong> Intel® Core i5 Processor (3GHz or better)<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> Video card 2048 MB or more<br></li><li><strong>Hard Drive:</strong> 10 GB HD space on a SSD</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2014-01-22",
          requirements_en: {
            minimum:
              '<strong>Minimum</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7/Vista/XP<br></li><li><strong>Processor:</strong> Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> Video card must be 512 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 3.0<br></li><li><strong>Hard Drive:</strong> 10 GB HD space<br></li><li><strong>DirectX:</strong> 9.0c</li></ul>',
            recommended:
              '<strong>Recommended</strong><br><ul class="bb_ul"><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> Video card 2048 MB or more<br></li><li><strong>Hard Drive:</strong> 10 GB HD space on a SSD</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 58229,
            image_background:
              "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
          },
          released_at: "2014-01-22",
          requirements_en: {
            minimum:
              '<strong>Minimum</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Ubuntu 12.04<br></li><li><strong>Processor:</strong> Dual core from Intel® or AMD at 2.8 GHz<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600 (Graphic Drivers: nVidia 310, AMD 12.11), OpenGL 2.1<br></li><li><strong>Hard Drive:</strong> 10 GB available space<br></li><li><strong>Sound Card:</strong> OpenAL Compatible Sound Card</li></ul>',
            recommended:
              '<strong>Recommended</strong><br><ul class="bb_ul"><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> Video card 2048 MB or more<br></li><li><strong>Hard Drive:</strong> 10 GB HD space on a SSD</li></ul>',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
        { platform: { id: 6, name: "Linux", slug: "linux" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 2,
          name: "Shooter",
          slug: "shooter",
          games_count: 44689,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 51,
          name: "Indie",
          slug: "indie",
          games_count: 40360,
          image_background:
            "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg",
        },
      ],
      stores: [
        {
          id: 13213,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 23660,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 27875,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7585,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 10982,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 18,
          name: "Co-op",
          slug: "co-op",
          language: "eng",
          games_count: 7429,
          image_background:
            "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg",
        },
        {
          id: 411,
          name: "cooperative",
          slug: "cooperative",
          language: "eng",
          games_count: 3055,
          image_background:
            "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 16508,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 30,
          name: "FPS",
          slug: "fps",
          language: "eng",
          games_count: 8853,
          image_background:
            "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
        },
        {
          id: 9,
          name: "Online Co-Op",
          slug: "online-co-op",
          language: "eng",
          games_count: 3056,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 80,
          name: "Tactical",
          slug: "tactical",
          language: "eng",
          games_count: 2697,
          image_background:
            "https://media.rawg.io/media/games/8bd/8bd24e3c15354a9555bb1437fe555a69.jpg",
        },
        {
          id: 40852,
          name: "Steam Workshop",
          slug: "steam-workshop",
          language: "eng",
          games_count: 1144,
          image_background:
            "https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg",
        },
        {
          id: 40838,
          name: "Includes level editor",
          slug: "includes-level-editor",
          language: "eng",
          games_count: 1425,
          image_background:
            "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        },
        {
          id: 40832,
          name: "Cross-Platform Multiplayer",
          slug: "cross-platform-multiplayer",
          language: "eng",
          games_count: 1807,
          image_background:
            "https://media.rawg.io/media/games/a77/a7773acbce8720869fcb61d7a1e5c88f.jpg",
        },
        {
          id: 70,
          name: "War",
          slug: "war",
          language: "eng",
          games_count: 7101,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 157,
          name: "PvP",
          slug: "pvp",
          language: "eng",
          games_count: 4579,
          image_background:
            "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg",
        },
        {
          id: 11,
          name: "Team-Based",
          slug: "team-based",
          language: "eng",
          games_count: 835,
          image_background:
            "https://media.rawg.io/media/games/388/388935d851846f8ec747fffc7c765800.jpg",
        },
        {
          id: 170,
          name: "Competitive",
          slug: "competitive",
          language: "eng",
          games_count: 835,
          image_background:
            "https://media.rawg.io/media/games/a32/a32c9c299488ca99afc3fcea605a7718.jpg",
        },
        {
          id: 81,
          name: "Military",
          slug: "military",
          language: "eng",
          games_count: 788,
          image_background:
            "https://media.rawg.io/media/games/121/1213f8b9b0a26307e672cf51f34882f8.jpg",
        },
        {
          id: 77,
          name: "Realistic",
          slug: "realistic",
          language: "eng",
          games_count: 1896,
          image_background:
            "https://media.rawg.io/media/games/b22/b227810b1a1bcbe9cf3dda22534c686e.jpg",
        },
        {
          id: 40856,
          name: "Valve Anti-Cheat enabled",
          slug: "valve-anti-cheat-enabled",
          language: "eng",
          games_count: 104,
          image_background:
            "https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg",
        },
      ],
      esrb_rating: null,
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg",
        },
        {
          id: 99803,
          image:
            "https://media.rawg.io/media/screenshots/922/922e471de5fe1486b0fc54b260b2e2a2.jpg",
        },
        {
          id: 99804,
          image:
            "https://media.rawg.io/media/screenshots/ac2/ac24fe8735ad0738ae7a4beaf293135f.jpg",
        },
        {
          id: 99805,
          image:
            "https://media.rawg.io/media/screenshots/c28/c28dc60beeb0b40e0c17470216d2ad07.jpg",
        },
        {
          id: 99806,
          image:
            "https://media.rawg.io/media/screenshots/fad/fad7a2fd1c84d7af4f9dd547ec5d2a3e.jpg",
        },
        {
          id: 99807,
          image:
            "https://media.rawg.io/media/screenshots/f15/f15776ddb8d0dce97bf659f16d714d00.jpg",
        },
        {
          id: 99808,
          image:
            "https://media.rawg.io/media/screenshots/8e1/8e1fc59e237432a1126d315fee628b80.jpg",
        },
      ],
    },
    {
      id: 11052,
      slug: "titan-quest-anniversary-edition",
      name: "Titan Quest Anniversary Edition",
      released: "2016-08-31",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/33d/33df5a032898b8ab7e3773c7a5f1d336.jpg",
      rating: 3.84,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 279, percent: 53.65 },
        { id: 5, title: "exceptional", count: 117, percent: 22.5 },
        { id: 3, title: "meh", count: 87, percent: 16.73 },
        { id: 1, title: "skip", count: 37, percent: 7.12 },
      ],
      ratings_count: 518,
      reviews_text_count: 2,
      added: 5624,
      added_by_status: {
        yet: 290,
        owned: 4835,
        beaten: 229,
        toplay: 42,
        dropped: 207,
        playing: 21,
      },
      metacritic: null,
      playtime: 5,
      suggestions_count: 518,
      updated: "2020-01-22T00:00:19",
      user_game: null,
      reviews_count: 520,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2016-08-31",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows XP / Vista / 7 / 8 / 10 32 or 64 bit<br></li><li><strong>Processor:</strong> 2.0 GHz CPU<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> 128 MB NVIDIA GeForce 6800 series or ATI Radeon X800 series or equivalent<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 5 GB available space<br></li><li><strong>Sound Card:</strong> DirectX compatible</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows XP / Vista / 7 / 8 /10 32 or 64 bit<br></li><li><strong>Processor:</strong> 3.0 GHz CPU Dual or Quad Core<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> 256MB NVIDIA or AMD card<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 5 GB available space<br></li><li><strong>Sound Card:</strong> DirectX compatible card</li></ul>',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [{ platform: { id: 1, name: "PC", slug: "pc" } }],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 5,
          name: "RPG",
          slug: "role-playing-games-rpg",
          games_count: 40449,
          image_background:
            "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg",
        },
      ],
      stores: [
        {
          id: 355601,
          store: {
            id: 5,
            name: "GOG",
            slug: "gog",
            domain: "gog.com",
            games_count: 3721,
            image_background:
              "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg",
          },
        },
        {
          id: 12116,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 329092,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 23660,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 27875,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7585,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 10813,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3171,
          image_background:
            "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        },
        {
          id: 24,
          name: "RPG",
          slug: "rpg",
          language: "eng",
          games_count: 12977,
          image_background:
            "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        },
        {
          id: 18,
          name: "Co-op",
          slug: "co-op",
          language: "eng",
          games_count: 7429,
          image_background:
            "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 12001,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 36,
          name: "Open World",
          slug: "open-world",
          language: "eng",
          games_count: 4350,
          image_background:
            "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
        },
        {
          id: 411,
          name: "cooperative",
          slug: "cooperative",
          language: "eng",
          games_count: 3055,
          image_background:
            "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
        },
        {
          id: 9,
          name: "Online Co-Op",
          slug: "online-co-op",
          language: "eng",
          games_count: 3056,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 64,
          name: "Fantasy",
          slug: "fantasy",
          language: "eng",
          games_count: 15967,
          image_background:
            "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg",
        },
        {
          id: 193,
          name: "Classic",
          slug: "classic",
          language: "eng",
          games_count: 1613,
          image_background:
            "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg",
        },
        {
          id: 397,
          name: "Online multiplayer",
          slug: "online-multiplayer",
          language: "eng",
          games_count: 3799,
          image_background:
            "https://media.rawg.io/media/games/1e5/1e5e33b88be978f451196a751424a72e.jpg",
        },
        {
          id: 97,
          name: "Action RPG",
          slug: "action-rpg",
          language: "eng",
          games_count: 3973,
          image_background:
            "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg",
        },
        {
          id: 40852,
          name: "Steam Workshop",
          slug: "steam-workshop",
          language: "eng",
          games_count: 1144,
          image_background:
            "https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg",
        },
        {
          id: 40838,
          name: "Includes level editor",
          slug: "includes-level-editor",
          language: "eng",
          games_count: 1425,
          image_background:
            "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        },
        {
          id: 68,
          name: "Hack and Slash",
          slug: "hack-and-slash",
          language: "eng",
          games_count: 2195,
          image_background:
            "https://media.rawg.io/media/games/569/569ea25d2b56bd05c7fa309ddabe81ff.jpg",
        },
        {
          id: 99,
          name: "Isometric",
          slug: "isometric",
          language: "eng",
          games_count: 2622,
          image_background:
            "https://media.rawg.io/media/games/a92/a92272ea5cfc35b8ad6317fbd81ce0f6.jpg",
        },
        {
          id: 61,
          name: "Top-Down",
          slug: "top-down",
          language: "eng",
          games_count: 14529,
          image_background:
            "https://media.rawg.io/media/games/910/910d547965a5c4928ca19112778a1b4f.jpg",
        },
        {
          id: 98,
          name: "Loot",
          slug: "loot",
          language: "eng",
          games_count: 1383,
          image_background:
            "https://media.rawg.io/media/games/8be/8be1d2c12a8ff3fdb693d4df128f50f0.jpg",
        },
        {
          id: 266,
          name: "Level Editor",
          slug: "level-editor",
          language: "eng",
          games_count: 1007,
          image_background:
            "https://media.rawg.io/media/games/2ac/2ac6f80402afe5afddcebb8d8b0780c4.jpeg",
        },
        {
          id: 108,
          name: "Mythology",
          slug: "mythology",
          language: "eng",
          games_count: 1084,
          image_background:
            "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
        },
      ],
      esrb_rating: null,
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/33d/33df5a032898b8ab7e3773c7a5f1d336.jpg",
        },
        {
          id: 88501,
          image:
            "https://media.rawg.io/media/screenshots/157/157e3887246416a83c3c001f7fb36458.jpg",
        },
        {
          id: 88502,
          image:
            "https://media.rawg.io/media/screenshots/e29/e29e01f38adc07950f38e016ad08df6b.jpg",
        },
        {
          id: 88503,
          image:
            "https://media.rawg.io/media/screenshots/e6f/e6f34f7d388e2205638e72541ac7698f.jpg",
        },
        {
          id: 88504,
          image:
            "https://media.rawg.io/media/screenshots/dea/dea64067438aa50b8fecaa5b6ad08d8d.jpg",
        },
        {
          id: 88505,
          image:
            "https://media.rawg.io/media/screenshots/b81/b815aef2e8a6d0011d76444a011e012b.jpg",
        },
        {
          id: 88506,
          image:
            "https://media.rawg.io/media/screenshots/7d1/7d1ac751296b22c4f005ce5f82d30d29.jpg",
        },
      ],
    },
    {
      id: 3876,
      slug: "deus-ex-human-revolution-directors-cut",
      name: "Deus Ex: Human Revolution - Director's Cut",
      released: "2013-10-22",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/a12/a12f806432cb385bc286f0935c49cd14.jpg",
      rating: 4.3,
      rating_top: 5,
      ratings: [
        { id: 5, title: "exceptional", count: 543, percent: 49.77 },
        { id: 4, title: "recommended", count: 429, percent: 39.32 },
        { id: 3, title: "meh", count: 69, percent: 6.32 },
        { id: 1, title: "skip", count: 50, percent: 4.58 },
      ],
      ratings_count: 1083,
      reviews_text_count: 4,
      added: 5622,
      added_by_status: {
        yet: 373,
        owned: 3994,
        beaten: 892,
        toplay: 101,
        dropped: 211,
        playing: 51,
      },
      metacritic: 91,
      playtime: 6,
      suggestions_count: 603,
      updated: "2021-01-26T09:34:15",
      user_game: null,
      reviews_count: 1091,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 10,
            name: "Wii U",
            slug: "wii-u",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 1274,
            image_background:
              "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg",
          },
          released_at: "2013-10-22",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2013-10-22",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows XP, Windows Vista, Windows 7 or Windows 8<br></li><li><strong>Processor:</strong> 2 GHz dual core<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce 8000 series or ATI Radeon HD 2000 series or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 17 GB available space<br></li><li><strong>Sound Card:</strong> 100% DirectX 9.0c compatible sound device</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7 or Windows 8<br></li><li><strong>Processor:</strong> AMD Phenom II X4 or Intel Core 2 Quad or better<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> AMD Radeon HD 5850<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 17 GB available space<br></li><li><strong>Sound Card:</strong> 100% DirectX 9.0c compatible sound device</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 81573,
            image_background:
              "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
          },
          released_at: "2013-10-22",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> 10.8.5<br></li><li><strong>Processor:</strong> 2.0Ghz<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> 512MB<br></li><li><strong>Storage:</strong> 25 GB available space<br></li><li><strong>Additional Notes:</strong> The following graphics cards are not supported: ATI X1xxx series, ATI HD2xxx series, Intel GMA series, Intel HD3000, NVIDIA 7xxx series, NVIDIA 8xxx series, NVIDIA 9400 and NVIDIA 3xx series.   The following cards require you to have 8GB of system RAM: Intel HD4000.</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> 10.9.2<br></li><li><strong>Processor:</strong> 2.4Ghz<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> 1GB<br></li><li><strong>Storage:</strong> 25 GB available space</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2732,
            image_background:
              "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
          },
          released_at: "2013-10-22",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3625,
            image_background:
              "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
          },
          released_at: "2013-10-22",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
        { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
        { platform: { id: 7, name: "Nintendo", slug: "nintendo" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 5,
          name: "RPG",
          slug: "role-playing-games-rpg",
          games_count: 40449,
          image_background:
            "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg",
        },
      ],
      stores: [
        {
          id: 4192,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 283555,
          store: {
            id: 4,
            name: "App Store",
            slug: "apple-appstore",
            domain: "apps.apple.com",
            games_count: 70993,
            image_background:
              "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg",
          },
        },
        {
          id: 541127,
          store: {
            id: 5,
            name: "GOG",
            slug: "gog",
            domain: "gog.com",
            games_count: 3721,
            image_background:
              "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg",
          },
        },
        {
          id: 13992,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 32007,
          store: {
            id: 6,
            name: "Nintendo Store",
            slug: "nintendo",
            domain: "nintendo.com",
            games_count: 8754,
            image_background:
              "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 23660,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7585,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 10813,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3171,
          image_background:
            "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        },
        {
          id: 24,
          name: "RPG",
          slug: "rpg",
          language: "eng",
          games_count: 12977,
          image_background:
            "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 12001,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 36,
          name: "Open World",
          slug: "open-world",
          language: "eng",
          games_count: 4350,
          image_background:
            "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 16508,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 32,
          name: "Sci-fi",
          slug: "sci-fi",
          language: "eng",
          games_count: 12100,
          image_background:
            "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
        },
        {
          id: 40845,
          name: "Partial Controller Support",
          slug: "partial-controller-support",
          language: "eng",
          games_count: 7768,
          image_background:
            "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
        },
        {
          id: 30,
          name: "FPS",
          slug: "fps",
          language: "eng",
          games_count: 8853,
          image_background:
            "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
        },
        {
          id: 15,
          name: "Stealth",
          slug: "stealth",
          language: "eng",
          games_count: 4291,
          image_background:
            "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
        },
        {
          id: 97,
          name: "Action RPG",
          slug: "action-rpg",
          language: "eng",
          games_count: 3973,
          image_background:
            "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg",
        },
        {
          id: 40833,
          name: "Captions available",
          slug: "captions-available",
          language: "eng",
          games_count: 1084,
          image_background:
            "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
        },
        {
          id: 5,
          name: "Replay Value",
          slug: "replay-value",
          language: "eng",
          games_count: 977,
          image_background:
            "https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg",
        },
        {
          id: 167,
          name: "Futuristic",
          slug: "futuristic",
          language: "eng",
          games_count: 2764,
          image_background:
            "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
        },
        {
          id: 226,
          name: "Cyberpunk",
          slug: "cyberpunk",
          language: "eng",
          games_count: 2865,
          image_background:
            "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        },
        {
          id: 119,
          name: "Dystopian",
          slug: "dystopian",
          language: "eng",
          games_count: 1200,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 406,
          name: "Story",
          slug: "story",
          language: "eng",
          games_count: 9372,
          image_background:
            "https://media.rawg.io/media/games/2ee/2eeed8524931b4fae1e4a40d0e5443b5.jpg",
        },
        {
          id: 1465,
          name: "combat",
          slug: "combat",
          language: "eng",
          games_count: 5801,
          image_background:
            "https://media.rawg.io/media/games/64e/64e2a77f37ddc48d102127234af99886.jpg",
        },
        {
          id: 40834,
          name: "Commentary available",
          slug: "commentary-available",
          language: "eng",
          games_count: 227,
          image_background:
            "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg",
        },
        {
          id: 808,
          name: "character",
          slug: "character",
          language: "eng",
          games_count: 7073,
          image_background:
            "https://media.rawg.io/media/screenshots/38d/38d4db6e32a116394c6c0215d6676b36.jpg",
        },
        {
          id: 291,
          name: "Conspiracy",
          slug: "conspiracy",
          language: "eng",
          games_count: 379,
          image_background:
            "https://media.rawg.io/media/screenshots/3bc/3bc5be3c955655e4ae46dee83f5217e5.jpg",
        },
        {
          id: 227,
          name: "Hacking",
          slug: "hacking",
          language: "eng",
          games_count: 774,
          image_background:
            "https://media.rawg.io/media/screenshots/c58/c588df86da16bf2f0432721b780cd5dd.jpg",
        },
        {
          id: 272,
          name: "Inventory Management",
          slug: "inventory-management",
          language: "eng",
          games_count: 315,
          image_background:
            "https://media.rawg.io/media/screenshots/31f/31fae55cda3d86e550b2121e7b1d19be.jpg",
        },
        {
          id: 820,
          name: "secrets",
          slug: "secrets",
          language: "eng",
          games_count: 2778,
          image_background:
            "https://media.rawg.io/media/games/c87/c87402bf3b30f4cb2e3d45ba5840d69a.jpg",
        },
        {
          id: 3109,
          name: "weapons",
          slug: "weapons",
          language: "eng",
          games_count: 1182,
          image_background:
            "https://media.rawg.io/media/games/645/645a25441b6559e2850cc5731dbde551.jpg",
        },
        {
          id: 301,
          name: "Transhumanism",
          slug: "transhumanism",
          language: "eng",
          games_count: 59,
          image_background:
            "https://media.rawg.io/media/screenshots/a42/a42e06f23d908d8d262447730a40f787.jpg",
        },
      ],
      esrb_rating: { id: 4, name: "Mature", slug: "mature" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/a12/a12f806432cb385bc286f0935c49cd14.jpg",
        },
        {
          id: 107229,
          image:
            "https://media.rawg.io/media/screenshots/3e2/3e2b3388b8e54e8e0c19ff1c1d4de6e5.jpg",
        },
        {
          id: 107230,
          image:
            "https://media.rawg.io/media/screenshots/070/070ab0b7ddf6316c5c6e343137dafb77.jpg",
        },
        {
          id: 107231,
          image:
            "https://media.rawg.io/media/screenshots/b6a/b6a98b0ad3b1d798a34e9897c4196c80.jpg",
        },
        {
          id: 107232,
          image:
            "https://media.rawg.io/media/screenshots/25a/25a851708fa44ba10b8387b64153bc16.jpg",
        },
        {
          id: 107233,
          image:
            "https://media.rawg.io/media/screenshots/5cf/5cf27961533e2b16b7d9c893edb2dc04.jpg",
        },
        {
          id: 107234,
          image:
            "https://media.rawg.io/media/screenshots/910/91075d1c39ca838e7e37ff908be49bec.jpg",
        },
      ],
    },
    {
      id: 11435,
      slug: "viscera-cleanup-detail-shadow-warrior",
      name: "Viscera Cleanup Detail: Shadow Warrior",
      released: "2013-09-26",
      tba: false,
      background_image:
        "https://media.rawg.io/media/screenshots/f2f/f2f3c93d6153da7aee590f3ab8ccd803.jpg",
      rating: 2.57,
      rating_top: 3,
      ratings: [
        { id: 3, title: "meh", count: 188, percent: 40.17 },
        { id: 1, title: "skip", count: 165, percent: 35.26 },
        { id: 4, title: "recommended", count: 102, percent: 21.79 },
        { id: 5, title: "exceptional", count: 13, percent: 2.78 },
      ],
      ratings_count: 468,
      reviews_text_count: 0,
      added: 5612,
      added_by_status: {
        yet: 355,
        owned: 4948,
        beaten: 124,
        toplay: 20,
        dropped: 162,
        playing: 3,
      },
      metacritic: null,
      playtime: 2,
      suggestions_count: 476,
      updated: "2019-09-17T03:09:24",
      user_game: null,
      reviews_count: 468,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 81573,
            image_background:
              "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
          },
          released_at: "2013-09-26",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2013-09-26",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7 / Vista / XP SP3<br></li><li><strong>Processor:</strong> 2.4GHz Dual Core CPU<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> 512MB Shader Model 3.0 Nvidia GeForce 8800 GT or AMD Radeon HD 3870<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 1 GB available space</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7 32/64bit<br></li><li><strong>Processor:</strong> 3.4GHz Quad Core CPU<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> 1GB Nvidia GeForce GTX 560 Ti or AMD Radeon HD 5850<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 1 GB available space</li></ul>',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 14,
          name: "Simulation",
          slug: "simulation",
          games_count: 51191,
          image_background:
            "https://media.rawg.io/media/games/270/270b412b66688081497b3d70c100b208.jpg",
        },
        {
          id: 51,
          name: "Indie",
          slug: "indie",
          games_count: 40360,
          image_background:
            "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg",
        },
      ],
      stores: [
        {
          id: 12549,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 343615,
          store: {
            id: 4,
            name: "App Store",
            slug: "apple-appstore",
            domain: "apps.apple.com",
            games_count: 70993,
            image_background:
              "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 23660,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 27875,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 10813,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 10982,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 18,
          name: "Co-op",
          slug: "co-op",
          language: "eng",
          games_count: 7429,
          image_background:
            "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg",
        },
        {
          id: 411,
          name: "cooperative",
          slug: "cooperative",
          language: "eng",
          games_count: 3055,
          image_background:
            "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 16508,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 30,
          name: "FPS",
          slug: "fps",
          language: "eng",
          games_count: 8853,
          image_background:
            "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
        },
        {
          id: 4,
          name: "Funny",
          slug: "funny",
          language: "eng",
          games_count: 15753,
          image_background:
            "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg",
        },
        {
          id: 26,
          name: "Gore",
          slug: "gore",
          language: "eng",
          games_count: 4079,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        {
          id: 123,
          name: "Comedy",
          slug: "comedy",
          language: "eng",
          games_count: 7515,
          image_background:
            "https://media.rawg.io/media/screenshots/8f0/8f0b94922ad5e59968852649697b2643.jpg",
        },
        {
          id: 198,
          name: "Split Screen",
          slug: "split-screen",
          language: "eng",
          games_count: 4445,
          image_background:
            "https://media.rawg.io/media/games/07a/07a74470a2618fd71945db0619602baf.jpg",
        },
        {
          id: 133,
          name: "3D Vision",
          slug: "3d-vision",
          language: "eng",
          games_count: 303,
          image_background:
            "https://media.rawg.io/media/games/1ed/1edaaa9e24e0072772244633d01642f4.jpg",
        },
        {
          id: 270,
          name: "Blood",
          slug: "blood",
          language: "eng",
          games_count: 1585,
          image_background:
            "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
        },
      ],
      esrb_rating: { id: 4, name: "Mature", slug: "mature" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/screenshots/f2f/f2f3c93d6153da7aee590f3ab8ccd803.jpg",
        },
        {
          id: 93087,
          image:
            "https://media.rawg.io/media/screenshots/181/181bba9474b13903a4f15cdca305e57e.jpg",
        },
        {
          id: 93088,
          image:
            "https://media.rawg.io/media/screenshots/6a7/6a73b800a67bc595adeaeed2ca62f6e6.jpg",
        },
        {
          id: 93089,
          image:
            "https://media.rawg.io/media/screenshots/681/6817ea54c56ea5e51822abdc65d8089c.jpg",
        },
        {
          id: 93090,
          image:
            "https://media.rawg.io/media/screenshots/d8d/d8d35af224bd8a95f01403da03030d57.jpg",
        },
        {
          id: 93091,
          image:
            "https://media.rawg.io/media/screenshots/654/6547ebbac9c7b971c914d26f54ca6594.jpg",
        },
        {
          id: 93092,
          image:
            "https://media.rawg.io/media/screenshots/8b0/8b011fbc533d8ffd6419880e491d4d38.jpg",
        },
      ],
    },
    {
      id: 4527,
      slug: "modern-warfare-2",
      name: "Call of Duty: Modern Warfare 2",
      released: "2009-11-10",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/9af/9af24c1886e2c7b52a4a2c65aa874638.jpg",
      rating: 4.26,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 784, percent: 51.34 },
        { id: 5, title: "exceptional", count: 598, percent: 39.16 },
        { id: 3, title: "meh", count: 117, percent: 7.66 },
        { id: 1, title: "skip", count: 28, percent: 1.83 },
      ],
      ratings_count: 1522,
      reviews_text_count: 2,
      added: 5602,
      added_by_status: {
        yet: 60,
        owned: 3467,
        beaten: 1855,
        toplay: 64,
        dropped: 132,
        playing: 24,
      },
      metacritic: 86,
      playtime: 25,
      suggestions_count: 636,
      updated: "2019-09-17T03:11:43",
      user_game: null,
      reviews_count: 1527,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2009-11-10",
          requirements_en: {
            minimum:
              '<ul class="bb_ul"><li><strong>OS:</strong> Microsoft Windows XP or Windows Vista (Windows 95/98/ME/2000 are unsupported)<br>\t\t\t\t\t\t\t</li><li><strong>Processor:</strong> Intel Pentium 4 3.2 GHz or AMD Athlon 64 3200+ processor or better supported<br>\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1 GB RAM<br>\t\t\t\t\t\t\t</li><li><strong>Graphics:</strong> 256 MB NVIDIA GeForce 6600GT or better or ATI Radeon 1600XT or better<br>\t\t\t\t\t\t\t</li><li><strong>DirectX®:</strong> Microsoft DirectX(R) 9.0c<br>\t\t\t\t\t\t\t</li><li><strong>Hard Drive:</strong> 12GB of free hard drive space<br>\t\t\t\t\t\t\t</li><li><strong>Sound:</strong> 100% DirectX 9.0c compatible sound card<br>\t\t\t\t\t\t\t</li><li><strong>Internet:</strong> Broadband connection and service required for Multiplayer Connectivity. Internet Connection required for activation.<br>\t\t\t\t\t\t\t</li><li><strong>Co-op/Multiplayer Hosting:</strong> To host Co-op or MP matches, a 2Ghz dual-core or better processor is recommended.<br>\t\t\t\t\t\t\t</li></ul>',
          },
          requirements_ru: {
            minimum:
              "Pentium 4 3 ГГц/Athlon 64 3200+,1 Гб памяти,GeForce 6600 GT/Radeon X1600,13 Гб на винчестере,интернет-соединение",
            recommended:
              "Core 2 Duo/Phenom X3 2.5 ГГц,2 Гб памяти,GeForce 8800/Radeon HD 2600,13 Гб на винчестере,интернет-соединение",
          },
        },
        {
          platform: {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3625,
            image_background:
              "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
          },
          released_at: "2011-11-29",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2732,
            image_background:
              "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
          },
          released_at: "2009-11-10",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 81573,
            image_background:
              "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
          },
          released_at: "2009-11-11",
          requirements_en: {
            minimum:
              '<ul class="bb_ul"><li><strong>Operating System:</strong> 10.9.5 (Mavericks), 10.10 (Yosemite), 10.11.6 (El Capitan), 10.12 (Sierra) <br><br></li><li><strong>CPU Processor:</strong> Intel i3 (Dual-Core)<br></li><li><strong>CPU Speed:</strong> 2.2GHz<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Hard Disk Space:</strong> 13 GB<br></li><li><strong>Video Card (ATI):</strong> Radeon HD 4850<br></li><li><strong>Video Card (NVidia):</strong> Geforce 640M<br></li><li><strong>Video Card (Intel):</strong> Iris<br></li><li><strong>Video Memory (VRam):</strong> 512 MB<br></li><li><strong>Peripherals:</strong> Macintosh mouse and keyboard<br><br></li><li><strong>IMPORTANT NOTICE:</strong> Currently, MW2 for Mac may not be accessible to users in Russia, Poland, and Japan</li></ul><br><ul class="bb_ul"><li><strong>NOTICE:</strong> The following video chipsets are unsupported for Call of Duty®: Modern Warfare® 2:<br>•\tATI RADEON HD 2000 Series<br>•\tATI RADEON HD 6490M, 6630M, 3870<br>•\tNVIDIA 9000 Series<br>•\tNVIDIA 320M, 330M<br>•\tIntel HD 3000, 4000, 5000<br><br></li><li><strong>NOTICE:</strong> This game is not supported on volumes formatted as Mac OS Extended (Case Sensitive)</li></ul>',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
        { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 2,
          name: "Shooter",
          slug: "shooter",
          games_count: 44689,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
      ],
      stores: [
        {
          id: 4859,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 12372,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 309468,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1911,
            image_background:
              "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
          },
        },
        {
          id: 309469,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 23660,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 27875,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 10813,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3171,
          image_background:
            "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        },
        {
          id: 18,
          name: "Co-op",
          slug: "co-op",
          language: "eng",
          games_count: 7429,
          image_background:
            "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 12001,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 411,
          name: "cooperative",
          slug: "cooperative",
          language: "eng",
          games_count: 3055,
          image_background:
            "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 16508,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 30,
          name: "FPS",
          slug: "fps",
          language: "eng",
          games_count: 8853,
          image_background:
            "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
        },
        {
          id: 9,
          name: "Online Co-Op",
          slug: "online-co-op",
          language: "eng",
          games_count: 3056,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 80,
          name: "Tactical",
          slug: "tactical",
          language: "eng",
          games_count: 2697,
          image_background:
            "https://media.rawg.io/media/games/8bd/8bd24e3c15354a9555bb1437fe555a69.jpg",
        },
        {
          id: 63,
          name: "Zombies",
          slug: "zombies",
          language: "eng",
          games_count: 7611,
          image_background:
            "https://media.rawg.io/media/games/f14/f1422eacab98c5f85a5123da4e9d9e89.jpg",
        },
        {
          id: 62,
          name: "Moddable",
          slug: "moddable",
          language: "eng",
          games_count: 611,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        {
          id: 70,
          name: "War",
          slug: "war",
          language: "eng",
          games_count: 7101,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 157,
          name: "PvP",
          slug: "pvp",
          language: "eng",
          games_count: 4579,
          image_background:
            "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg",
        },
        {
          id: 81,
          name: "Military",
          slug: "military",
          language: "eng",
          games_count: 788,
          image_background:
            "https://media.rawg.io/media/games/121/1213f8b9b0a26307e672cf51f34882f8.jpg",
        },
        {
          id: 40856,
          name: "Valve Anti-Cheat enabled",
          slug: "valve-anti-cheat-enabled",
          language: "eng",
          games_count: 104,
          image_background:
            "https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg",
        },
        {
          id: 305,
          name: "Linear",
          slug: "linear",
          language: "eng",
          games_count: 1625,
          image_background:
            "https://media.rawg.io/media/games/3c4/3c4a44ed99c87c56e0cdcfaaaf5c3628.jpg",
        },
      ],
      esrb_rating: null,
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/9af/9af24c1886e2c7b52a4a2c65aa874638.jpg",
        },
        {
          id: 91173,
          image:
            "https://media.rawg.io/media/screenshots/468/468450c797e2388adb27f43a9bfb545f.jpg",
        },
        {
          id: 91174,
          image:
            "https://media.rawg.io/media/screenshots/1d7/1d72fb0ca12c48ecd67806949bee047e.jpg",
        },
        {
          id: 91175,
          image:
            "https://media.rawg.io/media/screenshots/560/560b2add9ece92850b7f9913a5825557.jpg",
        },
        {
          id: 91176,
          image:
            "https://media.rawg.io/media/screenshots/f7e/f7e36079a094e963548b1f4a7bcad862.jpg",
        },
        {
          id: 91177,
          image:
            "https://media.rawg.io/media/screenshots/65d/65da9ca595bea8b6984f5e376c8cb6f8.jpg",
        },
        {
          id: 91178,
          image:
            "https://media.rawg.io/media/screenshots/00a/00a164bde7b8aa7dfc90b3b8a51caac6.jpg",
        },
      ],
    },
    {
      id: 4599,
      slug: "saints-row-2",
      name: "Saints Row 2",
      released: "2008-10-14",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg",
      rating: 3.57,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 335, percent: 48.2 },
        { id: 3, title: "meh", count: 169, percent: 24.32 },
        { id: 5, title: "exceptional", count: 111, percent: 15.97 },
        { id: 1, title: "skip", count: 80, percent: 11.51 },
      ],
      ratings_count: 692,
      reviews_text_count: 1,
      added: 5597,
      added_by_status: {
        yet: 332,
        owned: 4455,
        beaten: 505,
        toplay: 51,
        dropped: 230,
        playing: 24,
      },
      metacritic: 78,
      playtime: 2,
      suggestions_count: 520,
      updated: "2020-08-03T02:25:59",
      user_game: null,
      reviews_count: 695,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3625,
            image_background:
              "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
          },
          released_at: "2008-10-14",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2732,
            image_background:
              "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
          },
          released_at: "2008-10-14",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2008-10-14",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong>                    <br>\t\t\t\t\t<ul class="bb_ul"><li><strong>Supported OS:</strong>Windows XP or Vista.                                           <br>\t\t\t\t\t</li><li><strong>Processor: </strong>2.0 GHz Intel Dual-Core Pentium IV or equivalent or AMD Dual-Core Athlon XP or equivalent                    <br>\t\t\t\t\t</li><li><strong>Memory: </strong>1 GB system RAM                     <br>\t\t\t\t\t</li><li><strong>Graphics: </strong>128MB 3D graphics card with Shader Model 3.0 support (i.e. 7600 NVidia card or better, ATI X1300 card or better)                    <br>\t\t\t\t\t</li><li><strong>DirectX Version: </strong>DirectX 9.0c                      <br>\t\t\t\t\t</li><li><strong>Sound: </strong>DirectX 9.0c compatible 16-bit sound card                    <br>\t\t\t\t\t</li><li><strong>Hard Drive: </strong>15 GB of Hard Drive Space                    <br>\t\t\t\t\t</li><li><strong>Display: </strong>DirectX compatible display capable of 640x480 in 16-bit color                    <br>\t\t\t\t                   </li></ul>',
            recommended:
              '<strong>Recommended:</strong>                    <br>\t\t\t\t\t<ul class="bb_ul"><li><strong>Supported OS:</strong>Windows XP or Vista.                                           <br>\t\t\t\t\t</li><li><strong>Processor: </strong>3.2 GHz Intel Dual-Core Pentium IV or equivalent or AMD Dual-Core Athlon XP or equivalent                    <br>\t\t\t\t\t</li><li><strong>Memory: </strong>2 GB system RAM                     <br>\t\t\t\t\t</li><li><strong>Graphics: </strong>256MB 3D graphics card with Shader Model 3.0 support (i.e. 8800 NVidia card or better, ATI HD3850 card or better)                    <br>\t\t\t\t\t</li><li><strong>DirectX Version: </strong>DirectX 9.0c                      <br>\t\t\t\t\t</li><li><strong>Sound: </strong>DirectX 9.0c compatible 16-bit sound card                    <br>\t\t\t\t\t</li><li><strong>Hard Drive: </strong>15 GB of Hard Drive Space                    <br>\t\t\t\t\t</li><li><strong>Display: </strong>DirectX compatible display capable of 640x480 in 16-bit color                    <br>\t\t\t\t\t                 </li></ul>',
          },
          requirements_ru: {
            minimum:
              "Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon X1300,15 Гб на винчестере",
            recommended:
              "Core 2 Duo/Athlon X2 3.2 ГГц,1 Гб памяти,GeForce 8800/Radeon HD3850,15 Гб на винчестере",
          },
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 58229,
            image_background:
              "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
          },
          released_at: "2008-10-14",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong>                    <br>\t\t\t\t\t<ul class="bb_ul"><li><strong>Supported OS:</strong>Ubuntu 14.04.3 LTS, Ubuntu 15.04, Linux Mint 17.1, Steam OS Brewmaster                                           <br>\t\t\t\t\t</li><li><strong>CPU: </strong>  Intel Core i5-4570T (2.9 GHz) or equivalent or AMD FX-4300 (3.8 GHz) or equivalent                 <br>\t\t\t\t\t</li><li><strong>Memory: </strong>4096 MB                     <br>\t\t\t\t\t</li><li><strong>GPU: </strong>GeForce GTX 460 (1024 MB) or equivalent or Radeon HD 6850 (1024 MB) or equivalent           <br></li><li><strong>Recommended Graphics Drivers:</strong> Nvidia: 352, 355 or 358 series driver / AMD: AMD Catalyst (fglrx) 15.9 or better. MESA drivers and Intel Graphics are not currently supported.                                           <br>\t\t\t\t\t</li><li><strong>Hard Drive: </strong>Around 7 GB                       <br>\t\t\t\t\t</li><li><strong>Disclaimer: </strong> Due to issues surrounding the original engine, some stuttering may be observed during gameplay. These types of streaming issues may be improved with faster HDD units.</li></ul>',
            recommended:
              '<strong>Recommended:</strong>                    <br>\t\t\t\t\t<ul class="bb_ul"><li><strong>Supported OS:</strong>Ubuntu 14.04.3 LTS, Ubuntu 15.04, Linux Mint 17.1, Steam OS Brewmaster                                           <br>\t\t\t\t\t</li><li><strong>CPU: </strong> Intel Core i5-4670K (3.4 GHz) or equivalent or AMD FX-8370 (4.0 GHz) or equivalent                <br>\t\t\t\t\t</li><li><strong>Memory: </strong>8192 MB                     <br>\t\t\t\t\t</li><li><strong>GPU: </strong>GeForce GTX 760 (2048 MB) or equivalent or Radeon R9 285 (2048 MB) or equivalent     <br></li><li><strong>Recommended Graphics Drivers:</strong> Nvidia: 352, 355 or 358 series driver / AMD: AMD Catalyst (fglrx) 15.9 or better. MESA drivers and Intel Graphics are not currently supported.                                                   <br>\t\t\t\t\t</li><li><strong>Hard Drive: </strong>Around 7 GB                       <br>\t\t\t\t\t</li><li><strong>Disclaimer: </strong> Due to issues surrounding the original engine, some stuttering may be observed during gameplay. These types of streaming issues may be improved with faster HDD units.</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2010-06-01",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
        { platform: { id: 6, name: "Linux", slug: "linux" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 2,
          name: "Shooter",
          slug: "shooter",
          games_count: 44689,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
      ],
      stores: [
        {
          id: 465945,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
        {
          id: 4936,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 11267,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 26412,
          store: {
            id: 5,
            name: "GOG",
            slug: "gog",
            domain: "gog.com",
            games_count: 3721,
            image_background:
              "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg",
          },
        },
        {
          id: 33608,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1911,
            image_background:
              "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 27875,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 10813,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3171,
          image_background:
            "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        },
        {
          id: 18,
          name: "Co-op",
          slug: "co-op",
          language: "eng",
          games_count: 7429,
          image_background:
            "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg",
        },
        {
          id: 36,
          name: "Open World",
          slug: "open-world",
          language: "eng",
          games_count: 4350,
          image_background:
            "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
        },
        {
          id: 411,
          name: "cooperative",
          slug: "cooperative",
          language: "eng",
          games_count: 3055,
          image_background:
            "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
        },
        {
          id: 149,
          name: "Third Person",
          slug: "third-person",
          language: "eng",
          games_count: 5478,
          image_background:
            "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        },
        {
          id: 4,
          name: "Funny",
          slug: "funny",
          language: "eng",
          games_count: 15753,
          image_background:
            "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg",
        },
        {
          id: 9,
          name: "Online Co-Op",
          slug: "online-co-op",
          language: "eng",
          games_count: 3056,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 37,
          name: "Sandbox",
          slug: "sandbox",
          language: "eng",
          games_count: 4097,
          image_background:
            "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
        },
        {
          id: 189,
          name: "Female Protagonist",
          slug: "female-protagonist",
          language: "eng",
          games_count: 6812,
          image_background:
            "https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg",
        },
        {
          id: 123,
          name: "Comedy",
          slug: "comedy",
          language: "eng",
          games_count: 7515,
          image_background:
            "https://media.rawg.io/media/screenshots/8f0/8f0b94922ad5e59968852649697b2643.jpg",
        },
        {
          id: 150,
          name: "Third-Person Shooter",
          slug: "third-person-shooter",
          language: "eng",
          games_count: 1835,
          image_background:
            "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg",
        },
        {
          id: 62,
          name: "Moddable",
          slug: "moddable",
          language: "eng",
          games_count: 611,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        {
          id: 5,
          name: "Replay Value",
          slug: "replay-value",
          language: "eng",
          games_count: 977,
          image_background:
            "https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg",
        },
        {
          id: 121,
          name: "Character Customization",
          slug: "character-customization",
          language: "eng",
          games_count: 1927,
          image_background:
            "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg",
        },
        {
          id: 144,
          name: "Crime",
          slug: "crime",
          language: "eng",
          games_count: 1989,
          image_background:
            "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        },
        {
          id: 337,
          name: "overlay",
          slug: "overlay",
          language: "eng",
          games_count: 201,
          image_background:
            "https://media.rawg.io/media/screenshots/9d2/9d22689a1c2a7ced9d1690e0c5c66871.jpg",
        },
        {
          id: 163,
          name: "Co-op Campaign",
          slug: "co-op-campaign",
          language: "eng",
          games_count: 165,
          image_background:
            "https://media.rawg.io/media/games/bb8/bb8a1de04cf151b55bcb9b5a38ba9a0b.jpg",
        },
      ],
      esrb_rating: { id: 4, name: "Mature", slug: "mature" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg",
        },
        {
          id: 79383,
          image:
            "https://media.rawg.io/media/screenshots/8b9/8b98c409d0f92eee04a4539813e370a7.jpg",
        },
        {
          id: 79384,
          image:
            "https://media.rawg.io/media/screenshots/240/240071f110115884b39c4d6095746845.jpg",
        },
        {
          id: 79385,
          image:
            "https://media.rawg.io/media/screenshots/6a5/6a5500551128d104dc00d9f7dc4ea2b2.jpg",
        },
        {
          id: 79386,
          image:
            "https://media.rawg.io/media/screenshots/04c/04ca5c6bffe121f8b2e9fa1310b9f0cb.jpg",
        },
        {
          id: 79387,
          image:
            "https://media.rawg.io/media/screenshots/3fe/3fe3813cb01b1c94d9ef332844dda2a9.jpg",
        },
        {
          id: 79388,
          image:
            "https://media.rawg.io/media/screenshots/50a/50a4496ceb48e7adee856cf66843e44a.jpg",
        },
      ],
    },
    {
      id: 58616,
      slug: "assassins-creed-odyssey",
      name: "Assassin's Creed Odyssey",
      released: "2018-10-05",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/c6b/c6bd26767c1053fef2b10bb852943559.jpg",
      rating: 4.03,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 752, percent: 50.07 },
        { id: 5, title: "exceptional", count: 462, percent: 30.76 },
        { id: 3, title: "meh", count: 222, percent: 14.78 },
        { id: 1, title: "skip", count: 66, percent: 4.39 },
      ],
      ratings_count: 1480,
      reviews_text_count: 16,
      added: 5572,
      added_by_status: {
        yet: 372,
        owned: 2988,
        beaten: 883,
        toplay: 629,
        dropped: 352,
        playing: 348,
      },
      metacritic: 85,
      playtime: 31,
      suggestions_count: 645,
      updated: "2020-05-22T10:51:25",
      user_game: null,
      reviews_count: 1502,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2018-10-05",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2018-10-05",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 7,
            name: "Nintendo Switch",
            slug: "nintendo-switch",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 4585,
            image_background:
              "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg",
          },
          released_at: "2018-10-05",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2018-10-05",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
        { platform: { id: 7, name: "Nintendo", slug: "nintendo" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 5,
          name: "RPG",
          slug: "role-playing-games-rpg",
          games_count: 40449,
          image_background:
            "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg",
        },
      ],
      stores: [
        {
          id: 48930,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 355565,
          store: {
            id: 6,
            name: "Nintendo Store",
            slug: "nintendo",
            domain: "nintendo.com",
            games_count: 8754,
            image_background:
              "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
          },
        },
        {
          id: 438098,
          store: {
            id: 11,
            name: "Epic Games",
            slug: "epic-games",
            domain: "epicgames.com",
            games_count: 667,
            image_background:
              "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
          },
        },
        {
          id: 49055,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 48950,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7585,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 24,
          name: "RPG",
          slug: "rpg",
          language: "eng",
          games_count: 12977,
          image_background:
            "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 12001,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 36,
          name: "Open World",
          slug: "open-world",
          language: "eng",
          games_count: 4350,
          image_background:
            "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
        },
        {
          id: 149,
          name: "Third Person",
          slug: "third-person",
          language: "eng",
          games_count: 5478,
          image_background:
            "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        },
        {
          id: 40845,
          name: "Partial Controller Support",
          slug: "partial-controller-support",
          language: "eng",
          games_count: 7768,
          image_background:
            "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
        },
        {
          id: 189,
          name: "Female Protagonist",
          slug: "female-protagonist",
          language: "eng",
          games_count: 6812,
          image_background:
            "https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg",
        },
        {
          id: 15,
          name: "Stealth",
          slug: "stealth",
          language: "eng",
          games_count: 4291,
          image_background:
            "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
        },
        {
          id: 40833,
          name: "Captions available",
          slug: "captions-available",
          language: "eng",
          games_count: 1084,
          image_background:
            "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
        },
        {
          id: 40837,
          name: "In-App Purchases",
          slug: "in-app-purchases",
          language: "eng",
          games_count: 1499,
          image_background:
            "https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg",
        },
        {
          id: 89,
          name: "Historical",
          slug: "historical",
          language: "eng",
          games_count: 1508,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 188,
          name: "Parkour",
          slug: "parkour",
          language: "eng",
          games_count: 2071,
          image_background:
            "https://media.rawg.io/media/games/cfe/cfe5960b5caca432f3575fc7d8ff736b.jpg",
        },
        {
          id: 278,
          name: "Assassin",
          slug: "assassin",
          language: "eng",
          games_count: 599,
          image_background:
            "https://media.rawg.io/media/games/683/6833fbb183fd72a61c032501e3bc6d36.jpg",
        },
      ],
      esrb_rating: { id: 4, name: "Mature", slug: "mature" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/c6b/c6bd26767c1053fef2b10bb852943559.jpg",
        },
        {
          id: 779118,
          image:
            "https://media.rawg.io/media/screenshots/412/412b1dd5c880b80d8404451d3ff44360.jpg",
        },
        {
          id: 779119,
          image:
            "https://media.rawg.io/media/screenshots/9b5/9b59a790deab688ea923e0cd7b0cadbd_sNpbwUf.jpg",
        },
        {
          id: 779120,
          image:
            "https://media.rawg.io/media/screenshots/b09/b09a53fb76ea832671599a5f287ab34a.jpg",
        },
        {
          id: 779121,
          image:
            "https://media.rawg.io/media/screenshots/2f9/2f993667330526171e4056c0a0663437.jpg",
        },
        {
          id: 779150,
          image:
            "https://media.rawg.io/media/screenshots/6d8/6d8c268dff506f890478e6a0a492858b.jpg",
        },
        {
          id: 779151,
          image:
            "https://media.rawg.io/media/screenshots/588/5883818edafd22c8a2e1a45bf6fe07b1.jpg",
        },
      ],
    },
    {
      id: 58654,
      slug: "hitman-2",
      name: "Hitman 2",
      released: "2018-11-13",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg",
      rating: 4.05,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 463, percent: 51.67 },
        { id: 5, title: "exceptional", count: 287, percent: 32.03 },
        { id: 3, title: "meh", count: 98, percent: 10.94 },
        { id: 1, title: "skip", count: 48, percent: 5.36 },
      ],
      ratings_count: 892,
      reviews_text_count: 3,
      added: 5558,
      added_by_status: {
        yet: 454,
        owned: 4020,
        beaten: 387,
        toplay: 368,
        dropped: 212,
        playing: 117,
      },
      metacritic: 83,
      playtime: 5,
      suggestions_count: 288,
      updated: "2021-01-25T13:12:49",
      user_game: null,
      reviews_count: 896,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2018-11-13",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2018-11-13",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2018-11-13",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 2,
          name: "Shooter",
          slug: "shooter",
          games_count: 44689,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
      ],
      stores: [
        {
          id: 48795,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
        {
          id: 48794,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 48793,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 27875,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3171,
          image_background:
            "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        },
        {
          id: 18,
          name: "Co-op",
          slug: "co-op",
          language: "eng",
          games_count: 7429,
          image_background:
            "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg",
        },
        {
          id: 36,
          name: "Open World",
          slug: "open-world",
          language: "eng",
          games_count: 4350,
          image_background:
            "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
        },
        {
          id: 411,
          name: "cooperative",
          slug: "cooperative",
          language: "eng",
          games_count: 3055,
          image_background:
            "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
        },
        {
          id: 149,
          name: "Third Person",
          slug: "third-person",
          language: "eng",
          games_count: 5478,
          image_background:
            "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        },
        {
          id: 26,
          name: "Gore",
          slug: "gore",
          language: "eng",
          games_count: 4079,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        {
          id: 37,
          name: "Sandbox",
          slug: "sandbox",
          language: "eng",
          games_count: 4097,
          image_background:
            "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
        },
        {
          id: 15,
          name: "Stealth",
          slug: "stealth",
          language: "eng",
          games_count: 4291,
          image_background:
            "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
        },
        {
          id: 34,
          name: "Violent",
          slug: "violent",
          language: "eng",
          games_count: 4807,
          image_background:
            "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg",
        },
        {
          id: 44,
          name: "Nudity",
          slug: "nudity",
          language: "eng",
          games_count: 3029,
          image_background:
            "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
        },
        {
          id: 478,
          name: "3rd-Person Perspective",
          slug: "3rd-person-perspective",
          language: "eng",
          games_count: 84,
          image_background:
            "https://media.rawg.io/media/games/053/053fc543bf488349610f1ae2d0c1b51b.jpg",
        },
        {
          id: 278,
          name: "Assassin",
          slug: "assassin",
          language: "eng",
          games_count: 599,
          image_background:
            "https://media.rawg.io/media/games/683/6833fbb183fd72a61c032501e3bc6d36.jpg",
        },
      ],
      esrb_rating: { id: 4, name: "Mature", slug: "mature" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg",
        },
        {
          id: 778501,
          image:
            "https://media.rawg.io/media/screenshots/787/7872b36b20cef1baf445317f5d72716a.jpg",
        },
        {
          id: 778502,
          image:
            "https://media.rawg.io/media/screenshots/b06/b06268c8a5b5948eb80916eb9feba028.jpg",
        },
        {
          id: 778503,
          image:
            "https://media.rawg.io/media/screenshots/d70/d705d2dc0fc9f0a679c6fa17a0d1b99f.jpg",
        },
        {
          id: 778504,
          image:
            "https://media.rawg.io/media/screenshots/16b/16b1268158bea29f5779f360ec60b0f1.jpg",
        },
        {
          id: 778505,
          image:
            "https://media.rawg.io/media/screenshots/26c/26cde3952d7fb62b7d667accb71ade95.jpg",
        },
      ],
    },
    {
      id: 8488,
      slug: "tom-clancys-rainbow-six-siege-2",
      name: "Tom Clancy's Rainbow Six Siege",
      released: "2015-12-01",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg",
      rating: 3.98,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 595, percent: 53.32 },
        { id: 5, title: "exceptional", count: 302, percent: 27.06 },
        { id: 3, title: "meh", count: 165, percent: 14.78 },
        { id: 1, title: "skip", count: 54, percent: 4.84 },
      ],
      ratings_count: 1106,
      reviews_text_count: 6,
      added: 5525,
      added_by_status: {
        yet: 96,
        owned: 4234,
        beaten: 255,
        toplay: 58,
        dropped: 553,
        playing: 329,
      },
      metacritic: 75,
      playtime: 29,
      suggestions_count: 450,
      updated: "2021-02-17T15:00:09",
      user_game: null,
      reviews_count: 1116,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 187,
            name: "PlayStation 5",
            slug: "playstation5",
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 401,
            image_background:
              "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg",
          },
          released_at: "2015-12-01",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 186,
            name: "Xbox Series S/X",
            slug: "xbox-series-x",
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 348,
            image_background:
              "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg",
          },
          released_at: "2015-12-01",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2015-12-01",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2015-12-01",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7, Windows 8.1, Windows 10 (64bit versions required)<br></li><li><strong>Processor:</strong> Intel Core i3 560 @ 3.3 GHz or AMD Phenom II X4 945 @ 3.0 GHz<br></li><li><strong>Memory:</strong> 6 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce GTX 460 or AMD Radeon HD 5870 (DirectX-11 compliant with 1GB of VRAM)<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 30 GB available space<br></li><li><strong>Sound Card:</strong> DirectX® 9.0c compatible sound card with latest drivers<br></li><li><strong>Additional Notes:</strong> SUPPORTED VIDEO CARDS AT TIME OF RELEASE:  GeForce GTX 460 or better, GTX 560 or better, GTX 650 or better, GTX 750 or better, or any card from the GT900 and Titan Series, Radeon HD5870 or better, HD6870 or better, HD7770 or better, R7 260X or better, or any card from the R-300 series and Fury X. Laptop models of these cards may work but are not supported. These chipsets are the only ones that will run this game. Additional chipsets may be supported after release. For an up-to-date list of supported chipsets, please visit the FAQ for this game on our support website: <a href="https://steamcommunity.com/linkfilter/?url=http://support.ubi.com" target="_blank" rel="noopener"  >http://support.ubi.com</a></li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7 SP1, Windows 8.1, Windows 10 (64bit versions required)<br></li><li><strong>Processor:</strong> Intel Core i5-2500K @ 3.3 GHz or better or AMD FX-8120 @ 3.1 Ghz or better<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce GTX 670 (or GTX 760 / GTX 960) or AMD Radeon HD 7970 (or R9 280x [2GB VRAM] / R9 380 / Fury X)<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 47 GB available space<br></li><li><strong>Sound Card:</strong> DirectX® 9.0c compatible sound card 5.1 with latest drivers<br></li><li><strong>Additional Notes:</strong> SUPPORTED VIDEO CARDS AT TIME OF RELEASE:  GeForce GTX 460 or better, GTX 560 or better, GTX 650 or better, GTX 750 or better, or any card from the GT900 and Titan Series, Radeon HD5870 or better, HD6870 or better, HD7770 or better, R7 260X or better, or any card from the R-300 series and Fury X. Laptop models of these cards may work but are not supported. These chipsets are the only ones that will run this game. Additional chipsets may be supported after release. For an up-to-date list of supported chipsets, please visit the FAQ for this game on our support website: <a href="https://steamcommunity.com/linkfilter/?url=http://support.ubi.com" target="_blank" rel="noopener"  >http://support.ubi.com</a></li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2015-12-01",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 2,
          name: "Shooter",
          slug: "shooter",
          games_count: 44689,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
      ],
      stores: [
        {
          id: 355600,
          store: {
            id: 11,
            name: "Epic Games",
            slug: "epic-games",
            domain: "epicgames.com",
            games_count: 667,
            image_background:
              "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
          },
        },
        {
          id: 9275,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
        {
          id: 10262,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 10605,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 27875,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7585,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 18,
          name: "Co-op",
          slug: "co-op",
          language: "eng",
          games_count: 7429,
          image_background:
            "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 16508,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 40845,
          name: "Partial Controller Support",
          slug: "partial-controller-support",
          language: "eng",
          games_count: 7768,
          image_background:
            "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
        },
        {
          id: 30,
          name: "FPS",
          slug: "fps",
          language: "eng",
          games_count: 8853,
          image_background:
            "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
        },
        {
          id: 9,
          name: "Online Co-Op",
          slug: "online-co-op",
          language: "eng",
          games_count: 3056,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 189,
          name: "Female Protagonist",
          slug: "female-protagonist",
          language: "eng",
          games_count: 6812,
          image_background:
            "https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg",
        },
        {
          id: 80,
          name: "Tactical",
          slug: "tactical",
          language: "eng",
          games_count: 2697,
          image_background:
            "https://media.rawg.io/media/games/8bd/8bd24e3c15354a9555bb1437fe555a69.jpg",
        },
        {
          id: 114,
          name: "Physics",
          slug: "physics",
          language: "eng",
          games_count: 14045,
          image_background:
            "https://media.rawg.io/media/screenshots/dc2/dc2814dc50d61be1ea4fcd5d3c03ddb6.jpg",
        },
        {
          id: 11,
          name: "Team-Based",
          slug: "team-based",
          language: "eng",
          games_count: 835,
          image_background:
            "https://media.rawg.io/media/games/388/388935d851846f8ec747fffc7c765800.jpg",
        },
        {
          id: 170,
          name: "Competitive",
          slug: "competitive",
          language: "eng",
          games_count: 835,
          image_background:
            "https://media.rawg.io/media/games/a32/a32c9c299488ca99afc3fcea605a7718.jpg",
        },
        {
          id: 77,
          name: "Realistic",
          slug: "realistic",
          language: "eng",
          games_count: 1896,
          image_background:
            "https://media.rawg.io/media/games/b22/b227810b1a1bcbe9cf3dda22534c686e.jpg",
        },
        {
          id: 51,
          name: "Destruction",
          slug: "destruction",
          language: "eng",
          games_count: 2725,
          image_background:
            "https://media.rawg.io/media/games/370/3703c683968a54f09630dcf03366ea35.jpg",
        },
      ],
      esrb_rating: { id: 3, name: "Teen", slug: "teen" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg",
        },
        {
          id: 60047,
          image:
            "https://media.rawg.io/media/screenshots/cde/cde4694574a78e355478cf6e438106ac.jpg",
        },
        {
          id: 60052,
          image:
            "https://media.rawg.io/media/screenshots/6c3/6c386356a134572ccac11bffa6a74820.jpg",
        },
        {
          id: 60059,
          image:
            "https://media.rawg.io/media/screenshots/2b3/2b38b4a3dcdd8993ae211dc1616f6ced.jpg",
        },
        {
          id: 60063,
          image:
            "https://media.rawg.io/media/screenshots/df2/df22920866e77c82a6a505776023d7d9.jpg",
        },
        {
          id: 60068,
          image:
            "https://media.rawg.io/media/screenshots/5c3/5c3b2517577b729ba9c59d1638fd3a48.jpg",
        },
        {
          id: 60073,
          image:
            "https://media.rawg.io/media/screenshots/004/004cd2d5e5bf8c06f24a526d2ccd6fff.jpg",
        },
      ],
    },
    {
      id: 13461,
      slug: "resident-evil-5-biohazard-5",
      name: "Resident Evil 5",
      released: "2009-03-03",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/974/974342a3959981a17bdbbff2fd7f97b0.jpg",
      rating: 3.81,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 714, percent: 58.81 },
        { id: 3, title: "meh", count: 256, percent: 21.09 },
        { id: 5, title: "exceptional", count: 189, percent: 15.57 },
        { id: 1, title: "skip", count: 55, percent: 4.53 },
      ],
      ratings_count: 1209,
      reviews_text_count: 3,
      added: 5524,
      added_by_status: {
        yet: 201,
        owned: 3785,
        beaten: 1201,
        toplay: 95,
        dropped: 216,
        playing: 26,
      },
      metacritic: 86,
      playtime: 11,
      suggestions_count: 677,
      updated: "2020-01-14T04:04:59",
      user_game: null,
      reviews_count: 1214,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2009-03-03",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2732,
            image_background:
              "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
          },
          released_at: "2009-03-03",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2009-03-03",
          requirements_en: {
            minimum:
              '<ul class="bb_ul"><li><strong>Supported OS: </strong>Windows 7                         <br>        </li><li><strong>Processor: </strong>Intel Core™ 2 Quad 2.4GHz or better, AMD Phenom™ II x4 3.4GHZ or better                         <br>        </li><li><strong>Memory: </strong>4GB or better  <br>        </li><li><strong>Graphics: </strong>512 MB VRAM, NVIDIA® GeForce 9800 series or better, ATI Radeon HD 7770 or better<br>        </li><li><strong>Display:  </strong>Minimum 800 x 600 pixel resolution<br>        </li><li><strong>Sound: </strong>DirectSound Compatible (DirectX 9.0c or higher)     <br>        </li><li><strong>DirectX®: </strong>DirectX 9.0c / Shader 3.0  or better                   <br>        </li><li><strong>Hard Drive: </strong>15 GB free hard drive space         <br>        </li><li><strong>Peripherals: </strong>Keyboard and mouse       <br>        </li></ul>Internet connection required for game activation.',
            recommended:
              '<ul class="bb_ul"><li><strong>Supported OS: </strong>Windows 7                         <br>        </li><li><strong>Processor: </strong>Intel Core™ i5-3570 or better, AMD Phenom™ II x4 3.4GHZ or better                         <br>        </li><li><strong>Memory: </strong>4GB or better  <br>        </li><li><strong>Graphics: </strong>512 MB VRAM, NVIDIA(R) GeForce® GTX 650 or better, ATI Radeon HD 7770 or better<br>        </li><li><strong>Display:  </strong>Minimum 1280 x 720 pixel resolution<br>        </li><li><strong>Sound: </strong>DirectSound Compatible (DirectX 9.0c or higher)     <br>        </li><li><strong>DirectX®: </strong>DirectX 9.0c / Shader 3.0 or better                    <br>        </li><li><strong>Hard Drive: </strong>15 GB free hard drive space         <br>        </li><li><strong>Peripherals: </strong>Keyboard and mouse, controller supported        <br>        </li></ul>Internet connection required for game activation.',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 7,
            name: "Nintendo Switch",
            slug: "nintendo-switch",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 4585,
            image_background:
              "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg",
          },
          released_at: "2009-03-03",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3625,
            image_background:
              "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
          },
          released_at: "2009-03-03",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2009-03-03",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
        { platform: { id: 7, name: "Nintendo", slug: "nintendo" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 2,
          name: "Shooter",
          slug: "shooter",
          games_count: 44689,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
      ],
      stores: [
        {
          id: 46320,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 365575,
          store: {
            id: 6,
            name: "Nintendo Store",
            slug: "nintendo",
            domain: "nintendo.com",
            games_count: 8754,
            image_background:
              "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
          },
        },
        {
          id: 14805,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 46321,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1911,
            image_background:
              "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
          },
        },
        {
          id: 46319,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 23660,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 27875,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7585,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 10813,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 10982,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 18,
          name: "Co-op",
          slug: "co-op",
          language: "eng",
          games_count: 7429,
          image_background:
            "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg",
        },
        {
          id: 411,
          name: "cooperative",
          slug: "cooperative",
          language: "eng",
          games_count: 3055,
          image_background:
            "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
        },
        {
          id: 149,
          name: "Third Person",
          slug: "third-person",
          language: "eng",
          games_count: 5478,
          image_background:
            "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        },
        {
          id: 16,
          name: "Horror",
          slug: "horror",
          language: "eng",
          games_count: 26338,
          image_background:
            "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
        },
        {
          id: 9,
          name: "Online Co-Op",
          slug: "online-co-op",
          language: "eng",
          games_count: 3056,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 40850,
          name: "Steam Leaderboards",
          slug: "steam-leaderboards",
          language: "eng",
          games_count: 4922,
          image_background:
            "https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg",
        },
        {
          id: 26,
          name: "Gore",
          slug: "gore",
          language: "eng",
          games_count: 4079,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        {
          id: 189,
          name: "Female Protagonist",
          slug: "female-protagonist",
          language: "eng",
          games_count: 6812,
          image_background:
            "https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg",
        },
        {
          id: 1,
          name: "Survival",
          slug: "survival",
          language: "eng",
          games_count: 5360,
          image_background:
            "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
        },
        {
          id: 75,
          name: "Local Co-Op",
          slug: "local-co-op",
          language: "eng",
          games_count: 4134,
          image_background:
            "https://media.rawg.io/media/games/9c4/9c4aa07294013802f25fb7386b28512e.jpg",
        },
        {
          id: 150,
          name: "Third-Person Shooter",
          slug: "third-person-shooter",
          language: "eng",
          games_count: 1835,
          image_background:
            "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg",
        },
        {
          id: 63,
          name: "Zombies",
          slug: "zombies",
          language: "eng",
          games_count: 7611,
          image_background:
            "https://media.rawg.io/media/games/f14/f1422eacab98c5f85a5123da4e9d9e89.jpg",
        },
        {
          id: 17,
          name: "Survival Horror",
          slug: "survival-horror",
          language: "eng",
          games_count: 5053,
          image_background:
            "https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg",
        },
        {
          id: 133,
          name: "3D Vision",
          slug: "3d-vision",
          language: "eng",
          games_count: 303,
          image_background:
            "https://media.rawg.io/media/games/1ed/1edaaa9e24e0072772244633d01642f4.jpg",
        },
        {
          id: 269,
          name: "Quick-Time Events",
          slug: "quick-time-events",
          language: "eng",
          games_count: 185,
          image_background:
            "https://media.rawg.io/media/games/264/2642b17a7885f7abc4fd018e98943242.jpg",
        },
        {
          id: 163,
          name: "Co-op Campaign",
          slug: "co-op-campaign",
          language: "eng",
          games_count: 165,
          image_background:
            "https://media.rawg.io/media/games/bb8/bb8a1de04cf151b55bcb9b5a38ba9a0b.jpg",
        },
      ],
      esrb_rating: { id: 4, name: "Mature", slug: "mature" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/974/974342a3959981a17bdbbff2fd7f97b0.jpg",
        },
        {
          id: 114968,
          image:
            "https://media.rawg.io/media/screenshots/4ad/4adb836eae33db45da2cb9bd919becc4.jpg",
        },
        {
          id: 114969,
          image:
            "https://media.rawg.io/media/screenshots/673/673c00d710a685e727a6a8b97f1d6c3b.jpg",
        },
        {
          id: 114970,
          image:
            "https://media.rawg.io/media/screenshots/998/998d87968d7f9a9b9fda30d988b9377b.jpg",
        },
        {
          id: 114971,
          image:
            "https://media.rawg.io/media/screenshots/992/9926a0cce6aaecd786651932c4d45251.jpg",
        },
        {
          id: 114972,
          image:
            "https://media.rawg.io/media/screenshots/443/443208c142882f657df637f6b6b2fcb9.jpg",
        },
        {
          id: 114973,
          image:
            "https://media.rawg.io/media/screenshots/c9f/c9f66daefb307430670ed514bb5c01c3.jpg",
        },
      ],
    },
    {
      id: 952,
      slug: "shadowrun-returns",
      name: "Shadowrun Returns",
      released: "2013-07-24",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg",
      rating: 3.52,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 295, percent: 51.94 },
        { id: 3, title: "meh", count: 108, percent: 19.01 },
        { id: 1, title: "skip", count: 83, percent: 14.61 },
        { id: 5, title: "exceptional", count: 82, percent: 14.44 },
      ],
      ratings_count: 567,
      reviews_text_count: 0,
      added: 5520,
      added_by_status: {
        yet: 484,
        owned: 4489,
        beaten: 300,
        toplay: 61,
        dropped: 171,
        playing: 15,
      },
      metacritic: 76,
      playtime: 4,
      suggestions_count: 573,
      updated: "2021-04-01T14:19:27",
      user_game: null,
      reviews_count: 568,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2013-07-24",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong>Windows XP SP3/Vista/Windows 7<br>\t</li><li><strong>Processor:</strong> x86-compatible 1.4GHz or faster processor<br>\t</li><li><strong>Memory:</strong>2 GB RAM<br>\t</li><li><strong>Graphics:</strong>DirectX compatible 3D graphics card with at least 256MB of addressable memory<br>\t</li><li><strong>DirectX®:</strong>9.0<br>\t</li><li><strong>Hard Drive:</strong>2 GB HD space</li></ul>',
          },
          requirements_ru: {
            minimum:
              "Win XP 32\nSingle Core CPU 1.4GHz\nGeForce 315/Radeon HD 6320\n2 GB\tRAM\n2 GB\tHDD",
            recommended:
              "Win Xp 32\nPentium 4 3.2GHz/Athlon 64 X2\nGeForce GT 230/Radeon HD 2900 GT\n2 GB\tRAM\n2 GB\tHDD",
          },
        },
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 81573,
            image_background:
              "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
          },
          released_at: "2013-07-24",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS: </strong>OSX 10.6<br>\t</li><li><strong>Processor: </strong>Intel-based Macs only (x86-compatible, 1.4GHz or better)<br>\t</li><li><strong>Memory: </strong>2 GB RAM<br>\t</li><li><strong>Hard disk space: </strong>2 GB HD space\t</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 21,
            name: "Android",
            slug: "android",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 42137,
            image_background:
              "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
          },
          released_at: "2013-07-24",
          requirements_en: { minimum: "4.0 and up" },
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 58229,
            image_background:
              "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
          },
          released_at: "2013-07-24",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul">\t<li><strong>Processor:</strong> x86-compatible 1.4GHz or faster processor<br>\t</li><li><strong>Memory:</strong>2 GB RAM<br>\t</li><li><strong>Graphics:</strong>Modern 3D graphics card with at least 256MB of addressable memory<br>\t</li><li><strong>Hard Drive:</strong>2 GB HD space</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 3,
            name: "iOS",
            slug: "ios",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 72630,
            image_background:
              "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg",
          },
          released_at: "2013-07-24",
          requirements_en: {
            minimum:
              "iPad Wifi, iPad 3G, iPad 2 Wifi, iPad 2 3G, iPad Third Gen, iPad Third Gen 4G, iPad Fourth Gen, iPad Fourth Gen 4G, iPad Mini, iPad Mini 4G, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPad 6 1 1, iPad 6 1 2",
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 4, name: "iOS", slug: "ios" } },
        { platform: { id: 8, name: "Android", slug: "android" } },
        { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
        { platform: { id: 6, name: "Linux", slug: "linux" } },
      ],
      genres: [
        {
          id: 5,
          name: "RPG",
          slug: "role-playing-games-rpg",
          games_count: 40449,
          image_background:
            "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg",
        },
        {
          id: 10,
          name: "Strategy",
          slug: "strategy",
          games_count: 41030,
          image_background:
            "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg",
        },
        {
          id: 51,
          name: "Indie",
          slug: "indie",
          games_count: 40360,
          image_background:
            "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg",
        },
      ],
      stores: [
        {
          id: 573304,
          store: {
            id: 11,
            name: "Epic Games",
            slug: "epic-games",
            domain: "epicgames.com",
            games_count: 667,
            image_background:
              "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
          },
        },
        {
          id: 971,
          store: {
            id: 4,
            name: "App Store",
            slug: "apple-appstore",
            domain: "apps.apple.com",
            games_count: 70993,
            image_background:
              "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg",
          },
        },
        {
          id: 13544,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 26128,
          store: {
            id: 5,
            name: "GOG",
            slug: "gog",
            domain: "gog.com",
            games_count: 3721,
            image_background:
              "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg",
          },
        },
        {
          id: 40794,
          store: {
            id: 8,
            name: "Google Play",
            slug: "google-play",
            domain: "play.google.com",
            games_count: 16433,
            image_background:
              "https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 24,
          name: "RPG",
          slug: "rpg",
          language: "eng",
          games_count: 12977,
          image_background:
            "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 12001,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 32,
          name: "Sci-fi",
          slug: "sci-fi",
          language: "eng",
          games_count: 12100,
          image_background:
            "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
        },
        {
          id: 64,
          name: "Fantasy",
          slug: "fantasy",
          language: "eng",
          games_count: 15967,
          image_background:
            "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg",
        },
        {
          id: 189,
          name: "Female Protagonist",
          slug: "female-protagonist",
          language: "eng",
          games_count: 6812,
          image_background:
            "https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg",
        },
        {
          id: 80,
          name: "Tactical",
          slug: "tactical",
          language: "eng",
          games_count: 2697,
          image_background:
            "https://media.rawg.io/media/games/8bd/8bd24e3c15354a9555bb1437fe555a69.jpg",
        },
        {
          id: 62,
          name: "Moddable",
          slug: "moddable",
          language: "eng",
          games_count: 611,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        {
          id: 40838,
          name: "Includes level editor",
          slug: "includes-level-editor",
          language: "eng",
          games_count: 1425,
          image_background:
            "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        },
        {
          id: 102,
          name: "Turn-Based",
          slug: "turn-based",
          language: "eng",
          games_count: 3992,
          image_background:
            "https://media.rawg.io/media/games/054/0549f1a0a5e782d4e81cdf8d022073fa.jpg",
        },
        {
          id: 99,
          name: "Isometric",
          slug: "isometric",
          language: "eng",
          games_count: 2622,
          image_background:
            "https://media.rawg.io/media/games/a92/a92272ea5cfc35b8ad6317fbd81ce0f6.jpg",
        },
        {
          id: 101,
          name: "Turn-Based Strategy",
          slug: "turn-based-strategy",
          language: "eng",
          games_count: 2881,
          image_background:
            "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg",
        },
        {
          id: 226,
          name: "Cyberpunk",
          slug: "cyberpunk",
          language: "eng",
          games_count: 2865,
          image_background:
            "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        },
        {
          id: 119,
          name: "Dystopian",
          slug: "dystopian",
          language: "eng",
          games_count: 1200,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 96,
          name: "Kickstarter",
          slug: "kickstarter",
          language: "eng",
          games_count: 565,
          image_background:
            "https://media.rawg.io/media/games/4f4/4f4c0c0d2127fd67b1e894204029468b.jpg",
        },
        {
          id: 238,
          name: "CRPG",
          slug: "crpg",
          language: "eng",
          games_count: 365,
          image_background:
            "https://media.rawg.io/media/games/4e6/4e6c6259ad910c31261d90b42c45e046.jpg",
        },
        {
          id: 59,
          name: "Crowdfunded",
          slug: "crowdfunded",
          language: "eng",
          games_count: 58,
          image_background:
            "https://media.rawg.io/media/games/3f9/3f99d409124962fa6e125409254528c3.jpg",
        },
      ],
      esrb_rating: null,
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg",
        },
        {
          id: 102990,
          image:
            "https://media.rawg.io/media/screenshots/516/5160a9b6b847bf4b5765f15535b7c445.jpg",
        },
        {
          id: 102991,
          image:
            "https://media.rawg.io/media/screenshots/220/2204bd96b724a52083b76770e3a0c438.jpg",
        },
        {
          id: 102992,
          image:
            "https://media.rawg.io/media/screenshots/9e1/9e1e0a45851fdbb0e5c0e1b83feaf0f9.jpg",
        },
        {
          id: 102993,
          image:
            "https://media.rawg.io/media/screenshots/3ba/3badbdd810dad59775fbca0edc6e0594.jpg",
        },
        {
          id: 102994,
          image:
            "https://media.rawg.io/media/screenshots/257/257e7e03f5cd96fbd95c4a3d8f52454c.jpg",
        },
        {
          id: 102995,
          image:
            "https://media.rawg.io/media/screenshots/3f1/3f173a2c6f59d0c4a4abe8c91dd24273.jpg",
        },
      ],
    },
    {
      id: 28492,
      slug: "dead-island",
      name: "Dead Island",
      released: "2011-09-06",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/56e/56ed40948bebaf1968234aa6e3c74771.jpg",
      rating: 3.44,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 519, percent: 49.01 },
        { id: 3, title: "meh", count: 349, percent: 32.96 },
        { id: 1, title: "skip", count: 108, percent: 10.2 },
        { id: 5, title: "exceptional", count: 83, percent: 7.84 },
      ],
      ratings_count: 1056,
      reviews_text_count: 2,
      added: 5513,
      added_by_status: {
        yet: 133,
        owned: 4098,
        beaten: 692,
        toplay: 52,
        dropped: 526,
        playing: 12,
      },
      metacritic: 74,
      playtime: 7,
      suggestions_count: 536,
      updated: "2019-09-17T03:10:30",
      user_game: null,
      reviews_count: 1059,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3625,
            image_background:
              "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
          },
          released_at: "2011-09-06",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2732,
            image_background:
              "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
          },
          released_at: "2011-09-06",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2011-09-06",
          requirements_en: null,
          requirements_ru: {
            minimum:
              "Core 2 Duo/Athlon X2 2.66 ГГц,1 Гб памяти,GeForce 8600 GT/Radeon 2600 XT,7 Гб на винчестере",
            recommended:
              "Core 2 Duo E6700/Athlon II X2 240,4 Гб памяти,GeForce 9600 GT/Radeon HD 3870,7 Гб на винчестере",
          },
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 2,
          name: "Shooter",
          slug: "shooter",
          games_count: 44689,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 5,
          name: "RPG",
          slug: "role-playing-games-rpg",
          games_count: 40449,
          image_background:
            "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg",
        },
      ],
      stores: [
        {
          id: 33674,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1911,
            image_background:
              "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 63,
          name: "Zombies",
          slug: "zombies",
          language: "eng",
          games_count: 7611,
          image_background:
            "https://media.rawg.io/media/games/f14/f1422eacab98c5f85a5123da4e9d9e89.jpg",
        },
        {
          id: 808,
          name: "character",
          slug: "character",
          language: "eng",
          games_count: 7073,
          image_background:
            "https://media.rawg.io/media/screenshots/38d/38d4db6e32a116394c6c0215d6676b36.jpg",
        },
        {
          id: 744,
          name: "friends",
          slug: "friends",
          language: "eng",
          games_count: 13995,
          image_background:
            "https://media.rawg.io/media/games/f13/f138e0cd4e3f3cd95264f3b30070362a.jpg",
        },
        {
          id: 997,
          name: "island",
          slug: "island",
          language: "eng",
          games_count: 2237,
          image_background:
            "https://media.rawg.io/media/screenshots/aca/aca80d402fcf64ea31d63cafe14cc6d2.jpg",
        },
        {
          id: 2906,
          name: "police",
          slug: "police",
          language: "eng",
          games_count: 1675,
          image_background:
            "https://media.rawg.io/media/screenshots/d45/d456e6e6ed7c551a3bfbc61e650c34b5.jpg",
        },
        {
          id: 1315,
          name: "room",
          slug: "room",
          language: "eng",
          games_count: 3447,
          image_background:
            "https://media.rawg.io/media/screenshots/9b0/9b0814a634a54001aefa0ec6bbddd79e.jpg",
        },
      ],
      esrb_rating: { id: 4, name: "Mature", slug: "mature" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/56e/56ed40948bebaf1968234aa6e3c74771.jpg",
        },
        {
          id: 431921,
          image:
            "https://media.rawg.io/media/screenshots/486/486a42d5b4a456ff7043671ca0e1d146.jpg",
        },
        {
          id: 431922,
          image:
            "https://media.rawg.io/media/screenshots/606/606d1f6b854b9edab64df1b43e456663.jpg",
        },
        {
          id: 431923,
          image:
            "https://media.rawg.io/media/screenshots/c9d/c9dcf809a18c229c82676e8f2b81d35e.jpg",
        },
        {
          id: 431924,
          image:
            "https://media.rawg.io/media/screenshots/4c1/4c15bc2a60c0ce4e90909390eb802410.jpg",
        },
        {
          id: 431925,
          image:
            "https://media.rawg.io/media/screenshots/64d/64dce99763374e3ab406ff3f6217334f.jpg",
        },
        {
          id: 431926,
          image:
            "https://media.rawg.io/media/screenshots/e52/e520fdc5065b6637cd4032e59e5678c3.jpg",
        },
      ],
    },
    {
      id: 28153,
      slug: "assassins-creed-origins",
      name: "Assassin's Creed Origins",
      released: "2017-10-27",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/336/336c6bd63d83cf8e59937ab8895d1240.jpg",
      rating: 4.02,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 799, percent: 52.43 },
        { id: 5, title: "exceptional", count: 427, percent: 28.02 },
        { id: 3, title: "meh", count: 245, percent: 16.08 },
        { id: 1, title: "skip", count: 53, percent: 3.48 },
      ],
      ratings_count: 1505,
      reviews_text_count: 15,
      added: 5501,
      added_by_status: {
        yet: 311,
        owned: 3022,
        beaten: 1226,
        toplay: 378,
        dropped: 359,
        playing: 205,
      },
      metacritic: 81,
      playtime: 34,
      suggestions_count: 326,
      updated: "2019-09-17T04:25:53",
      user_game: null,
      reviews_count: 1524,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2017-10-27",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2017-10-27",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2017-10-27",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 5,
          name: "RPG",
          slug: "role-playing-games-rpg",
          games_count: 40449,
          image_background:
            "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg",
        },
      ],
      stores: [
        {
          id: 35024,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 35135,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 33078,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
      ],
      clip: null,
      tags: [],
      esrb_rating: { id: 4, name: "Mature", slug: "mature" },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/336/336c6bd63d83cf8e59937ab8895d1240.jpg",
        },
        {
          id: 269374,
          image:
            "https://media.rawg.io/media/screenshots/5c8/5c8c5889c81eb226b182e6df4018a29a.jpg",
        },
        {
          id: 269376,
          image:
            "https://media.rawg.io/media/screenshots/0cf/0cf5ed35a3906f32967cb476c11c5d49.jpg",
        },
        {
          id: 287526,
          image:
            "https://media.rawg.io/media/screenshots/313/3132876284966c4d055d752e7edc5509.jpg",
        },
        {
          id: 287529,
          image:
            "https://media.rawg.io/media/screenshots/b3f/b3fe4ade2ed930cbd8253269ff38ba28.jpg",
        },
        {
          id: 313977,
          image:
            "https://media.rawg.io/media/screenshots/2d7/2d7a5c1b08e5cc5bc7c371094376637c.jpg",
        },
        {
          id: 2408505,
          image:
            "https://media.rawg.io/media/screenshots/0a2/0a24d82ed3f2d35726d17e4c73593721.jpeg",
        },
      ],
    },
    {
      id: 998,
      slug: "battlefield-1",
      name: "Battlefield 1",
      released: "2016-10-21",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/998/9980c4296f311d8bcc5b451ca51e4fe1.jpg",
      rating: 3.8,
      rating_top: 4,
      ratings: [
        { id: 4, title: "recommended", count: 794, percent: 53.98 },
        { id: 3, title: "meh", count: 343, percent: 23.32 },
        { id: 5, title: "exceptional", count: 264, percent: 17.95 },
        { id: 1, title: "skip", count: 70, percent: 4.76 },
      ],
      ratings_count: 1463,
      reviews_text_count: 6,
      added: 5496,
      added_by_status: {
        yet: 159,
        owned: 3613,
        beaten: 913,
        toplay: 135,
        dropped: 530,
        playing: 146,
      },
      metacritic: 88,
      playtime: 5,
      suggestions_count: 621,
      updated: "2021-04-03T11:01:30",
      user_game: null,
      reviews_count: 1471,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6163,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          released_at: "2016-10-21",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 382164,
            image_background:
              "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          },
          released_at: "2016-10-21",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> 64-bit Windows 7, Windows 8.1 and Windows 10<br></li><li><strong>Processor:</strong> Processor (AMD): AMD FX-6350 Processor (Intel): Intel Core i5 6600K<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> Graphics card (AMD): AMD Radeon™ HD 7850 2GB Graphics card (NVIDIA): NVIDIA GeForce® GTX 660 2GB<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 50 GB available space</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> 64-bit Windows 10 or later<br></li><li><strong>Processor:</strong> Processor (AMD): AMD FX 8350 Wraith Processor (Intel): Intel Core i7 4790 or equivalent<br></li><li><strong>Memory:</strong> 16 GB RAM<br></li><li><strong>Graphics:</strong> Graphics card (AMD): AMD Radeon™ RX 480 4GB Graphics card (NVIDIA): NVIDIA GeForce® GTX 1060 3GB<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 50 GB available space</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5110,
            image_background:
              "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          },
          released_at: "2016-10-21",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        { platform: { id: 1, name: "PC", slug: "pc" } },
        { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
        { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 132653,
          image_background:
            "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        },
        {
          id: 2,
          name: "Shooter",
          slug: "shooter",
          games_count: 44689,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
      ],
      stores: [
        {
          id: 446695,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 56693,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
        },
        {
          id: 1021,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 7685,
            image_background:
              "https://media.rawg.io/media/games/e46/e462e92b46e8df13e78a806191610d47.jpg",
          },
        },
        {
          id: 9245,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4678,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 137292,
          image_background:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 23660,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 27875,
          image_background:
            "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 17087,
          image_background:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 10982,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3171,
          image_background:
            "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        },
        {
          id: 36,
          name: "Open World",
          slug: "open-world",
          language: "eng",
          games_count: 4350,
          image_background:
            "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 16508,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 30,
          name: "FPS",
          slug: "fps",
          language: "eng",
          games_count: 8853,
          image_background:
            "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
        },
        {
          id: 26,
          name: "Gore",
          slug: "gore",
          language: "eng",
          games_count: 4079,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        {
          id: 34,
          name: "Violent",
          slug: "violent",
          language: "eng",
          games_count: 4807,
          image_background:
            "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg",
        },
        {
          id: 70,
          name: "War",
          slug: "war",
          language: "eng",
          games_count: 7101,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 157,
          name: "PvP",
          slug: "pvp",
          language: "eng",
          games_count: 4579,
          image_background:
            "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg",
        },
        {
          id: 192,
          name: "Mature",
          slug: "mature",
          language: "eng",
          games_count: 1120,
          image_background:
            "https://media.rawg.io/media/games/f14/f1422eacab98c5f85a5123da4e9d9e89.jpg",
        },
        {
          id: 89,
          name: "Historical",
          slug: "historical",
          language: "eng",
          games_count: 1508,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 114,
          name: "Physics",
          slug: "physics",
          language: "eng",
          games_count: 14045,
          image_background:
            "https://media.rawg.io/media/screenshots/dc2/dc2814dc50d61be1ea4fcd5d3c03ddb6.jpg",
        },
        {
          id: 81,
          name: "Military",
          slug: "military",
          language: "eng",
          games_count: 788,
          image_background:
            "https://media.rawg.io/media/games/121/1213f8b9b0a26307e672cf51f34882f8.jpg",
        },
        {
          id: 406,
          name: "Story",
          slug: "story",
          language: "eng",
          games_count: 9372,
          image_background:
            "https://media.rawg.io/media/games/2ee/2eeed8524931b4fae1e4a40d0e5443b5.jpg",
        },
        {
          id: 51,
          name: "Destruction",
          slug: "destruction",
          language: "eng",
          games_count: 2725,
          image_background:
            "https://media.rawg.io/media/games/370/3703c683968a54f09630dcf03366ea35.jpg",
        },
        {
          id: 981,
          name: "battle",
          slug: "battle",
          language: "eng",
          games_count: 9377,
          image_background:
            "https://media.rawg.io/media/games/6b1/6b14dc4cc1785e396580c69165e55d2d.jpg",
        },
        {
          id: 40937,
          name: "Steam Trading Cards",
          slug: "steam-trading-cards-2",
          language: "eng",
          games_count: 248,
          image_background:
            "https://media.rawg.io/media/games/a50/a505bccdcfdc79970a93574c747f6e0d.jpg",
        },
        {
          id: 45878,
          name: "Online PvP",
          slug: "online-pvp",
          language: "eng",
          games_count: 1640,
          image_background:
            "https://media.rawg.io/media/games/377/3770f2c7020bcb6cc2072f073f27fb4c.jpg",
        },
        {
          id: 55,
          name: "Tanks",
          slug: "tanks",
          language: "eng",
          games_count: 2230,
          image_background:
            "https://media.rawg.io/media/screenshots/77a/77a693e4e0f25d6bd27de4afb9f55815.jpg",
        },
        {
          id: 1221,
          name: "history",
          slug: "history",
          language: "eng",
          games_count: 2026,
          image_background:
            "https://media.rawg.io/media/games/ba7/ba7e84d59dbdb2fab5b2c1368e3bdfa5.jpg",
        },
        {
          id: 894,
          name: "Classes",
          slug: "classes",
          language: "eng",
          games_count: 841,
          image_background:
            "https://media.rawg.io/media/screenshots/00b/00b3f1a5976cb4fd6f89ea0f68470d6e.jpg",
        },
        {
          id: 314,
          name: "World War I",
          slug: "world-war-i",
          language: "eng",
          games_count: 170,
          image_background:
            "https://media.rawg.io/media/screenshots/10e/10eba72f68018317e0d66c852296d4da_OHxvLcX.jpg",
        },
        {
          id: 5488,
          name: "tank",
          slug: "tank",
          language: "eng",
          games_count: 1169,
          image_background:
            "https://media.rawg.io/media/screenshots/a2f/a2fb4204bf5b8cd455ea3fa23227549c.jpg",
        },
        {
          id: 7452,
          name: "ww1",
          slug: "ww1",
          language: "eng",
          games_count: 21,
          image_background:
            "https://media.rawg.io/media/screenshots/312/312fa566f84837fe5b75544b0d226999.jpg",
        },
      ],
      esrb_rating: null,
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/998/9980c4296f311d8bcc5b451ca51e4fe1.jpg",
        },
        {
          id: 8798,
          image:
            "https://media.rawg.io/media/screenshots/27a/27a9c742a08434db6a977cc2429c366b.jpg",
        },
        {
          id: 8801,
          image:
            "https://media.rawg.io/media/screenshots/f46/f46d9deb7955215f387ea91657e77fac.jpg",
        },
        {
          id: 8802,
          image:
            "https://media.rawg.io/media/screenshots/735/73572f56fa1a583f574b4ee8919dd77e.jpg",
        },
        {
          id: 8804,
          image:
            "https://media.rawg.io/media/screenshots/31a/31a37c6951371300d4ae7f85bd7b4b88.jpg",
        },
        {
          id: 8806,
          image:
            "https://media.rawg.io/media/screenshots/278/2788384314e838a1f3c1aa8a3bfced38.jpg",
        },
        {
          id: 8808,
          image:
            "https://media.rawg.io/media/screenshots/e23/e238e91681ab9a80f363d82ad1f7caa3.jpg",
        },
      ],
    },
  ],
  seo_title: "All Games",
  seo_description: "",
  seo_keywords: "",
  seo_h1: "All Games",
  noindex: false,
  nofollow: false,
  description: "",
  filters: {
    years: [
      {
        from: 2020,
        to: 2021,
        filter: "2020-01-01,2021-12-31",
        decade: 2020,
        years: [
          { year: 2021, count: 148426, nofollow: false },
          { year: 2020, count: 132670, nofollow: false },
        ],
        nofollow: true,
        count: 281096,
      },
      {
        from: 2010,
        to: 2019,
        filter: "2010-01-01,2019-12-31",
        decade: 2010,
        years: [
          { year: 2019, count: 79537, nofollow: false },
          { year: 2018, count: 71389, nofollow: false },
          { year: 2017, count: 56400, nofollow: true },
          { year: 2016, count: 41229, nofollow: true },
          { year: 2015, count: 26357, nofollow: true },
          { year: 2014, count: 15546, nofollow: true },
          { year: 2013, count: 6271, nofollow: true },
          { year: 2012, count: 5310, nofollow: true },
          { year: 2011, count: 4246, nofollow: true },
          { year: 2010, count: 3816, nofollow: true },
        ],
        nofollow: true,
        count: 310101,
      },
      {
        from: 2000,
        to: 2009,
        filter: "2000-01-01,2009-12-31",
        decade: 2000,
        years: [
          { year: 2009, count: 3028, nofollow: true },
          { year: 2008, count: 1954, nofollow: true },
          { year: 2007, count: 1487, nofollow: true },
          { year: 2006, count: 1213, nofollow: true },
          { year: 2005, count: 1089, nofollow: true },
          { year: 2004, count: 1104, nofollow: true },
          { year: 2003, count: 1086, nofollow: true },
          { year: 2002, count: 948, nofollow: true },
          { year: 2001, count: 1069, nofollow: true },
          { year: 2000, count: 946, nofollow: true },
        ],
        nofollow: true,
        count: 13924,
      },
      {
        from: 1990,
        to: 1999,
        filter: "1990-01-01,1999-12-31",
        decade: 1990,
        years: [
          { year: 1999, count: 734, nofollow: true },
          { year: 1998, count: 673, nofollow: true },
          { year: 1997, count: 826, nofollow: true },
          { year: 1996, count: 699, nofollow: true },
          { year: 1995, count: 806, nofollow: true },
          { year: 1994, count: 757, nofollow: true },
          { year: 1993, count: 710, nofollow: true },
          { year: 1992, count: 619, nofollow: true },
          { year: 1991, count: 552, nofollow: true },
          { year: 1990, count: 510, nofollow: true },
        ],
        nofollow: true,
        count: 6886,
      },
      {
        from: 1980,
        to: 1989,
        filter: "1980-01-01,1989-12-31",
        decade: 1980,
        years: [
          { year: 1989, count: 408, nofollow: true },
          { year: 1988, count: 300, nofollow: true },
          { year: 1987, count: 327, nofollow: true },
          { year: 1986, count: 245, nofollow: true },
          { year: 1985, count: 223, nofollow: true },
          { year: 1984, count: 181, nofollow: true },
          { year: 1983, count: 203, nofollow: true },
          { year: 1982, count: 143, nofollow: true },
          { year: 1981, count: 64, nofollow: true },
          { year: 1980, count: 34, nofollow: true },
        ],
        nofollow: true,
        count: 2128,
      },
      {
        from: 1970,
        to: 1979,
        filter: "1970-01-01,1979-12-31",
        decade: 1970,
        years: [
          { year: 1979, count: 15, nofollow: true },
          { year: 1978, count: 17, nofollow: true },
          { year: 1977, count: 12, nofollow: true },
          { year: 1976, count: 7, nofollow: true },
          { year: 1975, count: 2, nofollow: true },
          { year: 1974, count: 1, nofollow: true },
          { year: 1973, count: 1, nofollow: true },
          { year: 1972, count: 2, nofollow: true },
          { year: 1971, count: 6, nofollow: true },
          { year: 1970, count: 1, nofollow: true },
        ],
        nofollow: true,
        count: 64,
      },
      {
        from: 1960,
        to: 1969,
        filter: "1960-01-01,1969-12-31",
        decade: 1960,
        years: [{ year: 1962, count: 1, nofollow: true }],
        nofollow: true,
        count: 1,
      },
      {
        from: 1950,
        to: 1959,
        filter: "1950-01-01,1959-12-31",
        decade: 1950,
        years: [{ year: 1957, count: 1, nofollow: true }],
        nofollow: true,
        count: 1,
      },
    ],
  },
  nofollow_collections: ["stores"],
};

// function Games() {

//   console.log(data.results.slug)

// }

// export default Games;
