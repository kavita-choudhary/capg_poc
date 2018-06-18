import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[]=[{
      id:1, first:"abc", last:"xyz",email:"abc@xyz.com",address:"abc strret",created:'somedat',balance:"$123"},
      {id:2, first:"abc", last:"xyz",email:"abc@xyz.com",address:"abc strret",created:'some',balance:"$123"
    }]
    //  const usersa: User[] = [
    //   {"first":"Josue","last":"Mayert","email":"Josue.Mayert@jovani.name","address":"920 Kieran Rest","created":"May 7, 2009","balance":"$4,103.92"},{"first":"Lauriane","last":"Heathcote","email":"Lauriane.Heathcote@lauretta.info","address":"45417 Lorena Drives","created":"September 22, 2010","balance":"$4,156.99"},{"first":"Joseph","last":"Bergstrom","email":"yellowgiraffe23@gmail.com","address":"58102 Lyric Shore","created":"January 12, 2009","balance":"$1,372.20"},{"first":"Beverly","last":"Bernhard","email":"redgiraffe76@gmail.com","address":"307 Kennith Bridge","created":"February 3, 2018","balance":"$1,833.08"},{"first":"Telly","last":"Jerde","email":"Telly.Jerde@ward.com","address":"90465 Ratke Common","created":"July 2, 2012","balance":"$1,827.25"},{"first":"Blake","last":"Jones","email":"Blake.Jones@roel.net","address":"0295 Rohan Junctions","created":"February 1, 2018","balance":"$2,246.30"},{"first":"Myrl","last":"Leuschke","email":"olivefrog16@gmail.com","address":"91690 River Radial","created":"June 22, 2010","balance":"$6,712.32"},{"first":"Matt","last":"Witting","email":"Matt.Witting@harrison.name","address":"0143 Cyrus Grove","created":"June 24, 2017","balance":"$589.10"},{"first":"Adolph","last":"Lakin","email":"Adolph.Lakin@vida.name","address":"55267 Westley Summit","created":"March 7, 2011","balance":"$3,289.94"},{"first":"Oral","last":"Bauch","email":"maroonsquirrel17@gmail.com","address":"643 Rosetta Hill","created":"March 26, 2011","balance":"$7,552.35"},{"first":"Declan","last":"Gaylord","email":"Declan.Gaylord@jaclyn.biz","address":"420 Darrin Fort","created":"August 25, 2013","balance":"$8,814.18"},{"first":"Noemi","last":"Hegmann","email":"Noemi.Hegmann@trever.name","address":"496 Nitzsche Hills","created":"July 11, 2017","balance":"$3,366.30"},{"first":"Darlene","last":"Rohan","email":"Darlene.Rohan@jaqueline.net","address":"76953 Emmerich Roads","created":"March 26, 2014","balance":"$1,336.54"},{"first":"Garnet","last":"Kuhn","email":"cyanwolf66@gmail.com","address":"435 McCullough Vista","created":"April 11, 2017","balance":"$4,765.87"},{"first":"Emmitt","last":"Crona","email":"Emmitt.Crona@boris.name","address":"374 Jones Isle","created":"May 13, 2013","balance":"$8,329.23"},{"first":"Juwan","last":"Koelpin","email":"Juwan.Koelpin@arturo.com","address":"490 Hyatt Rapids","created":"September 15, 2011","balance":"$6,223.47"},{"first":"Alayna","last":"Davis","email":"Alayna.Davis@america.name","address":"5962 Dedrick Knolls","created":"April 2, 2012","balance":"$5,906.67"},{"first":"Violette","last":"Monahan","email":"magentaturtle87@gmail.com","address":"0816 Rolfson Walk","created":"March 9, 2010","balance":"$5,461.22"},{"first":"Maeve","last":"Langosh","email":"Maeve.Langosh@alyson.org","address":"7189 Celestine Field","created":"January 31, 2017","balance":"$3,651.97"},{"first":"Vella","last":"Luettgen","email":"mintgreenturtle21@gmail.com","address":"51996 Marisa Route","created":"March 5, 2015","balance":"$5,265.52"},{"first":"Kristina","last":"Cole","email":"Kristina.Cole@kaitlyn.net","address":"2122 Johnson Branch","created":"February 19, 2012","balance":"$8,559.83"},{"first":"Jeff","last":"Krajcik","email":"Jeff.Krajcik@hoyt.info","address":"590 Abernathy Dam","created":"August 19, 2017","balance":"$1,676.65"},{"first":"Cleveland","last":"Halvorson","email":"Cleveland.Halvorson@simone.org","address":"177 Carlo Islands","created":"March 16, 2016","balance":"$7,283.06"},{"first":"Gerda","last":"Gutmann","email":"Gerda.Gutmann@zachariah.biz","address":"37510 Bayer Courts","created":"September 23, 2017","balance":"$1,702.71"},{"first":"Tyra","last":"Ritchie","email":"Tyra.Ritchie@anais.com","address":"796 Kenny Pine","created":"May 21, 2009","balance":"$5,102.39"},{"first":"Javier","last":"Ullrich","email":"Javier.Ullrich@ashtyn.biz","address":"9829 Doug Green","created":"May 5, 2017","balance":"$3,131.54"},{"first":"Monty","last":"Hamill","email":"Monty.Hamill@randall.biz","address":"5656 Russell Green","created":"November 17, 2017","balance":"$6,135.05"},{"first":"Jacklyn","last":"Gleason","email":"Jacklyn.Gleason@mavis.org","address":"8050 Emilio Orchard","created":"March 18, 2013","balance":"$1,573.80"},{"first":"Willa","last":"Steuber","email":"whiterabbit58@gmail.com","address":"764 Schmitt Stravenue","created":"December 7, 2009","balance":"$6,516.21"},{"first":"Nash","last":"Quitzon","email":"redwolf98@gmail.com","address":"090 Patience Circle","created":"December 19, 2012","balance":"$827.36"},{"first":"Annamarie","last":"McKenzie","email":"orchidgiraffe88@gmail.com","address":"2115 Effertz Hill","created":"September 15, 2008","balance":"$7,135.91"},{"first":"Brandon","last":"Boyer","email":"Brandon.Boyer@frederik.org","address":"9014 Aylin Curve","created":"April 17, 2009","balance":"$4,497.18"},{"first":"Jewel","last":"Harris","email":"Jewel.Harris@claudine.info","address":"7302 Fausto Viaduct","created":"December 2, 2008","balance":"$1,647.10"},{"first":"Ora","last":"Frami","email":"Ora.Frami@roel.info","address":"1898 Hahn Coves","created":"September 19, 2015","balance":"$6,771.17"},{"first":"Glen","last":"Mann","email":"magentasquirrel03@gmail.com","address":"94918 Dovie Inlet","created":"July 11, 2014","balance":"$8,146.84"},{"first":"Yasmeen","last":"Larkin","email":"Yasmeen.Larkin@albina.net","address":"16984 Green Field","created":"March 4, 2009","balance":"$3,916.84"},{"first":"Warren","last":"Lubowitz","email":"silversquirrel94@gmail.com","address":"9657 Alia Spur","created":"November 3, 2011","balance":"$3,676.55"},{"first":"Amani","last":"Spencer","email":"magentarabbit45@gmail.com","address":"086 Ramiro Trail","created":"October 13, 2014","balance":"$3,559.34"},{"first":"Sincere","last":"Block","email":"Sincere.Block@marisol.biz","address":"04545 Emmerich Inlet","created":"August 16, 2014","balance":"$1,940.15"},{"first":"August","last":"Nienow","email":"August.Nienow@marquis.info","address":"22474 O'Reilly Lodge","created":"June 15, 2009","balance":"$7,214.70"},{"first":"Bonita","last":"Borer","email":"Bonita.Borer@andy.name","address":"94486 Kimberly Villages","created":"October 6, 2010","balance":"$6,934.50"},{"first":"April","last":"Doyle","email":"April.Doyle@ludwig.info","address":"8176 Demario Harbors","created":"May 21, 2013","balance":"$3,722.02"},{"first":"Jerad","last":"Harris","email":"Jerad.Harris@milford.info","address":"459 Elena Ridges","created":"May 26, 2010","balance":"$601.45"},{"first":"Lorenza","last":"Bins","email":"bluegiraffe31@gmail.com","address":"8220 Arlo Harbors","created":"January 30, 2011","balance":"$6,641.95"},{"first":"Miguel","last":"Jerde","email":"olivegiraffe10@gmail.com","address":"295 Spencer Pines","created":"September 21, 2017","balance":"$978.81"},{"first":"Clara","last":"Wiza","email":"Clara.Wiza@jacklyn.org","address":"328 Spencer Key","created":"September 17, 2012","balance":"$3,765.30"},{"first":"Braden","last":"Lueilwitz","email":"indigowolf93@gmail.com","address":"38111 Rogahn Stravenue","created":"December 24, 2016","balance":"$7,755.74"},{"first":"Derick","last":"Will","email":"whitegiraffe16@gmail.com","address":"3812 Kellie Bypass","created":"November 9, 2016","balance":"$3,662.97"},{"first":"Lavonne","last":"Douglas","email":"Lavonne.Douglas@hadley.org","address":"8023 Block Islands","created":"May 19, 2013","balance":"$4,505.91"},{"first":"Theodore","last":"Moen","email":"Theodore.Moen@jovani.name","address":"9766 Mona Loaf","created":"July 10, 2017","balance":"$3,793.41"},{"first":"Mary","last":"Romaguera","email":"limefrog47@gmail.com","address":"36697 Roberts Harbor","created":"November 10, 2013","balance":"$1,185.38"},{"first":"Joel","last":"Stiedemann","email":"Joel.Stiedemann@howard.com","address":"76391 Ryan Turnpike","created":"January 4, 2012","balance":"$4,670.92"},{"first":"Elvera","last":"Daniel","email":"Elvera.Daniel@christ.org","address":"219 Effertz Throughway","created":"September 15, 2014","balance":"$4,083.39"},{"first":"Kylie","last":"Rodriguez","email":"turquoisegiraffe62@gmail.com","address":"809 Quitzon Shoal","created":"September 26, 2017","balance":"$5,744.78"},{"first":"Kiarra","last":"Halvorson","email":"silverfrog31@gmail.com","address":"67083 Miles Port","created":"August 21, 2011","balance":"$151.10"},{"first":"Connor","last":"Carter","email":"fuchsiawolf58@gmail.com","address":"61856 Schroeder Drive","created":"October 27, 2010","balance":"$1,751.60"},{"first":"Sonia","last":"McKenzie","email":"Sonia.McKenzie@jay.com","address":"72012 Rodriguez Skyway","created":"April 20, 2013","balance":"$6,502.16"},{"first":"Giles","last":"Bins","email":"Giles.Bins@pierce.biz","address":"7684 Crawford Shoal","created":"August 12, 2010","balance":"$388.60"},{"first":"Robb","last":"Pouros","email":"Robb.Pouros@henry.name","address":"686 Rutherford Port","created":"May 30, 2014","balance":"$6,518.52"},{"first":"Bo","last":"Johnson","email":"Bo.Johnson@shakira.com","address":"436 Casper Stravenue","created":"December 12, 2013","balance":"$9,239.72"},{"first":"Andreanne","last":"Larkin","email":"Andreanne.Larkin@lonie.info","address":"93032 Thompson Lights","created":"September 16, 2017","balance":"$8,815.07"},{"first":"Destin","last":"Senger","email":"Destin.Senger@mittie.net","address":"08504 Ines Extensions","created":"November 27, 2013","balance":"$8,678.88"},{"first":"Ed","last":"Treutel","email":"greenturtle72@gmail.com","address":"469 VonRueden Spur","created":"October 9, 2014","balance":"$7,905.09"},{"first":"Destini","last":"Walsh","email":"skybluewolf23@gmail.com","address":"19601 O'Conner Mill","created":"November 21, 2012","balance":"$8,646.32"},{"first":"Roman","last":"Spinka","email":"Roman.Spinka@princess.com","address":"4407 Jacobs Gardens","created":"May 20, 2015","balance":"$3,930.40"},{"first":"Abe","last":"Walsh","email":"Abe.Walsh@casey.info","address":"2335 Bartoletti Lodge","created":"July 5, 2013","balance":"$3,084.44"},{"first":"Stacey","last":"Windler","email":"greyrabbit25@gmail.com","address":"920 Carroll Station","created":"January 31, 2011","balance":"$5,515.61"},{"first":"Irving","last":"Larkin","email":"silverrabbit03@gmail.com","address":"7607 Rau Forge","created":"June 9, 2016","balance":"$596.77"},{"first":"Kevon","last":"Morissette","email":"Kevon.Morissette@kathlyn.info","address":"368 Reagan Square","created":"February 19, 2016","balance":"$7,115.89"},{"first":"Edgardo","last":"Rath","email":"Edgardo.Rath@adan.name","address":"663 Hoeger Fork","created":"October 1, 2008","balance":"$2,890.30"},{"first":"Pat","last":"Hilll","email":"Pat.Hilll@jazlyn.com","address":"8713 Devante Court","created":"April 28, 2014","balance":"$2,627.02"},{"first":"Roslyn","last":"Mertz","email":"Roslyn.Mertz@juliet.biz","address":"03089 Farrell Radial","created":"January 17, 2009","balance":"$820.19"},{"first":"Elwyn","last":"Schumm","email":"purplerabbit44@gmail.com","address":"375 Gerard Motorway","created":"December 10, 2016","balance":"$7,911.86"},{"first":"Karine","last":"Keebler","email":"fuchsiaturtle70@gmail.com","address":"62431 Bruen Extensions","created":"February 21, 2012","balance":"$5,572.30"},{"first":"Elena","last":"Streich","email":"plumturtle07@gmail.com","address":"781 Wyman Forks","created":"June 6, 2015","balance":"$3,273.64"}
    //
    // ];
    return {users};
  }
}
