# USER STORY #1

## 1. DESCRIPTION

As a user,
I want to customize a kart
so that I can see its final features.

## 2. ACCEPTANCE CRITERIA

### 2.1 FUNCTIONAL ACCEPTANCE CRITERIA

#### :pencil2: 42 [DRIVERS](https://www.mariowiki.com/Mario_Kart_8_Deluxe#Characters) should be available to be chosen
 
 1. Mario
 2. Luigi
 3. Peach
 4. Daisy
 5. Rosalina
 6. Tanooki Mario
 7. Cat Peach
 8. Yoshi
 9. Toad
10. Koopa Troopa
11. Shy Guy
12. Toadette
13. Lakitu
14. King Boo
15. Baby Mario
16. Baby Luigi
17. Baby Peach
18. Baby Daisy
19. Baby Rosalina
20. Metal Mario
21. Pink Gold Peach
22. Wario
23. Waluigi
24. Donkey Kong
25. Bowser
26. Dry Bones
27. Bowser Jr.
28. Dry Bowser
29. Lemmy
30. Larry
31. Wendy
32. Ludwig
33. Iggy
34. Roy
35. Morton
36. Inkling Girl
37. Inkling Boy
38. Link
39. Villager (boy)
40. Villager (girl)
41. Isabelle
42. Mii

#### :pencil2: 41 [BODY](https://www.mariowiki.com/Mario_Kart_8_Deluxe#Vehicle_parts) vehicles should be available to be chosen

*_Karts_ (23)*

 1. Standard Kart*
 2. Pipe Frame*
 3. Mach 8
 4. Steel Driver
 5. Cat Cruiser
 6. Circuit Special*
 7. Tri-Speeder
 8. Badwagon
 9. Prancer
10. Biddybuggy* / Buggybud
11. Landship**
12. Sneeker* / Bounder
13. Sports Coupe / Sports Coupé
14. Gold Standard / Gold Kart
15. GLA*
16. W 25 Silver Arrow
17. 300 SL Roadster
18. Blue Falcon
19. Tanooki Kart
20. B Dasher
21. Streetle
22. P-Wing
23. Koopa Clown** (DX)

*_Standard Bikes_ (7)*

24. Standard Bike*
25. The Duke
26. Flame Rider
27. Varmint
28. Mr. Scooty / Mr Scooty
29. City Tripper*
30. Master Cycle Zero (NEW)

*_Sport bikes_ (5)*

31. Comet
32. Sport Bike*
33. Jet Bike
34. Yoshi Bike
35. Master Cycle

*_ATVs_ (6)*

36. Standard ATV* / Standard Quad
37. Wild Wiggler
38. Teddy Buggy
39. Bone Rattler
40. Splat Buggy**** (NEW)
41. Inkstriker**** (NEW)

#### :pencil2: 22 [TIRES](https://www.mariowiki.com/Mario_Kart_8_Deluxe#Tires) should be available to be chosen

 1. Standard / Normal
 2. Monster
 3. Roller
 4. Slim
 5. Slick
 6. Metal
 7. Button
 8. Off-Road
 9. Sponge
10. Wood / Wooden
11. Cushion
12. Blue Standard / Normal Blue
13. Hot Monster / Funky Monster
14. Azure Roller
15. Crimson Slim
16. Cyber Slick
17. Retro Off-Road
18. Gold Tires / Gold Wheels
19. GLA Tires / GLA Wheels
20. Triforce Tires / Triforce Tyres
21. Leaf Tires/ Leaf Tyres
22. Ancient Tires (NEW) / Ancient Tyres

#### :pencil2: 15 [GLIDERS](https://www.mariowiki.com/Mario_Kart_8_Deluxe#Gliders) should be available to be chosen

 1. Bowser Kite
 2. Cloud Glider
 3. Flower Glider
 4. Gold Glider
 5. Hylian Kite
 6. MKTV Parafoil
 7. Paper Glider
 8. Parachute
 9. Parafoil
10. Paraglider
11. Peach Parasol
12. Plane Glider
13. Super Glider
14. Waddle Wing
15. Wario Wing

---

### 2.2 NON FUNCTIONAL ACCEPTANCE CRITERIA

#### :pencil2: Driver, Body, Tires and Glider of a kart should hold the following data

1. Speed
   - Ground speed
   - Water speed
   - Air speed
   - Anti-gravity speed
2. Acceleration
3. Weight
4. Handling
   - Ground handling
   - Water handling
   - Air handling
   - Anti-gravity handling
5. Grid
6. Mini-turbo

#### :pencil2: Driver should also hold the following data

- Size `available values = {Small, Medium, Large}`

*Example*

| Driver      | Size  |
|:-----------:|:-----:|
| *Dry Bones* | Small |

#### :pencil2: [KART STATS](https://www.mariowiki.com/Mario_Kart_8_Deluxe#Drivers.27_and_vehicle_parts.27_statistics) are calculated by the following way

- `Features = {Speed, Acceleration, Weight, Handling, Grid, Mini-turbo}`
- `0 <= Feature <= 10`
- `Level(feature) = Driver feature + Kart feature + Tires feature + Glider feature`
- `Speed = (Ground speed + Water speed + Air speed + Anti-gravity speed) / 4`
- `Handling = (Ground Handling + Water Handling + Air Handling + Anti-gravity Handling) / 4`
- `Screen(feature) = (Level(feature) + 3) / 4`

**Example**

*Kart stats*

|                    | Driver      | Body          | Tires            | Glider         | _*Level*_ | _*Screen*_ |
| ------------------:|:-----------:|:-------------:|:----------------:|:--------------:|:---------:|:----------:|
| _***Name***_       | *Dry Bones* | *Flame Rider* | *Standard Tires* | *Super Glider* |           |            |
| **Speed**          |      1      |       2       |         2        |        1       |   **6**   | **2.25**   |
| **Acceleration**   |      5      |       5       |         4        |        1       |  **15**   | **4.5**    |
| **Weight**         |      1      |       1       |         2        |        1       |   **5**   | **2**      |
| **Handling**       |      8      |       4       |         3        |        1       |  **16**   | **4.75**   |
| **Grid**           |      4      |       5       |         5        |        1       |  **15**   | **4.5**    |
| **Mini-turbo**     |      4      |       5       |         3        |        1       |  **13**   |   ---      |

*Speed average*

| *Speed*          | Driver      | Body          | Tires            | Glider         |
|:----------------:|:-----------:|:-------------:|:----------------:|:--------------:|
| **Name**         | *Dry Bones* | *Flame Rider* | *Standard Tires* | *Super Glider* |
| **Ground**       |      1      |       2       |        2         |       1        |
| **Water**        |      1      |       2       |        3         |       1        |
| **Air**          |      1      |       3       |        3         |       2        |
| **Anti-gravity** |      1      |       4       |        2         |       0        |
| _***Level***_    |    **4**    |    **11**     |     **10**       |     **4**      |
| _***Average***_  |    **1**    |     **2.75**  |      **2.5**     |     **1**      |

*Handling average*

| *Handling*       | Driver      | Body          | Tires            | Glider         |
|:----------------:|:-----------:|:-------------:|:----------------:|:--------------:|
| **Name**         | *Dry Bones* | *Flame Rider* | *Standard Tires* | *Super Glider* |
| **Ground**       |      8      |       4       |        3         |       1        |
| **Water**        |      8      |       3       |        3         |       0        |
| **Air**          |      8      |       3       |        3         |       1        |
| **Anti-gravity** |      8      |       4       |        3         |       1        |
| _***Level***_    |   **32**    |    **14**     |     **12**       |     **3**      |
| _***Average***_  |    **8**    |     **3.5**   |      **3**       |     **0.75**   |

[Source](https://www.mariowiki.com/Mario_Kart_8_Deluxe)
